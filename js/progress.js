/* ==========================================================================
   QURRA I'rab — Progress persistence (QIProgress)

   Owns ALL localStorage reads/writes. No other module touches
   localStorage directly. Per-device only: no backend, no account, no
   sync (per the approved technical-scope decision).

   ProgressRecord shape (one per exercise attempt, keyed by
   "<lessonId>:<exerciseId>"):
     {
       lessonId: number,
       exerciseId: string,
       selected: any,        // raw answer the learner submitted
                              // (string value, or {field: value, ...} object)
       correct: boolean,
       timestamp: string      // ISO 8601
     }

   Lesson completion is a separate, smaller map: { [lessonId]: timestamp }.
   A lesson is marked complete by the lesson engine once its independent
   exercise has been attempted (see lessonEngine.js) — v1 does not require
   a correct answer to mark completion, since the goal of the pilot is to
   demonstrate the full loop, not to gate progress on mastery.

   Storage key is versioned (":v1") so a future schema change can migrate
   or discard old data cleanly instead of crashing on read.
   ========================================================================== */

(function (global) {
  "use strict";

  var STORAGE_KEY = "qurra-irab:progress:v1";

  function defaultState() {
    return {
      version: 1,
      exercises: {},      // "<lessonId>:<exerciseId>" -> ProgressRecord
      lessonsCompleted: {} // lessonId -> ISO timestamp
    };
  }

  function load() {
    try {
      var raw = global.localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return defaultState();
      // Defensive merge in case a future version adds fields this code
      // doesn't know about yet, or an older record is missing one.
      var state = defaultState();
      state.exercises = parsed.exercises || {};
      state.lessonsCompleted = parsed.lessonsCompleted || {};
      return state;
    } catch (err) {
      // Corrupt or inaccessible storage (private browsing, quota, etc.)
      // must never crash the app — fall back to an empty, working state.
      return defaultState();
    }
  }

  function save(state) {
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (err) {
      return false;
    }
  }

  function exerciseKey(lessonId, exerciseId) {
    return lessonId + ":" + exerciseId;
  }

  function recordExercise(lessonId, exerciseId, selected, correct) {
    var state = load();
    state.exercises[exerciseKey(lessonId, exerciseId)] = {
      lessonId: lessonId,
      exerciseId: exerciseId,
      selected: selected,
      correct: !!correct,
      timestamp: new Date().toISOString()
    };
    return save(state);
  }

  function getExerciseResult(lessonId, exerciseId) {
    var state = load();
    return state.exercises[exerciseKey(lessonId, exerciseId)] || null;
  }

  function markLessonComplete(lessonId) {
    var state = load();
    if (!state.lessonsCompleted[lessonId]) {
      state.lessonsCompleted[lessonId] = new Date().toISOString();
      save(state);
    }
    return true;
  }

  function isLessonComplete(lessonId) {
    var state = load();
    return !!state.lessonsCompleted[lessonId];
  }

  function getLessonStats(lessonId, exerciseIds) {
    var state = load();
    var attempted = 0, correct = 0;
    (exerciseIds || []).forEach(function (id) {
      var rec = state.exercises[exerciseKey(lessonId, id)];
      if (rec) {
        attempted++;
        if (rec.correct) correct++;
      }
    });
    return { attempted: attempted, correct: correct, total: (exerciseIds || []).length };
  }

  // Every chapter in the curriculum is open from the start: availability is
  // independent of completion. A chapter's `prereq` list is kept in the data
  // as advisory sequencing information ("this lesson assumes those"), but it
  // no longer gates access. Unknown chapter ids are still not openable.
  function isChapterUnlocked(chapterId, curriculum) {
    return curriculum.some(function (c) { return c.id === chapterId; });
  }

  function getOverallStats(curriculum) {
    var state = load();
    var lessonsAvailable = curriculum.filter(function (c) { return c.hasLesson; }).length;
    var lessonsCompleted = Object.keys(state.lessonsCompleted).length;
    return {
      totalChapters: curriculum.length,
      lessonsAvailable: lessonsAvailable,
      lessonsCompleted: lessonsCompleted,
      percentOfAvailable: lessonsAvailable === 0 ? 0 : Math.round((lessonsCompleted / lessonsAvailable) * 100)
    };
  }

  function reset() {
    try {
      global.localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (err) {
      return false;
    }
  }

  global.QIProgress = {
    recordExercise: recordExercise,
    getExerciseResult: getExerciseResult,
    markLessonComplete: markLessonComplete,
    isLessonComplete: isLessonComplete,
    getLessonStats: getLessonStats,
    isChapterUnlocked: isChapterUnlocked,
    getOverallStats: getOverallStats,
    reset: reset
  };

})(window);
