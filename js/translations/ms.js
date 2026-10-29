/* ==========================================================================
   QURRA I'rab — Bahasa Melayu UI-chrome strings (QI_MS)

   Mirrors en.js key-for-key. Interface chrome only — Arabic grammatical
   terminology and source text are never translated (see en.js header).
   ========================================================================== */

var QI_MS = {
  // -- global / nav --
  "app.title": "QURRA I‘rab",
  "nav.dashboard": "Utama",
  "nav.curriculum": "Kurikulum",
  "nav.progress": "Kemajuan",
  "nav.langSwitch": "Bahasa",

  // -- dashboard --
  "dashboard.welcomeTitle": "Selamat kembali",
  "dashboard.subtitle": "Belajar i‘rab bahasa Arab (analisis kes nahu) bab demi bab, berdasarkan teks rujukan klasik.",
  "dashboard.continueLabel": "Teruskan belajar",
  "dashboard.statsChapters": "Bab dipetakan",
  "dashboard.statsLessonsAvailable": "Pelajaran tersedia",
  "dashboard.statsLessonsCompleted": "Pelajaran selesai",
  "dashboard.browseCurriculum": "Lihat kurikulum penuh",
  "dashboard.aboutSourceTitle": "Tentang sumber",
  "dashboard.aboutSourceBody": "Kandungan diambil daripada “Marji‘ al-Tullab fi al-I‘rab” (مرجع الطلاب في الإعراب), rujukan klasik 48 bab. Semua 48 bab telah diaudit dan dipetakan; kandungan pelajaran penuh kini wujud untuk 3 bab perintis, dan selebihnya ditandakan secara jujur sebagai belum dibina — tiada apa di sini direka.",
  "dashboard.noLessonsYetTitle": "Mulakan dengan pelajaran perintis",
  "dashboard.noLessonsYetBody": "Tiga bab kini mempunyai pelajaran penuh. Buka kurikulum untuk bermula.",
  "dashboard.progressOverviewLabel": "Kemajuan kurikulum",
  "dashboard.chaptersBuiltLabel": "Bab dibina",
  "dashboard.recommendNextLabel": "Disyorkan seterusnya:",
  "dashboard.recommendNextCta": "Teruskan",
  "dashboard.heroEyebrow": "Tatabahasa Arab · Teks klasik",
  "dashboard.heroTitle": "Kuasai i‘rab bahasa Arab",
  "dashboard.heroSubtitle": "Pelajari analisis tatabahasa klasik, satu bab pada satu masa.",
  "dashboard.heroCaption": "Laluan klasik ke pemahaman yang lebih mendalam",
  "dashboard.journeyTitle": "Perjalanan pembelajaran anda",
  "dashboard.browseShort": "Lihat kurikulum",
  "dashboard.exploreAll": "Terokai semua {n} bab",
  "dashboard.allLessonsLabel": "Semua pelajaran",

  // -- curriculum browser --
  "curriculum.pageTitle": "Kurikulum",
  "curriculum.pageIntro": "Semua 48 bab buku sumber, dikumpulkan mengikut laluan pembelajaran berasaskan prasyarat. Bab yang belum mempunyai pelajaran dipaparkan secara jujur sebagai belum tersedia — anda masih boleh melihat kedudukannya dalam urutan.",
  "curriculum.tierLabel": "Tingkat",
  "curriculum.openLesson": "Buka pelajaran",
  "curriculum.viewChapter": "Lihat bab",
  "curriculum.notBuiltYet": "Belum tersedia",
  "curriculum.lockedNotice": "Selesaikan pelajaran prasyarat dahulu",
  "curriculum.pdfPagesLabel": "ms. PDF",

  // -- progress page --
  "progress.pageTitle": "Kemajuan anda",
  "progress.overallLabel": "Keseluruhan",
  "progress.lessonsCompletedLabel": "Pelajaran selesai",
  "progress.noProgressYet": "Anda belum menyelesaikan sebarang pelajaran. Buka kurikulum untuk bermula.",
  "progress.resetButton": "Set semula kemajuan pada peranti ini",
  "progress.resetConfirm": "Ini akan memadamkan semua kemajuan yang disimpan pada peranti ini. Tindakan ini tidak boleh dibatalkan. Teruskan?",
  "progress.resetDone": "Kemajuan telah diset semula.",
  "progress.storedLocallyNote": "Kemajuan hanya disimpan pada peranti ini (dalam pelayar anda). Tiada akaun atau penyegerakan.",

  // -- common --
  "common.backToDashboard": "Kembali ke papan pemuka",
  "common.backToCurriculum": "Kembali ke kurikulum",
  "common.chapterNotFound": "Bab tidak ditemui.",

  // -- lesson engine (overrides lessonEngine.js fallback) --
  "lesson.chapterLabel": "Bab",
  "lesson.placeholderTitle": "Pelajaran ini belum dibina.",
  "lesson.conceptLabel": "Konsep",
  "lesson.ruleLabel": "Kaedah",
  "lesson.exampleLabel": "Contoh kerja",
  "lesson.walkthroughLabel": "Jalan kerja perkataan demi perkataan",
  "lesson.revealNextWord": "Dedah perkataan seterusnya",
  "lesson.dualAnalysisTitle": "Sumber mendokumenkan lebih daripada satu bacaan yang sah",
  "lesson.readingOneLabel": "Bacaan 1",
  "lesson.readingOneHint": "Lihat analisis perkataan demi perkataan di atas.",
  "lesson.readingTwoLabel": "Bacaan 2",
  "lesson.exercisesProgressLabel": "Latihan selesai",
  "lesson.completionLabel": "Semakan penyempurnaan",
  "lesson.lessonCompleteBadge": "Pelajaran selesai",
  "lesson.sourceLabel": "Sumber",
  "lesson.irabArLabel": "I'rab dalam bahasa Arab, seperti tertulis dalam buku",
  "lesson.pdfPagesLabel": "ms. PDF",
  "label.sourceDerived": "Diringkaskan daripada sumber",
  "label.sourceExample": "Ditranskripsi daripada sumber",
  "label.newExample": "Contoh baharu (bukan daripada sumber)",
  "label.needsReview": "Perlu semakan guru",
  "label.placeholder": "Belum dibina",

  // -- exercise engine (overrides exerciseEngine.js fallback) --
  "exercise.submit": "Semak jawapan",
  "exercise.retry": "Cuba lagi",
  "exercise.correct": "Betul!",
  "exercise.incorrect": "Belum tepat — lihat penjelasan di bawah.",
  "exercise.selectPrompt": "Pilih jawapan untuk teruskan.",
  "exercise.guidedLabel": "Latihan berbimbing",
  "exercise.independentLabel": "Latihan bersendirian",
  "exercise.whyLabel": "Sebab"
};

if (typeof module !== "undefined") module.exports = QI_MS;
