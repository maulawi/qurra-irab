# Handover prompt for Claude Code

Paste the block below into Claude Code when you open this project folder
in VS Code to continue the work there.

---

```
This is QURRA I'rab, a static bilingual (EN/MS) web app for learning
Arabic i'rab, originally prototyped in Claude Chat/Code and now a
complete 48-chapter curriculum (Tier 10, finished 2026-10-13). Read
README.md, ARCHITECTURE.md, DATA_SCHEMA.md, and ROADMAP.md first — they
describe exactly what's built (all 48 chapters, each a real hand-built
lesson with source citations, not a placeholder) and what's still ahead
(see ROADMAP.md Stage 3 onward: exercise-type expansion, remaining QA
gaps, deployment). Do not trust a file's name or a comment alone; open
each file you touch and confirm its current content before changing it.

Ground rules for this session:
1. Inspect existing files before making any change. Do not assume a
   function, data shape, or file exists until you've opened it. This
   codebase has 48 chapters of real content in js/lessonData.js (a large
   file) — read the specific chapter record you're touching, not a
   summary of it.
2. Preserve the 48-chapter curriculum and its scholarly content. Every
   chapter's rule, worked example, and exercises carry source citations
   (page numbers) and a contentLabel (source-derived, source-example,
   new-example, or needs-review) — never alter cited content, invent a
   new example attributed to the source, or change a citation without
   re-verifying it against the actual source PDF. If the source PDF
   isn't available in this environment, treat any content-accuracy
   question as something to flag to the user, not something to guess at.
3. Make incremental changes, not a rebuild. One logical change at a
   time, not a batch of unrelated fixes in one edit. If you're not
   certain a change is safe, make the smallest change that addresses
   the issue rather than restructuring surrounding code.
4. After each meaningful change, run a regression check before moving
   on. This project has a real Playwright/Chromium smoke test
   (tests/qa-smoke-test.js) — run it against a local static server
   (e.g. `python3 -m http.server 8743` from this folder, then
   `node tests/qa-smoke-test.js http://localhost:8743`) if Playwright
   is available in this environment. The test uses Playwright's own
   Chromium by default; set the `CHROMIUM_PATH` environment variable
   to use a specific browser binary instead. If it isn't, fall back to opening
   index.html with Live Server and clicking through dashboard →
   curriculum → a lesson → an exercise → progress, in both EN and MS,
   and say plainly that you did a manual check instead of an automated
   one.
5. Keep the content-honesty rule intact: a chapter's hasLesson flag in
   js/curriculum.js may only be true if js/lessonData.js has a real
   status:"pilot" record for it with cited source content. All 48
   chapters currently satisfy this — never flip a flag or alter a
   record in a way that would make that stop being true.
6. After any change, report exactly which files you changed and what
   test results you got (pass/fail counts, not just "it works"). Don't
   claim a test passed without having actually run it.
7. Do not commit, push, merge, or deploy anything without my explicit,
   separate approval for that specific action. Leave git operations and
   any hosting/deployment setup out of scope unless I ask for them
   directly.

Start by telling me what you find when you open the project and run it
locally, before changing anything.
```

---

## Why these rules

- Rules 1–3 mirror how this project was built across ten content-build
  tiers: data (curriculum metadata + lesson content) kept separate from
  the reusable rendering engines, so changes to one chapter's content
  should never require touching `lessonEngine.js` or `exerciseEngine.js`.
  `js/lessonData.js` is large (48 chapters of real content) — Claude
  Code should read the specific record it's editing, never infer a
  chapter's content from its number or title alone.
- Rule 4 exists because every tier's own QA pass used a real Playwright
  browser run, not just static inspection (see `ARCHITECTURE.md` §9,
  §9.1 through §9.10) — the expectation for any further work is the
  same standard, not a regression to "looks right."
- Rule 5 protects the one rule in this whole project that must never be
  relaxed casually: a chapter is only ever as "finished" as its actual
  cited content, never as finished as it would be convenient to claim.
  This held across all 48 chapters and 10 tiers; it should keep holding.
- Rules 6–7 are explicit per this project's own standing practice
  throughout its build: every tier ended with a structured report (files
  changed, tests run, results) before the next one began, and nothing
  was ever committed, pushed, or deployed without a separate, deliberate
  decision to do so — that discipline should carry forward.
