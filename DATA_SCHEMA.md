# QURRA I'rab — Data Schema

This documents the actual shapes used in `js/curriculum.js`,
`js/lessonData.js`, and the progress records in `js/progress.js`, as
built — not an aspirational schema. If you change a shape, update this
file in the same change.

## 1. `QITiers` (in `curriculum.js`)

```js
{
  id: number,        // 0-10
  titleEn: string,
  titleMs: string,
  rationale: string  // why this tier sits where it does, prerequisite-wise
}
```

## 2. `QICurriculum` (in `curriculum.js`) — one entry per chapter, all 48

```js
{
  id: number,              // chapter id, matches the source book's chapter numbering
  tier: number,            // 0-10, which QITiers entry this chapter belongs to
  prereq: number[],        // chapter ids this chapter's lesson assumes
  titleAr: string,         // chapter title, Arabic (untranslated)
  titleEn: string,
  titleMs: string,
  topicEn: string,         // one-line summary of what the chapter covers
  pdfPages: [number, number], // inclusive PDF page range in the source PDF
  hasLesson: boolean       // true only for chapters with a built QILessons record
}
```

`pdfPages` are PDF page numbers in the audited source PDF. Printed page
numbers (as shown on the physical page) run one lower throughout this
book — `printedPage = pdfPages[0] - 1`. Individual worked examples carry
their own `printedPage` in their citation (see below) rather than
relying on this offset, since it was verified per-example during the
original audit.

## 3. `QILessons` (in `lessonData.js`) — keyed by chapter id

### 3a. Pilot lesson record (`status: "pilot"`)

