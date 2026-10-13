# CLAUDE.md

This file is read automatically by Claude Code at the start of a
session in this project folder. Keep it short — the real detail lives
in the docs it points to.

## What this project is

QURRA I'rab: a static, bilingual (EN/MS) HTML/CSS/vanilla-JS web app
teaching Arabic i'rab (grammatical case analysis) from a 48-chapter
reference book. **The full 48-chapter curriculum is complete** (Tier
10, 2026-10-13) — every chapter has a real, source-cited lesson record.
No build step, no bundler, no backend: plain `<script>` tags, static
files, `localStorage` for progress.

## Read before touching anything

In this order:

1. `README.md` — what's actually here, project structure, how to run it.
2. `ARCHITECTURE.md` — module responsibilities, the lesson engine's
   9-step template, the exercise engine's two answer shapes, and the
   full QA history (§9, through §9.10) for every content-build tier.
3. `DATA_SCHEMA.md` — the exact shapes used in `curriculum.js` and
   `lessonData.js`, including the `contentLabel` taxonomy
   (`source-derived` / `source-example` / `new-example` / `needs-review`)
   and the full `dualAnalysis` (alternative-reading) history.
4. `ROADMAP.md` — what's done (Stage 1–2, complete) and what's still
   ahead (Stage 3 onward).
5. `HANDOVER_PROMPT.md` — the working rules for this codebase, in full.

**Inspect the actual current file before changing it.** `js/lessonData.js`
holds real, cited content for all 48 chapters and is large — read the
specific chapter record you're working on, never assume its content
from the chapter number, title, or a prior summary.

## The rule that must never be relaxed

A chapter's `hasLesson: true` in `js/curriculum.js` is only ever true
because `js/lessonData.js` has a matching `status: "pilot"` record with
real, source-cited content. Never flip that flag, and never add or edit
a lesson record, without the content actually being verified against
the source. This has held across all 48 chapters — keep it that way.

## Working rules (short version — see HANDOVER_PROMPT.md for the full list)

- Inspect before editing. Make incremental changes, not a rebuild.
- Run `tests/qa-smoke-test.js` (Playwright/Chromium) against a local
  static server after any meaningful change, and report actual
  pass/fail results — don't claim a check passed without running it.
- Report which files changed after any change.
- Never commit, push, merge, or deploy without separate, explicit
  approval for that specific action.
