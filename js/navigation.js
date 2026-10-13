/* ==========================================================================
   QURRA I'rab — Navigation (QINavigation)

   Renders two sibling pieces of chrome into #qi-app-nav, once per route
   change so the active destination can be highlighted:

     1. A compact header (brand + language switch, ~56px) that is always
        visible, plus an inline link row for Dashboard/Curriculum/
        Progress — shown only at tablet width and up (css/responsive.css
        hides it below 768px).
     2. A fixed bottom tab bar (icon + label per destination) that is
        the primary navigation pattern on phones, so the top header
        never has to wrap onto a second line on a small screen. Hidden
        at tablet width and up.

   Both pieces link to the same three routes; which one a visitor
   actually uses is a pure CSS media-query decision, not a JS one, so
   there is nothing to detect or recompute on resize.

   Class-naming note for anyone extending this: the desktop inline links
   keep the class "qi-nav-link" (exactly 3 of them, used by
   tests/qa-smoke-test.js to read the current nav labels) — the bottom
   tab bar's links use a separate class "qi-tabbar-link" so the two sets
   don't collide when queried by class name regardless of which one CSS
   is currently showing.

   The nav itself stays LTR regardless of interface language — only
   Arabic content blocks inside lesson/exercise pages ever flip to RTL
   (see base.css).
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

  var ROUTES = [
    { route: "dashboard", href: "#/dashboard", key: "nav.dashboard", icon: "home" },
    { route: "curriculum", href: "#/curriculum", key: "nav.curriculum", icon: "book" },
    { route: "progress", href: "#/progress", key: "nav.progress", icon: "chart" }
  ];

  // Small inline SVGs (currentColor) so icons follow text color in both
  // the active and inactive states without a separate icon font/library.
  var ICONS = {
    home: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/></svg>',
    book: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5.5C4 4.67 4.67 4 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z"/><path d="M20 5.5c0-.83-.67-1.5-1.5-1.5H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"/></svg>',
    chart: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19V10"/><path d="M12 19V5"/><path d="M19 19v-7"/></svg>'
  };

  function renderHeader(activeRoute, lang) {
    var header = el("header", { className: "qi-header", attrs: { dir: "ltr" } });

    var brand = el("a", { className: "qi-nav-brand", attrs: { href: "#/dashboard" } });
    brand.appendChild(el("span", { className: "qi-nav-brand-mark", attrs: { "aria-hidden": "true" }, text: "ع" }));
    brand.appendChild(el("span", { text: t("app.title", lang) }));
    header.appendChild(brand);

    var links = el("nav", { className: "qi-nav-links-desktop", attrs: { "aria-label": t("app.title", lang) } });
    ROUTES.forEach(function (item) {
      var isActive = item.route === activeRoute;
      links.appendChild(el("a", {
        className: "qi-nav-link" + (isActive ? " qi-nav-link--active" : ""),
        text: t(item.key, lang),
        attrs: isActive ? { href: item.href, "aria-current": "page" } : { href: item.href }
      }));
    });
    header.appendChild(links);

    var langSwitch = el("div", { className: "qi-lang-switch", attrs: { role: "group", "aria-label": t("nav.langSwitch", lang) } });
    ["en", "ms"].forEach(function (code) {
      var isActive = lang === code;
      var btn = el("button", {
        className: "qi-lang-btn" + (isActive ? " qi-lang-btn--active" : ""),
        text: code.toUpperCase(),
        attrs: { type: "button", "aria-pressed": String(isActive) }
      });
      btn.addEventListener("click", function () { global.QIState.setLang(code); });
      langSwitch.appendChild(btn);
    });
    header.appendChild(langSwitch);

    return header;
  }

  function renderTabbar(activeRoute, lang) {
    var bar = el("nav", { className: "qi-tabbar", attrs: { dir: "ltr", "aria-label": t("app.title", lang) } });
    ROUTES.forEach(function (item) {
      var isActive = item.route === activeRoute;
      var link = el("a", {
        className: "qi-tabbar-link" + (isActive ? " qi-tabbar-link--active" : ""),
        attrs: isActive ? { href: item.href, "aria-current": "page" } : { href: item.href }
      });
      link.appendChild(el("span", { className: "qi-tabbar-icon", html: ICONS[item.icon] }));
      link.appendChild(el("span", { className: "qi-tabbar-label", text: t(item.key, lang) }));
      bar.appendChild(link);
    });
    return bar;
  }

  // activeRoute: "dashboard" | "curriculum" | "progress" | "lesson"
  function render(container, activeRoute, lang) {
    container.innerHTML = "";
    container.appendChild(renderHeader(activeRoute, lang));
    container.appendChild(renderTabbar(activeRoute, lang));
  }

  global.QINavigation = { render: render };

})(window);
