/* ==========================================================================
   QURRA I'rab — Exercise engine (QIExerciseEngine)

   Renders and grades every structured exercise item defined in
   lessonData.js. v1 supports only selectable-answer fields (no free-text
   Arabic evaluation) per the approved exercise-types decision; the data
   model already reserves room for a future free-text type (see
   DATA_SCHEMA.md) without this engine needing to change shape.

   Two answer SHAPES cover all 9 planned exercise types, because grading
   only ever needs single-value matching or multi-field combo matching:

     "options" shape  (exercise.options + exercise.acceptedValues)
       → identify-category, identify-role, select-case, identify-sign,
         select-reasoning, arrange-components*, correct-the-error*
       (* arrange-components/correct-the-error can reuse this shape by
          encoding each candidate ordering/correction as one option value;
          if a future type needs richer input than single-select, add a
          new family below rather than overloading this one.)

     "fields" shape   (exercise.fields[] + exercise.acceptedCombos[])
       → complete-analysis (complete-incomplete-analysis),
         full-sentence-by-structured-fields

   QIExerciseEngine.render(exercise, lessonId, lang) returns a detached
   DOM element; the caller (lessonEngine.js) inserts it into the page.
   Nothing in this file touches localStorage directly — grading results
   are reported through QIProgress.

   Visual states (the redesign's "design consistent visual states"
   requirement): each option row moves through resting -> hover ->
   selected (on change, before grading) -> correct/incorrect (after
   grading, via CSS classes toggled below) -> locked (inputs disabled
   until Retry is pressed). None of this changes what counts as correct
   — grading still runs exactly the acceptedValues/acceptedCombos checks
   it always did; the classes only describe the result visually.

   Required i18n keys (see js/i18n.js once built; a local fallback
   dictionary below keeps this file working even before i18n.js loads):
     exercise.submit, exercise.retry, exercise.correct, exercise.incorrect,
     exercise.selectPrompt, exercise.guidedLabel, exercise.independentLabel,
     exercise.whyLabel
   ========================================================================== */

