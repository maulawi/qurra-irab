/* ==========================================================================
   QURRA I'rab — Router (QIRouter)

   Plain hash routing: refresh-safe and direct-linkable (e.g. reloading
   on "#/lesson/21" lands straight back on chapter 21's lesson, no
   server-side routing needed — required for a static GitHub-Pages
   site). Supported routes:

     #/                -> dashboard
     #/dashboard        -> dashboard
     #/curriculum       -> curriculum browser
     #/lesson/:id       -> lesson page for chapter :id
     #/progress         -> progress page

   Re-renders the current route on both hashchange and qi:langchange, so
   switching EN/MS updates whatever screen is currently showing without
   a page reload.
   ========================================================================== */

(function (global) {
  "use strict";

  var contentEl, navEl;

  function parseHash() {
    var hash = global.location.hash || "#/dashboard";
    var path = hash.replace(/^#\/?/, "");
    var parts = path.split("/").filter(Boolean);
    if (parts.length === 0) return { route: "dashboard", params: [] };
    return { route: parts[0], params: parts.slice(1) };
  }

  function renderCurrent() {
    var lang = global.QIState.getLang();
    var parsed = parseHash();
    var route = parsed.route;

    switch (route) {
      case "dashboard":
        global.QINavigation.render(navEl, "dashboard", lang);
        global.QIRender.renderDashboard(contentEl, lang);
        break;
      case "curriculum":
        global.QINavigation.render(navEl, "curriculum", lang);
        global.QIRender.renderCurriculumBrowser(contentEl, lang);
        break;
      case "lesson":
        global.QINavigation.render(navEl, "curriculum", lang);
        global.QIRender.renderLessonPage(contentEl, parsed.params[0], lang);
        break;
      case "progress":
        global.QINavigation.render(navEl, "progress", lang);
        global.QIRender.renderProgressPage(contentEl, lang);
        break;
      default:
        global.QINavigation.render(navEl, "dashboard", lang);
        global.QIRender.renderDashboard(contentEl, lang);
    }

    global.scrollTo(0, 0);
  }

  function start(navContainer, contentContainer) {
    navEl = navContainer;
    contentEl = contentContainer;

    global.addEventListener("hashchange", renderCurrent);
    global.QIState.onLangChange(renderCurrent);

    if (!global.location.hash) {
      global.location.hash = "#/dashboard";
    }
    renderCurrent();
  }

  global.QIRouter = { start: start };

})(window);