```js
{
  chapterId: number,
  status: "pilot",
  concept: { en: string, ms: string },
  rule: {
    contentLabel: "source-derived", // or "needs-review" — see below
    citation: { chapter: number, pdfPages: [number, number] },
    en: string, ms: string
  },
  // contentLabel on `rule` is almost always "source-derived" (a simplified
  // restatement of the book's own التعريف). "needs-review" is a fourth,
  // rarer value for when the chapter's full honest scope genuinely includes
  // content the source itself never formally defines — not an invented
  // addition, but a gap between what's demonstrated (in worked examples)
  // and what's defined (in a lettered أ./ب./ج. heading). First actually
  // used in Tier 7, Chapter 46 (Badal): the source formally defines three
  // badal types, but its own worked-example section additionally labels
  // three more (غلط/نسيان/تفصيل) with no definition heading anywhere in
  // the chapter. See §3f below.
  workedExample: {
    contentLabel: "source-example",
    citation: { chapter: number, pdfPages: [number, number], printedPage?: number },
    // printedPage is omitted (not zero/null) when the cited PDF page is a
    // chapter's unnumbered title page — the source book's own printed
    // numbering resumes on the chapter's second PDF page. renderCitation()
    // in lessonEngine.js checks for this field's presence before showing
    // a printed-page line. (First used in Tier 1 for Ch1/23; several
    // Tier 2 chapters' main worked example also falls on a title page —
    // e.g. Ch2, Ch3, Ch4, Ch5 — and omit printedPage for the same reason.)
    arabic: string,              // untranslated Arabic sentence, verbatim from source
    gloss: { en: string, ms: string },
    words: [
      {
        id: string,
        ar: string,                         // the word (or word-group) as it appears
        role: { en: string, ms: string },   // e.g. "fa'il (subject)"
        case: string,                        // e.g. "raf'", "nasb", "jarr (lafzi) / raf' (mahalli)"
        sign: { en: string, ms: string },   // how the case shows up (lafzi/taqdiri/mahalli)
        reason: { en: string, ms: string }  // why — ties back to the rule
      }
    ],
    irabAr?: {                     // OPTIONAL. The book's own Arabic i'rab of this worked
      contentLabel: "source-example", // example, verbatim from the cited page. Rendered RTL
      citation: { chapter: number, pdfPages: [number, number], printedPage?: number },
      text: string                 // under the example; not translated. ONE passage:
      // ...or, instead of `text`, SEVERAL passages shown in array order:
      // passages: [ { text: string,
      //               heading?: { en: string, ms: string },   // short label
      //               citation?: { chapter, pdfPages, printedPage? } }, ... ]
      // The shared `citation` above is shown once after the passages unless a
      // passage carries its own. `text`-only entries keep working unchanged.
    }
    dualAnalysis?: {               // ONLY present when the source itself
                                    // documents more than one valid reading
      note: { en: string, ms: string },     // what the second reading is
      ranking: { en: string, ms: string }   // the source's own ranking language,
                                             // or an honest note when the source
                                             // gives no explicit ranking (e.g.
                                             // "both readings are given with no
                                             // ranking" — see Ch7/Ch8 below)
    }
    // This is a single two-reading object, not an array — still the case
    // after Tier 3. Tier 1's approval to extend this to an array for
    // chapters with 3+ readings (Ch28, Ch38) is now RESOLVED FOR CH28:
    // after re-reading the source pages carefully (PDF pp.140-144), Ch28's
    // "triple-ranked na't analysis" is a genuine single-sentence THREE-WAY
    // valid surface form (fatha/mabni, raf', or nasb — all stated "جاز"
    // with no preference among the three forms themselves), and it is
    // fully describable in this EXISTING {note, ranking} free-text object:
    // `note` describes the raf' and nasb alternates to the primary
    // mabni-fatha reading shown in `words[]`, and `ranking` reports the
    // source's own separate ranking of three scholarly *explanations* for
    // the fatha-form's missing tanween (mujawara / analogy to compounds
    // like خمسة عشر / true-nasb-unmarked-for-harmony — the third marked
    // "أسلم الأقوال"). No array extension was needed. The generic UI
    // heading above the callout ("The source documents more than one
    // valid reading" — see lessonEngine.js) was reworded during this pass
    // from its previous fixed "...documents two valid readings" specifically
    // so it no longer misstates Ch28's three-way case; this is a one-line
    // i18n string fix, not an engine change, and doesn't affect the
    // substance of any existing two-reading chapter's callout. The
    // array-extension question remains open only for Ch38, not yet built.
    // All eight dualAnalysis uses to date (Ch6/24/26/27 considered-and-
    // rejected; Ch7, Ch8, Ch10, Ch23, Ch25, Ch28, Ch35, Ch42 used) fit
    // this existing shape:
    //   - Ch7 (شَعْبَانُ) and Ch8 (سَعْدُونُ): a diptote 'alam name also
    //     readable as mulhaq bil-mathna / mulhaq bil-jam', with NO
    //     explicit source ranking between the two readings (unlike Ch23's
    //     "more correct / easier" language) — noted as such in `ranking`.
    //   - Ch10 (اقْرَأِ الكِتَابَ أَوْ أَتْعَبَ): the same visible nasb
    //     marker explained by two different 'amils, WITH an explicit
    //     source ranking, in wording nearly identical to Ch23's.
    //   - Ch6 (manqus nouns) deliberately does NOT use dualAnalysis: its
    //     thiql-vs-hadhf distinction is two different mechanisms for two
    //     different grammatical conditions (definite/mudaf vs. indefinite),
    //     not a genuine single-sentence reading ambiguity, so it's
    //     explained in `rule` as two explicitly separated cases instead.
    //   - Ch25 (سَمِيرٌ أَوْشَكَ أَنْ يَنْجَحَ): naqisa reading (primary,
    //     shown in `words[]`) vs. tamma reading (أوشك as a complete verb,
    //     fa'il = the أنْ-clause) in `note`; source explicitly ranks the
    //     tamma reading "أفضل" when a noun/pronoun precedes these verbs —
    //     recorded in `ranking`.
    //   - Ch28: see above — the three-way na't surface form.
    //   - Ch35 (قَامَ وَسَافَرَ الصَّدِيقُ, Tier 6): the two competing-
    //     operator assignments tanazu' is named for — IS the chapter's own
    //     topicEn-flagged defining feature (topicEn: "Two operators
    //     competing for one object"), unlike every other chapter's
    //     incidental dual reading, so this is the first dualAnalysis
    //     record added since Tier 3. No explicit source ranking between
    //     the two assignments — noted as such in `ranking`, same pattern
    //     as Ch7/Ch8.
    //   - Ch24, Ch26, Ch27 each considered dualAnalysis and deliberately
    //     rejected it: each has a secondary nuance in its source text
    //     (Ch24's illa-voided-laysa reading; Ch26's illa-voiding parallel;
    //     Ch27's ma-kaffa/mukhaffafa behavior) that isn't the chapter's own
    //     topicEn-flagged defining feature, so it's documented in `rule`
    //     prose with citation instead, per the same framework used for
    //     Ch6 in Tier 2. Tier 6 added three more considered-and-rejected
    //     cases on the same grounds: Ch30's الحامي الديارَ (second-object
    //     vs. mudaf-ilayh), Ch31's أفضلَ منه أخوك (na't-with-apparent-
    //     fa'il vs. fronted-khabar), and Ch38's ولا سيّما triple
    //     raf'/nasb/jarr choice — the last also fails the "same worked
    //     example" test this field expects, since the source illustrates
    //     the indefinite-noun case with a second, parallel example rather
    //     than the lesson's own primary one (رشيدٌ, a proper name, is
    //     raf'-only in its own sentence). Tier 7 added three more:
    //     Chapter 43's qat' al-na't (مررت بالقائدِ العظيمُ/العظيمَ —
    //     genuinely a dual raf'/nasb reading, but haqiqi/sababi agreement
    //     is clearly the chapter's primary, topicEn-flagged content and
    //     qat' is secondary, same framework as Ch30/31); Chapter 44's
    //     'atf-bayan/badal-kull-min-kull interchangeability (the source
    //     explicitly offers both readings for several of its own examples,
    //     e.g. رأيتُ ليثًا أي أسدًا: "عطف بيان... أو: بدل من ليثًا" — but
    //     the chapter's own topicEn names the nasaq/bayan two-part
    //     structure as its defining feature, not this secondary overlap);
    //     and Chapter 46's badal-tafsil/interrogative-من overlap (مَن جاء
    //     أغسانُ أم عامرٌ؟ labels غسانُ simply "بدل من كلمة مَن" without
    //     the تفصيل qualifier used elsewhere in the same chapter — judged
    //     too minor a terminology wrinkle for its own dualAnalysis record,
    //     and already covered by Ch46's broader needs-review flag; see §3f).
    //     Tier 8 both added one more considered-and-rejected case AND the
    //     first new dualAnalysis USE since Tier 6's Ch35:
    //   - Ch39 (يا أخانا عادلاً أو عادلٌ): considered and rejected — the
    //     source explicitly ranks one surface form over the other
    //     ("الإعراب الأول أصح، بالرغم من شهرة الإعراب الثاني"), but on a
    //     different sentence than the lesson's own primary worked example
    //     (يا سليمُ), failing the "same worked example" test (the Ch38
    //     precedent from Tier 6) even though an explicit source ranking
    //     is present — folded into rule prose instead.
    //   - Ch42 (يا جَمْفُ, Tier 8): USED. Unlike every Tier 4-7 rejected
    //     case, this dual reading is given by the source on the identical
    //     worked example, on consecutive lines, each reading explicitly
    //     named as its own dialect-convention (لغة مَن ينتظر رجوع الحرف
    //     المحذوف vs. لغة مَن لا ينتظر الحرف الأخير المحذوف) — and the
    //     chapter's own topicEn ("two dialect-conventions contrasted")
    //     names this exact contrast as its defining feature, same as
    //     Ch35's tanazu' precedent. No source ranking is given between
    //     the two conventions (recorded as such in `ranking`, same
    //     pattern as Ch7/Ch8/Ch35).
    //     Tier 9 added three MORE considered-and-rejected cases (no new
    //     USE — the "eight uses to date" count above stays at eight;
    //     only the rejected-cases list grows) — all on Ch47, which
    //     turned up an unusually large number of genuine dual readings
    //     for one chapter:
    //   - Ch47's لام التقوية (أنا مكرمٌ للصديقِ): optional za'id-vs-
    //     muta'alliq reading, no explicit source ranking — folded into
    //     rule prose instead, failing the "same worked example" test
    //     (the chapter's primary worked example is وَصَلَ المُسَافِرُ
    //     إِلَى المَدِينَةِ, an asli-harf sentence with no لام at all).
    //   - Ch47's حتى (أكلت السمكة حتى رأسها): harf-jarr-vs-harf-'atf
    //     dual reading, no explicit source ranking — same "different
    //     sentence from the primary worked example" failure.
    //   - Ch47's على (أساء الصديقُ فاحتملتُ إساءته على أن احتمالها مرّ
    //     اليمّ): "لكن الاستدراكية" reading (no ta'alluq) vs. an
    //     elided-mubtada's-khabar reading, WITH an explicit source
    //     ranking ("الإعراب الأول أحسن") — still fails the "same
    //     worked example" test, so the ranking is preserved faithfully
    //     in rule prose rather than in a `dualAnalysis.ranking` field.
    //     Consistent with Ch39's precedent (Tier 8), Ch47's own defining
    //     feature — the asli/za'id/shabih-bil-za'id 3-way split — is
    //     taught via different example sentences per category plus rule
    //     prose + exercises, not dualAnalysis, since that field is
    //     reserved for one single sentence genuinely admitting two
    //     readings, not a multi-way category split across examples.
    //     Tier 10 (Ch48, the final chapter) added NEITHER a new use NOR a
    //     new considered-and-rejected case — it's a pure classification
    //     chapter (15 jumla-mahall sub-categories) with no single sentence
    //     genuinely admitting two readings anywhere in the source. The
    //     "eight uses to date" tally above is therefore final for the
    //     48-chapter build: Ch7, Ch8, Ch10, Ch23, Ch25, Ch28, Ch35, Ch42.
  },
  exercises: [ /* see §4 */ ],
  completion: { en: string, ms: string }
}
```

