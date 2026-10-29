/* ==========================================================================
   QURRA I'rab — English UI-chrome strings (QI_EN)

   This file translates interface CHROME only (nav labels, buttons,
   headings, feedback messages). It never translates Arabic grammatical
   terminology or source text — that terminology-preservation rule is
   deliberate (see the QURRA I'rab planning document) and applies equally
   to lesson content in lessonData.js, which is bilingual EN/MS at the
   field level and does not go through this dictionary at all.
   ========================================================================== */

var QI_EN = {
  // -- global / nav --
  "app.title": "QURRA I‘rab",
  "nav.dashboard": "Home",
  "nav.curriculum": "Curriculum",
  "nav.progress": "Progress",
  "nav.langSwitch": "Language",

  // -- dashboard --
  "dashboard.welcomeTitle": "Welcome back",
  "dashboard.subtitle": "Learn Arabic i‘rab (grammatical case analysis) chapter by chapter, grounded in a classical reference text.",
  "dashboard.continueLabel": "Continue learning",
  "dashboard.statsChapters": "Chapters mapped",
  "dashboard.statsLessonsAvailable": "Lessons available",
  "dashboard.statsLessonsCompleted": "Lessons completed",
  "dashboard.browseCurriculum": "Browse full curriculum",
  "dashboard.aboutSourceTitle": "About the source",
  "dashboard.aboutSourceBody": "Content is drawn from “Marji‘ al-Tullab fi al-I‘rab” (مرجع الطلاب في الإعراب), a 48-chapter classical reference. All 48 chapters have been audited and mapped; full lesson content currently exists for 3 pilot chapters, with the rest clearly marked as not yet built — nothing here is invented.",
  "dashboard.noLessonsYetTitle": "Start with the pilot lessons",
  "dashboard.noLessonsYetBody": "Three chapters currently have full lessons. Open the curriculum to begin.",
  "dashboard.progressOverviewLabel": "Curriculum progress",
  "dashboard.chaptersBuiltLabel": "Chapters built",
  "dashboard.recommendNextLabel": "Recommended next:",
  "dashboard.recommendNextCta": "Continue",
  "dashboard.heroEyebrow": "Arabic grammar · Classical text",
  "dashboard.heroTitle": "Master Arabic i‘rab",
  "dashboard.heroSubtitle": "Study classical grammatical analysis, one chapter at a time.",
  "dashboard.heroCaption": "A classical path to deeper understanding",
  "dashboard.journeyTitle": "Your learning journey",
  "dashboard.browseShort": "Browse curriculum",
  "dashboard.exploreAll": "Explore all {n} chapters",
  "dashboard.allLessonsLabel": "All lessons",

  // -- curriculum browser --
  "curriculum.pageTitle": "Curriculum",
  "curriculum.pageIntro": "All 48 chapters of the source book, grouped into a prerequisite-based learning pathway. Chapters without a built lesson yet are shown honestly as not available — you can still see where they sit in the sequence.",
  "curriculum.tierLabel": "Tier",
  "curriculum.openLesson": "Open lesson",
  "curriculum.viewChapter": "View chapter",
  "curriculum.notBuiltYet": "Not yet available",
  "curriculum.lockedNotice": "Complete the prerequisite lesson(s) first",
  "curriculum.pdfPagesLabel": "PDF pp.",

  // -- progress page --
  "progress.pageTitle": "Your progress",
  "progress.overallLabel": "Overall",
  "progress.lessonsCompletedLabel": "Lessons completed",
  "progress.noProgressYet": "You haven’t completed any lessons yet. Open the curriculum to get started.",
  "progress.resetButton": "Reset progress on this device",
  "progress.resetConfirm": "This will erase all saved progress on this device. This cannot be undone. Continue?",
  "progress.resetDone": "Progress has been reset.",
  "progress.storedLocallyNote": "Progress is stored only on this device (in your browser). There is no account or sync.",

  // -- common --
  "common.backToDashboard": "Back to dashboard",
  "common.backToCurriculum": "Back to curriculum",
  "common.chapterNotFound": "Chapter not found.",

  // -- lesson engine (overrides lessonEngine.js fallback) --
  "lesson.chapterLabel": "Chapter",
  "lesson.placeholderTitle": "This lesson has not been built yet.",
  "lesson.conceptLabel": "Concept",
  "lesson.ruleLabel": "Rule",
  "lesson.exampleLabel": "Worked example",
  "lesson.walkthroughLabel": "Word-by-word walkthrough",
  "lesson.revealNextWord": "Reveal next word",
  "lesson.dualAnalysisTitle": "The source documents more than one valid reading",
  "lesson.completionLabel": "Completion check",
  "lesson.lessonCompleteBadge": "Lesson complete",
  "lesson.sourceLabel": "Source",
  "lesson.irabArLabel": "I'rab in Arabic, as written in the book",
  "lesson.pdfPagesLabel": "PDF pp.",
  "lesson.exercisesProgressLabel": "Exercises completed",
  "lesson.readingOneLabel": "Reading 1",
  "lesson.readingOneHint": "See the word-by-word analysis above.",
  "lesson.readingTwoLabel": "Reading 2",
  "label.sourceDerived": "Simplified from source",
  "label.sourceExample": "Transcribed from source",
  "label.newExample": "New example (not in source)",
  "label.needsReview": "Needs teacher review",
  "label.placeholder": "Not yet built",

  // -- exercise engine (overrides exerciseEngine.js fallback) --
  "exercise.submit": "Check answer",
  "exercise.retry": "Try again",
  "exercise.correct": "Correct!",
  "exercise.incorrect": "Not quite — see the explanation below.",
  "exercise.selectPrompt": "Select an answer to continue.",
  "exercise.guidedLabel": "Guided practice",
  "exercise.independentLabel": "Independent practice",
  "exercise.whyLabel": "Why"
};

if (typeof module !== "undefined") module.exports = QI_EN;
