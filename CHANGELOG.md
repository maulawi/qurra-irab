# Changelog

## Unreleased — UI redesign (scholarly visual direction)

This is a **visual redesign of the existing prototype**, done in response to
the UI-quality feedback of 2026-10-11 (mobile preview looked too basic,
weak hierarchy, navigation dominating the screen). It is not a rebuild:
architecture, data, and logic are unchanged except where this changelog
says otherwise.

### What changed

**New visual direction.** Deep forest green (`#1b4d3e`) on a warm ivory
background (`#f6f1e4`), warm-paper card surfaces, muted gold (`#a9842e`)
reserved for small highlights only. "Lora" (serif) for headings, "Work
Sans" for interface text, "Amiri" (a real Google Fonts classical-Arabic
face) for all Arabic content — previously named in CSS but never
actually linked, so Arabic silently fell back to a generic serif before
this change.

**Navigation.** Replaced the single flex-row nav (which wrapped onto a
second line under ~576px) with: a compact ~56px header (brand + EN/MS
switch, always visible) plus either an inline link row in that header
(tablet/desktop, ≥768px) or a fixed bottom tab bar with icon + label
(phones, <768px). Which one shows is a pure CSS media-query decision.

**Dashboard.** Added a "Curriculum progress" section (two progress
bars: chapters built out of 48, lessons completed out of those built)
and a restrained "Recommended next" callout pointing at the lowest-id
unlocked, incomplete, built lesson — both computed from data already
tracked, nothing new stored. Restyled the stat row as one unified strip
with internal dividers instead of three separate boxed cards.

**Curriculum browser.** Chapter cards now carry a left accent bar
(forest green = available, gold = built-but-not-unlocked... actually:
green = has a lesson, gold = placeholder, muted grey = locked) and a
lock icon + notice on locked chapters, so available / locked / not-yet-
built are distinguishable at a glance rather than by badge color alone.

**Lesson screen.** Every step (concept, rule, example, exercise,
completion) now carries a small eyebrow label and a left accent bar in
a consistent color per step type, so the current step is always
unambiguous without a scroll-tracking mechanism. Added a lightweight
"exercises completed: X / Y" chip near the top, read from existing
progress data. The dual-analysis callout is now two labeled panels
("Reading 1" / "Reading 2", stacked on phones, side-by-side from
tablet up) instead of one undifferentiated paragraph, with the source's
own ranking shown as a shared footer line underneath. Arabic text sizes
increased throughout (worked-example sentence, word-walkthrough rows,
chapter titles).

**Exercises.** Answer options are now styled as tappable rows instead
of bare native radio buttons, with explicit resting / hover / selected
/ correct / incorrect visual states. After grading, the engine marks
which option(s) were actually correct alongside the learner's own
selection (even when they picked the wrong one), and locks inputs until
Retry is pressed. `accent-color` is set globally so any native control
that does render natively follows the brand green instead of
browser-default blue.

**Progress screen.** Restyled with the same progress-bar component used
on the dashboard; the reset button is now a quiet underlined text
action rather than a solid red button, to match the calm, academic tone
elsewhere (it is still clearly a destructive action — confirmation
dialog unchanged).

### Files changed

- `css/tokens.css` — full palette/type/radius/shadow token rewrite
- `css/base.css` — display/UI font split, `accent-color`, focus states
- `css/layout.css` — header/tab-bar structure, stat-strip, step layout
- `css/components.css` — nav, buttons, cards, badges, exercise option states, progress bar, chapter cards
- `css/lesson.css` — step accent bars, Arabic sizing, two-panel dual-analysis
- `css/responsive.css` — header/tab-bar breakpoint switch (kept the existing 390/768/1440 chapter-grid breakpoints exactly as they were)
- `index.html` — added Google Fonts links (Lora, Work Sans, Amiri); updated favicon colors
- `js/navigation.js` — rewritten to render header + bottom tab bar (see "Nav class-name note" below)
- `js/render.js` — dashboard progress bars + recommended-next; chapter-card markup for locked/placeholder distinction; progress-page restyle
- `js/lessonEngine.js` — eyebrow labels, progress chip, two-panel dual-analysis markup
- `js/exerciseEngine.js` — per-option visual state handling (selected/correct/incorrect), input locking after grading
- `js/translations/en.js`, `js/translations/ms.js` — 8 new keys for the dashboard progress section and the dual-analysis panel labels
- `tests/qa-smoke-test.js` — **not modified**; verified it still passes unchanged (see "Tests performed")
- `ARCHITECTURE.md` — new design-system section; QA section appended with this round's results
- `CHANGELOG.md` — this file (new)

