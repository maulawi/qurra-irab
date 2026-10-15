/* ==========================================================================
   QURRA I'rab — Lesson engine (QILessonEngine)

   Renders ANY chapter's lesson record (from lessonData.js, joined with
   its curriculum.js metadata) through one reusable 9-step template.
   Nothing here is hardcoded per-lesson — chapters 1/21/23 and the 45
   placeholder chapters all flow through the same function.

   The 9-step template (per the approved pilot specification):
     1. Concept introduction        -> lesson.concept
     2. Rule explanation            -> lesson.rule (source-derived, cited)
     3. Simple worked example       -> lesson.workedExample (source-example, cited)
     4. Step-by-step walkthrough    -> progressive word-by-word reveal of
                                        lesson.workedExample.words[]
     5. Reasoning                   -> each word's `reason`, plus a ranked
                                        dual-analysis callout when the
                                        source documents more than one
                                        valid reading (lesson.workedExample.dualAnalysis)
     6. Guided task                 -> first exercise with step:"guided"
     7. Explanatory feedback        -> built into QIExerciseEngine's render
     8. Independent exercise        -> exercise(s) with step:"independent"
     9. Completion check            -> lesson.completion + progress mark

   A lesson with status:"placeholder" (45 of 48 chapters today) renders
   ONLY the honest "not yet available" notice — steps 2-9 never render
   invented content for it. This is the mechanism that lets the app
   represent all 48 chapters before every lesson is transcribed, per
   Part 1's explicit instruction.

   Each visible section carries a small uppercase eyebrow label (concept
   / rule / example / practice / completion) so the step the learner is
   currently reading is always unambiguous — this is the redesign's
   answer to "make the current step and overall lesson progress easy to
   understand," done with plain CSS rather than a scroll-tracking
   mechanism. A lightweight progress chip near the top reports how many
   of the lesson's exercises have been attempted, computed from data
   progress.js already tracks (no new tracking was added for this).

   Required i18n keys (see js/i18n.js; local fallback below keeps this
   file working even before i18n.js loads):
     lesson.chapterLabel, lesson.placeholderTitle, lesson.conceptLabel,
     lesson.ruleLabel, lesson.exampleLabel, lesson.walkthroughLabel,
     lesson.revealNextWord, lesson.dualAnalysisTitle, lesson.readingOneLabel,
     lesson.readingTwoLabel, lesson.completionLabel, lesson.lessonCompleteBadge,
     lesson.sourceLabel, lesson.pdfPagesLabel, lesson.exercisesProgressLabel,
     label.sourceDerived, label.sourceExample, label.newExample,
     label.needsReview, label.placeholder
   ========================================================================== */

