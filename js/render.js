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

  // -- Home screen artwork (inline, decorative; no external assets) --
  var SVG_OPEN = '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  var STAT_ICONS = {
    book: SVG_OPEN + '<path d="M4 5.5C4 4.67 4.67 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z"/><path d="M20 5.5c0-.83-.67-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"/></svg>',
    bookOpen: SVG_OPEN + '<path d="M3 5.5C5 4.5 8 4.5 12 6.5c4-2 7-2 9-1v13c-2-1-5-1-9 1-4-2-7-2-9-1v-13Z"/><path d="M12 6.5V19.5"/></svg>',
    lesson: SVG_OPEN + '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M9 8.5h6M9 12h6M9 15.5h4"/></svg>',
    check: SVG_OPEN + '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12.3 2.4 2.4 4.6-5"/></svg>',
    grid: SVG_OPEN + '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 4v16M4 12h16"/></svg>'
  };
  var ARROW_ICON = SVG_OPEN + '<path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var CHEVRON_ICON = SVG_OPEN + '<path d="m9 5 7 7-7 7"/></svg>';
  var HERO_TITLE_AR = "عِلْمُ الْإِعْرَابِ";
  // Decorative arch, an eight-point star and a stack of classical volumes.
  var HERO_ART = '<svg viewBox="0 0 120 100" width="100%" height="100%" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">' +
    '<path d="M18 100V46Q18 16 62 4Q106 16 106 46V100Z" fill="#e4ece7" opacity=".8"/>' +
    '<g fill="none" stroke="#a9842e" stroke-width="1.1" opacity=".9"><rect x="14" y="14" width="22" height="22" transform="rotate(45 25 25)"/><rect x="14" y="14" width="22" height="22"/><circle cx="25" cy="25" r="4"/></g>' +
    '<g><rect x="58" y="34" width="13" height="66" rx="1.5" fill="#143a2f"/><rect x="72" y="44" width="13" height="56" rx="1.5" fill="#1b4d3e"/><rect x="86" y="26" width="14" height="74" rx="1.5" fill="#143a2f"/><rect x="101" y="20" width="14" height="80" rx="1.5" fill="#1b4d3e"/></g>' +
    '<g stroke="#c9a24a" stroke-width="1.4" fill="none"><path d="M58 46h13M58 88h13M72 56h13M72 90h13M86 38h14M86 88h14M101 32h14M101 88h14"/></g></svg>';

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
    var nextChapter = findRecommendedNext();

    // -- A/B. hero: eyebrow, heading, supporting text, Arabic panel --
    var hero = el("section", { className: "qi-hero" });
    hero.appendChild(el("p", { className: "qi-hero-eyebrow", text: t("dashboard.heroEyebrow", lang) }));
    hero.appendChild(el("h1", { className: "qi-hero-title", text: t("dashboard.heroTitle", lang) }));
    hero.appendChild(el("p", { className: "qi-hero-sub", text: t("dashboard.heroSubtitle", lang) }));
    // General title of the discipline ("The Science of I'rab"): deliberately
    // not a chapter title or lesson example. Same in EN and MS.
    var panel = el("div", { className: "qi-hero-panel" });
    panel.appendChild(el("span", { className: "qi-hero-art", html: HERO_ART, attrs: { "aria-hidden": "true" } }));
    panel.appendChild(el("p", { className: "qi-arabic qi-hero-ar", attrs: { dir: "rtl", lang: "ar" }, text: HERO_TITLE_AR }));
    panel.appendChild(el("p", { className: "qi-hero-caption", text: t("dashboard.heroCaption", lang) }));
    hero.appendChild(panel);
    wrap.appendChild(hero);

    // -- C. statistics card (dynamic values from existing progress logic) --
    var statsRow = el("div", { className: "qi-stats-row" });
    [
      [stats.totalChapters, "dashboard.statsChapters", STAT_ICONS.book],
      [stats.lessonsAvailable, "dashboard.statsLessonsAvailable", STAT_ICONS.lesson],
      [stats.lessonsCompleted, "dashboard.statsLessonsCompleted", STAT_ICONS.check]
    ].forEach(function (item) {
      var card = el("div", { className: "qi-stat-card" });
      var top = el("div", { className: "qi-stat-top" });
      top.appendChild(el("p", { className: "qi-stat-number", text: String(item[0]) }));
      top.appendChild(el("span", { className: "qi-stat-icon", html: item[2], attrs: { "aria-hidden": "true" } }));
      card.appendChild(top);
      card.appendChild(el("p", { className: "qi-stat-label", text: t(item[1], lang) }));
      statsRow.appendChild(card);
    });
    wrap.appendChild(statsRow);

    // -- D. learning journey: progress bars + continue-learning CTA --
    var progressCard = el("div", { className: "qi-card qi-journey" });
    progressCard.appendChild(el("h2", { className: "qi-journey-title", text: t("dashboard.journeyTitle", lang) }));
    progressCard.appendChild(progressBar(t("dashboard.chaptersBuiltLabel", lang), stats.lessonsAvailable, stats.totalChapters));
    progressCard.appendChild(progressBar(t("dashboard.statsLessonsCompleted", lang), stats.lessonsCompleted, stats.lessonsAvailable, { gold: true }));
    if (nextChapter) {
      progressCard.appendChild(el("p", {
        className: "qi-journey-next",
        text: t("dashboard.recommendNextLabel", lang) + " " + t("lesson.chapterLabel", lang) + " " + nextChapter.id + " — " + chapterTitle(nextChapter, lang)
      }));
      var cta = el("a", { className: "qi-btn qi-btn--primary qi-cta", attrs: { href: "#/lesson/" + nextChapter.id } });
      cta.appendChild(el("span", { className: "qi-cta-icon", html: STAT_ICONS.bookOpen, attrs: { "aria-hidden": "true" } }));
      cta.appendChild(el("span", { className: "qi-cta-label", text: t("dashboard.continueLabel", lang) }));
      cta.appendChild(el("span", { className: "qi-cta-icon", html: ARROW_ICON, attrs: { "aria-hidden": "true" } }));
      progressCard.appendChild(cta);
    }
    wrap.appendChild(progressCard);

    // -- E. curriculum shortcut --
    var shortcut = el("a", { className: "qi-shortcut", attrs: { href: "#/curriculum" } });
    shortcut.appendChild(el("span", { className: "qi-shortcut-icon", html: STAT_ICONS.grid, attrs: { "aria-hidden": "true" } }));
    var shortcutText = el("span", { className: "qi-shortcut-text" });
    shortcutText.appendChild(el("span", { className: "qi-shortcut-title", text: t("dashboard.browseShort", lang) }));
    shortcutText.appendChild(el("span", { className: "qi-shortcut-sub", text: t("dashboard.exploreAll", lang).replace("{n}", String(stats.totalChapters)) }));
    shortcut.appendChild(shortcutText);
    shortcut.appendChild(el("span", { className: "qi-shortcut-chevron", html: CHEVRON_ICON, attrs: { "aria-hidden": "true" } }));
    wrap.appendChild(shortcut);

    var built = global.QIData.getBuiltChapters();
    var continueCard = el("div", { className: "qi-card qi-continue-card" });
    continueCard.appendChild(el("h2", { text: t("dashboard.allLessonsLabel", lang) }));
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

    // Compact, secondary status notice (replaces the long source explanation)
    var betaNote = el("div", { className: "qi-beta-notice", attrs: { role: "note" } });
    betaNote.appendChild(el("span", { className: "qi-beta-title", text: t("dashboard.betaTitle", lang) }));
    betaNote.appendChild(el("span", { className: "qi-beta-body", text: t("dashboard.betaBody", lang) }));
    wrap.appendChild(betaNote);

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
