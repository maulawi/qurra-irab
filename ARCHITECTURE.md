# QURRA I'rab — Architecture

## 1. Guiding constraints

These came from the approved planning/specification work and shape every
decision below:

- Static site, vanilla HTML/CSS/JS, no framework, no bundler, no build
  step — must open directly in VS Code + Live Server and deploy as-is to
  GitHub Pages.
- No backend, database, authentication, or payment system.
- Bilingual interface chrome (English / Bahasa Melayu). Arabic
  grammatical terminology and source text are **never** translated.
- Arabic content is RTL; the application shell is always LTR. RTL is
  scoped to content blocks, never the whole page.
- Every source-derived item carries an exact page citation. New content
  is clearly labeled as new. Nothing invented is presented as verified.
- The curriculum must represent all 48 chapters before every lesson has
  been transcribed — metadata and content are deliberately separate data
  sets (see §3).

## 2. Module map

```
          ┌─────────────┐     ┌──────────────┐
          │ en.js / ms.js│ ──▶ │   i18n.js     │  UI chrome strings only
          └─────────────┘     └──────────────┘
                                      │
┌──────────────┐   ┌───────────────┐ │  ┌───────────────┐
│ curriculum.js │──▶│   data.js     │◀┘  │  state.js      │  language (persist + broadcast)
│ lessonData.js │   │ (repository)  │    └───────────────┘
└──────────────┘   └───────┬───────┘            │
                            │                    │
                            ▼                    ▼
                    ┌───────────────┐   ┌───────────────┐
                    │ exerciseEngine │   │  progress.js   │  localStorage, versioned
                    └───────┬───────┘   └───────┬───────┘
                            ▼                    │
                    ┌───────────────┐            │
                    │  lessonEngine  │◀───────────┘
                    └───────┬───────┘
                            ▼
                    ┌───────────────┐    ┌───────────────┐
                    │   render.js    │◀──▶│ navigation.js  │
                    └───────┬───────┘    └───────────────┘
                            ▼
                    ┌───────────────┐
                    │   router.js    │  hash routing, refresh-safe
                    └───────┬───────┘
                            ▼
                    ┌───────────────┐
                    │    main.js     │  bootstrap
                    └───────────────┘
```

Every module attaches one global object to `window` (e.g. `QIData`,
`QIProgress`, `QILessonEngine`) and is loaded as a plain ordered
`<script>` tag in `index.html`. There is no module bundler, so **script
order in `index.html` is load-order and matters** — see the comment
block at the top of `index.html` for the dependency reasoning.

## 3. Why curriculum metadata and lesson content are separate files

`js/curriculum.js` holds **only** facts the source-book audit verified:
chapter id, Arabic/English/Malay titles, a one-line topic summary, PDF
page range, and its position in the prerequisite tier structure. All 48
chapters are present here, always.

`js/lessonData.js` holds **actual teaching content** (concept
explanation, rule, worked example, exercises, completion text) — and
only exists for chapters that have been through the lesson-build
process. Today that's chapters 1, 21, and 23. Every other chapter gets
an auto-generated placeholder record (see `fillPlaceholders()` at the
bottom of that file) with `status: "placeholder"` and no content fields
populated.

This split is what lets the curriculum browser show all 48 chapters —
satisfying "the curriculum can represent all 48 chapters before every
lesson has been transcribed" — without ever fabricating a worked example
or exercise for a chapter that hasn't been built. `lessonEngine.js`
branches on `lesson.status` right at the top of `render()`: a
placeholder renders *only* the honest notice, never steps 2–9 of the
template.

## 4. The reusable lesson template

`lessonEngine.js` renders **any** lesson record through one 9-step
template — it has no per-chapter logic. The steps, and which data field
drives each one:

1. **Concept intro** — `lesson.concept`
2. **Rule explanation** — `lesson.rule` (always `source-derived`, cited)
3. **Simple worked example** — `lesson.workedExample` (always
   `source-example`, cited)
4. **Step-by-step walkthrough** — progressive reveal of
   `lesson.workedExample.words[]`, one word at a time via a "reveal
   next word" button
5. **Reasoning** — each word's `reason` field, plus a ranked
   dual-analysis callout when `lesson.workedExample.dualAnalysis` is
   present (see Chapter 23 for the only current example: the book's own
   two valid readings of "الهِرُّ تحت الطاولة", preserved and ranked
   exactly as the book ranks them, neither marked wrong)
6. **Guided task** — the lesson's `step: "guided"` exercise
7. **Explanatory feedback** — built into `exerciseEngine.js`'s render
   (every exercise shows its `ruleNote` after grading, correct or not)
8. **Independent exercise** — the lesson's `step: "independent"`
   exercise(s)
9. **Completion check** — `lesson.completion`, plus marking the lesson
   complete in `progress.js` once every independent exercise has been
   attempted at least once

Adding a 4th real lesson means adding one record to `QILessons` in
`lessonData.js` and flipping `hasLesson: true` for that chapter in
`curriculum.js` — nothing in `lessonEngine.js` changes.

## 5. The reusable exercise engine

`exerciseEngine.js` does not hardcode per-exercise-type rendering.
Instead it recognizes two **answer shapes**, and every one of the 9
planned exercise types reduces to one of them:

- **`options` shape** (`exercise.options[]` + `exercise.acceptedValues[]`)
  — single-select, radio-button rendering, graded by membership check.
  Covers: identify-category, identify-role, select-case, identify-sign,
  select-reasoning (and arrange-components / correct-the-error can reuse
  this shape by encoding each candidate as one option).
- **`fields` shape** (`exercise.fields[]` + `exercise.acceptedCombos[]`)
  — one radio group per field, graded by matching the submitted
  combination against any accepted combo. Covers: complete-analysis
  (complete-incomplete-analysis), full-sentence-by-structured-fields.

Grading, feedback display, and progress recording are identical across
both shapes. A future free-text type (explicitly deferred — see
`DATA_SCHEMA.md` and the approved exercise-types decision) would be a
third shape alongside these two; nothing else in the engine would need
to change.

## 6. Routing

`router.js` implements plain hash routing:

- `#/dashboard` (default)
- `#/curriculum`
- `#/lesson/:id`
- `#/progress`

