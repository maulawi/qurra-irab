/* ==========================================================================
   QURRA I'rab — Curriculum metadata (QICurriculum)

   This file represents all 48 chapters of the source reference book
   (مرجع الطلاب في الإعراب — Marji' al-Tullab fi al-I'rab, Ibrahim
   Samsaddin, Dar Al-Kotob Al-Ilmiyah, 2009) as planning metadata.

   IMPORTANT: this file does NOT contain lesson content. It contains only
   what the reference-book audit verified: chapter titles, page ranges,
   and a one-line topic summary. Actual lesson content (worked examples,
   exercises) lives in lessonData.js and currently exists for 3 chapters
   only (the approved pilot: 1, 21, 23). Every other chapter here has
   hasLesson:false — the curriculum browser must render those as
   "not yet available", never as empty or fabricated content.

   Page numbers are PDF page numbers from the audited source PDF;
   printed page = pdfPages[0]-1 .. pdfPages[1]-1 throughout (see
   ARCHITECTURE.md and the QURRA I'rab planning document for the audit
   that established this).

   tier: 0-10, the approved prerequisite-based learning pathway (see
   DATA_SCHEMA.md). Chapter 29 covers five object (maf'ul) sub-types;
   its core sub-type (maf'ul bih) is tier 1, the remaining four are
   tier 4 — modeled here as a single chapter record at tier 1 with a
   note, since the book itself treats it as one chapter. A future
   content build may split it into two lesson records sharing one
   chapter id.
   ========================================================================== */

const QITiers = [
  { id: 0, titleEn: "Foundations", titleMs: "Asas", rationale: "The operator/operated-upon/operation triad and the three ways a case ending is realized — every later lesson's vocabulary depends on this." },
  { id: 1, titleEn: "Core sentence roles", titleMs: "Peranan Ayat Teras", rationale: "The skeleton every other topic attaches to or modifies: mubtada/khabar, fa'il, na'ib al-fa'il, maf'ul bih." },
  { id: 2, titleEn: "Verb forms & noun declension patterns", titleMs: "Pola Kata Kerja & Kata Nama", rationale: "How a word already playing a Tier-1 role actually shows its case ending." },
  { id: 3, titleEn: "Sentence-transforming particles", titleMs: "Huruf Pengubah Ayat", rationale: "Kana, inna and their relatives operate directly on an existing mubtada/khabar pair from Tier 1." },
  { id: 4, titleEn: "Remaining object types, hal, tamyiz", titleMs: "Jenis Objek Lain, Hal, Tamyiz", rationale: "Extensions of the verbal sentence built in Tier 1, refined by Tier 2's verb-form knowledge." },
  { id: 5, titleEn: "Nominal categories", titleMs: "Kategori Kata Nama", rationale: "Pronouns, demonstratives, relatives, proper nouns, numbers and more — word-categories that can fill any role already taught." },
  { id: 6, titleEn: "Specialized constructs", titleMs: "Binaan Khusus", rationale: "Derived-noun governance, warning/urging constructions, exceptions — each refines a pattern from earlier tiers." },
  { id: 7, titleEn: "Dependents (tawabi')", titleMs: "Kata Pengikut", rationale: "A na't, 'atf, tawkid or badal always attaches to a noun already playing a role." },
  { id: 8, titleEn: "Vocative and its relatives", titleMs: "Seruan dan Yang Berkaitan", rationale: "A fairly self-contained sentence type, less frequent in ordinary prose." },
  { id: 9, titleEn: "Prepositions", titleMs: "Kata Sendi", rationale: "Basic jarr/majrur phrases already appear informally in earlier tiers; this is the full particle-by-particle taxonomy." },
  { id: 10, titleEn: "Capstone: sentence classification", titleMs: "Kemuncak: Klasifikasi Ayat", rationale: "Pure synthesis — classifies sentence types met throughout every earlier tier." }
];

