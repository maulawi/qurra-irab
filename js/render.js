/* ==========================================================================
   QURRA I'rab — Screen renderers (QIRender)

   One function per screen (dashboard, curriculum browser, lesson page,
   progress page). Each returns/inserts a detached-then-attached DOM
   tree built from QIData + QIProgress; router.js decides which function
   to call and where to mount it. None of these touch localStorage
   directly — that stays inside progress.js/state.js.
   ========================================================================== */

(function (global) {
  "use strict";

  function t(key, lang) { return global.QII18n.t(key, lang); }

  function el(tag, opts) {
    var node = document.createElement(tag);
    opts = opts || {};
    if (opts.className) node.className = opts.className;
    if (opts.text != null) node.textContent = opts.text;
    if (opts.html != null) node.innerHTML = opts.html;
    if (opts.attrs) Object.keys(opts.attrs).forEach(function (k) { node.setAttribute(k, opts.attrs[k]); });
    return node;
  }

  function chapterTitle(chapter, lang) {
    return lang === "ms" ? chapter.titleMs : chapter.titleEn;
  }

  var LOCK_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

  function progressBar(label, value, max, opts) {
    opts = opts || {};
    var wrap = el("div", { className: "qi-progress-bar" });
    var row = el("div", { className: "qi-progress-bar-row" });
    row.appendChild(el("span", { text: label }));
    row.appendChild(el("span", { text: value + " / " + max, attrs: { style: "font-variant-numeric: tabular-nums;" } }));
    wrap.appendChild(row);
    var track = el("div", { className: "qi-progress-bar-track" });
    var pct = max > 0 ? Math.round((value / max) * 100) : 0;
    var fill = el("div", {
      className: "qi-progress-bar-fill" + (opts.gold ? " qi-progress-bar-fill--gold" : ""),
      attrs: { style: "width: " + pct + "%;" }
    });
    track.appendChild(fill);
    wrap.appendChild(track);
    return wrap;
  }

  // Lowest-id chapter that's unlocked, has a built lesson, and isn't
  // complete yet — a light-touch "what to do next" nudge computed
  // entirely from data already tracked (curriculum order + progress),
  // not a new recommendation system.
  function findRecommendedNext() {
    var candidates = global.QIData.getBuiltChapters().filter(function (c) {
      return global.QIData.isUnlocked(c.id) && !global.QIProgress.isLessonComplete(c.id);
    });
    if (!candidates.length) return null;
    return candidates.sort(function (a, b) { return a.id - b.id; })[0];
  }

  // -- Dashboard -----------------------------------------------------------
  function renderDashboard(container, lang) {
    container.innerHTML = "";
    var allChapters = global.QIData.getAllChapters();
    var stats = global.QIProgress.getOverallStats(allChapters);

    var wrap = el("div", { className: "qi-screen qi-dashboard" });
    wrap.appendChild(el("h1", { text: t("dashboard.welcomeTitle", lang) }));
    wrap.appendChild(el("p", { className: "qi-dashboard-subtitle", text: t("dashboard.subtitle", lang) }));

    var statsRow = el("div", { className: "qi-stats-row" });
    [
      [stats.totalChapters, "dashboard.statsChapters"],
      [stats.lessonsAvailable, "dashboard.statsLessonsAvailable"],
      [stats.lessonsCompleted, "dashboard.statsLessonsCompleted"]
    ].forEach(function (pair) {
      var card = el("div", { className: "qi-stat-card" });
      card.appendChild(el("p", { className: "qi-stat-number", text: String(pair[0]) }));
      card.appendChild(el("p", { className: "qi-stat-label", text: t(pair[1], lang) }));
      statsRow.appendChild(card);
    });
    wrap.appendChild(statsRow);

    // -- curriculum progress overview --
    var progressCard = el("div", { className: "qi-card" });
    progressCard.appendChild(el("h2", { text: t("dashboard.progressOverviewLabel", lang) }));
    progressCard.appendChild(progressBar(t("dashboard.chaptersBuiltLabel", lang), stats.lessonsAvailable, stats.totalChapters));
    progressCard.appendChild(progressBar(t("dashboard.statsLessonsCompleted", lang), stats.lessonsCompleted, stats.lessonsAvailable, { gold: true }));
    wrap.appendChild(progressCard);

    // -- recommended next --
    var nextChapter = findRecommendedNext();
    if (nextChapter) {
      var recommend = el("div", { className: "qi-recommend" });
      recommend.appendChild(el("p", {
        className: "qi-recommend-text",
        text: t("dashboard.recommendNextLabel", lang) + " " + t("lesson.chapterLabel", lang) + " " + nextChapter.id + " — " + chapterTitle(nextChapter, lang)
      }));
      recommend.appendChild(el("a", { className: "qi-btn qi-btn--primary", text: t("dashboard.recommendNextCta", lang), attrs: { href: "#/lesson/" + nextChapter.id } }));
      wrap.appendChild(recommend);
    }

    var built = global.QIData.getBuiltChapters();
    var continueCard = el("div", { className: "qi-card qi-continue-card" });
    continueCard.appendChild(el("h2", { text: t("dashboard.continueLabel", lang) }));
    var list = el("div", { className: "qi-continue-list" });
    built.forEach(function (chapter) {
      var link = el("a", {
        className: "qi-continue-item",
        attrs: { href: "#/lesson/" + chapter.id }
      });
      link.appendChild(el("span", { className: "qi-arabic", attrs: { dir: "rtl", lang: "ar" }, text: chapter.titleAr }));
      link.appendChild(el("span", { className: "qi-continue-item-title", text: chapterTitle(chapter, lang) }));
      if (global.QIProgress.isLessonComplete(chapter.id)) {
        link.appendChild(el("span", { className: "qi-badge qi-badge--complete", text: t("lesson.lessonCompleteBadge", lang) }));
      }
      list.appendChild(link);
    });
    continueCard.appendChild(list);
    wrap.appendChild(continueCard);

    var browseLink = el("a", { className: "qi-btn qi-btn--secondary", text: t("dashboard.browseCurriculum", lang), attrs: { href: "#/curriculum" } });
    wrap.appendChild(browseLink);

    var aboutCard = el("div", { className: "qi-about-source" });
    aboutCard.appendChild(el("h2", { text: t("dashboard.aboutSourceTitle", lang) }));
    aboutCard.appendChild(el("p", { text: t("dashboard.aboutSourceBody", lang) }));
    wrap.appendChild(aboutCard);

    container.appendChild(wrap);
  }

  // -- Curriculum browser ---------------------------------------------------
  function renderCurriculumBrowser(container, lang) {
    container.innerHTML = "";
    var wrap = el("div", { className: "qi-screen qi-curriculum" });
    wrap.appendChild(el("h1", { text: t("curriculum.pageTitle", lang) }));
    wrap.appendChild(el("p", { className: "qi-curriculum-intro", text: t("curriculum.pageIntro", lang) }));

    global.QIData.getTiers().forEach(function (tier) {
      var chapters = global.QIData.getChaptersByTier(tier.id);
      if (!chapters.length) return;

      var tierSection = el("section", { className: "qi-tier-section" });
      var tierHeading = el("h2", { text: t("curriculum.tierLabel", lang) + " " + tier.id + " — " + (lang === "ms" ? tier.titleMs : tier.titleEn) });
      tierSection.appendChild(tierHeading);
      tierSection.appendChild(el("p", { className: "qi-tier-rationale", text: tier.rationale }));

      var grid = el("div", { className: "qi-chapter-grid" });
      chapters.forEach(function (chapter) {
        grid.appendChild(renderChapterCard(chapter, lang));
      });
      tierSection.appendChild(grid);
      wrap.appendChild(tierSection);
    });

    container.appendChild(wrap);
  }

  function renderChapterCard(chapter, lang) {
    var unlocked = global.QIData.isUnlocked(chapter.id);
    var complete = global.QIProgress.isLessonComplete(chapter.id);
    var cardClass = "qi-chapter-card";
    if (!unlocked) cardClass += " qi-chapter-card--locked";
    else if (!chapter.hasLesson) cardClass += " qi-chapter-card--placeholder";
    var card = el("div", { className: cardClass });

    card.appendChild(el("p", { className: "qi-chapter-card-id", text: t("lesson.chapterLabel", lang) + " " + chapter.id }));
    card.appendChild(el("p", { className: "qi-arabic qi-chapter-card-ar", attrs: { dir: "rtl", lang: "ar" }, text: chapter.titleAr }));
    card.appendChild(el("p", { className: "qi-chapter-card-title", text: chapterTitle(chapter, lang) }));
    card.appendChild(el("p", { className: "qi-chapter-card-pages", text: t("curriculum.pdfPagesLabel", lang) + " " + chapter.pdfPages[0] + "–" + chapter.pdfPages[1] }));

    if (complete) {
      card.appendChild(el("span", { className: "qi-badge qi-badge--complete", text: t("lesson.lessonCompleteBadge", lang) }));
    } else if (!chapter.hasLesson) {
      card.appendChild(el("span", { className: "qi-badge qi-badge--placeholder", text: t("curriculum.notBuiltYet", lang) }));
    }

    if (!unlocked) {
      var notice = el("p", { className: "qi-chapter-card-locked-notice" });
      notice.appendChild(el("span", { html: LOCK_ICON, attrs: { "aria-hidden": "true" } }));
      notice.appendChild(el("span", { text: t("curriculum.lockedNotice", lang) }));
      card.appendChild(notice);
    } else {
      var link = el("a", {
        className: "qi-btn qi-btn--secondary",
        text: chapter.hasLesson ? t("curriculum.openLesson", lang) : t("curriculum.viewChapter", lang),
        attrs: { href: "#/lesson/" + chapter.id }
      });
      card.appendChild(link);
    }

    return card;
  }

  // -- Lesson page -----------------------------------------------------------
  function renderLessonPage(container, chapterId, lang) {
    container.innerHTML = "";
    var wrap = el("div", { className: "qi-screen qi-lesson-screen" });
    var backLink = el("a", { className: "qi-back-link", text: "← " + t("common.backToCurriculum", lang), attrs: { href: "#/curriculum" } });
    wrap.appendChild(backLink);

    var chapter = global.QIData.getChapter(chapterId);
    if (!chapter) {
      wrap.appendChild(el("p", { text: t("common.chapterNotFound", lang) }));
      container.appendChild(wrap);
      return;
    }

    if (!global.QIData.isUnlocked(chapterId)) {
      wrap.appendChild(el("p", { className: "qi-chapter-card-locked-notice", text: t("curriculum.lockedNotice", lang) }));
      container.appendChild(wrap);
      return;
    }

    wrap.appendChild(global.QILessonEngine.render(chapterId, lang));
    container.appendChild(wrap);
  }

  // -- Progress page ----------------------------------------------------------
  function renderProgressPage(container, lang) {
    container.innerHTML = "";
    var wrap = el("div", { className: "qi-screen qi-progress-screen" });
    wrap.appendChild(el("h1", { text: t("progress.pageTitle", lang) }));

    var stats = global.QIProgress.getOverallStats(global.QIData.getAllChapters());
    var summary = el("div", { className: "qi-card" });
    summary.appendChild(progressBar(t("progress.lessonsCompletedLabel", lang), stats.lessonsCompleted, stats.lessonsAvailable, { gold: true }));
    summary.appendChild(el("p", { className: "qi-progress-note", text: t("progress.storedLocallyNote", lang) }));
    wrap.appendChild(summary);

    var built = global.QIData.getBuiltChapters();
    var completedAny = built.some(function (c) { return global.QIProgress.isLessonComplete(c.id); });

    if (!completedAny) {
      wrap.appendChild(el("p", { text: t("progress.noProgressYet", lang) }));
    } else {
      var listCard = el("div", { className: "qi-card" });
      var list = el("div", { className: "qi-continue-list" });
      built.forEach(function (chapter) {
        if (!global.QIProgress.isLessonComplete(chapter.id)) return;
        var item = el("a", { className: "qi-continue-item", attrs: { href: "#/lesson/" + chapter.id } });
        item.appendChild(el("span", { className: "qi-arabic", attrs: { dir: "rtl", lang: "ar" }, text: chapter.titleAr }));
        item.appendChild(el("span", { className: "qi-continue-item-title", text: chapterTitle(chapter, lang) }));
        item.appendChild(el("span", { className: "qi-badge qi-badge--complete", text: t("lesson.lessonCompleteBadge", lang) }));
        list.appendChild(item);
      });
      listCard.appendChild(list);
      wrap.appendChild(listCard);
    }

    var resetBtn = el("button", { className: "qi-btn qi-btn--danger", text: t("progress.resetButton", lang), attrs: { type: "button" } });
    resetBtn.addEventListener("click", function () {
      if (global.confirm(t("progress.resetConfirm", lang))) {
        global.QIProgress.reset();
        renderProgressPage(container, lang);
      }
    });
    wrap.appendChild(resetBtn);

    container.appendChild(wrap);
  }

  global.QIRender = {
    renderDashboard: renderDashboard,
    renderCurriculumBrowser: renderCurriculumBrowser,
    renderLessonPage: renderLessonPage,
    renderProgressPage: renderProgressPage
  };

})(window);
