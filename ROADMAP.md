# QURRA I'rab — Roadmap

Honest accounting of what's done and what's ahead. Chapter counts,
module counts, and exercise counts here must match what's actually in
`curriculum.js` / `lessonData.js` at any given time — update this file
whenever those change.

## Stage 0 — Research & planning (done)

- Full 48-chapter audit of the source book against the actual PDF.
- Prerequisite-tier curriculum pathway (Tiers 0–10) with per-topic
  rationale.
- Pilot specification: exact lessons, exercises, data model, acceptance
  criteria.

## Stage 1 — Architecture & initial prototype (done — this delivery)

- All 48 chapters represented as curriculum metadata (`curriculum.js`).
- 3 pilot lessons fully built with real transcribed worked examples and
  page citations (Chapters 1, 21, 23); remaining 45 chapters render an
  honest placeholder.
- Reusable lesson-rendering engine (9-step template) and exercise engine
  (2 answer shapes covering the approved structured-only exercise set).
- Dashboard, curriculum browser (grouped by tier, with prerequisite
  lock/unlock), lesson page, progress page.
- EN/MS interface language switching with persistence.
- Local progress tracking (`localStorage`, versioned schema).
- Responsive layout at 390/768/1440px breakpoints.
- Static-site file structure, ready for GitHub Pages (not yet deployed —
  deployment was explicitly out of scope for this delivery).

## Stage 2 — Content build (COMPLETE — Tier 0 through Tier 10, all 48 chapters)

Status as of the Tier 10 pass (2026-10-13): **48 of 48 chapters fully
built** (Ch 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48 — `hasLesson: true`).
**The entire 48-chapter curriculum content build is now complete.** Tier 0 is complete (1/1). Tier 1 is
complete (21, 22, 23 fully built). Tier 2 is complete — all 10
approved chapters (2, 3, 4, 5, 6, 7, 8, 9, 10, 14) built with full
guided + independent exercises. Tier 3 is complete — all 5 approved
chapters (24, 25, 26, 27, 28) built with full guided + independent
exercises. Tier 4 is complete:

- **Chapter 29** (the Five Object Types) — previously a deliberate
  *partial* record covering only maf'ul bih (see the old `DATA_SCHEMA.md`
  §3c convention, now superseded for this chapter). This pass completed
  it: the rule text now covers all five types (fih, bih, lahu, mutlaq,
  ma'ah) across the chapter's full PDF range, and the lesson now has 6
  exercises (5 guided — one per type — + 1 independent) instead of the
  previous 1 guided-only exercise. `hasLesson` flips to `true`.
  **Citation fix disclosed**: the previous record's `rule`/`workedExample`
  citations (pdfPages [146,147] / [146,146] printedPage 145) were
  inaccurate — PDF page 146 is the chapter's own title page and is
  actually about maf'ul **fih**, not bih; the verbatim bih worked example
  (قَطَفَ المُزَارِعُ التُّفَّاحَ, kept unchanged) is correctly on PDF
  page 147 (printed page 146). Both citations are corrected in this pass.
  A new source-documented dual reading was found for the ma'ah example
  مَا أَنْتَ وَالبَحْرَ؟ (كان as tamma vs. naqisa) — folded into rule
  prose rather than implemented as `dualAnalysis`, since the lesson's
  single primary worked example is bih-focused, not ma'ah-focused.
- **Chapter 36** (Tamyiz) — new, full lesson (1 guided + 1 independent
  exercise). A second genuine dual reading was found (عِنْدِي خَاتَمٌ
  فِضَّةً, tamyiz vs. hal, with the source explicitly ranking tamyiz
  better) — also folded into rule prose rather than `dualAnalysis`,
  since curriculum.js's topicEn flags كم's al-sadara status as this
  chapter's defining feature, not this ambiguity.
- **Chapter 37** (Hal) — new, full lesson (1 guided + 1 independent
  exercise). No dual reading needed; several rich secondary nuances
  (zarf/jarr-majrur standing in for an elided hal, dual simultaneous
  hal from fa'il + maf'ul, sahib al-hal buried in a mudaf ilayh) are
  documented in rule prose.

A source-PDF scanning artifact was observed and documented during the
Tier 3 pass: PDF pages 130, 133 and 145 are byte-distinct files that
are visually/textually identical duplicates of pages 129, 132 and 144
respectively. No content was lost — full content was transcribed from
the non-duplicate original pages — but this is flagged here for
transparency; see `ARCHITECTURE.md` §9.3 for detail.

**Tier 5 is now complete** (2026-10-13): all 9 approved chapters (11,
12, 13, 15, 16, 17, 18, 19, 20 — `tier: 5`, `prereq: [1, 21]`) are
built with full guided + independent exercises. **31 of 48 chapters
are now built in total.**

- **Chapter 11** (Proper Nouns), **12** (Isim Fi'l / Verb-Noun), and
  **13** (Numbers) cover the compact end of this tier: simple vs.
  compound 'alam shapes (including al-hikaya, the frozen-vocalization
  phenomenon in murakkab isnadi names like فتحَ اللهُ), the three
  isim-fi'l types with the kaf-origin rule, and the number-family i'rab
  patterns (3–10, the compound teens, 12's dual-like exception, the
  tens).
- **Chapters 15–20 are a different shape of chapter in the source
  book**: rather than stating a rule and then giving one or two worked
  examples, these chapters are long runs of real i'rab worked examples
  (a sentence, fully analyzed, word by word) under a short definition.
  Chapter 15 (Pronoun), 16 (Demonstrative), and 17 (Relative Noun) all
  cover mabni-noun families with one shared structural exception — a
  dual form (هذان/هاتان, اللذان/اللتان) that borrows the true dual
  noun's alif/ya' markers instead of staying flatly mabni. Chapter 18
  (Zarf/Adverbial) is the largest chapter in this tier (10 PDF pages)
  and covers the fixed-mabni zuruf list plus the four niyaba
  (substitute) categories that can take nasb on a zarf's behalf.
  Chapter 19 (Interrogative Nouns) and Chapter 20 (Kinayat) round out
  the tier; both reuse the أيّ mu'rab-exception pattern established in
  Chapter 17, and Chapter 20 turns on the one genuine grammatical
  contrast between كم الاستفهامية and كم الخبرية (their tamyiz's case
  differs), which is covered in rule prose rather than as a
  `dualAnalysis` record, since it is a difference between two distinct
  words' grammar rather than an ambiguity in reading one sentence.
  For these six example-dense chapters, the rule text is a synthesis
  — written from, and citing, the chapter's own definition section and
  its full run of worked examples, rather than a single paragraph
  copied from one place in the source, since the source itself teaches
  through examples here rather than through a stated rule.
- **No `dualAnalysis` records were implemented in Tier 5.** Two genuine
  dual-reading candidates were found (Chapter 12's هاتِ/تعالَ, which
  the source says "يجوز أن تُعرَب فعل أمر"; Chapter 17's أيّ, whose
  mu'rab/mabni choice depends on whether it is mudaf with an elided
  'a'id) and both were folded into rule prose instead, consistent with
  the precedent set in Tiers 3–4: `dualAnalysis` is reserved for a
  chapter's own topicEn-flagged defining feature, not every genuine
  ambiguity found along the way.
- **Citation fix disclosed**: `curriculum.js`'s `pdfPages` metadata for
  Chapter 17 (previously `[82, 85]`) and Chapter 18 (previously
  `[86, 96]`) was off by one page at their shared boundary. Close
  re-reading of PDF page 86 confirmed it is still Chapter 17 content
  (its page header reads "الفصل السابع عشر / إعراب اسم الموصول" and it
  contains the أيّ mu'rab-exception rule), while PDF page 87 is
  Chapter 18's own unnumbered title page (header: "الفصل الثامن عشر /
  إعراب الظرف (المفعول فيه)"). Both citations are corrected in this
  pass to Chapter 17: `[82, 86]` and Chapter 18: `[87, 96]` — the same
  kind of disclosed, source-verified correction as the Chapter 29 fix
  in the Tier 4 pass.

**Tier 6 is now complete** (2026-10-13): all 7 approved chapters (30,
31, 32, 33, 34, 35, 38 — `tier: 6`) are built with full guided +
independent exercises. **38 of 48 chapters are now built in total.**

- **Chapter 30** (Ism al-Fa'il's Verbal Governance), **31** (Ism
  Tafdil), and **32** (Ta'ajjub) are a closely related family — all
  three cover a derived-noun form (active participle, comparative/
  superlative, exclamation) that governs like the verb it comes from,
  under near-identical conditions on that verb (thulathi, tam,
  mutasarrif, muthbat, ma'lum, qabil lil-tafawut, not already on wazn
  أفعل). **Chapter 33** (Tahzir/Warning) and **34** (Ighra'/Urging) are
  mirror-image chapters — nasb by a context-chosen elided verb, warning
  away from something vs. urging toward it — and 34 is the shortest
  chapter in the whole source book, a single PDF page. **Chapter 35**
  (Tanazu'/Competing Operators) and **38** (Istithna'/Exception) round
  out the tier.
- **A new `dualAnalysis` record was implemented this tier, the first
  since Tier 3** — Chapter 35's worked example (قام وسافر الصديقُ).
  Unlike the incidental dual readings folded into rule prose in Tiers
  4–6 (see below), this one is the chapter's entire subject: tanazu'
  *is* the choice of which of two competing operators claims the
  shared noun, and the book states both assignments side by side,
  unranked, on its very first example. This matches the established
  precedent (`dualAnalysis` reserved for a chapter's own topicEn-
  flagged defining feature) in the other direction from Tiers 4–5 —
  here the feature clearly qualified, where before it didn't.
- **Several incidental dual/multi-reading candidates were found and
  folded into rule prose instead**, consistent with that same
  precedent: Chapter 30's الحامي الديارَ (either مفعول به second
  object or مضاف إليه, for a muqtarin-bi-أل ism al-fa'il); Chapter
  31's أفضلَ منه أخوك (either na't-with-apparent-fa'il or a fronted-
  khabar/delayed-mubtada' reading); and Chapter 38's ولا سيّما
  construction, where an indefinite noun (illustrated in the source
  with a second, parallel example rather than the lesson's own primary
  worked example) genuinely admits a three-way raf'/nasb/jarr choice —
  documented fully in rule prose rather than as `dualAnalysis` because
  the choice belongs to a different sentence than the chapter's primary
  worked example (رشيدٌ, a proper name, is raf'-only in its own
  sentence).
- Chapter 38 (Istithna') is the largest chapter in this tier (6 PDF
  pages, 8 adawat istithna' plus بيد and ولا سيّما) and, like Tier 5's
  example-dense chapters and Tier 4's Chapter 29, its rule text
  synthesizes across the chapter's full page range rather than citing
  one paragraph.

**Tier 7 is now complete** (2026-10-13): all 4 approved chapters (43,
44, 45, 46 — `tier: 7`) are built with full guided + independent
exercises. **42 of 48 chapters are now built in total.**

- **Chapter 43** (Na't/Adjective) covers the haqiqi/sababi split (full
  agreement with the man'ut vs. agreement with what precedes it in
  definiteness/case but with a raised ism in gender) plus qat' al-na't
  (a na't deliberately cut loose into its own independent raf'/nasb
  reading, e.g. مررت بالقائدِ العظيمُ/العظيمَ) — the dual qat' reading
  is folded into rule prose rather than implemented as `dualAnalysis`,
  consistent with the Chapter 30/31 precedent from Tier 6, since
  haqiqi/sababi agreement (the chapter's topicEn-flagged subject) is
  clearly the chapter's primary content and qat' al-na't is a
  secondary, if rich, nuance. Chapter 43's `prereq` is uniquely
  `[1, 21, 15, 16, 17]` (not the tier's usual `[1, 21]`) — noted here
  because it produced a Chapter-30-style QA false alarm risk that was
  pre-empted this time (see `ARCHITECTURE.md` §9.7).
- **Chapter 44** ('Atf/Coordination) has two genuinely distinct
  sub-parts, both named in its own topicEn: 'atf al-nasaq (the nine
  huruf al-'atf, each with its own conditions — حتى only coordinates a
  part/quasi-part of the whole; لكن/لا/بل only coordinate a single word
  and fall out of 'atf entirely if followed by a jumla) and 'atf
  al-bayan (a harf-less jamid tabi' that clarifies or specifies its
  matbu'). The book explicitly treats 'atf bayan and badal kull min
  kull as interchangeable in several of its own worked examples
  (رأيتُ ليثًا أي أسدًا: "عطف بيان... أو: بدل من ليثًا") — this
  ambiguity is folded into rule prose rather than `dualAnalysis`,
  since the chapter's defining feature (per topicEn) is the two-part
  nasaq/bayan structure itself, not this secondary badal/bayan
  overlap.
- **Chapter 45** (Tawkid/Emphasis) covers the ma'nawi/lafzi split (nine
  famous fixed words vs. exact-lafz repetition of an ism, fi'l, harf,
  or jumla). One source nuance worth flagging: the book explicitly
  allows tawkid lafzi *bi-al-muradif* — repeating not the identical
  word but a synonym (أتى جاء الزميلُ) — which is included in rule
  prose as a documented variant of lafzi tawkid, not a separate type.
- **Chapter 46** (Badal/Substitution) is this tier's `needs-review`
  case — the first actual use of that `contentLabel` value anywhere in
  this curriculum (it was reserved in `js/lessonData.js`'s header
  comment and flagged in `curriculum.js`'s own topicEn from the start,
  but never previously triggered). The book's التعريف section formally
  defines exactly three badal types under lettered headings (مطابق,
  اشتمال, جزء من كل), but its own إعراب (worked-example) section
  additionally labels three more functions — بدل غلط (ghalat, a
  tongue-slip correction), بدل نسيان (nisyan, a memory-lapse
  correction, explicitly distinguished from ghalat as "يتعلق بالعقل"
  rather than "يتعلق باللسان"), and بدل تفصيل (tafsil, detailing an
  earlier vague مَن/ما) — none of which receive a formal definition
  heading anywhere in the chapter. The lesson's `rule.contentLabel` is
  set to `"needs-review"` rather than `"source-derived"` because of
  this gap; the `workedExample` and both exercises stick to the three
  formally-defined types only, so no unreviewed content is taught as
  settled practice material. A qualified Arabic grammar teacher should
  confirm whether ghalat/nisyan/tafsil are standard terminology
  elsewhere or specific to this book's own worked examples.

**Tier 8 is now complete** (2026-10-13): all 4 approved chapters (39,
40, 41, 42 — `tier: 8`) are built with full guided + independent
exercises. **46 of 48 chapters are now built in total.**

- **Audit preceding this tier**: per the user's explicit instruction not
  to infer tier assignment from chapter numbers, the 6 chapters reported
  as remaining after Tier 7 (39, 40, 41, 42, 47, 48) were individually
  checked against `curriculum.js`'s actual `tier` field before any
  content work began. Only 4 of the 6 belong to Tier 8 — Chapter 47
  (`tier: 9`, prereq `[1, 21, 23]`) and Chapter 48 (`tier: 10`, prereq
  `[1, 21, 23, 24, 27, 29, 37]`) belong to later tiers and are correctly
  out of scope for this pass. A node `vm`-sandboxed structural
  cross-check confirmed the reported "42/48 built" state after Tier 7
  was accurate (42 `hasLesson:true` chapters exactly matching 42
  `status:"pilot"` lesson records) before Tier 8 work began, and that
  none of the 6 remaining chapters had any partial hand-built record in
  `lessonData.js` to preserve.
- **Chapter 39** (Munada/Vocative) is the largest chapter processed so
  far in this project (8 PDF pages) and covers all five munada noun-type
  categories (mufrad 'alam, nakira maqsuda — both mabni; nakira ghayr
  maqsuda, mudaf, shibih bil-mudaf — all mansub), plus several secondary
  nuances: ism-isharah munada on a muqaddar vowel, اللَّهُمَّ's doubled
  mim standing in for the elided harf al-nida', lafz/mahall flexibility
  for a mabni munada's own tawkid or na't, and a rare fathat al-itba'
  pattern when ابن sits between two 'alams. A source-stated, explicitly
  ranked dual reading was found (يا أخانا عادلاً أو عادلٌ — "الإعراب
  الأول أصح، بالرغم من شهرة الإعراب الثاني") and folded into rule prose
  rather than implemented as `dualAnalysis`, since it occurs on a
  different sentence than the lesson's primary worked example (يا
  سليمُ), consistent with the "same worked example" test established in
  Tier 6 (Chapter 38) and reaffirmed through Tier 7.
- **Chapter 40** (Istighathah/Cry for Help) covers the mustaghath-bih/
  lahu/'alayh triad (fatha-lam / kasra-lam / مِن respectively) and the
  alif-replacing-lam alternative for a mabni-type mustaghath bih.
- **Chapter 41** (Nudbah/Lament) covers the mandub's three possible
  shapes (bare; with an added alif; with an added alif plus a closing
  ha' al-sakt) and confirms the mandub simply inherits an ordinary
  munada's own bina'/i'rab positions, now estimated before the added
  alif rather than changed.
- **Chapter 42** (Tarkhim/Truncation in Address) is this tier's
  `dualAnalysis` chapter — the first new use of that field since Tier
  6's Chapter 35. The source explicitly gives its own worked example
  (يا جَمْفُ, truncated from جعفر) two readings on consecutive lines,
  naming each as its own dialect-convention: "the one who awaits the
  deleted letter's return" (لغة مَن ينتظر رجوع الحرف المحذوف) reads the
  retained vowel as the elided letter's own mark, while "the one who
  does not await it" (لغة مَن لا ينتظر الحرف الأخير المحذوف) reads the
  exact same surface form as a plain, self-contained mabni word. This
  qualifies for `dualAnalysis` under the established framework because
  it is both (a) the chapter's own topicEn-flagged defining feature
  ("two dialect-conventions contrasted") and (b) demonstrated on the
  identical worked example, not a secondary one — unlike Chapter 39's
  badal/'atf-bayan case above, which fails test (b). No source ranking
  is given between the two conventions, so `dualAnalysis.ranking`
  records that absence explicitly, the same pattern used for Chapters
  7/8/35.
- **No `needs-review` chapters this tier.** All four chapters' source
  material is formally defined under proper 1-التعريف/2-الإعراب
  headings with no undefined-but-demonstrated gap of the kind that
  triggered Chapter 46's `needs-review` flag in Tier 7; all four
  `rule.contentLabel` values are `"source-derived"`.

**Tier 9 is now complete** (2026-10-13): the one approved chapter (47 —
`tier: 9`) is built with full guided + independent exercises. **47 of
48 chapters are now built in total.**

- **Chapter 47** (I'rab of Prepositions / Huruf Jar) is the densest
  chapter processed so far in this project (8 PDF pages), covering the
  asli/za'id/shabih-bil-za'id 3-way classification of the 17 huruf jar
  plus an unusually large set of secondary phenomena on individual
  particles: رُبَّ's full behavior set (mahall raf'/nasb default, واو
  رُبّ elision, رُبَّهُ + tamyiz, تاء التأنيث, ربما kaffa), الكاف's
  third ism-meaning-mithl function (rare in prose, common in poetry),
  واو/تاء القسم, كي التعليلية plus the general استفهامية-ما alif-drop
  rule, and the hadhf al-harf al-jarr conditions before أنّ/أنْ masdar
  ta'wil (permitted when unambiguous, forbidden when it would create
  labs, illustrated with رغبتُ في/عن أن أسافر and انصرفتُ إلى/عن أن
  أطالع الكتاب). The primary worked example is وَصَلَ المُسَافِرُ
  إِلَى المَدِينَةِ (asli, على the chapter's title page).
- **Three genuine source-documented dual readings were found and
  folded into rule prose rather than implemented as `dualAnalysis`**,
  all failing the "same worked example" test (Tier 6 precedent,
  reaffirmed through Tiers 7-9) because each occurs on a sentence other
  than the chapter's primary worked example:
  1. لام التقوية's optional za'id-vs-muta'alliq reading on أنا
     مكرمٌ للصديقِ (no explicit source ranking).
  2. حتى's harf-jarr-vs-harf-'atf dual reading on أكلت السمكة حتى
     رأسها (no explicit source ranking).
  3. على's "لكن الاستدراكية" reading (no ta'alluq) vs. an alternative
     reading relating it to an elided mubtada's khabar, on أساء
     الصديقُ فاحتملتُ إساءته على أن احتمالها مرّ اليمّ — **with an
     explicit source ranking** ("الإعراب الأول أحسن") faithfully
     preserved in the rule prose even though not implemented as a
     formal `dualAnalysis` block.
  Consistent with Tier 8's Chapter 39 precedent, the chapter's own
  defining 3-way asli/za'id/shabih-bil-za'id split is taught via
  different example sentences per category plus rule prose + exercises
  (not `dualAnalysis`, which is reserved for one single sentence
  genuinely admitting two readings).
- **No `needs-review` chapter this tier.** Chapter 47's one borderline
  case — الكاف's ism-meaning-mithl function, absent from the formal
  1-التعريف heading — is explicitly disclosed and explained elsewhere
  in the chapter's own worked-example section, unlike Chapter 46's
  genuine undefined-but-demonstrated gap in Tier 7. `rule.contentLabel`
  is `"source-derived"`.

**Tier 10 is now complete** (2026-10-13): the one approved chapter (48
— `tier: 10`, the final chapter in the curriculum) is built with full
guided + independent exercises. **48 of 48 chapters are now built —
the curriculum content build is complete.**

- **Chapter 48** (I'rab of the Sentence — Classification) is a pure
  taxonomy chapter sorting embedded jumal (sentences) into fifteen
  sub-categories across two groups: seven types that occupy a mahall
  (position) in i'rab — khabar, maf'ul bih, hal, na't, jawab-shart
  muqtarin-bi-fa/idha, mudaf ilayh, and tabi'a-to-a-jumla-with-mahall —
  and eight types that don't — ibtida'iyya, tabi'a-to-a-jumla-with-no-
  mahall, jawab al-qasam, jawab-shart-ghayr-jazim, jawab-shart-jazim
  NOT muqtarin-bi-fa/idha, i'tiradiyya (parenthetical), mufassira
  (explanatory), and silat al-mawsul. Two Qur'anic citations illustrate
  the chapter (3:160 ﴿إِن يَنصُرْكُمُ اللَّهُ فَلَا غَالِبَ لَكُمْ﴾ for
  the jazm-jawab-muqtarin-bi-fa case; 23:27 ﴿فَأَوْحَيْنَا إِلَيْهِ أَنِ
  اصْنَعِ الْفُلْكَ﴾ for the mufassira-after-أنْ case), both verified
  against the source. The primary worked example is المُعَلِّمُ
  يُكَافِئُ المُجْتَهِدَ (on the chapter's title page), with the
  embedded jumla يُكَافِئُ المُجْتَهِدَ itself treated as one
  `workedExample.words[]` entry — its own mahall raf' as khabar is the
  whole point being taught — following the same multi-word-entry
  precedent Chapter 25 set for a masdar mu'awwal khabar.
- **No `dualAnalysis` this tier** — a pure classification chapter with
  no single sentence genuinely admitting two readings. **No
  `needs-review` chapter either** — all fifteen sub-categories are
  formally defined under the source's own أ./ب. headings with numbered
  sub-points, with no undefined-but-demonstrated gap. Both exercises
  use freshly-authored sentences (not verbatim source text) applying
  the same rule, correctly labeled `contentLabel: "new-example"` — the
  guided exercise varies the na't-jumla example to a NASB mahall
  (رأيتُ طفلًا يلعبُ) rather than reusing the book's own raf' example,
  to test genuine understanding that a na't-jumla's mahall tracks its
  mawsuf's own case rather than being fixed; the independent exercise
  tests the chapter's single most subtle distinction — a jazm-shart's
  jawab WITH a فاء/إذا connector (mahall jazm, category أ #5) versus
  WITHOUT one (no mahall, category ب #5) — on a freshly-authored
  sentence (مَنْ يَجْتَهِدْ يَنَلْ النَّجَاحَ).
- **QA note**: with all 48 chapters now built, the long-running
  "unbuilt, unlocked chapter" placeholder-honesty smoke-test check (used
  honestly against a real unbuilt chapter in every prior tier back to
  Tier 1) no longer has any real chapter left to target. Rather than
  dropping the check, it was converted to an explicitly-labeled
  synthetic fixture that monkeypatches one chapter's in-memory data in
  the browser to exercise the same real, unmodified placeholder-
  rendering code — see `ARCHITECTURE.md` §9.10 for the full detail and
  rationale.

The 48-chapter curriculum content build described in Stage 2 is
complete. Historical note on the authoring process each chapter went
through, preserved for reference:

1. Transcribe the chapter's rule(s) from the source PDF, with exact page
   citations (`contentLabel: "source-derived"`).
2. Transcribe at least one worked example verbatim, with exact page +
   printed-page citations (`contentLabel: "source-example"`).
3. Author guided + independent exercises (`contentLabel: "new-example"`),
   using the two existing answer shapes (or extending the exercise
   engine if a chapter genuinely needs a new shape — see
   `ARCHITECTURE.md` §5).
4. Flag anything genuinely ambiguous or requiring scholarly judgment with
   `contentLabel: "needs-review"` for a qualified Arabic grammar
   teacher, rather than guessing.
5. Flip `hasLesson: true` for that chapter in `curriculum.js` only once
   its lesson record is complete.

This was content-authoring work, not engineering work — the lesson and
exercise engines supported every chapter built this way without any
code changes across all ten tiers.

## Stage 3 — Exercise-type expansion (not started)

- Free-text Arabic answer evaluation (explicitly deferred past v1; the
  data-model extension point is documented in `DATA_SCHEMA.md` §4c).
- Dedicated shapes for arrange-components and correct-the-error if the
  single-select encoding proves too limited once real content is
  authored for chapters that need them.

## Stage 4 — Real QA pass (partially done)

Static inspection (syntax checks, path checks, call-graph tracing) and a
real Playwright-driven browser smoke test (29/29 checks passing,
including one real bug it caught and fixed, against the original 3-pilot-
chapter delivery) were both run for the original Stage 1 delivery — see
`ARCHITECTURE.md` §9 for exactly what was and wasn't covered, and
`tests/qa-smoke-test.js` to rerun it (30/31 passing as of the Tier 10
pass that completed all 48 chapters — see §9.10 — with the one
remaining failure being a sandboxed-environment artifact, not an
application defect; see §9.1). Still needed:

- Manual review on an actual phone device, not just a resized headless
  viewport.
- Cross-browser checks (Firefox, Safari/WebKit) — only Chromium has been
  tested so far.
- Accessibility pass (keyboard navigation through exercises, screen
  reader labels on the language switch and radio groups).
- The placeholder-chapter rendering path (now exercised only via a
  synthetic fixture, since all 48 real chapters are built — see
  `ARCHITECTURE.md` §9.10) has no real chapter left to double-check it
  against; if a 49th chapter is ever added to the source curriculum
  before it's authored, it's worth confirming the placeholder path
  still renders correctly for it directly, not just via the fixture.

## Stage 5 — Deployment (not started, intentionally)

Enabling GitHub Pages for this repository and pushing to a hosting
branch. **Not performed as part of this delivery** — see
`HANDOVER_PROMPT.md`, which explicitly instructs against committing,
pushing, or deploying without separate authorization.