// prereq: chapter ids this chapter's lesson assumes (not exhaustive line-by-
// line; see DATA_SCHEMA.md for how per-lesson prerequisites are refined
// during content build). hasLesson:true only for the approved pilot.
const QICurriculum = [
  { id: 1,  tier: 0, prereq: [],                 titleAr: "تعريفات عامة",                                   titleEn: "General Definitions",                                   titleMs: "Definisi Am",                                   topicEn: "The 'amil/ma'mul/'amal triad; the three types of i'rab realization (lafzi/taqdiri/mahalli)", pdfPages: [6, 8],     hasLesson: true  },
  // NOTE: chapter 29's hasLesson deliberately stays false even though a
  // partial lesson record now exists for it (maf'ul bih only) — see the
  // comment above QILessons[29] in lessonData.js for why.
  { id: 2,  tier: 2, prereq: [1],                titleAr: "إعراب الأفعال الخمسة",                             titleEn: "I'rab of the Five Verbs",                               titleMs: "I'rab Af'al Khamsah (Lima Kata Kerja)",         topicEn: "The five verbs; nun as the raf'/jazm-nasb marker",            pdfPages: [9, 10],    hasLesson: true  },
  { id: 3,  tier: 2, prereq: [1],                titleAr: "إعراب الفعل الماضي",                               titleEn: "I'rab of the Past-Tense Verb",                          titleMs: "I'rab Fi'l Madi (Kata Kerja Lampau)",           topicEn: "The three mabni bases of the past-tense verb",                pdfPages: [11, 12],   hasLesson: true  },
  { id: 4,  tier: 2, prereq: [1],                titleAr: "إعراب فعل الأمر",                                  titleEn: "I'rab of the Imperative Verb",                          titleMs: "I'rab Fi'l Amr (Kata Perintah)",                topicEn: "Imperative mabni bases; nun al-tawkid; amr/du'a'/iltimas by speaker rank", pdfPages: [13, 16],   hasLesson: true  },
  { id: 5,  tier: 2, prereq: [1],                titleAr: "إعراب الاسم المقصور والمضاف إلى ياء المتكلم",         titleEn: "I'rab of Maqsur Nouns & Nouns Annexed to \"My\"",       titleMs: "I'rab Isim Maqsur & Mudhaf kepada Ya' Mutakallim", topicEn: "Defective declension of maqsur nouns",                      pdfPages: [17, 17],   hasLesson: true  },
  { id: 6,  tier: 2, prereq: [1],                titleAr: "إعراب الاسم المنقوص",                              titleEn: "I'rab of Manqus Nouns",                                 titleMs: "I'rab Isim Manqus",                             topicEn: "Manqus declension; first dual-analysis instance",             pdfPages: [18, 20],   hasLesson: true  },
  { id: 7,  tier: 2, prereq: [1],                titleAr: "إعراب المثنى",                                    titleEn: "I'rab of the Dual",                                     titleMs: "I'rab Mathna (Dwi)",                            topicEn: "Dual declension + mulhaq bil-mathna (kila/kilta, ithnan/ithnatan, Sha'ban-type names)", pdfPages: [21, 24],   hasLesson: true  },
  { id: 8,  tier: 2, prereq: [1],                titleAr: "إعراب جمع المذكر السالم",                          titleEn: "I'rab of the Sound Masculine Plural",                   titleMs: "I'rab Jamak Mudzakkar Salim",                   topicEn: "Sound masc. plural + a 6-way mulhaq typology",                pdfPages: [25, 28],   hasLesson: true  },
  { id: 9,  tier: 2, prereq: [1],                titleAr: "إعراب جمع المؤنث السالم وملحقاته",                  titleEn: "I'rab of the Sound Feminine Plural & Its Analogues",    titleMs: "I'rab Jamak Muannath Salim & Yang Berkaitan",   topicEn: "Sound fem. plural + its mulhaq items",                        pdfPages: [29, 30],   hasLesson: true  },
  { id: 10, tier: 2, prereq: [1],                titleAr: "إعراب الفعل المضارع",                              titleEn: "I'rab of the Present-Tense Verb",                       titleMs: "I'rab Fi'l Mudhari' (Kata Kerja Kini)",         topicEn: "Raf'/nasb/jazm of the present-tense verb; full particle lists", pdfPages: [31, 45],   hasLesson: true  },
  { id: 11, tier: 5, prereq: [1, 21],            titleAr: "إعراب اسم العَلَم",                                titleEn: "I'rab of Proper Nouns",                                 titleMs: "I'rab Isim 'Alam (Nama Khas)",                  topicEn: "Simple, mudaf, kunya and compound proper nouns; al-hikaya for foreign/mabni names", pdfPages: [46, 50],   hasLesson: true  },
  { id: 12, tier: 5, prereq: [1, 21],            titleAr: "إعراب اسم الفعل",                                  titleEn: "I'rab of the Verb-Noun",                                titleMs: "I'rab Isim Fi'l",                               topicEn: "Isim al-fi'l (hayhat, uff, sah...), 3-way madi/mudari'/amr split", pdfPages: [51, 56],   hasLesson: true  },
  { id: 13, tier: 5, prereq: [1, 21],            titleAr: "إعراب العدد",                                     titleEn: "I'rab of Numbers",                                      titleMs: "I'rab 'Adad (Nombor)",                          topicEn: "Compound/ordinal numbers; source Qur'anic citation (An-Nur 24:4)", pdfPages: [57, 61],   hasLesson: true  },
  { id: 14, tier: 2, prereq: [1, 10],            titleAr: "إعراب أدوات الشرط",                                titleEn: "I'rab of Conditional Particles",                        titleMs: "I'rab Adawat Syarat",                           topicEn: "Jazm/non-jazm conditional particles; jawab al-shart rules",   pdfPages: [62, 68],   hasLesson: true  },
  { id: 15, tier: 5, prereq: [1, 21],            titleAr: "إعراب الضمير",                                    titleEn: "I'rab of the Pronoun",                                  titleMs: "I'rab Dhamir (Kata Ganti Nama)",                topicEn: "Pronoun taxonomy + dhamir al-sha'n and dhamir al-fasl",        pdfPages: [69, 77],   hasLesson: true  },
  { id: 16, tier: 5, prereq: [1, 21],            titleAr: "إعراب اسم الإشارة",                                titleEn: "I'rab of the Demonstrative",                            titleMs: "I'rab Isim Isyarah (Kata Tunjuk)",              topicEn: "Demonstratives, incl. dual dhan/tan",                          pdfPages: [78, 81],   hasLesson: true  },
  { id: 17, tier: 5, prereq: [1, 21],            titleAr: "إعراب اسم الموصول",                                titleEn: "I'rab of the Relative Noun",                            titleMs: "I'rab Isim Mawsul (Kata Hubung)",               topicEn: "Relative nouns; al-'a'id; ayy as the one mu'rab relative",     pdfPages: [82, 86],   hasLesson: true  },
  { id: 18, tier: 5, prereq: [1, 21],            titleAr: "إعراب الظرف (المفعول فيه)",                        titleEn: "I'rab of the Adverbial (Zarf)",                         titleMs: "I'rab Zarf (Keterangan Masa/Tempat)",           topicEn: "Adverbials + 4 substitute/analogue categories — large chapter", pdfPages: [87, 96],   hasLesson: true  },
  { id: 19, tier: 5, prereq: [1, 21],            titleAr: "إعراب اسم الاستفهام",                              titleEn: "I'rab of Interrogative Nouns",                          titleMs: "I'rab Isim Istifham (Kata Tanya)",              topicEn: "Interrogative nouns and particles",                           pdfPages: [97, 102],  hasLesson: true  },
  { id: 20, tier: 5, prereq: [1, 21],            titleAr: "إعراب الكنايات",                                  titleEn: "I'rab of Indefinite-Quantity Expressions",              titleMs: "I'rab Kinayat",                                 topicEn: "Kam, kadha, ka'ayyin — indefinite-quantity expressions",      pdfPages: [103, 108], hasLesson: true  },
  { id: 21, tier: 1, prereq: [1],                titleAr: "إعراب الفاعل",                                    titleEn: "I'rab of the Subject (Fa'il)",                          titleMs: "I'rab Fa'il (Pelaku)",                          topicEn: "Explicit/pronoun/ta'wil fa'il; min al-za'ida before fa'il",    pdfPages: [109, 113], hasLesson: true  },
  { id: 22, tier: 1, prereq: [1, 21],            titleAr: "إعراب نائب الفاعل",                                titleEn: "I'rab of the Passive Subject",                          titleMs: "I'rab Na'ib al-Fa'il",                          topicEn: "4 categories of na'ib al-fa'il; 2 Qur'anic citations",        pdfPages: [114, 116], hasLesson: true  },
  { id: 23, tier: 1, prereq: [1],                titleAr: "إعراب المبتدأ والخبر",                             titleEn: "I'rab of the Nominal Sentence (Mubtada/Khabar)",        titleMs: "I'rab Mubtada' & Khabar",                       topicEn: "Al-rabit; 6 forms of khabar; khabar muqaddam wujuban",         pdfPages: [117, 122], hasLesson: true  },
  { id: 24, tier: 3, prereq: [1, 23],            titleAr: "إعراب كان وأخواتها",                               titleEn: "I'rab of Kana and Its Sisters",                         titleMs: "I'rab Kana & Saudarinya",                       topicEn: "3-tier classification by operating condition",                pdfPages: [123, 127], hasLesson: true  },
  { id: 25, tier: 3, prereq: [1, 23],            titleAr: "إعراب كاد وأخواتها",                               titleEn: "I'rab of Kada and Its Sisters",                         titleMs: "I'rab Kada & Saudarinya",                       topicEn: "Muqaraba/raja'/shuru' verb groups",                           pdfPages: [128, 130], hasLesson: true  },
  { id: 26, tier: 3, prereq: [1, 23],            titleAr: "إعراب الأحرف المشبهة بليس",                        titleEn: "I'rab of the Laysa-Analogue Particles",                 titleMs: "I'rab Huruf Seumpama Laysa",                    topicEn: "Ma/la/in/lata as laysa-analogues",                            pdfPages: [131, 133], hasLesson: true  },
  { id: 27, tier: 3, prereq: [1, 23],            titleAr: "إعراب الأحرف المشبهة بالفعل",                      titleEn: "I'rab of Inna and Its Sisters",                         titleMs: "I'rab Inna & Saudarinya",                       topicEn: "Inna/anna/ka'anna/lakinna/layta/la'alla",                     pdfPages: [134, 138], hasLesson: true  },
  { id: 28, tier: 3, prereq: [1, 23],            titleAr: "إعراب لا النافية للجنس",                          titleEn: "I'rab of \"La\" of Categorical Negation",               titleMs: "I'rab La Nafiyah lil-Jins",                     topicEn: "3 conditions; mabni vs mu'rab isim la; triple-ranked na't analysis", pdfPages: [139, 145], hasLesson: true  },
  { id: 29, tier: 1, prereq: [1, 21],            titleAr: "إعراب المفاعيل",                                  titleEn: "I'rab of the Five Object Types",                        titleMs: "I'rab Maf'ul (Lima Jenis Objek)",               topicEn: "All 5 maf'ul types (fih/bih/lahu/mutlaq/ma'ahu) — largest chapter; maf'ul bih is tier 1, the remaining 4 types are tier 4", pdfPages: [146, 161], hasLesson: true },
  { id: 30, tier: 6, prereq: [1, 21, 10],        titleAr: "إعمال اسم الفاعل عمل الفعل",                       titleEn: "The Active Participle's Verbal Governance",             titleMs: "Fungsi Isim Fa'il sebagai Kata Kerja",          topicEn: "Ism al-fa'il governance rules",                                pdfPages: [162, 164], hasLesson: true },
  { id: 31, tier: 6, prereq: [1, 21],            titleAr: "إعراب اسم التفضيل",                                titleEn: "I'rab of the Comparative/Superlative",                  titleMs: "I'rab Isim Tafdil",                             topicEn: "Comparative/superlative formation and governance",            pdfPages: [165, 167], hasLesson: true },
  { id: 32, tier: 6, prereq: [1, 21],            titleAr: "إعراب التعجب",                                    titleEn: "I'rab of Exclamation",                                  titleMs: "I'rab Ta'ajjub (Seruan Kagum)",                 topicEn: "Ma af'alahu / af'il bihi + non-analogical exclamatory forms",  pdfPages: [168, 170], hasLesson: true },
  { id: 33, tier: 6, prereq: [1, 21],            titleAr: "إعراب التحذير",                                   titleEn: "I'rab of Warning Constructions",                        titleMs: "I'rab Tahzir (Amaran)",                         topicEn: "Warning constructions with context-chosen elided verb",       pdfPages: [171, 173], hasLesson: true },
  { id: 34, tier: 6, prereq: [1, 21],            titleAr: "إعراب الإغراء",                                   titleEn: "I'rab of Urging Constructions",                         titleMs: "I'rab Ighra' (Galakan)",                        topicEn: "Urging constructions (shortest chapter, 1 page)",             pdfPages: [174, 174], hasLesson: true },
  { id: 35, tier: 6, prereq: [1, 21],            titleAr: "إعراب التنازع",                                   titleEn: "I'rab of Competing Operators",                          titleMs: "I'rab Tanazu'",                                 topicEn: "Two operators competing for one object",                      pdfPages: [175, 176], hasLesson: true },
  { id: 36, tier: 4, prereq: [1, 21, 29],        titleAr: "إعراب التمييز",                                   titleEn: "I'rab of Specification (Tamyiz)",                      titleMs: "I'rab Tamyiz",                                  topicEn: "Tafsir/ta'kid split; kam's al-sadara",                        pdfPages: [177, 179], hasLesson: true },
  { id: 37, tier: 4, prereq: [1, 21, 29],        titleAr: "إعراب الحال",                                     titleEn: "I'rab of the Circumstantial (Hal)",                     titleMs: "I'rab Hal (Keadaan)",                           topicEn: "Mufrada/jumla fi'liyya/jumla ismiyya hal; sahib al-hal; al-rabit", pdfPages: [180, 183], hasLesson: true },
  { id: 38, tier: 6, prereq: [1, 21],            titleAr: "إعراب المستثنى",                                  titleEn: "I'rab of Exception (Istithna)",                         titleMs: "I'rab Mustathna (Pengecualian)",                topicEn: "8 adawat istithna'; muttasil/munqati'; la siyyama triple analysis", pdfPages: [184, 189], hasLesson: true },
  { id: 39, tier: 8, prereq: [1, 21],            titleAr: "إعراب المنادى",                                   titleEn: "I'rab of the Vocative",                                 titleMs: "I'rab Munada (Seruan)",                         topicEn: "Vocative patterns across noun types",                         pdfPages: [190, 197], hasLesson: true },
  { id: 40, tier: 8, prereq: [1, 21, 39],        titleAr: "إعراب الاستغاثة",                                  titleEn: "I'rab of the Cry for Help",                             titleMs: "I'rab Istighathah",                             topicEn: "Mustaghath bih/lahu triad",                                   pdfPages: [198, 199], hasLesson: true },
  { id: 41, tier: 8, prereq: [1, 21, 39],        titleAr: "إعراب الندبة",                                    titleEn: "I'rab of Lament",                                       titleMs: "I'rab Nudbah (Ratapan)",                        topicEn: "Lament-vocative with alif al-nudba / ha' al-sakt",            pdfPages: [200, 201], hasLesson: true },
  { id: 42, tier: 8, prereq: [1, 21, 39],        titleAr: "إعراب الترخيم",                                   titleEn: "I'rab of Truncation in Address",                        titleMs: "I'rab Tarkhim",                                 topicEn: "Truncation in address; two dialect-conventions contrasted",   pdfPages: [202, 203], hasLesson: true },
  { id: 43, tier: 7, prereq: [1, 21, 15, 16, 17],titleAr: "إعراب النعت",                                     titleEn: "I'rab of the Adjective (Na't)",                         titleMs: "I'rab Na'at (Sifat)",                           topicEn: "Haqiqi/sababi split; qat' al-na't",                           pdfPages: [204, 207], hasLesson: true },
  { id: 44, tier: 7, prereq: [1, 21],            titleAr: "إعراب العطف",                                     titleEn: "I'rab of Coordination ('Atf)",                          titleMs: "I'rab 'Atf (Kata Hubung)",                      topicEn: "'Atf al-nasaq vs 'atf al-bayan (two sub-parts)",              pdfPages: [208, 212], hasLesson: true },
  { id: 45, tier: 7, prereq: [1, 21],            titleAr: "إعراب التوكيد",                                   titleEn: "I'rab of Emphasis (Tawkid)",                            titleMs: "I'rab Tawkid (Penegasan)",                      topicEn: "Ma'nawi/lafzi split",                                         pdfPages: [213, 215], hasLesson: true },
  { id: 46, tier: 7, prereq: [1, 21],            titleAr: "إعراب البدل",                                     titleEn: "I'rab of Substitution (Badal)",                         titleMs: "I'rab Badal (Gantian)",                         topicEn: "Badal ishtimal/mutabiq/ba'd-min-kull + unlabeled ghalat/nisyan sub-types (needs review)", pdfPages: [216, 219], hasLesson: true },
  { id: 47, tier: 9, prereq: [1, 21, 23],        titleAr: "إعراب حروف الجر",                                  titleEn: "I'rab of Prepositions",                                 titleMs: "I'rab Huruf Jar (Kata Sendi)",                  topicEn: "Asli/za'id/shabih bil-za'id 3-way split across the major particles", pdfPages: [220, 227], hasLesson: true },
  { id: 48, tier: 10, prereq: [1, 21, 23, 24, 27, 29, 37], titleAr: "إعراب الجملة",                           titleEn: "I'rab of the Sentence (Classification)",                titleMs: "I'rab Jumlah (Klasifikasi Ayat)",               topicEn: "Sentences with/without a place in i'rab (15 sub-categories); 2 Qur'anic citations", pdfPages: [228, 231], hasLesson: true }
];

// NOTE: top-level `const` does NOT create a `window` property in a
// browser (unlike `var`), so every other module that reads
// window.QITiers / window.QICurriculum needs this explicit assignment.
if (typeof window !== "undefined") {
  window.QITiers = QITiers;
  window.QICurriculum = QICurriculum;
}
if (typeof module !== "undefined") module.exports = { QITiers, QICurriculum };
