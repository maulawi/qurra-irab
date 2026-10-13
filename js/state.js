/* ==========================================================================
   QURRA I'rab — App state (QIState)

   The only piece of UI state that needs to persist and be shared across
   modules right now is the chosen interface language (EN/MS). Lesson
   progress has its own dedicated store (progress.js) because it has a
   different shape and its own rules; this file is intentionally small.

   Language persists in localStorage so a returning visitor keeps their
   choice, and broadcasts a "qi:langchange" DOM event so router.js and
   navigation.js can re-render without this module needing to know about
   either of them.
   ========================================================================== */

(function (global) {
  "use strict";

  var STORAGE_KEY = "qurra-irab:lang:v1";
  var DEFAULT_LANG = "en";

  function getLang() {
    try {
      var stored = global.localStorage.getItem(STORAGE_KEY);
      return (stored === "ms" || stored === "en") ? stored : DEFAULT_LANG;
    } catch (err) {
      return DEFAULT_LANG;
    }
  }

  function setLang(lang) {
    var normalized = (lang === "ms") ? "ms" : "en";
    try {
      global.localStorage.setItem(STORAGE_KEY, normalized);
    } catch (err) {
      // Non-fatal: language just won't persist across reloads this time.
    }
    global.dispatchEvent(new CustomEvent("qi:langchange", { detail: { lang: normalized } }));
    return normalized;
  }

  function onLangChange(callback) {
    global.addEventListener("qi:langchange", function (evt) {
      callback(evt.detail.lang);
    });
  }

  global.QIState = {
    getLang: getLang,
    setLang: setLang,
    onLangChange: onLangChange
  };

})(window);
