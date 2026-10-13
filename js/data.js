/* ==========================================================================
   QURRA I'rab — Data repository (QIData)

   A thin, read-only join layer over the two raw data files
   (curriculum.js's QITiers/QICurriculum and lessonData.js's QILessons).
   render.js and the engines go through this instead of touching those
   globals directly, so if the data later moves (e.g. split into one
   JSON file per chapter for easier maintenance — see ROADMAP.md) only
   this file needs to change.
   ========================================================================== */

(function (global) {
  "use strict";

  function getTiers() {
    return global.QITiers.slice();
  }

  function getAllChapters() {
    return global.QICurriculum.slice();
  }

  function getChapter(id) {
    var numId = Number(id);
    return global.QICurriculum.filter(function (c) { return c.id === numId; })[0] || null;
  }

  function getChaptersByTier(tierId) {
    return global.QICurriculum.filter(function (c) { return c.tier === Number(tierId); });
  }

  function getLesson(chapterId) {
    return global.QILessons[Number(chapterId)] || null;
  }

  function hasLesson(chapterId) {
    var chapter = getChapter(chapterId);
    return !!(chapter && chapter.hasLesson);
  }

  function isUnlocked(chapterId) {
    if (!global.QIProgress) return true;
    return global.QIProgress.isChapterUnlocked(Number(chapterId), global.QICurriculum);
  }

  function getBuiltChapters() {
    return global.QICurriculum.filter(function (c) { return c.hasLesson; });
  }

  global.QIData = {
    getTiers: getTiers,
    getAllChapters: getAllChapters,
    getChapter: getChapter,
    getChaptersByTier: getChaptersByTier,
    getLesson: getLesson,
    hasLesson: hasLesson,
    isUnlocked: isUnlocked,
    getBuiltChapters: getBuiltChapters
  };

})(window);
