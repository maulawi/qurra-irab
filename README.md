# QURRA I'rab

A static, bilingual (English / Bahasa Melayu) web app for learning Arabic
**i'rab** (grammatical case analysis) as a subject in its own right — not
a Qur'an-specific tool. Content is grounded in a classical 48-chapter
reference book, *Marji' al-Tullab fi al-I'rab* (مرجع الطلاب في الإعراب).

**The full 48-chapter curriculum content build is complete** (Tier 10,
2026-10-13). Every chapter has a source-verified, hand-built lesson —
see "What's actually here" below for exactly what that means, and
`ROADMAP.md` for the tier-by-tier build history.

## What's actually here

| Item | Status |
|---|---|
| Chapters mapped (titles, page ranges, prerequisite tier) | **All 48**, audited against the source PDF |
| Chapters with a full, built lesson | **All 48** — every chapter has `hasLesson: true` and a `status: "pilot"` record |
| Chapters with an honest "not yet built" placeholder | **0** — the placeholder-rendering code path still exists and is still tested (see `ARCHITECTURE.md` §9.10), it just has no real chapter left to apply to |
| Exercises authored | **100** (1 guided + 1 independent per chapter, with a handful of chapters carrying extra guided exercises for a multi-way category split — see `ROADMAP.md`'s Chapter 29 note) |
| Chapters using the `dualAnalysis` (alternative-reading) schema | **8** (Chapters 7, 8, 10, 23, 25, 28, 35, 42) — see `DATA_SCHEMA.md` for the full considered-and-rejected history of every other chapter's candidate dual readings |
| Chapters flagged `needs-review` | **1** (Chapter 46 — a source documentation gap for a qualified Arabic grammar teacher to resolve; see `DATA_SCHEMA.md` §3f) |
| Exercise types implemented | 2 shapes (single-select, multi-field combo) covering the approved structured-only exercise set |
| Backend / account / sync | None — this is a static site with per-device `localStorage` progress only |

Nothing in this repository claims a chapter is "done" unless it has a
`hasLesson: true` entry in `js/curriculum.js` **and** a `status: "pilot"`
record in `js/lessonData.js`. That is now true for all 48 chapters — see
`js/lessonData.js`'s `fillPlaceholders()` for the (now-dormant, but still
tested) placeholder-generation logic that would apply to any future
chapter added without a lesson record yet.

## Opening this project

1. Open this folder (`qurra-irab/`) in VS Code.
2. Install the **Live Server** extension if you don't have it.
3. Right-click `index.html` → "Open with Live Server".
4. The dashboard should load. Try: Dashboard → Curriculum → open any
   chapter → work through a lesson → check Progress. All 48 chapters
   are real, built lessons now — there's no placeholder content left to
   stumble into.

No build step, no `npm install`, no bundler. Plain HTML/CSS/vanilla JS,
loaded as ordered `<script>` tags (see `index.html` and `ARCHITECTURE.md`
for why the order matters).

## Project structure

```
qurra-irab/
├── index.html                 # Entry point; wires up all CSS/JS in order
├── css/
│   ├── tokens.css             # Design tokens (colors, spacing, type)
│   ├── base.css                # Reset, typography, RTL/LTR base rules
│   ├── layout.css              # Nav shell, containers, grids
│   ├── components.css          # Buttons, badges, cards, exercise inputs
│   ├── lesson.css              # Lesson/walkthrough/dual-analysis styles
│   └── responsive.css          # 390 / 768 / 1440px breakpoints
├── js/
│   ├── translations/
│   │   ├── en.js               # English UI-chrome strings
│   │   └── ms.js                # Bahasa Melayu UI-chrome strings
│   ├── i18n.js                  # Translation-key lookup engine
│   ├── curriculum.js            # All 48 chapters' metadata (QITiers, QICurriculum)
│   ├── lessonData.js            # Lesson content: all 48 chapters built
│   ├── data.js                  # Repository layer joining the two files above
│   ├── state.js                 # Language state (persisted + broadcast)
│   ├── progress.js              # localStorage progress persistence
│   ├── exerciseEngine.js        # Renders + grades all exercise items
│   ├── lessonEngine.js          # Renders any lesson through the 9-step template
│   ├── navigation.js            # Top nav bar (route highlight, language switch)
│   ├── render.js                # Dashboard / curriculum browser / lesson / progress screens
│   ├── router.js                # Hash-based routing (#/lesson/21, refresh-safe)
│   └── main.js                  # Bootstrap (DOMContentLoaded → start router)
├── tests/
│   └── qa-smoke-test.js         # Playwright/Chromium browser smoke test (see ARCHITECTURE.md §9)
├── ARCHITECTURE.md
├── DATA_SCHEMA.md
├── ROADMAP.md
├── CHANGELOG.md
├── CLAUDE.md                    # Auto-loaded by Claude Code on session start
└── HANDOVER_PROMPT.md           # Prompt for continuing this in Claude Code
```

## Design decisions already locked in (do not re-litigate without reason)

- **i'rab as its own subject.** The curriculum is not Qur'an-specific;
  the book is the primary source.
- **Content honesty.** Every rule and worked example carries a
  `contentLabel` (`source-derived`, `source-example`, `new-example`, or
  `needs-review`) and, where applicable, an exact page citation. New
  content (all current exercises) is clearly `new-example`, never
  presented as transcribed from the book.
- **Dual analyses are preserved, not resolved.** Where the source itself
  documents more than one valid reading of its own worked example (8
  chapters, via the `dualAnalysis` schema field — see `DATA_SCHEMA.md`),
  both readings are kept, ranked exactly as the book ranks them (or
  marked as unranked when the book gives no preference) — neither is
  ever marked wrong. Chapter 23 was the first to use this.
- **Structured exercises only (v1).** No free-text Arabic evaluation yet.
  The exercise engine's shape-based design (see `DATA_SCHEMA.md`) leaves
  room to add a free-text type later without reworking existing lessons.
- **Static, no backend.** No database, auth, or payment system. Progress
  is per-device `localStorage` only.

## What this has NOT been tested for

See `ARCHITECTURE.md`'s QA section (§9, through §9.10) for the honest
list of what was and wasn't verified across every tier of the content
build. In short: a real Playwright/Chromium browser smoke test has been
run after every tier (30/31 checks passing as of Tier 10, the one
failure being a sandboxed-environment artifact, not an app defect — see
§9.1), but manual phone-device review, cross-browser testing beyond
Chromium, and a dedicated accessibility pass are all still outstanding.

## Continuing this work

The 48-chapter content build (`ROADMAP.md` Stage 2) is complete. What's
still ahead is Stage 3 (exercise-type expansion — free-text Arabic
evaluation) and Stage 4/5 (the QA gaps above, and deployment — see
`ROADMAP.md` for both). See `HANDOVER_PROMPT.md` for the prompt to give
Claude Code when picking this up locally.