(function (global) {
  "use strict";

  var FALLBACK_STRINGS = {
    en: {
      "lesson.chapterLabel": "Chapter",
      "lesson.placeholderTitle": "This lesson has not been built yet.",
      "lesson.conceptLabel": "Concept",
      "lesson.ruleLabel": "Rule",
      "lesson.exampleLabel": "Worked example",
      "lesson.walkthroughLabel": "Word-by-word walkthrough",
      "lesson.revealNextWord": "Reveal next word",
      "lesson.dualAnalysisTitle": "The source documents more than one valid reading",
      "lesson.readingOneLabel": "Reading 1",
      "lesson.readingOneHint": "See the word-by-word analysis above.",
      "lesson.readingTwoLabel": "Reading 2",
      "lesson.completionLabel": "Completion check",
      "lesson.lessonCompleteBadge": "Lesson complete",
      "lesson.sourceLabel": "Source",
      "lesson.pdfPagesLabel": "PDF pp.",
      "lesson.exercisesProgressLabel": "Exercises completed",
      "label.sourceDerived": "Simplified from source",
      "label.sourceExample": "Transcribed from source",
      "label.newExample": "New example (not in source)",
      "label.needsReview": "Needs teacher review",
      "label.placeholder": "Not yet built"
    },
    ms: {
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
      "lesson.completionLabel": "Semakan penyempurnaan",
      "lesson.lessonCompleteBadge": "Pelajaran selesai",
      "lesson.sourceLabel": "Sumber",
      "lesson.pdfPagesLabel": "ms. PDF",
      "lesson.exercisesProgressLabel": "Latihan selesai",
      "label.sourceDerived": "Diringkaskan daripada sumber",
      "label.sourceExample": "Ditranskripsi daripada sumber",
      "label.newExample": "Contoh baharu (bukan daripada sumber)",
      "label.needsReview": "Perlu semakan guru",
      "label.placeholder": "Belum dibina"
    }
  };

  function t(key, lang) {
    var L = (lang === "ms") ? "ms" : "en";
    if (global.QII18n && typeof global.QII18n.t === "function") {
      var viaI18n = global.QII18n.t(key, L);
      if (viaI18n) return viaI18n;
    }
    return (FALLBACK_STRINGS[L] && FALLBACK_STRINGS[L][key]) || key;
  }

  function el(tag, opts) {
    var node = document.createElement(tag);
    opts = opts || {};
    if (opts.className) node.className = opts.className;
    if (opts.text != null) node.textContent = opts.text;
    if (opts.attrs) Object.keys(opts.attrs).forEach(function (k) { node.setAttribute(k, opts.attrs[k]); });
    return node;
  }

  function bilingual(pair, lang) {
    if (!pair) return "";
    return lang === "ms" ? (pair.ms || pair.en || "") : (pair.en || pair.ms || "");
  }

  function eyebrow(text) {
    return el("p", { className: "qi-eyebrow qi-step-eyebrow", text: text });
  }

  var LABEL_KEY_BY_CONTENT_LABEL = {
    "source-derived": "label.sourceDerived",
    "source-example": "label.sourceExample",
    "new-example": "label.newExample",
    "needs-review": "label.needsReview",
    "placeholder": "label.placeholder"
  };

  function renderContentLabelBadge(contentLabel, lang) {
    var key = LABEL_KEY_BY_CONTENT_LABEL[contentLabel] || "label.placeholder";
    return el("span", {
      className: "qi-badge qi-badge--" + contentLabel,
      text: t(key, lang)
    });
  }

  function renderCitation(citation, lang) {
    if (!citation) return null;
    var text = t("lesson.sourceLabel", lang) + ": " +
      t("lesson.chapterLabel", lang) + " " + citation.chapter + ", " +
      t("lesson.pdfPagesLabel", lang) + " " + citation.pdfPages[0] +
      (citation.pdfPages[1] !== citation.pdfPages[0] ? "–" + citation.pdfPages[1] : "") +
      (citation.printedPage ? " (" + citation.printedPage + ")" : "");
    return el("p", { className: "qi-citation", text: text });
  }

  function renderPlaceholder(chapter, lesson, lang) {
    var wrap = el("div", { className: "qi-lesson qi-lesson--placeholder" });
    wrap.appendChild(renderHeader(chapter, lang));
    wrap.appendChild(renderContentLabelBadge("placeholder", lang));
    wrap.appendChild(el("h2", { className: "qi-placeholder-title", text: t("lesson.placeholderTitle", lang) }));
    wrap.appendChild(el("p", { className: "qi-placeholder-body", text: bilingual(lesson.concept, lang) }));
    return wrap;
  }

  function renderHeader(chapter, lang) {
    var header = el("div", { className: "qi-lesson-header" });
    header.appendChild(el("p", { className: "qi-lesson-chapter-label", text: t("lesson.chapterLabel", lang) + " " + chapter.id }));
    header.appendChild(el("h1", { className: "qi-arabic qi-lesson-title-ar", attrs: { dir: "rtl", lang: "ar" }, text: chapter.titleAr }));
    header.appendChild(el("p", { className: "qi-lesson-title", text: lang === "ms" ? chapter.titleMs : chapter.titleEn }));
    header.appendChild(el("p", { className: "qi-lesson-topic", text: chapter.topicEn }));
    return header;
  }

  // Lightweight progress chip: how many of this lesson's exercises have
  // been attempted at least once, read straight from QIProgress — no
  // separate tracking, just a friendlier presentation of existing data.
  function renderProgressChip(lesson, chapterId, lang) {
    var exerciseIds = lesson.exercises.map(function (ex) { return ex.id; });
    var lessonStats = global.QIProgress.getLessonStats(chapterId, exerciseIds);
    var chip = el("div", { className: "qi-lesson-progress-chip" });
    chip.appendChild(el("span", { text: t("lesson.exercisesProgressLabel", lang) + ": " + lessonStats.attempted + " / " + lessonStats.total }));
    return chip;
  }

  function renderConcept(lesson, lang) {
    var section = el("section", { className: "qi-lesson-step qi-step-concept" });
    section.appendChild(eyebrow(t("lesson.conceptLabel", lang)));
    section.appendChild(el("p", { text: bilingual(lesson.concept, lang) }));
    return section;
  }

  function renderRule(lesson, lang) {
    var rule = lesson.rule;
    var section = el("section", { className: "qi-lesson-step qi-step-rule" });
    section.appendChild(eyebrow(t("lesson.ruleLabel", lang)));
    var headingRow = el("div", { className: "qi-step-heading-row" });
    headingRow.appendChild(renderContentLabelBadge(rule.contentLabel, lang));
    section.appendChild(headingRow);
    section.appendChild(el("p", { text: bilingual(rule, lang) }));
    var citation = renderCitation(rule.citation, lang);
    if (citation) section.appendChild(citation);
    return section;
  }

  // Steps 3-5: worked example, progressive word-by-word walkthrough,
  // reasoning, and the dual-analysis callout when present.
  function renderWorkedExample(lesson, lang) {
    var ex = lesson.workedExample;
    var section = el("section", { className: "qi-lesson-step qi-step-example" });
    section.appendChild(eyebrow(t("lesson.exampleLabel", lang)));
    var headingRow = el("div", { className: "qi-step-heading-row" });
    headingRow.appendChild(renderContentLabelBadge(ex.contentLabel, lang));
    section.appendChild(headingRow);

    section.appendChild(el("p", { className: "qi-arabic qi-example-sentence", attrs: { dir: "rtl", lang: "ar" }, text: ex.arabic }));
    section.appendChild(el("p", { className: "qi-example-gloss", text: bilingual(ex.gloss, lang) }));
    var citation = renderCitation(ex.citation, lang);
    if (citation) section.appendChild(citation);

    // --- the book's own Arabic i'rab of this example (optional; pilot) ---
    // Two accepted shapes: { text, citation } (one passage) or
    // { passages: [{ text, heading?, citation? }, ...], citation? } (several,
    // shown in array order). A shared irabAr.citation is shown once at the
    // end unless some passage carries its own.
    if (ex.irabAr) {
      var irabPassages = (Array.isArray(ex.irabAr.passages) && ex.irabAr.passages.length)
        ? ex.irabAr.passages
        : (ex.irabAr.text ? [{ text: ex.irabAr.text }] : []);
      irabPassages = irabPassages.filter(function (p) { return p && p.text; });
      if (irabPassages.length) {
        section.appendChild(eyebrow(t("lesson.irabArLabel", lang)));
        var anyOwnCitation = false;
        irabPassages.forEach(function (p) {
          if (p.heading) {
            section.appendChild(el("p", {
              className: "qi-eyebrow qi-irab-ar-heading",
              text: typeof p.heading === "string" ? p.heading : bilingual(p.heading, lang)
            }));
          }
          section.appendChild(el("p", { className: "qi-arabic qi-irab-ar", attrs: { dir: "rtl", lang: "ar" }, text: p.text }));
          if (p.citation) {
            var ownCitation = renderCitation(p.citation, lang);
            if (ownCitation) { section.appendChild(ownCitation); anyOwnCitation = true; }
          }
        });
        if (!anyOwnCitation) {
          var irabCitation = renderCitation(ex.irabAr.citation, lang);
          if (irabCitation) section.appendChild(irabCitation);
        }
      }
    }

    // --- progressive word-by-word walkthrough ---
    section.appendChild(el("h3", { className: "qi-walkthrough-heading", text: t("lesson.walkthroughLabel", lang) }));
    var rows = el("div", { className: "qi-walkthrough-rows" });
    section.appendChild(rows);

    var revealed = 0;
    var revealBtn = el("button", { className: "qi-btn qi-btn--secondary", text: t("lesson.revealNextWord", lang), attrs: { type: "button" } });

    function renderRow(word) {
      var row = el("div", { className: "qi-word-row" });
      row.appendChild(el("span", { className: "qi-arabic qi-word-row-ar", attrs: { dir: "rtl", lang: "ar" }, text: word.ar }));
      var details = el("div", { className: "qi-word-row-details" });
      details.appendChild(el("p", { className: "qi-word-role", text: bilingual(word.role, lang) }));
      details.appendChild(el("p", { className: "qi-word-case", text: word.case }));
      details.appendChild(el("p", { className: "qi-word-sign", text: bilingual(word.sign, lang) }));
      details.appendChild(el("p", { className: "qi-word-reason", text: bilingual(word.reason, lang) }));
      row.appendChild(details);
      return row;
    }

    function revealNext() {
      if (revealed >= ex.words.length) return;
      rows.appendChild(renderRow(ex.words[revealed]));
      revealed++;
      if (revealed >= ex.words.length) revealBtn.classList.add("qi-hidden");
    }

    revealBtn.addEventListener("click", revealNext);
    revealNext(); // first word shown immediately; rest revealed on demand
    section.appendChild(revealBtn);

    // --- dual-analysis callout (only when the source documents one) ---
    // Presented as two labeled, side-by-side readings (stacked on
    // mobile) rather than one undifferentiated paragraph, with the
    // source's own ranking shown as a shared footer note underneath.
    if (ex.dualAnalysis) {
      var callout = el("div", { className: "qi-dual-analysis" });
      callout.appendChild(el("h3", { text: t("lesson.dualAnalysisTitle", lang) }));

      var panels = el("div", { className: "qi-dual-analysis-panels" });

      var panelOne = el("div", { className: "qi-dual-analysis-panel" });
      panelOne.appendChild(el("p", { className: "qi-eyebrow", text: t("lesson.readingOneLabel", lang) }));
      panelOne.appendChild(el("p", { className: "qi-dual-analysis-hint", text: t("lesson.readingOneHint", lang) }));
      panels.appendChild(panelOne);

      var panelTwo = el("div", { className: "qi-dual-analysis-panel" });
      panelTwo.appendChild(el("p", { className: "qi-eyebrow", text: t("lesson.readingTwoLabel", lang) }));
      panelTwo.appendChild(el("p", { text: bilingual(ex.dualAnalysis.note, lang) }));
      panels.appendChild(panelTwo);

      callout.appendChild(panels);
      callout.appendChild(el("p", { className: "qi-dual-analysis-ranking", text: bilingual(ex.dualAnalysis.ranking, lang) }));
      section.appendChild(callout);
    }

    return section;
  }

  function renderExerciseStep(exercise, chapterId, lang, onGraded) {
    var section = el("section", { className: "qi-lesson-step qi-step-exercise" });
    section.appendChild(global.QIExerciseEngine.render(exercise, chapterId, lang, onGraded));
    return section;
  }

  function renderCompletion(lesson, chapterId, lang) {
    var section = el("section", { className: "qi-lesson-step qi-step-completion" });
    section.appendChild(eyebrow(t("lesson.completionLabel", lang)));
    section.appendChild(el("p", { text: bilingual(lesson.completion, lang) }));
    if (global.QIProgress && global.QIProgress.isLessonComplete(chapterId)) {
      section.appendChild(el("span", { className: "qi-badge qi-badge--complete", text: t("lesson.lessonCompleteBadge", lang) }));
    }
    return section;
  }

  // -- Public entry point -------------------------------------------------
  // render(chapterId, lang) -> detached DOM element for the whole lesson
  // page. Looks up chapter metadata (QICurriculum) and lesson content
  // (QILessons) itself so callers (router/render.js) only need an id.
  function render(chapterId, lang) {
    var chapter = global.QICurriculum.filter(function (c) { return c.id === Number(chapterId); })[0];
    if (!chapter) {
      return el("div", { className: "qi-lesson qi-lesson--not-found", text: "Chapter not found: " + chapterId });
    }
    var lesson = global.QILessons[chapter.id];

    if (!lesson || lesson.status === "placeholder") {
      return renderPlaceholder(chapter, lesson || { concept: { en: "", ms: "" } }, lang);
    }

    var wrap = el("div", { className: "qi-lesson qi-lesson--pilot" });
    wrap.appendChild(renderHeader(chapter, lang));
    wrap.appendChild(renderProgressChip(lesson, chapter.id, lang));
    wrap.appendChild(renderConcept(lesson, lang));
    wrap.appendChild(renderRule(lesson, lang));
    wrap.appendChild(renderWorkedExample(lesson, lang));

    var independentCount = lesson.exercises.filter(function (ex) { return ex.step === "independent"; }).length;
    var independentGraded = 0;

    lesson.exercises.forEach(function (exercise) {
      wrap.appendChild(renderExerciseStep(exercise, chapter.id, lang, function (result) {
        if (exercise.step === "independent") {
          independentGraded++;
          if (independentGraded >= independentCount && global.QIProgress) {
            global.QIProgress.markLessonComplete(chapter.id);
          }
        }
      }));
    });

    wrap.appendChild(renderCompletion(lesson, chapter.id, lang));
    return wrap;
  }

  global.QILessonEngine = {
    render: render,
    renderContentLabelBadge: renderContentLabelBadge
  };

})(window);