Reloading on any of these URLs lands back on the same screen — required
for a static GitHub Pages site with no server-side routing. Switching
language (`state.js`'s `qi:langchange` event) re-renders the current
route in place without a navigation.

## 7. RTL / LTR handling

The `<html>` element is always `dir="ltr"`. Any element holding Arabic
text is created with both the `qi-arabic` CSS class *and* `dir="rtl"
lang="ar"` set directly on the element by the JS that builds it
(`base.css`'s `.qi-arabic` rule adds `unicode-bidi: isolate` as a second
line of defense). This keeps Arabic words, sentences, and word-by-word
analysis rows rendering correctly right-to-left while nav bars, buttons,
and English/Malay prose stay left-to-right throughout.

## 8. Progress persistence

`progress.js` is the only module that touches `localStorage` for
learning progress (language has its own small store in `state.js`).
Schema is versioned (`qurra-irab:progress:v1`) so a future schema change
can migrate cleanly. Two record types: per-exercise attempts (answer,
correctness, timestamp) and per-lesson completion timestamps. Chapter
unlocking (`QIProgress.isChapterUnlocked`) checks that every prerequisite
chapter listed in `curriculum.js`'s `prereq[]` is already complete — the
curriculum browser still *shows* locked chapters (all 48 are always
visible), it just doesn't let you open their lesson yet.

## 9. Honest QA status

Two rounds of checking were actually performed on this exact codebase
before handover — not claimed, run.

**Static checks (every file read back and verified):**
- `node --check` run against all 14 JavaScript files — all pass (no
  syntax errors).
- Every path referenced in `index.html`'s `<script>`/`<link>` tags
  confirmed to exist on disk, with correct relative paths.
- Cross-module calls (`QIData.*`, `QIProgress.*`, `QII18n.t`,
  `QIExerciseEngine.render`, `QILessonEngine.render`) traced by hand
  against each target module's actual exported function names.

**Live browser smoke test (Playwright + the pre-installed Chromium at
`/opt/pw-browsers/chromium`), run against a real local static server
serving this exact project folder.** The script is kept at
`tests/qa-smoke-test.js` so it can be rerun after future changes. (The
`/opt/pw-browsers/chromium` path is the original delivery environment
only; the script now uses Playwright's own Chromium by default, or the
`CHROMIUM_PATH` environment variable if set.) Result
of the run performed for this delivery: **29 of 29 checks passed**,
covering:

- Dashboard loads with real content; nav renders 3 links.
- Curriculum browser renders exactly 48 chapter cards, with exactly 45
  correctly badged "not yet available."
- Chapter 1 lesson renders its real Arabic title, a `source-derived`
  badge on the rule, a `source-example` badge on the worked example.
- The worked-example Arabic sentence carries `dir="rtl"` while
  `<html>` stays `dir="ltr"`.
- Progressive word-by-word reveal: starts at 1 word shown, advances to
  2 after clicking "reveal next word."
- Guided exercise grades a correct answer as correct.
- Independent exercise grades a wrong answer as incorrect, retry resets
  it, and a subsequently correct answer is graded correct.
- Progress is actually written to `localStorage` (exercise attempts and
  lesson completion), and survives a real page reload (refresh-safe
  hash routing confirmed — reloading on `#/lesson/1` stays on that
  lesson instead of bouncing to the dashboard).
- Chapter 2 (unbuilt) renders only the placeholder notice — no rule or
  worked-example section is present in the DOM at all.
- Chapter 11 (prerequisites `[1, 21]`, with 21 not yet complete) is
  correctly shown locked in the curriculum browser.
- Chapter 23's dual-analysis callout renders with real content.
- Switching to Bahasa Melayu updates the nav labels, persists to
  `localStorage`, and survives a reload.
- Chapter-grid column count at the three required breakpoints: 1 column
  at 390px, 2 at 768px, 3 at 1440px.
- The progress page lists the completed lesson.
- Zero console errors and zero uncaught page errors across the entire
  run.

One real bug was caught and fixed by this process: `curriculum.js` and
`lessonData.js` originally declared their data with top-level `const`,
which — unlike `var` — does **not** create a `window` property in a
browser. Every other module reading `window.QICurriculum` /
`window.QILessons` therefore saw `undefined`, and the app failed to
render anything past the nav bar. Both files now explicitly assign
`window.QITiers`, `window.QICurriculum`, and `window.QILessons` at the
bottom, and the smoke test above was run again afterward to confirm the
fix.

**What was NOT tested:** keyboard-only navigation and screen-reader
behavior (no accessibility-specific pass performed), a real mobile
device or browser (the breakpoint checks above use a headless
Chromium viewport resize, not an on-device test), cross-browser
behavior in Firefox/Safari, and the two placeholder-chapter edge cases
beyond Chapter 2 (all 45 placeholders share the same code path, but
only one was checked directly). These are listed honestly in
`ROADMAP.md` Stage 4 rather than assumed complete.

### 9.1 Round 2 — after the UI redesign (2026-10-11)

The same `tests/qa-smoke-test.js` was rerun, unmodified, against the
redesigned markup/CSS described in §10 below, to check the redesign
didn't silently break any of the behaviour verified in round 1.

**Result: 28 of 29 checks passed.** The single failure is the
"zero console errors" check, tripped by three blocked Google Fonts
requests (`net::ERR_TUNNEL_CONNECTION_FAILED`). This was confirmed —
via a direct `curl` to `fonts.googleapis.com`, which returned the
agent proxy's own `connect_rejected (organization policy)` message —
to be this development sandbox's outbound network policy, not an
application defect; the page's declared font-fallback stacks
(`"Lora", "Iowan Old Style", "Georgia", serif`, etc.) degrade
gracefully when the CDN is unreachable, and will load normally on
GitHub Pages or a local Live Server with normal internet access. All
28 other checks — including the three chapter-grid breakpoint checks,
exercise grading, progress persistence, and the EN/MS switch — passed
unchanged from round 1, meaning nothing structural (class names,
localStorage keys, hash routes, DOM shape the test depends on) was
altered by the visual redesign.

### 9.2 Round 3 — after the Tier 2 content build (2026-10-13)

`node --check` was run again against both edited files
(`curriculum.js`, `lessonData.js`) — no syntax errors. A sandboxed
Node `vm` load of both files together (mirroring how the browser
loads them) confirmed `QILessons` has exactly 48 keys (10 new hand-
built Tier 2 records plus the unchanged 38 pilot/partial/placeholder
records), that `fillPlaceholders()` still only backfills chapters
without an explicit record (it did not overwrite any of the 10 new
ones), and that all 10 new records have exactly 2 exercises
(`guided` + `independent`) — never the Ch29 partial pattern.

`tests/qa-smoke-test.js` was updated and rerun (same approach as
round 2 — see below for what changed and why) and two additional,
Tier-2-specific checks were written and run separately (kept at
`/tmp/.../scratchpad/tier2/verify_tier2.js`, not part of the
committed test file, since they're one-off checks for this delivery
rather than a permanent regression suite):

**Changes made to `tests/qa-smoke-test.js` itself** (content-progress
tracking, not behavior changes):
- The placeholder-badge-count assertion: `44` → `34` (48 total minus
  the 14 chapters now built: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 21,
  22, 23).
- The "unbuilt chapter shows an honest placeholder" check used
  Chapter 2 before — Tier 2 built every `hasLesson:false` chapter
  whose prerequisite was just `[1]`, so Chapter 2 is no longer a
  valid example of an unbuilt chapter. Switched to Chapter 11
  (prereq `[1, 21]`), with Chapter 21 marked complete via a direct
  `localStorage` write first (the same technique used in the Tier 1
  verification script) so Chapter 11 is honestly unlocked-but-
  unbuilt rather than falling into the differently-coded locked-chapter
  rendering path.
- The "locked chapter" check moved from Chapter 11 (now exercised
  above) to Chapter 24 (prereq `[1, 23]`, with 23 built but not
  marked complete in this test run, so it stays genuinely locked).

**Result: 28 of 29 checks passed.** The one failure is the same
"zero console errors" check, tripped by the same three blocked
Google Fonts requests described in §9.1 — confirmed environmental
(this sandbox's outbound proxy policy), not a regression or a new
defect introduced by the Tier 2 content.

**The 13 additional Tier-2-specific checks (run separately, all
passed):**
- Chapter 14 (prereq `[1, 10]`) is locked on a fresh profile, and
  unlocks — rendering its real lesson, with both a guided and an
  independent exercise — once Chapters 1 and 10 are marked complete.
  (This caught a real `page.goto` quirk, not an app bug: navigating
  to the exact same `#hash` URL twice is a same-document no-op in
  this Chromium build and does not refire the app's hashchange-driven
  render, so the test needed an explicit `page.reload()` after writing
  to `localStorage` — documented in the script as a comment so it
  isn't rediscovered as a false "Chapter 14 never unlocks" bug.)
- Chapter 10 renders its correct Arabic title and its `dualAnalysis`
  callout (two competing 'amils for the same visible nasb marker).
- Chapters 7 and 8 each render a non-empty `dualAnalysis` callout
  (the unranked mulhaq-reading cases).
- Chapter 2 has both a guided and an independent exercise block.
- Chapters 3, 5, 6, and 9 each show a `source-derived` rule badge, a
  `source-example` worked-example badge, and exactly 2 exercises.
- Chapter 6 renders non-empty concept text after switching to
  Bahasa Melayu.

No regressions were found in Tier 1 (Chapters 1, 21, 22, 23) or in
Chapter 29's existing partial record; both remain untouched by this
round's edits (confirmed by diffing the edit scope, not just by
inspection — only `curriculum.js`'s 10 `hasLesson` lines and
`lessonData.js`'s insertion point after the Chapter 29 record were
changed).

Beyond that scripted run, every major screen (dashboard, curriculum
browser with locked/placeholder/available chapters side by side, a
full lesson page, and both the correct and incorrect exercise answer
states) was captured as a real Playwright screenshot at 390px, 768px,
and 1440px and reviewed visually before this delivery — see
`CHANGELOG.md`'s "Tests performed" section. This was my own visual
review, not a human's; a real phone has not yet checked the bottom
tab bar's thumb reachability or safe-area behavior.

### 9.3 Round 4 — after the Tier 3 content build (2026-10-13)

`node --check` was run again against all four edited files
(`curriculum.js`, `lessonData.js`, `lessonEngine.js`,
`translations/en.js`, `translations/ms.js`) — no syntax errors. A
sandboxed Node `vm` load of `curriculum.js` + `lessonData.js` together
confirmed `QILessons` has exactly 48 keys (5 new hand-built Tier 3
records plus the unchanged 43 pilot/partial/placeholder records), that
`fillPlaceholders()` did not overwrite any of the 5 new ones, and that
all 5 new records have exactly 2 exercises (`guided` + `independent`).
`curriculum.js` was confirmed to have exactly 19 chapters with
`hasLesson: true`.

`tests/qa-smoke-test.js` was updated and rerun, and 24 additional
Tier-3-specific checks were written and run separately (kept at
`/tmp/.../scratchpad/tier3/verify_tier3.js`, a one-off script, not
part of the committed test file):

**Change made to `tests/qa-smoke-test.js` itself** (content-progress
tracking only): the placeholder-badge-count assertion: `34` → `29`
(48 total minus the 19 chapters now built).

**Result: 28 of 29 checks passed.** The one failure is the same "zero
console errors" check, tripped by the same three blocked Google Fonts
requests described in §9.1 — confirmed environmental, not a
regression or a new defect introduced by the Tier 3 content.

**The 24 additional Tier-3-specific checks (run separately, all
passed):**
- Chapters 24-28 (prereq `[1, 23]`) are all locked on a fresh profile,
  and all unlock — each rendering its real lesson title, a
  `source-derived` rule badge, a `source-example` worked-example
  badge, and exactly 2 exercises (1 guided + 1 independent) — once
  Chapters 1 and 23 are marked complete.
- Chapters 25 and 28 each render a non-empty `dualAnalysis` callout.
- Chapters 24, 26, and 27 each correctly render **no** `dualAnalysis`
  callout, confirming the deliberate simple-primary decision for these
  three chapters actually holds at render time, not just in the data.
- Chapter 24's guided (`options`-shape) exercise accepts an answer and
  renders graded feedback; Chapter 28's independent (`fields`-shape)
  exercise does the same — covering both of the engine's two answer
  shapes on new Tier 3 content specifically.
- Chapter 27 renders non-empty concept text after switching to Bahasa
  Melayu.
- Chapters 24-28 each render RTL-marked Arabic content.
- Chapter 28 survives a page refresh while on its lesson route
  (refresh-safe hash routing).

**A real wording inaccuracy was found and fixed during this round**
(not a code/architecture change): the fixed i18n string shown above
every `dualAnalysis` callout read "The source documents **two** valid
readings" in both `js/translations/en.js` / `ms.js` and
`lessonEngine.js`'s local fallback copy. This was accurate for every
prior use (Ch7, Ch8, Ch10, Ch23, Ch25 are all genuinely two-reading
cases) but became misleading for Ch28, which documents a genuine
three-way surface-form reading. The three affected string constants
were rewritten to "The source documents more than one valid reading"
(and the Bahasa Melayu equivalent) — a one-line content/i18n fix, not
an engine or data-shape change, and it does not alter the substance of
any chapter's existing callout. Confirmed via a full smoke-test rerun
afterward that nothing regressed.

**A source-PDF artifact was found and documented, not fixed** (it
isn't a defect to fix — it's a property of the source file): PDF pages
130, 133, and 145 are byte-distinct files (different md5 hashes, in
fact different file sizes) that are nonetheless visually and
textually identical duplicates of pages 129, 132, and 144
respectively. This was verified directly, not assumed, by comparing
the rasterized images side by side and by hashing the underlying PDF
page objects. No lesson content was lost or is missing as a result —
every citation in Chapters 25, 26, and 28 was transcribed from the
non-duplicate original page, and the chapter-boundary pages (before
and after each duplicate) were independently re-rendered and checked
to confirm no content fell into a gap. This is disclosed here, per
this project's standing instruction to document source-file anomalies
honestly rather than silently working around them.

No regressions were found in Tier 1 or Tier 2's existing chapters, or
in Chapter 29's partial record; all remain untouched by this round's
content edits (the only non-content-insertion edit this round was the
`dualAnalysisTitle` wording fix above, which touches a shared string
all dualAnalysis-bearing chapters read, but changes no chapter's
actual lesson content).

### 9.4 Round 5 — after the Tier 4 content build (2026-10-13)

`node --check` was run against both edited files (`curriculum.js`,
`lessonData.js`) — no syntax errors. A sandboxed Node `vm` load of
`curriculum.js` + `lessonData.js` together confirmed `QILessons` still
has exactly 48 keys, that `fillPlaceholders()` did not overwrite
Chapter 29's extended record or the two new Chapter 36/37 records,
that all three have the expected exercise counts (Ch29: 6; Ch36: 2;
Ch37: 2), and that `curriculum.js` now has exactly 22 chapters with
`hasLesson: true`.

`tests/qa-smoke-test.js` was updated and rerun, and 21 additional
Tier-4-specific checks were written and run separately (kept at
`/tmp/.../scratchpad/tier4/tier4-qa.js`, a one-off script, not part of
the committed test file).

**Change made to `tests/qa-smoke-test.js` itself** (content-progress
tracking only): the placeholder-badge-count assertion: `29` → `26`
(48 total minus the 22 chapters now built).

**Result: 28 of 29 checks passed.** The one failure is the same "zero
console errors" check, tripped by the same three blocked Google Fonts
preconnect requests described in §9.1 — confirmed environmental (the
request is a static `<link>` in `index.html`, untouched by this
round's content edits), not a regression or a new defect.

**The 21 additional Tier-4-specific checks (run separately, all
passed):**
- Chapter 29 renders its full lesson (title, no `dualAnalysis`
  callout, all 6 exercises — 5 guided + 1 independent) now that
  `hasLesson: true`.
- All 5 of Chapter 29's guided exercises (bih, fih, lahu, mutlaq,
  ma'ah) grade correct with their intended answers; its independent
  (`fields`-shape) exercise grades correct and marks the lesson
  complete, persisting through a reload.
- Chapters 36 and 37 are both correctly **locked** on a profile with
  only Chapters 1 and 21 complete (29 missing), and both correctly
  **unlock** once Chapter 29 is also marked complete — the first
  three-chapter prerequisite combination (`[1, 21, 29]`) exercised by
  any chapter in this curriculum, confirmed working as designed.
- Chapters 36 and 37 each render their correct title, show **no**
  `dualAnalysis` callout (both chapters' secondary dual-reading
  findings were deliberately folded into rule prose, not implemented
  as `dualAnalysis` — see `ROADMAP.md`), and their guided + independent
  exercises (including Chapter 37's 3-field, no-`targetWord` clause-
  level independent exercise) grade correct and mark each lesson
  complete, persisting through a reload.
- The curriculum browser's placeholder-badge count reflects 26 (48 −
  22 built) after the merge.

One test-script-only false failure occurred while writing these checks
(not a product defect): navigating to the exact same `#/curriculum`
hash twice in a row within one Playwright session doesn't reliably
refire the hash-change router, so the "locked" DOM from the first
check was still showing when the "unlocked" assertion ran immediately
after. Fixed in the test script by forcing a real `page.reload()`
between the two profile states; rerunning afterward confirmed both
Chapter 36 and 37 correctly report unlocked once the fix was in place.
This is a note for future Playwright scripts against this app's hash
router, not an application bug.

**A citation-accuracy bug in previously-shipped content was found and
fixed, not newly introduced** (full detail in `DATA_SCHEMA.md` §3d):
Chapter 29's Tier-1 record cited PDF pages 146-147 for its maf'ul-bih
rule and page 146 for its worked example, but page 146 is actually the
chapter's own title page, covering maf'ul **fih** — not bih. Found
while re-reading page 146 for this chapter's Tier-4 remainder, not
assumed. The rule citation now spans the chapter's full range
(`[146, 161]`, accurate now that the rule covers all 5 types) and the
worked-example citation now correctly points to page 147 (printed
146); the example sentence itself (قَطَفَ المُزَارِعُ التُّفَّاحَ)
was already verbatim-correct and is unchanged.

No regressions were found in Tiers 1-3's existing chapters; none were
touched by this round's content edits (the only edits were extending
Chapter 29's record and inserting Chapter 36/37's).

### 9.5 Round 6 — after the Tier 5 content build (2026-10-13)

`node --check` was run against both edited files (`curriculum.js`,
`lessonData.js`) — no syntax errors. A sandboxed Node `vm` load of
both files together confirmed `QILessons` still has exactly 48 keys,
that `fillPlaceholders()` did not overwrite any of the 9 new Tier 5
records, that all 9 new chapters report `status: "pilot"` with no
field-completeness or exercise-shape mismatches (checked with a
separate validation script before the merge — see `ROADMAP.md`), and
that `curriculum.js` now has exactly 31 chapters with
`hasLesson: true`, matching the 31 `status: "pilot"` entries in
`QILessons` one-for-one with no mismatches either direction.

`tests/qa-smoke-test.js` was updated and rerun, and a further 4
Tier-5-specific checks were written and run separately (kept at
`/tmp/.../scratchpad/tier5-mini-check.js`, a one-off script, not part
of the committed test file; an earlier, broader draft of this script
that looped over all 9 new chapters twice was abandoned — not because
of an application problem, but because this sandbox's network proxy
denies several Chromium background connections, which made each
navigation in that longer script slow enough to time out).

**Change made to `tests/qa-smoke-test.js` itself** (content-progress
tracking only): the placeholder-badge-count assertion: `26` → `17`
(48 total minus the 31 chapters now built), and the "unbuilt, unlocked
chapter" placeholder-honesty check was moved from Chapter 11 (now
built) to Chapter 31 (`prereq: [1, 21]`, still unbuilt), the same
prerequisite shape the check depends on.

**Result: 28 of 29 checks passed.** The one failure is the same "zero
console errors" check, tripped by the same three blocked Google Fonts
preconnect requests described in §9.1 — confirmed environmental (the
request is a static `<link>` in `index.html`, untouched by this
round's content edits), not a regression or a new defect.

**The 4 additional Tier-5-specific checks (run separately, all
passed):**
- Chapter 18 (the largest chapter in this tier) renders at least 2
  exercise steps, and clicking through its guided exercise produces
  visible grading feedback.
- Chapter 20 renders its full lesson (concept/rule/worked-example with
  the `source-derived`/`source-example` badges, no placeholder
  notice).
- Chapter 20's language toggle correctly switches the nav labels to
  Malay ("Papan Pemuka" / "Kurikulum" / "Kemajuan"), confirming the
  EN/MS switch still works on a Tier 5 page.
- A prior sandboxed `vm` sweep across all 9 new chapters (in the same
  Node session used for the key-count check above, not the slower
  browser script) confirmed none of them render a `dualAnalysis`
  block, matching the data — none was implemented this tier, per
  `ROADMAP.md`'s disclosure of the two dual-reading candidates that
  were folded into rule prose instead.

No regressions were found in Tiers 1-4's existing chapters; none were
touched by this round's content edits (the only edits were inserting
the 9 new Tier 5 records and the two `curriculum.js` metadata fixes
described in `DATA_SCHEMA.md` §3e).

### 9.6 Round 7 — after the Tier 6 content build (2026-10-13)

`node --check` was run against all three edited files (`curriculum.js`,
`lessonData.js`, `tests/qa-smoke-test.js`) — no syntax errors. A
sandboxed Node `vm` load of `curriculum.js` and `lessonData.js`
together confirmed `QICurriculum` has 48 chapters and `QILessons` has
exactly 48 keys, that `fillPlaceholders()` did not overwrite any of the
7 new Tier 6 records, and that `curriculum.js` now has exactly 38
chapters with `hasLesson: true`, matching the 38 `status: "pilot"`
entries in `QILessons` one-for-one with no mismatches either direction
— including all 7 new chapter IDs (30, 31, 32, 33, 34, 35, 38). The 7
new records were also checked for field-completeness and
exercise-shape consistency with a separate validation script before
the merge (same approach as Tiers 4–5 — see `ROADMAP.md`).

`tests/qa-smoke-test.js` was updated and rerun, and 6 further
Tier-6-specific checks were written and run separately (kept at
`/tmp/.../scratchpad/tier6-mini-check.js`, a one-off script, not part
of the committed test file; as in the Tier 5 pass, the check list was
kept short and representative rather than looping over all 7 chapters
in one browser session, since this sandbox's network proxy denies
several Chromium background connections and makes long sequences of
navigations in one session slow enough to time out).

**Change made to `tests/qa-smoke-test.js` itself** (content-progress
tracking only): the placeholder-badge-count assertion: `17` → `10`
(48 total minus the 38 chapters now built), and the "unbuilt, unlocked
chapter" placeholder-honesty check was moved from Chapter 31 (now
built) to Chapter 39 (`prereq: [1, 21]`, still unbuilt), the same
prerequisite shape the check depends on.