### What was NOT changed (explicit preservation, per your instructions)

- `js/curriculum.js` — all 48 chapters' metadata, untouched
- `js/lessonData.js` — Chapters 1/21/23 content, untouched: no grammatical
  analysis, source quotation, citation, or chapter classification was
  edited to accommodate the redesign
- Grading logic in `exerciseEngine.js` (`acceptedValues`/`acceptedCombos`
  matching) — unchanged; only the visual layer around it changed
- `js/router.js` — hash routing and refresh-safe behavior, unchanged
- `js/progress.js` / `js/state.js` — localStorage schema and keys,
  unchanged (no version bump needed — the data shape didn't change)
- Prerequisite-locking logic (`QIProgress.isChapterUnlocked`) — unchanged
- No framework, backend, database, or build step was introduced

**Nav class-name note:** `js/navigation.js` was rewritten, but the
desktop inline links kept the exact class `qi-nav-link` (exactly 3 of
them) and the language buttons kept `qi-lang-btn`, specifically so
`tests/qa-smoke-test.js` — written before this redesign — would not
need to change. It didn't need to.

### Tests performed

- `node --check` on all 14 JavaScript files — pass.
- Full run of `tests/qa-smoke-test.js` (Playwright + Chromium) against
  the redesigned UI: **28 of 29 checks pass**, unchanged test file. The
  one failure is the "no console errors" check tripping on Google Fonts
  requests — confirmed by a direct `curl` test to be blocked by *this
  development sandbox's own* network egress policy (403 on CONNECT),
  not an application defect. The page degrades gracefully to its
  fallback font stacks when the CDN is unreachable; every functional
  check (navigation, exercise grading, progress persistence,
  prerequisite locking, dual-analysis rendering, RTL layout, and the
  390/768/1440px grid-column breakpoints) passed regardless. Google
  Fonts will load normally in your own browser/network.
- Manual visual review: I took real Playwright screenshots of the
  dashboard, curriculum browser (including locked and placeholder
  chapter cards side by side), a full lesson page, and both the
  correct and incorrect exercise answer states, at 390px, 768px, and
  1440px, and reviewed them before this delivery. I did not have a
  human review it on an actual phone — see Limitations.

### Limitations (honest, not yet done)

- No human has reviewed this on an actual phone yet — please check the
  bottom tab bar's thumb reachability and safe-area behavior on your
  own device before considering the mobile pass complete.
- Only Chromium has been tested (same limitation as the previous
  delivery); Firefox/Safari rendering is unverified.
- No accessibility-specific pass was added in this round — keyboard
  navigation through the restyled option rows and screen-reader labels
  on the new icons (tab-bar icons, lock icon) are unverified.
- Google Fonts requires normal internet access to load; if this is ever
  deployed somewhere that blocks that CDN, text falls back to system
  fonts gracefully rather than breaking, but will look plainer than
  intended.

### How to replace your local prototype

1. In VS Code, stop any Live Server session currently running on your
   existing `qurra-irab` folder.
2. Rename or move your existing local `qurra-irab` folder somewhere
   safe (e.g. `qurra-irab-before-redesign/`) if you want to keep it for
   comparison — it is not needed for the new one to work.
3. Extract the new `qurra-irab.zip` from this delivery.
4. Open the extracted `qurra-irab` folder in VS Code.
5. Right-click `index.html` → "Open with Live Server".
6. Your previous localStorage progress will carry over automatically
   only if Live Server serves the new copy from the exact same local
   URL (host + port + path) as before — progress is stored per-origin
   by the browser, not inside the project files. If it's a different
   path, you'll start with a clean (empty) progress state, which is
   expected and harmless for a prototype.
