/* ==========================================================================
   QURRA I'rab — i18n engine (QII18n)

   Centralized translation-key lookup for interface CHROME strings only
   (EN/MS). Arabic grammatical terms and source text are never passed
   through this — they live directly in curriculum.js/lessonData.js as
   bilingual {en, ms} fields alongside the untouched Arabic, per the
   terminology-preservation rule.

   Depends on js/translations/en.js and js/translations/ms.js being
   loaded first (QI_EN / QI_MS globals). If either is missing, t()
   degrades to returning the raw key so the UI never throws — callers in
   exerciseEngine.js/lessonEngine.js already have their own fallback
   strings for exactly this reason.
   ========================================================================== */

(function (global) {
  "use strict";

  var DICTS = { en: null, ms: null };

  function dicts() {
    return { en: global.QI_EN || {}, ms: global.QI_MS || {} };
  }

  function normalizeLang(lang) {
    return lang === "ms" ? "ms" : "en";
  }

  function t(key, lang) {
    var L = normalizeLang(lang);
    var d = dicts();
    if (d[L] && d[L][key] != null) return d[L][key];
    // Fall back to English before falling back to the raw key, so a
    // string translated in en.js but not yet in ms.js still shows
    // something readable rather than a key name.
    if (d.en && d.en[key] != null) return d.en[key];
    return key;
  }

  global.QII18n = { t: t };

})(window);