### 3b. Placeholder lesson record (`status: "placeholder"`)

Auto-generated by `fillPlaceholders()` for every chapter in
`QICurriculum` without a hand-built entry above:

```js
{
  chapterId: number,
  status: "placeholder",
  concept: { en: string, ms: string }, // states plainly that this isn't built yet,
                                        // and cites the chapter/page range
  rule: null,
  workedExample: null,
  exercises: [],
  completion: null
}
```

`lessonEngine.js` checks `status` before touching any other field, so a
placeholder's `null` fields are never dereferenced.

### 3c. Partial lesson record (a `status: "pilot"` record whose chapter keeps `hasLesson: false`)

For a source chapter too large or too thematically mixed to finish in
one pass (first case: Chapter 29, which covered 5 object types spanning
two curriculum tiers until the Tier 4 pass completed it — see the
comment above `QILessons[29]` in `lessonData.js`, and the citation-fix
note in §3d below), a `status: "pilot"` record can exist and render
fully while `curriculum.js` keeps that chapter's `hasLesson: false`.
This is a deliberate, honest "here's what's built so far" state, not a
bug:

- The curriculum browser still badges it "not yet available" and links
  to it with `curriculum.viewChapter` wording instead of
  `curriculum.openLesson`, since `hasLesson` (not `lesson.status`)
  drives that card.