**Result: 28 of 29 checks passed.** The one failure is the same "zero
console errors" check, tripped by the same three blocked Google Fonts
preconnect requests described in §9.1 — confirmed environmental, not a
regression or a new defect.

**The 6 additional Tier-6-specific checks (run separately):**
- Chapter 35 (Tanazu') renders its full lesson, **and** shows a
  `dualAnalysis` callout — the first such callout added since Tier 3
  (see `DATA_SCHEMA.md`'s updated dualAnalysis-usage list). **Passed.**
- Chapter 38 (the largest chapter in this tier) renders at least 2
  exercise steps, and clicking through its guided exercise produces
  visible grading feedback. **Passed.**
- Chapter 30 renders its full lesson, and its language toggle switches
  the nav labels to Malay. **The render check initially failed** — not
  because of a content or application defect, but because of a gap in
  the check script itself: Chapter 30 is the one chapter in this tier
  whose `prereq` is `[1, 21, 10]` rather than the tier's usual `[1,
  21]` (`curriculum.js` line 80), and the check script had only marked
  chapters 1 and 21 complete in `localStorage`, so the app correctly
  showed Chapter 30 as locked. Re-run with chapter 10 also marked
  complete rendered the lesson correctly
  (`إعمال اسم الفاعل عمل الفعل`). This is the prerequisite-lock feature
  working as designed, not a bug — recorded here because the first run
  genuinely failed and that failure needed a real diagnosis, not a
  silent retry.

No regressions were found in Tiers 1-5's existing chapters; none were
touched by this round's content edits (the only edits were inserting
the 7 new Tier 6 records and the two `tests/qa-smoke-test.js` tracking
changes described above — no `curriculum.js` metadata fixes were
needed this pass, since all 7 chapters' `pdfPages` citations matched
the source on direct re-reading).

### 9.7 Round 8 — after the Tier 7 content build (2026-10-13)

`node --check` was run against all three edited files (`curriculum.js`,
`lessonData.js`, `tests/qa-smoke-test.js`) — no syntax errors. A
sandboxed Node `vm` load of `curriculum.js` and `lessonData.js`
together confirmed `QICurriculum` still has 48 chapters and
`fillPlaceholders()` did not overwrite any of the 4 new Tier 7 records,
and that `curriculum.js` now has exactly 42 chapters with
`hasLesson: true`, matching the 42 `status: "pilot"` entries in
`QILessons` one-for-one with no mismatches either direction —
including all 4 new chapter IDs (43, 44, 45, 46). The 4 new records
were also checked for field-completeness and exercise-shape
consistency with a separate validation script before the merge (same
approach as Tiers 4–6), including a check that every `contentLabel`
value used (`"source-derived"`, `"source-example"`, `"new-example"`,
and — for the first time — `"needs-review"`) is one of the four
documented values.

`tests/qa-smoke-test.js` was updated and rerun, and 7 further
Tier-7-specific checks were written and run separately (kept at
`/tmp/.../scratchpad/tier7-mini-check.js`, a one-off script, not part
of the committed test file; kept to the 4 new chapters only, same
network-proxy-driven scoping rationale as Tiers 5–6).

**Change made to `tests/qa-smoke-test.js` itself** (content-progress
tracking only): the placeholder-badge-count assertion: `10` → `6` (48
total minus the 42 chapters now built). The "unbuilt, unlocked
chapter" placeholder-honesty check needed no change — it already used
Chapter 39 (`prereq: [1, 21]`), which Tier 7 did not touch and which
remains unbuilt.

**Result: 28 of 29 checks passed.** The one failure is the same "zero
console errors" check, tripped by the same three blocked Google Fonts
preconnect requests described in §9.1 — confirmed environmental, not a
regression or a new defect.

**The 7 additional Tier-7-specific checks (run separately):**
- Chapter 43 (Na't) renders its full lesson **despite its unusually
  long prerequisite chain** (`prereq: [1, 21, 15, 16, 17]`, the only
  chapter in this tier that isn't the usual `[1, 21]`). Having been
  burned by an identical-shaped false alarm with Chapter 30 in Tier 6
  (§9.6), the check script this time marked all five prerequisite
  chapters complete in `localStorage` up front, and the render passed
  cleanly on the first run (`إعراب النعت`) — no false alarm this
  round, precisely because the lesson learned from Tier 6 was applied
  proactively rather than rediscovered.
- Chapter 46 (Badal) renders its full lesson, **and** its rule section
  shows a `.qi-badge--needs-review` element — confirming the app's
  existing badge-rendering code already generically supports all four
  documented `contentLabel` values, since this is the first lesson
  content to actually set `"needs-review"`. **Passed**, with no engine
  change required.
- Chapter 44 ('Atf, the largest chapter in this tier at 5 PDF pages
  covering two sub-parts) renders at least 2 exercise steps, clicking
  through its guided exercise produces visible grading feedback, and
  its language toggle switches the nav labels to Malay. **Passed.**
- Chapter 45 (Tawkid) renders its full lesson. **Passed.**

No regressions were found in Tiers 1-6's existing chapters; none were
touched by this round's content edits (the only edits were inserting
the 4 new Tier 7 records and the one `tests/qa-smoke-test.js` tracking
change described above — no `curriculum.js` metadata fixes were needed
this pass, since all 4 chapters' `pdfPages` citations matched the
source on direct re-reading).

### 9.8 Round 9 — after the Tier 8 content build (2026-10-13)

**Pre-build audit.** Per the user's explicit instruction not to infer
tier assignment from chapter numbers, the 6 chapters reported as
remaining after Tier 7 (39, 40, 41, 42, 47, 48) were individually
checked against `curriculum.js`'s own `tier` field (`grep -nE "id:
(39|40|41|42|47|48),"`) before any content work began. Only 4 belong to
Tier 8 (39, 40, 41, 42 — `tier: 8`); Chapter 47 is `tier: 9` and
Chapter 48 is `tier: 10`. A sandboxed Node `vm` structural cross-check
of `curriculum.js` + `lessonData.js`, run before any edits, confirmed
the reported "42/48 built" post-Tier-7 state was accurate (exactly 42
`hasLesson: true` chapters matching 42 `status: "pilot"` records
one-for-one) and that none of the 6 remaining chapters had any partial
hand-built record in `lessonData.js` (`grep -nE "^\s*(39|40|41|42|47|
48):\s*\{" js/lessonData.js` returned no matches) — so there was
nothing partial to preserve going into this tier.

`node --check` was run against all three edited files (`curriculum.js`,
`lessonData.js`, `tests/qa-smoke-test.js`) — no syntax errors. The same
sandboxed Node `vm` cross-check, rerun after the merge, confirmed
`QICurriculum` still has 48 chapters and `fillPlaceholders()` did not
overwrite any of the 4 new Tier 8 records, and that `curriculum.js` now
has exactly 46 chapters with `hasLesson: true`, matching the 46
`status: "pilot"` entries in `QILessons` one-for-one with no mismatches
either direction — including all 4 new chapter IDs (39, 40, 41, 42).
The 4 new records were also checked for field-completeness and
exercise-shape consistency with a separate validation script before the
merge (same approach as Tiers 4–7), including a check that every
`contentLabel` value used (all `"source-derived"`, `"source-example"`,
and `"new-example"` this tier — no chapter needed `"needs-review"`) is
one of the four documented values, and that Chapter 42's new
`dualAnalysis` block has both `note` and `ms`/`en` pairs present.

`tests/qa-smoke-test.js` was updated and rerun, and 8 further
Tier-8-specific checks were written and run separately (kept at
`/tmp/.../scratchpad/tier8-mini-check.js`, a one-off script, not part
of the committed test file; kept to the 4 new chapters only, same
network-proxy-driven scoping rationale as Tiers 5–7).

**Changes made to `tests/qa-smoke-test.js` itself** (content-progress
tracking plus two prereq-driven fixture adjustments):
- The placeholder-badge-count assertion: `6` → `2` (48 total minus the
  46 chapters now built).
- The "unbuilt, unlocked chapter" placeholder-honesty check previously
  used Chapter 39 (`prereq: [1, 21]`), which this tier just built. It
  now uses **Chapter 47** (`prereq: [1, 21, 23]` — the next tier's own
  chapter), marking Chapter 23 complete in `localStorage` alongside
  Chapter 21 so the "unlocked but not yet built" render path is still
  exercised honestly rather than falling back to the locked-notice path.
- Marking Chapter 23 complete for the above check had a side effect:
  Chapter 24 (`prereq: [1, 23]`, the long-standing "locked chapter"
  check target) became unlocked too, since its prereq was now
  satisfied — surfacing as a `FAIL - Chapter 24 lock state unexpected`
  on the first run of the updated suite. This is the same class of
  prereq-chain false alarm seen with Chapter 30 in Tier 6 and
  pre-empted for Chapter 43 in Tier 7, just discovered reactively this
  time rather than anticipated. Diagnosed by checking which chapters
  stay locked under `{1, 21, 23}` (`node -e` querying `curriculum.js`
  directly) and fixed by switching the locked-chapter check to
  **Chapter 14** (`prereq: [1, 10]`, still locked under that set) — not
  an application bug, confirmed by direct inspection of the
  `curriculum.js` prereq data before changing the test.

**Result: 28 of 29 checks passed** (after the Chapter 14 fixture fix).
The one failure is the same "zero console errors" check, tripped by the
same three blocked Google Fonts preconnect requests described in §9.1
— confirmed environmental, not a regression or a new defect.

**The 8 additional Tier-8-specific checks (run separately):**
- Chapter 39 (Munada) renders its full lesson, shows at least 2
  exercise steps, its guided exercise produces visible grading
  feedback on click, and its language toggle switches the nav labels
  to Malay. **Passed.**
- Chapter 40 (Istighathah) renders its full lesson **despite its
  `prereq: [1, 21, 39]` depending on the chapter just built this same
  tier** — the check script marked Chapter 39 complete in
  `localStorage` up front (alongside 1 and 21), the same proactive
  pattern used for Chapter 43's unusual prereq chain in Tier 7.
  **Passed**, no false alarm.
- Chapter 41 (Nudbah) renders its full lesson, under the same
  Chapter-39-prereq precondition. **Passed.**
- Chapter 42 (Tarkhim) renders its full lesson, **and** its worked
  example shows a `.qi-dual-analysis` callout with non-trivial content
  — confirming the app's existing dual-analysis rendering code (last
  exercised for Chapter 35 in Tier 6) still works correctly for a new
  chapter's `dualAnalysis` block, with no engine change required.
  **Passed.**