(function (global) {
  "use strict";

  var FALLBACK_STRINGS = {
    en: {
      "exercise.submit": "Check answer",
      "exercise.retry": "Try again",
      "exercise.correct": "Correct!",
      "exercise.incorrect": "Not quite — see the explanation below.",
      "exercise.selectPrompt": "Select an answer to continue.",
      "exercise.guidedLabel": "Guided practice",
      "exercise.independentLabel": "Independent practice",
      "exercise.whyLabel": "Why"
    },
    ms: {
      "exercise.submit": "Semak jawapan",
      "exercise.retry": "Cuba lagi",
      "exercise.correct": "Betul!",
      "exercise.incorrect": "Belum tepat — lihat penjelasan di bawah.",
      "exercise.selectPrompt": "Pilih jawapan untuk teruskan.",
      "exercise.guidedLabel": "Latihan berbimbing",
      "exercise.independentLabel": "Latihan bersendirian",
      "exercise.whyLabel": "Sebab"
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
    if (opts.html != null) node.innerHTML = opts.html;
    if (opts.attrs) {
      Object.keys(opts.attrs).forEach(function (k) { node.setAttribute(k, opts.attrs[k]); });
    }
    return node;
  }

  function bilingual(pair, lang) {
    if (!pair) return "";
    return lang === "ms" ? (pair.ms || pair.en || "") : (pair.en || pair.ms || "");
  }

  function shapeOf(exercise) {
    if (exercise.fields && exercise.fields.length) return "fields";
    return "options";
  }

  function clearOptionState(wrap) {
    wrap.classList.remove("qi-exercise-option--selected", "qi-exercise-option--correct", "qi-exercise-option--incorrect");
    var mark = wrap.querySelector(".qi-exercise-option-mark");
    if (mark) mark.remove();
  }

  function markOption(wrap, state) {
    // state: "correct" | "incorrect"
    wrap.classList.add("qi-exercise-option--" + state);
    var mark = el("span", {
      className: "qi-exercise-option-mark qi-exercise-option-mark--" + state,
      text: state === "correct" ? "✓" : "✕",
      attrs: { "aria-hidden": "true" }
    });
    wrap.appendChild(mark);
  }

  // -- "options" shape: single-select against acceptedValues -----------
  function renderOptionsShape(exercise, lang) {
    var group = el("div", { className: "qi-exercise-options", attrs: { role: "radiogroup" } });
    var groupName = "qi-ex-" + exercise.id;
    var selected = null;
    var optionWraps = {}; // value -> wrapping label element

    exercise.options.forEach(function (opt) {
      var optionId = groupName + "-" + opt.value;
      var wrap = el("label", { className: "qi-exercise-option", attrs: { "for": optionId } });
      var input = el("input", { attrs: { type: "radio", name: groupName, value: opt.value, id: optionId } });
      input.addEventListener("change", function () {
        selected = opt.value;
        Object.keys(optionWraps).forEach(function (v) { optionWraps[v].classList.remove("qi-exercise-option--selected"); });
        wrap.classList.add("qi-exercise-option--selected");
      });
      var labelText = el("span", { text: lang === "ms" ? opt.labelMs : opt.labelEn });
      wrap.appendChild(input);
      wrap.appendChild(labelText);
      group.appendChild(wrap);
      optionWraps[opt.value] = wrap;
    });

    return {
      element: group,
      getAnswer: function () { return selected; },
      isAnswered: function () { return selected !== null; },
      grade: function (answer) {
        return exercise.acceptedValues.indexOf(answer) !== -1;
      },
      showResult: function (answer, correct) {
        Object.keys(optionWraps).forEach(function (value) {
          var wrap = optionWraps[value];
          var input = wrap.querySelector("input");
          input.disabled = true;
          var isAccepted = exercise.acceptedValues.indexOf(value) !== -1;
          if (value === answer) {
            markOption(wrap, correct ? "correct" : "incorrect");
          } else if (isAccepted && !correct) {
            // Show the right answer alongside a wrong selection.
            markOption(wrap, "correct");
          }
        });
      },
      reset: function () {
        selected = null;
        Object.keys(optionWraps).forEach(function (value) {
          var wrap = optionWraps[value];
          clearOptionState(wrap);
          var input = wrap.querySelector("input");
          input.checked = false;
          input.disabled = false;
        });
      }
    };
  }

  // -- "fields" shape: multiple field groups, graded as a combo ---------
  function renderFieldsShape(exercise, lang) {
    var container = el("div", { className: "qi-exercise-fields" });
    var answer = {};
    var allOptionWraps = []; // flat list of {fieldKey, value, wrap}

    exercise.fields.forEach(function (field) {
      var fieldWrap = el("div", { className: "qi-exercise-field" });
      fieldWrap.appendChild(el("div", { className: "qi-exercise-field-label", text: bilingual(field.question, lang) }));
      var groupName = "qi-ex-" + exercise.id + "-" + field.key;
      var optsWrap = el("div", { className: "qi-exercise-field-options", attrs: { role: "radiogroup" } });
      var wrapsForField = {};

      field.options.forEach(function (opt) {
        var optionId = groupName + "-" + opt.value;
        var wrap = el("label", { className: "qi-exercise-option", attrs: { "for": optionId } });
        var input = el("input", { attrs: { type: "radio", name: groupName, value: opt.value, id: optionId } });
        input.addEventListener("change", function () {
          answer[field.key] = opt.value;
          Object.keys(wrapsForField).forEach(function (v) { wrapsForField[v].classList.remove("qi-exercise-option--selected"); });
          wrap.classList.add("qi-exercise-option--selected");
        });
        var labelText = el("span", { text: lang === "ms" ? opt.labelMs : opt.labelEn });
        wrap.appendChild(input);
        wrap.appendChild(labelText);
        optsWrap.appendChild(wrap);
        wrapsForField[opt.value] = wrap;
        allOptionWraps.push({ fieldKey: field.key, value: opt.value, wrap: wrap });
      });

      fieldWrap.appendChild(optsWrap);
      container.appendChild(fieldWrap);
    });

    return {
      element: container,
      getAnswer: function () { return Object.assign({}, answer); },
      isAnswered: function () {
        return exercise.fields.every(function (f) { return answer[f.key] !== undefined; });
      },
      grade: function (ans) {
        return exercise.acceptedCombos.some(function (combo) {
          return Object.keys(combo).every(function (k) { return combo[k] === ans[k]; });
        });
      },
      showResult: function (ans, correct) {
        allOptionWraps.forEach(function (entry) {
          var input = entry.wrap.querySelector("input");
          input.disabled = true;
          if (ans[entry.fieldKey] === entry.value) {
            markOption(entry.wrap, correct ? "correct" : "incorrect");
          }
        });
      },
      reset: function () {
        answer = {};
        allOptionWraps.forEach(function (entry) {
          clearOptionState(entry.wrap);
          var input = entry.wrap.querySelector("input");
          input.checked = false;
          input.disabled = false;
        });
      }
    };
  }

  function renderShape(exercise, lang) {
    return shapeOf(exercise) === "fields"
      ? renderFieldsShape(exercise, lang)
      : renderOptionsShape(exercise, lang);
  }

  // -- Public entry point -------------------------------------------------
  // onGraded(result) fires every time the learner submits, with
  // { exerciseId, correct, selected }. Grading is also recorded to
  // QIProgress automatically so callers don't have to.
  function render(exercise, lessonId, lang, onGraded) {
    var wrapper = el("div", {
      className: "qi-exercise qi-exercise--" + exercise.step,
      attrs: { "data-exercise-id": exercise.id }
    });

    var stepLabel = exercise.step === "guided" ? t("exercise.guidedLabel", lang) : t("exercise.independentLabel", lang);
    wrapper.appendChild(el("div", { className: "qi-exercise-step-label", text: stepLabel }));

    if (exercise.promptAr) {
      wrapper.appendChild(el("p", { className: "qi-arabic qi-exercise-prompt", attrs: { dir: "rtl", lang: "ar" }, text: exercise.promptAr }));
    }
    if (exercise.gloss) {
      wrapper.appendChild(el("p", { className: "qi-exercise-gloss", text: bilingual(exercise.gloss, lang) }));
    }
    wrapper.appendChild(el("p", { className: "qi-exercise-question", text: bilingual(exercise.question, lang) }));

    var shape = renderShape(exercise, lang);
    wrapper.appendChild(shape.element);

    var feedback = el("div", { className: "qi-exercise-feedback", attrs: { "aria-live": "polite" } });
    var submitBtn = el("button", { className: "qi-btn qi-btn--primary", text: t("exercise.submit", lang), attrs: { type: "button" } });
    var retryBtn = el("button", { className: "qi-btn qi-btn--secondary qi-hidden", text: t("exercise.retry", lang), attrs: { type: "button" } });

    submitBtn.addEventListener("click", function () {
      if (!shape.isAnswered()) {
        feedback.textContent = t("exercise.selectPrompt", lang);
        feedback.className = "qi-exercise-feedback qi-exercise-feedback--prompt";
        return;
      }
      var answer = shape.getAnswer();
      var correct = shape.grade(answer);
      shape.showResult(answer, correct);

      feedback.className = "qi-exercise-feedback " + (correct ? "qi-exercise-feedback--correct" : "qi-exercise-feedback--incorrect");
      var headline = el("p", { className: "qi-exercise-verdict", text: correct ? t("exercise.correct", lang) : t("exercise.incorrect", lang) });
      feedback.innerHTML = "";
      feedback.appendChild(headline);
      if (exercise.ruleNote) {
        var why = el("div", { className: "qi-exercise-rulenote" });
        why.appendChild(el("p", { className: "qi-exercise-rulenote-label", text: t("exercise.whyLabel", lang) + ":" }));
        why.appendChild(el("p", { text: bilingual(exercise.ruleNote, lang) }));
        feedback.appendChild(why);
      }

      submitBtn.classList.add("qi-hidden");
      retryBtn.classList.remove("qi-hidden");

      if (global.QIProgress) {
        global.QIProgress.recordExercise(lessonId, exercise.id, answer, correct);
      }
      if (typeof onGraded === "function") {
        onGraded({ exerciseId: exercise.id, correct: correct, selected: answer });
      }
    });

    retryBtn.addEventListener("click", function () {
      shape.reset();
      feedback.innerHTML = "";
      feedback.className = "qi-exercise-feedback";
      retryBtn.classList.add("qi-hidden");
      submitBtn.classList.remove("qi-hidden");
    });

    var actions = el("div", { className: "qi-exercise-actions" });
    actions.appendChild(submitBtn);
    actions.appendChild(retryBtn);
    wrapper.appendChild(actions);
    wrapper.appendChild(feedback);

    return wrapper;
  }

  global.QIExerciseEngine = {
    render: render
  };

})(window);