- It's excluded from `getBuiltChapters()` / dashboard "lessons
  available" / "recommended next" — all keyed on `hasLesson`.
- It should have **no independent-step exercise**. Lesson completion
  triggers on the independent step; a partial chapter reaching
  `lessonsCompleted` while excluded from `lessonsAvailable` would let
  the dashboard's two progress-bar numbers go inconsistent (e.g.
  completed > available). A guided-only exercise set sidesteps this
  without any engine change.
- `hasLesson` flips to `true` only once the record covers the whole
  source chapter.

No schema or engine change was needed for this — it's a convention for
how to use the existing `status: "pilot"` shape, not a new shape.

### 3d. Citation-accuracy fix disclosed (Tier 4 pass, Chapter 29)

While researching Chapter 29's remaining four object types (Tier 4),
careful re-reading of PDF page 146 surfaced a citation-accuracy bug in
that chapter's already-shipped (Tier 1) record: its `rule.citation`
(`pdfPages: [146, 147]`) and `workedExample.citation`
(`pdfPages: [146, 146], printedPage: 145`) were inaccurate. PDF page
146 is the chapter's own unnumbered title page, and it is entirely
about maf'ul **fih** — a different object type — not maf'ul bih. The
lesson's actual bih content, including the worked example's exact
sentence (قَطَفَ المُزَارِعُ التُّفَّاحَ, which also appears verbatim
in the book's own maf'ul-bih definition), is on PDF page 147 (printed
page 146).