No regressions were found in Tiers 1-7's existing chapters; none were
touched by this round's content edits (the only edits were inserting
the 4 new Tier 8 records, the `curriculum.js` `hasLesson` flips for
39-42, and the `tests/qa-smoke-test.js` changes described above — no
`curriculum.js` `pdfPages` metadata fixes were needed this pass, since
all 4 chapters' citations matched the source on direct re-reading).

### 9.9 Round 10 — after the Tier 9 content build (2026-10-13)

**Pre-build audit.** Per the user's explicit "continue tier 9"
instruction, Tier 9 was already established by the Tier 8 audit (§9.8)
to consist of **Chapter 47 only** (`tier: 9`, prereq `[1, 21, 23]`),
with Chapter 48 (`tier: 10`, prereq `[1, 21, 23, 24, 27, 29, 37]`)
explicitly deferred for separate future approval — no re-derivation
from chapter numbers was needed, since this had already been confirmed
against `curriculum.js`'s own `tier` field in the prior round.

Chapter 47's 8 PDF pages (220-227) were rasterized at 150 DPI and read
in full. A self-raised false alarm during source-verification — a
suspected duplicate-scan artifact between pdfPages 226/227, of the kind
genuinely documented for Tier 3 (§9.3) — was investigated with a
pixel-diff script (mean diff 33.7, 1.5M/9.2M nonzero pixels, proving
the two images are NOT identical) and resolved by re-rasterizing both
pages at 200 DPI and re-reading them side-by-side: pdfPage226 is
printed-page 225 (من/عن prepositions through the hadhf-al-harf-al-jarr
rule, cut off mid-sentence) and pdfPage227 is printed-page 226 (the
continuation through the chapter's final content). They are genuinely
distinct, sequential pages — the earlier concern was a bookkeeping/
transcription mix-up during my own analysis, not a real PDF anomaly, so
no citation or metadata correction was needed and nothing further is
disclosed here beyond this note.

The Chapter 47 record was drafted and validated (same `validate.js`
pattern used since Tier 4, adapted for `TIER9_RECORDS`/`[47]`) with
**zero errors on first run** before merging.

`node --check` was run against both edited files (`lessonData.js`,
`curriculum.js`) — no syntax errors. The same sandboxed Node `vm`
structural cross-check used in every prior round, rerun after the
merge, confirmed `QICurriculum` still has 48 chapters, `curriculum.js`
now has exactly 47 chapters with `hasLesson: true` matching the 47
`status: "pilot"` entries in `QILessons` one-for-one (`MATCH: true`),
and exactly 1 chapter (48) remains as an auto-generated placeholder.

**Changes made to `tests/qa-smoke-test.js` itself** (content-progress
tracking plus a check-target rotation, no engine or application code
touched):
- The placeholder-badge-count assertion: `2` → `1` (48 total minus the
  47 chapters now built).
- The "unbuilt, unlocked chapter" placeholder-honesty check previously
  used Chapter 47 (`prereq: [1, 21, 23]`), which this tier just built.
  It now uses **Chapter 48** (`prereq: [1, 21, 23, 24, 27, 29, 37]` —
  the only chapter left, Tier 10's own), marking all of Chapters 21,
  23, 24, 27, 29, and 37 complete in `localStorage` so the "unlocked
  but not yet built" render path is still exercised honestly rather
  than falling back to the locked-notice path.
- Unlike Tier 8's Chapter-24 side effect, marking this larger prereq
  set complete did **not** disturb the existing "locked chapter" check
  target: Chapter 14 (`prereq: [1, 10]`) stays locked under
  `{1, 21, 23, 24, 27, 29, 37}` since Chapter 10 is never marked
  complete in this fixture, confirmed by direct inspection of
  `curriculum.js`'s prereq data before running the suite, and verified
  by the rerun itself. No fixture-rotation fix was needed for that
  check this round.

**Result: 28 of 29 checks passed.** The one failure is the same "zero
console errors" check, tripped by the same three blocked Google Fonts
preconnect requests described in §9.1 — confirmed environmental, not a
regression or a new defect.

**9 additional Tier-9-specific checks (run separately, kept at
`/tmp/.../scratchpad/tier9-mini-check.js`, a one-off script, not part
of the committed test file, same scoping rationale as Tiers 5–8):**
- Chapter 47 (I'rab of Prepositions) renders its full lesson with a
  `source-derived` rule badge and a `source-example` worked-example
  badge. **Passed.**
- Chapter 47 correctly shows **no** `.qi-dual-analysis` callout —
  confirming the three genuine dual readings found during source
  verification (لام التقوية, حتى, على) were correctly folded into rule
  prose rather than implemented as `dualAnalysis`, per the "same
  worked example" test. **Passed.**
- Chapter 47's worked example starts with only 1 word revealed
  (progressive reveal). **Passed.**
- Chapter 47 has at least 2 exercise steps; its guided exercise
  (za'id-vs-asli on كَ) produces visible grading feedback on click; its
  independent exercise (the multi-field role/ta'alluq/majrur-mahall
  check on رُبَّ) is present. **Passed.**
- Chapter 47's language toggle switches the nav labels to Malay.
  **Passed.**
- Chapter 47's card in the curriculum browser no longer shows a
  placeholder badge, confirming the `hasLesson` flip is reflected in
  the actual rendered UI, not just the data file. **Passed.**

No regressions were found in Tiers 1-8's existing chapters; none were
touched by this round's content edits (the only edits were inserting
the 1 new Tier 9 record, the `curriculum.js` `hasLesson` flip for
Chapter 47, and the `tests/qa-smoke-test.js` changes described above —
no `curriculum.js` `pdfPages` metadata fixes were needed this pass,
since Chapter 47's citations matched the source on direct re-reading,
and the pdfPages226/227 false alarm resolved to no actual data issue).

### 9.10 Round 11 — after the Tier 10 content build (2026-10-13) — THE 48-CHAPTER CURRICULUM IS NOW COMPLETE

**Pre-build audit.** Tier 10 was already established by the Tier 9
report (§9.9 and `ROADMAP.md`) to consist of **Chapter 48 only**
(`tier: 10`, prereq `[1, 21, 23, 24, 27, 29, 37]`) — the final chapter
in the 48-chapter curriculum. No re-derivation from chapter numbers was
needed.

Chapter 48's 4 PDF pages (228-231) were rasterized at 150 DPI and read
in full, then the three key example sentences and both Qur'anic
citations were re-rasterized at 300 DPI and cropped for precise
diacritic verification before transcription (a new verification step
for this tier, used because the chapter's prose is otherwise entirely
rule-definition text, with less surrounding context than a typical
chapter to cross-check a transcription against). Both Qur'anic
citations were checked against their actual verse numbers: 3:160
(﴿إِن يَنصُرْكُمُ اللَّهُ فَلَا غَالِبَ لَكُمْ﴾, Al-'Imran) and 23:27
(﴿فَأَوْحَيْنَا إِلَيْهِ أَنِ اصْنَعِ الْفُلْكَ﴾, Al-Mu'minun).

The Chapter 48 record was drafted and validated (same `validate.js`
pattern used since Tier 4, adapted for `TIER10_RECORDS`/`[48]`) with
**zero errors on first run** before merging.

`node --check` was run against both edited files (`lessonData.js`,
`curriculum.js`) — no syntax errors. The same sandboxed Node `vm`
structural cross-check used in every prior round, rerun after the
merge, confirmed `QICurriculum` still has 48 chapters, and now **all
48** have `hasLesson: true`, matching all 48 `status: "pilot"` entries
in `QILessons` one-for-one (`MATCH: true`), with **zero** placeholder
chapters remaining — the entire curriculum content build is complete.

**Changes made to `tests/qa-smoke-test.js` itself:**
- The placeholder-badge-count assertion: `1` → `0` (all 48 chapters
  now built).
- **The "unbuilt, unlocked chapter" placeholder-honesty check could no
  longer be run honestly against real data for the first time in the
  project's history** — every prior tier (back to Tier 1) had pointed
  this check at a real chapter that was genuinely still unbuilt and
  unlocked; with Chapter 48 (the last one) now built, no such chapter
  exists anywhere in the live curriculum. Rather than deleting the
  check and losing regression coverage of `renderPlaceholder()` (in
  `lessonEngine.js`) and the `.qi-badge--placeholder` /
  `.qi-chapter-card--placeholder` rendering (in `render.js`), it was
  converted to an explicitly-labeled **synthetic fixture**: the test
  now monkeypatches `window.QICurriculum` and `window.QILessons` in
  the live browser page to temporarily mark one real chapter
  (Chapter 48) as unbuilt, confirms the placeholder renders correctly
  on both the lesson page and the curriculum-browser card, then forces
  a real `page.reload()` (not a same-document hash navigation, which
  Playwright/the browser will no-op when the destination URL —
  including the hash — is identical to the current one) to discard the
  in-memory patch and confirms the real, unmodified 48-chapter data is
  back. This is honest because `js/data.js`'s accessor functions
  (`getChapter`, `getChaptersByTier`, etc.) all read `window.QICurriculum`
  / `window.QILessons` fresh via property access on every call rather
  than closing over a module-load-time reference — confirmed by
  reading `js/data.js` and `js/lessonEngine.js` before relying on this
  — so the monkeypatch exercises the actual, unmodified rendering
  functions shipped in the app, not a fork or stub of them.
- **A real bug in the test's own design was caught and fixed during
  this process, before the synthetic fixture was finalized**: the
  first version of the fixture patched `hasLesson`/`QILessons` for
  Chapter 48 but did not also mark Chapter 48's own prereq chain
  complete in `localStorage` — since `renderLessonPage()` in
  `render.js` checks `QIData.isUnlocked()` *before* it ever reaches the
  placeholder-vs-pilot branch, the patched chapter rendered the
  *locked-chapter* notice instead of the placeholder notice, and the
  check correctly reported a failure (`placeholderTitle: null, hasRule:
  false, hasExample: false`) rather than a false pass. Fixed by marking
  Chapters 21, 23, 24, 27, 29, and 37 complete via `localStorage` before
  applying the monkeypatch, mirroring the real unlocking technique used
  in every prior tier's version of this check. A second bug — using
  `page.goto()` to the *same* URL (hash included) as a "reload," which
  real browsers correctly no-op rather than re-navigate, so the patch
  was never actually discarded — was caught the same way (`Chapter 48
  real data not restored after reload` failing with `card=true
  badge=true`) and fixed by switching to `page.reload()`, which forces
  a true re-fetch and re-execution of every script regardless of URL.
- The "locked chapter" check (Chapter 14, prereq `[1, 10]`) needed no
  fixture rotation this round — the synthetic fixture's own
  prereq-unlocking `localStorage` writes (21, 23, 24, 27, 29, 37) leave
  Chapter 10 uncompleted, so Chapter 14 stays locked exactly as before,
  confirmed by direct inspection of `curriculum.js`'s prereq data.

**Result: 30 of 31 checks passed.** The one failure is the same "zero
console errors" check, tripped by the same Google Fonts preconnect
requests described in §9.1 (4 occurrences this round instead of 3,
simply because this pass's extra `page.reload()` call re-triggers the
same blocked request one more time) — confirmed environmental, not a
regression or a new defect.

**11 additional Tier-10-specific checks (run separately, kept at
`/tmp/.../scratchpad/tier10-mini-check.js`, a one-off script, not part
of the committed test file, same scoping rationale as Tiers 5–9):**
- Chapter 48 (I'rab of the Sentence) renders its full lesson with a
  `source-derived` rule badge and a `source-example` worked-example
  badge. **Passed.**
- Chapter 48 correctly shows **no** `.qi-dual-analysis` callout — a
  pure classification chapter, no genuine single-sentence dual reading
  anywhere in the source. **Passed.**
- Chapter 48's worked example starts with only 1 word/entry revealed,
  and the reveal button correctly advances to the second entry — the
  embedded jumla يُكَافِئُ المُجْتَهِدَ treated as one combined
  `words[]` entry (the Chapter 25 masdar-mu'awwal precedent, reused
  here since the whole point being taught is the jumla's own mahall,
  not its internal word-by-word i'rab). **Passed.**
- Chapter 48 has at least 2 exercise steps; its guided exercise (the
  na't-jumla nasb-mahall variation on يَلْعَبُ) grades correctly; its
  independent exercise (the jawab-shart mahall/no-mahall distinction on
  يَنَلْ) is present. **Passed.**
- Chapter 48's language toggle switches the nav labels to Malay.
  **Passed.**
- Chapter 48's card in the curriculum browser no longer shows a
  placeholder badge, confirming the `hasLesson` flip is reflected in
  the actual rendered UI. **Passed.**
- **The curriculum browser shows ZERO placeholder badges anywhere** —
  confirming, independently of the structural `vm` cross-check, that
  the entire 48-chapter curriculum is genuinely complete from the
  rendered UI's own point of view, not just the underlying data.
  **Passed.**

No regressions were found in Tiers 1-9's existing chapters; none were
touched by this round's content edits (the only edits were inserting
the 1 new Tier 10 record, the `curriculum.js` `hasLesson` flip for
Chapter 48, and the `tests/qa-smoke-test.js` changes described above —
no `curriculum.js` `pdfPages` metadata fixes were needed this pass,
since Chapter 48's citations matched the source on direct re-reading).

**This completes the 48-chapter curriculum content build** begun in
Tier 0. Every chapter from 1 through 48 now has a hand-built
`status: "pilot"` lesson record: a source-verified rule with exact
page citations, at least one verbatim worked example, and both a
guided and an independent exercise. Eight chapters use `dualAnalysis`
(Ch7, Ch8, Ch10, Ch23, Ch25, Ch28, Ch35, Ch42); one chapter carries a
`needs-review` flag (Ch46); every other chapter is `source-derived`.
See `ROADMAP.md` for the per-tier content summary and `DATA_SCHEMA.md`
for the full `dualAnalysis` considered-and-rejected history.

## 10. Design system (UI redesign, 2026-10-11)

The redesign in `CHANGELOG.md` replaced the visual layer only — this
section records the rationale so future screens stay consistent with
it, and so "add a screen" doesn't mean "invent a new palette."

**Palette.** Deep forest green (`--qi-color-primary`, `#1b4d3e`) is the
one saturated color used for structure: headers, primary buttons,
active nav state, and the left accent bar on concept/rule/example
lesson steps. Warm ivory (`--qi-color-bg`, `#f6f1e4`) is the page
background; warm-paper (`--qi-color-surface`, `#fffcf5`) is the card
surface, intentionally a few degrees warmer/lighter than the page so
cards read as "paper on a desk" rather than as bordered boxes. Muted
gold (`--qi-color-accent`, `#a9842e`) is reserved for small, restrained
highlights — the exercise-step accent bar, progress-bar fill, the
lesson progress chip — specifically *not* used for large surfaces or
decorative borders, per the brief's "avoid excessive gold
ornamentation." All four live as CSS custom properties in
`css/tokens.css`; no other file hardcodes a color.

**Typography.** Three font roles, each a CSS variable rather than a
literal font name anywhere else: `--qi-font-display` ("Lora", a serif)
for headings and chapter titles; `--qi-font-ui` ("Work Sans", a
sans-serif) for interface chrome, labels, and body text; `--qi-font-arabic`
("Amiri", a classical Arabic text face) for every Arabic string —
chapter titles, examples, grammatical terminology, word-by-word rows.
Amiri was named in the original tokens file but never actually linked
in `index.html`; this redesign added the real `<link>` tags, so Arabic
text visibly changed face (previously silently fell back to a generic
system serif).

**Spacing, radius, shadow.** A single numeric spacing scale
(`--qi-space-1`…`--qi-space-8`), two border-radius tokens (card vs.
pill/button), and one soft shadow token are shared by every component
file. Nothing in `components.css`, `lesson.css`, or `layout.css`
hardcodes a pixel spacing value outside of a handful of breakpoint-
specific tweaks in `responsive.css`.

**Navigation pattern.** `js/navigation.js` always renders both a
desktop inline-link header row (`.qi-nav-links-desktop`, 3 links) and
a fixed bottom tab bar (`.qi-tabbar`, same 3 destinations, icon +
label) into the DOM on every page load. `css/responsive.css` is the
only place that decides which one is visible, via two plain media
queries at the 768px breakpoint — there is no JS resize listener or
breakpoint logic. This was a deliberate choice to keep the component
simple and to avoid a layout flash on resize.

**Content-label badges** (`source-derived`, `source-example`,
`new-example`, `needs-review`, `placeholder`) and the **prerequisite-
lock system** (`QIProgress.isChapterUnlocked`) are unchanged from §3
and §8 above — the redesign only restyled their badges/cards (muted,
desaturated colors, a lock icon, a left accent bar) to visually
distinguish available / locked / not-yet-built chapters at a glance;
the underlying logic deciding which state a chapter is in was not
touched.