This was a citation-accuracy issue in previously-shipped content, not
an application bug — found through direct source re-reading, not
inferred. Fixed in the Tier 4 pass: `rule.citation` is now
`{ chapter: 29, pdfPages: [146, 161] }` (accurate now that the rule
text covers the whole chapter) and `workedExample.citation` is now
`{ chapter: 29, pdfPages: [147, 147], printedPage: 146 }`. No other
chapter's citations were affected; this entry exists so a future pass
re-auditing citations knows this one was already checked and corrected.

### 3e. Citation-accuracy fix disclosed (Tier 5 pass, Chapters 17 & 18)

While transcribing Chapter 17 (Relative Noun) and Chapter 18 (Zarf) in
the Tier 5 pass, `curriculum.js`'s `pdfPages` metadata for both was
found to be off by one page at their shared boundary: Chapter 17 was
recorded as `[82, 85]` and Chapter 18 as `[86, 96]`. Close re-reading
of PDF page 86 showed it is still Chapter 17 content — its page header
reads "الفصل السابع عشر / إعراب اسم الموصول" and it contains the أيّ
mu'rab-exception rule — while PDF page 87 is Chapter 18's own
unnumbered title page (header: "الفصل الثامن عشر / إعراب الظرف
(المفعول فيه)"). Both are corrected in this pass: Chapter 17 is now
`pdfPages: [82, 86]` and Chapter 18 is now `pdfPages: [87, 96]`. No
lesson content was affected (the Chapter 17 lesson's own citations
already used the corrected range); this was purely a `curriculum.js`
metadata fix, found through direct source re-reading, not inferred.

### 3f. `contentLabel: "needs-review"` — first use (Tier 7 pass, Chapter 46)

`"needs-review"` has existed as a documented value in `lessonData.js`'s
header comment since Tier 1 (`// "needs-review" — flagged for a
qualified Arabic grammar teacher`), but no chapter had ever actually
needed it until Tier 7's Chapter 46 (Badal). This section records why
and how it was used, since it's a new precedent for future tiers.

Chapter 46's source التعريف (definition) section formally defines
exactly three badal types, each under its own lettered heading (أ.
بدل اشتمال، ب. البدل المطابق، ج. بدل جزء من كل). Its own إعراب
(worked-example) section, however, goes further and labels three MORE
distinct badal functions directly on specific example sentences —
بدل غلط (ghalat, correcting a word said by mistake — explicitly
glossed "يتعلق باللسان", a tongue-level error), بدل نسيان (nisyan,
correcting a word said due to a memory lapse — explicitly glossed
"يتعلق بالعقل", a mind-level lapse, and explicitly contrasted with
ghalat in the same sentence of the source), and بدل تفصيل (tafsil,
detailing what an earlier vague مَن/ما actually refers to). None of
these three receive their own أ./ب./ج.-style definition heading
anywhere in the chapter — they are genuine, source-demonstrated
categories, not inventions, but the book itself never gives them the
same formal treatment as the first three.

This is exactly the situation `"needs-review"` exists for: real
content, honestly transcribed, but with a documentation gap in the
source itself that a qualified Arabic grammar teacher should resolve
(are ghalat/nisyan/tafsil standard badal terminology elsewhere, or
specific to this book's own worked examples?) before the chapter is
treated as fully settled. The decision made for this pass:

- `rule.contentLabel` is set to `"needs-review"` (not
  `"source-derived"`), and the rule text itself discloses the gap
  explicitly — it names all six functions, explains which three are
  formally defined and which three are not, and quotes the source's
  own ghalat/nisyan contrast.
- `workedExample` and both `exercises` entries stick to the three
  formally-defined types only (mutabiq/ishtimal/ba'd-min-kull), each
  `contentLabel: "source-example"` or `"new-example"` as normal — so
  no unreviewed content is taught as settled practice material even
  though the rule prose discloses it for completeness.
- This chapter was already flagged in `curriculum.js`'s own topicEn
  from the moment it was scoped ("needs review" is in the chapter's
  topicEn string), so this is the needs-review flag finally being
  exercised, not a new one being discovered mid-build.

## 4. Exercise item shapes (inside `lesson.exercises[]`)

Every exercise shares this envelope:

```js
{
  id: string,
  step: "guided" | "independent",
  type: string,                 // descriptive only — grading dispatches on
                                 // shape (options vs fields), not on type
  contentLabel: "new-example",  // all current exercises are authored for
                                 // this app, not transcribed from the book
  promptAr?: string,             // Arabic sentence the exercise is about
  gloss?: { en, ms },
  targetWord?: string,
  question: { en: string, ms: string },
  ruleNote: { en: string, ms: string }   // shown as feedback after grading,
                                          // correct or not
}
```

Plus exactly one of these two answer shapes:

### 4a. `options` shape (single-select)

```js
options: [ { value: string, labelEn: string, labelMs: string } ],
acceptedValues: [ string ]   // one or more values that count as correct
```

### 4b. `fields` shape (multi-field combo)

```js
fields: [
  {
    key: string,                       // e.g. "role", "case", "sign"
    question: { en: string, ms: string },
    options: [ { value, labelEn, labelMs } ]
  }
],
acceptedCombos: [ { [fieldKey]: value, ... } ]  // one or more full combinations that count as correct
```

### 4c. Reserved extension point: free-text answers

The approved exercise-types decision explicitly deferred free-text
Arabic evaluation past v1, but required the data model to support
adding it later. That extension point is the exercise `type` /
answer-shape split itself: a future free-text exercise would be a third
shape (e.g. `freeTextAr: true` + an `acceptedPatterns[]` or similar),
added to `exerciseEngine.js`'s shape dispatch (`shapeOf()`) alongside
`options` and `fields`, without touching `lessonEngine.js` or any
existing exercise record.

## 5. Progress records (`localStorage`, owned by `progress.js`)

Storage key: `qurra-irab:progress:v1`.

```js
{
  version: 1,
  exercises: {
    "<lessonId>:<exerciseId>": {
      lessonId: number,
      exerciseId: string,
      selected: string | object,  // raw submitted answer (matches the
                                   // exercise's answer shape)
      correct: boolean,
      timestamp: string            // ISO 8601
    }
  },
  lessonsCompleted: {
    "<lessonId>": string           // ISO 8601 timestamp of first completion
  }
}
```

Language preference is a separate, simpler key (`qurra-irab:lang:v1`,
in `state.js`), holding just `"en"` or `"ms"`.
