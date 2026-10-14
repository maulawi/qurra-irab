/* ==========================================================================
   QURRA I'rab — Lesson content (QILessons)

   Full lesson records exist ONLY for the approved pilot: chapters 1, 21,
   23. Every other chapter in curriculum.js gets an auto-generated
   placeholder record below (status:"placeholder") so the curriculum
   browser and lesson engine can render "not yet available" honestly
   instead of silently failing or inventing content.

   CONTENT LABELS used throughout (see DATA_SCHEMA.md):
     "source-derived"   — simplified restatement of the book's التعريف
     "source-example"   — a worked example transcribed from the book,
                           with its exact page citation
     "new-example"      — authored for this app, not in the book
     "needs-review"     — flagged for a qualified Arabic grammar teacher

   Every pilot lesson here currently carries exactly ONE transcribed,
   page-cited source-example per lesson (the one the planning-document
   audit verified verbatim). Full transcription of every worked example
   in each chapter's page range is Stage 2 (content build) work and has
   NOT been done — see ROADMAP.md. This is a representative/demonstration
   build of the lesson engine, not finished lesson content.
   ========================================================================== */

const QILessons = {

  // ------------------------------------------------------------------
  // Chapter 1 — تعريفات عامة (Foundations)
  // ------------------------------------------------------------------
  1: {
    chapterId: 1,
    status: "pilot",
    concept: {
      en: "Every word in an Arabic sentence is a ma'mul — a governed word — whose ending is determined by whatever governs it (the 'amil). The result of that governance — raf', nasb, jarr or jazm — is the 'amal. This lesson introduces that vocabulary and the three different ways its result can actually show up on a word.",
      ms: "Setiap kata dalam ayat Arab memainkan peranan (ma'mul) yang ditentukan oleh sesuatu yang mentadbirnya (al-'amil). Hasil tadbiran itu — raf', nasb, jarr atau jazm — ialah al-'amal. Pelajaran ini memperkenalkan istilah tersebut dan tiga cara hasil itu ditunjukkan pada sesuatu kata."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 1, pdfPages: [6, 8] },
      en: "The 'amil is whatever governs a word's ending (a verb governing its fa'il, a preposition governing its object...). The ma'mul is the governed word. The 'amal is the governance result: raf', nasb, jarr, or jazm. This result shows up in one of three ways: lafzi — an apparent marker you can see or hear (a damma, fatha, kasra, or sukun actually pronounced on the last letter); taqdiri — an implied marker, blocked from appearing because the word's own shape makes it hard to pronounce there; mahalli — no marker is even possible (the word is mabni, or a whole phrase is standing in a case-slot), so the case is only a grammatical position, never a sound.",
      ms: "Al-'amil ialah apa jua yang mentadbir hujung sesuatu kata (kata kerja mentadbir fa'ilnya, kata sendi mentadbir objeknya...). Al-ma'mul ialah kata yang ditadbir. Al-'amal ialah hasil tadbiran itu: raf', nasb, jarr, atau jazm. Hasil ini ditunjukkan melalui salah satu daripada tiga cara: lafzi — tanda yang kelihatan/kedengaran (damma, fathah, kasrah atau sukun yang benar-benar disebut pada huruf akhir); taqdiri — tanda tersirat, tidak dapat muncul kerana bentuk kata itu sendiri menyukarkan sebutannya di situ; mahalli — tiada tanda langsung mungkin (kata itu mabni, atau keseluruhan frasa menduduki kedudukan kes), jadi kesnya hanyalah kedudukan nahu, bukan bunyi."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 1, pdfPages: [7, 7], printedPage: 6 },
      arabic: "يَكْتُبُ التِّلْمِيذُ",
      gloss: { en: "The student writes.", ms: "Pelajar itu menulis." },
      words: [
        { id: "w1", ar: "يَكْتُبُ", role: { en: "present-tense verb (fi'l mudari')", ms: "kata kerja kini (fi'l mudari')" }, case: "raf'", sign: { en: "apparent damma (damma zahira)", ms: "damma zahir" }, reason: { en: "A present-tense verb not preceded by a jazm/nasb particle defaults to raf', shown lafzi because nothing blocks the damma from being pronounced.", ms: "Kata kerja kini yang tidak didahului huruf jazm/nasb kekal raf', ditunjukkan secara lafzi kerana tiada apa yang menghalang damma disebut." } },
        { id: "w2", ar: "التِّلْمِيذُ", role: { en: "fa'il (subject)", ms: "fa'il (pelaku)" }, case: "raf'", sign: { en: "apparent damma (damma zahira)", ms: "damma zahir" }, reason: { en: "The fa'il of a verb is always raf'; here too the damma is apparent (lafzi) because the word's final letter carries it without difficulty.", ms: "Fa'il bagi sesuatu kata kerja sentiasa raf'; di sini juga damma itu lafzi kerana huruf akhir kata menanggungnya tanpa kesukaran." } }
      ]
    },
    exercises: [
      {
        id: "ex1-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "الفَتَى مُجْتَهِدٌ",
        gloss: { en: "The young man is diligent.", ms: "Pemuda itu rajin." },
        targetWord: "مُجْتَهِدٌ",
        question: { en: "What is the sign of raf' on \"مُجْتَهِدٌ\"?", ms: "Apakah tanda raf' pada \"مُجْتَهِدٌ\"?" },
        options: [
          { value: "damma-zahira", labelEn: "Apparent damma (damma zahira)", labelMs: "Damma zahir" },
          { value: "damma-muqaddara", labelEn: "Implied damma (damma muqaddara)", labelMs: "Damma tersirat" },
          { value: "waw", labelEn: "Waw", labelMs: "Waw" }
        ],
        acceptedValues: ["damma-zahira"],
        ruleNote: { en: "An ordinary noun ending in a sound consonant shows its damma lafzi — nothing about the word's shape blocks it.", ms: "Kata nama biasa yang berakhir dengan konsonan jelas menunjukkan damma secara lafzi — tiada apa pada bentuk kata itu menghalangnya." }
      },
      {
        id: "ex1-independent", step: "independent", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "دَعَا الفَتَى",
        gloss: { en: "The young man called out.", ms: "Pemuda itu memanggil." },
        targetWord: "الفَتَى",
        question: { en: "\"الفَتَى\" is the fa'il here, so it is raf'. What is the sign of that raf'?", ms: "\"الفَتَى\" ialah fa'il di sini, maka ia raf'. Apakah tanda raf' tersebut?" },
        options: [
          { value: "damma-zahira", labelEn: "Apparent damma (damma zahira)", labelMs: "Damma zahir" },
          { value: "damma-muqaddara", labelEn: "Implied damma (damma muqaddara)", labelMs: "Damma tersirat" },
          { value: "mahalli", labelEn: "No marker possible (mahalli)", labelMs: "Tiada tanda mungkin (mahalli)" }
        ],
        acceptedValues: ["damma-muqaddara"],
        ruleNote: { en: "الفَتَى ends in alif maqsura — a damma cannot be pronounced on it, so the raf' is taqdiri (implied), not lafzi. (This case is taught in full in Chapter 5; this lesson only introduces the concept.)", ms: "الفَتَى berakhir dengan alif maqsurah — damma tidak dapat disebut padanya, maka raf' itu taqdiri (tersirat), bukan lafzi. (Kes ini diajar sepenuhnya dalam Bab 5; pelajaran ini hanya memperkenalkan konsepnya.)" }
      }
    ],
    completion: {
      en: "You can now name the 'amil/ma'mul/'amal triad and tell lafzi, taqdiri, and mahalli apart.",
      ms: "Anda kini boleh menamakan tiga serangkai 'amil/ma'mul/'amal dan membezakan lafzi, taqdiri, dan mahalli."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 21 — إعراب الفاعل (Fa'il)
  // ------------------------------------------------------------------
  21: {
    chapterId: 21,
    status: "pilot",
    concept: {
      en: "The fa'il is the doer of a verb's action, and it is always raf' — whatever form it takes. This lesson covers the four forms a fa'il can take: an explicit noun, a pronoun, a masdar mu'awwal (a ta'wil fa'il), or omitted but implied by context.",
      ms: "Fa'il ialah pelaku bagi perbuatan kata kerja, dan ia sentiasa raf' — walau apa jua bentuknya. Pelajaran ini merangkumi empat bentuk fa'il: kata nama jelas, kata ganti nama, masdar mu'awwal (fa'il ta'wil), atau tersirat kerana konteks."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 21, pdfPages: [109, 113] },
      en: "A fa'il can be: an explicit noun (rakiba al-farisu al-hisana); a pronoun (dhahabtu ila al-bayt); a masdar mu'awwal — the verb's action understood from a following 'an + verb (yasurruni an tanjaha, \"that you succeed\" acts as the fa'il); or omitted when context already signals who/what did the action. A fa'il can also be jarred in wording by a za'ida (redundant) min while staying raf' in position (ma zaarana min rajulin). Whatever its form, the fa'il itself is always raf'.",
      ms: "Fa'il boleh berupa: kata nama jelas (rakiba al-farisu al-hisana); kata ganti nama (dhahabtu ila al-bayt); masdar mu'awwal — perbuatan kata kerja difahami daripada 'an + kata kerja berikutnya (yasurruni an tanjaha, \"bahawa kamu berjaya\" bertindak sebagai fa'il); atau tersirat apabila konteks sudah menunjukkan siapa/apa yang melakukan perbuatan itu. Fa'il juga boleh majrur pada lafaz oleh \"min\" za'idah sambil kekal raf' pada kedudukan (ma zaarana min rajulin). Walau apa jua bentuknya, fa'il itu sendiri sentiasa raf'."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 21, pdfPages: [110, 110], printedPage: 109 },
      arabic: "سَرَّنِي إِكْرَامُ التِّلْمِيذِ مُعَلِّمَهُ",
      gloss: { en: "The student's honoring of his teacher pleased me.", ms: "Penghormatan pelajar itu kepada gurunya menggembirakan saya." },
      words: [
        { id: "w1", ar: "سَرَّنِي", role: { en: "past-tense verb + embedded object pronoun (ni)", ms: "kata kerja lampau + kata ganti objek (ni)" }, case: "—", sign: { en: "mabni; the ya' pronoun is mansub as the fronted maf'ul bih", ms: "mabni; kata ganti ya' ialah mansub sebagai maf'ul bih yang didahulukan" }, reason: { en: "The nun here is nun al-wiqaya, protecting the verb before the ya' object pronoun — not part of the fa'il system itself.", ms: "Nun di sini ialah nun al-wiqaya, melindungi kata kerja sebelum kata ganti objek ya' — bukan sebahagian sistem fa'il itu sendiri." } },
        { id: "w2", ar: "إِكْرَامُ", role: { en: "fa'il (of sarra) — a masdar acting as a ta'wil fa'il", ms: "fa'il (bagi sarra) — masdar yang bertindak sebagai fa'il ta'wil" }, case: "raf'", sign: { en: "apparent damma (damma zahira)", ms: "damma zahir" }, reason: { en: "The masdar إكرام (\"the honoring\") is itself the thing that pleased the speaker — it is the fa'il, and it is also mudaf to what follows.", ms: "Masdar إكرام (\"penghormatan\") itu sendiri yang menggembirakan penutur — ia fa'il, dan ia juga mudaf kepada perkataan berikutnya." } },
        { id: "w3", ar: "التِّلْمِيذِ", role: { en: "mudaf ilayh — and, in meaning, the doer of the honoring", ms: "mudaf ilayh — dan, pada makna, pelaku penghormatan itu" }, case: "jarr (lafzi) / raf' (mahalli)", sign: { en: "apparent kasra for the jarr; the raf' has no marker of its own — it is purely positional (mahalli)", ms: "kasrah zahir bagi jarr; raf' itu tiada tanda sendiri — ia semata-mata kedudukan (mahalli)" }, reason: { en: "A textbook case of mahalli i'rab from Lesson 1: التلميذ is majrur in wording (it's a mudaf ilayh) but raf' in position, because in meaning it is the one doing the honoring — exactly the kind of case Chapter 1's three-types rule exists to explain.", ms: "Contoh klasik i'rab mahalli daripada Pelajaran 1: التلميذ majrur pada lafaz (ia mudaf ilayh) tetapi raf' pada kedudukan, kerana pada makna ia pelaku penghormatan itu — jenis kes yang dijelaskan oleh kaedah tiga jenis dalam Bab 1." } },
        { id: "w4", ar: "مُعَلِّمَهُ", role: { en: "maf'ul bih of the masdar إكرام", ms: "maf'ul bih bagi masdar إكرام" }, case: "nasb", sign: { en: "apparent fatha (fatha zahira)", ms: "fathah zahir" }, reason: { en: "The masdar إكرام itself takes an object, the way its verb أكرم would.", ms: "Masdar إكرام itu sendiri mengambil objek, sebagaimana kata kerjanya أكرم." } }
      ]
    },
    exercises: [
      {
        id: "ex21-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "نَجَحَ الطَّالِبُ",
        gloss: { en: "The student succeeded.", ms: "Pelajar itu berjaya." },
        question: { en: "Which word is the fa'il?", ms: "Kata manakah fa'il?" },
        options: [
          { value: "najaha", labelEn: "نَجَحَ", labelMs: "نَجَحَ" },
          { value: "attalibu", labelEn: "الطَّالِبُ", labelMs: "الطَّالِبُ" }
        ],
        acceptedValues: ["attalibu"],
        ruleNote: { en: "In a verb-initial sentence, the doer that follows the verb is the fa'il.", ms: "Dalam ayat yang bermula dengan kata kerja, pelaku yang mengikutinya ialah fa'il." }
      },
      {
        id: "ex21-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "كَتَبَتِ المُعَلِّمَةُ الدَّرْسَ",
        gloss: { en: "The teacher wrote the lesson.", ms: "Guru itu menulis pelajaran itu." },
        targetWord: "المُعَلِّمَةُ",
        question: { en: "Give the full analysis of \"المُعَلِّمَةُ\".", ms: "Berikan analisis penuh bagi \"المُعَلِّمَةُ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" },
            { value: "mubtada", labelEn: "Mubtada'", labelMs: "Mubtada'" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "fail", case: "rafa", sign: "damma-zahira" } ],
        ruleNote: { en: "The fa'il of a verb-initial sentence is always raf'; an ordinary noun shows that raf' as an apparent damma.", ms: "Fa'il bagi ayat yang bermula dengan kata kerja sentiasa raf'; kata nama biasa menunjukkan raf' itu sebagai damma zahir." }
      }
    ],
    completion: {
      en: "You can now identify a fa'il in its common forms and recognize when its case shows up mahalli instead of lafzi, building directly on Lesson 1.",
      ms: "Anda kini boleh mengenal pasti fa'il dalam bentuk lazimnya dan mengenali apabila kesnya ditunjukkan secara mahalli dan bukan lafzi, berdasarkan terus Pelajaran 1."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 22 — إعراب نائب الفاعل (Na'ib al-Fa'il)
  // ------------------------------------------------------------------
  22: {
    chapterId: 22,
    status: "pilot",
    concept: {
      en: "When a verb is cast into the passive voice (majhul), its fa'il drops out of the sentence and something else is promoted to stand in its place in the i'rab — the na'ib al-fa'il. It takes over the fa'il's grammatical job (always raf') but none of its actual role in the action; whatever took the fa'il's old job, the sentence's meaning still shows that something else did the deed and simply isn't named.",
      ms: "Apabila kata kerja dijadikan pasif (majhul), fa'ilnya gugur daripada ayat dan sesuatu yang lain dinaikkan untuk menggantikan tempatnya pada i'rab — iaitu na'ib al-fa'il. Ia mengambil alih tugas nahu fa'il (sentiasa raf') tetapi bukan peranan sebenarnya dalam perbuatan itu; makna ayat tetap menunjukkan ada pelaku lain yang hanya tidak dinamakan."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 22, pdfPages: [114, 115] },
      en: "A na'ib al-fa'il stands in for the fa'il in i'rab only, never in 'amal, and only ever appears after a passive verb. It takes one of four forms, in order of how commonly a sentence supplies them: (1) the maf'ul bih, when the original sentence had one — this is by far the most common case; (2) a majrur noun or phrase, when there is no maf'ul bih to promote, including a jarr-majrur phrase taken as a whole; (3) a zarf (adverbial of time or place) capable of being used outside its adverbial role; (4) when none of the first three exist, a hidden pronoun referring back to the verb's own implied masdar — which is also what happens when an an/anna clause (a masdar mu'awwal) follows the passive verb directly, since that whole clause is itself standing in as the implied masdar.",
      ms: "Na'ib al-fa'il menggantikan fa'il pada i'rab sahaja, bukan pada 'amal, dan hanya muncul selepas kata kerja pasif. Ia mengambil salah satu daripada empat bentuk, mengikut kekerapan ayat menyediakannya: (1) maf'ul bih, apabila ayat asal mempunyainya — ini kes paling lazim; (2) kata nama atau frasa majrur, apabila tiada maf'ul bih untuk dinaikkan, termasuk keseluruhan frasa jar-majrur; (3) zarf (keterangan masa/tempat) yang mampu digunakan di luar peranan zarfnya; (4) apabila tiada satu pun daripada tiga di atas, kata ganti nama tersirat yang merujuk kembali kepada masdar tersirat kata kerja itu sendiri — inilah juga yang berlaku apabila klausa an/anna (masdar mu'awwal) mengikuti terus kata kerja pasif, kerana keseluruhan klausa itu sendiri bertindak sebagai masdar tersirat tersebut."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 22, pdfPages: [114, 114], printedPage: 113 },
      arabic: "مَا يُكْرَمُ إِلَّا أَنْتَ",
      gloss: { en: "No one is honored except you.", ms: "Tiada sesiapa dihormati melainkan kamu." },
      words: [
        { id: "w1", ar: "مَا", role: { en: "negative particle (harf nafy)", ms: "huruf nafi (harf nafy)" }, case: "—", sign: { en: "mabni; a particle, outside the i'rab system", ms: "mabni; huruf, di luar sistem i'rab" }, reason: { en: "Particles like ma are always mabni — they never carry a case ending of their own.", ms: "Huruf seperti ma sentiasa mabni — ia tidak pernah membawa tanda kes sendiri." } },
        { id: "w2", ar: "يُكْرَمُ", role: { en: "present-tense passive verb (fi'l mudari' majhul)", ms: "kata kerja kini pasif (fi'l mudari' majhul)" }, case: "raf'", sign: { en: "apparent damma (damma zahira)", ms: "damma zahir" }, reason: { en: "A present-tense verb with nothing before it to force nasb or jazm stays raf' by default — casting it into the passive voice changes who is understood to act, not this.", ms: "Kata kerja kini yang tiada apa-apa sebelumnya untuk memaksa nasb atau jazm kekal raf' secara lazim — menjadikannya pasif mengubah siapa yang difahami bertindak, bukan perkara ini." } },
        { id: "w3", ar: "إِلَّا", role: { en: "restrictive particle (adat hasr)", ms: "alat pengehad (adat hasr)" }, case: "—", sign: { en: "mabni; a particle, outside the i'rab system", ms: "mabni; huruf, di luar sistem i'rab" }, reason: { en: "Paired with the earlier ma, illa restricts the sentence to the one exception that follows it.", ms: "Bersama ma sebelumnya, illa mengehadkan ayat kepada satu pengecualian yang mengikutinya." } },
        { id: "w4", ar: "أَنْتَ", role: { en: "na'ib al-fa'il — detached pronoun standing for the one honored", ms: "na'ib al-fa'il — kata ganti nama berasingan bagi orang yang dihormati" }, case: "raf' (mahalli)", sign: { en: "mabni on fatha (detached pronoun); the raf' itself has no marker of its own, position-only", ms: "mabni fathah (kata ganti nama berasingan); raf' itu sendiri tiada tanda, kedudukan sahaja" }, reason: { en: "A detached pronoun is always mabni, so it can never show an apparent case marker — its raf' here is purely positional (mahalli), the same mahalli from Chapter 1's three-types rule.", ms: "Kata ganti nama berasingan sentiasa mabni, maka ia tidak boleh menunjukkan tanda kes yang kelihatan — raf'nya di sini semata-mata kedudukan (mahalli), mahalli yang sama daripada kaedah tiga jenis Bab 1." } }
      ]
    },
    exercises: [
      {
        id: "ex22-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "أُكْرِمَ الطَّالِبُ",
        gloss: { en: "The student was honored.", ms: "Pelajar itu dihormati." },
        question: { en: "Which word is the na'ib al-fa'il?", ms: "Kata manakah na'ib al-fa'il?" },
        options: [
          { value: "ukrima", labelEn: "أُكْرِمَ", labelMs: "أُكْرِمَ" },
          { value: "attalibu", labelEn: "الطَّالِبُ", labelMs: "الطَّالِبُ" }
        ],
        acceptedValues: ["attalibu"],
        ruleNote: { en: "When a passive verb is followed by what was originally its maf'ul bih, that word is promoted to the fa'il's old grammatical job and becomes marfu' as na'ib al-fa'il — the most common of the four forms.", ms: "Apabila kata kerja pasif diikuti oleh apa yang asalnya maf'ul bih, kata itu dinaikkan kepada tugas nahu lama fa'il dan menjadi marfu' sebagai na'ib al-fa'il — paling lazim antara empat bentuk." }
      },
      {
        id: "ex22-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "يُقْرَأُ الكِتَابُ",
        gloss: { en: "The book is read.", ms: "Buku itu dibaca." },
        targetWord: "الكِتَابُ",
        question: { en: "Give the full analysis of \"الكِتَابُ\".", ms: "Berikan analisis penuh bagi \"الكِتَابُ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "naib", labelEn: "Na'ib al-fa'il", labelMs: "Na'ib al-fa'il" },
            { value: "mubtada", labelEn: "Mubtada'", labelMs: "Mubtada'" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "naib", case: "rafa", sign: "damma-zahira" } ],
        ruleNote: { en: "After a passive verb with no other candidate, the promoted maf'ul bih becomes na'ib al-fa'il and is raf' — an ordinary noun shows this as an apparent damma.", ms: "Selepas kata kerja pasif tanpa calon lain, maf'ul bih yang dinaikkan menjadi na'ib al-fa'il dan ia raf' — kata nama biasa menunjukkan ini sebagai damma zahir." }
      }
    ],
    completion: {
      en: "You can now recognize a na'ib al-fa'il and explain why its case is always raf', building directly on Chapters 1 and 21.",
      ms: "Anda kini boleh mengenali na'ib al-fa'il dan menjelaskan sebab kesnya sentiasa raf', berdasarkan terus Bab 1 dan 21."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 23 — إعراب المبتدأ والخبر (Mubtada'/Khabar)
  // ------------------------------------------------------------------
  23: {
    chapterId: 23,
    status: "pilot",
    concept: {
      en: "The nominal sentence is built from two parts: the mubtada' (what you're talking about) and the khabar (what you say about it). This lesson covers the normal case of both, al-rabit (the pronoun that links a derived-noun khabar back to the mubtada'), and the book's own dual-analysis example of a prepositional-phrase khabar.",
      ms: "Ayat nominal dibina daripada dua bahagian: mubtada' (perkara yang dibicarakan) dan khabar (apa yang dikatakan mengenainya). Pelajaran ini merangkumi kes biasa kedua-duanya, al-rabit (kata ganti nama yang menghubungkan khabar kata terbitan kembali kepada mubtada'), dan contoh dwi-analisis daripada buku sendiri bagi khabar frasa sendi nama."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 23, pdfPages: [117, 122] },
      en: "The mubtada' is normally raf'. The khabar appears on six forms across the book (khabar al-mubtada', khabar kana, khabar inna, khabar kada, khabar laysa, khabar la-nafiya-lil-jins) — this lesson covers only khabar al-mubtada'. A khabar built from a derived noun (ism fa'il, ism maf'ul, sifa mushabbaha, ism tafdil, sigha mubalagha) needs al-rabit, a pronoun linking it back to the mubtada', so the sentence doesn't fall apart; a jamid (non-derived) khabar doesn't need one.",
      ms: "Mubtada' biasanya raf'. Khabar muncul dalam enam bentuk sepanjang buku ini (khabar al-mubtada', khabar kana, khabar inna, khabar kada, khabar laysa, khabar la-nafiyah lil-jins) — pelajaran ini hanya merangkumi khabar al-mubtada'. Khabar yang dibina daripada kata terbitan (ism fa'il, ism maf'ul, sifah musyabbahah, ism tafdil, sighah mubalaghah) memerlukan al-rabit, kata ganti nama yang menghubungkannya kembali kepada mubtada', supaya ayat itu tidak terurai; khabar jamid (bukan terbitan) tidak memerlukannya."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 23, pdfPages: [119, 119], printedPage: 118 },
      arabic: "الهِرُّ تَحْتَ الطَّاوِلَةِ",
      gloss: { en: "The cat is under the table.", ms: "Kucing itu di bawah meja." },
      words: [
        { id: "w1", ar: "الهِرُّ", role: { en: "mubtada'", ms: "mubtada'" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The mubtada' of a nominal sentence is raf'.", ms: "Mubtada' bagi ayat nominal ialah raf'." } },
        { id: "w2-w3", ar: "تَحْتَ الطَّاوِلَةِ", role: { en: "zarf makan, mansub, linked to an elided khabar understood as \"mawjud\" (\"[is] found\")", ms: "zarf makan, mansub, berkait dengan khabar yang digugurkan dan difahami sebagai \"mawjud\" (\"[berada]\")" }, case: "nasb (for تحتَ)", sign: { en: "apparent fatha on تحتَ; الطاولةِ is mudaf ilayh, jarr, apparent kasra", ms: "fathah zahir pada تحتَ; الطاولةِ ialah mudaf ilayh, jarr, kasrah zahir" }, reason: { en: "This is the book's own first (preferred) reading: the prepositional/adverbial phrase relates to a dropped khabar rather than being the khabar itself.", ms: "Ini ialah bacaan pertama (lebih digemari) daripada buku itu sendiri: frasa zarf/sendi nama berkait dengan khabar yang gugur, bukannya menjadi khabar itu sendiri." } }
      ],
      dualAnalysis: {
        note: { en: "The book explicitly offers a second, equally common reading: the whole phrase \"تحت الطاولة\" stands directly as the khabar itself (mahalli raf'), rather than relating to an elided one.", ms: "Buku itu sendiri menawarkan bacaan kedua yang sama lazim: keseluruhan frasa \"تحت الطاولة\" berdiri terus sebagai khabar itu sendiri (raf' mahalli), bukannya berkait dengan khabar yang gugur." },
        ranking: { en: "The book ranks these explicitly: \"the first reading is more correct, and the second is easier\" (الإعراب الأول أصح والثاني أسهل) — both are accepted answers; neither is wrong.", ms: "Buku itu menyusun kedua-duanya secara jelas: \"bacaan pertama lebih tepat, dan kedua lebih mudah\" (الإعراب الأول أصح والثاني أسهل) — kedua-duanya jawapan yang diterima; tiada satu pun salah." }
      }
    },
    exercises: [
      {
        id: "ex23-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "الكِتَابُ مُفِيدٌ",
        gloss: { en: "The book is useful.", ms: "Buku itu berfaedah." },
        question: { en: "Which word is the khabar?", ms: "Kata manakah khabar?" },
        options: [
          { value: "alkitabu", labelEn: "الكِتَابُ", labelMs: "الكِتَابُ" },
          { value: "mufidun", labelEn: "مُفِيدٌ", labelMs: "مُفِيدٌ" }
        ],
        acceptedValues: ["mufidun"],
        ruleNote: { en: "The mubtada' is what you're talking about (الكتاب); the khabar is what you say about it (مفيد).", ms: "Mubtada' ialah perkara yang dibicarakan (الكتاب); khabar ialah apa yang dikatakan mengenainya (مفيد)." }
      },
      {
        id: "ex23-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "العِلْمُ نُورٌ",
        gloss: { en: "Knowledge is light.", ms: "Ilmu itu cahaya." },
        targetWord: "نُورٌ",
        question: { en: "Give the full analysis of \"نُورٌ\".", ms: "Berikan analisis penuh bagi \"نُورٌ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "mubtada", labelEn: "Mubtada'", labelMs: "Mubtada'" },
            { value: "khabar", labelEn: "Khabar", labelMs: "Khabar" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "khabar", case: "rafa", sign: "damma-zahira" } ],
        ruleNote: { en: "The khabar al-mubtada' is raf', shown as an apparent damma on an ordinary noun.", ms: "Khabar al-mubtada' ialah raf', ditunjukkan sebagai damma zahir pada kata nama biasa." }
      }
    ],
    completion: {
      en: "You can now identify mubtada' and khabar in a simple nominal sentence, and you've seen how the app handles a book-documented dual-analysis case without marking either reading wrong.",
      ms: "Anda kini boleh mengenal pasti mubtada' dan khabar dalam ayat nominal mudah, dan telah melihat bagaimana aplikasi ini mengendalikan kes dwi-analisis yang didokumenkan buku tanpa menandakan mana-mana bacaan sebagai salah."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 29 — إعراب المفاعيل (the Five Object Types)
  //
  // COMPLETED IN TIER 4 (previously a deliberate partial record
  // covering only maf'ul bih — see ROADMAP.md / git history for that
  // earlier state). This record now covers all five object types
  // (fih, bih, lahu, mutlaq, ma'ah) across the chapter's full page
  // range, and curriculum.js's hasLesson flips to true accordingly.
  //
  // CITATION FIX (Tier 4 pass): the previous record's rule/workedExample
  // citations (pdfPages:[146,147] / pdfPages:[146,146], printedPage:145)
  // were inaccurate — PDF page 146 is the chapter's (unnumbered) title
  // page and is actually about maf'ul FIH, not maf'ul bih; the bih
  // worked example (قَطَفَ المُزَارِعُ التُّفَّاحَ, unchanged below) is
  // verbatim on PDF page 147 (printed page 146). Corrected here; see the
  // Tier 4 report for full disclosure of this previously-shipped
  // citation inaccuracy.
  //
  // Exercise count (6, not the usual 2) is a deliberate departure: this
  // is the book's largest chapter, covering 5 distinct sub-types, each
  // warranting at least one guided exercise; the engine imposes no cap
  // on exercise count (lessonEngine.js counts all step:"independent"
  // exercises generically).
  // ------------------------------------------------------------------
  29: {
    chapterId: 29,
    status: "pilot",
    concept: {
      en: "This chapter covers all five maf'ul (object) types the book recognizes: maf'ul fih (the adverbial of time/place), maf'ul bih (the direct object), maf'ul lahu (the object of reason), maf'ul mutlaq (the cognate object), and maf'ul ma'ah (the object of accompaniment). All five are nasb, but each is nasb for a different reason — this lesson walks through what each one answers and keeps them apart.",
      ms: "Bab ini merangkumi kesemua lima jenis maf'ul (objek) yang diiktiraf buku: maf'ul fih (keterangan masa/tempat), maf'ul bih (objek langsung), maf'ul lahu (objek sebab), maf'ul mutlaq (objek sejenis/penguat), dan maf'ul ma'ah (objek penyertaan). Kesemua lima adalah nasb, tetapi masing-masing nasb atas sebab yang berbeza — pelajaran ini menyusuri apa yang disoal oleh setiap satu dan mengekalkan perbezaannya."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 29, pdfPages: [146, 161] },
      en: "The maf'ul fih (also called the zarf) is mentioned to state WHEN or WHERE the verb's action happened, and it is nasb on zarfiyya — a zarf zaman (time) answers \"when\" and a zarf makan (place) answers \"where\"; in both, the nasb is explained as standing for an implied \"fi\" (\"in/at\") that the zarf itself absorbs, e.g. ذَهَبْتُ إِلَى العَمَلِ بَاكِرًا (I went to work early — باكرًا is zarf zaman) and وَقَفْتُ أَمَامَ بَابِ المَدْرَسَةِ (I stood in front of the school's gate — أمام is zarf makan).\n\nThe maf'ul bih is whatever a verb's action directly falls upon, and it is always nasb. A verb can take more than one maf'ul bih, the way a noun can take more than one na't: an ordinary transitive verb takes just one; verbs of certainty/belief and transformation (zanna-type and sayyara-type verbs) take two; a small handful of verbs extend to three. A maf'ul bih doesn't always appear as a plain noun directly after its verb — a masdar mu'awwal (an an/anna clause) can stand in its place, and a preposition can convert an otherwise intransitive verb into one with a maf'ul bih expressed indirectly (ba' al-ta'diya).\n\nThe maf'ul lahu (or li-ajlihi) is a nasb masdar mentioned to state WHY the verb's action happened, e.g. دَرَسَ التَّلَامِيذُ رَغْبَةً فِي النَّجَاحِ (The students studied, out of desire to succeed — رغبةً is maf'ul lahu). The source gives four conditions for this direct (sarih) nasb form: the masdar must be an 'illah (cause) for what precedes it, share the same timing as its 'amil, share the same fa'il as its 'amil, and be a masdar qalbi (denoting something not perceived by the senses). When any of these isn't met, the same meaning is expressed indirectly instead, with a preposition (ب/ل/من) attached and the masdar in jarr but mahall nasb — e.g. دَرَسْتُ لِرَغْبَةٍ فِي النَّجَاحِ. The source also notes that a maf'ul lahu made definite with أل is rarely used in direct nasb — jarr is preferred there instead.\n\nThe maf'ul mutlaq is a nasb masdar mentioned after its own verb, for one of three purposes: tawkid (to emphasize the verb itself, e.g. اِدْرُسْ دَرْسًا), bayan naw' (to describe its type, e.g. اِلْعَبْ لَعِبًا لَطِيفًا), or bayan 'adad (to count it, e.g. خَطَوْتُ خَطْوَتَيْنِ). It comes in two kinds: lafzi, matching its own verb exactly in wording, or ma'nawi, matching it only in meaning (e.g. جَلَسَ قُعُودًا, \"sat\" using the near-synonym \"sitting-down\"). The source also documents niyaba 'an al-masdar — a substitute standing in for the literal cognate masdar and taking its nasb instead: a near-synonym noun (سُرِرْتُ فَرَحًا, سَلَّمْتُ سَلَامًا), an adjective left behind after its own masdar is dropped (سِرْتُ أَحْسَنَ السَّيْرِ, where the fuller سِرْتُ سَيْرًا أَحْسَنَ السَّيْرِ lost its سَيْرًا), or even a word unrelated in root to the verb that simply names the manner (مَشَى الطِّفْلُ القَهْقَرَى, \"walked backward\"). The verb itself can also be dropped and only its maf'ul mutlaq said aloud, when that's established usage — several fixed expressions work this way, including سُبْحَانَ اللهِ and مَعَاذَ اللهِ.\n\nThe maf'ul ma'ah is a nasb noun that follows a wa of accompaniment (wa al-ma'iyya, meaning \"together with\") as a fadla, e.g. سِرْتُ وَالشَّاطِئَ (I walked along the shore — literally \"I walked and the shore\"). The source notes that an interrogative sentence like مَا أَنْتَ وَالبَحْرَ؟ can also be read a second way: with كان taken as a complete verb (\"to exist\") rather than deficient, أنت as its own fa'il, and ما as a fronted maf'ul mutlaq asking \"what manner of being\" — a second grammatically valid reading of the same sentence, alongside the more direct maf'ul-ma'ah reading shown above.",
      ms: "Maf'ul fih (dipanggil juga zarf) disebut untuk menyatakan BILA atau DI MANA perbuatan kata kerja berlaku, dan ia nasb atas zarfiyyah — zarf zaman (masa) menjawab \"bila\" dan zarf makan (tempat) menjawab \"di mana\"; pada kedua-duanya, nasb itu dijelaskan sebagai mewakili (في) yang tersirat yang diserap sendiri oleh zarf itu, cth. ذَهَبْتُ إِلَى العَمَلِ بَاكِرًا (Saya pergi kerja awal — باكرًا ialah zarf zaman) dan وَقَفْتُ أَمَامَ بَابِ المَدْرَسَةِ (Saya berdiri di hadapan pintu sekolah — أمام ialah zarf makan).\n\nMaf'ul bih ialah apa jua yang terkena terus oleh perbuatan kata kerja, dan ia sentiasa nasb. Satu kata kerja boleh mengambil lebih daripada satu maf'ul bih, sepertimana kata nama boleh mengambil lebih daripada satu na't: kata kerja transitif biasa mengambil satu sahaja; kata kerja keyakinan/kepercayaan dan transformasi (jenis zanna dan jenis sayyara) mengambil dua; segelintir kata kerja meluas kepada tiga. Maf'ul bih tidak sentiasa muncul sebagai kata nama biasa terus selepas kata kerjanya — masdar mu'awwal (klausa an/anna) boleh menggantikan tempatnya, dan kata sendi boleh menukar kata kerja yang asalnya tak transitif menjadi kata kerja dengan maf'ul bih yang dinyatakan secara tidak langsung (ba' al-ta'diya).\n\nMaf'ul lahu (atau li-ajlihi) ialah masdar nasb yang disebut untuk menyatakan SEBAB perbuatan kata kerja berlaku, cth. دَرَسَ التَّلَامِيذُ رَغْبَةً فِي النَّجَاحِ (Pelajar-pelajar itu belajar, kerana ingin berjaya — رغبةً ialah maf'ul lahu). Sumber memberikan empat syarat bagi bentuk nasb langsung (sarih) ini: masdar itu mesti menjadi 'illah (sebab) bagi apa yang mendahuluinya, berkongsi masa yang sama dengan 'amilnya, berkongsi fa'il yang sama dengan 'amilnya, dan menjadi masdar qalbi (menandakan sesuatu yang tidak dapat dikesan pancaindera). Apabila mana-mana syarat ini tidak dipenuhi, makna yang sama dinyatakan secara tidak langsung sebaliknya, dengan kata sendi (ب/ل/من) ditambah dan masdar itu dalam jarr tetapi mahal nasb — cth. دَرَسْتُ لِرَغْبَةٍ فِي النَّجَاحِ. Sumber turut menyatakan bahawa maf'ul lahu yang dijadikan makrifat dengan أل jarang digunakan dalam nasb langsung — jarr lebih digemari di situ.\n\nMaf'ul mutlaq ialah masdar nasb yang disebut selepas kata kerjanya sendiri, bagi salah satu daripada tiga tujuan: tawkid (menguatkan kata kerja itu sendiri, cth. اِدْرُسْ دَرْسًا), bayan naw' (menerangkan jenisnya, cth. اِلْعَبْ لَعِبًا لَطِيفًا), atau bayan 'adad (mengira bilangannya, cth. خَطَوْتُ خَطْوَتَيْنِ). Ia terbahagi kepada dua jenis: lafzi, sepadan tepat dengan kata kerjanya dari segi lafaz, atau ma'nawi, sepadan hanya dari segi makna (cth. جَلَسَ قُعُودًا, \"duduk\" menggunakan kata hampir-sama-makna \"keadaan duduk\"). Sumber turut mendokumenkan niyabah 'an al-masdar — kata ganti yang menggantikan tempat masdar sejenis literal dan mengambil nasbnya: kata nama hampir-sama-makna (سُرِرْتُ فَرَحًا, سَلَّمْتُ سَلَامًا), kata sifat yang ditinggalkan selepas masdarnya sendiri digugurkan (سِرْتُ أَحْسَنَ السَّيْرِ, di mana bentuk penuh سِرْتُ سَيْرًا أَحْسَنَ السَّيْرِ kehilangan سَيْرًا), atau malah kata yang tiada kaitan akar dengan kata kerja yang sekadar menamakan caranya (مَشَى الطِّفْلُ القَهْقَرَى, \"berjalan ke belakang\"). Kata kerja itu sendiri juga boleh digugurkan dan hanya maf'ul mutlaqnya disebut, apabila itu penggunaan yang sudah mantap — beberapa ungkapan tetap berfungsi sedemikian, termasuk سُبْحَانَ اللهِ dan مَعَاذَ اللهِ.\n\nMaf'ul ma'ah ialah kata nama nasb yang mengikuti waw al-ma'iyyah (bermaksud \"bersama-sama dengan\") sebagai fadla, cth. سِرْتُ وَالشَّاطِئَ (Saya berjalan menyusuri pantai — secara literal \"Saya berjalan dan pantai\"). Sumber menyatakan bahawa ayat tanya seperti مَا أَنْتَ وَالبَحْرَ؟ juga boleh dibaca dengan cara kedua: dengan كان dianggap kata kerja lengkap (\"wujud\") dan bukan tidak lengkap, أنت sebagai fa'ilnya sendiri, dan ما sebagai maf'ul mutlaq yang dikedepankan bertanya \"apa jenis kewujudan\" — bacaan kedua yang sah dari segi nahu bagi ayat yang sama, selain bacaan maf'ul-ma'ah yang lebih langsung di atas."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 29, pdfPages: [147, 147], printedPage: 146 },
      arabic: "قَطَفَ المُزَارِعُ التُّفَّاحَ",
      gloss: { en: "The farmer picked the apples.", ms: "Peladang itu memetik epal itu." },
      words: [
        { id: "w1", ar: "قَطَفَ", role: { en: "past-tense verb (fi'l madi)", ms: "kata kerja lampau (fi'l madi)" }, case: "—", sign: { en: "mabni on fatha; a verb, outside the i'rab system", ms: "mabni fathah; kata kerja, di luar sistem i'rab" }, reason: { en: "Past-tense verbs are mabni, not mu'rab — only nouns and present-tense verbs carry the raf'/nasb/jarr system this lesson deals with.", ms: "Kata kerja lampau ialah mabni, bukan mu'rab — hanya kata nama dan kata kerja kini membawa sistem raf'/nasb/jarr yang dibincangkan pelajaran ini." } },
        { id: "w2", ar: "المُزَارِعُ", role: { en: "fa'il (subject)", ms: "fa'il (pelaku)" }, case: "raf'", sign: { en: "apparent damma (damma zahira)", ms: "damma zahir" }, reason: { en: "The fa'il of a verb is always raf' (Chapter 21).", ms: "Fa'il bagi sesuatu kata kerja sentiasa raf' (Bab 21)." } },
        { id: "w3", ar: "التُّفَّاحَ", role: { en: "maf'ul bih (direct object)", ms: "maf'ul bih (objek langsung)" }, case: "nasb", sign: { en: "apparent fatha (fatha zahira)", ms: "fathah zahir" }, reason: { en: "The maf'ul bih — what the fa'il's action falls upon — is always nasb; an ordinary noun shows this as an apparent fatha.", ms: "Maf'ul bih — apa yang terkena oleh perbuatan fa'il — sentiasa nasb; kata nama biasa menunjukkan ini sebagai fathah zahir." } }
      ]
    },
    exercises: [
      {
        id: "ex29-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "يَقْرَأُ الوَلَدُ القِصَّةَ",
        gloss: { en: "The boy reads the story.", ms: "Budak lelaki itu membaca cerita itu." },
        question: { en: "Which word is the maf'ul bih?", ms: "Kata manakah maf'ul bih?" },
        options: [
          { value: "alwaladu", labelEn: "الوَلَدُ", labelMs: "الوَلَدُ" },
          { value: "alqissata", labelEn: "القِصَّةَ", labelMs: "القِصَّةَ" }
        ],
        acceptedValues: ["alqissata"],
        ruleNote: { en: "The maf'ul bih is what the fa'il's action directly falls upon — here, the story being read, not the boy doing the reading.", ms: "Maf'ul bih ialah apa yang terkena terus oleh perbuatan fa'il — di sini, cerita yang dibaca, bukan budak lelaki yang membaca." }
      },
      {
        id: "ex29-guided-fih", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "سَافَرْنَا لَيْلًا",
        gloss: { en: "We traveled at night.", ms: "Kami bermusafir pada waktu malam." },
        question: { en: "Which word is the maf'ul fih (zarf)?", ms: "Kata manakah maf'ul fih (zarf)?" },
        options: [
          { value: "safarna", labelEn: "سَافَرْنَا", labelMs: "سَافَرْنَا" },
          { value: "laylan", labelEn: "لَيْلًا", labelMs: "لَيْلًا" }
        ],
        acceptedValues: ["laylan"],
        ruleNote: { en: "لَيْلًا names WHEN the traveling happened — a zarf zaman, nasb on zarfiyya, standing for an implied \"at\".", ms: "لَيْلًا menamakan BILA perjalanan berlaku — zarf zaman, nasb atas zarfiyyah, mewakili \"pada\" yang tersirat." }
      },
      {
        id: "ex29-guided-lahu", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "وَقَفَ الجُنُودُ احْتِرَامًا لِلْعَلَمِ",
        gloss: { en: "The soldiers stood, out of respect for the flag.", ms: "Askar-askar itu berdiri, sebagai tanda hormat kepada bendera." },
        question: { en: "Which word is the maf'ul lahu?", ms: "Kata manakah maf'ul lahu?" },
        options: [
          { value: "aljunud", labelEn: "الجُنُودُ", labelMs: "الجُنُودُ" },
          { value: "ihtiraman", labelEn: "احْتِرَامًا", labelMs: "احْتِرَامًا" }
        ],
        acceptedValues: ["ihtiraman"],
        ruleNote: { en: "احْتِرَامًا states WHY the soldiers stood — the reason behind the verb's action, nasb, sharing the soldiers' own timing and doing.", ms: "احْتِرَامًا menyatakan SEBAB askar-askar itu berdiri — sebab di sebalik perbuatan kata kerja, nasb, berkongsi masa dan pelakuan yang sama dengan askar-askar itu sendiri." }
      },
      {
        id: "ex29-guided-mutlaq", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "فَرِحَ الطِّفْلُ فَرَحًا شَدِيدًا",
        gloss: { en: "The child rejoiced greatly (lit. rejoiced a strong rejoicing).", ms: "Kanak-kanak itu bergembira dengan amat (secara literal: bergembira satu kegembiraan yang kuat)." },
        question: { en: "Which word is the maf'ul mutlaq?", ms: "Kata manakah maf'ul mutlaq?" },
        options: [
          { value: "attiflu", labelEn: "الطِّفْلُ", labelMs: "الطِّفْلُ" },
          { value: "farahan", labelEn: "فَرَحًا", labelMs: "فَرَحًا" }
        ],
        acceptedValues: ["farahan"],
        ruleNote: { en: "فَرَحًا is the same root as فَرِحَ, repeated after it to intensify — a lafzi maf'ul mutlaq, nasb.", ms: "فَرَحًا daripada akar yang sama dengan فَرِحَ, diulang selepasnya untuk menguatkan — maf'ul mutlaq lafzi, nasb." }
      },
      {
        id: "ex29-guided-maah", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "مَشَيْتُ وَالنَّهْرَ",
        gloss: { en: "I walked along the river (lit. I walked and the river).", ms: "Saya berjalan menyusuri sungai (secara literal: saya berjalan dan sungai)." },
        question: { en: "Which word is the maf'ul ma'ah?", ms: "Kata manakah maf'ul ma'ah?" },
        options: [
          { value: "mashaytu", labelEn: "مَشَيْتُ", labelMs: "مَشَيْتُ" },
          { value: "alnahra", labelEn: "النَّهْرَ", labelMs: "النَّهْرَ" }
        ],
        acceptedValues: ["alnahra"],
        ruleNote: { en: "النَّهْرَ follows a wa of accompaniment (not wa al-'atf) — maf'ul ma'ah, nasb, naming what the walking happened alongside.", ms: "النَّهْرَ mengikuti waw al-ma'iyyah (bukan waw al-'atf) — maf'ul ma'ah, nasb, menamakan apa yang disertai semasa berjalan." }
      },
      {
        id: "ex29-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "صَافَحَ الرَّئِيسُ الضُّيُوفَ تَقْدِيرًا لِجُهُودِهِمْ",
        gloss: { en: "The president shook the guests' hands, in appreciation of their efforts.", ms: "Presiden itu bersalaman dengan tetamu-tetamu, sebagai penghargaan atas usaha mereka." },
        targetWord: "تَقْدِيرًا",
        question: { en: "Give the full analysis of \"تَقْدِيرًا\".", ms: "Berikan analisis penuh bagi \"تَقْدِيرًا\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "maful-lahu", labelEn: "Maf'ul lahu (reason)", labelMs: "Maf'ul lahu (sebab)" },
            { value: "maful-mutlaq", labelEn: "Maf'ul mutlaq", labelMs: "Maf'ul mutlaq" },
            { value: "maful-bih", labelEn: "Maf'ul bih (second object)", labelMs: "Maf'ul bih (objek kedua)" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "maful-lahu", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "تَقْدِيرًا is a masdar qalbi stating WHY the president shook hands — sharing his own timing and doing — so it's maf'ul lahu, nasb, apparent fatha.", ms: "تَقْدِيرًا ialah masdar qalbi yang menyatakan SEBAB presiden itu bersalaman — berkongsi masa dan pelakuannya sendiri — maka ia maf'ul lahu, nasb, fathah zahir." }
      }
    ],
    completion: {
      en: "You can now identify all five maf'ul types — fih, bih, lahu, mutlaq, and ma'ah — tell them apart by what each one answers (when/where, what the action fell on, why, how much/what kind, or alongside what), and recognize niyaba 'an al-masdar when a substitute noun stands in for a literal cognate object.",
      ms: "Anda kini boleh mengenal pasti kesemua lima jenis maf'ul — fih, bih, lahu, mutlaq, dan ma'ah — membezakannya mengikut apa yang disoal oleh setiap satu (bila/di mana, apa yang terkena perbuatan, sebab, berapa banyak/jenis apa, atau bersama apa), dan mengenali niyabah 'an al-masdar apabila kata nama ganti menggantikan tempat objek sejenis literal."
    }
  },

  // ==================================================================
  // TIER 2 — built in this pass. Source: مرجع الطالب في الإعراب.
  // Every chapter below is a FULL lesson (guided + independent
  // exercises, hasLesson:true in curriculum.js) — none follows the
  // partial Chapter 29 pattern. See TIER2_REPORT (delivered alongside
  // this build) for exact source pages checked per lesson.
  // ==================================================================

  // ------------------------------------------------------------------
  // Chapter 2 — إعراب الأفعال الخمسة (The Five Verbs)
  // ------------------------------------------------------------------
  2: {
    chapterId: 2,
    status: "pilot",
    concept: {
      en: "The \"five verbs\" are every present-tense verb joined directly to alif al-tathniya (دان), waw al-jama'a (ونو), or ya' al-mukhataba (تين) — e.g. يَلْعَبَانِ، يَلْعَبُونَ، تَلْعَبِينَ. Because a damma, fatha or sukun can't land on these endings, the whole raf'/nasb/jazm system swaps to a different pair of markers.",
      ms: "\"Af'al khamsah\" (lima kata kerja) ialah setiap kata kerja kini yang disambung terus dengan alif al-tathniyah (دان), waw al-jama'ah (ونو), atau ya' al-mukhatabah (تين) — cth. يَلْعَبَانِ، يَلْعَبُونَ، تَلْعَبِينَ. Kerana damma, fathah atau sukun tidak dapat ditempatkan pada hujung ini, keseluruhan sistem raf'/nasb/jazm bertukar kepada sepasang tanda yang berbeza."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 2, pdfPages: [9, 10] },
      en: "The five verbs are any mudari' verb carrying one of three bound subject markers: alif al-tathniya (the dual's ا, e.g. يَلْعَبَانِ), waw al-jama'a (the plural و, e.g. يَلْعَبُونَ), or ya' al-mukhataba (the \"you, feminine singular\" ي, e.g. تَلْعَبِينَ). Raf' shows as thubut al-nun — the nun simply stays, standing in for the damma that can't be pronounced there (يَلْعَبَانِ, تَلْعَبِينَ). Both nasb and jazm show the same marker — hadhf al-nun, the nun drops (لَنْ يَلْعَبَا، لَمْ يَلْعَبَا؛ لَنْ تَلْعَبِي، لَمْ تَلْعَبِي) — something no other mu'rab verb form does: elsewhere nasb and jazm always look different from each other. The attached alif/waw/ya' is itself a bound pronoun, mabni, filling the fa'il slot.",
      ms: "Af'al khamsah ialah mana-mana kata kerja kini yang membawa salah satu daripada tiga penanda subjek terikat: alif al-tathniyah (ا dwi, cth. يَلْعَبَانِ), waw al-jama'ah (و jamak, cth. يَلْعَبُونَ), atau ya' al-mukhatabah (ي \"awak, perempuan tunggal\", cth. تَلْعَبِينَ). Raf' ditunjukkan sebagai thubut al-nun — nun itu kekal, menggantikan damma yang tidak dapat disebut di situ (يَلْعَبَانِ, تَلْعَبِينَ). Nasb dan jazm kedua-duanya menunjukkan tanda yang sama — hadhf al-nun, nun itu gugur (لَنْ يَلْعَبَا، لَمْ يَلْعَبَا؛ لَنْ تَلْعَبِي، لَمْ تَلْعَبِي) — sesuatu yang tiada bentuk kata kerja mu'rab lain lakukan: di tempat lain nasb dan jazm sentiasa kelihatan berbeza antara satu sama lain. Alif/waw/ya' yang tersambung itu sendiri ialah kata ganti nama terikat, mabni, mengisi kedudukan fa'il."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 2, pdfPages: [9, 9] },
      arabic: "يَلْعَبَانِ",
      gloss: { en: "The two of them play.", ms: "Mereka berdua bermain." },
      words: [
        { id: "w1", ar: "يَلْعَبَانِ", role: { en: "present-tense verb (one of the five verbs)", ms: "kata kerja kini (salah satu daripada af'al khamsah)" }, case: "raf'", sign: { en: "thubut al-nun (the nun stays, in place of a damma)", ms: "thubut al-nun (nun kekal, menggantikan damma)" }, reason: { en: "Nothing precedes this verb to force nasb or jazm, so it defaults to raf'; because it's a five-verb, that raf' shows as the nun simply remaining — niyaba 'an al-damma — rather than as a damma itself.", ms: "Tiada apa mendahului kata kerja ini untuk memaksa nasb atau jazm, maka ia kekal raf' secara lazim; kerana ia salah satu af'al khamsah, raf' itu ditunjukkan sebagai nun yang kekal — niyabah 'an al-damma — bukan sebagai damma itu sendiri." } },
        { id: "w2", ar: "الألف", role: { en: "fa'il — the bound dual pronoun embedded in the verb", ms: "fa'il — kata ganti nama dwi terikat yang tersemat dalam kata kerja" }, case: "raf' (mahalli)", sign: { en: "mabni on sukun", ms: "mabni sukun" }, reason: { en: "A bound pronoun is always mabni and never carries an apparent case marker of its own, so its raf' here is purely positional — mahalli, the same category Chapter 1 introduced.", ms: "Kata ganti nama terikat sentiasa mabni dan tidak pernah membawa tanda kes yang kelihatan sendiri, maka raf'nya di sini semata-mata kedudukan — mahalli, kategori yang sama diperkenalkan Bab 1." } }
      ]
    },
    exercises: [
      {
        id: "ex2-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "المُعَلِّمَانِ يَكْتُبَانِ",
        gloss: { en: "The two teachers are writing.", ms: "Dua orang guru itu sedang menulis." },
        targetWord: "يَكْتُبَانِ",
        question: { en: "What is the sign of raf' on \"يَكْتُبَانِ\"?", ms: "Apakah tanda raf' pada \"يَكْتُبَانِ\"?" },
        options: [
          { value: "thubut-nun", labelEn: "Thubut al-nun (the nun stays)", labelMs: "Thubut al-nun (nun kekal)" },
          { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
          { value: "hadhf-nun", labelEn: "Hadhf al-nun (the nun drops)", labelMs: "Hadhf al-nun (nun gugur)" }
        ],
        acceptedValues: ["thubut-nun"],
        ruleNote: { en: "يَكْتُبَانِ carries alif al-tathniya, so it's one of the five verbs: raf' shows as the nun simply staying in place.", ms: "يَكْتُبَانِ membawa alif al-tathniyah, maka ia salah satu af'al khamsah: raf' ditunjukkan sebagai nun yang kekal di tempatnya." }
      },
      {
        id: "ex2-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "هَلْ تَكْتُبِينَ الدَّرْسَ؟",
        gloss: { en: "Are you (f.) writing the lesson?", ms: "Adakah kamu menulis pelajaran itu?" },
        targetWord: "تَكْتُبِينَ",
        question: { en: "Give the full analysis of \"تَكْتُبِينَ\".", ms: "Berikan analisis penuh bagi \"تَكْتُبِينَ\"." },
        fields: [
          { key: "type", question: { en: "Verb type", ms: "Jenis kata kerja" }, options: [
            { value: "khamsa", labelEn: "One of the five verbs", labelMs: "Salah satu af'al khamsah" },
            { value: "mufrad", labelEn: "An ordinary mudari' verb", labelMs: "Kata kerja kini biasa" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "thubut-nun", labelEn: "Thubut al-nun", labelMs: "Thubut al-nun" },
            { value: "hadhf-nun", labelEn: "Hadhf al-nun", labelMs: "Hadhf al-nun" }
          ] }
        ],
        acceptedCombos: [ { type: "khamsa", case: "rafa", sign: "thubut-nun" } ],
        ruleNote: { en: "تَكْتُبِينَ carries ya' al-mukhataba, so it's one of the five verbs; with no nasb/jazm particle before it, it's raf', shown as thubut al-nun.", ms: "تَكْتُبِينَ membawa ya' al-mukhatabah, maka ia salah satu af'al khamsah; tanpa huruf nasb/jazm sebelumnya, ia raf', ditunjukkan sebagai thubut al-nun." }
      }
    ],
    completion: {
      en: "You can now recognize the five verbs, explain why they swap damma/fatha/sukun for thubut/hadhf al-nun, and see why nasb and jazm look identical only on this verb form.",
      ms: "Anda kini boleh mengenali af'al khamsah, menjelaskan sebab ia menukar damma/fathah/sukun kepada thubut/hadhf al-nun, dan melihat sebab nasb dan jazm kelihatan serupa hanya pada bentuk kata kerja ini."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 3 — إعراب الفعل الماضي (The Past-Tense Verb)
  // ------------------------------------------------------------------
  3: {
    chapterId: 3,
    status: "pilot",
    concept: {
      en: "The past-tense verb (fi'l madi) is mabni, not mu'rab — it never carries raf', nasb or jarr. This lesson covers its three mabni bases, and shows Chapter 1's taqdiri idea at work outside the i'rab system: the same \"blocked by ta'adhdhur\" mechanism that hides a case marker can just as well hide a bina' marker.",
      ms: "Kata kerja lampau (fi'l madi) ialah mabni, bukan mu'rab — ia tidak pernah membawa raf', nasb atau jarr. Pelajaran ini merangkumi tiga asas mabninya, dan menunjukkan idea taqdiri daripada Bab 1 beroperasi di luar sistem i'rab: mekanisme \"dihalang oleh ta'adhdhur\" yang sama yang menyembunyikan tanda kes juga boleh menyembunyikan tanda bina'."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 3, pdfPages: [11, 12] },
      en: "The past-tense verb is built on one of three bases, chosen by what comes directly after it: (1) fatha — apparent by default (لَعِبَ الوَلَدُ), or implied (muqaddara) when the verb ends in alif and a fatha simply can't be pronounced there — ta'adhdhur, the exact mechanism Chapter 1 introduced, here applying to bina' rather than i'rab (مَشَى الطِّفْلُ); (2) damma, when the verb is joined to waw al-jama'a (لَعِبُوا — the extra alif that follows is a purely orthographic alif al-farqa, with no grammatical role); (3) sukun — apparent or implied (blocked, e.g., by an idgham that would otherwise double a letter) — when the verb is joined to a moving ta' (ta' al-fa'il: تُ/تَ/تِ, or ta' al-ta'nith al-sakina) or to nun al-niswa (لَعِبْتُ، لَعِبْنَا، قُلْنَ).",
      ms: "Kata kerja lampau dibina atas salah satu daripada tiga asas, dipilih mengikut apa yang terus mengikutinya: (1) fathah — zahir secara lazim (لَعِبَ الوَلَدُ), atau tersirat (muqaddarah) apabila kata kerja berakhir dengan alif dan fathah tidak dapat disebut di situ — ta'adhdhur, mekanisme yang sama diperkenalkan Bab 1, di sini terpakai pada bina' dan bukan i'rab (مَشَى الطِّفْلُ); (2) damma, apabila kata kerja disambung dengan waw al-jama'ah (لَعِبُوا — alif tambahan selepasnya ialah alif al-farqah semata-mata dari segi ejaan, tiada peranan nahu); (3) sukun — zahir atau tersirat (dihalang, cth. oleh idgham yang jika tidak akan menggandakan huruf) — apabila kata kerja disambung dengan ta' bergerak (ta' al-fa'il: تُ/تَ/تِ, atau ta' al-ta'nith al-sakinah) atau dengan nun al-niswah (لَعِبْتُ، لَعِبْنَا، قُلْنَ)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 3, pdfPages: [11, 11] },
      arabic: "مَشَى الطِّفْلُ",
      gloss: { en: "The child walked.", ms: "Kanak-kanak itu berjalan." },
      words: [
        { id: "w1", ar: "مَشَى", role: { en: "past-tense verb (fi'l madi)", ms: "kata kerja lampau (fi'l madi)" }, case: "—", sign: { en: "mabni on implied fatha (fatha muqaddara 'ala al-alif)", ms: "mabni fathah tersirat ('ala al-alif)" }, reason: { en: "مشى ends in alif; a fatha can never be pronounced on an alif, so the bina' shows taqdiri — exactly the mechanism Chapter 1 introduced for i'rab, here applied to bina' instead.", ms: "مشى berakhir dengan alif; fathah tidak boleh disebut pada alif, maka bina'nya taqdiri — mekanisme yang sama diperkenalkan Bab 1 untuk i'rab, di sini terpakai pada bina' pula." } },
        { id: "w2", ar: "الطِّفْلُ", role: { en: "fa'il", ms: "fa'il" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The fa'il of a verb is always raf' (Chapter 21); an ordinary noun shows it as an apparent damma.", ms: "Fa'il bagi sesuatu kata kerja sentiasa raf' (Bab 21); kata nama biasa menunjukkannya sebagai damma zahir." } }
      ]
    },
    exercises: [
      {
        id: "ex3-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "لَعِبَ الوَلَدُ",
        gloss: { en: "The boy played.", ms: "Budak lelaki itu bermain." },
        targetWord: "لَعِبَ",
        question: { en: "What is the bina' base of \"لَعِبَ\"?", ms: "Apakah asas bina' bagi \"لَعِبَ\"?" },
        options: [
          { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
          { value: "fatha-muqaddara", labelEn: "Implied fatha (blocked by ta'adhdhur)", labelMs: "Fathah tersirat (dihalang ta'adhdhur)" },
          { value: "damma", labelEn: "Damma", labelMs: "Damma" }
        ],
        acceptedValues: ["fatha-zahira"],
        ruleNote: { en: "لَعِبَ ends in a sound consonant, so nothing blocks the fatha — it's apparent, unlike مَشَى.", ms: "لَعِبَ berakhir dengan konsonan jelas, maka tiada apa menghalang fathah — ia zahir, tidak seperti مَشَى." }
      },
      {
        id: "ex3-independent", step: "independent", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "لَعِبَتِ البِنْتُ",
        gloss: { en: "The girl played.", ms: "Budak perempuan itu bermain." },
        targetWord: "لَعِبَتِ",
        question: { en: "What is the bina' base of \"لَعِبَتِ\"?", ms: "Apakah asas bina' bagi \"لَعِبَتِ\"?" },
        options: [
          { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
          { value: "damma", labelEn: "Damma (joined to waw al-jama'a)", labelMs: "Damma (disambung waw al-jama'ah)" },
          { value: "sukun", labelEn: "Sukun (blocked here by the following consonant, so a helping kasra is added)", labelMs: "Sukun (dihalang di sini oleh konsonan berikutnya, maka kasrah bantuan ditambah)" }
        ],
        acceptedValues: ["sukun"],
        ruleNote: { en: "The attached ت here is ta' al-ta'nith al-sakina (marking the verb as feminine) — like ta' al-fa'il, it puts the verb on a sukun base; the kasra under the ت is only there to avoid two consonants colliding before المبنيُّ.", ms: "ت yang tersambung di sini ialah ta' al-ta'nith al-sakinah (menandakan kata kerja feminin) — seperti ta' al-fa'il, ia meletakkan kata kerja pada asas sukun; kasrah di bawah ت hanya untuk mengelakkan dua konsonan bertembung." }
      }
    ],
    completion: {
      en: "You can now name all three mabni bases of the past-tense verb and recognize taqdiri bina' — blocked purely by pronounceability — as the same idea Chapter 1 introduced for i'rab.",
      ms: "Anda kini boleh menamakan ketiga-tiga asas mabni kata kerja lampau dan mengenali bina' taqdiri — dihalang semata-mata oleh kebolehsebutan — sebagai idea yang sama diperkenalkan Bab 1 untuk i'rab."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 4 — إعراب فعل الأمر (The Imperative Verb)
  // ------------------------------------------------------------------
  4: {
    chapterId: 4,
    status: "pilot",
    concept: {
      en: "The imperative verb (fi'l amr) is also mabni, built on three bases that mirror Chapter 3's past-tense pattern but are triggered differently — including a base unique to weak-root verbs: dropping the weak letter itself. This lesson also covers the amr/du'a/iltimas distinction, which doesn't change the i'rab at all — only who is asking whom.",
      ms: "Kata kerja perintah (fi'l amr) juga mabni, dibina atas tiga asas yang seiras dengan pola kata kerja lampau Bab 3 tetapi dicetuskan secara berbeza — termasuk asas unik bagi kata kerja berakar lemah: menggugurkan huruf lemah itu sendiri. Pelajaran ini turut merangkumi perbezaan amr/du'a/iltimas, yang langsung tidak mengubah i'rab — hanya siapa meminta kepada siapa."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 4, pdfPages: [13, 16] },
      en: "The imperative is built on: (1) sukun — apparent or implied (blocked, e.g., by the need to pronounce a doubled letter), e.g. اِجْلِسْ، مُدَّ يَدَكَ; (2) hadhf harf al-'illa — dropping the verb's own weak root letter, for a mu'tall (weak-root) verb, e.g. اِرْمِ الكُرَةَ (from رمى), اِمْشِ (from مشى); (3) hadhf al-nun, the same marker Chapter 2 introduced for the five verbs, when the imperative is joined to alif al-tathniya, waw al-jama'a, or ya' al-mukhataba, e.g. اِذْهَبَا، اِذْهَبُوا، اِذْهَبِي. Separately, the book distinguishes amr from its relatives by the speaker's rank relative to the addressee, not by any change in i'rab: a request from someone higher to someone lower is amr proper; from lower to higher it's called du'a (e.g. a prayer, اِغْفِرْ لِي); between equals it's iltimas — all three are built exactly the same way.",
      ms: "Fi'l amr dibina atas: (1) sukun — zahir atau tersirat (dihalang, cth. oleh keperluan menyebut huruf gandaan), cth. اِجْلِسْ، مُدَّ يَدَكَ; (2) hadhf harf al-'illah — menggugurkan huruf akar lemah kata kerja itu sendiri, bagi kata kerja mu'tall (berakar lemah), cth. اِرْمِ الكُرَةَ (daripada رمى), اِمْشِ (daripada مشى); (3) hadhf al-nun, tanda yang sama diperkenalkan Bab 2 bagi af'al khamsah, apabila fi'l amr disambung dengan alif al-tathniyah, waw al-jama'ah, atau ya' al-mukhatabah, cth. اِذْهَبَا، اِذْهَبُوا، اِذْهَبِي. Berasingan, buku ini membezakan amr daripada saudaranya mengikut tahap penutur berbanding orang yang diajak bicara, bukan dengan sebarang perubahan i'rab: permintaan daripada yang lebih tinggi kepada yang lebih rendah ialah amr sebenar; daripada yang lebih rendah kepada yang lebih tinggi dipanggil du'a (cth. doa, اِغْفِرْ لِي); antara yang setara ialah iltimas — ketiga-tiganya dibina dengan cara yang sama tepat."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 4, pdfPages: [13, 13] },
      arabic: "اِرْمِ الكُرَةَ",
      gloss: { en: "Throw the ball!", ms: "Baling bola itu!" },
      words: [
        { id: "w1", ar: "اِرْمِ", role: { en: "imperative verb (fi'l amr)", ms: "kata kerja perintah (fi'l amr)" }, case: "—", sign: { en: "mabni on hadhf harf al-'illa (its weak root letter is dropped)", ms: "mabni hadhf harf al-'illah (huruf akar lemahnya digugurkan)" }, reason: { en: "رمى is mu'tall al-akhir (weak-rooted); the imperative drops that final weak letter entirely rather than showing a sukun — a base unique to weak-root verbs.", ms: "رمى ialah mu'tall al-akhir (berakar lemah); fi'l amr menggugurkan terus huruf lemah akhir itu dan bukannya menunjukkan sukun — asas yang unik bagi kata kerja berakar lemah." } },
        { id: "w2", ar: "الكُرَةَ", role: { en: "maf'ul bih", ms: "maf'ul bih" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "The maf'ul bih — what the fa'il's action falls upon — is always nasb (Chapter 29); an ordinary noun shows this as an apparent fatha.", ms: "Maf'ul bih — apa yang terkena oleh perbuatan fa'il — sentiasa nasb (Bab 29); kata nama biasa menunjukkan ini sebagai fathah zahir." } }
      ]
    },
    exercises: [
      {
        id: "ex4-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "اِجْلِسْ",
        gloss: { en: "Sit!", ms: "Duduk!" },
        question: { en: "What is the bina' base of \"اِجْلِسْ\"?", ms: "Apakah asas bina' bagi \"اِجْلِسْ\"?" },
        options: [
          { value: "sukun-zahir", labelEn: "Apparent sukun", labelMs: "Sukun zahir" },
          { value: "hadhf-illa", labelEn: "Hadhf harf al-'illa", labelMs: "Hadhf harf al-'illah" },
          { value: "hadhf-nun", labelEn: "Hadhf al-nun", labelMs: "Hadhf al-nun" }
        ],
        acceptedValues: ["sukun-zahir"],
        ruleNote: { en: "جلس is a sound (not weak-rooted) verb with nothing attached to it, so the default base — sukun — is simply apparent.", ms: "جلس ialah kata kerja sahih (bukan berakar lemah) tanpa apa-apa tersambung, maka asas lazim — sukun — semata-mata zahir." }
      },
      {
        id: "ex4-independent", step: "independent", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "اِذْهَبُوا إِلَى المَدْرَسَةِ",
        gloss: { en: "Go (pl.) to school!", ms: "Pergilah ke sekolah!" },
        targetWord: "اِذْهَبُوا",
        question: { en: "What is the bina' base of \"اِذْهَبُوا\", and why?", ms: "Apakah asas bina' bagi \"اِذْهَبُوا\", dan mengapa?" },
        options: [
          { value: "hadhf-nun", labelEn: "Hadhf al-nun — because of waw al-jama'a", labelMs: "Hadhf al-nun — kerana waw al-jama'ah" },
          { value: "sukun-zahir", labelEn: "Apparent sukun", labelMs: "Sukun zahir" },
          { value: "hadhf-illa", labelEn: "Hadhf harf al-'illa", labelMs: "Hadhf harf al-'illah" }
        ],
        acceptedValues: ["hadhf-nun"],
        ruleNote: { en: "اذهبوا is joined to waw al-jama'a, the same trigger Chapter 2 used for the five verbs — so the nun drops, and the واو is the fa'il, a bound pronoun in raf' mahalli.", ms: "اذهبوا disambung dengan waw al-jama'ah, pencetus yang sama digunakan Bab 2 bagi af'al khamsah — maka nun gugur, dan واو ialah fa'il, kata ganti nama terikat pada raf' mahalli." }
      }
    ],
    completion: {
      en: "You can now name the imperative's three mabni bases, including the hadhf-harf-al-'illa base unique to weak-root verbs, and tell amr, du'a and iltimas apart by context rather than by any change in i'rab.",
      ms: "Anda kini boleh menamakan tiga asas mabni fi'l amr, termasuk asas hadhf harf al-'illah yang unik bagi kata kerja berakar lemah, dan membezakan amr, du'a dan iltimas mengikut konteks dan bukan sebarang perubahan i'rab."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 5 — إعراب الاسم المقصور والمضاف إلى ياء المتكلم
  // (Maqsur Nouns & Nouns Annexed to "My")
  // ------------------------------------------------------------------
  5: {
    chapterId: 5,
    status: "pilot",
    concept: {
      en: "An ism maqsur is a mu'rab noun ending in a fixed alif preceded by a fatha (ملهى، عصا، فتى). This is the chapter Chapter 1's own independent exercise pointed forward to: الفتى's raf' was called taqdiri there \"blocked by ta'adhdhur\" with a promise that \"this case is taught in full in Chapter 5\" — here is that promise kept, now for all three cases, not just raf'.",
      ms: "Isim maqsur ialah kata nama mu'rab yang berakhir dengan alif tetap didahului fathah (ملهى، عصا، فتى). Inilah bab yang ditunjukkan sendiri oleh latihan bersendirian Bab 1: raf' bagi الفتى dipanggil taqdiri di situ \"dihalang ta'adhdhur\" dengan janji bahawa \"kes ini diajar sepenuhnya dalam Bab 5\" — inilah janji itu ditunaikan, kini bagi ketiga-tiga kes, bukan raf' sahaja."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 5, pdfPages: [17, 17] },
      en: "An ism maqsur is mu'rab, but all three of its case markers — raf', nasb, and jarr alike — are muqaddara (implied) on the alif, blocked by ta'adhdhur: a harakah simply cannot be pronounced on an alif, whichever case is meant (قَدِمَ الفَتَى raf'; رأيتُ الفَتَى nasb; سلّمتُ على الفَتَى jarr — all three use exactly the same written form). This is the one noun-declension pattern where nasb is hidden too, unlike an ordinary noun where only raf'/jarr commonly hide. When mudaf to ya' al-mutakallim (\"my\"), the maqsur noun's alif stays and the same ta'adhdhur-blocked system continues to apply, with the ya' as mudaf ilayh.",
      ms: "Isim maqsur ialah mu'rab, tetapi ketiga-tiga tanda kesnya — raf', nasb, dan jarr — semuanya muqaddarah (tersirat) pada alif, dihalang ta'adhdhur: harakat tidak dapat disebut pada alif, walau apa jua kes yang dimaksudkan (قَدِمَ الفَتَى raf'; رأيتُ الفَتَى nasb; سلّمتُ على الفَتَى jarr — ketiga-tiganya menggunakan bentuk tulisan yang sama tepat). Inilah satu-satunya pola deklensi kata nama di mana nasb turut tersembunyi, tidak seperti kata nama biasa di mana hanya raf'/jarr lazimnya tersembunyi. Apabila mudaf kepada ya' al-mutakallim (\"aku punya\"), alif isim maqsur kekal dan sistem dihalang-ta'adhdhur yang sama terus terpakai, dengan ya' sebagai mudaf ilayh."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 5, pdfPages: [17, 17] },
      arabic: "قَدِمَ الفَتَى",
      gloss: { en: "The young man arrived.", ms: "Pemuda itu tiba." },
      words: [
        { id: "w1", ar: "قَدِمَ", role: { en: "past-tense verb", ms: "kata kerja lampau" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb with nothing attached defaults to apparent fatha (Chapter 3).", ms: "Kata kerja lampau berakar sahih tanpa apa-apa tersambung kekal fathah zahir secara lazim (Bab 3)." } },
        { id: "w2", ar: "الفَتَى", role: { en: "fa'il", ms: "fa'il" }, case: "raf'", sign: { en: "implied damma (damma muqaddara 'ala al-alif, blocked by ta'adhdhur)", ms: "damma tersirat ('ala al-alif, dihalang ta'adhdhur)" }, reason: { en: "This is exactly the word Chapter 1 used to introduce taqdiri raf' and pointed forward to this chapter for: الفتى ends in alif, so its raf' can never be pronounced — only ever implied.", ms: "Inilah tepatnya kata yang digunakan Bab 1 untuk memperkenalkan raf' taqdiri dan menunjuk ke bab ini: الفتى berakhir dengan alif, maka raf'nya tidak pernah dapat disebut — hanya sentiasa tersirat." } }
      ]
    },
    exercises: [
      {
        id: "ex5-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "رَأَيْتُ الفَتَى",
        gloss: { en: "I saw the young man.", ms: "Saya nampak pemuda itu." },
        targetWord: "الفَتَى",
        question: { en: "الفتى is maf'ul bih here, so it's nasb. What sign does that nasb take?", ms: "الفتى ialah maf'ul bih di sini, maka ia nasb. Apakah tanda nasb itu?" },
        options: [
          { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
          { value: "fatha-muqaddara", labelEn: "Implied fatha", labelMs: "Fathah tersirat" },
          { value: "alif", labelEn: "Alif (like a sound masc. plural)", labelMs: "Alif (seperti jamak mudzakkar salim)" }
        ],
        acceptedValues: ["fatha-muqaddara"],
        ruleNote: { en: "Unlike an ordinary noun, a maqsur noun hides its nasb too — all three cases are muqaddara on the alif, blocked by ta'adhdhur.", ms: "Tidak seperti kata nama biasa, isim maqsur turut menyembunyikan nasbnya — ketiga-tiga kes muqaddarah pada alif, dihalang ta'adhdhur." }
      },
      {
        id: "ex5-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "سَلَّمْتُ عَلَى الفَتَى",
        gloss: { en: "I greeted the young man.", ms: "Saya memberi salam kepada pemuda itu." },
        targetWord: "الفَتَى",
        question: { en: "Give the full analysis of \"الفَتَى\".", ms: "Berikan analisis penuh bagi \"الفَتَى\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "majrur", labelEn: "Majrur by the preposition على", labelMs: "Majrur oleh kata sendi على" },
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "jarr", labelEn: "Jarr", labelMs: "Jarr" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "kasra-muqaddara", labelEn: "Implied kasra (blocked by ta'adhdhur)", labelMs: "Kasrah tersirat (dihalang ta'adhdhur)" },
            { value: "kasra-zahira", labelEn: "Apparent kasra", labelMs: "Kasrah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "majrur", case: "jarr", sign: "kasra-muqaddara" } ],
        ruleNote: { en: "ta'adhdhur blocks a kasra on the alif exactly as it blocks a damma or fatha — all three cases of a maqsur noun are muqaddara.", ms: "Ta'adhdhur menghalang kasrah pada alif sepertimana ia menghalang damma atau fathah — ketiga-tiga kes isim maqsur muqaddarah." }
      }
    ],
    completion: {
      en: "You can now explain why a maqsur noun hides raf', nasb and jarr alike — the chapter Lesson 1 promised, now delivered in full.",
      ms: "Anda kini boleh menjelaskan sebab isim maqsur menyembunyikan raf', nasb DAN jarr sekali — bab yang dijanjikan Pelajaran 1, kini ditunaikan sepenuhnya."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 6 — إعراب الاسم المنقوص (Manqus Nouns)
  // ------------------------------------------------------------------
  6: {
    chapterId: 6,
    status: "pilot",
    concept: {
      en: "An ism manqus is a mu'rab noun ending in a fixed ya' preceded by a kasra (القاضي، الراعي). Like a maqsur noun, it hides some of its case markers — but for a different reason (thiql, \"heaviness\", not ta'adhdhur), and a definite manqus noun behaves differently from an indefinite one, which this lesson keeps carefully separate rather than blending into one rule.",
      ms: "Isim manqus ialah kata nama mu'rab yang berakhir dengan ya' tetap didahului kasrah (القاضي، الراعي). Seperti isim maqsur, ia menyembunyikan sebahagian tanda kesnya — tetapi atas sebab yang berbeza (thiql, \"kesukaran\", bukan ta'adhdhur), dan isim manqus makrifat berkelakuan berbeza daripada yang nakirah, yang pelajaran ini kekalkan berasingan dengan teliti dan bukan dicampur menjadi satu kaedah."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 6, pdfPages: [18, 20] },
      en: "A manqus noun's behavior splits by definiteness. (1) Definite or mudaf (القَاضِي، سَوَاقِي القَرْيَةِ): the ya' stays, and raf'/jarr are muqaddara — not blocked by impossibility this time, but by thiql, heaviness: a damma or kasra can technically be pronounced on a ya', it's just too heavy to, so it's implied instead. Nasb, by contrast, shows a plain apparent fatha (رأيتُ القَاضِيَ) — a fatha isn't heavy on a ya', so nothing hides it. (2) Indefinite (nakira) and not mudaf (قَاضٍ، رَاعٍ): when raf' or jarr is called for, the ya' itself is dropped for lightening (takhfif), and the tanwin left behind stands in as 'iwad (compensation) for it — جاءَ رَاعٍ، مررتُ بِرَاعٍ. This is a genuinely different mechanism from case (1), not a second reading of the same word — one keeps the ya' and hides the harakah under thiql, the other drops the ya' outright and compensates with tanwin.",
      ms: "Kelakuan isim manqus terbahagi mengikut ketentuan (definite/indefinite). (1) Makrifat atau mudaf (القَاضِي، سَوَاقِي القَرْيَةِ): ya' kekal, dan raf'/jarr muqaddarah — kali ini bukan dihalang kemustahilan, tetapi oleh thiql, kesukaran: damma atau kasrah SECARA TEKNIKAL boleh disebut pada ya', cuma terlalu berat untuk disebut, maka ia tersirat. Nasb, sebaliknya, menunjukkan fathah zahir biasa (رأيتُ القَاضِيَ) — fathah tidak berat pada ya', maka tiada apa menyembunyikannya. (2) Nakirah dan bukan mudaf (قَاضٍ، رَاعٍ): apabila raf' atau jarr diperlukan, ya' itu sendiri digugurkan untuk takhfif (meringankan), dan tanwin yang ditinggalkan bertindak sebagai 'iwad (pampasan) baginya — جاءَ رَاعٍ، مررتُ بِرَاعٍ. Ini mekanisme yang benar-benar berbeza daripada kes (1), bukan bacaan kedua bagi kata yang sama — satu mengekalkan ya' dan menyembunyikan harakat di bawah thiql, satu lagi menggugurkan ya' terus dan memampas dengan tanwin."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 6, pdfPages: [19, 19], printedPage: 18 },
      arabic: "اللَّيَالِي مَوَاضٍ",
      gloss: { en: "The nights pass.", ms: "Malam-malam itu berlalu." },
      words: [
        { id: "w1", ar: "اللَّيَالِي", role: { en: "mubtada'", ms: "mubtada'" }, case: "raf'", sign: { en: "implied damma on the ya' (damma muqaddara lil-thiql)", ms: "damma tersirat pada ya' (damma muqaddarah lil-thiql)" }, reason: { en: "الليالي is definite, so it keeps its ya'; the damma is only hidden because it's heavy to pronounce there, not because it's impossible — thiql, a different taqdir-trigger from Chapter 5's ta'adhdhur.", ms: "الليالي makrifat, maka ia mengekalkan ya'nya; damma hanya tersembunyi kerana berat untuk disebut di situ, bukan kerana mustahil — thiql, pencetus taqdir yang berbeza daripada ta'adhdhur Bab 5." } },
        { id: "w2", ar: "مَوَاضٍ", role: { en: "khabar", ms: "khabar" }, case: "raf'", sign: { en: "implied damma on the dropped ya' (damma muqaddara 'ala al-ya' al-mahdhufa), tanwin standing as 'iwad for the ya'", ms: "damma tersirat pada ya' yang gugur (damma muqaddarah 'ala al-ya' al-mahdhufah), tanwin bertindak sebagai 'iwad bagi ya'" }, reason: { en: "مواضٍ is indefinite, so its ya' is dropped for takhfif and the tanwin compensates for the missing letter — the second, distinct manqus mechanism, not another reading of اللَّيَالِي's.", ms: "مواضٍ nakirah, maka ya'nya digugurkan untuk takhfif dan tanwin memampas huruf yang hilang — mekanisme manqus kedua yang berbeza, bukan bacaan lain bagi اللَّيَالِي." } }
      ]
    },
    exercises: [
      {
        id: "ex6-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "جَاءَ القَاضِي",
        gloss: { en: "The judge came.", ms: "Kadi itu datang." },
        targetWord: "القَاضِي",
        question: { en: "What is the sign of raf' on \"القَاضِي\"?", ms: "Apakah tanda raf' pada \"القَاضِي\"?" },
        options: [
          { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
          { value: "damma-muqaddara-thiql", labelEn: "Implied damma, blocked by thiql", labelMs: "Damma tersirat, dihalang thiql" },
          { value: "damma-muqaddara-taadhdhur", labelEn: "Implied damma, blocked by ta'adhdhur", labelMs: "Damma tersirat, dihalang ta'adhdhur" }
        ],
        acceptedValues: ["damma-muqaddara-thiql"],
        ruleNote: { en: "القاضي is definite, so its ya' stays and the damma is merely too heavy to pronounce — thiql, not ta'adhdhur (that's for alif-ending maqsur nouns, Chapter 5).", ms: "القاضي makrifat, maka ya'nya kekal dan damma hanya terlalu berat untuk disebut — thiql, bukan ta'adhdhur (itu untuk isim maqsur berakhir alif, Bab 5)." }
      },
      {
        id: "ex6-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "مَرَرْتُ بِرَاعٍ",
        gloss: { en: "I passed by a shepherd.", ms: "Saya melalui seorang gembala." },
        targetWord: "رَاعٍ",
        question: { en: "Give the full analysis of \"رَاعٍ\".", ms: "Berikan analisis penuh bagi \"رَاعٍ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "majrur", labelEn: "Majrur by the preposition بِ", labelMs: "Majrur oleh kata sendi بِ" },
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
          ] },
          { key: "yastatus", question: { en: "What happened to its ya'?", ms: "Apa berlaku kepada ya'nya?" }, options: [
            { value: "hadhf", labelEn: "Dropped, with tanwin as 'iwad", labelMs: "Gugur, dengan tanwin sebagai 'iwad" },
            { value: "thabit", labelEn: "Stayed, hidden by thiql", labelMs: "Kekal, tersembunyi oleh thiql" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "kasra-muqaddara-iwad", labelEn: "Implied kasra on the dropped ya'", labelMs: "Kasrah tersirat pada ya' yang gugur" },
            { value: "kasra-zahira", labelEn: "Apparent kasra", labelMs: "Kasrah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "majrur", yastatus: "hadhf", sign: "kasra-muqaddara-iwad" } ],
        ruleNote: { en: "راعٍ is indefinite — its ya' is dropped for lightening and the tanwin compensates for it, the second manqus mechanism, distinct from a definite noun like القاضي.", ms: "راعٍ nakirah — ya'nya digugurkan untuk meringankan dan tanwin memampasnya, mekanisme manqus kedua, berbeza daripada kata nama makrifat seperti القاضي." }
      }
    ],
    completion: {
      en: "You can now tell apart the two different manqus mechanisms — thiql-hidden-harakah for a definite noun, versus hadhf-plus-'iwad for an indefinite one — rather than treating them as one blended rule.",
      ms: "Anda kini boleh membezakan dua mekanisme manqus yang berbeza — harakat tersembunyi-thiql bagi kata nama makrifat, berbanding hadhf-tambah-'iwad bagi yang nakirah — dan bukan menganggapnya satu kaedah bercampur."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 7 — إعراب المثنى (The Dual)
  // ------------------------------------------------------------------
  7: {
    chapterId: 7,
    status: "pilot",
    concept: {
      en: "The mathna (dual) marks exactly two of something, raf' with alif and nasb/jarr with ya' — the nun that follows compensates for the tanwin a singular noun would have carried. This lesson also covers mulhaq bil-mathna (words that follow the dual's declension pattern without truly being a dual: كِلا/كِلتا, اثنان/اثنتان, and names that merely look dual), and the book's own second, unranked reading for one such name.",
      ms: "Mathna (dwi) menandakan tepat dua sesuatu, raf' dengan alif dan nasb/jarr dengan ya' — nun yang mengikutinya memampas tanwin yang sepatutnya dibawa kata nama tunggal. Pelajaran ini turut merangkumi mulhaq bil-mathna (kata yang mengikut pola deklensi dwi tanpa benar-benar menjadi dwi: كِلا/كِلتا, اثنان/اثنتان, dan nama yang hanya kelihatan dwi), dan bacaan kedua buku itu sendiri yang tidak disusun mengikut keutamaan bagi salah satu nama sedemikian."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 7, pdfPages: [21, 24] },
      en: "A mathna noun is raf' with alif and nasb/jarr with ya' (سَافَرَ الرَّجُلَانِ raf'; رَأَيْتُ الرَّجُلَيْنِ nasb; مَرَرْتُ بِالرَّجُلَيْنِ jarr) — the nun standing in for the tanwin the singular would have carried, dropped only when mudaf (جاء تلميذايَ, with the nun gone for the idafa and ya' al-mutakallim as mudaf ilayh). Several word groups follow this same alif/ya' pattern without being a true mathna — mulhaq bil-mathna: كِلا/كِلتا when mudaf to a pronoun take damma-muqaddara-for-ta'adhdhur in raf' instead (جاء كِلا التلميذينِ — exactly Chapter 5's ta'adhdhur mechanism reappearing on a mudaf word, not a maqsur one); اثْنَانِ/اثْنَتَانِ; and tawkid words like كِلاهما/كِلَيْهِمَا. A separate, smaller group are proper names that merely resemble the dual in spelling without being one — their singular meaning is unrelated to their dual-shaped ending (شَعْبَانُ، جَبْرَانُ، مَرْوَانُ) — these are normally diptotes (mamnu' min al-sarf, damma/fatha, no tanwin) by default.",
      ms: "Kata nama mathna ialah raf' dengan alif dan nasb/jarr dengan ya' (سَافَرَ الرَّجُلَانِ raf'; رَأَيْتُ الرَّجُلَيْنِ nasb; مَرَرْتُ بِالرَّجُلَيْنِ jarr) — nun menggantikan tanwin yang sepatutnya dibawa bentuk tunggal, digugurkan hanya apabila mudaf (جاء تلميذايَ, dengan nun hilang kerana idafah dan ya' al-mutakallim sebagai mudaf ilayh). Beberapa kumpulan kata mengikut pola alif/ya' yang sama tanpa menjadi mathna sebenar — mulhaq bil-mathna: كِلا/كِلتا apabila mudaf kepada kata ganti nama mengambil damma-muqaddarah-kerana-ta'adhdhur dalam raf' sebaliknya (جاء كِلا التلميذينِ — mekanisme ta'adhdhur Bab 5 yang sama muncul semula pada kata mudaf, bukan kata maqsur); اثْنَانِ/اثْنَتَانِ; dan kata tawkid seperti كِلاهما/كِلَيْهِمَا. Satu kumpulan lebih kecil ialah nama khas yang hanya menyerupai dwi dari segi ejaan tanpa menjadi sedemikian — maknanya tunggal tidak berkaitan dengan hujungnya yang berbentuk dwi (شَعْبَانُ، جَبْرَانُ، مَرْوَانُ) — ini lazimnya diptote (mamnu' min al-sarf, damma/fathah, tiada tanwin) secara lazim."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 7, pdfPages: [23, 23], printedPage: 22 },
      arabic: "جَاءَ شَعْبَانُ",
      gloss: { en: "Sha'ban came. (a man's name)", ms: "Sha'ban datang. (nama seorang lelaki)" },
      words: [
        { id: "w1", ar: "جَاءَ", role: { en: "past-tense verb", ms: "kata kerja lampau" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb with nothing attached defaults to apparent fatha.", ms: "Kata kerja lampau berakar sahih tanpa apa-apa tersambung kekal fathah zahir secara lazim." } },
        { id: "w2", ar: "شَعْبَانُ", role: { en: "fa'il", ms: "fa'il" }, case: "raf'", sign: { en: "apparent damma, no tanwin (mamnu' min al-sarf)", ms: "damma zahir, tiada tanwin (mamnu' min al-sarf)" }, reason: { en: "شعبان's singular meaning (a man's name) has nothing to do with a pair — it only looks like a dual in spelling, so the book's primary analysis treats it as an ordinary diptote proper name, barred from tanwin for 'alamiyya (being a proper name) plus the extra alif+nun shape.", ms: "Makna tunggal شعبان (nama seorang lelaki) tiada kaitan dengan sepasang — ia hanya kelihatan dwi dari segi ejaan, maka analisis utama buku menganggapnya sebagai nama khas diptote biasa, dihalang daripada tanwin kerana 'alamiyyah (nama khas) ditambah bentuk alif+nun tambahan." } }
      ],
      dualAnalysis: {
        note: { en: "The book also explicitly permits a second reading: treating شعبانُ as mulhaq bil-mathna instead, raf' with alif (since it has the dual's exact shape) — the same alternative pattern Chapter 8 will show for plural-looking names.", ms: "Buku itu turut secara jelas membenarkan bacaan kedua: menganggap شعبانُ sebagai mulhaq bil-mathna sebaliknya, raf' dengan alif (kerana ia mempunyai bentuk dwi yang tepat) — pola alternatif yang sama akan ditunjukkan Bab 8 bagi nama berbentuk jamak." },
        ranking: { en: "Unlike Chapter 23's explicit \"more correct / easier\" ranking, the book doesn't rank these two readings against each other here — it simply states the alif-reading is \"also permissible\" (ويجوز أيضًا) alongside the primary diptote-damma reading already given; both are accepted.", ms: "Tidak seperti penyusunan jelas \"lebih tepat / lebih mudah\" Bab 23, buku ini tidak menyusun kedua-dua bacaan ini di sini — ia hanya menyatakan bacaan alif \"juga dibenarkan\" (ويجوز أيضًا) di samping bacaan diptote-damma utama yang telah diberikan; kedua-duanya diterima." }
      }
    },
    exercises: [
      {
        id: "ex7-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "سَافَرَ الرَّجُلَانِ",
        gloss: { en: "The two men traveled.", ms: "Dua orang lelaki itu bermusafir." },
        targetWord: "الرَّجُلَانِ",
        question: { en: "What is the sign of raf' on \"الرَّجُلَانِ\"?", ms: "Apakah tanda raf' pada \"الرَّجُلَانِ\"?" },
        options: [
          { value: "alif", labelEn: "Alif", labelMs: "Alif" },
          { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
          { value: "waw", labelEn: "Waw", labelMs: "Waw" }
        ],
        acceptedValues: ["alif"],
        ruleNote: { en: "A mathna noun is raf' with alif, replacing the damma a singular noun would show; the following nun compensates for the lost tanwin.", ms: "Kata nama mathna ialah raf' dengan alif, menggantikan damma yang ditunjukkan kata nama tunggal; nun berikutnya memampas tanwin yang hilang." }
      },
      {
        id: "ex7-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "رَأَيْتُ الرَّجُلَيْنِ",
        gloss: { en: "I saw the two men.", ms: "Saya nampak dua orang lelaki itu." },
        targetWord: "الرَّجُلَيْنِ",
        question: { en: "Give the full analysis of \"الرَّجُلَيْنِ\".", ms: "Berikan analisis penuh bagi \"الرَّجُلَيْنِ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "mafulbih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" },
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "ya", labelEn: "Ya'", labelMs: "Ya'" },
            { value: "alif", labelEn: "Alif", labelMs: "Alif" }
          ] }
        ],
        acceptedCombos: [ { role: "mafulbih", case: "nasb", sign: "ya" } ],
        ruleNote: { en: "A mathna noun's nasb (and jarr) marker is ya', not fatha or kasra — the same nun still compensates for the lost tanwin.", ms: "Tanda nasb (dan jarr) kata nama mathna ialah ya', bukan fathah atau kasrah — nun yang sama masih memampas tanwin yang hilang." }
      }
    ],
    completion: {
      en: "You can now mark a true mathna's raf'/nasb/jarr, recognize several mulhaq bil-mathna categories, and have seen the book offer — without ranking — a second valid reading for a dual-shaped proper name.",
      ms: "Anda kini boleh menanda raf'/nasb/jarr mathna sebenar, mengenali beberapa kategori mulhaq bil-mathna, dan telah melihat buku menawarkan — tanpa penyusunan keutamaan — bacaan kedua yang sah bagi nama khas berbentuk dwi."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 8 — إعراب جمع المذكر السالم (The Sound Masculine Plural)
  // ------------------------------------------------------------------
  8: {
    chapterId: 8,
    status: "pilot",
    concept: {
      en: "The sound masculine plural declines much like the mathna — raf' with waw, nasb/jarr with ya' — but the book documents six different categories of mulhaq bil-jam' al-mudhakkar al-salim (words that follow its pattern without being a genuine sound plural), more than any other mulhaq list in the book. One of them — proper names that happen to end in waw+nun — gets the same kind of unranked second reading Chapter 7 showed for شعبان.",
      ms: "Jamak mudzakkar salim dideklensi hampir seperti mathna — raf' dengan waw, nasb/jarr dengan ya' — tetapi buku ini mendokumenkan enam kategori berbeza mulhaq bil-jam' al-mudzakkar al-salim (kata yang mengikut polanya tanpa menjadi jamak salim sebenar), lebih daripada senarai mulhaq lain dalam buku ini. Salah satunya — nama khas yang kebetulan berakhir waw+nun — mendapat jenis bacaan kedua tanpa penyusunan keutamaan yang sama ditunjukkan Bab 7 bagi شعبان."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 8, pdfPages: [25, 28] },
      en: "Jam' mudhakkar salim is raf' with waw and nasb/jarr with ya' (المُعَلِّمُونَ قَادَةُ الأُمَمِ raf'; رَأَيْتُ المُعَلِّمِينَ nasb). The book documents six mulhaq categories that follow this same waw/ya' pattern without truly being this plural type: (1) words meaning plural with no singular at all, e.g. أُولُو (جاء أُولُو الفضلِ); (2) the counted tens — عِشْرُونَ، ثَلاثُونَ، أَرْبَعُونَ...; (3) words meaning plural whose singular changes shape too much on pluralizing, e.g. بَنُونَ (from ابن), سِنُونَ (from سَنة); (4) words that are neither sifa nor 'alam yet happen to pluralize this way, e.g. أَهْلُونَ؛ (5) ordinary words that became 'alam (proper) names, e.g. زَيْدُونَ، سَعْدُونَ — these are usually mamnu' min al-sarf (diptote) instead, but the book also permits treating them as mulhaq (raf' with waw, nasb/jarr with ya') as an alternative, unranked reading; (6) names that merely resemble this plural's letters without any plural meaning at all, e.g. place names like فِلَسْطِينَ — these decline as ordinary nouns, not as mulhaq.",
      ms: "Jamak mudzakkar salim ialah raf' dengan waw dan nasb/jarr dengan ya' (المُعَلِّمُونَ قَادَةُ الأُمَمِ raf'; رَأَيْتُ المُعَلِّمِينَ nasb). Buku ini mendokumenkan enam kategori mulhaq yang mengikut pola waw/ya' yang sama tanpa benar-benar menjadi jenis jamak ini: (1) kata bermakna jamak tanpa bentuk tunggal langsung, cth. أُولُو (جاء أُولُو الفضلِ); (2) puluhan terkira — عِشْرُونَ، ثَلاثُونَ، أَرْبَعُونَ...; (3) kata bermakna jamak yang bentuk tunggalnya berubah terlalu banyak semasa dijamakkan, cth. بَنُونَ (daripada ابن), سِنُونَ (daripada سَنة); (4) kata yang bukan sifat atau 'alam namun kebetulan dijamakkan begini, cth. أَهْلُونَ؛ (5) kata biasa yang menjadi nama 'alam (khas), cth. زَيْدُونَ، سَعْدُونَ — ini lazimnya mamnu' min al-sarf (diptote) sebaliknya, tetapi buku ini turut membenarkan menganggapnya mulhaq (raf' dengan waw, nasb/jarr dengan ya') sebagai bacaan alternatif tanpa penyusunan keutamaan; (6) nama yang hanya menyerupai huruf jamak ini tanpa sebarang makna jamak langsung, cth. nama tempat seperti فِلَسْطِينَ — ini dideklensi sebagai kata nama biasa, bukan mulhaq."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 8, pdfPages: [27, 27], printedPage: 26 },
      arabic: "جَاءَ سَعْدُونُ",
      gloss: { en: "Sa'dun came. (a man's name)", ms: "Sa'dun datang. (nama seorang lelaki)" },
      words: [
        { id: "w1", ar: "جَاءَ", role: { en: "past-tense verb", ms: "kata kerja lampau" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb with nothing attached defaults to apparent fatha.", ms: "Kata kerja lampau berakar sahih tanpa apa-apa tersambung kekal fathah zahir secara lazim." } },
        { id: "w2", ar: "سَعْدُونُ", role: { en: "fa'il", ms: "fa'il" }, case: "raf'", sign: { en: "apparent damma, no tanwin (mamnu' min al-sarf)", ms: "damma zahir, tiada tanwin (mamnu' min al-sarf)" }, reason: { en: "سعدون is an ordinary name that became 'alam; the book's primary analysis bars it from tanwin for 'alamiyya plus its resemblance to foreign names (shibh al-'ujma, from containing waw+nun) — a diptote proper name, not truly this plural type.", ms: "سعدون ialah nama biasa yang menjadi 'alam; analisis utama buku menghalangnya daripada tanwin kerana 'alamiyyah ditambah keserupaannya dengan nama asing (shibh al-'ujmah, kerana mengandungi waw+nun) — nama khas diptote, bukan benar-benar jenis jamak ini." } }
      ],
      dualAnalysis: {
        note: { en: "The book also permits treating سَعْدُونُ as mulhaq bil-jam' al-mudhakkar al-salim instead — raf' with waw, nasb and jarr with ya' — the same kind of alternative Chapter 7 showed for شعبان-type dual-looking names, just for plural-looking ones here.", ms: "Buku itu turut membenarkan menganggap سَعْدُونُ sebagai mulhaq bil-jam' al-mudzakkar al-salim sebaliknya — raf' dengan waw, nasb dan jarr dengan ya' — jenis alternatif yang sama ditunjukkan Bab 7 bagi nama berbentuk dwi seperti شعبان, cuma di sini bagi yang berbentuk jamak." },
        ranking: { en: "As with شعبان in Chapter 7, the book doesn't explicitly rank these two readings — it offers the mulhaq reading as simply \"also permissible\" (يجوز أيضًا) alongside the primary diptote reading; both are accepted.", ms: "Seperti شعبان dalam Bab 7, buku ini tidak menyusun kedua-dua bacaan ini secara jelas — ia menawarkan bacaan mulhaq sebagai \"juga dibenarkan\" (يجوز أيضًا) di samping bacaan diptote utama; kedua-duanya diterima." }
      }
    },
    exercises: [
      {
        id: "ex8-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "عَادَ المُعَلِّمُونَ",
        gloss: { en: "The teachers returned.", ms: "Guru-guru itu kembali." },
        targetWord: "المُعَلِّمُونَ",
        question: { en: "What is the sign of raf' on \"المُعَلِّمُونَ\"?", ms: "Apakah tanda raf' pada \"المُعَلِّمُونَ\"?" },
        options: [
          { value: "waw", labelEn: "Waw", labelMs: "Waw" },
          { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
          { value: "alif", labelEn: "Alif", labelMs: "Alif" }
        ],
        acceptedValues: ["waw"],
        ruleNote: { en: "A sound masculine plural is raf' with waw, replacing the damma a singular noun would show; the nun compensates for the lost tanwin, just as in the mathna.", ms: "Jamak mudzakkar salim ialah raf' dengan waw, menggantikan damma yang ditunjukkan kata nama tunggal; nun memampas tanwin yang hilang, seperti dalam mathna." }
      },
      {
        id: "ex8-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "رَأَيْتُ المُعَلِّمِينَ",
        gloss: { en: "I saw the teachers.", ms: "Saya nampak guru-guru itu." },
        targetWord: "المُعَلِّمِينَ",
        question: { en: "Give the full analysis of \"المُعَلِّمِينَ\".", ms: "Berikan analisis penuh bagi \"المُعَلِّمِينَ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "mafulbih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" },
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "ya", labelEn: "Ya'", labelMs: "Ya'" },
            { value: "waw", labelEn: "Waw", labelMs: "Waw" }
          ] }
        ],
        acceptedCombos: [ { role: "mafulbih", case: "nasb", sign: "ya" } ],
        ruleNote: { en: "A sound masculine plural's nasb (and jarr) marker is ya', not fatha or kasra — exactly parallel to the mathna's own ya'.", ms: "Tanda nasb (dan jarr) jamak mudzakkar salim ialah ya', bukan fathah atau kasrah — selari tepat dengan ya' mathna sendiri." }
      }
    ],
    completion: {
      en: "You can now mark a true sound masculine plural's raf'/nasb/jarr, recognize its six mulhaq categories, and have seen another book-documented unranked alternative reading, this time for a plural-shaped proper name.",
      ms: "Anda kini boleh menanda raf'/nasb/jarr jamak mudzakkar salim sebenar, mengenali enam kategori mulhaqnya, dan telah melihat satu lagi bacaan alternatif yang didokumenkan buku tanpa penyusunan keutamaan, kali ini bagi nama khas berbentuk jamak."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 9 — إعراب جمع المؤنث السالم وملحقاته
  // (The Sound Feminine Plural & Its Analogues)
  // ------------------------------------------------------------------
  9: {
    chapterId: 9,
    status: "pilot",
    concept: {
      en: "The sound feminine plural declines differently from the two plural/dual patterns already covered: it is raf' with damma, like a singular noun, but nasb and jarr both share one marker — kasra — rather than nasb getting its own. This lesson also covers its mulhaq items and a proper-name sub-case that behaves like Chapter 8's سعدون, minus the alternate reading.",
      ms: "Jamak muannath salim dideklensi secara berbeza daripada dua pola jamak/dwi yang telah dirangkumi: ia raf' dengan damma, seperti kata nama tunggal, tetapi nasb DAN jarr kedua-duanya berkongsi satu tanda — kasrah — dan bukannya nasb mempunyai tandanya sendiri. Pelajaran ini turut merangkumi item mulhaqnya dan sub-kes nama khas yang berkelakuan seperti سعدون Bab 8, tanpa bacaan alternatif."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 9, pdfPages: [29, 30] },
      en: "Jam' mu'annath salim — formed by adding alif+ta' to the singular — is raf' with damma (جَاءَتِ التِّلْمِيذَاتُ) and, uniquely among the three plural/dual patterns this tier covers, both nasb and jarr are shown with kasra, not fatha (رَأَيْتُ التِّلْمِيذَاتِ nasb; مَرَرْتُ بِالتِّلْمِيذَاتِ jarr — identical markers). Two mulhaq categories follow this pattern without being a genuine plural: (1) أُولَاتُ (\"possessors of\", feminine of أُولُو), e.g. سَلَّمْتُ عَلَى أُولَاتِ فَضْلٍ; (2) ordinary names that became feminine-sounding 'alam names by convention, e.g. سَعَادَاتُ، زَيْنَبَاتُ — these are mamnu' min al-sarf (diptote, no tanwin) for combining 'alamiyya and ta'nith, and — like Chapter 8's سعدون — take fatha instead of kasra for nasb/jarr, as 'iwad (compensation) for the barred kasra.",
      ms: "Jamak muannath salim — dibentuk dengan menambah alif+ta' pada bentuk tunggal — ialah raf' dengan damma (جَاءَتِ التِّلْمِيذَاتُ) dan, secara unik antara tiga pola jamak/dwi yang dirangkumi tingkat ini, nasb DAN jarr kedua-duanya ditunjukkan dengan kasrah, bukan fathah (رَأَيْتُ التِّلْمِيذَاتِ nasb; مَرَرْتُ بِالتِّلْمِيذَاتِ jarr — tanda yang sama). Dua kategori mulhaq mengikut pola ini tanpa menjadi jamak sebenar: (1) أُولَاتُ (\"pemilik\", bentuk feminin أُولُو), cth. سَلَّمْتُ عَلَى أُولَاتِ فَضْلٍ; (2) nama biasa yang menjadi nama 'alam berbunyi feminin mengikut konvensyen, cth. سَعَادَاتُ، زَيْنَبَاتُ — ini mamnu' min al-sarf (diptote, tiada tanwin) kerana menggabungkan 'alamiyyah dan ta'nith, dan — seperti سعدون Bab 8 — mengambil fathah dan bukan kasrah bagi nasb/jarr, sebagai 'iwad (pampasan) bagi kasrah yang dihalang."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 9, pdfPages: [30, 30], printedPage: 29 },
      arabic: "جَاءَتْ سَعَادَاتُ",
      gloss: { en: "Sa'adat came. (a woman's name)", ms: "Sa'adat datang. (nama seorang wanita)" },
      words: [
        { id: "w1", ar: "جَاءَتْ", role: { en: "past-tense verb + ta' al-ta'nith al-sakina", ms: "kata kerja lampau + ta' al-ta'nith al-sakinah" }, case: "—", sign: { en: "mabni on apparent fatha; the ت is mabni on sukun", ms: "mabni fathah zahir; ت mabni sukun" }, reason: { en: "The attached ت here marks the (elided) subject as feminine — Chapter 3's ta'-based sukun base, not part of the i'rab system itself.", ms: "ت yang tersambung di sini menandakan subjek (tersirat) sebagai feminin — asas sukun berasaskan-ta' Bab 3, bukan sebahagian sistem i'rab itu sendiri." } },
        { id: "w2", ar: "سَعَادَاتُ", role: { en: "fa'il", ms: "fa'il" }, case: "raf'", sign: { en: "apparent damma, no tanwin (mamnu' min al-sarf)", ms: "damma zahir, tiada tanwin (mamnu' min al-sarf)" }, reason: { en: "سعاداتُ combines 'alamiyya (a proper name) and ta'nith, so it's barred from tanwin — raf' still shows as a plain damma, the same marker a genuine jam' mu'annath salim would use.", ms: "سعاداتُ menggabungkan 'alamiyyah (nama khas) dan ta'nith, maka ia dihalang daripada tanwin — raf' masih ditunjukkan sebagai damma biasa, tanda yang sama digunakan jam' muannath salim sebenar." } }
      ]
    },
    exercises: [
      {
        id: "ex9-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "رَأَيْتُ التِّلْمِيذَاتِ",
        gloss: { en: "I saw the students (f.).", ms: "Saya nampak pelajar-pelajar (perempuan) itu." },
        targetWord: "التِّلْمِيذَاتِ",
        question: { en: "What is the sign of nasb on \"التِّلْمِيذَاتِ\"?", ms: "Apakah tanda nasb pada \"التِّلْمِيذَاتِ\"?" },
        options: [
          { value: "kasra", labelEn: "Kasra", labelMs: "Kasrah" },
          { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
          { value: "ya", labelEn: "Ya'", labelMs: "Ya'" }
        ],
        acceptedValues: ["kasra"],
        ruleNote: { en: "Unlike any other plural or dual pattern in this tier, jam' mu'annath salim takes kasra for both nasb and jarr — not fatha for nasb.", ms: "Tidak seperti mana-mana pola jamak atau dwi lain dalam tingkat ini, jam' muannath salim mengambil kasrah bagi KEDUA-DUA nasb dan jarr — bukan fathah bagi nasb." }
      },
      {
        id: "ex9-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "جَاءَتِ المُعَلِّمَاتُ",
        gloss: { en: "The teachers (f.) came.", ms: "Guru-guru (perempuan) itu datang." },
        targetWord: "المُعَلِّمَاتُ",
        question: { en: "Give the full analysis of \"المُعَلِّمَاتُ\".", ms: "Berikan analisis penuh bagi \"المُعَلِّمَاتُ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" },
            { value: "mafulbih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "kasra", labelEn: "Kasra", labelMs: "Kasrah" }
          ] }
        ],
        acceptedCombos: [ { role: "fail", case: "rafa", sign: "damma-zahira" } ],
        ruleNote: { en: "A genuine (non-'alam) jam' mu'annath salim raises with a plain apparent damma, exactly like an ordinary singular noun.", ms: "Jam' muannath salim sebenar (bukan 'alam) raf' dengan damma zahir biasa, sama seperti kata nama tunggal biasa." }
      }
    ],
    completion: {
      en: "You can now mark the sound feminine plural's raf'/nasb/jarr — including the kasra it shares between nasb and jarr, unlike the mathna or sound masculine plural — and recognize its 'alam sub-case.",
      ms: "Anda kini boleh menanda raf'/nasb/jarr jamak muannath salim — termasuk kasrah yang dikongsinya antara nasb dan jarr, tidak seperti mathna atau jamak mudzakkar salim — dan mengenali sub-kes 'alamnya."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 10 — إعراب الفعل المضارع (The Present-Tense Verb)
  // ------------------------------------------------------------------
  10: {
    chapterId: 10,
    status: "pilot",
    concept: {
      en: "The present-tense verb (fi'l mudari') is mu'rab, and defaults to raf' unless a nasib (nasb-causing) or jazim (jazm-causing) particle governs it. This is the largest chapter in the curriculum, covering the full particle lists for all three states plus how nun al-tawkid attaches — this lesson focuses on the core raf'/nasb/jazm system and a worked example where the book itself offers two different explanations for the very same nasb.",
      ms: "Kata kerja kini (fi'l mudari') ialah mu'rab, dan secara lazim raf' melainkan ditadbir oleh huruf nasib (penyebab nasb) atau jazim (penyebab jazm). Ini bab terbesar dalam kurikulum, merangkumi senarai penuh huruf bagi ketiga-tiga keadaan serta cara nun al-tawkid tersambung — pelajaran ini memberi tumpuan kepada sistem teras raf'/nasb/jazm dan contoh kerja di mana buku itu sendiri menawarkan dua penjelasan berbeza bagi nasb yang sama tepat."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 10, pdfPages: [31, 45] },
      en: "A mudari' verb is raf' by default (يَكْتُبُ التِّلْمِيذُ), shown as apparent damma for a sound verb — or, when it's one of Chapter 2's five verbs, as thubut al-nun. Nasb is caused either directly by four particles — أَنْ، لَنْ، إِذَنْ، كَيْ — or indirectly, by an implied أَنْ after particles such as لام الجحود، حتى، فاء السببية، واو المعية، لام التعليل؛ a small set of these (أو، فاء السببية، واو المعية، لام التعليل، حتى) can also be analyzed as nasb-causing in their own right as an easier alternative — the book explicitly notes, for one such case, that the first analysis (implied أن) is \"more well-known and more correct\", and the second (the particle itself causing nasb) is \"easier\". Jazm has its own particle set: لَمْ، لَمَّا، لام الأمر، لا الناهية jazm only one verb each; إِنْ، مَنْ، مَا، مَهْمَا، أَيّ، مَتَى، أَيَّانَ، أَنَّى، حَيْثُمَا، كَيْفَمَا، إِذْمَا jazm two verbs — fi'l al-shart and its jawab — and are covered in full in Chapter 14.",
      ms: "Kata kerja mudari' ialah raf' secara lazim (يَكْتُبُ التِّلْمِيذُ), ditunjukkan sebagai damma zahir bagi kata kerja sahih — atau, apabila ia salah satu af'al khamsah Bab 2, sebagai thubut al-nun. Nasb disebabkan sama ada secara terus oleh empat huruf — أَنْ، لَنْ، إِذَنْ، كَيْ — atau secara tidak langsung, oleh أَنْ tersirat selepas huruf seperti لام الجحود، حتى، فاء السببية، واو المعية، لام التعليل؛ sebahagian kecil daripada ini (أو، فاء السببية، واو المعية، لام التعليل، حتى) juga boleh dianalisis sebagai penyebab nasb dengan sendirinya sebagai alternatif lebih mudah — buku ini secara jelas menyatakan, bagi satu kes sedemikian, bahawa analisis pertama (أن tersirat) \"lebih dikenali dan lebih tepat\", dan yang kedua (huruf itu sendiri menyebabkan nasb) \"lebih mudah\". Jazm mempunyai set hurufnya sendiri: لَمْ، لَمَّا، لام الأمر، لا الناهية jazm hanya satu kata kerja setiap satu; إِنْ، مَنْ، مَا، مَهْمَا، أَيّ، مَتَى، أَيَّانَ، أَنَّى، حَيْثُمَا، كَيْفَمَا، إِذْمَا jazm DUA kata kerja — fi'l al-shart dan jawabnya — dan dirangkumi sepenuhnya dalam Bab 14."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 10, pdfPages: [37, 38], printedPage: 36 },
      arabic: "اِقْرَأِ الكِتَابَ أَوْ أَتْعَبَ",
      gloss: { en: "Read the book, or [else] I'll get tired.", ms: "Bacalah buku itu, atau [jika tidak] saya akan penat." },
      words: [
        { id: "w1", ar: "اِقْرَأِ", role: { en: "imperative verb", ms: "kata kerja perintah" }, case: "—", sign: { en: "mabni on sukun (a kasra is added only to avoid two consonants colliding)", ms: "mabni sukun (kasrah ditambah hanya untuk mengelakkan dua konsonan bertembung)" }, reason: { en: "A sound-rooted imperative with nothing attached defaults to sukun (Chapter 4).", ms: "Fi'l amr berakar sahih tanpa apa-apa tersambung kekal sukun secara lazim (Bab 4)." } },
        { id: "w2", ar: "الكِتَابَ", role: { en: "maf'ul bih", ms: "maf'ul bih" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "The maf'ul bih of اقرأ, always nasb (Chapter 29).", ms: "Maf'ul bih bagi اقرأ, sentiasa nasb (Bab 29)." } },
        { id: "w3", ar: "أَوْ", role: { en: "coordinating particle ('atf)", ms: "huruf 'atf" }, case: "—", sign: { en: "mabni; a particle, outside the i'rab system", ms: "mabni; huruf, di luar sistem i'rab" }, reason: { en: "Particles are always mabni.", ms: "Huruf sentiasa mabni." } },
        { id: "w4", ar: "أَتْعَبَ", role: { en: "present-tense verb", ms: "kata kerja kini" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "The book's primary analysis: an implied أن after أو puts this verb in nasb, and the resulting masdar mu'awwal is 'atf (coordinated) onto an implied prior masdar drawn from the sentence's meaning — roughly, \"there will be from me a reading or a tiring\".", ms: "Analisis utama buku: أن tersirat selepas أو meletakkan kata kerja ini pada nasb, dan masdar mu'awwal yang terhasil ialah 'atf (disambung) kepada masdar tersirat terdahulu yang diambil daripada makna ayat — kira-kira, \"akan ada daripada saya pembacaan atau keletihan\"." } }
      ],
      dualAnalysis: {
        note: { en: "The book offers a second explanation for the very same nasb: instead of an implied أن after أو, أو itself can be treated as directly causing the nasb (by analogy with particles that nasb a mudari' on their own).", ms: "Buku ini menawarkan penjelasan kedua bagi nasb yang sama tepat: selain أن tersirat selepas أو, أو itu sendiri boleh dianggap sebagai penyebab terus nasb (dengan analogi kepada huruf yang menyebabkan nasb kata kerja kini dengan sendirinya)." },
        ranking: { en: "The book ranks these in almost the same words it used for Chapter 23's dual reading: \"the first analysis is more well-known and more correct, and the second is easier\" (الإعراب الأول أشهر وأصح، والثاني أسهل) — both are accepted answers; this is a case where the written word never changes, only the grammatical path (the 'amil) that explains it.", ms: "Buku ini menyusun kedua-duanya hampir dengan kata-kata yang sama digunakan bagi bacaan dwi Bab 23: \"analisis pertama lebih dikenali dan lebih tepat, dan yang kedua lebih mudah\" (الإعراب الأول أشهر وأصح، والثاني أسهل) — kedua-duanya jawapan yang diterima; ini kes di mana perkataan bertulis tidak pernah berubah, hanya laluan nahu ('amil) yang menjelaskannya." }
      }
    },
    exercises: [
      {
        id: "ex10-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "لَمْ يَكْتُبِ الوَلَدُ الدَّرْسَ",
        gloss: { en: "The boy did not write the lesson.", ms: "Budak lelaki itu tidak menulis pelajaran itu." },
        targetWord: "يَكْتُبِ",
        question: { en: "What case is \"يَكْتُبِ\" in, and why?", ms: "Apakah kes \"يَكْتُبِ\", dan mengapa?" },
        options: [
          { value: "jazm-lam", labelEn: "Jazm, caused by لم", labelMs: "Jazm, disebabkan لم" },
          { value: "nasb-lan", labelEn: "Nasb, caused by لن", labelMs: "Nasb, disebabkan لن" },
          { value: "rafa-default", labelEn: "Raf', the default", labelMs: "Raf', lazim" }
        ],
        acceptedValues: ["jazm-lam"],
        ruleNote: { en: "لم jazms a single mudari' verb and flips its meaning to negated past — the verb's apparent sukun is the sign of jazm here.", ms: "لم men-jazm satu kata kerja mudari' dan membalikkan maknanya kepada lampau yang dinafikan — sukun zahir kata kerja ialah tanda jazm di sini." }
      },
      {
        id: "ex10-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "هَلْ تَذْهَبُ إِلَى المَدْرَسَةِ؟",
        gloss: { en: "Are you going to school?", ms: "Adakah kamu pergi ke sekolah?" },
        targetWord: "تَذْهَبُ",
        question: { en: "Give the full analysis of \"تَذْهَبُ\".", ms: "Berikan analisis penuh bagi \"تَذْهَبُ\"." },
        fields: [
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "jazm", labelEn: "Jazm", labelMs: "Jazm" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "sukun", labelEn: "Sukun", labelMs: "Sukun" }
          ] }
        ],
        acceptedCombos: [ { case: "rafa", sign: "damma-zahira" } ],
        ruleNote: { en: "هل (a question particle) causes no nasb or jazm — with nothing else before it, تذهب simply stays raf' by default, shown as an apparent damma.", ms: "هل (huruf soal) tidak menyebabkan nasb atau jazm — tanpa apa-apa lain sebelumnya, تذهب kekal raf' secara lazim, ditunjukkan sebagai damma zahir." }
      }
    ],
    completion: {
      en: "You can now explain the mudari's default raf' and its nasb/jazm particle families, and have seen the book document two different 'amils for one and the same visible nasb — a reminder that \"why\" can have more than one defensible answer even when \"what\" doesn't change.",
      ms: "Anda kini boleh menjelaskan raf' lazim mudari' dan keluarga huruf nasb/jazmnya, dan telah melihat buku mendokumenkan dua 'amil berbeza bagi satu nasb kelihatan yang sama — peringatan bahawa \"mengapa\" boleh mempunyai lebih daripada satu jawapan yang munasabah walaupun \"apa\" tidak berubah."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 14 — إعراب أدوات الشرط (Conditional Particles)
  // ------------------------------------------------------------------
  14: {
    chapterId: 14,
    status: "pilot",
    concept: {
      en: "Conditional particles split into jazim (jazm-causing, two verbs) and non-jazim. This lesson builds on Chapter 10's particle list to focus on what Chapter 10 only introduced: how the jawab al-shart (the result clause) is i'rab'd, especially when it's linked by a fa' — a construction that routes straight back through Chapter 23's mubtada'/khabar.",
      ms: "Huruf syarat terbahagi kepada jazim (penyebab jazm, dua kata kerja) dan bukan jazim. Pelajaran ini dibina atas senarai huruf Bab 10 untuk memberi tumpuan kepada apa yang hanya diperkenalkan Bab 10: cara jawab al-shart (ayat hasil) di-i'rab, terutamanya apabila dihubungkan dengan fa' — binaan yang membawa terus kembali melalui mubtada'/khabar Bab 23."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 14, pdfPages: [62, 68] },
      en: "Jazim particles (إِنْ، إِذْمَا and the mabni/mu'rab ism-shart set مَتَى، أَيَّانَ، أَنَّى، أَيْنَمَا، حَيْثُمَا، مَنْ، مَا، مَهْمَا، أَيّ، كَيْفَمَا, matching Chapter 10's list) jazm two verbs — fi'l al-shart and jawabuhu. Non-jazim particles (لَوْ، لَوْلَا، لَوْمَا، أَمَّا، كَيْفَ، إِذَا) still introduce a conditional-meaning sentence but cause no jazm at all — إِذَا، for instance, is zarf zaman mabni, and the shart/jawab verbs after it keep whatever i'rab they'd have anyway. The jawab al-shart itself needs special handling whenever it isn't a simple mudari' verb directly after the particle: if it's introduced by a rabita fa' (because it's an ismiyya sentence, or begins with a particle like قد or س that can't itself be jazm'd), the whole fa'-clause stands in mahall jazm — e.g. مَنْ يَطْلُبْ فَيَجِدُ, where فَيَجِدُ is, in full, a dropped-mubtada' nominal sentence (\"huwa yajidu\") standing as khabar, the whole thing in mahall jazm as jawab al-shart. When a noun (not a verb) follows the shart particle directly, as in إِنْ ضَيْفٌ زَارَكَ, an elided shart verb is understood, explained by the verb that follows it (زارك).",
      ms: "Huruf jazim (إِنْ، إِذْمَا dan set isim-syarat mabni/mu'rab مَتَى، أَيَّانَ، أَنَّى، أَيْنَمَا، حَيْثُمَا، مَنْ، مَا، مَهْمَا، أَيّ، كَيْفَمَا, sepadan senarai Bab 10) men-jazm dua kata kerja — fi'l al-shart dan jawabnya. Huruf bukan jazim (لَوْ، لَوْلَا، لَوْمَا، أَمَّا، كَيْفَ، إِذَا) masih memperkenalkan ayat bermakna syarat tetapi tidak menyebabkan jazm langsung — إِذَا, sebagai contoh, ialah zarf zaman mabni, dan kata kerja syarat/jawab selepasnya kekal apa jua i'rab yang sepatutnya. Jawab al-shart itu sendiri memerlukan pengendalian khas apabila ia bukan kata kerja mudari' mudah terus selepas huruf: jika ia diperkenalkan oleh rabita fa' (kerana ia ayat ismiyyah, atau bermula dengan huruf seperti قد atau س yang tidak boleh di-jazm sendiri), keseluruhan klausa-fa' berdiri dalam mahal jazm — cth. مَنْ يَطْلُبْ فَيَجِدُ, di mana فَيَجِدُ, secara penuh, ialah ayat nominal mubtada' tergugur (\"huwa yajidu\") berdiri sebagai khabar, keseluruhannya dalam mahal jazm sebagai jawab al-shart. Apabila kata nama (bukan kata kerja) mengikuti huruf syarat terus, seperti dalam إِنْ ضَيْفٌ زَارَكَ, fi'l syarat yang gugur difahami, dijelaskan oleh kata kerja yang mengikutinya (زارك)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 14, pdfPages: [67, 67], printedPage: 66 },
      arabic: "مَنْ يَطْلُبْ فَيَجِدُ",
      gloss: { en: "Whoever seeks, finds.", ms: "Sesiapa yang mencari, akan menemui." },
      words: [
        { id: "w1", ar: "مَنْ", role: { en: "ism shart jazim fi'layn", ms: "isim syarat jazim fi'layn" }, case: "raf' (mahalli)", sign: { en: "mabni on sukun; in mahall raf' as mubtada'", ms: "mabni sukun; dalam mahal raf' sebagai mubtada'" }, reason: { en: "An ism shart is mabni and simultaneously fills a sentence role in mahall — here, the mubtada' Chapter 23 introduced.", ms: "Isim syarat ialah mabni dan serentak mengisi peranan ayat secara mahal — di sini, mubtada' yang diperkenalkan Bab 23." } },
        { id: "w2", ar: "يَطْلُبْ", role: { en: "fi'l al-shart", ms: "fi'l al-shart" }, case: "jazm", sign: { en: "apparent sukun", ms: "sukun zahir" }, reason: { en: "Jazm'd by مَنْ; its fa'il is a hidden pronoun (huwa), and the whole verbal sentence is in mahall raf' as khabar of مَنْ — so the mubtada'/khabar pairing sits inside the shart clause too.", ms: "Di-jazm oleh مَنْ; fa'ilnya kata ganti nama tersirat (huwa), dan keseluruhan ayat kata kerja berada dalam mahal raf' sebagai khabar bagi مَنْ — maka pasangan mubtada'/khabar turut wujud dalam klausa syarat." } },
        { id: "w3", ar: "فَ", role: { en: "rabita linking the jawab al-shart", ms: "rabita menghubungkan jawab al-shart" }, case: "—", sign: { en: "mabni; a particle", ms: "mabni; huruf" }, reason: { en: "A fa' links the jawab here because what follows it is itself a nominal (dropped-mubtada') sentence, which can't be jazm'd directly.", ms: "فَ menghubungkan jawab di sini kerana apa yang mengikutinya ialah ayat nominal (mubtada' tergugur) itu sendiri, yang tidak boleh di-jazm terus." } },
        { id: "w4", ar: "يَجِدُ", role: { en: "khabar of a dropped mubtada' (huwa)", ms: "khabar bagi mubtada' tergugur (huwa)" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "يجد itself stays raf' (nothing jazms it directly, since the fa' blocks that) — but the whole dropped-mubtada'-plus-يجد sentence, taken together, stands in mahall jazm as jawab al-shart.", ms: "يجد itu sendiri kekal raf' (tiada apa men-jazmnya terus, kerana فَ menghalangnya) — tetapi keseluruhan ayat mubtada' tergugur-tambah-يجد, diambil bersama, berdiri dalam mahal jazm sebagai jawab al-shart." } }
      ]
    },
    exercises: [
      {
        id: "ex14-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "إِنْ ضَيْفٌ زَارَكَ فَأَكْرِمْهُ",
        gloss: { en: "If a guest visits you, honor him.", ms: "Jika seorang tetamu melawat kamu, hormatilah dia." },
        question: { en: "إنْ is followed by a noun (ضَيْفٌ), not a verb. What does the book say about the real fi'l al-shart here?", ms: "إنْ diikuti kata nama (ضَيْفٌ), bukan kata kerja. Apakah kata buku tentang fi'l al-shart sebenar di sini?" },
        options: [
          { value: "elided-explained", labelEn: "It's elided (dropped), and explained by the verb that follows (زارك)", labelMs: "Ia gugur (tersirat), dan dijelaskan oleh kata kerja yang mengikutinya (زارك)" },
          { value: "noun-is-verb", labelEn: "ضيفٌ itself acts as the fi'l al-shart", labelMs: "ضيفٌ itu sendiri bertindak sebagai fi'l al-shart" },
          { value: "no-shart-verb", labelEn: "This sentence has no fi'l al-shart at all", labelMs: "Ayat ini langsung tiada fi'l al-shart" }
        ],
        acceptedValues: ["elided-explained"],
        ruleNote: { en: "When a noun follows a shart particle directly, the book treats it as the fa'il of an elided verb, understood from (and explained by) the verb that comes right after it — here, زارك explains the dropped زارَ.", ms: "Apabila kata nama mengikuti huruf syarat terus, buku menganggapnya fa'il bagi kata kerja yang gugur, difahami daripada (dan dijelaskan oleh) kata kerja yang terus mengikutinya — di sini, زارك menjelaskan زارَ yang gugur." }
      },
      {
        id: "ex14-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "مَهْمَا تَطْلُبْ فَإِنِّي مُسْتَعِدٌّ",
        gloss: { en: "Whatever you ask for, I am ready.", ms: "Apa jua yang kamu minta, saya bersedia." },
        targetWord: "تَطْلُبْ",
        question: { en: "Give the full analysis of \"تَطْلُبْ\".", ms: "Berikan analisis penuh bagi \"تَطْلُبْ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "fishart", labelEn: "Fi'l al-shart", labelMs: "Fi'l al-shart" },
            { value: "jawabshart", labelEn: "Jawab al-shart", labelMs: "Jawab al-shart" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "jazm", labelEn: "Jazm", labelMs: "Jazm" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "sukun-zahir", labelEn: "Apparent sukun", labelMs: "Sukun zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "fishart", case: "jazm", sign: "sukun-zahir" } ],
        ruleNote: { en: "مهما jazms two verbs like إن and مَن; تطلب is its fi'l al-shart, jazm with apparent sukun, while the إنّ-sentence that follows (linked by فَ, since an inna-sentence can't be jazm'd directly) is the jawab, in mahall jazm as a whole.", ms: "مهما men-jazm dua kata kerja seperti إن dan مَن; تطلب ialah fi'l al-shartnya, jazm dengan sukun zahir, manakala ayat-إنّ yang mengikutinya (dihubungkan فَ, kerana ayat inna tidak boleh di-jazm terus) ialah jawabnya, dalam mahal jazm secara keseluruhan." }
      }
    ],
    completion: {
      en: "You can now tell jazim and non-jazim conditional particles apart, and — building on Chapters 10 and 23 together — explain how a jawab al-shart linked by fa' stands in mahall jazm even when none of its own words are jazm'd directly.",
      ms: "Anda kini boleh membezakan huruf syarat jazim dan bukan jazim, dan — berdasarkan Bab 10 dan 23 bersama — menjelaskan cara jawab al-shart yang dihubungkan fa' berdiri dalam mahal jazm walaupun tiada satu pun katanya sendiri di-jazm terus."
    }
  },

  24: {
    chapterId: 24,
    status: "pilot",
    concept: {
      en: "Kana and its sisters are deficient verbs (af'al naqisa) that enter directly on a mubtada'/khabar pair — the same pair Chapter 23 taught — and reshape it: the first word becomes their ism (raf', just like a mubtada' normally is), and the second becomes their khabar (nasb, unlike an ordinary khabar). The operator/operated-upon triad from Chapter 1 is back, now with kana itself as the operator.",
      ms: "Kana dan saudarinya ialah kata kerja tak lengkap (af'al naqisa) yang memasuki terus pasangan mubtada'/khabar — pasangan yang sama diajar Bab 23 — dan membentuk semula ia: perkataan pertama menjadi ism mereka (raf', sama seperti mubtada' biasa), dan perkataan kedua menjadi khabar mereka (nasb, tidak seperti khabar biasa). Triad operator/yang-dikenakan daripada Bab 1 kembali, kini dengan kana sendiri sebagai operator."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 24, pdfPages: [123, 127] },
      en: "Kana wa akhawatuha fall into three groups by how freely they operate. (1) Unconditioned — كَانَ، أَصْبَحَ، أَضْحَى، أَمْسَى، ظَلَّ، بَاتَ، صَارَ، لَيْسَ — operate with no preceding condition at all. (2) Conditioned on negation, prohibition, or wish — بَرِحَ، زَالَ، فَتِئَ، انْفَكَّ — only operate as deficient verbs when preceded by a negative, a prohibition, or a wish (most often مَا, as in مَا زَالَ). (3) دَامَ alone, which only operates when preceded by the masdariyya zarfiyya مَا (مَا دَامَ, roughly \"as long as\"). All of these verbs can also appear as ordinary, complete (tamma) verbs taking an ordinary fa'il — except three that only ever work as deficient verbs: لَيْسَ، مَا زَالَ، مَا فَتِئَ. One more documented nuance: when إلّا enters directly on the khabar of لَيْسَ, its governance can be voided (the following two words simply become mubtada' and khabar again), or kept — the book itself marks keeping the governance as the more correct reading when the two are weighed against each other.",
      ms: "Kana dan saudarinya terbahagi kepada tiga kumpulan mengikut betapa bebas ia beroperasi. (1) Tanpa syarat — كَانَ، أَصْبَحَ، أَضْحَى، أَمْسَى، ظَلَّ، بَاتَ، صَارَ، لَيْسَ — beroperasi tanpa sebarang syarat terdahulu. (2) Bersyarat didahului nafi, larangan, atau doa — بَرِحَ، زَالَ، فَتِئَ، انْفَكَّ — hanya beroperasi sebagai kata kerja tak lengkap apabila didahului nafi, larangan, atau doa (selalunya مَا, seperti dalam مَا زَالَ). (3) دَامَ sahaja, yang hanya beroperasi apabila didahului مَا masdariyyah zarfiyyah (مَا دَامَ, lebih kurang \"selagi\"). Semua kata kerja ini juga boleh muncul sebagai kata kerja biasa, lengkap (tamma) yang mengambil fa'il biasa — kecuali tiga yang hanya berfungsi sebagai kata kerja tak lengkap: لَيْسَ، مَا زَالَ، مَا فَتِئَ. Satu lagi nuansa yang didokumenkan: apabila إلّا memasuki terus khabar لَيْسَ, operasinya boleh dibatalkan (dua perkataan berikutnya kembali menjadi mubtada' dan khabar sahaja), atau dikekalkan — buku itu sendiri menandakan mengekalkan operasi sebagai bacaan yang lebih tepat apabila kedua-duanya ditimbang."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 24, pdfPages: [123, 123] },
      arabic: "كَانَ الطَّقْسُ بَارِدًا",
      gloss: { en: "The weather was cold.", ms: "Cuaca sejuk (pada masa itu)." },
      words: [
        { id: "w1", ar: "كَانَ", role: { en: "deficient verb (kana wa akhawatuha)", ms: "kata kerja tak lengkap (kana dan saudarinya)" }, case: "—", sign: { en: "fi'l madi; itself carries no case ending to track", ms: "fi'l madi; tiada tanda kes sendiri untuk disemak" }, reason: { en: "Enters on a ready-made mubtada'/khabar pair and reassigns their case: the first becomes its ism (raf'), the second its khabar (nasb).", ms: "Memasuki pasangan mubtada'/khabar sedia ada dan menukar semula kesnya: yang pertama menjadi ismnya (raf'), yang kedua khabarnya (nasb)." } },
        { id: "w2", ar: "الطَّقْسُ", role: { en: "ism kana", ms: "ism kana" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "What would have been the mubtada' before kana entered — kana keeps it raf', just relabeled as its ism.", ms: "Apa yang sepatutnya menjadi mubtada' sebelum kana memasuki — kana mengekalkannya raf', cuma dilabel semula sebagai ismnya." } },
        { id: "w3", ar: "بَارِدًا", role: { en: "khabar kana", ms: "khabar kana" }, case: "nasb", sign: { en: "apparent fatha", ms: "fatha zahir" }, reason: { en: "What would have been the khabar before kana entered — kana pushes it from raf' to nasb; this is the one case ending kana genuinely changes.", ms: "Apa yang sepatutnya menjadi khabar sebelum kana memasuki — kana menukarnya daripada raf' kepada nasb; inilah satu-satunya tanda kes yang benar-benar ditukar oleh kana." } }
      ]
    },
    exercises: [
      {
        id: "ex24-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "أَصْبَحَ الطَّالِبُ مُجْتَهِدًا",
        gloss: { en: "The student became diligent.", ms: "Pelajar itu menjadi rajin." },
        question: { en: "What is مُجْتَهِدًا here?", ms: "Apakah مُجْتَهِدًا di sini?" },
        options: [
          { value: "khabar-asbaha", labelEn: "Khabar of أصبح, nasb", labelMs: "Khabar bagi أصبح, nasb" },
          { value: "ism-asbaha", labelEn: "Ism of أصبح, raf'", labelMs: "Ism bagi أصبح, raf'" },
          { value: "fail", labelEn: "Fa'il of أصبح", labelMs: "Fa'il bagi أصبح" }
        ],
        acceptedValues: ["khabar-asbaha"],
        ruleNote: { en: "أصبح is one of the unconditioned group (kana's group) — it keeps الطالب raf' as its ism and pushes مجتهداً to nasb as its khabar, exactly like كان.", ms: "أصبح ialah salah satu kumpulan tanpa syarat (kumpulan kana) — ia mengekalkan الطالب raf' sebagai ismnya dan menukar مجتهداً kepada nasb sebagai khabarnya, sama seperti كان." }
      },
      {
        id: "ex24-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "مَا زَالَ الفَلَّاحُ يَعْمَلُ",
        gloss: { en: "The farmer kept working.", ms: "Petani itu terus bekerja." },
        targetWord: "يَعْمَلُ",
        question: { en: "Give the full analysis of \"يعملُ\".", ms: "Berikan analisis penuh bagi \"يعملُ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "khabar-mazala", labelEn: "Khabar of ما زال (the whole verbal sentence)", labelMs: "Khabar bagi ما زال (keseluruhan ayat kata kerja)" },
            { value: "ism-mazala", labelEn: "Ism of ما زال", labelMs: "Ism bagi ما زال" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "mahalli-nasb", labelEn: "Mahalli nasb (the verb itself stays raf')", labelMs: "Mahalli nasb (kata kerja itu sendiri kekal raf')" },
            { value: "lafzi-raf", labelEn: "Lafzi raf'", labelMs: "Lafzi raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira-verb", labelEn: "Apparent damma (on the verb itself — the mahalli-nasb is positional, not written)", labelMs: "Damma zahir (pada kata kerja itu sendiri — mahalli-nasb adalah kedudukan, bukan tertulis)" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fatha zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "khabar-mazala", case: "mahalli-nasb", sign: "damma-zahira-verb" } ],
        ruleNote: { en: "ما زال is from the negation-conditioned group — زال only works as a deficient verb here because ما precedes it. الفلاح is its ism (raf'); the whole verbal sentence يعمل is its khabar, in mahall nasb — يعمل itself keeps the raf' a mudari' verb normally takes.", ms: "ما زال daripada kumpulan bersyarat-nafi — زال hanya berfungsi sebagai kata kerja tak lengkap di sini kerana didahului ما. الفلاح ialah ismnya (raf'); keseluruhan ayat kata kerja يعمل ialah khabarnya, dalam mahal nasb — يعمل itu sendiri mengekalkan raf' yang biasa diambil kata kerja mudari'." }
      }
    ],
    completion: {
      en: "You can now recognize all three operating conditions of kana wa akhawatuha, identify their ism (raf') and khabar (nasb) even when the khabar is a full verbal sentence, and tell when one of these verbs is working as a deficient operator versus an ordinary complete verb.",
      ms: "Anda kini boleh mengecam ketiga-tiga syarat operasi kana wa akhawatuha, mengenal pasti ism (raf') dan khabar (nasb) mereka walaupun khabar itu ayat kata kerja penuh, dan membezakan bila salah satu kata kerja ini berfungsi sebagai operator tak lengkap berbanding kata kerja lengkap biasa."
    }
  },
  25: {
    chapterId: 25,
    status: "pilot",
    concept: {
      en: "Kada and its sisters are a second family of deficient verbs, parallel to Chapter 24's kana group in mechanics (raf' the ism, nasb the khabar) but different in meaning and in what their khabar must be: always a mudari' verbal sentence, never a noun or adjective directly.",
      ms: "Kada dan saudarinya ialah keluarga kedua kata kerja tak lengkap, selari dengan kumpulan kana Bab 24 dari segi mekanik (raf' ism, nasb khabar) tetapi berbeza dari segi makna dan apa yang mesti menjadi khabarnya: sentiasa ayat kata kerja mudari', tidak sekali-kali kata nama atau sifat terus."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 25, pdfPages: [128, 130] },
      en: "Three sub-groups, by meaning. (1) Af'al al-muqaraba (verbs of approximation — \"nearly did\"): كَادَ، أَوْشَكَ، كَرَبَ. (2) Af'al al-raja' (verbs of hope — \"may it be that\"): عَسَى، حَرَى، اخلولق. (3) Af'al al-shuru' (verbs of inception — \"began to\"): شرع، بدأ، أنشأ، أخذ، جعل، طفق، هب، ابتدأ، انبرى، علق. Their khabar is always a mudari' jumla fi'liyya. With عسى specifically, that mudari' is usually introduced by أنْ (e.g. عَسَى الصَّدِيقُ أنْ يَعُودَ) — the أنْ-plus-mudari' is a masdar mu'awwal, the same mechanism Chapter 10 taught for nasb after أنْ, here filling the khabar slot instead. One more documented pattern: when عسى، أوشك or اخلولق is preceded by an explicit noun or pronoun (rather than starting the sentence), the book allows reading the verb as a complete (tamma) verb — with the noun as plain mubtada' and the whole verb-plus-أنْ-clause as its khabar — and marks this the better reading, though the deficient (naqisa) reading, with a hidden ism matching the noun, stays grammatically valid too.",
      ms: "Tiga sub-kumpulan, mengikut makna. (1) Af'al al-muqaraba (kata kerja penghampiran — \"hampir melakukan\"): كَادَ، أَوْشَكَ، كرب. (2) Af'al al-raja' (kata kerja harapan — \"moga-moga\"): عَسَى، حَرَى، اخلولق. (3) Af'al al-shuru' (kata kerja permulaan — \"mula melakukan\"): شرع، بدأ، أنشأ، أخذ، جعل، طفق، هب، ابتدأ، انبرى، علق. Khabar mereka sentiasa jumla fi'liyya mudari'. Dengan عسى khususnya, mudari' itu biasanya diperkenalkan oleh أنْ (cth. عَسَى الصَّدِيقُ أنْ يَعُودَ) — أنْ-tambah-mudari' ialah masdar mu'awwal, mekanisme yang sama diajar Bab 10 untuk nasb selepas أنْ, di sini mengisi slot khabar pula. Satu lagi corak yang didokumenkan: apabila عسى، أوشك atau اخلولق didahului kata nama atau kata ganti nama jelas (bukannya memulakan ayat), buku membenarkan bacaan kata kerja itu sebagai kata kerja lengkap (tamma) — dengan kata nama itu sebagai mubtada' biasa dan keseluruhan klausa kata kerja-tambah-أنْ sebagai khabarnya — dan menandakan ini bacaan yang lebih baik, walaupun bacaan tak lengkap (naqisa), dengan ism tersembunyi sepadan kata nama itu, kekal sah dari segi tatabahasa."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 25, pdfPages: [129, 129], printedPage: 128 },
      arabic: "سَمِيرٌ أَوْشَكَ أَنْ يَنْجَحَ",
      gloss: { en: "Samir is about to succeed.", ms: "Samir hampir berjaya." },
      words: [
        { id: "w1", ar: "سَمِيرٌ", role: { en: "mubtada'", ms: "mubtada'" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "Stays an ordinary mubtada' under the reading given here: أوشك's own ism is a hidden pronoun agreeing with Samir, not Samir itself.", ms: "Kekal mubtada' biasa di bawah bacaan yang diberikan di sini: ism أوشك sendiri ialah kata ganti nama tersembunyi yang sepadan dengan Samir, bukan Samir itu sendiri." } },
        { id: "w2", ar: "أَوْشَكَ", role: { en: "deficient verb (kada's group — approximation)", ms: "kata kerja tak lengkap (kumpulan kada — penghampiran)" }, case: "—", sign: { en: "fi'l madi; its ism is a hidden huwa", ms: "fi'l madi; ismnya huwa tersembunyi" }, reason: { en: "Reads here as naqisa (deficient): its own ism is an implied هو referring back to Samir, and what follows is its khabar — not a fa'il, as it would be if read as a complete verb.", ms: "Dibaca di sini sebagai naqisa (tak lengkap): ismnya sendiri ialah هو tersirat merujuk kembali kepada Samir, dan apa yang mengikutinya ialah khabarnya — bukan fa'il, seperti jika dibaca sebagai kata kerja lengkap." } },
        { id: "w3", ar: "أَنْ يَنْجَحَ", role: { en: "khabar of أوشك (masdar mu'awwal)", ms: "khabar bagi أوشك (masdar mu'awwal)" }, case: "mahalli nasb", sign: { en: "أنْ nasb-marks the mudari' with fatha; the masdar mu'awwal itself has no written ending of its own", ms: "أنْ menanda-nasb mudari' dengan fatha; masdar mu'awwal itu sendiri tiada tanda tertulis sendiri" }, reason: { en: "أنْ + mudari' resolves to a masdar (\"his succeeding\"), filling the khabar slot that kada-group verbs require to be a mudari' clause — the same أنْ-nasb mechanism Chapter 10 taught, reused here as a khabar rather than a maf'ul bih.", ms: "أنْ + mudari' terurai kepada masdar (\"kejayaannya\"), mengisi slot khabar yang diperlukan kata kerja kumpulan kada menjadi klausa mudari' — mekanisme أنْ-nasb yang sama diajar Bab 10, digunakan semula di sini sebagai khabar dan bukan maf'ul bih." } }
      ],
      dualAnalysis: {
        note: { en: "When a noun or pronoun comes before أوشك/عسى/اخلولق like this, the book also allows the opposite reading: treat أوشك as a complete (tamma) verb, Samir as a plain mubtada', and the whole \"أوشك أن ينجح\" as a verbal-sentence khabar — where أوشك's own fa'il is now the أنْ-clause itself (\"his succeeding approached\").", ms: "Apabila kata nama atau kata ganti nama datang sebelum أوشك/عسى/اخلولق begini, buku turut membenarkan bacaan sebaliknya: anggap أوشك sebagai kata kerja lengkap (tamma), Samir sebagai mubtada' biasa, dan keseluruhan \"أوشك أن ينجح\" sebagai khabar ayat kata kerja — di mana fa'il أوشك sendiri kini ialah klausa أنْ itu (\"kejayaannya hampir berlaku\")." },
        ranking: { en: "The source calls this complete-verb reading the better one (أفضل) whenever the kada-sister verb is preceded by an explicit noun or pronoun, while the deficient-verb reading shown above — needed to actually demonstrate kada wa akhawatuha raising an ism and nasb'ing a khabar — stays permitted (جاز) alongside it.", ms: "Sumber menyebut bacaan kata kerja lengkap ini sebagai yang lebih baik (أفضل) apabila kata kerja saudari-kada didahului kata nama atau kata ganti nama jelas, manakala bacaan tak lengkap yang ditunjukkan di atas — diperlukan untuk benar-benar menunjukkan kada wa akhawatuha menaikkan ism dan men-nasb-kan khabar — kekal dibenarkan (جاز) bersamanya." }
      }
    },
    exercises: [
      {
        id: "ex25-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "كَادَ المَطَرُ يَتَوَقَّفُ",
        gloss: { en: "The rain almost stopped.", ms: "Hujan hampir berhenti." },
        question: { en: "What is يتوقفُ here?", ms: "Apakah يَتَوَقَّفُ di sini?" },
        options: [
          { value: "khabar-kada", labelEn: "Khabar of كاد, in mahall nasb", labelMs: "Khabar bagi كاد, dalam mahal nasb" },
          { value: "fail-kada", labelEn: "Fa'il of كاد", labelMs: "Fa'il bagi كاد" },
          { value: "ism-kada", labelEn: "Ism of كاد", labelMs: "Ism bagi كاد" }
        ],
        acceptedValues: ["khabar-kada"],
        ruleNote: { en: "كاد is af'al al-muqaraba (approximation) — its khabar must be a mudari' jumla fi'liyya, in mahall nasb; يتوقف itself keeps the raf' a mudari' verb normally takes.", ms: "كاد ialah af'al al-muqaraba (penghampiran) — khabarnya mesti jumla fi'liyya mudari', dalam mahal nasb; يتوقف itu sendiri mengekalkan raf' yang biasa diambil kata kerja mudari'." }
      },
      {
        id: "ex25-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "أَخَذَ الطِّفْلُ يَبْكِي",
        gloss: { en: "The child began to cry.", ms: "Kanak-kanak itu mula menangis." },
        targetWord: "يَبْكِي",
        question: { en: "Give the full analysis of \"يبكي\".", ms: "Berikan analisis penuh bagi \"يبكي\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "khabar-akhadha", labelEn: "Khabar of أخذ", labelMs: "Khabar bagi أخذ" },
            { value: "ism-akhadha", labelEn: "Ism of أخذ", labelMs: "Ism bagi أخذ" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "mahalli-nasb", labelEn: "Mahalli nasb (the verb itself stays raf')", labelMs: "Mahalli nasb (kata kerja itu sendiri kekal raf')" },
            { value: "lafzi-raf", labelEn: "Lafzi raf'", labelMs: "Lafzi raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira-verb", labelEn: "Apparent damma (on the verb itself)", labelMs: "Damma zahir (pada kata kerja itu sendiri)" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fatha zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "khabar-akhadha", case: "mahalli-nasb", sign: "damma-zahira-verb" } ],
        ruleNote: { en: "أخذ is one of the af'al al-shuru' (inception) group — like كاد, its khabar is a bare mudari' jumla (no أنْ needed), in mahall nasb; يبكي itself keeps the raf' a mudari' verb normally takes.", ms: "أخذ ialah salah satu kumpulan af'al al-shuru' (permulaan) — seperti كاد, khabarnya jumla mudari' kosong (tiada أنْ diperlukan), dalam mahal nasb; يبكي itu sendiri mengekalkan raf' yang biasa diambil kata kerja mudari'." }
      }
    ],
    completion: {
      en: "You can now sort kada wa akhawatuha into its three meaning-groups (approximation, hope, inception), explain why their khabar must be a mudari' clause, and recognize the complete-vs-deficient reading choice the book allows when a noun precedes one of these verbs.",
      ms: "Anda kini boleh menyusun kada wa akhawatuha kepada tiga kumpulan makna (penghampiran, harapan, permulaan), menjelaskan mengapa khabar mereka mesti klausa mudari', dan mengecam pilihan bacaan lengkap-berbanding-tak-lengkap yang dibenarkan buku apabila kata nama mendahului salah satu kata kerja ini."
    }
  },
  26: {
    chapterId: 26,
    status: "pilot",
    concept: {
      en: "Four particles — مَا، لَا، لَاتَ، إِنْ — borrow Chapter 24's لَيْسَ exactly: they enter a nominal sentence, raise the first word as their ism, and nasb the second as their khabar, all while adding their own flavor of negation.",
      ms: "Empat huruf — مَا، لَا، لَاتَ، إِنْ — meminjam لَيْسَ Bab 24 secara tepat: ia memasuki ayat nominal, menaikkan perkataan pertama sebagai ismnya, dan men-nasb-kan perkataan kedua sebagai khabarnya, sambil menambah citarasa nafi mereka sendiri."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 26, pdfPages: [131, 133] },
      en: "All four are negation particles that borrow لَيْسَ's governance (raf' ism, nasb khabar) while keeping their own meaning. A few documented limits and patterns: if إلّا enters on the khabar of إِنْ, the same voiding pattern Chapter 24 noted for لَيْسَ applies again — governance is nullified, and both words fall back to being plain mubtada' and khabar. With لَا specifically, the book actually prefers leaving it un-operating altogether, with both following words simply raf' as mubtada' and khabar — operating like لَيْسَ is grammatically allowed, but not the first choice. لَاتَ is لَا itself with a tightening ة added for emphasis of the negation; unusually, it is normally its ISM that gets dropped (not its khabar), understood from context. Important distinction to keep straight: this لَا (resembling لَيْسَ) gives an ordinary, fully mu'rab raf'/nasb pair — it is not the same particle as لَا of categorical negation (Chapter 28), which looks identical but mabni's its ism and means something stronger (\"no X of any kind exists\" rather than simply \"X is not Y\").",
      ms: "Keempat-empatnya ialah huruf nafi yang meminjam operasi لَيْسَ (raf' ism, nasb khabar) sambil mengekalkan makna sendiri. Beberapa had dan corak yang didokumenkan: jika إلّا memasuki khabar إِنْ, corak pembatalan yang sama dicatat Bab 24 untuk لَيْسَ berlaku semula — operasi dibatalkan, dan kedua-dua perkataan kembali menjadi mubtada' dan khabar biasa. Dengan لَا khususnya, buku sebenarnya lebih suka membiarkannya tidak beroperasi langsung, dengan kedua-dua perkataan berikutnya raf' sahaja sebagai mubtada' dan khabar — beroperasi seperti لَيْسَ dibenarkan dari segi tatabahasa, tetapi bukan pilihan pertama. لَاتَ ialah لَا itu sendiri dengan ة penguat ditambah untuk menegaskan nafi; luar biasa, biasanya ISMnya yang digugurkan (bukan khabarnya), difahami daripada konteks. Perbezaan penting untuk dikekalkan: لَا ini (menyerupai لَيْسَ) memberi pasangan raf'/nasb biasa, mu'rab sepenuhnya — ia bukan huruf yang sama dengan لَا penafian kategori (Bab 28), yang kelihatan serupa tetapi mem-mabni-kan ismnya dan bermaksud sesuatu yang lebih kuat (\"tiada X jenis apa pun wujud\" berbanding sekadar \"X bukan Y\")."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 26, pdfPages: [131, 131] },
      arabic: "مَا الكَسْلَانُ مَشْكُورًا",
      gloss: { en: "The lazy one is not praised.", ms: "Si pemalas tidak dipuji." },
      words: [
        { id: "w1", ar: "مَا", role: { en: "negation particle, operates like laysa", ms: "huruf nafi, beroperasi seperti laysa" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Borrows لَيْسَ's governance exactly: raf' the first word as its ism, nasb the second as its khabar.", ms: "Meminjam operasi لَيْسَ secara tepat: raf' perkataan pertama sebagai ismnya, nasb perkataan kedua sebagai khabarnya." } },
        { id: "w2", ar: "الكَسْلَانُ", role: { en: "ism ما", ms: "ism ما" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The sentence's subject — raf' exactly as it would be as an ordinary mubtada', before ما entered.", ms: "Subjek ayat — raf' sepertimana ia menjadi mubtada' biasa, sebelum ما memasuki." } },
        { id: "w3", ar: "مَشْكُورًا", role: { en: "khabar ما", ms: "khabar ما" }, case: "nasb", sign: { en: "apparent fatha", ms: "fatha zahir" }, reason: { en: "Pushed from the raf' an ordinary khabar would take to nasb — this is the one ending ما actually changes, exactly like لَيْسَ.", ms: "Ditukar daripada raf' yang diambil khabar biasa kepada nasb — inilah satu-satunya tanda yang sebenarnya ditukar oleh ما, sama seperti لَيْسَ." } }
      ]
    },
    exercises: [
      {
        id: "ex26-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "لَا الكَسُولُ مَحْبُوبًا",
        gloss: { en: "The lazy person is not loved.", ms: "Si pemalas tidak disayangi." },
        question: { en: "What is محبوبًا here?", ms: "Apakah محبوبًا di sini?" },
        options: [
          { value: "khabar-la", labelEn: "Khabar of لا (resembling ليس), nasb", labelMs: "Khabar bagi لا (menyerupai ليس), nasb" },
          { value: "ism-la", labelEn: "Ism of لا, raf'", labelMs: "Ism bagi لا, raf'" },
          { value: "na't", labelEn: "Na't of الكسول", labelMs: "Na't bagi الكسول" }
        ],
        acceptedValues: ["khabar-la"],
        ruleNote: { en: "This لا resembles ليس — an ordinary, fully mu'rab raf'-ism/nasb-khabar pair, not the mabni لا of categorical negation taught in Chapter 28.", ms: "لا ini menyerupai ليس — pasangan ism-raf'/khabar-nasb biasa, mu'rab sepenuhnya, bukan لا mabni penafian kategori yang diajar dalam Bab 28." }
      },
      {
        id: "ex26-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "إِنْ الفَتَاةُ إِلَّا مُجْتَهِدَةٌ",
        gloss: { en: "The girl is nothing but diligent.", ms: "Gadis itu tidak lain hanyalah rajin." },
        targetWord: "مُجْتَهِدَةٌ",
        question: { en: "Give the full analysis of \"مجتهدةٌ\".", ms: "Berikan analisis penuh bagi \"مجتهدةٌ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "khabar-mubtada", labelEn: "Khabar of an ordinary mubtada' (إنْ's governance voided)", labelMs: "Khabar bagi mubtada' biasa (operasi إنْ dibatalkan)" },
            { value: "khabar-in", labelEn: "Khabar of إنْ, nasb", labelMs: "Khabar bagi إنْ, nasb" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "raf", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fatha zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "khabar-mubtada", case: "raf", sign: "damma-zahira" } ],
        ruleNote: { en: "When إلّا enters on the khabar of إِنْ (or of لَيْسَ, Chapter 24), its governance is nullified — الفتاة stays an ordinary mubtada', and مجتهدة is simply its khabar, both raf', not nasb.", ms: "Apabila إلّا memasuki khabar إِنْ (atau لَيْسَ, Bab 24), operasinya dibatalkan — الفتاة kekal mubtada' biasa, dan مجتهدة sekadar khabarnya, kedua-duanya raf', bukan nasb." }
      }
    ],
    completion: {
      en: "You can now recognize ما، لا، لاتَ and إنْ operating like لَيْسَ, explain when إلّا voids that governance (the same pattern Chapter 24 introduced), and tell this mu'rab لا apart from the mabni لا النافية للجنس Chapter 28 teaches next.",
      ms: "Anda kini boleh mengecam ما، لا، لاتَ dan إنْ beroperasi seperti لَيْسَ, menjelaskan bila إلّا membatalkan operasi itu (corak yang sama diperkenalkan Bab 24), dan membezakan لا mu'rab ini daripada لا mabni penafian kategori yang diajar Bab 28 seterusnya."
    }
  },
  27: {
    chapterId: 27,
    status: "pilot",
    concept: {
      en: "Six particles — إنّ، أنّ، كأنّ، لكنّ، ليت، لعلّ — enter a nominal sentence and do the opposite of Chapter 24's kana group: they nasb the first word as their ism, and leave the second raf' as their khabar.",
      ms: "Enam huruf — إنّ، أنّ، كأنّ، لكنّ، ليت، لعلّ — memasuki ayat nominal dan melakukan KEBALIKAN kumpulan kana Bab 24: mereka men-nasb-kan perkataan pertama sebagai ismnya, dan membiarkan perkataan kedua raf' sebagai khabarnya."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 27, pdfPages: [134, 138] },
      en: "Each particle carries its own meaning: إنّ/أنّ emphasize (tawkid) a statement the listener might doubt; كأنّ compares (tashbih, \"as if\"); لكنّ contrasts (istidrak, \"but\"); ليت wishes for something unlikely or impossible (tamanni); لعلّ hopes for something possible (tarajji). Two documented patterns recur across all six. First, attaching ما to any of them cancels their governance entirely (إنّما، أنّما، كأنّما، لكنّما) — what follows simply stays an ordinary raf'-raf' mubtada'/khabar pair; إنّما and أنّما specifically become pure emphasis-and-restriction particles this way. Second, lightening the shadda (إنْ، أنْ، كأنْ) changes their behavior: for إنْ/أنْ/كأنْ, the ism becomes a hidden \"pronoun of the situation\" (damir al-sha'n) and what follows is their khabar; لكنْ, lightened, instead drops its governance altogether and becomes a plain, non-operating connector, best paired with و.",
      ms: "Setiap huruf membawa makna sendiri: إنّ/أنّ menegaskan (tawkid) kenyataan yang mungkin diragui pendengar; كأنّ membandingkan (tashbih, \"seolah-olah\"); لكنّ membezakan (istidrak, \"tetapi\"); ليت mengharapkan sesuatu yang tidak mungkin atau mustahil (tamanni); لعلّ mengharapkan sesuatu yang mungkin (tarajji). Dua corak yang didokumenkan berulang pada keenam-enamnya. Pertama, melekatkan ما pada mana-mana satu membatalkan operasinya sepenuhnya (إنّما، أنّما، كأنّما، لكنّما) — apa yang mengikutinya kekal sebagai pasangan mubtada'/khabar raf'-raf' biasa; إنّما dan أنّما khususnya menjadi huruf penegasan-dan-pembatasan tulen dengan cara ini. Kedua, meringankan shadda (إنْ، أنْ، كأنْ) mengubah kelakuannya: untuk إنْ/أنْ/كأنْ, ism menjadi \"kata ganti nama keadaan\" tersembunyi (damir al-sha'n) dan apa yang mengikutinya ialah khabarnya; لكنْ, apabila diringankan, sebaliknya menggugurkan operasinya sepenuhnya dan menjadi penghubung biasa, tidak beroperasi, terbaik dipasangkan dengan و."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 27, pdfPages: [134, 134] },
      arabic: "إِنَّ الطَّقْسَ جَمِيلٌ",
      gloss: { en: "Indeed the weather is beautiful.", ms: "Sesungguhnya cuaca itu indah." },
      words: [
        { id: "w1", ar: "إِنَّ", role: { en: "emphasis particle (inna wa akhawatuha)", ms: "huruf penegasan (inna dan saudarinya)" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "The mirror image of Chapter 24's kana: nasb the first word as its ism, leave the second raf' as its khabar.", ms: "Bayangan cermin kana Bab 24: nasb perkataan pertama sebagai ismnya, biarkan perkataan kedua raf' sebagai khabarnya." } },
        { id: "w2", ar: "الطَّقْسَ", role: { en: "ism إنّ", ms: "ism إنّ" }, case: "nasb", sign: { en: "apparent fatha", ms: "fatha zahir" }, reason: { en: "What would have been the mubtada' — إنّ pushes it from raf' to nasb; compare Chapter 24's كَانَ الطَّقْسُ, where the same word stayed raf'.", ms: "Apa yang sepatutnya menjadi mubtada' — إنّ menukarnya daripada raf' kepada nasb; bandingkan كَانَ الطَّقْسُ Bab 24, di mana perkataan yang sama kekal raf'." } },
        { id: "w3", ar: "جَمِيلٌ", role: { en: "khabar إنّ", ms: "khabar إنّ" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "What would have been the khabar stays raf' — unlike kana's group, إنّ's group never touches the khabar's case.", ms: "Apa yang sepatutnya menjadi khabar kekal raf' — tidak seperti kumpulan kana, kumpulan إنّ tidak pernah menyentuh kes khabar." } }
      ]
    },
    exercises: [
      {
        id: "ex27-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "لَيْتَ الفُرْصَةَ عَائِدَةٌ",
        gloss: { en: "If only the opportunity would return.", ms: "Alangkah baiknya jika peluang itu kembali." },
        question: { en: "What is الفُرصَةَ here?", ms: "Apakah الفُرْصَةَ di sini?" },
        options: [
          { value: "ism-layta", labelEn: "Ism of ليت, nasb", labelMs: "Ism bagi ليت, nasb" },
          { value: "khabar-layta", labelEn: "Khabar of ليت, raf'", labelMs: "Khabar bagi ليت, raf'" },
          { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
        ],
        acceptedValues: ["ism-layta"],
        ruleNote: { en: "ليت expresses tamanni (a wish for something unlikely or impossible) and, like all six of inna's sisters, nasb's its ism — الفرصة — and leaves its khabar raf'.", ms: "ليت menyatakan tamanni (harapan terhadap sesuatu yang tidak mungkin atau mustahil) dan, seperti keenam-enam saudari إنّ, men-nasb-kan ismnya — الفرصة — dan membiarkan khabarnya raf'." }
      },
      {
        id: "ex27-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "لَعَلَّ النَّجَاحَ قَرِيبٌ",
        gloss: { en: "Perhaps success is near.", ms: "Mungkin kejayaan sudah hampir." },
        targetWord: "قَرِيبٌ",
        question: { en: "Give the full analysis of \"قريبٌ\".", ms: "Berikan analisis penuh bagi \"قريبٌ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "khabar-laalla", labelEn: "Khabar of لعل, raf'", labelMs: "Khabar bagi لعل, raf'" },
            { value: "ism-laalla", labelEn: "Ism of لعل, nasb", labelMs: "Ism bagi لعل, nasb" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "raf", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fatha zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "khabar-laalla", case: "raf", sign: "damma-zahira" } ],
        ruleNote: { en: "لعلّ expresses tarajji (hope for something possible) and follows the same nasb-ism/raf'-khabar pattern as all six particles in this family — النجاح is nasb as its ism, قريبٌ stays raf' as its khabar.", ms: "لعلّ menyatakan tarajji (harapan terhadap sesuatu yang mungkin) dan mengikut corak nasb-ism/raf'-khabar yang sama seperti keenam-enam huruf dalam keluarga ini — النجاح nasb sebagai ismnya, قريبٌ kekal raf' sebagai khabarnya." }
      }
    ],
    completion: {
      en: "You can now identify all six of inna's sisters, contrast their nasb-ism/raf'-khabar pattern with kana's opposite raf'-ism/nasb-khabar (Chapter 24), and recognize how attaching ما or lightening the shadda changes — or cancels — their governance.",
      ms: "Anda kini boleh mengenal pasti keenam-enam saudari إنّ, membandingkan corak nasb-ism/raf'-khabar mereka dengan corak bertentangan kana raf'-ism/nasb-khabar (Bab 24), dan mengecam bagaimana melekatkan ما atau meringankan shadda mengubah — atau membatalkan — operasi mereka."
    }
  },
  28: {
    chapterId: 28,
    status: "pilot",
    concept: {
      en: "La al-nafiya lil-jins (\"la\" of categorical negation) is a seventh operator borrowed almost entirely from Chapter 27's إنّ: it enters a nominal sentence, nasb's the first word as its ism, and leaves the second raf' as its khabar — but where إنّ emphasizes a single case, لا here denies an entire category outright (\"no X of any kind exists\").",
      ms: "لا النافية للجنس (\"لا\" penafian kategori) ialah operator ketujuh yang dipinjam hampir sepenuhnya daripada إنّ Bab 27: ia memasuki ayat nominal, men-nasb-kan perkataan pertama sebagai ismnya, dan membiarkan perkataan kedua raf' sebagai khabarnya — tetapi jika إنّ menegaskan satu kes, لا di sini menafikan keseluruhan kategori terus terang (\"tiada X jenis apa pun wujud\")."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 28, pdfPages: [139, 145] },
      en: "Three conditions must all hold for لا to operate this way: its ism and khabar must both be indefinite (nakira); nothing may separate لا from its ism; and no preposition may enter on لا itself. The ism's own i'rab then splits in two. If the ism is mufrad (standing alone — not mudaf, not shibh al-mudaf, even if it happens to be dual or plural in form), it is mabni on fatha, in mahall nasb as ism لا — and the whole \"لا + ism\" compound together sits in mahall raf', the position a mubtada' would occupy. If the ism is mudaf or shibh al-mudaf (mudaf-like, such as a noun followed by its own object), it is fully mu'rab and nasb instead, written with a normal fatha. A documented triple pattern completes the picture: when a mabni ism of لا is directly followed by an attached na't, the book states the na't may take any of three endings — fatha (mabni, matching its mabni manʿut, as shown below), raf' (matching the mahall of the whole \"لا + ism\" compound as if it were a marfu' subject), or nasb (matching the ism's own underlying case, as if لا were simply nasb-ing it the way إنّ would). All three are explicitly permitted (جاز) with no stated preference between them — though when explaining why the fatha-reading itself carries no tanwin, the book offers three competing justifications (adjacency to its mabni neighbor; the whole compound behaving like a fixed numeral such as khamsata 'ashar; or it genuinely being the nasb ending, just written without tanwin to match its neighbor's vowel) and explicitly calls that third explanation \"the soundest of the sayings\" (أسلم الأقوال).",
      ms: "Tiga syarat mesti semuanya dipenuhi untuk لا beroperasi begini: ism dan khabarnya mesti kedua-duanya nakirah; tiada apa boleh memisahkan لا daripada ismnya; dan tiada kata sendi boleh memasuki لا itu sendiri. I'rab ism itu sendiri kemudian terbahagi dua. Jika ism itu mufrad (berdiri sendiri — bukan mudaf, bukan shibh al-mudaf, walaupun ia kebetulan berbentuk dwi atau jamak), ia mabni atas fatha, dalam mahal nasb sebagai ism لا — dan keseluruhan gabungan \"لا + ism\" bersama-sama duduk dalam mahal raf', kedudukan yang sepatutnya diduduki mubtada'. Jika ism itu mudaf atau shibh al-mudaf (seperti mudaf, seperti kata nama diikuti objeknya sendiri), ia mu'rab sepenuhnya dan nasb sebaliknya, ditulis dengan fatha biasa. Corak tiga-serangkai yang didokumenkan melengkapkan gambaran: apabila ism mabni لا diikuti terus oleh na't yang melekat, buku menyatakan na't boleh mengambil mana-mana daripada tiga penghujung — fatha (mabni, sepadan manʿut mabninya, seperti ditunjukkan di bawah), raf' (sepadan mahal keseluruhan gabungan \"لا + ism\" seolah-olah ia subjek marfu'), atau nasb (sepadan kes asal ism itu sendiri, seolah-olah لا hanya men-nasb-kannya seperti yang dilakukan إنّ). Ketiga-tiganya dibenarkan secara jelas (جاز) tanpa keutamaan dinyatakan antara mereka — walaupun apabila menjelaskan mengapa bacaan-fatha itu sendiri tidak membawa tanwin, buku menawarkan tiga justifikasi bersaing (kejiranan dengan jirannya yang mabni; keseluruhan gabungan berkelakuan seperti nombor tetap seperti khamsata 'ashar; atau ia sebenarnya tanda nasb, cuma ditulis tanpa tanwin untuk sepadan dengan vokal jirannya) dan secara jelas menamakan penjelasan ketiga itu \"yang paling tepat daripada pendapat-pendapat\" (أسلم الأقوال)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 28, pdfPages: [142, 142], printedPage: 141 },
      arabic: "لَا رَجُلَ كَرِيمَ عِنْدَنَا",
      gloss: { en: "There is no generous man among us.", ms: "Tiada lelaki pemurah di kalangan kami." },
      words: [
        { id: "w1", ar: "لَا", role: { en: "la of categorical negation (la al-nafiya lil-jins)", ms: "la penafian kategori (la al-nafiya lil-jins)" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Operates like إنّ (Chapter 27): nasb the ism, raf' the khabar — but denies the entire category, not just one instance.", ms: "Beroperasi seperti إنّ (Bab 27): nasb ism, raf' khabar — tetapi menafikan keseluruhan kategori, bukan sekadar satu kejadian." } },
        { id: "w2", ar: "رَجُلَ", role: { en: "ism لا", ms: "ism لا" }, case: "nasb (mahalli)", sign: { en: "mabni on fatha (mufrad — not mudaf); in mahall nasb as ism لا, with the whole لا+ism compound in mahall raf' as mubtada'", ms: "mabni atas fatha (mufrad — bukan mudaf); dalam mahal nasb sebagai ism لا, dengan keseluruhan gabungan لا+ism dalam mahal raf' sebagai mubtada'" }, reason: { en: "Mufrad (standing alone, no mudaf), so it is mabni rather than carrying a written nasb ending — the position, not the letter, carries the case here.", ms: "Mufrad (berdiri sendiri, tiada mudaf), maka ia mabni dan bukannya membawa tanda nasb bertulis — kedudukan, bukan huruf, membawa kes di sini." } },
        { id: "w3", ar: "كَرِيمَ", role: { en: "na't of رجل", ms: "na't bagi رجل" }, case: "mabni (fatha)", sign: { en: "mabni on fatha, matching its mabni manʿut", ms: "mabni atas fatha, sepadan manʿut mabninya" }, reason: { en: "A directly-attached na't of a mabni ism لا may be mabni (matching رجل's own fatha, as shown here), raf' (matching the compound's own mahall), or nasb (matching رجل's underlying case) — all three are documented as valid for this exact configuration.", ms: "Na't yang melekat terus kepada ism mabni لا boleh mabni (sepadan fatha رجل sendiri, seperti ditunjukkan di sini), raf' (sepadan mahal gabungan itu sendiri), atau nasb (sepadan kes asal رجل) — ketiga-tiganya didokumenkan sah untuk konfigurasi tepat ini." } },
        { id: "w4", ar: "عِنْدَنَا", role: { en: "khabar لا (zarf + implied predicate)", ms: "khabar لا (zarf + predikat tersirat)" }, case: "nasb (the zarf) / mahalli raf' (as khabar)", sign: { en: "zarf, mansub on the zarfiyya; muta'alliq to an elided khabar (taqdiruhu: mawjud)", ms: "zarf, mansub atas zarfiyyah; berkait dengan khabar tergugur (taqdirnya: mawjud)" }, reason: { en: "لا's khabar is implied here (\"exists\"/\"mawjud\"), with عندنا — mudaf to the attached نا — standing in for it, the same elided-khabar pattern Chapter 23 and Chapter 24 both used for a zarf/jar-majrur predicate.", ms: "Khabar لا tersirat di sini (\"wujud\"/\"mawjud\"), dengan عندنا — mudaf kepada نا yang melekat — mewakilinya, corak khabar tergugur yang sama digunakan Bab 23 dan Bab 24 untuk predikat zarf/jar-majrur." } }
      ],
      dualAnalysis: {
        note: { en: "Per the rule above, the same sentence's na't كريمَ could instead be written raf' as كَريمٌ (matching the mahall of the whole \"لا رجلَ\" compound, as if it were a marfu' subject) or nasb as كَريمًا (matching رجل's own underlying nasb case, the way it would behave under إنّ). The book states all three spellings describe the exact same sentence.", ms: "Mengikut peraturan di atas, na't yang sama كريمَ boleh juga ditulis raf' sebagai كَريمٌ (sepadan mahal keseluruhan gabungan \"لا رجلَ\", seolah-olah ia subjek marfu') atau nasb sebagai كَريمًا (sepadan kes asal رجل sendiri, caranya ia akan berkelakuan di bawah إنّ). Buku menyatakan ketiga-tiga ejaan menggambarkan ayat yang sama tepat." },
        ranking: { en: "No single ending is preferred among the three (all are introduced with جاز, \"it is permitted\") — but the book does rank the explanations for why the fatha-form shown above takes no tanwin, naming the \"it's really the nasb ending, just unmarked for vowel-harmony with its neighbor\" explanation أسلم الأقوال, \"the soundest of the sayings,\" ahead of the other two (adjacency-binding, and analogy to fixed compounds like khamsata 'ashar).", ms: "Tiada satu penghujung diutamakan antara ketiga-tiganya (semua diperkenalkan dengan جاز, \"ia dibenarkan\") — tetapi buku memang menyusun penjelasan mengapa bentuk-fatha di atas tidak membawa tanwin, menamakan penjelasan \"ia sebenarnya tanda nasb, cuma tidak bertanda untuk keharmonian vokal dengan jirannya\" sebagai أسلم الأقوال, \"yang paling tepat daripada pendapat-pendapat,\" mendahului dua penjelasan lain (ikatan kejiranan, dan analogi dengan gabungan tetap seperti khamsata 'ashar)." }
      }
    },
    exercises: [
      {
        id: "ex28-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "لَا كَسُولَ مَحْبُوبٌ",
        gloss: { en: "No lazy person is beloved.", ms: "Tiada orang pemalas yang disayangi." },
        question: { en: "What is كَسولَ here?", ms: "Apakah كَسُولَ di sini?" },
        options: [
          { value: "ism-la", labelEn: "Ism of لا, mabni fatha, in mahall nasb", labelMs: "Ism bagi لا, mabni fatha, dalam mahal nasb" },
          { value: "khabar-la", labelEn: "Khabar of لا, raf'", labelMs: "Khabar bagi لا, raf'" },
          { value: "na't", labelEn: "Na't", labelMs: "Na't" }
        ],
        acceptedValues: ["ism-la"],
        ruleNote: { en: "كسولَ is mufrad (not mudaf), so like رجلَ in the lesson above it is mabni on fatha, in mahall nasb as ism لا — while the لا+ism compound together sits in mahall raf' as mubtada'.", ms: "كسولَ ialah mufrad (bukan mudaf), maka seperti رجلَ dalam pelajaran di atas, ia mabni atas fatha, dalam mahal nasb sebagai ism لا — manakala gabungan لا+ism bersama-sama duduk dalam mahal raf' sebagai mubtada'." }
      },
      {
        id: "ex28-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "لَا طَالِبَ عِلْمٍ كَسُولٌ",
        gloss: { en: "No seeker of knowledge is lazy.", ms: "Tiada penuntut ilmu yang malas." },
        targetWord: "طَالِبَ",
        question: { en: "Give the full analysis of \"طالبَ\".", ms: "Berikan analisis penuh bagi \"طالبَ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "ism-la", labelEn: "Ism of لا", labelMs: "Ism bagi لا" },
            { value: "khabar-la", labelEn: "Khabar of لا", labelMs: "Khabar bagi لا" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb (fully mu'rab — not mabni)", labelMs: "Nasb (mu'rab sepenuhnya — bukan mabni)" },
            { value: "mabni-fatha", labelEn: "Mabni on fatha", labelMs: "Mabni atas fatha" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha (ordinary nasb marker)", labelMs: "Fatha zahir (tanda nasb biasa)" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "ism-la", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "طالب is mudaf (to علم), so unlike a mufrad ism لا it is not mabni — it is fully mu'rab and nasb, written with an ordinary fatha, exactly as the rule's second case predicts.", ms: "طالب ialah mudaf (kepada علم), maka tidak seperti ism لا mufrad, ia TIDAK mabni — ia mu'rab sepenuhnya dan nasb, ditulis dengan fatha biasa, tepat seperti yang diramalkan kes kedua peraturan itu." }
      }
    ],
    completion: {
      en: "You can now apply all three conditions for لا النافية للجنس to operate, tell a mabni (mufrad) ism لا apart from a mu'rab (mudaf) one, and explain the three valid endings a na't can take after a mabni ism لا — including which of the three competing explanations for the fatha-reading the book itself calls soundest.",
      ms: "Anda kini boleh menggunakan ketiga-tiga syarat untuk لا النافية للجنس beroperasi, membezakan ism لا mabni (mufrad) daripada yang mu'rab (mudaf), dan menjelaskan tiga penghujung sah yang boleh diambil na't selepas ism لا mabni — termasuk yang mana antara tiga penjelasan bersaing untuk bacaan-fatha dipanggil buku itu sendiri sebagai paling tepat."
    }
  },

  // ==================================================================
  // TIER 4 — built in this pass. Source: مرجع الطالب في الإعراب.
  // Chapter 29 above was extended (not inserted here) to cover its
  // remaining four object types as part of this same pass — see the
  // comment above QILessons[29] and the Tier 4 report for detail.
  // Chapters 36 and 37 below are new, full lessons (guided +
  // independent exercises, hasLesson:true in curriculum.js).
  // ==================================================================

  // ------------------------------------------------------------------
  // Chapter 36 — إعراب التمييز (Tamyiz)
  // ------------------------------------------------------------------
  36: {
    chapterId: 36,
    status: "pilot",
    concept: {
      en: "Tamyiz removes an ambiguity by naming what a preceding number, measure, or vague noun actually refers to — a cloth is a cloth until you say جُوخًا (wool); a cup is a cup until you say مَاءً (water). It comes in two kinds: tamyiz al-tafsir, which explains the dhat (the thing itself), and tamyiz al-ta'kid, which confirms it.",
      ms: "Tamyiz menghapuskan kekaburan dengan menamakan apa yang sebenarnya dirujuk oleh nombor, sukatan, atau kata nama kabur yang mendahuluinya — kain hanyalah kain sehingga anda sebut جُوخًا (bulu biri-biri); cawan hanyalah cawan sehingga anda sebut مَاءً (air). Ia terbahagi kepada dua: tamyiz al-tafsir, yang menjelaskan dzat (benda itu sendiri), dan tamyiz al-ta'kid, yang mengesahkannya."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 36, pdfPages: [177, 179] },
      en: "Tamyiz linguistically means \"separating one thing from another\"; it has two kinds — tamyiz al-tafsir (interpretive, clarifying the dhat/identity of what precedes it) and tamyiz al-ta'kid (confirmatory, reinforcing it). The source states its case rule as: tamyiz is nasb when it doesn't follow a singular number from three to ten, or mi'a (100), alf (1000), or milyun (1,000,000) — e.g. قَرَأْتُ أَرْبَعَةَ عَشَرَ كِتَابًا (I read fourteen books — كتابًا is nasb, since 14 isn't in that excluded range).\n\nكم, when used as an interrogative asking \"how many\", has its own forward-position rule (al-sadara): the source notes it's never affected by whatever operator comes before it, unless that operator is a preposition or كم itself is made mudaf — so a whole sentence like هَلْ تَعْرِفُ كَمْ كِتَابًا قَرَأْتَ؟ sits entirely in mahall nasb as the maf'ul bih of تعرف, with كتابًا itself staying simple tamyiz, nasb.\n\nThe source also shows one phrase where the same word can genuinely be read two ways: عِنْدِي خَاتَمٌ فِضَّةً (I have a ring [of] silver) lets فِضَّةً be read either as tamyiz or as hal — both nasb — with the source explicitly calling the tamyiz reading the better one (وَالأَوَّلُ أَفْضَلُ).",
      ms: "Tamyiz dari segi bahasa bermaksud \"memisahkan satu benda daripada yang lain\"; ia terbahagi kepada dua jenis — tamyiz al-tafsir (tafsiran, menjelaskan dzat/identiti bagi apa yang mendahuluinya) dan tamyiz al-ta'kid (pengesahan, menguatkannya). Sumber menyatakan kaedah kesnya sebagai: tamyiz ialah nasb apabila ia tidak mengikuti nombor tunggal dari tiga hingga sepuluh, atau mi'ah (100), alf (1000), atau milyun (1,000,000) — cth. قَرَأْتُ أَرْبَعَةَ عَشَرَ كِتَابًا (Saya membaca empat belas buah buku — كتابًا ialah nasb, kerana 14 bukan dalam julat terkecuali itu).\n\nكم, apabila digunakan sebagai kata tanya bermaksud \"berapa banyak\", mempunyai kaedah kedudukan hadapannya sendiri (al-sadara): sumber menyatakan ia tidak pernah terjejas oleh apa jua 'amil yang mendahuluinya, melainkan 'amil itu kata sendi atau كم sendiri dijadikan mudaf — maka keseluruhan ayat seperti هَلْ تَعْرِفُ كَمْ كِتَابًا قَرَأْتَ؟ berada sepenuhnya dalam mahal nasb sebagai maf'ul bih bagi تعرف, manakala كتابًا itu sendiri kekal tamyiz biasa, nasb.\n\nSumber turut menunjukkan satu frasa di mana kata yang sama benar-benar boleh dibaca dua cara: عِنْدِي خَاتَمٌ فِضَّةً (Saya mempunyai cincin [daripada] perak) membenarkan فِضَّةً dibaca sama ada sebagai tamyiz atau sebagai hal — kedua-duanya nasb — dengan sumber secara eksplisit menamakan bacaan tamyiz sebagai yang lebih baik (وَالأَوَّلُ أَفْضَلُ)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 36, pdfPages: [177, 177] },
      arabic: "فِي الصَّفِّ تِسْعَةَ عَشَرَ تِلْمِيذًا",
      gloss: { en: "In the classroom [there are] nineteen students.", ms: "Di dalam kelas itu [terdapat] sembilan belas orang pelajar." },
      words: [
        { id: "w1", ar: "فِي", role: { en: "preposition", ms: "kata sendi" }, case: "—", sign: { en: "harf jarr; carries no case ending, muta'alliq to an elided fronted khabar", ms: "harf jarr; tidak membawa tanda kes, muta'alliq kepada khabar muqaddam yang digugurkan" }, reason: { en: "في الصف opens the sentence as an elided khabar muqaddam's jar-majrur — the same existential pattern Chapter 23 introduced for khabar muqaddam wujuban.", ms: "في الصف membuka ayat sebagai jar-majrur bagi khabar muqaddam yang digugurkan — pola wujud yang sama diperkenalkan Bab 23 bagi khabar muqaddam wujuban." } },
        { id: "w2", ar: "الصَّفِّ", role: { en: "majrur by في", ms: "majrur oleh في" }, case: "jarr", sign: { en: "apparent kasra", ms: "kasrah zahir" }, reason: { en: "Any noun directly after a preposition is jarr; an ordinary noun shows this as an apparent kasra.", ms: "Mana-mana kata nama terus selepas kata sendi ialah jarr; kata nama biasa menunjukkan ini sebagai kasrah zahir." } },
        { id: "w3", ar: "تِسْعَةَ عَشَرَ", role: { en: "mubtada' mu'akhkhar (delayed subject)", ms: "mubtada' mu'akhkhar (subjek terkemudian)" }, case: "raf' (mahalli)", sign: { en: "mabni on fatha on both parts — a compound 11–19 number is mabni as one unit", ms: "mabni fathah pada kedua-dua bahagian — nombor majmuk 11–19 ialah mabni sebagai satu unit" }, reason: { en: "A compound number like this doesn't carry an apparent case ending at all; its raf' here is purely positional, mahalli, the same category Chapter 1 introduced.", ms: "Nombor majmuk seperti ini langsung tidak membawa tanda kes zahir; raf'nya di sini semata-mata kedudukan, mahalli, kategori yang sama diperkenalkan Bab 1." } },
        { id: "w4", ar: "تِلْمِيذًا", role: { en: "tamyiz", ms: "tamyiz" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "تلميذًا clarifies WHAT تسعة عشر is counting — nasb, since the number is a compound 11–19, not one of the 3–10/100/1000/million forms that would instead put its tamyiz in jarr.", ms: "تلميذًا menjelaskan APA yang dikira oleh تسعة عشر — nasb, kerana nombor itu nombor majmuk 11–19, bukan salah satu bentuk 3–10/100/1000/juta yang sepatutnya meletakkan tamyiznya dalam jarr." } }
      ]
    },
    exercises: [
      {
        id: "ex36-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "فِي الحَدِيقَةِ عِشْرُونَ شَجَرَةً",
        gloss: { en: "In the garden [there are] twenty trees.", ms: "Di taman itu [terdapat] dua puluh pokok." },
        question: { en: "Which word is the tamyiz?", ms: "Kata manakah tamyiz?" },
        options: [
          { value: "ishruna", labelEn: "عِشْرُونَ", labelMs: "عِشْرُونَ" },
          { value: "shajaratan", labelEn: "شَجَرَةً", labelMs: "شَجَرَةً" }
        ],
        acceptedValues: ["shajaratan"],
        ruleNote: { en: "شَجَرَةً clarifies WHAT عِشْرُونَ is counting — tamyiz, nasb; عشرون itself isn't in the 3–10/100/1000/million range, so its tamyiz stays nasb rather than switching to jarr.", ms: "شَجَرَةً menjelaskan APA yang dikira oleh عِشْرُونَ — tamyiz, nasb; عشرون sendiri bukan dalam julat 3–10/100/1000/juta, maka tamyiznya kekal nasb dan bukan bertukar kepada jarr." }
      },
      {
        id: "ex36-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "كَمْ سَاعَةً تَدْرُسُ يَوْمِيًّا؟",
        gloss: { en: "How many hours do you study daily?", ms: "Berapa jam anda belajar setiap hari?" },
        targetWord: "سَاعَةً",
        question: { en: "Give the full analysis of \"سَاعَةً\".", ms: "Berikan analisis penuh bagi \"سَاعَةً\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "tamyiz", labelEn: "Tamyiz", labelMs: "Tamyiz" },
            { value: "maful-bih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "tamyiz", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "كم is al-sadara — never affected by what comes before it — so the whole clause كَمْ سَاعَةً تَدْرُسُ sits in mahall nasb as the implied question's own object, while سَاعَةً itself stays simple tamyiz, nasb.", ms: "كم ialah al-sadara — tidak pernah terjejas oleh apa yang mendahuluinya — maka keseluruhan klausa كَمْ سَاعَةً تَدْرُسُ berada dalam mahal nasb sebagai objek tersirat soalan itu sendiri, manakala سَاعَةً itu sendiri kekal tamyiz, nasb." }
      }
    ],
    completion: {
      en: "You can now tell tamyiz al-tafsir from tamyiz al-ta'kid, apply the nasb rule for numbers outside the 3–10/100/1000/million range, and recognize how كم's al-sadara status pulls an entire question into mahall nasb around it.",
      ms: "Anda kini boleh membezakan tamyiz al-tafsir daripada tamyiz al-ta'kid, menggunakan kaedah nasb bagi nombor di luar julat 3–10/100/1000/juta, dan mengenali bagaimana status al-sadara كم menarik keseluruhan soalan ke dalam mahal nasb di sekelilingnya."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 37 — إعراب الحال (Hal)
  // ------------------------------------------------------------------
  37: {
    chapterId: 37,
    status: "pilot",
    concept: {
      en: "The hal describes the state (hay'a) its sahib al-hal — the noun it describes — was in when the verb's action happened: جَاءَ الفَتَى مُبْتَسِمًا, \"the young man came, smiling.\" Unlike a na't, a hal doesn't sit next to the noun it describes and isn't required by the sentence — it's a fadla. It can be a single word, a verbal sentence, or (with a connecting wa) a nominal sentence.",
      ms: "Hal menerangkan keadaan (hay'ah) sahib al-halnya — kata nama yang diterangkannya — ketika perbuatan kata kerja berlaku: جَاءَ الفَتَى مُبْتَسِمًا, \"pemuda itu datang, sambil tersenyum.\" Berbeza daripada na't, hal tidak duduk bersebelahan kata nama yang diterangkannya dan tidak diperlukan oleh ayat — ia fadla. Ia boleh berupa satu perkataan, ayat fi'liyyah, atau (dengan waw penghubung) ayat ismiyyah."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 37, pdfPages: [180, 182] },
      en: "The hal is a descriptive fadla mentioned to state the hay'a (state/manner) of the noun it describes at the moment of the verb's action — a single adjective-like word, always nasb, e.g. جَاءَ الفَتَى مُبْتَسِمًا.\n\nIt can also be a whole sentence instead of one word: a verbal sentence directly, e.g. جَاءَ الفَتَى يَبْتَسِمُ (the source notes generally that a sentence following a definite noun is construed as hal), or a nominal sentence introduced by a connecting wa al-hal, e.g. اِحْتَرَسْتُ مِنَ الشَّمْسِ وَالحَرَارَةُ شَدِيدَةٌ (I was wary of the sun while the heat was intense). The source tests whether a و is really wa al-hal by whether إذ could stand in its place with the same meaning (خَرَجْتُ إِذِ القَمَرُ يُضِيءُ), and notes this و only ever introduces a sentence, never a single word.\n\nThe sahib al-hal is simply whatever the hal describes in meaning — not necessarily the sentence's own fa'il or maf'ul. It can be a pronoun buried inside a mudaf ilayh, as in مَا شَأْنُكَ سَاكِتًا؟ (the hal سَاكِتًا describes the ك inside شأنك), and a single verb can even take two hal at once, one from its fa'il and one from its maf'ul together, as in سَلَّمْتُ البَائِعَ النُّقُودَ يَدًا بِيَدٍ.\n\nSeparately, a zarf or jarr-majrur can stand in for an elided hal exactly the way one can stand in for an elided khabar or maf'ul lahu elsewhere in this curriculum — جَاءَ القَائِدُ بَيْنَ رِجَالِهِ (بين is muta'alliq to an elided hal, taqdiruhu: مَوْجُودًا).",
      ms: "Hal ialah fadla sifat yang disebut untuk menyatakan hay'ah (keadaan/cara) kata nama yang diterangkannya pada saat perbuatan kata kerja berlaku — satu perkataan seperti sifat, sentiasa nasb, cth. جَاءَ الفَتَى مُبْتَسِمًا.\n\nIa juga boleh menjadi keseluruhan ayat dan bukan satu perkataan: ayat fi'liyyah secara terus, cth. جَاءَ الفَتَى يَبْتَسِمُ (sumber menyatakan secara umum bahawa ayat yang mengikuti kata nama makrifat dianggap hal), atau ayat ismiyyah yang diperkenalkan oleh waw al-hal penghubung, cth. اِحْتَرَسْتُ مِنَ الشَّمْسِ وَالحَرَارَةُ شَدِيدَةٌ (Saya berwaspada terhadap matahari sementara kepanasan amat kuat). Sumber menguji sama ada sesuatu و itu benar-benar waw al-hal dengan sama ada إذ boleh menggantikan tempatnya dengan makna yang sama (خَرَجْتُ إِذِ القَمَرُ يُضِيءُ), dan menyatakan و ini hanya memperkenalkan ayat, tidak pernah satu perkataan.\n\nSahib al-hal semata-mata ialah apa jua yang diterangkan oleh hal dari segi makna — tidak semestinya fa'il atau maf'ul ayat itu sendiri. Ia boleh menjadi kata ganti nama yang tersembunyi dalam mudaf ilayh, seperti dalam مَا شَأْنُكَ سَاكِتًا؟ (hal سَاكِتًا menerangkan ك dalam شأنك), dan satu kata kerja malah boleh mengambil dua hal serentak, satu daripada fa'ilnya dan satu daripada maf'ulnya bersama, seperti dalam سَلَّمْتُ البَائِعَ النُّقُودَ يَدًا بِيَدٍ.\n\nBerasingan, zarf atau jar-majrur boleh menggantikan tempat hal yang digugurkan sepertimana ia boleh menggantikan tempat khabar atau maf'ul lahu yang digugurkan di tempat lain dalam kurikulum ini — جَاءَ القَائِدُ بَيْنَ رِجَالِهِ (بين muta'alliq kepada hal yang digugurkan, taqdiruhu: مَوْجُودًا)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 37, pdfPages: [180, 180] },
      arabic: "جَاءَ الفَتَى مُبْتَسِمًا",
      gloss: { en: "The young man came, smiling.", ms: "Pemuda itu datang, sambil tersenyum." },
      words: [
        { id: "w1", ar: "جَاءَ", role: { en: "past-tense verb (fi'l madi)", ms: "kata kerja lampau (fi'l madi)" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb with nothing attached defaults to apparent fatha (Chapter 3).", ms: "Kata kerja lampau berakar sahih tanpa apa-apa tersambung kekal fathah zahir secara lazim (Bab 3)." } },
        { id: "w2", ar: "الفَتَى", role: { en: "fa'il", ms: "fa'il" }, case: "raf'", sign: { en: "implied damma (damma muqaddara 'ala al-alif, blocked by ta'adhdhur)", ms: "damma tersirat ('ala al-alif, dihalang ta'adhdhur)" }, reason: { en: "الفتى is the same maqsur noun Chapter 5 built its whole lesson around: it ends in alif, so its raf' can never be pronounced — only ever implied.", ms: "الفتى ialah isim maqsur yang sama yang menjadi tumpuan keseluruhan pelajaran Bab 5: ia berakhir dengan alif, maka raf'nya tidak pernah dapat disebut — hanya sentiasa tersirat." } },
        { id: "w3", ar: "مُبْتَسِمًا", role: { en: "hal (mufrada) from الفتى", ms: "hal (mufrada) daripada الفتى" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "مبتسمًا describes الفتى's state AT the moment جاء happened — a single-word hal, always nasb, with a hidden هو inside it (an active-participle's own implied pronoun) serving as the rabit back to الفتى.", ms: "مبتسمًا menerangkan keadaan الفتى PADA saat جاء berlaku — hal satu perkataan, sentiasa nasb, dengan هو tersirat di dalamnya (kata ganti nama tersirat ism fa'il itu sendiri) bertindak sebagai rabit kembali kepada الفتى." } }
      ]
    },
    exercises: [
      {
        id: "ex37-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "عَادَ الفَرِيقُ مُنْتَصِرًا",
        gloss: { en: "The team returned victorious.", ms: "Pasukan itu pulang dalam kemenangan." },
        question: { en: "Which word is the hal?", ms: "Kata manakah hal?" },
        options: [
          { value: "alfariqu", labelEn: "الفَرِيقُ", labelMs: "الفَرِيقُ" },
          { value: "muntasiran", labelEn: "مُنْتَصِرًا", labelMs: "مُنْتَصِرًا" }
        ],
        acceptedValues: ["muntasiran"],
        ruleNote: { en: "مُنْتَصِرًا describes الفريق's state at the moment of عاد — a single-word hal, nasb, its sahib al-hal being الفريق.", ms: "مُنْتَصِرًا menerangkan keadaan الفريق pada saat عاد — hal satu perkataan, nasb, dengan sahib al-halnya ialah الفريق." }
      },
      {
        id: "ex37-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "سَافَرْتُ وَالجَوُّ صَحْوٌ",
        gloss: { en: "I traveled while the weather was clear.", ms: "Saya bermusafir ketika cuaca cerah." },
        question: { en: "Analyze the sentence \"وَالجَوُّ صَحْوٌ\".", ms: "Analisiskan ayat \"وَالجَوُّ صَحْوٌ\"." },
        fields: [
          { key: "waw", question: { en: "What kind of و is this?", ms: "Apakah jenis و ini?" }, options: [
            { value: "wa-hal", labelEn: "Wa al-hal (introduces a hal sentence)", labelMs: "Waw al-hal (memperkenalkan ayat hal)" },
            { value: "wa-atf", labelEn: "Wa al-'atf (coordinating \"and\")", labelMs: "Waw al-'atf (\"dan\" penyambung)" }
          ] },
          { key: "role", question: { en: "What does the sentence الجوُّ صحوٌ do?", ms: "Apakah fungsi ayat الجوُّ صحوٌ?" }, options: [
            { value: "hal", labelEn: "Hal (jumla ismiyya) from the fa'il of سافرتُ", labelMs: "Hal (jumlah ismiyyah) daripada fa'il سافرتُ" },
            { value: "khabar", labelEn: "Khabar of a new mubtada'", labelMs: "Khabar bagi mubtada' baharu" }
          ] },
          { key: "case", question: { en: "What is its i'rab position?", ms: "Apakah kedudukan i'rabnya?" }, options: [
            { value: "mahal-nasb", labelEn: "Mahall nasb, hal", labelMs: "Mahal nasb, hal" },
            { value: "mahal-rafa", labelEn: "Mahall raf', khabar", labelMs: "Mahal raf', khabar" }
          ] }
        ],
        acceptedCombos: [ { waw: "wa-hal", role: "hal", case: "mahal-nasb" } ],
        ruleNote: { en: "Replacing و with إذ still works here (سافرتُ إذِ الجوُّ صحوٌ) — the source's own test for wa al-hal — so الجوُّ صحوٌ is a jumla ismiyya hal from the fa'il of سافرتُ, in mahall nasb, with the واو itself as the rabit.", ms: "Menggantikan و dengan إذ masih berfungsi di sini (سافرتُ إذِ الجوُّ صحوٌ) — ujian sumber sendiri bagi waw al-hal — maka الجوُّ صحوٌ ialah jumlah ismiyyah hal daripada fa'il سافرتُ, dalam mahal nasb, dengan واو itu sendiri sebagai rabit." }
      }
    ],
    completion: {
      en: "You can now tell mufrada, jumla fi'liyya, and jumla ismiyya hal apart, find the sahib al-hal even when it's buried inside an idafa, and recognize wa al-hal by the source's own إذ-substitution test.",
      ms: "Anda kini boleh membezakan hal mufrada, jumlah fi'liyyah, dan jumlah ismiyyah, mencari sahib al-hal walaupun ia tersembunyi dalam idafah, dan mengenali waw al-hal melalui ujian penggantian إذ sumber sendiri."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 11 — إعراب اسم العَلَم (Proper Nouns)
  // ------------------------------------------------------------------
  11: {
    chapterId: 11,
    status: "pilot",
    concept: {
      en: "A simple 'alam (proper noun) declines exactly like any other noun — raf' damma, nasb fatha, jarr kasra. But a compound 'alam doesn't: a mudaf name like عبدُ الله splits in two, a kunya like أبو هادل uses the 5-nouns pattern, and a name that is itself a frozen little sentence — فتحَ اللهُ, \"Fath-Allah\" — keeps its own internal vowels exactly as quoted (al-hikaya) no matter what case the whole name is in.",
      ms: "'Alam (nama khas) yang mudah di-i'rab sama seperti kata nama lain — raf' damma, nasb fathah, jarr kasrah. Tetapi 'alam majmuk tidak begitu: nama mudaf seperti عبدُ الله terbahagi dua, kunya seperti أبو هادل menggunakan corak al-asma' al-khamsah, dan nama yang merupakan ayat kecil yang dibekukan — فتحَ اللهُ, \"Fath-Allah\" — mengekalkan baris dalamannya sendiri tepat sepertimana ia dipetik (al-hikayah) tidak kira apa jua kes keseluruhan nama itu."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 11, pdfPages: [46, 50] },
      en: "An 'alam noun is declined by its position in the sentence just like any other noun — raf' with damma, nasb with fatha, jarr with kasra — unless it is mamnu' min al-sarf, in which case jarr is fatha instead (no tanwin). The source then works through every compound shape an 'alam can take, each with its own treatment:\n\n'Alam mudaf (عبدُ اللهِ): the first word declines normally, the second is simply mudaf ilayh, majrur.\n\nKunya (أبو هادلٍ): the أبو/أخو/etc. part declines by the 5-nouns pattern (waw/alif/ya for raf'/nasb/jarr) when mudaf to what follows.\n\nMurakkab isnadi — a name that is itself a whole little sentence, like فتحَ اللهُ or تأبّط شرًّا: the source calls this al-hikaya. The name's internal vowels are frozen exactly as the name is \"quoted,\" and never change for case; i'rab is applied to the name as a whole but can only ever be muqaddar (implied), blocked precisely by that frozen hikaya vocalization — not by any of the usual morphological excuses (ta'adhdhur, thiql, mujanasa).\n\nMurakkab mazji — a blended compound like سيبويهِ or بعلبكَّ: treated as mamnu' min al-sarf (raf' damma, nasb and jarr both fatha, no tanwin) — except a mazji ending in ـويه, which is instead fully mabni on kasra in every position.\n\n'Alam + laqab (a name followed by a title, سعيدٌ المقنَّعُ): the title can be read as badal, bayan, or tawkid lafzi of the name (all following it in i'rab) — or, if the name itself is nasb, as khabar of an elided mubtada'.\n\nForeign ('ajami) names ending in و (أرسطو، طوكيو): mamnu' min al-sarf for 'alamiyya + 'ujma — raf' is an implied damma on the waw, nasb an implied fatha, and jarr is also fatha (implied) rather than kasra.\n\nIf an originally-mabni word (رُبَّ، حيثُ، مَنْ...) is used as a person's name, its i'rab stays implied, blocked by that same original binaa' vocalization — exactly the same phenomenon as al-hikaya above.",
      ms: "'Alam di-i'rab mengikut kedudukannya dalam ayat sama seperti kata nama lain — raf' dengan damma, nasb dengan fathah, jarr dengan kasrah — melainkan ia mamnu' min al-sarf, maka jarr nya fathah (tanpa tanwin). Sumber kemudian membincangkan setiap bentuk majmuk yang boleh diambil oleh 'alam, masing-masing dengan layanannya sendiri:\n\n'Alam mudaf (عبدُ اللهِ): bahagian pertama di-i'rab biasa, bahagian kedua semata-mata mudaf ilayh, majrur.\n\nKunya (أبو هادلٍ): bahagian أبو/أخو/dll. di-i'rab mengikut corak al-asma' al-khamsah (waw/alif/ya bagi raf'/nasb/jarr) apabila menjadi mudaf kepada apa yang mengikutinya.\n\nMurakkab isnadi — nama yang merupakan satu ayat kecil, seperti فتحَ اللهُ atau تأبّط شرًّا: sumber menamakannya al-hikayah. Baris dalaman nama itu dibekukan tepat sepertimana nama itu \"dipetik,\" dan tidak pernah berubah mengikut kes; i'rab dikenakan kepada nama itu sebagai satu keseluruhan tetapi hanya boleh muqaddar (tersirat), dihalang khusus oleh baris hikayah yang beku itu — bukan oleh mana-mana sebab morfologi biasa (ta'adhdhur, thiql, mujanasah).\n\nMurakkab mazji — gabungan terpadu seperti سيبويهِ atau بعلبكَّ: dilayan sebagai mamnu' min al-sarf (raf' damma, nasb DAN jarr kedua-duanya fathah, tanpa tanwin) — kecuali mazji yang berakhir dengan ـويه, yang sebaliknya mabni sepenuhnya pada kasrah dalam setiap kedudukan.\n\n'Alam + gelaran (nama diikuti gelaran, سعيدٌ المقنَّعُ): gelaran itu boleh dibaca sebagai badal, bayan, atau tawkid lafzi bagi nama itu (semuanya mengikutinya dalam i'rab) — atau, jika nama itu sendiri nasb, sebagai khabar bagi mubtada' yang digugurkan.\n\nNama asing ('ajami) yang berakhir dengan و (أرسطو، طوكيو): mamnu' min al-sarf kerana 'alamiyyah + 'ujmah — raf' ialah damma tersirat pada waw, nasb fathah tersirat, dan jarr juga fathah (tersirat) dan bukan kasrah.\n\nJika kata yang asalnya mabni (رُبَّ، حيثُ، مَنْ...) digunakan sebagai nama seseorang, i'rabnya kekal tersirat, dihalang oleh baris binaa' asal yang sama — fenomena yang sama persis dengan al-hikayah di atas."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 11, pdfPages: [47, 47], printedPage: 46 },
      arabic: "نَجَحَ فَتْحَ اللهُ",
      gloss: { en: "Fath-Allah succeeded.", ms: "Fath-Allah berjaya." },
      words: [
        { id: "w1", ar: "نَجَحَ", role: { en: "past-tense verb (fi'l madi)", ms: "kata kerja lampau (fi'l madi)" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb defaults to apparent fatha.", ms: "Kata kerja lampau berakar sahih kekal fathah zahir secara lazim." } },
        { id: "w2", ar: "فَتْحَ اللهُ", role: { en: "fa'il (the whole murakkab isnadi name, as one unit)", ms: "fa'il (keseluruhan nama murakkab isnadi, sebagai satu unit)" }, case: "raf' (muqaddar)", sign: { en: "implied damma on the name's last letter, blocked by harakat al-hikaya", ms: "damma tersirat pada huruf akhir nama, dihalang oleh harakat al-hikayah" }, reason: { en: "فتح الله is itself a frozen little sentence used as one person's name. Its own internal vowels (fatha on فتح, damma on الله) never change, whatever case the name takes — so the fa'il's raf' here can only ever be muqaddar, blocked by that fixed hikaya vocalization rather than by any ordinary excuse like ta'adhdhur.", ms: "فتح الله sendiri ialah ayat kecil yang dibekukan, digunakan sebagai nama seseorang. Baris dalamannya sendiri (fathah pada فتح, damma pada الله) tidak pernah berubah, walau apa jua kes nama itu — maka raf' fa'il di sini hanya boleh muqaddar, dihalang oleh baris hikayah yang tetap itu dan bukan oleh sebarang sebab biasa seperti ta'adhdhur." } }
      ]
    },
    exercises: [
      {
        id: "ex11-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "مَرَرْتُ بِفَتْحَ اللهُ",
        gloss: { en: "I passed by Fath-Allah.", ms: "Saya melalui Fath-Allah." },
        targetWord: "فَتْحَ اللهُ",
        question: { en: "\"فَتْحَ اللهُ\" is majrur here (after بِ). What blocks its jarr marker from showing?", ms: "\"فَتْحَ اللهُ\" ialah majrur di sini (selepas بِ). Apakah yang menghalang tanda jarr-nya daripada muncul?" },
        options: [
          { value: "hikaya", labelEn: "Harakat al-hikaya — the name's own frozen vocalization", labelMs: "Harakat al-hikayah — baris dalaman nama yang beku" },
          { value: "taadhdhur", labelEn: "Ta'adhdhur — impossible to pronounce on alif", labelMs: "Ta'adhdhur — mustahil disebut pada alif" }
        ],
        acceptedValues: ["hikaya"],
        ruleNote: { en: "Like all murakkab isnadi names, فتح الله keeps its fixed internal spelling in every position — jarr here is only ever muqaddar, blocked by harakat al-hikaya.", ms: "Seperti semua nama murakkab isnadi, فتح الله mengekalkan ejaan dalaman tetapnya dalam setiap kedudukan — jarr di sini hanya muqaddar, dihalang oleh harakat al-hikayah." }
      },
      {
        id: "ex11-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "سَافَرَ أَبُو هَادِلٍ",
        gloss: { en: "Abu Hadil traveled.", ms: "Abu Hadil bermusafir." },
        targetWord: "أَبُو",
        question: { en: "Give the full analysis of \"أَبُو\" (the kunya part of the name).", ms: "Berikan analisis penuh bagi \"أَبُو\" (bahagian kunya nama itu)." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" },
            { value: "mudaf-ilayh", labelEn: "Mudaf ilayh", labelMs: "Mudaf ilayh" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "jarr", labelEn: "Jarr", labelMs: "Jarr" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "waw-asma-khamsa", labelEn: "Waw, because it's one of the 5 nouns", labelMs: "Waw, kerana ia salah satu al-asma' al-khamsah" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "fail", case: "rafa", sign: "waw-asma-khamsa" } ],
        ruleNote: { en: "أبو is mudaf to هادل (the kunya's own name), so — like أخو، حمو، فو، ذو — it declines by the 5-nouns pattern: waw for raf', here as fa'il.", ms: "أبو ialah mudaf kepada هادل (nama kunya itu sendiri), maka — seperti أخو، حمو، فو، ذو — ia di-i'rab mengikut corak al-asma' al-khamsah: waw bagi raf', di sini sebagai fa'il." }
      }
    ],
    completion: {
      en: "You can now tell a simple 'alam from each compound shape — mudaf, kunya, murakkab isnadi, mazji, 'alam+laqab, and foreign names — and recognize al-hikaya wherever a name's own frozen internal vowels block its case marker from ever showing.",
      ms: "Anda kini boleh membezakan 'alam mudah daripada setiap bentuk majmuknya — mudaf, kunya, murakkab isnadi, mazji, 'alam+gelaran, dan nama asing — serta mengenali al-hikayah di mana jua baris dalaman beku sesuatu nama menghalang tanda kesnya daripada pernah muncul."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 12 — إعراب اسم الفعل (The Verb-Noun / Isim Fi'l)
  // ------------------------------------------------------------------
  12: {
    chapterId: 12,
    status: "pilot",
    concept: {
      en: "An isim fi'l is a word that stands in for a whole verb's meaning without ever accepting a case marker — mabni, one single shape regardless of singular/dual/plural or gender (except forms ending in kaf al-khitab, which do shift: مكانَك، مكانَكِ، مكانكما...). It still governs exactly like the verb it replaces — a fa'il, and a maf'ul bih if its verb would have taken one.",
      ms: "Isim fi'l ialah kata yang menggantikan makna keseluruhan kata kerja tanpa pernah menerima tanda kes — mabni, satu bentuk tunggal tanpa mengira mufrad/muthanna/jamak atau jantina (kecuali bentuk yang berakhir dengan kaf al-khitab, yang berubah: مكانَك، مكانَكِ، مكانكما...). Ia tetap mentadbir persis seperti kata kerja yang digantikannya — fa'il, dan maf'ul bih jika kata kerjanya sepatutnya mengambil satu."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 12, pdfPages: [51, 56] },
      en: "An isim fi'l stands in the place of a verb and carries its meaning, without ever taking an i'rab marker or being affected by any governor — it is mabni, and (apart from the kaf al-khitab forms) one single shape covers singular, dual, plural, masculine and feminine alike. It carries exactly the 'amal of the verb whose meaning it holds, whether lazim or muta'addi, and always has a hidden fa'il, wujuban: anta (you), unless an explicit noun follows it as fa'il (as with سرعانَ المسافرون). The source divides it into three kinds by which tense it stands in for: isim fi'l madi (هيهاتَ — bima'na بَعُدَ; سرعانَ — bima'na أسرعَ), isim fi'l mudari' (أفٍّ — bima'na أتضجّرُ; آهٍ — bima'na أتوجّعُ), and isim fi'l amr — by far the largest group (هاكَ bima'na خُذْ, صهْ bima'na اسكتْ, حيَّ bima'na أقبِلْ, إليكَ/عليكَ bima'na ابتعِدْ/تمسّكْ...).\n\nWhen an isim fi'l amr is transferred from a zarf (أمامَكَ، وراءَكَ، مكانَكَ), the attached kaf is mudaf ilayh; when transferred from a harf jarr (إليكَ، عليكَ), the kaf is majrur mahallan by that original preposition; when it isn't transferred from anything at all (هاكَ), the source calls it \"easiest\" to treat the kaf simply as a harf khitab, an inseparable part of the word with no i'rab of its own.\n\nTwo of the amr-type words get a special note: هاتِ (give) and تعالَ (come) are historically isim fi'l, but the source explicitly allows them to be construed instead as ordinary fi'l amr verbs with their own hidden anta fa'il — يجوز أن تُعرَب فعل أمر — since both readings land on the same meaning either way.",
      ms: "Isim fi'l berdiri di tempat kata kerja dan membawa maknanya, tanpa pernah mengambil tanda i'rab atau terjejas oleh sebarang 'amil — ia mabni, dan (selain bentuk kaf al-khitab) satu bentuk tunggal meliputi mufrad, muthanna, jamak, maskulin dan feminin sama rata. Ia membawa persis 'amal kata kerja yang maknanya dipegangnya, sama ada lazim atau muta'addi, dan sentiasa mempunyai fa'il tersembunyi, wujuban: أنتَ (anda), melainkan kata nama eksplisit mengikutinya sebagai fa'il (seperti سرعانَ المسافرون). Sumber membahagikannya kepada tiga jenis mengikut kala yang digantikannya: isim fi'l madi (هيهاتَ — bima'na بَعُدَ; سرعانَ — bima'na أسرعَ), isim fi'l mudari' (أفٍّ — bima'na أتضجّرُ; آهٍ — bima'na أتوجّعُ), dan isim fi'l amr — kumpulan terbesar (هاكَ bima'na خُذْ, صهْ bima'na اسكتْ, حيَّ bima'na أقبِلْ, إليكَ/عليكَ bima'na ابتعِدْ/تمسّكْ...).\n\nApabila isim fi'l amr dipindahkan daripada zarf (أمامَكَ، وراءَكَ، مكانَكَ), kaf yang melekat padanya ialah mudaf ilayh; apabila dipindahkan daripada harf jarr (إليكَ، عليكَ), kaf itu majrur mahallan oleh kata sendi asal itu; apabila ia langsung tidak dipindahkan daripada apa-apa (هاكَ), sumber menyebut \"paling mudah\" melayan kaf itu semata-mata sebagai harf khitab, bahagian tak terpisah daripada kata itu tanpa i'rabnya sendiri.\n\nDua daripada kata jenis amr mendapat nota khas: هاتِ (beri) dan تعالَ (mari) secara sejarahnya isim fi'l, tetapi sumber secara eksplisit membenarkan ia ditafsir sebaliknya sebagai kata kerja amr biasa dengan fa'il أنتَ tersembunyi sendiri — يجوز أن تُعرَب فعل أمر — kerana kedua-dua bacaan membawa kepada makna yang sama juga."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 12, pdfPages: [52, 52], printedPage: 51 },
      arabic: "هَاكَ الكِتَابَ",
      gloss: { en: "Here, take the book.", ms: "Ini, ambil buku itu." },
      words: [
        { id: "w1", ar: "هَاكَ", role: { en: "isim fi'l amr, bima'na خُذْ (take)", ms: "isim fi'l amr, bima'na خُذْ (ambil)" }, case: "—", sign: { en: "mabni on sukun, la mahalla lahu min al-i'rab", ms: "mabni sukun, la mahalla lahu min al-i'rab" }, reason: { en: "هاك isn't transferred from a zarf or a preposition, so the source treats its كاف simply as a harf khitab — part of the word itself, carrying no i'rab of its own.", ms: "هاك bukan dipindahkan daripada zarf atau kata sendi, maka sumber melayan كاف-nya semata-mata sebagai harf khitab — sebahagian daripada kata itu sendiri, tidak membawa i'rab sendiri." } },
        { id: "w2", ar: "(مستتر) أنتَ", role: { en: "fa'il of هاكَ, hidden", ms: "fa'il bagi هاكَ, tersembunyi" }, case: "raf' (mahalli)", sign: { en: "hidden pronoun, wujuban", ms: "dhamir tersembunyi, wujuban" }, reason: { en: "An isim fi'l amr always carries its own hidden fa'il, wujuban, exactly like the command verb خُذْ it stands in for.", ms: "Isim fi'l amr sentiasa membawa fa'il tersembunyinya sendiri, wujuban, persis seperti kata kerja perintah خُذْ yang digantikannya." } },
        { id: "w3", ar: "الكِتَابَ", role: { en: "maf'ul bih", ms: "maf'ul bih" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "هاك carries the 'amal of خُذْ, a muta'addi verb, so it still takes a maf'ul bih exactly as that verb would.", ms: "هاك membawa 'amal خُذْ, kata kerja muta'addi, maka ia tetap mengambil maf'ul bih persis seperti kata kerja itu." } }
      ]
    },
    exercises: [
      {
        id: "ex12-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "أَمَامَكَ أَيُّهَا الجُنْدِيُّ",
        gloss: { en: "Forward, soldier!", ms: "Ke hadapan, askar!" },
        targetWord: "كَ",
        question: { en: "What role does the كاف in أَمَامَكَ play?", ms: "Apakah peranan كاف dalam أَمَامَكَ?" },
        options: [
          { value: "mudaf-ilayh", labelEn: "Mudaf ilayh (أمامَ is a zarf transferred into an isim fi'l)", labelMs: "Mudaf ilayh (أمامَ ialah zarf yang dipindahkan menjadi isim fi'l)" },
          { value: "harf-khitab", labelEn: "Harf khitab, part of the word itself", labelMs: "Harf khitab, sebahagian daripada kata itu sendiri" }
        ],
        acceptedValues: ["mudaf-ilayh"],
        ruleNote: { en: "أمامَ was originally a zarf makan before it was transferred into an isim fi'l amr (bima'na تقدّم) — so its كاف stays mudaf ilayh, in mahall jarr, unlike هاكَ's non-transferred كاف.", ms: "أمامَ asalnya zarf makan sebelum dipindahkan menjadi isim fi'l amr (bima'na تقدّم) — maka كاف-nya kekal mudaf ilayh, dalam mahal jarr, berbeza daripada كاف هاكَ yang tidak dipindahkan." }
      },
      {
        id: "ex12-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "صَهْ يَا ثَرْثَارُ",
        gloss: { en: "Quiet, chatterbox!", ms: "Diam, peleter!" },
        targetWord: "صَهْ",
        question: { en: "Give the full analysis of \"صَهْ\".", ms: "Berikan analisis penuh bagi \"صَهْ\"." },
        fields: [
          { key: "type", question: { en: "Which kind of isim fi'l is it?", ms: "Jenis isim fi'l yang manakah ia?" }, options: [
            { value: "amr", labelEn: "Isim fi'l amr, bima'na اسكتْ", labelMs: "Isim fi'l amr, bima'na اسكتْ" },
            { value: "madi", labelEn: "Isim fi'l madi, bima'na بَعُدَ", labelMs: "Isim fi'l madi, bima'na بَعُدَ" }
          ] },
          { key: "binaa", question: { en: "Binaa'", ms: "Binaa'" }, options: [
            { value: "sukun", labelEn: "Mabni on sukun", labelMs: "Mabni sukun" },
            { value: "fatha", labelEn: "Mabni on fatha", labelMs: "Mabni fathah" }
          ] },
          { key: "fail", question: { en: "Its fa'il", ms: "Fa'ilnya" }, options: [
            { value: "mustatir-anta", labelEn: "Hidden anta, wujuban", labelMs: "أنتَ tersembunyi, wujuban" },
            { value: "thartharu", labelEn: "ثرثارُ (the munada)", labelMs: "ثرثارُ (kata panggilan)" }
          ] }
        ],
        acceptedCombos: [ { type: "amr", binaa: "sukun", fail: "mustatir-anta" } ],
        ruleNote: { en: "صَهْ (bima'na اسكتْ) is mabni on sukun, la mahalla lahu min al-i'rab, with its own hidden fa'il anta, wujuban — يا ثرثارُ is a separate munada, not its fa'il.", ms: "صَهْ (bima'na اسكتْ) mabni sukun, la mahalla lahu min al-i'rab, dengan fa'il أنتَ tersembunyinya sendiri, wujuban — يا ثرثارُ ialah munada berasingan, bukan fa'ilnya." }
      }
    ],
    completion: {
      en: "You can now tell isim fi'l madi, mudari', and amr apart, trace a transferred kaf back to whether it came from a zarf or a preposition, and recognize هاتِ/تعالَ as the one pair the source lets you read either as isim fi'l or as ordinary amr verbs.",
      ms: "Anda kini boleh membezakan isim fi'l madi, mudari', dan amr, mengesan kaf yang dipindahkan sama ada ia berasal daripada zarf atau kata sendi, dan mengenali هاتِ/تعالَ sebagai satu-satunya pasangan yang dibenarkan sumber dibaca sama ada sebagai isim fi'l atau kata kerja amr biasa."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 13 — إعراب العدد (Numbers)
  // ------------------------------------------------------------------
  13: {
    chapterId: 13,
    status: "pilot",
    concept: {
      en: "Each number family has its own i'rab behavior: 3–10 are mu'rab and need a plural mudaf ilayh; 11 and the compound teens (13–19) are mabni on fatha as one frozen unit; 12 alone declines like a muthanna; and the tens (20, 30...) decline like a sound masculine plural. The source also shows a number standing in for a masdar, straight from the Qur'an.",
      ms: "Setiap keluarga nombor mempunyai tingkah laku i'rab tersendiri: 3–10 ialah mu'rab dan memerlukan mudaf ilayh jamak; 11 dan nombor belasan majmuk (13–19) mabni fathah sebagai satu unit beku; 12 sahaja di-i'rab seperti muthanna; dan puluhan (20, 30...) di-i'rab seperti jamak mudhakkar salim. Sumber turut menunjukkan nombor menggantikan masdar, terus daripada al-Qur'an."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 13, pdfPages: [57, 61] },
      en: "أحَدَ عَشَرَ (11) and its compound-teen siblings (13–19) are a murakkab number, mabni on fatha on both parts together, in mahall raf', nasb or jarr by position — with the second part (عَشَرَ) doing the work a tanwin-nun would do in a muthanna, so idafa to what comes after is barred. 12 (اثنا عشر / اثنتا عشرة) is the one exception: its first part is mulhaq bi-l-muthanna and declines like one (alif for raf', ya for nasb/jarr), while its second part stays mabni fatha — and idafa is barred here too, for the same reason.\n\n3–10 are ordinary mu'rab nouns, needing a plural mudaf ilayh of the opposite gender from the number itself (خمسةُ رجالٍ, سبعَ عشرةَ مجلةً when attached to a compound teen). The tens (عشرون، ثلاثون...) decline exactly like a sound masculine plural — waw/nun for raf', ya/nun for nasb and jarr — and their mumayyiz is a singular mansub noun (عشرون كتابًا).\n\nA number can be read as nu't when it names a known rank (جاء خليل الثاني في صفه), and can even stand in for a masdar, as in the Qur'an's own فَاجْلِدُوهُمْ ثَمَانِينَ جَلْدَةً (An-Nur 24:4) — ثمانين here is a number acting as a nasb maf'ul mutlaq-like substitute.\n\nOrdinal compounds (الحادي عشر، الثاني عشر...) follow the same murakkab-mabni pattern as the cardinal teens, with one extra wrinkle: the ya' in الحادي عشر and الثاني عشر stays mabni on sukun and is only rarely opened to fatha.",
      ms: "أحَدَ عَشَرَ (11) dan rakan-rakan belasan majmuknya (13–19) ialah nombor murakkab, mabni fathah pada kedua-dua bahagian bersama, dalam mahal raf', nasb atau jarr mengikut kedudukan — dengan bahagian kedua (عَشَرَ) melakukan kerja yang dilakukan nun tanwin dalam muthanna, maka idafa kepada apa yang mengikutinya dihalang. 12 (اثنا عشر / اثنتا عشرة) ialah satu-satunya pengecualian: bahagian pertamanya mulhaq bi-l-muthanna dan di-i'rab sepertinya (alif bagi raf', ya bagi nasb/jarr), manakala bahagian keduanya kekal mabni fathah — dan idafa dihalang di sini juga, atas sebab yang sama.\n\n3–10 ialah kata nama mu'rab biasa, memerlukan mudaf ilayh jamak berjantina bertentangan dengan nombor itu sendiri (خمسةُ رجالٍ, سبعَ عشرةَ مجلةً apabila melekat pada nombor belasan majmuk). Puluhan (عشرون، ثلاثون...) di-i'rab persis seperti jamak mudhakkar salim — waw/nun bagi raf', ya/nun bagi nasb dan jarr — dan mumayyiznya ialah kata nama mufrad mansub (عشرون كتابًا).\n\nNombor boleh dibaca sebagai nu't apabila menamakan kedudukan yang diketahui (جاء خليل الثاني في صفه), dan boleh juga menggantikan masdar, seperti dalam ayat al-Qur'an sendiri فَاجْلِدُوهُمْ ثَمَانِينَ جَلْدَةً (An-Nur 24:4) — ثمانين di sini ialah nombor bertindak sebagai pengganti nasb seumpama maf'ul mutlaq.\n\nNombor tertib (الحادي عشر، الثاني عشر...) mengikut corak murakkab-mabni yang sama seperti belasan kardinal, dengan satu lipatan tambahan: ya' dalam الحادي عشر dan الثاني عشر kekal mabni sukun dan jarang sekali dibuka kepada fathah."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 13, pdfPages: [58, 58], printedPage: 57 },
      arabic: "زَارَنَا خَمْسَةُ رِجَالٍ",
      gloss: { en: "Five men visited us.", ms: "Lima orang lelaki melawat kami." },
      words: [
        { id: "w1", ar: "زَارَ", role: { en: "past-tense verb (fi'l madi)", ms: "kata kerja lampau (fi'l madi)" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb defaults to apparent fatha.", ms: "Kata kerja lampau berakar sahih kekal fathah zahir secara lazim." } },
        { id: "w2", ar: "نَا", role: { en: "maf'ul bih muqaddam (fronted object)", ms: "maf'ul bih muqaddam (objek yang dikedepankan)" }, case: "nasb (mahalli)", sign: { en: "mabni, in mahall nasb", ms: "mabni, dalam mahal nasb" }, reason: { en: "An attached pronoun object stays mabni, so its nasb is purely positional, mahalli.", ms: "Dhamir objek yang melekat kekal mabni, maka nasb-nya semata-mata kedudukan, mahalli." } },
        { id: "w3", ar: "خَمْسَةُ", role: { en: "fa'il mu'akhkhar (delayed subject)", ms: "fa'il mu'akhkhar (fa'il terkemudian)" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "خمسة is an ordinary mu'rab number from the 3–10 family, so it declines with an apparent damma as the fa'il here.", ms: "خمسة ialah nombor mu'rab biasa daripada keluarga 3–10, maka ia di-i'rab dengan damma zahir sebagai fa'il di sini." } },
        { id: "w4", ar: "رِجَالٍ", role: { en: "mudaf ilayh", ms: "mudaf ilayh" }, case: "jarr", sign: { en: "apparent kasra", ms: "kasrah zahir" }, reason: { en: "A 3–10 number needs a plural mudaf ilayh of the opposite gender from itself — رجال (masc. plural) after the feminine-marked خمسة, majrur.", ms: "Nombor 3–10 memerlukan mudaf ilayh jamak berjantina bertentangan dengannya — رجال (jamak maskulin) selepas خمسة yang bertanda feminin, majrur." } }
      ]
    },
    exercises: [
      {
        id: "ex13-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "جَاءَ أَحَدَ عَشَرَ رَجُلًا",
        gloss: { en: "Eleven men came.", ms: "Sebelas orang lelaki datang." },
        targetWord: "أَحَدَ عَشَرَ",
        question: { en: "What is the sign of raf' on \"أَحَدَ عَشَرَ\" (fa'il) here?", ms: "Apakah tanda raf' pada \"أَحَدَ عَشَرَ\" (fa'il) di sini?" },
        options: [
          { value: "mabni-fatha-mahal-rafa", labelEn: "Mabni on fatha on both parts, mahall raf'", labelMs: "Mabni fathah pada kedua-dua bahagian, mahal raf'" },
          { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
        ],
        acceptedValues: ["mabni-fatha-mahal-rafa"],
        ruleNote: { en: "11 and the compound teens are mabni on fatha as one frozen unit — their case is always mahalli, never shown by a changing mark.", ms: "11 dan belasan majmuk mabni fathah sebagai satu unit beku — kesnya sentiasa mahalli, tidak pernah ditunjukkan oleh tanda yang berubah." }
      },
      {
        id: "ex13-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "صَادَفْتُ عِشْرِينَ رَجُلًا",
        gloss: { en: "I encountered twenty men.", ms: "Saya bertemu dua puluh orang lelaki." },
        targetWord: "عِشْرِينَ",
        question: { en: "Give the full analysis of \"عِشْرِينَ\".", ms: "Berikan analisis penuh bagi \"عِشْرِينَ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "maful-bih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" },
            { value: "tamyiz", labelEn: "Tamyiz", labelMs: "Tamyiz" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "jarr", labelEn: "Jarr", labelMs: "Jarr" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "ya-jam-mudhakkar", labelEn: "Ya' + nun, like a sound masculine plural", labelMs: "Ya' + nun, seperti jamak mudhakkar salim" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "maful-bih", case: "nasb", sign: "ya-jam-mudhakkar" } ],
        ruleNote: { en: "عشرين is a ten, declining exactly like a sound masculine plural — ya' + nun for nasb (and jarr) — here as maf'ul bih, with رجلًا as its own tamyiz, nasb.", ms: "عشرين ialah puluhan, di-i'rab persis seperti jamak mudhakkar salim — ya' + nun bagi nasb (dan jarr) — di sini sebagai maf'ul bih, dengan رجلًا sebagai tamyiznya sendiri, nasb." }
      }
    ],
    completion: {
      en: "You can now tell which number family you're looking at — 3–10, the compound teens, 12, or the tens — and apply each one's own i'rab pattern and mudaf-ilayh/tamyiz requirement correctly.",
      ms: "Anda kini boleh mengenal pasti keluarga nombor yang dilihat — 3–10, belasan majmuk, 12, atau puluhan — dan menggunakan corak i'rab serta keperluan mudaf ilayh/tamyiz masing-masing dengan betul."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 15 — إعراب الضمير (Pronoun)
  // ------------------------------------------------------------------
  15: {
    chapterId: 15,
    status: "pilot",
    concept: {
      en: "Pronouns (dama'ir) are always mabni — their case is read from their position in the sentence, never shown by a changing ending. Some are attached (muttasil) to the word before them, some stand alone (munfasil), and some aren't pronounced at all (mustatir, hidden). Two special pronouns deserve their own attention: damir al-sha'n (\"the pronoun of the matter\"), which opens a sentence to glorify the statement that follows it, and damir al-fasl, a pronoun slipped between mubtada' and khabar that carries no i'rab position of its own — it's there only to mark the word after it as khabar, not na't.",
      ms: "Dhamir (kata ganti nama) sentiasa mabni — kesnya dibaca daripada kedudukannya dalam ayat, tidak pernah ditunjukkan oleh hujung kata yang berubah. Sesetengahnya bersambung (muttasil) dengan kata sebelumnya, sesetengahnya berdiri sendiri (munfasil), dan sesetengahnya tidak disebut langsung (mustatir, tersembunyi). Dua dhamir khas wajar diberi perhatian: dhamir al-sha'n (\"dhamir perihal\"), yang membuka ayat untuk mengagungkan pernyataan yang mengikutinya, dan dhamir al-fasl, dhamir yang diselitkan antara mubtada' dan khabar yang tidak membawa kedudukan i'rab sendiri — ia hadir semata-mata untuk menandakan kata selepasnya sebagai khabar, bukan na't."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 15, pdfPages: [69, 77] },
      en: "Pronouns are mabni nouns, standing in raf'/nasb/jarr mahall according to where they sit in the sentence. They are barza (have a spoken/written shape) or mustatira (no visible shape at all): mustatira splits into wajib al-istitar (obligatorily hidden — only ever 1st or 2nd person, as in an amr verb addressed to \"you\") and ja'iz al-istitar (optionally hidden — only 3rd person, since a visible noun or pronoun could stand in its place).\n\nMuttasil (attached) pronouns come in three sets: raf' pronouns attach only to verbs (تُ، نا، تِ، تَ، تُما، واو الجماعة، نون النسوة...); nasb pronouns attach to verbs and to ism af'al alike (ني، نا، ك، ي، ه، ها، كم، هم...); jarr pronouns attach only to nouns and prepositions, never to verbs (ي، نا، ك، ه، ها...).\n\nMunfasil (separate) pronouns likewise split into a raf' set (أنا، نحن، أنتَ، هو...) and a nasb set (إيّايَ، إيّانا، إيّاكَ...) — the separate nasb set is used whenever the verb's own mansub slot is already filled and a second, emphatic mention of the same referent is wanted, or whenever a mansub pronoun must come before its 'amil.\n\nDamir al-sha'n is always 3rd person singular, standing as mubtada' (or ism of kana/inna), with the sentence that follows it serving as its khabar in raf' mahall — used specifically to glorify or dramatize the matter being introduced, so it can't be used for something ordinary.\n\nDamir al-fasl sits between mubtada' and khabar (or their equivalents, such as the ism/khabar of kana) to keep the following word from being misread as a na't, and to add emphasis; the source is explicit that it \"لا محل له من الإعراب\" — it has no i'rab position of its own at all.\n\nA handful of frozen idiomatic constructions (إذا الفجائية with an implied khabar, لعمر الله as a qasam, كل إنسان وشأنه) build on this same mabni-pronoun logic with their own elided mubtada'/khabar.",
      ms: "Dhamir ialah kata nama mabni, berkedudukan raf'/nasb/jarr mengikut tempatnya dalam ayat. Ia barzah (mempunyai bentuk sebutan/tulisan) atau mustatirah (tiada bentuk kelihatan langsung): mustatirah terbahagi kepada wajib al-istitar (tersembunyi secara wajib — hanya orang pertama atau kedua, seperti dalam fi'l amr yang ditujukan kepada \"awak\") dan ja'iz al-istitar (tersembunyi secara harus — hanya orang ketiga, kerana kata nama atau dhamir yang kelihatan boleh menggantikan tempatnya).\n\nDhamir muttasil (bersambung) terbahagi tiga: dhamir raf' hanya bersambung dengan kata kerja (تُ، نا، تِ، تَ، تُما، واو الجماعة، نون النسوة...); dhamir nasb bersambung dengan kata kerja mahupun isim af'al (ني، نا، ك، ي، ه، ها، كم، هم...); dhamir jarr hanya bersambung dengan kata nama dan kata sendi, tidak sekali-kali dengan kata kerja (ي، نا، ك، ه، ها...).\n\nDhamir munfasil (berasingan) turut terbahagi kepada set raf' (أنا، نحن، أنتَ، هو...) dan set nasb (إيّايَ، إيّانا، إيّاكَ...) — set nasb berasingan digunakan apabila slot mansub kata kerja itu sendiri sudah terisi dan sebutan kedua yang menekankan rujukan yang sama dikehendaki, atau apabila dhamir mansub mesti mendahului 'amilnya.\n\nDhamir al-sha'n sentiasa orang ketiga tunggal, berkedudukan mubtada' (atau ism bagi kana/inna), dengan ayat yang mengikutinya menjadi khabarnya dalam kedudukan raf' — digunakan khusus untuk mengagungkan atau mendramatiskan perkara yang diperkenalkan, jadi ia tidak boleh digunakan untuk perkara biasa.\n\nDhamir al-fasl diletakkan antara mubtada' dan khabar (atau yang setara dengannya, seperti ism/khabar kana) untuk mengelakkan kata selepasnya dibaca sebagai na't, dan untuk menambah penegasan; sumber menyatakan dengan jelas \"لا محل له من الإعراب\" — ia langsung tiada kedudukan i'rab sendiri.\n\nBeberapa binaan simpulan bahasa yang beku (إذا الفجائية dengan khabar tersirat, لعمر الله sebagai qasam, كل إنسان وشأنه) dibina atas logik dhamir-mabni yang sama dengan mubtada'/khabar mereka sendiri yang digugurkan."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 15, pdfPages: [74, 74], printedPage: 73 },
      arabic: "أَخُوكَ هُوَ العَالِمُ",
      gloss: { en: "Your brother is the learned one.", ms: "Abang/adik lelaki awak ialah orang yang berilmu itu." },
      words: [
        { id: "w1", ar: "أَخُوكَ", role: { en: "mubtada'", ms: "mubtada'" }, case: "raf'", sign: { en: "waw, because it is one of the 5 nouns and mudaf (to the kaf)", ms: "waw, kerana ia salah satu al-asma' al-khamsah dan mudaf (kepada kaf)" }, reason: { en: "أخو is mudaf to the attached kaf, so it takes the 5-nouns raf' marker waw instead of damma.", ms: "أخو ialah mudaf kepada kaf yang bersambung, maka ia mengambil tanda raf' al-asma' al-khamsah iaitu waw dan bukan damma." } },
        { id: "w2", ar: "هُوَ", role: { en: "damir al-fasl (disjunctive pronoun) — no i'rab position", ms: "dhamir al-fasl (dhamir pemisah) — tiada kedudukan i'rab" }, case: "—", sign: { en: "no i'rab position at all (لا محل له من الإعراب)", ms: "langsung tiada kedudukan i'rab (لا محل له من الإعراب)" }, reason: { en: "Inserted between the mubtada' and the following definite word to mark العالم as khabar rather than na't, and to add emphasis; the source is explicit that this pronoun carries no case of its own.", ms: "Diselitkan antara mubtada' dan kata makrifah selepasnya untuk menandakan العالم sebagai khabar dan bukan na't, serta menambah penegasan; sumber menyatakan dengan jelas dhamir ini tidak membawa sebarang kes sendiri." } },
        { id: "w3", ar: "العَالِمُ", role: { en: "khabar", ms: "khabar" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "Khabar of the mubtada' أخوك, raf' with a visible damma.", ms: "Khabar bagi mubtada' أخوك, raf' dengan damma yang zahir." } }
      ]
    },
    exercises: [
      {
        id: "ex15-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "العِلْمُ هُوَ السِّلَاحُ",
        gloss: { en: "Knowledge is the weapon.", ms: "Ilmu itulah senjatanya." },
        targetWord: "هُوَ",
        question: { en: "What is the role of \"هُوَ\" here, and what i'rab position does it carry?", ms: "Apakah peranan \"هُوَ\" di sini, dan kedudukan i'rab apakah yang dibawanya?" },
        options: [
          { value: "fasl", labelEn: "Damir al-fasl — no i'rab position at all", labelMs: "Dhamir al-fasl — langsung tiada kedudukan i'rab" },
          { value: "khabar", labelEn: "Khabar of the mubtada', raf'", labelMs: "Khabar bagi mubtada', raf'" }
        ],
        acceptedValues: ["fasl"],
        ruleNote: { en: "A pronoun sitting between mubtada' and khabar like this, with a definite word following it, is damir al-fasl — it marks السلاح as khabar (not na't) and carries no i'rab position of its own.", ms: "Dhamir yang duduk antara mubtada' dan khabar begini, dengan kata makrifah mengikutinya, ialah dhamir al-fasl — ia menandakan السلاح sebagai khabar (bukan na't) dan tidak membawa sebarang kedudukan i'rab sendiri." }
      },
      {
        id: "ex15-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "إِنَّهَا الحَيَاةُ جَمِيلَةٌ",
        gloss: { en: "Indeed, life is beautiful.", ms: "Sesungguhnya, hidup ini indah." },
        targetWord: "هَا",
        question: { en: "Give the full analysis of the \"هَا\" attached to إنّ.", ms: "Berikan analisis penuh bagi \"هَا\" yang bersambung dengan إنّ." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "ism-inna-shan", labelEn: "Damir al-sha'n, ism of inna", labelMs: "Dhamir al-sha'n, ism bagi inna" },
            { value: "mudaf-ilayh", labelEn: "Mudaf ilayh", labelMs: "Mudaf ilayh" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "jarr", labelEn: "Jarr", labelMs: "Jarr" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "mabni-no-mark", labelEn: "Mabni, no visible i'rab mark", labelMs: "Mabni, tiada tanda i'rab zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "ism-inna-shan", case: "nasb", sign: "mabni-no-mark" } ],
        ruleNote: { en: "ها here is damir al-sha'n — the 3rd-person pronoun that opens a statement for emphasis, with the whole following sentence (الحياةُ جميلةٌ) as its khabar in raf' mahall. Like all pronouns, it is mabni with no visible mark, standing in nasb mahall as ism of إنّ.", ms: "ها di sini ialah dhamir al-sha'n — dhamir orang ketiga yang membuka pernyataan untuk penegasan, dengan keseluruhan ayat selepasnya (الحياةُ جميلةٌ) menjadi khabarnya dalam kedudukan raf'. Seperti semua dhamir, ia mabni tanpa tanda zahir, berkedudukan nasb sebagai ism bagi إنّ." }
      }
    ],
    completion: {
      en: "You can now tell apart the pronoun families — attached vs separate, hidden-obligatory vs hidden-optional — and recognize the two special pronouns, damir al-sha'n and damir al-fasl, that don't behave like ordinary mubtada'/khabar/maf'ul-bih pronouns.",
      ms: "Anda kini boleh membezakan keluarga dhamir — bersambung vs berasingan, tersembunyi wajib vs tersembunyi harus — dan mengenali dua dhamir khas, dhamir al-sha'n dan dhamir al-fasl, yang tidak berkelakuan seperti dhamir mubtada'/khabar/maf'ul bih biasa."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 16 — إعراب اسم الإشارة (Demonstrative Noun)
  // ------------------------------------------------------------------
  16: {
    chapterId: 16,
    status: "pilot",
    concept: {
      en: "A demonstrative noun (ism isharah) points at something near, far, or \"in between,\" either something you can sense (ذا, this) or something only mental, like a memory (تلك ذكرى, that memory). Every demonstrative is mabni — except the dual forms (هذان/هاتان for near, ذانِ/تانِ for far), which are \"mulhaq bil-muthanna\" (patterned on the dual) and so take alif in raf' and ya' in nasb/jarr, exactly like a real mu'rab dual noun, with nun replacing the singular noun's tanwin.",
      ms: "Ism isharah menunjuk kepada sesuatu yang dekat, jauh, atau \"pertengahan,\" sama ada sesuatu yang dapat dirasai (ذا, ini) atau sesuatu yang hanya pada fikiran, seperti kenangan (تلك ذكرى, kenangan itu). Setiap isim isyarah ialah mabni — kecuali bentuk duanya (هذان/هاتان bagi dekat, ذانِ/تانِ bagi jauh), yang \"mulhaq bil-muthanna\" (mengikut corak dua) dan dengan itu mengambil alif pada raf' dan ya' pada nasb/jarr, persis seperti kata nama dua mu'rab yang sebenar, dengan nun menggantikan tanwin kata tunggalnya."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 16, pdfPages: [78, 81] },
      en: "An ism isharah points to something specified either sensorially (hissi — ذا this, تلك that) or mentally (dhihni — a remembered or abstract referent). Demonstratives are classed by gender (masculine/feminine), number (singular/dual/plural), and distance (near/far/middle), and all of them are mabni in raf'/nasb/jarr mahall according to position — except the dual forms, which, being mulhaq bil-muthanna, carry alif for raf' and ya' for nasb and jarr, with nun replacing the tanwin a singular noun would carry.\n\nThe tanbih particle ها may be prefixed to a demonstrative (هذا), and the khitab kaf (ك) may be suffixed to it (ذاك) — either or both together (ذلك, ذانِك).\n\nA definite noun following a demonstrative is its na't (هذا الولدُ المجتهدُ); the demonstrative itself takes whatever i'rab role the sentence gives it — mubtada', khabar, maf'ul bih, badal, or bayan. When a demonstrative instead follows a preceding definite noun (اسم الإشارة المسبوق), it is the demonstrative that is i'rabed as na't to that noun.\n\nA family of related mabni words — ثَمَّ، هنا، هناك، هنا، حيث — function as zuruf makan carrying an implicit sense of pointing, and are treated the same mabni way.",
      ms: "Ism isharah menunjuk kepada sesuatu yang ditentukan sama ada secara deria (hissi — ذا ini, تلك itu) atau secara mental (dhihni — rujukan yang dikenang atau abstrak). Isim isyarah digolongkan mengikut jantina (lelaki/perempuan), bilangan (tunggal/dua/jamak), dan jarak (dekat/jauh/pertengahan), dan kesemuanya mabni dalam kedudukan raf'/nasb/jarr mengikut kedudukan — KECUALI bentuk dua, yang, kerana mulhaq bil-muthanna, membawa alif bagi raf' dan ya' bagi nasb dan jarr, dengan nun menggantikan tanwin yang dibawa kata tunggal.\n\nHuruf tanbih ها boleh didahulukan pada isim isyarah (هذا), dan kaf khitab (ك) boleh disusuli padanya (ذاك) — salah satu atau kedua-duanya sekali (ذلك, ذانِك).\n\nKata nama makrifah yang mengikuti isim isyarah ialah na'tnya (هذا الولدُ المجتهدُ); isim isyarah itu sendiri mengambil apa jua peranan i'rab yang diberikan ayat — mubtada', khabar, maf'ul bih, badal, atau bayan. Apabila isim isyarah pula mengikuti kata nama makrifah yang mendahuluinya (اسم الإشارة المسبوق), isim isyarah itulah yang di-i'rab sebagai na't kepada kata nama itu.\n\nSekumpulan kata mabni yang berkaitan — ثَمَّ، هنا، هناك، حيث — berfungsi sebagai zarf makan yang membawa makna tersirat menunjuk, dan dilayan dengan cara mabni yang sama."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 16, pdfPages: [78, 78] },
      arabic: "هَذَانِ وَلَدَانِ مُجْتَهِدَانِ",
      gloss: { en: "These two are two diligent boys.", ms: "Dua ini ialah dua budak lelaki yang rajin." },
      words: [
        { id: "w1", ar: "هَذَانِ", role: { en: "mubtada'", ms: "mubtada'" }, case: "raf'", sign: { en: "alif, because it is mulhaq bil-muthanna", ms: "alif, kerana ia mulhaq bil-muthanna" }, reason: { en: "The dual demonstrative is patterned on the dual, so it carries alif for raf' (not damma), with the nun standing in for the tanwin a singular noun would carry.", ms: "Isim isyarah dua mengikut corak kata nama dua, maka ia membawa alif bagi raf' (bukan damma), dengan nun menggantikan tanwin yang dibawa kata tunggal." } },
        { id: "w2", ar: "وَلَدَانِ", role: { en: "khabar", ms: "khabar" }, case: "raf'", sign: { en: "alif, because it is a (true) dual noun", ms: "alif, kerana ia kata nama dua (sebenar)" }, reason: { en: "Khabar of the mubtada', an ordinary dual noun taking alif for raf' and nun as the tanwin-substitute.", ms: "Khabar bagi mubtada', kata nama dua biasa yang mengambil alif bagi raf' dan nun sebagai ganti tanwin." } },
        { id: "w3", ar: "مُجْتَهِدَانِ", role: { en: "na't of وَلَدَانِ", ms: "na't bagi وَلَدَانِ" }, case: "raf'", sign: { en: "alif, following the described dual noun", ms: "alif, mengikut kata nama dua yang disifatkan" }, reason: { en: "The na't follows the noun it describes in i'rab, so it too takes the dual's alif marker.", ms: "Na't mengikut kata nama yang disifatkannya dalam i'rab, maka ia turut mengambil tanda alif bagi kata nama dua." } }
      ]
    },
    exercises: [
      {
        id: "ex16-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "هَاتَانِ طَالِبَتَانِ مُجْتَهِدَتَانِ",
        gloss: { en: "These two are two diligent [female] students.", ms: "Dua ini ialah dua pelajar perempuan yang rajin." },
        targetWord: "هَاتَانِ",
        question: { en: "What is the sign of raf' on \"هَاتَانِ\", and why?", ms: "Apakah tanda raf' pada \"هَاتَانِ\", dan mengapa?" },
        options: [
          { value: "alif-mulhaq", labelEn: "Alif — mulhaq bil-muthanna (patterned on the dual)", labelMs: "Alif — mulhaq bil-muthanna (mengikut corak dua)" },
          { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
        ],
        acceptedValues: ["alif-mulhaq"],
        ruleNote: { en: "Like هذان, the feminine dual demonstrative هاتان is mulhaq bil-muthanna, so it carries alif for raf' rather than any ordinary mabni mark.", ms: "Seperti هذان, isim isyarah dua feminin هاتان ialah mulhaq bil-muthanna, maka ia membawa alif bagi raf' dan bukan sebarang tanda mabni biasa." }
      },
      {
        id: "ex16-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "جَاءَ ذَلِكَ الرَّجُلُ",
        gloss: { en: "That man came.", ms: "Lelaki itu telah datang." },
        targetWord: "ذَلِكَ",
        question: { en: "Give the full analysis of \"ذَلِكَ\".", ms: "Berikan analisis penuh bagi \"ذَلِكَ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" },
            { value: "mubtada", labelEn: "Mubtada'", labelMs: "Mubtada'" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "raf", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "mabni-sukun", labelEn: "Mabni on sukun (mahall raf')", labelMs: "Mabni pada sukun (mahal raf')" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "fail", case: "raf", sign: "mabni-sukun" } ],
        ruleNote: { en: "ذلك is a singular (non-dual) demonstrative, so — unlike هذان — it stays mabni on sukun throughout, here in raf' mahall as fa'il of جاء, with الرجل as its na't.", ms: "ذلك ialah isim isyarah tunggal (bukan dua), maka — berbeza daripada هذان — ia kekal mabni pada sukun sepanjang masa, di sini dalam kedudukan raf' sebagai fa'il bagi جاء, dengan الرجل sebagai na'tnya." }
      }
    ],
    completion: {
      en: "You can now place a demonstrative's i'rab role correctly and recognize the one real exception — the dual forms, which borrow the dual noun's own alif/ya' markers instead of staying flatly mabni.",
      ms: "Anda kini boleh menentukan peranan i'rab isim isyarah dengan betul dan mengenali satu-satunya pengecualian sebenar — bentuk dua, yang meminjam tanda alif/ya' kata nama dua itu sendiri dan bukan kekal mabni semata-mata."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 17 — إعراب اسم الموصول (Relative Noun)
  // ------------------------------------------------------------------
  17: {
    chapterId: 17,
    status: "pilot",
    concept: {
      en: "A relative noun (ism mawsul) is a vague noun that only means something once its own little sentence — the sila — is attached after it; together they're inseparable (الذي يحترم نفسه يُحترَم, \"the one who respects himself is respected\"). Relative nouns are mabni, like demonstratives, with the same dual exception (اللذان/اللتان). The sila needs its own pronoun pointing back to the relative noun (the 'a'id), which can sometimes be dropped. One relative noun, أيّ, actually declines normally — unless it's mudaf and its 'a'id has been dropped, when bina' on damma becomes an allowed alternative.",
      ms: "Ism mawsul ialah kata nama kabur yang hanya bermakna apabila ayat kecilnya sendiri — silah — disambungkan selepasnya; kedua-duanya tidak dapat dipisahkan (الذي يحترم نفسه يُحترَم, \"orang yang menghormati dirinya dihormati\"). Ism mawsul adalah mabni, seperti isim isyarah, dengan pengecualian dua yang sama (اللذان/اللتان). Silah memerlukan dhamirnya sendiri yang menunjuk kembali kepada ism mawsul itu ('a'id), yang kadangkala boleh digugurkan. Satu ism mawsul, أيّ, sebenarnya di-i'rab secara biasa — melainkan ia mudaf dan 'a'idnya digugurkan, apabila bina' pada damma menjadi alternatif yang diharuskan."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 17, pdfPages: [82, 86] },
      en: "A relative noun (ism mubham, \"vague noun\") links two sentences, or two parts of one, and its meaning is only completed once the second sentence (or the sentence's closing part) is stated; that completing sentence is the sila. The fixed relative nouns are: الذي، اللذان، الذين، الذين (mudhakkar); التي، اللتان، اللاتي/اللائي (mu'annath); مَن for rational beings and ما for non-rational, each usable for singular, dual, or plural alike.\n\nAll relative nouns are mabni — raf'/nasb/jarr mahall by position — except the dual forms (اللذان/اللتان for raf', اللذين/اللتين for nasb and jarr), which, exactly like the demonstrative duals, are mulhaq bil-muthanna and so carry alif for raf' and ya' for nasb/jarr.\n\nThe sila must contain an 'a'id, a pronoun (visible or hidden) referring back to the relative noun; this 'a'id may be dropped when doing so causes no ambiguity.\n\nWhen the relative noun is preceded by a definite word, it is i'rabed as na't to it; when preceded by an indefinite noun, it is instead mudaf ilayh.\n\nأيّ, used as a relative noun, is the one genuine exception to all of this: it is mu'rab (raf' damma, nasb fatha, jarr kasra) like an ordinary noun — unless it is mudaf and the 'a'id inside its sila has been dropped, in which case bina' on damma becomes an allowed alternative reading alongside ordinary i'rab (رأيتُ أيَّهم قادمٌ — نصبًا أو بناءً على الضم).",
      ms: "Ism mawsul (\"kata nama kabur\") menghubungkan dua ayat, atau dua bahagian satu ayat, dan maknanya hanya lengkap apabila ayat kedua (atau bahagian penutup ayat) dinyatakan; ayat yang melengkapkan itu ialah silah. Ism mawsul yang tetap ialah: الذي، اللذان، الذين (mudhakkar); التي، اللتان، اللاتي/اللائي (mu'annath); مَن bagi makhluk berakal dan ما bagi yang tidak berakal, masing-masing boleh digunakan bagi tunggal, dua, atau jamak.\n\nSemua ism mawsul adalah mabni — kedudukan raf'/nasb/jarr mengikut kedudukan — KECUALI bentuk dua (اللذان/اللتان bagi raf', اللذين/اللتين bagi nasb dan jarr), yang, persis seperti isim isyarah dua, mulhaq bil-muthanna dan dengan itu membawa alif bagi raf' dan ya' bagi nasb/jarr.\n\nSilah mesti mengandungi 'a'id, dhamir (kelihatan atau tersembunyi) yang merujuk kembali kepada ism mawsul; 'a'id ini boleh digugurkan apabila tidak menimbulkan kekeliruan.\n\nApabila ism mawsul didahului kata makrifah, ia di-i'rab sebagai na't kepadanya; apabila didahului kata nama nakirah, ia pula menjadi mudaf ilayh.\n\nأيّ, apabila digunakan sebagai ism mawsul, ialah satu-satunya pengecualian sebenar kepada semua ini: ia mu'rab (raf' damma, nasb fathah, jarr kasrah) seperti kata nama biasa — KECUALI apabila ia mudaf dan 'a'id dalam silahnya digugurkan, apabila bina' pada damma menjadi bacaan alternatif yang diharuskan di samping i'rab biasa (رأيتُ أيَّهم قادمٌ — nasb atau bina' pada damma)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 17, pdfPages: [82, 82] },
      arabic: "سَلَّمْتُ عَلَى التِي أَعْرِفُهَا",
      gloss: { en: "I greeted the one [female] I know.", ms: "Saya memberi salam kepada perempuan yang saya kenali." },
      words: [
        { id: "w1", ar: "التِي", role: { en: "ism mawsul, majrur by على", ms: "ism mawsul, majrur oleh على" }, case: "jarr", sign: { en: "mabni on sukun, mahall jarr", ms: "mabni pada sukun, mahal jarr" }, reason: { en: "Relative nouns are mabni regardless of their i'rab role; here it sits in jarr mahall after the preposition على.", ms: "Ism mawsul adalah mabni tidak kira peranan i'rabnya; di sini ia berkedudukan jarr selepas kata sendi على." } },
        { id: "w2", ar: "أَعْرِفُهَا", role: { en: "sila (relative clause) — no i'rab position", ms: "silah (ayat penghubung) — tiada kedudukan i'rab" }, case: "—", sign: { en: "no i'rab position (لا محل لها من الإعراب لأنها صلة الموصول)", ms: "tiada kedudukan i'rab (لا محل لها من الإعراب لأنها صلة الموصول)" }, reason: { en: "The clause completing التي's meaning; being a sila, the whole sentence has no i'rab position of its own. Inside it, ها is the attached pronoun serving as maf'ul bih and as the 'a'id referring back to التي.", ms: "Ayat yang melengkapkan makna التي; kerana silah, keseluruhan ayat itu tiada kedudukan i'rab sendiri. Di dalamnya, ها ialah dhamir bersambung yang menjadi maf'ul bih dan juga 'a'id yang merujuk kembali kepada التي." } }
      ]
    },
    exercises: [
      {
        id: "ex17-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "يَنْجَحُ اللَّذَانِ يَجْتَهِدَانِ",
        gloss: { en: "The two who strive succeed.", ms: "Dua orang yang bersungguh-sungguh itu berjaya." },
        targetWord: "اللَّذَانِ",
        question: { en: "What is the sign of raf' on \"اللَّذَانِ\", and why?", ms: "Apakah tanda raf' pada \"اللَّذَانِ\", dan mengapa?" },
        options: [
          { value: "alif-mulhaq", labelEn: "Alif — mulhaq bil-muthanna (patterned on the dual)", labelMs: "Alif — mulhaq bil-muthanna (mengikut corak dua)" },
          { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
        ],
        acceptedValues: ["alif-mulhaq"],
        ruleNote: { en: "Just like the demonstrative duals, the relative-noun dual اللذان is mulhaq bil-muthanna, so it carries alif for raf' instead of a flat mabni mark.", ms: "Sama seperti isim isyarah dua, ism mawsul dua اللذان ialah mulhaq bil-muthanna, maka ia membawa alif bagi raf' dan bukan tanda mabni rata." }
      },
      {
        id: "ex17-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "أُحِبُّ الَّذِي يَصْدُقُ",
        gloss: { en: "I love the one who is truthful.", ms: "Saya suka orang yang bercakap benar." },
        targetWord: "الَّذِي",
        question: { en: "Give the full analysis of \"الَّذِي\".", ms: "Berikan analisis penuh bagi \"الَّذِي\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "maful-bih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" },
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "raf", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "mabni-sukun", labelEn: "Mabni on sukun (mahall nasb)", labelMs: "Mabni pada sukun (mahal nasb)" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "maful-bih", case: "nasb", sign: "mabni-sukun" } ],
        ruleNote: { en: "الذي is a singular (non-dual) relative noun, so it stays mabni on sukun; here it is maf'ul bih of أحب, standing in nasb mahall, with يصدق as its sila (hidden 'a'id: هو).", ms: "الذي ialah ism mawsul tunggal (bukan dua), maka ia kekal mabni pada sukun; di sini ia maf'ul bih bagi أحب, berkedudukan nasb, dengan يصدق sebagai silahnya ('a'id tersembunyi: هو)." }
      }
    ],
    completion: {
      en: "You can now identify a sila and its 'a'id, place a relative noun's i'rab role correctly, and recognize both of its exceptions: the dual forms (alif/ya', mulhaq bil-muthanna) and أيّ (ordinarily mu'rab, with bina' allowed only when mudaf and its 'a'id is dropped).",
      ms: "Anda kini boleh mengenal pasti silah dan 'a'idnya, menentukan peranan i'rab ism mawsul dengan betul, dan mengenali kedua-dua pengecualiannya: bentuk dua (alif/ya', mulhaq bil-muthanna) dan أيّ (lazimnya mu'rab, dengan bina' diharuskan hanya apabila mudaf dan 'a'idnya digugurkan)."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 18 — إعراب الظرف (المفعول فيه) (Zarf / Adverbial)
  // ------------------------------------------------------------------
  18: {
    chapterId: 18,
    status: "pilot",
    concept: {
      en: "A zarf (also called maf'ul fih) is a noun of time or place standing in nasb to say when or where an action happened — صباحًا (in the morning), أمامَ البيت (in front of the house). Most zuruf take a visible nasb mark, but a handful of them (متى، حيث، إذ، منذ...) are themselves mabni words whose fixed vowel never changes, whatever position they're in. The source also lists four kinds of words that can stand in (niyaba) for a zarf and take nasb on its behalf: a word meaning \"all/some\" of a time span, a na't of a zarf, a number, or a masdar sharing the sentence's implied time sense.",
      ms: "Zarf (juga dipanggil maf'ul fih) ialah kata nama masa atau tempat yang berkedudukan nasb untuk menyatakan bila atau di mana sesuatu perbuatan berlaku — صباحًا (pada waktu pagi), أمامَ البيت (di hadapan rumah). Kebanyakan zarf membawa tanda nasb yang zahir, tetapi beberapa daripadanya (متى، حيث، إذ، منذ...) adalah kata mabni yang baris tetapnya tidak pernah berubah, walau apa jua kedudukannya. Sumber turut menyenaraikan empat jenis kata yang boleh menggantikan (niyabah) zarf dan mengambil nasb bagi pihaknya: kata yang bermaksud \"semua/sebahagian\" tempoh masa, na't bagi zarf, nombor, atau masdar yang berkongsi makna masa tersirat ayat itu."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 18, pdfPages: [87, 96] },
      en: "The zarf (al-maf'ul fih) is a noun taking nasb to express the time or place of an action, except for a closed list of words whose own lafz forces one fixed vowel regardless of position — among the most common: متى، منذ، لدى، لدن، لما، كيفما، كيف، قطُّ، قبل، دون، ريث، حيثما، حيثُ، حسبُ، الآن، إذ، إذا، أمس، ثمَّ، بينما، أين، أيان، أنّى.\n\nA zarf may also be nasb by a dropped/implied 'amil wujuban, as in يومَ الجمعة صمتُ فيه (\"Friday — I fasted it\"). Four kinds of words can take nasb standing in (niyaba) for a zarf:\n1. A word denoting the whole or a part of the time span (ما دلّ على كلية أو جزئية), e.g. دَرَسْتُ بَعْضَ الوَقْتِ.\n2. A na't describing the zarf, with the zarf itself elided, e.g. سَهِرَ طَوِيلًا (طويلًا standing in for وقتًا طويلًا).\n3. A number (ism al-'adad), e.g. اشْتَغَلَ ثَلَاثَةَ أَشْهُرٍ.\n4. A masdar sharing the sentence's implied time sense, e.g. نَرْفَعُ الظُّلْمَ نِهَايَةَ القَرْنِ العِشْرِينَ.\n\nA jarr-majrur phrase can also stand in for an elided zarf (جلستُ في الدار, في الدار مجرور لفظًا منصوب محلًا على الظرفية). حيثُ is always mabni on damma and must be mudaf — typically to a full sentence. منذ and مذ may be read either as a harf jarr (zarf governed by them) or, when followed by a marfu' noun, as a mubtada' with the following noun as its khabar — both readings are accepted by grammarians, and either is defensible depending on what follows.",
      ms: "Zarf (al-maf'ul fih) ialah kata nama yang mengambil nasb untuk menyatakan masa atau tempat sesuatu perbuatan, kecuali senarai tertutup kata yang lafaznya sendiri mewajibkan satu baris tetap tidak kira kedudukan — antara yang paling biasa: متى، منذ، لدى، لدن، لما، كيفما، كيف، قطُّ، قبل، دون، ريث، حيثما، حيثُ، حسبُ، الآن، إذ، إذا، أمس، ثمَّ، بينما، أين، أيان، أنّى.\n\nZarf juga boleh nasb oleh 'amil yang digugurkan secara wajib, seperti يومَ الجمعة صمتُ فيه (\"Jumaat — saya berpuasa pada hari itu\"). Empat jenis kata boleh mengambil nasb menggantikan (niyabah) zarf:\n1. Kata yang membawa maksud keseluruhan atau sebahagian tempoh masa (ما دلّ على كلية أو جزئية), contoh: دَرَسْتُ بَعْضَ الوَقْتِ.\n2. Na't yang menyifatkan zarf, dengan zarf itu sendiri digugurkan, contoh: سَهِرَ طَوِيلًا (طويلًا menggantikan وقتًا طويلًا).\n3. Nombor (ism al-'adad), contoh: اشْتَغَلَ ثَلَاثَةَ أَشْهُرٍ.\n4. Masdar yang berkongsi makna masa tersirat ayat itu, contoh: نَرْفَعُ الظُّلْمَ نِهَايَةَ القَرْنِ العِشْرِينَ.\n\nFrasa jar-majrur juga boleh menggantikan zarf yang digugurkan (جلستُ في الدار, في الدار majrur dari segi lafaz tetapi manshub dari segi mahal atas al-zarfiyyah). حيثُ sentiasa mabni pada damma dan mesti menjadi mudaf — lazimnya kepada ayat penuh. منذ dan مذ boleh dibaca sama ada sebagai harf jarr (zarf dikuasai olehnya) atau, apabila diikuti kata nama marfu', sebagai mubtada' dengan kata nama selepasnya sebagai khabarnya — kedua-dua bacaan diterima oleh ahli nahu, dan mana-mana satu boleh dipertahankan bergantung kepada apa yang mengikutinya."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 18, pdfPages: [87, 88], printedPage: 87 },
      arabic: "جَلَسْتُ صَبَاحًا أَمَامَ المَوْقِدِ",
      gloss: { en: "I sat in the morning in front of the hearth.", ms: "Saya duduk pada waktu pagi di hadapan unggun api." },
      words: [
        { id: "w1", ar: "صَبَاحًا", role: { en: "zarf zaman", ms: "zarf zaman" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "A noun of time standing in nasb on al-zarfiyya, linked to جلست.", ms: "Kata nama masa berkedudukan nasb atas al-zarfiyyah, berkait dengan جلست." } },
        { id: "w2", ar: "أَمَامَ", role: { en: "zarf makan, mudaf", ms: "zarf makan, mudaf" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "A noun of place standing in nasb on al-zarfiyya, linked to جلست, and mudaf to الموقد.", ms: "Kata nama tempat berkedudukan nasb atas al-zarfiyyah, berkait dengan جلست, dan mudaf kepada الموقد." } },
        { id: "w3", ar: "المَوْقِدِ", role: { en: "mudaf ilayh", ms: "mudaf ilayh" }, case: "jarr", sign: { en: "apparent kasra", ms: "kasrah zahir" }, reason: { en: "Mudaf ilayh of أمام, jarr with a visible kasra.", ms: "Mudaf ilayh bagi أمام, jarr dengan kasrah yang zahir." } }
      ]
    },
    exercises: [
      {
        id: "ex18-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "اجْلِسْ حَيْثُ تُحِبُّ",
        gloss: { en: "Sit where you like.", ms: "Duduklah di mana awak suka." },
        targetWord: "حَيْثُ",
        question: { en: "\"حَيْثُ\" is a zarf makan here. Why doesn't it carry a visible nasb mark like صباحًا or أمامَ?", ms: "\"حَيْثُ\" ialah zarf makan di sini. Mengapa ia tidak membawa tanda nasb yang zahir seperti صباحًا atau أمامَ?" },
        options: [
          { value: "mabni-damma", labelEn: "Its lafz is mabni, fixed on damma — nasb is only mahall (implied)", labelMs: "Lafaznya mabni, tetap pada damma — nasb hanya mahal (tersirat)" },
          { value: "idafa-blocked", labelEn: "Blocked by idafa to the following word", labelMs: "Dihalang oleh idafa kepada kata selepasnya" }
        ],
        acceptedValues: ["mabni-damma"],
        ruleNote: { en: "حيثُ is one of the zuruf whose own lafz forces a fixed vowel — always mabni on damma, however it sits in the sentence — so its nasb here is mahall only, never a visible mark.", ms: "حيثُ ialah salah satu zarf yang lafaznya sendiri mewajibkan satu baris tetap — sentiasa mabni pada damma, walau apa jua kedudukannya dalam ayat — maka nasbnya di sini hanya mahal, tidak pernah tanda zahir." }
      },
      {
        id: "ex18-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "سَهِرْتُ كُلَّ اللَّيْلِ",
        gloss: { en: "I stayed up the whole night.", ms: "Saya berjaga sepanjang malam." },
        targetWord: "كُلَّ",
        question: { en: "Give the full analysis of \"كُلَّ\".", ms: "Berikan analisis penuh bagi \"كُلَّ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "naib-zarf", labelEn: "Standing in for the zarf (niyaba — denotes the whole of the time span)", labelMs: "Menggantikan zarf (niyabah — membawa maksud keseluruhan tempoh)" },
            { value: "zarf", labelEn: "Zarf itself", labelMs: "Zarf itu sendiri" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "jarr", labelEn: "Jarr", labelMs: "Jarr" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "kasra-zahira", labelEn: "Apparent kasra", labelMs: "Kasrah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "naib-zarf", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "كلّ is not itself a zarf — it is mudaf to الليل and stands in for the zarf because it denotes the whole (kulliyya) of the time span, taking nasb on the zarf's behalf, exactly the first of the four niyaba categories.", ms: "كلّ bukan zarf itu sendiri — ia mudaf kepada الليل dan menggantikan zarf kerana ia membawa maksud keseluruhan (kulliyyah) tempoh masa, mengambil nasb bagi pihak zarf, tepat kategori pertama daripada empat kategori niyabah." }
      }
    ],
    completion: {
      en: "You can now tell an ordinary nasb-marked zarf apart from the fixed-mabni zuruf, and recognize the four kinds of word that can stand in for a zarf and take its nasb.",
      ms: "Anda kini boleh membezakan zarf bertanda nasb biasa daripada zarf mabni tetap, dan mengenali empat jenis kata yang boleh menggantikan zarf dan mengambil nasbnya."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 19 — إعراب اسم الاستفهام (Interrogative Noun)
  // ------------------------------------------------------------------
  19: {
    chapterId: 19,
    status: "pilot",
    concept: {
      en: "Istifham (questioning) is a request directed at the listener about the reality of something, made through an istifham tool — either an ism (مَن، ما، ماذا، متى، أين، كيف، كم...) or a harf (hamza, هل). The interrogative nouns are mabni, each with its own typical i'rab role — كيف and أين usually open a sentence as khabar muqaddam, متى as zarf or khabar muqaddam, مَن/ما as mubtada' or khabar muqaddam — except أيّ, which is mu'rab like an ordinary noun, the same exception the relative noun أي carries.",
      ms: "Istifham (soalan) ialah permintaan yang ditujukan kepada pendengar tentang hakikat sesuatu, dibuat melalui alat istifham — sama ada ism (مَن، ما، ماذا، متى، أين، كيف، كم...) atau harf (hamzah, هل). Ism istifham adalah mabni, masing-masing dengan peranan i'rab lazimnya — كيف dan أين biasanya membuka ayat sebagai khabar muqaddam, متى sebagai zarf atau khabar muqaddam, مَن/ما sebagai mubtada' atau khabar muqaddam — KECUALI أيّ, yang mu'rab seperti kata nama biasa, pengecualian yang sama yang dibawa oleh ism mawsul أي."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 19, pdfPages: [97, 102] },
      en: "Istifham is a request directed to the addressee about the reality of a thing or matter, by means of an istifham tool. The tools split into: 1) nouns — مَن، ما، ماذا، منذا، متى، أيّان، أنّى، كيف، أين، أيّ، كم; 2) letters — the hamza and هل.\n\nEvery interrogative noun is mabni except أيّ, which is mu'rab — raf' damma, nasb fatha, jarr kasra — like any ordinary noun; it only becomes a candidate for bina' (on damma) in the same narrow circumstance as the relative أيّ: when it is mudaf and the 'a'id pronoun of what follows has been dropped (تُعرَب (أي) معربًا يرفع بالضمة وينصب بالفتحة ويجر بالكسرة، إلا إذا أضيف وحُذِف الضمير الواقع صدر صلته...).\n\nCommon i'rab patterns: مَن and ما are mubtada' when followed directly by a noun (مَن عندك), or khabar muqaddam when followed by a marfu' definite noun (مَن أبوك — خبر مقدم، أبوك مبتدأ مؤخر على الأصح); ماذا functions as a single maf'ul-bih unit (ماذا اشتريت؟); كيف is mabni on fatha, usually khabar muqaddam (كيف حالك) or hal; أين is mabni on fatha, either zarf makan (أين جلست) or khabar muqaddam (أين بيتك); متى is mabni on sukun, either zarf zaman or khabar muqaddam; أنّى (\"from where/how\") is mabni on sukun and functions much like أين.",
      ms: "Istifham ialah permintaan yang ditujukan kepada mukhatab tentang hakikat sesuatu perkara, melalui alat istifham. Alatnya terbahagi kepada: 1) kata nama — مَن، ما، ماذا، منذا، متى، أيّان، أنّى، كيف، أين، أيّ، كم; 2) huruf — hamzah dan هل.\n\nSetiap ism istifham adalah mabni KECUALI أيّ, yang mu'rab — raf' damma, nasb fathah, jarr kasrah — seperti kata nama biasa; ia hanya menjadi calon bina' (pada damma) dalam keadaan sempit yang sama seperti ism mawsul أيّ: apabila ia mudaf dan dhamir 'a'id bagi apa yang mengikutinya digugurkan.\n\nCorak i'rab biasa: مَن dan ما ialah mubtada' apabila diikuti terus oleh kata nama (مَن عندك), atau khabar muqaddam apabila diikuti kata nama makrifah marfu' (مَن أبوك — khabar muqaddam, أبوك mubtada' mu'akhkhar menurut pendapat yang lebih sahih); ماذا berfungsi sebagai satu unit maf'ul bih (ماذا اشتريت؟); كيف mabni pada fathah, biasanya khabar muqaddam (كيف حالك) atau hal; أين mabni pada fathah, sama ada zarf makan (أين جلست) atau khabar muqaddam (أين بيتك); متى mabni pada sukun, sama ada zarf zaman atau khabar muqaddam; أنّى (\"dari mana/bagaimana\") mabni pada sukun dan berfungsi hampir sama seperti أين."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 19, pdfPages: [97, 97] },
      arabic: "كَيْفَ حَالُكَ؟",
      gloss: { en: "How are you?", ms: "Apa khabar?" },
      words: [
        { id: "w1", ar: "كَيْفَ", role: { en: "khabar muqaddam", ms: "khabar muqaddam" }, case: "raf'", sign: { en: "mabni on fatha, mahall raf'", ms: "mabni pada fathah, mahal raf'" }, reason: { en: "كيف is mabni on fatha regardless of position; here it stands in raf' mahall as the fronted khabar.", ms: "كيف mabni pada fathah tidak kira kedudukan; di sini ia berkedudukan raf' sebagai khabar yang didahulukan." } },
        { id: "w2", ar: "حَالُكَ", role: { en: "mubtada' mu'akhkhar (delayed mubtada')", ms: "mubtada' mu'akhkhar" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "Delayed mubtada', raf' with a visible damma, mudaf to the attached kaf.", ms: "Mubtada' yang ditangguhkan, raf' dengan damma yang zahir, mudaf kepada kaf yang bersambung." } }
      ]
    },
    exercises: [
      {
        id: "ex19-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "أَيْنَ بَيْتُكَ؟",
        gloss: { en: "Where is your house?", ms: "Di manakah rumah awak?" },
        targetWord: "أَيْنَ",
        question: { en: "What is the role and sign of \"أَيْنَ\" here?", ms: "Apakah peranan dan tanda \"أَيْنَ\" di sini?" },
        options: [
          { value: "khabar-muqaddam", labelEn: "Khabar muqaddam, mabni on fatha, mahall raf'", labelMs: "Khabar muqaddam, mabni pada fathah, mahal raf'" },
          { value: "zarf", labelEn: "Zarf makan, mabni on fatha, mahall nasb", labelMs: "Zarf makan, mabni pada fathah, mahal nasb" }
        ],
        acceptedValues: ["khabar-muqaddam"],
        ruleNote: { en: "Followed directly by a marfu' definite noun (بيتك), أين here is khabar muqaddam — mabni on fatha like كيف — with بيتك as mubtada' mu'akhkhar.", ms: "Apabila diikuti terus oleh kata nama makrifah marfu' (بيتك), أين di sini ialah khabar muqaddam — mabni pada fathah seperti كيف — dengan بيتك sebagai mubtada' mu'akhkhar." }
      },
      {
        id: "ex19-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "مَنْ عِنْدَكَ؟",
        gloss: { en: "Who is with you?", ms: "Siapa ada bersama awak?" },
        targetWord: "مَنْ",
        question: { en: "Give the full analysis of \"مَنْ\".", ms: "Berikan analisis penuh bagi \"مَنْ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "mubtada", labelEn: "Mubtada'", labelMs: "Mubtada'" },
            { value: "khabar-muqaddam", labelEn: "Khabar muqaddam", labelMs: "Khabar muqaddam" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "raf", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "mabni-sukun", labelEn: "Mabni on sukun", labelMs: "Mabni pada sukun" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "mubtada", case: "raf", sign: "mabni-sukun" } ],
        ruleNote: { en: "مَن is followed directly by the zarf عندك (not by an ism marfu'), so it is mubtada', mabni on sukun, raf' mahall, with عندك as khabar.", ms: "مَن diikuti terus oleh zarf عندك (bukan ism marfu'), maka ia mubtada', mabni pada sukun, kedudukan raf', dengan عندك sebagai khabar." }
      }
    ],
    completion: {
      en: "You can now place an interrogative noun's usual i'rab role (khabar muqaddam, zarf, mubtada'), and recognize أيّ as the sole exception that's ordinarily mu'rab rather than mabni.",
      ms: "Anda kini boleh menentukan peranan i'rab lazim ism istifham (khabar muqaddam, zarf, mubtada'), dan mengenali أيّ sebagai satu-satunya pengecualian yang lazimnya mu'rab dan bukan mabni."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 20 — إعراب الكنايات (Kinayat — Indefinite-Quantity Nouns)
  // ------------------------------------------------------------------
  20: {
    chapterId: 20,
    status: "pilot",
    concept: {
      en: "Kinaya words are vague stand-ins for an unspecified number, report, or action — كم، كذا، كأيّن، كيت، ذيت. كم has two separate uses with two separate grammars: كم الاستفهامية asks \"how many?\" and its tamyiz (the counted noun) must normally be a single noun in nasb; كم الخبرية exclaims \"how many!\" about a great number, and its tamyiz may instead be a single noun or a plural noun in jarr. Both كم words are themselves mabni, with their i'rab role read from their position just like any other mabni word this tier.",
      ms: "Kata kinayah ialah gantian kabur bagi bilangan, laporan, atau perbuatan yang tidak ditentukan — كم، كذا، كأيّن، كيت، ذيت. كم mempunyai dua kegunaan berasingan dengan dua tatabahasa berasingan: كم الاستفهامية bertanya \"berapa?\" dan tamyiznya (kata nama yang dikira) biasanya mesti kata nama tunggal dalam nasb; كم الخبرية melaung \"alangkah banyaknya!\" tentang bilangan yang besar, dan tamyiznya pula boleh menjadi kata nama tunggal ATAU kata nama jamak dalam jarr. Kedua-dua كم ialah mabni, dengan peranan i'rabnya dibaca daripada kedudukannya seperti mana-mana kata mabni lain dalam tier ini."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 20, pdfPages: [103, 108] },
      en: "Kinaya nouns are vague words used to stand in for an unspecified number, a report, or an action: كم، وكذا، وكأيّن (also written كأيٍّ)، وكيتَ، وذيتَ. A mubham (ambiguous) noun is used either for istifham (seeking to know a number) or for ikhbar (reporting a great number), and كم الخبرية is specifically called كم الخبرية for this second use.\n\nBoth كم الاستفهامية and كم الخبرية are mabni, taking whatever i'rab mahall (raf', nasb, or jarr) the sentence gives them by position — exactly like every other mabni interrogative/kinaya word in this tier.\n\nTheir tamyiz, however, genuinely differs: كم الاستفهامية's tamyiz is normally a single noun in nasb (كم كتابًا قرأت؟) — unless something separates كم from its tamyiz, in which case jarr with a dropped مِن becomes preferred, to avoid the tamyiz being mistaken for a maf'ul bih. كم الخبرية's tamyiz, by contrast, may be a single noun or a plural noun, and is jarr — either by idafa (كم كتابٍ قرأت!) or by an elided مِن (كم من كتابٍ قرأتُ!). When كم (either kind) is preceded by a preposition or by a mudaf, it instead sits in jarr mahall.\n\nكذا and كيت/ذيت stand in for an elided or unspecified number, narration, or content — mabni, typically functioning as maf'ul bih or as a word denoting a zarf-like quantity, and may be conjoined (كذا وكذا). كأيّن carries the khabariyya \"how many\" sense and is always followed by مِن + a majrur noun; it too is mabni, its i'rab mahall read from its position (commonly mubtada').",
      ms: "Kata kinayah ialah kata kabur yang digunakan untuk menggantikan bilangan, laporan, atau perbuatan yang tidak ditentukan: كم، وكذا، وكأيّن (juga ditulis كأيٍّ)، وكيتَ، وذيتَ. Kata nama mubham (kabur) digunakan sama ada bagi istifham (ingin mengetahui suatu bilangan) atau bagi ikhbar (melaporkan bilangan yang besar), dan كم الخبرية dinamakan demikian khusus bagi kegunaan kedua ini.\n\nKedua-dua كم الاستفهامية dan كم الخبرية ialah mabni, mengambil apa jua kedudukan i'rab (raf', nasb, atau jarr) yang diberikan ayat mengikut kedudukannya — persis seperti setiap kata mabni istifham/kinayah lain dalam tier ini.\n\nNamun tamyiznya benar-benar berbeza: tamyiz كم الاستفهامية biasanya kata nama tunggal dalam nasb (كم كتابًا قرأت؟) — kecuali sesuatu memisahkan كم daripada tamyiznya, apabila jarr dengan مِن yang digugurkan menjadi lebih diutamakan, bagi mengelakkan tamyiz disalahertikan sebagai maf'ul bih. Tamyiz كم الخبرية pula, sebaliknya, boleh menjadi kata nama tunggal ATAU kata nama jamak, dan jarr — sama ada melalui idafa (كم كتابٍ قرأت!) atau melalui مِن yang tersirat (كم من كتابٍ قرأتُ!). Apabila كم (mana-mana jenis) didahului kata sendi atau mudaf, ia pula berkedudukan jarr.\n\nكذا dan كيت/ذيت menggantikan bilangan, cerita, atau kandungan yang digugurkan atau tidak ditentukan — mabni, lazimnya berfungsi sebagai maf'ul bih atau kata yang membawa maksud seumpama zarf, dan boleh disertakan (كذا وكذا). كأيّن membawa makna khabariyyah \"berapa banyak\" dan sentiasa diikuti مِن + kata nama majrur; ia juga mabni, kedudukan i'rabnya dibaca daripada kedudukannya (biasanya mubtada')."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 20, pdfPages: [104, 104], printedPage: 103 },
      arabic: "كَمْ كِتَابًا قَرَأْتَ؟",
      gloss: { en: "How many books have you read?", ms: "Berapa buah buku yang awak sudah baca?" },
      words: [
        { id: "w1", ar: "كَمْ", role: { en: "kinaya istifhamiyya, maf'ul bih muqaddam", ms: "kinayah istifhamiyyah, maf'ul bih muqaddam" }, case: "nasb", sign: { en: "mabni on sukun, mahall nasb", ms: "mabni pada sukun, mahal nasb" }, reason: { en: "كم here asks \"how many,\" standing in nasb mahall as the fronted maf'ul bih of قرأت.", ms: "كم di sini bertanya \"berapa,\" berkedudukan nasb sebagai maf'ul bih bagi قرأت yang didahulukan." } },
        { id: "w2", ar: "كِتَابًا", role: { en: "tamyiz", ms: "tamyiz" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "Tamyiz of كم الاستفهامية is a single noun in nasb, disambiguating what is being counted.", ms: "Tamyiz bagi كم الاستفهامية ialah kata nama tunggal dalam nasb, menjelaskan apa yang dikira." } },
        { id: "w3", ar: "قَرَأْتَ", role: { en: "fi'l + fa'il", ms: "fi'l + fa'il" }, case: "—", sign: { en: "mabni on sukun (fa'il: the attached ta')", ms: "mabni pada sukun (fa'il: ta' yang bersambung)" }, reason: { en: "Past-tense verb mabni on sukun for attaching to a moving pronoun, with the attached ta' as fa'il.", ms: "Kata kerja lampau mabni pada sukun kerana bersambung dengan dhamir mutaharrik, dengan ta' yang bersambung sebagai fa'il." } }
      ]
    },
    exercises: [
      {
        id: "ex20-guided", step: "guided", type: "identify-sign",
        contentLabel: "new-example",
        promptAr: "كَمْ صَدِيقٍ عِنْدِي!",
        gloss: { en: "How many friends I have!", ms: "Alangkah ramainya kawan saya!" },
        targetWord: "كَمْ",
        question: { en: "صَدِيقٍ (the tamyiz) is majrur here, not mansub. Which كم is this?", ms: "صَدِيقٍ (tamyiznya) majrur di sini, bukan mansub. كم manakah ini?" },
        options: [
          { value: "khabariyya", labelEn: "كم الخبرية — exclamatory \"how many!\"", labelMs: "كم الخبرية — \"alangkah banyaknya!\"" },
          { value: "istifhamiyya", labelEn: "كم الاستفهامية — interrogative \"how many?\"", labelMs: "كم الاستفهامية — \"berapa?\"" }
        ],
        acceptedValues: ["khabariyya"],
        ruleNote: { en: "A jarr tamyiz is the giveaway: كم الخبرية's tamyiz is jarr (by idafa or implied من), while كم الاستفهامية's must normally be a mansub single noun — so a majrur tamyiz identifies this as the exclamatory كم.", ms: "Tamyiz jarr itulah petunjuknya: tamyiz كم الخبرية ialah jarr (melalui idafa atau مِن tersirat), manakala tamyiz كم الاستفهامية biasanya mesti kata nama tunggal mansub — maka tamyiz majrur mengenal pasti ini sebagai كم yang bersifat seruan." }
      },
      {
        id: "ex20-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "كَمْ تِلْمِيذًا نَجَحَ؟",
        gloss: { en: "How many students passed?", ms: "Berapa orang murid yang lulus?" },
        targetWord: "كَمْ",
        question: { en: "Give the full analysis of \"كَمْ\".", ms: "Berikan analisis penuh bagi \"كَمْ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "mubtada", labelEn: "Mubtada'", labelMs: "Mubtada'" },
            { value: "maful-bih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "raf", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "mabni-sukun", labelEn: "Mabni on sukun", labelMs: "Mabni pada sukun" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "mubtada", case: "raf", sign: "mabni-sukun" } ],
        ruleNote: { en: "With no transitive verb reaching back to it (نجح is intransitive, needing no maf'ul bih), كم here is mubtada', mabni on sukun, raf' mahall, with the sentence نجح as its khabar.", ms: "Tanpa kata kerja transitif yang kembali kepadanya (نجح tidak transitif, tidak memerlukan maf'ul bih), كم di sini ialah mubtada', mabni pada sukun, kedudukan raf', dengan ayat نجح sebagai khabarnya." }
      }
    ],
    completion: {
      en: "You can now tell كم الاستفهامية and كم الخبرية apart by their tamyiz (mansub-single vs jarr-single-or-plural), and place either one's own i'rab mahall correctly from its position in the sentence.",
      ms: "Anda kini boleh membezakan كم الاستفهامية daripada كم الخبرية melalui tamyiznya (mansub-tunggal lwn jarr-tunggal-atau-jamak), dan menentukan kedudukan i'rab mana-mana satu dengan betul daripada kedudukannya dalam ayat."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 30 — إعمال اسم الفاعل عمل الفعل (The Active Participle's Verbal Governance)
  // ------------------------------------------------------------------
  30: {
    chapterId: 30,
    status: "pilot",
    concept: {
      en: "An ism al-fa'il (active participle, on wazn فاعل from a thulathi verb, or on a مُفْعِل-pattern from a longer one) governs exactly like the verb it comes from: it raises a fa'il, and — if that verb is transitive — nasbs a maf'ul bih too. This lesson covers that core governance pattern.",
      ms: "Ism al-fa'il (kata terbitan aktif, pada wazn فاعل daripada kata kerja thulathi, atau pola مُفْعِل daripada yang lebih panjang) beroperasi tepat seperti kata kerja asalnya: ia me-raf'-kan fa'il, dan — jika kata kerja itu transitif — me-nasb-kan maf'ul bih juga. Pelajaran ini merangkumi corak operasi teras ini."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 30, pdfPages: [162, 164] },
      en: "Ism al-fa'il is a noun meaning \"one who does the action,\" formed from a thulathi verb on wazn فاعل (كتب → كاتب، علم → عالم) or from a longer mudari' by replacing the mudari' letter with a dammed mim and kasring what comes before the last letter (انطلق → مُنطلِق، استكتب → مُستَكتِب). It governs like the verb it is derived from: it raises a fa'il, and nasbs a maf'ul bih if the underlying verb is muta'addi (هل شارحٌ الأستاذُ الدرسَ؟); if the verb is lazim, it is satisfied with just a fa'il (عادلٌ مسافرٌ أخواه). When ism al-fa'il's own fa'il is a hidden pronoun, that pronoun can only be read as referring to a third person (al-gha'ib) by ta'wil — never literally to the speaker or the addressee, even in a sentence like أنا رجلٌ صائمٌ or أنتَ رجلٌ مجتهدٌ, where the hidden fa'il is understood as pointing to an elided, generic \"he,\" not to \"أنا\" or \"أنتَ\" themselves. Whether a mujarrad (bare, without أل) ism al-fa'il can still govern nasb depends on its meaning: if it means present or future (حال/استقبال) it governs normally (مُعْطِ الفقيرِ ثوبًا غدًا, nasbing both objects); if it means past (ماضٍ), its governance is void, and it is instead construed as mudaf to its first object, with any second object nasb by a separate implied verb (جهادٌ مُعطي الفقيرِ حسنةً أمسِ — حسنةً is مفعول به ثانٍ لمفعول محذوف تقديره: أعطاه). An ism al-fa'il that carries أل (مقترن بأل), by contrast, governs nasb regardless of tense — past, present, or future alike (لستُ الرجلَ الحامي الديارَ). A noun that would otherwise be a second maf'ul of a muqtarin-bi-أل ism al-fa'il may also, the book notes, be read as مضاف إليه مجرور instead, since this kind of ism al-fa'il is also free to annex its ma'mul (الحامي الديارَ أو الديارِ — both readings given side by side).",
      ms: "Ism al-fa'il ialah kata nama bermaksud \"orang yang melakukan perbuatan,\" dibentuk daripada kata kerja thulathi pada wazn فاعل (كتب → كاتب، علم → عالم) atau daripada mudari' yang lebih panjang dengan menggantikan huruf mudari' dengan mim berbaris dammah dan mengkasrahkan huruf sebelum huruf akhir (انطلق → مُنطلِق، استكتب → مُستَكتِب). Ia beroperasi seperti kata kerja asalnya: ia me-raf'-kan fa'il, dan me-nasb-kan maf'ul bih jika kata kerja asal itu transitif (هل شارحٌ الأستاذُ الدرسَ؟); jika kata kerja itu tak transitif, ia memadai dengan fa'il sahaja (عادلٌ مسافرٌ أخواه). Apabila fa'il ism al-fa'il sendiri ialah kata ganti nama tersirat, kata ganti itu hanya boleh dibaca merujuk kepada orang ketiga (al-gha'ib) melalui ta'wil — tidak pernah secara literal kepada penutur atau mukhatab, walaupun dalam ayat seperti أنا رجلٌ صائمٌ atau أنتَ رجلٌ مجتهدٌ, di mana fa'il tersirat difahami merujuk kepada \"dia\" yang digugurkan dan umum, bukan kepada \"أنا\" atau \"أنتَ\" itu sendiri. Sama ada ism al-fa'il mujarrad (tanpa أل) masih boleh mengoperasikan nasb bergantung kepada maknanya: jika ia bermaksud masa kini atau akan datang (حال/استقبال) ia beroperasi secara normal (مُعْطِ الفقيرِ ثوبًا غدًا, me-nasb-kan kedua-dua objek); jika ia bermaksud masa lampau (ماضٍ), operasinya terbatal, dan sebaliknya ia dianggap mudaf kepada objek pertamanya, dengan sebarang objek kedua di-nasb-kan oleh kata kerja tersirat berasingan (جهادٌ مُعطي الفقيرِ حسنةً أمسِ — حسنةً ialah مفعول به ثانٍ bagi mafعول tersirat yang dianggarkan: أعطاه). Ism al-fa'il yang membawa أل (مقترن بأل), sebaliknya, beroperasi nasb tanpa mengira masa — lampau, kini, atau akan datang (لستُ الرجلَ الحامي الديارَ). Kata nama yang sepatutnya menjadi maf'ul kedua ism al-fa'il muqtarin-bi-أل juga, buku itu menyatakan, boleh dibaca sebagai مضاف إليه مجرور sebaliknya, kerana ism al-fa'il jenis ini turut bebas meng-idhafah-kan ma'mulnya (الحامي الديارَ أو الديارِ — kedua-dua bacaan diberikan bersama)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 30, pdfPages: [162, 162] },
      arabic: "هَلْ شَارِحٌ الأُسْتَاذُ الدَّرْسَ؟",
      gloss: { en: "Is the teacher explaining the lesson?", ms: "Adakah guru itu menerangkan pelajaran itu?" },
      words: [
        { id: "w1", ar: "هَلْ", role: { en: "interrogative particle", ms: "huruf istifham" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Opens the question; attaches no case of its own.", ms: "Membuka soalan; tidak membawa sebarang kes sendiri." } },
        { id: "w2", ar: "شَارِحٌ", role: { en: "mubtada', and an ism al-fa'il with its own fa'il", ms: "mubtada', dan ism al-fa'il yang membawa fa'ilnya sendiri" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "An ism al-fa'il derived from a transitive verb still governs like that verb even while standing as mubtada'.", ms: "Ism al-fa'il terbitan kata kerja transitif tetap beroperasi seperti kata kerja itu walaupun berdiri sebagai mubtada'." } },
        { id: "w3", ar: "الأُسْتَاذُ", role: { en: "fa'il of شَارِحٌ, standing in for the missing khabar (sadda masadd al-khabar)", ms: "fa'il bagi شَارِحٌ, menggantikan khabar yang tiada (sadda masadd al-khabar)" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "Because شَارِحٌ is itself a mubtada' relying on أل or a describable base, its own raised fa'il stands in for the sentence's khabar.", ms: "Kerana شَارِحٌ sendiri ialah mubtada' yang bergantung pada asas yang boleh disifatkan, fa'il yang di-raf'-kannya sendiri menggantikan khabar ayat itu." } },
        { id: "w4", ar: "الدَّرْسَ", role: { en: "maf'ul bih of شَارِحٌ", ms: "maf'ul bih bagi شَارِحٌ" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "شَرَحَ is transitive, so its ism al-fa'il still nasbs a maf'ul bih exactly as the verb would.", ms: "شَرَحَ ialah transitif, maka ism al-fa'ilnya tetap me-nasb-kan maf'ul bih tepat seperti kata kerja itu." } }
      ]
    },
    exercises: [
      {
        id: "ex30-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "هَلْ كَاتِبٌ الطَّالِبُ الدَّرْسَ؟",
        gloss: { en: "Is the student writing the lesson?", ms: "Adakah pelajar itu menulis pelajaran itu?" },
        targetWord: "الطَّالِبُ",
        question: { en: "What is the role of \"الطَّالِبُ\" here?", ms: "Apakah peranan \"الطَّالِبُ\" di sini?" },
        options: [
          { value: "fail", labelEn: "Fa'il of كَاتِبٌ", labelMs: "Fa'il bagi كَاتِبٌ" },
          { value: "mafulBih", labelEn: "Maf'ul bih of كَاتِبٌ", labelMs: "Maf'ul bih bagi كَاتِبٌ" }
        ],
        acceptedValues: ["fail"],
        ruleNote: { en: "An ism al-fa'il raises a fa'il just like the verb it comes from.", ms: "Ism al-fa'il me-raf'-kan fa'il tepat seperti kata kerja asalnya." }
      },
      {
        id: "ex30-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "خَالِدٌ شَارِحٌ الدَّرْسَ",
        gloss: { en: "Khalid is explaining the lesson.", ms: "Khalid sedang menerangkan pelajaran itu." },
        targetWord: "الدَّرْسَ",
        question: { en: "Give the full analysis of \"الدَّرْسَ\".", ms: "Berikan analisis penuh bagi \"الدَّرْسَ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "mafulBih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" },
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "mafulBih", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "A transitive ism al-fa'il (شَارِحٌ, from شَرَحَ) nasbs a maf'ul bih exactly like its verb.", ms: "Ism al-fa'il transitif (شَارِحٌ, daripada شَرَحَ) me-nasb-kan maf'ul bih tepat seperti kata kerjanya." }
      }
    ],
    completion: {
      en: "You can now explain how an ism al-fa'il governs a fa'il (and a maf'ul bih, if transitive) just like the verb it's built from, and how its tense and the presence of أل change whether that governance applies.",
      ms: "Anda kini boleh menjelaskan bagaimana ism al-fa'il mengoperasikan fa'il (dan maf'ul bih, jika transitif) tepat seperti kata kerja asalnya, dan bagaimana masanya serta kehadiran أل mengubah sama ada operasi itu terpakai."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 31 — إعراب اسم التفضيل (I'rab of the Comparative/Superlative)
  // ------------------------------------------------------------------
  31: {
    chapterId: 31,
    status: "pilot",
    concept: {
      en: "Ism tafdil (on wazn أفعل) shows one thing surpassing another in a shared quality. It raises a fa'il — most often a mandatory hidden pronoun — and, when its own sigha conditions aren't met, the comparison is expressed with a masdar in tamyiz instead.",
      ms: "Ism tafdil (pada wazn أفعل) menunjukkan sesuatu mengatasi yang lain dalam sifat yang dikongsi. Ia me-raf'-kan fa'il — selalunya kata ganti nama tersirat yang wajib — dan, apabila syarat sighahnya sendiri tidak dipenuhi, perbandingan dinyatakan dengan masdar pada tamyiz sebaliknya."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 31, pdfPages: [165, 167] },
      en: "Ism tafdil is formed on wazn أفعل to show a described thing surpassing another in a quality they share (وسيمٌ أكبرُ من سعيد). It can only be formed directly from a verb that is thulathi, tam, mutasarrif, muthbat, ma'lum, and qabil lil-tafawut, whose sifa isn't already على وزن أفعل for a color, defect, or adornment; if any condition fails, the comparison is instead expressed with that verb's masdar, preceded by a helper word (أعظم، أكثر، أشدّ...) and nasb on tamyiz (جناحُ الغرابِ أشدُّ سوادًا من جناح الظلام). Ism tafdil raises a fa'il, and most often (أكثر ما يرفع) that fa'il is a mandatory hidden pronoun — mandatory on خلاف الأصل, unlike the ordinary default where a hidden pronoun is merely optional (الصديقُ أكرمُ من أخي). When ism tafdil's fa'il is instead apparent rather than hidden, the ism tafdil comes before it as a na't whose own fa'il is excelled over by the thing being described (مررتُ بزميلٍ أفضلَ منه أخوك) — the book also allows reading أفضلَ there as raf', as a fronted khabar (خبر مقدم) with أخوك as a delayed mubtada' (مبتدأ مؤخر), the whole jumla then standing in place of a na't for زميل; neither reading is marked as preferred. When ism tafdil's underlying verb takes two objects, the first is jarr by a harf and the second nasb by an implied verb (الشرقيُّ أحبُّ للدين من الغربيِّ؛ هو أكسى للفقراء الثيابَ، أي: يكسوهم الثياب).",
      ms: "Ism tafdil dibentuk pada wazn أفعل untuk menunjukkan sesuatu yang disifatkan mengatasi yang lain dalam sifat yang dikongsi bersama (وسيمٌ أكبرُ من سعيد). Ia hanya boleh dibentuk terus daripada kata kerja yang thulathi, tam, mutasarrif, muthbat, ma'lum, dan qabil lil-tafawut, yang sifatnya belum pun على وزن أفعل bagi warna, kecacatan, atau perhiasan; jika mana-mana syarat tidak dipenuhi, perbandingan sebaliknya dinyatakan dengan masdar kata kerja itu, didahului kata bantu (أعظم، أكثر، أشدّ...) dan nasb pada tamyiz (جناحُ الغرابِ أشدُّ سوادًا من جناح الظلام). Ism tafdil me-raf'-kan fa'il, dan selalunya (أكثر ما يرفع) fa'il itu ialah kata ganti nama tersirat yang wajib — wajib على خلاف الأصل, berbeza daripada lalai biasa di mana kata ganti nama tersirat hanya pilihan (الصديقُ أكرمُ من أخي). Apabila fa'il ism tafdil sebaliknya zahir dan bukan tersirat, ism tafdil itu datang sebelumnya sebagai na't yang fa'ilnya sendiri diatasi oleh perkara yang disifatkan (مررتُ بزميلٍ أفضلَ منه أخوك) — buku itu turut membenarkan bacaan أفضلَ sebagai raf', sebagai خبر مقدم dengan أخوك sebagai مبتدأ مؤخر, keseluruhan jumlah itu kemudian berdiri menggantikan na't bagi زميل; tiada satu bacaan ditandakan lebih digemari. Apabila kata kerja asal ism tafdil mengambil dua objek, yang pertama jarr oleh huruf dan yang kedua nasb oleh kata kerja tersirat (الشرقيُّ أحبُّ للدين من الغربيِّ؛ هو أكسى للفقراء الثيابَ، أي: يكسوهم الثياب)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 31, pdfPages: [165, 165] },
      arabic: "الصَّدِيقُ أَكْرَمُ مِنْ أَخِي",
      gloss: { en: "The friend is more generous than my brother.", ms: "Sahabat itu lebih pemurah daripada abang saya." },
      words: [
        { id: "w1", ar: "الصَّدِيقُ", role: { en: "mubtada'", ms: "mubtada'" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The mubtada' of a nominal sentence is raf'.", ms: "Mubtada' bagi ayat nominal ialah raf'." } },
        { id: "w2", ar: "أَكْرَمُ", role: { en: "khabar al-mubtada', an ism tafdil carrying its own hidden fa'il", ms: "khabar al-mubtada', ism tafdil yang membawa fa'il tersiratnya sendiri" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "Its hidden fa'il, referring back to الصديق, is mandatory here — unlike an ordinary hidden pronoun, which is only optional.", ms: "Fa'il tersiratnya, merujuk kembali kepada الصديق, adalah wajib di sini — berbeza daripada kata ganti nama tersirat biasa, yang hanya pilihan." } },
        { id: "w3", ar: "مِنْ", role: { en: "preposition, muta'alliq to أَكْرَمُ", ms: "kata sendi, muta'alliq kepada أَكْرَمُ" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Introduces the thing surpassed.", ms: "Memperkenalkan perkara yang diatasi." } },
        { id: "w4", ar: "أَخِي", role: { en: "majrur by مِنْ, and mudaf; the ya' is mudaf ilayh", ms: "majrur oleh مِنْ, dan mudaf; ya' ialah mudaf ilayh" }, case: "jarr", sign: { en: "ya' (one of the Five Nouns), since it is mudaf to the speaker's ya'", ms: "ya' (salah satu daripada Lima Kata Nama), kerana ia mudaf kepada ya' penutur" }, reason: { en: "أخ is one of al-asma' al-khamsa, taking ya' for jarr instead of kasra once it is mudaf.", ms: "أخ ialah salah satu daripada al-asma' al-khamsah, mengambil ya' bagi jarr dan bukan kasrah sebaik sahaja ia mudaf." } }
      ]
    },
    exercises: [
      {
        id: "ex31-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "العِلْمُ أَنْفَعُ مِنَ المَالِ",
        gloss: { en: "Knowledge is more beneficial than wealth.", ms: "Ilmu lebih bermanfaat daripada harta." },
        targetWord: "أَنْفَعُ",
        question: { en: "Which word is the khabar?", ms: "Kata manakah khabar?" },
        options: [
          { value: "alilmu", labelEn: "العِلْمُ", labelMs: "العِلْمُ" },
          { value: "anfau", labelEn: "أَنْفَعُ", labelMs: "أَنْفَعُ" }
        ],
        acceptedValues: ["anfau"],
        ruleNote: { en: "The ism tafdil stands as khabar here, carrying a mandatory hidden fa'il referring back to the mubtada'.", ms: "Ism tafdil berdiri sebagai khabar di sini, membawa fa'il tersirat wajib yang merujuk kembali kepada mubtada'." }
      },
      {
        id: "ex31-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "سَمِيرٌ أَطْوَلُ مِنْ أَخِيهِ",
        gloss: { en: "Samir is taller than his brother.", ms: "Samir lebih tinggi daripada abangnya." },
        targetWord: "أَطْوَلُ",
        question: { en: "Give the full analysis of \"أَطْوَلُ\".", ms: "Berikan analisis penuh bagi \"أَطْوَلُ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "khabar", labelEn: "Khabar al-mubtada'", labelMs: "Khabar al-mubtada'" },
            { value: "mubtada", labelEn: "Mubtada'", labelMs: "Mubtada'" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "khabar", case: "rafa", sign: "damma-zahira" } ],
        ruleNote: { en: "As khabar al-mubtada', an ism tafdil is raf' with an apparent damma.", ms: "Sebagai khabar al-mubtada', ism tafdil ialah raf' dengan damma zahir." }
      }
    ],
    completion: {
      en: "You can now identify ism tafdil's raf'-with-hidden-fa'il pattern and explain the tamyiz fallback when its direct-sigha conditions aren't met.",
      ms: "Anda kini boleh mengenal pasti corak raf'-dengan-fa'il-tersirat bagi ism tafdil dan menjelaskan alternatif tamyiz apabila syarat sighah terusnya tidak dipenuhi."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 32 — إعراب التعجب (I'rab of Exclamation)
  // ------------------------------------------------------------------
  32: {
    chapterId: 32,
    status: "pilot",
    concept: {
      en: "Ta'ajjub expresses surprise, wonder, or disdain toward something. It has two qiyasi (analogical) sigha — ما أفْعَلَه and أَفْعِلْ بِه — plus a handful of fixed non-analogical phrases recognized by context.",
      ms: "Ta'ajjub menyatakan kehairanan, kekaguman, atau kehinaan terhadap sesuatu. Ia mempunyai dua sighah qiyasi (analogi) — ما أفْعَلَه dan أَفْعِلْ بِه — ditambah beberapa frasa tetap bukan-analogi yang dikenali melalui konteks."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 32, pdfPages: [168, 170] },
      en: "Ta'ajjub is the stance of astonishment, wonder, disdain, or similar toward something. It has two qiyasi sigha, formed under the same verb-conditions as ism tafdil (thulathi, tam, muthbat, ma'lum, mutasarrif, qabil lil-tafawut, not already on wazn أفعل for color/defect/adornment): ما أفْعَلَه (ما أجملَ الربيعَ) and أَفْعِلْ بِه (أَجْمِلْ بالربيع). When those conditions aren't met, the chapter's own masdar-plus-helper-word pattern is used instead, nasb on tamyiz, and كان/ما may be inserted between the two parts for extra emphasis (ما كان أشجعَ خالدًا!). Several non-qiyasi (non-analogical) exclamation phrases are also recognized only by context rather than by pattern, such as لله درُّه فارسًا، يا لك من بطل، and كم أنت عظيم. In the أَفْعِلْ بِه sigha, the verb-shaped word (أَجْمِلْ) is actually a mabni past-tense verb used for insha' al-ta'ajjub, built on a muqaddar fatha that the apparent imperative shape would otherwise show as sukun; the following بِـ-phrase is the fa'il, jarr lafzan by a za'ida baa' but marfu' mahallan. The book also allows reading this same sigha as a genuine imperative (أمر حقيقي) addressed to the listener, with its own hidden mandatory fa'il and the بـ-phrase as an ordinary jarr majrur. One construction is flagged in the source itself as شذّ (anomalous): ما يفخرُ اللئيمُ بأصوله — here شدّ is read as the ta'ajjub verb whose fa'il is the masdar mu'awwal formed from ما + يفخر (i.e., فخر), or, the book notes, شدّ may instead be read as having no fa'il at all, with ما as a zaa'ida for tawkid.",
      ms: "Ta'ajjub ialah sikap kehairanan, kekaguman, kehinaan, atau seumpamanya terhadap sesuatu. Ia mempunyai dua sighah qiyasi, dibentuk di bawah syarat kata kerja yang sama seperti ism tafdil (thulathi, tam, muthbat, ma'lum, mutasarrif, qabil lil-tafawut, belum pun pada wazn أفعل bagi warna/kecacatan/perhiasan): ما أفْعَلَه (ما أجملَ الربيعَ) dan أَفْعِلْ بِه (أَجْمِلْ بالربيع). Apabila syarat itu tidak dipenuhi, pola masdar-tambah-kata-bantu bab ini digunakan sebaliknya, nasb pada tamyiz, dan كان/ما boleh diselitkan antara kedua-dua bahagian untuk penegasan tambahan (ما كان أشجعَ خالدًا!). Beberapa frasa ta'ajjub bukan-qiyasi (bukan analogi) turut dikenali hanya melalui konteks dan bukan pola, seperti لله درُّه فارسًا، يا لك من بطل، dan كم أنت عظيم. Dalam sighah أَفْعِلْ بِه, kata berbentuk kata kerja itu (أَجْمِلْ) sebenarnya kata kerja lampau mabni digunakan bagi insya' al-ta'ajjub, dibina atas fathah muqaddar yang sepatutnya ditunjukkan bentuk perintah zahir sebagai sukun; frasa بِـ selepasnya ialah fa'il, jarr lafzan oleh baa' za'idah tetapi marfu' mahallan. Buku itu turut membenarkan bacaan sighah yang sama ini sebagai perintah sebenar (أمر حقيقي) ditujukan kepada pendengar, dengan fa'il tersirat wajibnya sendiri dan frasa بـ sebagai jar majrur biasa. Satu binaan ditandakan dalam sumber sendiri sebagai شذّ (ganjil): ما يفخرُ اللئيمُ بأصوله — di sini شدّ dibaca sebagai kata kerja ta'ajjub yang fa'ilnya ialah masdar mu'awwal dibentuk daripada ما + يفخر (iaitu, فخر), atau, buku itu menyatakan, شدّ boleh dibaca sebaliknya tiada fa'il langsung, dengan ما sebagai za'idah bagi tawkid."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 32, pdfPages: [168, 168] },
      arabic: "مَا أَجْمَلَ الرَّبِيعَ",
      gloss: { en: "How beautiful the spring is!", ms: "Alangkah indahnya musim bunga!" },
      words: [
        { id: "w1", ar: "مَا", role: { en: "ta'ajjub particle, standing as mubtada'", ms: "huruf ta'ajjub, berdiri sebagai mubtada'" }, case: "raf' (mahalli)", sign: { en: "mabni; carries no apparent ending of its own", ms: "mabni; tiada tanda zahir sendiri" }, reason: { en: "The ta'ajjubiyya ما opens the sentence as its mubtada'.", ms: "ما ta'ajjubiyyah membuka ayat sebagai mubtada'nya." } },
        { id: "w2", ar: "أَجْمَلَ", role: { en: "ta'ajjub verb, carrying a hidden fa'il referring to ما; the whole verb phrase is khabar of ما", ms: "kata kerja ta'ajjub, membawa fa'il tersirat merujuk kepada ما; keseluruhan frasa kata kerja ialah khabar bagi ما" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A ta'ajjub verb in this sigha is always mabni on fatha, with a hidden fa'il referring back to ما.", ms: "Kata kerja ta'ajjub dalam sighah ini sentiasa mabni fathah, dengan fa'il tersirat merujuk kembali kepada ما." } },
        { id: "w3", ar: "الرَّبِيعَ", role: { en: "maf'ul bih", ms: "maf'ul bih" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "The thing being exclaimed over is the maf'ul bih of the ta'ajjub verb.", ms: "Perkara yang dikagumi ialah maf'ul bih bagi kata kerja ta'ajjub." } }
      ]
    },
    exercises: [
      {
        id: "ex32-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "مَا أَحْسَنَ الطَّقْسَ!",
        gloss: { en: "How nice the weather is!", ms: "Alangkah baiknya cuaca ini!" },
        targetWord: "الطَّقْسَ",
        question: { en: "What is the role of \"الطَّقْسَ\"?", ms: "Apakah peranan \"الطَّقْسَ\"?" },
        options: [
          { value: "mafulBih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" },
          { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
        ],
        acceptedValues: ["mafulBih"],
        ruleNote: { en: "The thing exclaimed over is the maf'ul bih of the ta'ajjub verb, whose own fa'il is a hidden pronoun referring to ما.", ms: "Perkara yang dikagumi ialah maf'ul bih bagi kata kerja ta'ajjub, yang fa'ilnya sendiri ialah kata ganti nama tersirat merujuk kepada ما." }
      },
      {
        id: "ex32-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "مَا أَجْمَلَ السَّمَاءَ!",
        gloss: { en: "How beautiful the sky is!", ms: "Alangkah indahnya langit!" },
        targetWord: "السَّمَاءَ",
        question: { en: "Give the full analysis of \"السَّمَاءَ\".", ms: "Berikan analisis penuh bagi \"السَّمَاءَ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "mafulBih", labelEn: "Maf'ul bih", labelMs: "Maf'ul bih" },
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "mafulBih", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "The ta'ajjub verb nasbs the thing being exclaimed over as its maf'ul bih.", ms: "Kata kerja ta'ajjub me-nasb-kan perkara yang dikagumi sebagai maf'ul bihnya." }
      }
    ],
    completion: {
      en: "You can now analyze the ما أفْعَلَه sigha of ta'ajjub and explain how it differs from the أَفْعِلْ بِه sigha and from the chapter's masdar-plus-helper-word fallback.",
      ms: "Anda kini boleh menganalisis sighah ما أفْعَلَه bagi ta'ajjub dan menjelaskan bezanya daripada sighah أَفْعِلْ بِه serta alternatif masdar-tambah-kata-bantu bab ini."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 33 — إعراب التحذير (I'rab of Warning Constructions)
  // ------------------------------------------------------------------
  33: {
    chapterId: 33,
    status: "pilot",
    concept: {
      en: "Tahzir warns the addressee about something harmful by nasbing a noun with an elided verb chosen to fit the context — the point is to alert them so they avoid it.",
      ms: "Tahzir memberi amaran kepada mukhatab tentang sesuatu yang membahayakan dengan me-nasb-kan kata nama melalui kata kerja yang digugurkan dipilih mengikut konteks — tujuannya memberi amaran supaya mereka mengelakkannya."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 33, pdfPages: [171, 173] },
      en: "Tahzir nasbs an ism by an elided fi'l conveying alert and warning, estimated to fit the context (كاحذر، باعِد، تجنَّب، توقَّ، قِ، ابعد), to warn the addressee about something harmful so they avoid it (النارَ يا صغيرُ). Patterns include: a simple mufrad noun, sometimes doubled as tawkid lafzi (النارَ النارَ); a masdar-pattern doubled form that looks like a mathna but is only for mubalagha, not a real dual (خَذَارَيْكَ, i'rab'd as a maf'ul mutlaq standing in for its own verb); a ma'tuf pair sharing one implied verb, or each getting its own (البردَ والمطرَ؛ يدَك وثيابَك — صُن يدك، وأبعد السكّين); and the إياك construction, where إياك itself is nasb as maf'ul bih of an implied fi'l (أحذّر), with what follows either ma'tuf with its own implied verb (إياكَ والكسلَ، أي: إياك أحذّر وأبغض الكسلَ), a second direct maf'ul bih of the same implied verb (إياكَ الكسلَ، أي: أحذّرك الكسلَ), or majrur by a harf jarr (إياكَ من الكسلِ، أي: أحذّرك من الكسلِ). الذئبَ الذئبَ can be read either as khabar of an elided mubtada' (هذا الذئب), with the second ذئب as tawkid lafzi, or as a mubtada' with an elided khabar (في طريقك الذئب), again with the second ذئب as tawkid. The elided verb itself is never fixed to one word — it is chosen freely to suit the context each time.",
      ms: "Tahzir me-nasb-kan ism melalui fi'l tersirat membawa makna amaran dan peringatan, dianggarkan mengikut konteks (كاحذر، باعِد، تجنَّب، توقَّ، قِ، ابعد), bagi memberi amaran kepada mukhatab tentang sesuatu yang membahayakan supaya mereka mengelakkannya (النارَ يا صغيرُ). Pola termasuk: kata nama mufrad ringkas, kadangkala digandakan sebagai tawkid lafzi (النارَ النارَ); bentuk gandaan berpola masdar yang kelihatan seperti mathna tetapi hanya bagi mubalaghah, bukan dual sebenar (خَذَارَيْكَ, di-i'rab-kan sebagai maf'ul mutlaq menggantikan kata kerjanya sendiri); pasangan ma'tuf berkongsi satu kata kerja tersirat, atau masing-masing mendapat satu (البردَ والمطرَ؛ يدَك وثيابَك — صُن يدك، وأبعد السكّين); dan binaan إياك, di mana إياك sendiri nasb sebagai maf'ul bih bagi fi'l tersirat (أحذّر), dengan apa yang mengikutinya sama ada ma'tuf dengan kata kerja tersiratnya sendiri (إياكَ والكسلَ، أي: إياك أحذّر وأبغض الكسلَ), maf'ul bih kedua terus bagi kata kerja tersirat yang sama (إياكَ الكسلَ، أي: أحذّرك الكسلَ), atau majrur oleh huruf jar (إياكَ من الكسلِ، أي: أحذّرك من الكسلِ). الذئبَ الذئبَ boleh dibaca sama ada sebagai khabar bagi mubtada' tersirat (هذا الذئب), dengan ذئب kedua sebagai tawkid lafzi, atau sebagai mubtada' dengan khabar tersirat (في طريقك الذئب), sekali lagi dengan ذئب kedua sebagai tawkid. Kata kerja tersirat itu sendiri tidak pernah tetap kepada satu perkataan — ia dipilih bebas mengikut konteks setiap kali."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 33, pdfPages: [171, 171] },
      arabic: "النَّارَ يَا صَغِيرُ",
      gloss: { en: "The fire, little one! (Watch out for the fire!)", ms: "Api, wahai budak kecil! (Hati-hati dengan api!)" },
      words: [
        { id: "w1", ar: "النَّارَ", role: { en: "maf'ul bih of an elided verb (estimated: احذر)", ms: "maf'ul bih bagi kata kerja tersirat (dianggarkan: احذر)" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "Tahzir nasbs the thing to be avoided by a verb the context implies but never states.", ms: "Tahzir me-nasb-kan perkara yang perlu dielakkan melalui kata kerja yang disiratkan konteks tetapi tidak pernah dinyatakan." } },
        { id: "w2", ar: "يَا", role: { en: "particle of address (nida')", ms: "huruf seruan (nida')" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Introduces the person being addressed.", ms: "Memperkenalkan orang yang diseru." } },
        { id: "w3", ar: "صَغِيرُ", role: { en: "munada (the one addressed)", ms: "munada (orang yang diseru)" }, case: "nasb (mahalli)", sign: { en: "mabni on damma", ms: "mabni dammah" }, reason: { en: "A munada mufrad al-'alam/nakira maqsuda is mabni on damma in a position of nasb.", ms: "Munada mufrad al-'alam/nakirah maqsudah ialah mabni dammah dalam kedudukan nasb." } }
      ]
    },
    exercises: [
      {
        id: "ex33-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "السَّيَّارَةَ يَا طِفْلُ",
        gloss: { en: "The car, child! (Watch out for the car!)", ms: "Kereta, wahai budak! (Hati-hati dengan kereta!)" },
        targetWord: "السَّيَّارَةَ",
        question: { en: "What is the role of \"السَّيَّارَةَ\"?", ms: "Apakah peranan \"السَّيَّارَةَ\"?" },
        options: [
          { value: "mafulBih", labelEn: "Maf'ul bih of an elided verb", labelMs: "Maf'ul bih bagi kata kerja tersirat" },
          { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
        ],
        acceptedValues: ["mafulBih"],
        ruleNote: { en: "Tahzir nasbs the thing to be avoided as the maf'ul bih of an elided verb, estimated to fit the context.", ms: "Tahzir me-nasb-kan perkara yang perlu dielakkan sebagai maf'ul bih bagi kata kerja tersirat, dianggarkan mengikut konteks." }
      },
      {
        id: "ex33-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "الطَّرِيقَ الطَّرِيقَ",
        gloss: { en: "The road, the road! (Watch the road!)", ms: "Jalan, jalan! (Hati-hati dengan jalan!)" },
        targetWord: "الطَّرِيقَ",
        question: { en: "Give the full analysis of the second \"الطَّرِيقَ\".", ms: "Berikan analisis penuh bagi \"الطَّرِيقَ\" yang kedua." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "tawkidLafzi", labelEn: "Tawkid lafzi for the first", labelMs: "Tawkid lafzi bagi yang pertama" },
            { value: "mafulBih", labelEn: "A separate maf'ul bih", labelMs: "Maf'ul bih berasingan" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "tawkidLafzi", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "A doubled tahzir noun is tawkid lafzi for the first, matching its nasb.", ms: "Kata nama tahzir yang digandakan ialah tawkid lafzi bagi yang pertama, sepadan dengan nasbnya." }
      }
    ],
    completion: {
      en: "You can now recognize tahzir's elided-verb pattern across its simple, doubled, ma'tuf, and إياك forms.",
      ms: "Anda kini boleh mengenali corak kata kerja tersirat tahzir merentasi bentuk mudah, gandaan, ma'tuf, dan إياك-nya."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 34 — إعراب الإغراء (I'rab of Urging Constructions)
  // ------------------------------------------------------------------
  34: {
    chapterId: 34,
    status: "pilot",
    concept: {
      en: "Ighra' is tahzir's positive mirror: a request directed to the addressee to commit to and hold fast to something good, nasbing the ism by an elided verb usually estimated as الزم (\"hold fast to\"). This is the shortest chapter in the source book — a single page.",
      ms: "Ighra' ialah bayangan cermin positif tahzir: permintaan ditujukan kepada mukhatab untuk komited dan berpegang teguh kepada sesuatu yang baik, me-nasb-kan ism melalui kata kerja tersirat biasanya dianggarkan sebagai الزم (\"berpegang teguh kepada\"). Ini ialah bab terpendek dalam buku sumber — hanya satu muka surat."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 34, pdfPages: [174, 174] },
      en: "Ighra' is a request directed to the addressee to commit to and hold fast to a certain matter (الدَّرسَ الدَّرسَ، أي الزم الدرسَ وتمسّك به). The ism is nasb by an elided verb, usually estimated as الزم. Its patterns mirror tahzir's: a simple mufrad noun doubled as tawkid lafzi (الاجتهادَ الاجتهادَ); a ma'tuf pair sharing one implied verb, with the second noun's own governing harf jarr still attaching normally (الفرارَ والهربَ من اللئيمِ); and a single mufrad noun alone (الاجتهادَ، تقديره: الزم). The same ism may instead be read as raf' — a mubtada' with an elided khabar — when context suggests a statement rather than a command (الاجتهادُ، خبره محذوف تقديره: الاجتهادُ مطلوب فإنه...).",
      ms: "Ighra' ialah permintaan ditujukan kepada mukhatab untuk komited dan berpegang teguh kepada sesuatu perkara (الدَّرسَ الدَّرسَ، أي الزم الدرسَ وتمسّك به). Ism itu nasb oleh kata kerja tersirat, biasanya dianggarkan sebagai الزم. Polanya mencerminkan tahzir: kata nama mufrad ringkas digandakan sebagai tawkid lafzi (الاجتهادَ الاجتهادَ); pasangan ma'tuf berkongsi satu kata kerja tersirat, dengan huruf jar kata nama kedua sendiri masih terpakai secara normal (الفرارَ والهربَ من اللئيمِ); dan kata nama mufrad tunggal sahaja (الاجتهادَ، تقديره: الزم). Ism yang sama boleh sebaliknya dibaca sebagai raf' — mubtada' dengan khabar tersirat — apabila konteks menunjukkan kenyataan dan bukan arahan (الاجتهادُ، خبره محذوف تقديره: الاجتهادُ مطلوب فإنه...)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 34, pdfPages: [174, 174] },
      arabic: "الاجْتِهَادَ الاجْتِهَادَ",
      gloss: { en: "Diligence, diligence! (Hold fast to diligence!)", ms: "Kesungguhan, kesungguhan! (Berpegang teguhlah kepada kesungguhan!)" },
      words: [
        { id: "w1", ar: "الاجْتِهَادَ", role: { en: "maf'ul bih of an elided verb (estimated: الزم)", ms: "maf'ul bih bagi kata kerja tersirat (dianggarkan: الزم)" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "Ighra' nasbs the thing to commit to by a verb the context implies but never states.", ms: "Ighra' me-nasb-kan perkara yang perlu komited melalui kata kerja yang disiratkan konteks tetapi tidak pernah dinyatakan." } },
        { id: "w2", ar: "الاجْتِهَادَ", role: { en: "tawkid lafzi for the first الاجتهادَ", ms: "tawkid lafzi bagi الاجتهادَ yang pertama" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "A doubled ighra' noun repeats the same word as tawkid lafzi, matching its case.", ms: "Kata nama ighra' yang digandakan mengulangi perkataan yang sama sebagai tawkid lafzi, sepadan kesnya." } }
      ]
    },
    exercises: [
      {
        id: "ex34-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "الصِّدْقَ الصِّدْقَ",
        gloss: { en: "Honesty, honesty! (Hold fast to honesty!)", ms: "Kejujuran, kejujuran! (Berpegang teguhlah kepada kejujuran!)" },
        targetWord: "الصِّدْقَ",
        question: { en: "What is the role of the first \"الصِّدْقَ\"?", ms: "Apakah peranan \"الصِّدْقَ\" yang pertama?" },
        options: [
          { value: "mafulBih", labelEn: "Maf'ul bih of an elided verb", labelMs: "Maf'ul bih bagi kata kerja tersirat" },
          { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
        ],
        acceptedValues: ["mafulBih"],
        ruleNote: { en: "Ighra' nasbs the thing to hold fast to as the maf'ul bih of an elided verb, usually estimated as الزم.", ms: "Ighra' me-nasb-kan perkara yang perlu dipegang teguh sebagai maf'ul bih bagi kata kerja tersirat, biasanya dianggarkan sebagai الزم." }
      },
      {
        id: "ex34-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "الصِّدْقَ الصِّدْقَ",
        gloss: { en: "Honesty, honesty! (Hold fast to honesty!)", ms: "Kejujuran, kejujuran! (Berpegang teguhlah kepada kejujuran!)" },
        targetWord: "الصِّدْقَ",
        question: { en: "Give the full analysis of the second \"الصِّدْقَ\".", ms: "Berikan analisis penuh bagi \"الصِّدْقَ\" yang kedua." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "tawkidLafzi", labelEn: "Tawkid lafzi for the first", labelMs: "Tawkid lafzi bagi yang pertama" },
            { value: "mafulBih", labelEn: "A separate maf'ul bih", labelMs: "Maf'ul bih berasingan" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "tawkidLafzi", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "A doubled ighra' noun is tawkid lafzi for the first, matching its nasb.", ms: "Kata nama ighra' yang digandakan ialah tawkid lafzi bagi yang pertama, sepadan dengan nasbnya." }
      }
    ],
    completion: {
      en: "You can now recognize ighra's elided-verb pattern and see how closely it mirrors tahzir, just aimed at something to embrace rather than avoid.",
      ms: "Anda kini boleh mengenali corak kata kerja tersirat ighra' dan melihat betapa ia mencerminkan tahzir, cuma ditujukan kepada sesuatu yang perlu diterima dan bukan dielakkan."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 35 — إعراب التنازع (I'rab of Competing Operators)
  // ------------------------------------------------------------------
  35: {
    chapterId: 35,
    status: "pilot",
    concept: {
      en: "Tanazu' is when two operators (typically two verbs) both seek the same single following noun as their own ma'mul. The solver gets to choose which operator claims it — assigning it to the first because it came first, or to the second because it's closer — and the book's own worked example demonstrates both choices on the very same sentence.",
      ms: "Tanazu' berlaku apabila dua operator (biasanya dua kata kerja) sama-sama mahukan satu kata nama yang sama selepasnya sebagai ma'mul masing-masing. Penyelesai boleh memilih operator mana yang mendakwanya — menetapkannya kepada yang pertama kerana ia datang dahulu, atau kepada yang kedua kerana ia lebih dekat — dan contoh kerja buku itu sendiri menunjukkan kedua-dua pilihan pada ayat yang sama."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 35, pdfPages: [175, 176] },
      en: "Tanazu' is when two 'amils — typically two verbs — both seek the same single following ma'mul, e.g. كتبتُ وحفظتُ الدرسَ, where both كتبتُ and حفظتُ separately want الدرسَ as their own maf'ul bih. The solver chooses: assign the noun to the FIRST operator, because it came first (li-taqaddumihi) — the second operator then takes a hidden pronoun fa'il referring back to it instead; or assign it to the SECOND operator, because it is closer (li-qurbihi) — the first operator then takes the hidden pronoun instead. Neither choice is marked as preferred; the book presents both as simply available to whichever the speaker intends. The same choice applies whether the two competing forms are singular or dual/plural (قام وذهبا الصديقان؛ قاما وذهب الصديقان), and whether both operators are verbs or one is a fi'l and the other an 'amil-acting phrase (درسَ ورأيته التلميذُ).",
      ms: "Tanazu' berlaku apabila dua 'amil — biasanya dua kata kerja — sama-sama mahukan satu ma'mul yang sama selepasnya, cth. كتبتُ وحفظتُ الدرسَ, di mana كتبتُ dan حفظتُ masing-masing mahukan الدرسَ sebagai maf'ul bih masing-masing. Penyelesai memilih: menetapkan kata nama itu kepada operator PERTAMA, kerana ia datang dahulu (li-taqaddumihi) — operator kedua kemudian mengambil fa'il kata ganti nama tersirat merujuk kembali kepadanya sebaliknya; atau menetapkannya kepada operator KEDUA, kerana ia lebih dekat (li-qurbihi) — operator pertama kemudian mengambil kata ganti nama tersirat sebaliknya. Tiada pilihan ditandakan lebih digemari; buku itu mengemukakan kedua-duanya sebagai tersedia sahaja mengikut apa yang dimaksudkan penutur. Pilihan yang sama terpakai sama ada kedua-dua bentuk yang bersaing itu tunggal atau dual/jamak (قام وذهبا الصديقان؛ قاما وذهب الصديقان), dan sama ada kedua-dua operator ialah kata kerja atau satu ialah fi'l dan satu lagi frasa bertindak sebagai 'amil (درسَ ورأيته التلميذُ)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 35, pdfPages: [175, 175] },
      arabic: "قَامَ وَسَافَرَ الصَّدِيقُ",
      gloss: { en: "The friend stood up and traveled.", ms: "Sahabat itu bangun dan bermusafir." },
      words: [
        { id: "w1", ar: "قَامَ", role: { en: "past-tense verb, competing with سَافَرَ for الصَّدِيقُ; here (primary reading) taking a hidden fa'il referring forward to it", ms: "kata kerja lampau, bersaing dengan سَافَرَ bagi الصَّدِيقُ; di sini (bacaan utama) mengambil fa'il tersirat merujuk ke hadapan kepadanya" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "In the book's primary (second-operator) reading, the noun is assigned to the closer verb سافر, so قام instead takes a hidden pronoun fa'il.", ms: "Dalam bacaan utama (operator kedua) buku itu, kata nama ditetapkan kepada kata kerja yang lebih dekat سافر, maka قام sebaliknya mengambil fa'il kata ganti nama tersirat." } },
        { id: "w2", ar: "وَ", role: { en: "conjunction ('atf)", ms: "kata hubung ('atf)" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Joins the two competing verb clauses.", ms: "Menyambungkan kedua-dua klausa kata kerja yang bersaing." } },
        { id: "w3", ar: "سَافَرَ", role: { en: "past-tense verb, the nearer of the two competing operators", ms: "kata kerja lampau, operator yang lebih dekat antara dua yang bersaing" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "Being closer to الصديق, this verb claims it as its own explicit fa'il in the book's primary reading.", ms: "Kerana lebih dekat dengan الصديق, kata kerja ini mendakwanya sebagai fa'il zahirnya sendiri dalam bacaan utama buku itu." } },
        { id: "w4", ar: "الصَّدِيقُ", role: { en: "fa'il of سَافَرَ (the book's primary reading)", ms: "fa'il bagi سَافَرَ (bacaan utama buku itu)" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "Assigned to the second, nearer operator in the book's primary reading.", ms: "Ditetapkan kepada operator kedua yang lebih dekat dalam bacaan utama buku itu." } }
      ],
      dualAnalysis: {
        note: { en: "The book explicitly offers the opposite assignment too: الصديقُ can instead be read as the fa'il of the FIRST verb قام, because it comes first — with سافر then taking its own hidden pronoun fa'il (optionally, جوازًا) referring back to الصديق.", ms: "Buku itu turut menawarkan secara jelas penetapan sebaliknya: الصديقُ boleh sebaliknya dibaca sebagai fa'il bagi kata kerja PERTAMA قام, kerana ia datang dahulu — dengan سافر kemudian mengambil fa'il kata ganti nama tersiratnya sendiri (secara pilihan, جوازًا) merujuk kembali kepada الصديق." },
        ranking: { en: "This is not a secondary aside — it is the chapter's entire subject. The book states both choices as equally available to the solver's intent (\"فإن أردت جعلت... للفعل الأول لتقدّمه، وإن أردت جعلته للفعل الثاني لقربه\"); neither is ranked above the other.", ms: "Ini bukan catatan sampingan — ia ialah keseluruhan subjek bab ini. Buku itu menyatakan kedua-dua pilihan sama-sama tersedia mengikut maksud penyelesai (\"فإن أردت جعلت... للفعل الأول لتقدّمه، وإن أردت جعلته للفعل الثاني لقربه\"); tiada satu disusun mengatasi yang lain." }
      }
    },
    exercises: [
      {
        id: "ex35-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "ذَهَبَ وَعَادَ الوَلَدُ",
        gloss: { en: "The boy went and returned.", ms: "Budak lelaki itu pergi dan kembali." },
        targetWord: "الوَلَدُ",
        question: { en: "In the book's primary (second-operator) reading, which verb is \"الوَلَدُ\" the fa'il of?", ms: "Dalam bacaan utama (operator kedua) buku itu, kata kerja manakah \"الوَلَدُ\" menjadi fa'ilnya?" },
        options: [
          { value: "dhahaba", labelEn: "ذَهَبَ", labelMs: "ذَهَبَ" },
          { value: "aada", labelEn: "عَادَ", labelMs: "عَادَ" }
        ],
        acceptedValues: ["aada"],
        ruleNote: { en: "In tanazu', the book's convenience reading assigns the shared noun to the nearer (second) operator, with the first taking a hidden pronoun instead.", ms: "Dalam tanazu', bacaan kemudahan buku itu menetapkan kata nama yang dikongsi kepada operator yang lebih dekat (kedua), dengan yang pertama mengambil kata ganti nama tersirat sebaliknya." }
      },
      {
        id: "ex35-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "كَتَبَ وَقَرَأَ الطَّالِبُ",
        gloss: { en: "The student wrote and read.", ms: "Pelajar itu menulis dan membaca." },
        targetWord: "الطَّالِبُ",
        question: { en: "Reading \"الطَّالِبُ\" as the fa'il of the second verb, give its full analysis.", ms: "Dengan membaca \"الطَّالِبُ\" sebagai fa'il bagi kata kerja kedua, berikan analisis penuhnya." },
        fields: [
          { key: "operator", question: { en: "Fa'il of which verb?", ms: "Fa'il bagi kata kerja yang mana?" }, options: [
            { value: "qaraa", labelEn: "قَرَأَ", labelMs: "قَرَأَ" },
            { value: "kataba", labelEn: "كَتَبَ", labelMs: "كَتَبَ" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { operator: "qaraa", case: "rafa", sign: "damma-zahira" } ],
        ruleNote: { en: "Assigning the noun to the nearer (second) operator is the book's convenience reading; the first verb then takes a hidden pronoun fa'il instead.", ms: "Menetapkan kata nama kepada operator yang lebih dekat (kedua) ialah bacaan kemudahan buku itu; kata kerja pertama kemudian mengambil fa'il kata ganti nama tersirat sebaliknya." }
      }
    ],
    completion: {
      en: "You can now recognize tanazu' and explain both of the book's own readings for which competing operator claims the shared noun, without marking either one wrong.",
      ms: "Anda kini boleh mengenali tanazu' dan menjelaskan kedua-dua bacaan buku itu sendiri bagi operator bersaing manakah mendakwa kata nama yang dikongsi, tanpa menandakan mana-mana sebagai salah."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 38 — إعراب المستثنى (I'rab of Exception / Istithna')
  // ------------------------------------------------------------------
  38: {
    chapterId: 38,
    status: "pilot",
    concept: {
      en: "Istithna' takes what follows an istithna' tool out of the ruling that applied before it. The book lists eight tools and walks through how each one's own grammar — and whether the sentence is positive or negated — changes the mustathna's case, right up to a genuine three-way choice for the noun after ولا سيّما.",
      ms: "Istithna' mengeluarkan apa yang mengikuti alat istithna' daripada hukum yang terpakai sebelumnya. Buku itu menyenaraikan lapan alat dan menjelaskan bagaimana tatabahasa setiap satu — dan sama ada ayat itu positif atau dinafikan — mengubah kes mustathna, sehingga pilihan tiga-hala sebenar bagi kata nama selepas ولا سيّما."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 38, pdfPages: [184, 189] },
      en: "Istithna' means taking what follows the istithna' tool out of the ruling that applied before it. There are eight adawat istithna': إلّا، سِوَى، سُوَى، سَوَاء، غَيْر، حاشا، خَلا، عدا. The mustathna is either muttasil (of the same kind as the mustathna minhu) or munqati' (of a different kind). When the kalam before إلا is tam (the mustathna minhu is explicitly mentioned) and mujab (positive, not negated), the mustathna is always nasb (جاء التلاميذُ إلّا عادلاً). When the kalam is tam but manfi (negated), the ism after إلا may be either raf' as badal or nasb as mustathna — badal is preferred (ما جاء التلاميذُ إلا عادلٌ أو عادلاً؛ البدلية أفضل من الاستثناء). When the kalam is ghayr tam (the mustathna minhu is never mentioned) and manfi, the ism after إلا simply takes whatever case the sentence's own 'amil requires, with إلا read as mulghah (voided), or by some grammarians as a harf hasr (ما رأيتُ إلا عادلاً — عادلاً is simply رأيتُ's own maf'ul bih). غَيْر and سِوَى follow إلا's same case pattern but are themselves always mudaf, so the noun after them is jarr as mudaf ilayh (جاء الأولادُ غيرَ عادلٍ؛ جاء الأولادُ سوى عادلٍ); if either stands in a position that would otherwise be its own role (fa'il, etc.), it simply takes that role's case instead (ما جاء غيرُ سميرٍ). حاشا، خَلا، and عدا can each be read either as a jamid past-tense verb — fa'il a hidden pronoun referring to the mustathna minhu (or, some say, to \"بعض\"), with the mustathna as its maf'ul bih, and ما مصدرية optionally preceding it to form a masdar mu'awwal nasb on hal — or as a harf jarr, in which case the following ism is simply majrur (اقرأ الصحفَ ما عدا/عدا الكاذبةَ vs. عدا الكاذبةِ). حاشا لله, and حاشا/حاشَ لله (without tanwin), use a lam that is either asli or za'ida, with الله majrur either by that lam or, when the lam is dropped entirely, as mudaf ilayh (حاشا اللهِ). بيدَ, meaning مغاير (\"contrary to, except that\"), is always mudaf to a masdar-mu'awwal أنّ-clause (أنت ذكيٌّ بيدَ أنك مهملٌ) — the book also allows reading it as a hal construed with an implied mushtaq (بمعنى مغاير). ولا سيّما singles something out for special emphasis: لا acts as la al-nafiya lil-jins on its own mudaf ism سيّ (mabni nasb), with ما as its mudaf ilayh (ism mawsul). What follows is raf' as khabar of an elided mubtada' when it is definite (أجاد الشعراءُ ولا سيّما رشيدٌ — رشيدٌ: خبر لمبتدأ محذوف تقديره هو, the jumla itself being silat al-mawsul). When the book instead illustrates this slot with an indefinite noun (كتابٌ), it presents a genuine three-way choice side by side, unranked: raf' (the same elided-mubtada'-khabar pattern), nasb (as tamyiz), or jarr (as a second mudaf ilayh to سيّ, with ما then read as za'ida). Finally, a hidden ليس or لا يكون can itself act as an implicit istithna' device, its ism a hidden pronoun referring to \"بعض\" or to the mustathna minhu, and its khabar standing in for the excepted noun (عاد المسافرون ليس سليمًا، أي: إلا سليمًا).",
      ms: "Istithna' bermaksud mengeluarkan apa yang mengikuti alat istithna' daripada hukum yang terpakai sebelumnya. Terdapat lapan adawat istithna': إلّا، سِوَى، سُوَى، سَوَاء، غَيْر، حاشا، خَلا، عدا. Mustathna sama ada muttasil (sejenis dengan mustathna minhu) atau munqati' (berlainan jenis daripada mustathna minhu). Apabila kalam sebelum إلا ialah tam (mustathna minhu disebut secara jelas) dan mujab (positif, tidak dinafikan), mustathna sentiasa nasb (جاء التلاميذُ إلّا عادلاً). Apabila kalam itu tam tetapi manfi (dinafikan), ism selepas إلا boleh sama ada raf' sebagai badal atau nasb sebagai mustathna — badal lebih digemari (ما جاء التلاميذُ إلا عادلٌ أو عادلاً؛ البدلية أفضل من الاستثناء). Apabila kalam itu ghayr tam (mustathna minhu tidak pernah disebut) dan manfi, ism selepas إلا hanya mengambil kes yang dikehendaki 'amil ayat itu sendiri, dengan إلا dibaca sebagai mulghah (terbatal), atau menurut sesetengah ahli nahu sebagai huruf hasr (ما رأيتُ إلا عادلاً — عادلاً hanyalah maf'ul bih رأيتُ sendiri). غَيْر dan سِوَى mengikut pola kes إلا yang sama tetapi kedua-duanya sendiri sentiasa mudaf, maka kata nama selepasnya jarr sebagai mudaf ilayh (جاء الأولادُ غيرَ عادلٍ؛ جاء الأولادُ سوى عادلٍ); jika salah satu berada dalam kedudukan yang sepatutnya menjadi peranannya sendiri (fa'il, dll.), ia hanya mengambil kes peranan itu sebaliknya (ما جاء غيرُ سميرٍ). حاشا، خَلا، dan عدا masing-masing boleh dibaca sama ada sebagai kata kerja lampau jamid — fa'il kata ganti nama tersirat merujuk kepada mustathna minhu (atau, menurut sesetengah, kepada \"بعض\"), dengan mustathna sebagai maf'ul bihnya, dan ما مصدرية secara pilihan mendahuluinya membentuk masdar mu'awwal nasb pada hal — atau sebagai huruf jar, dalam hal ini ism selepasnya hanya majrur (اقرأ الصحفَ ما عدا/عدا الكاذبةَ lwn. عدا الكاذبةِ). حاشا لله, dan حاشا/حاشَ لله (tanpa tanwin), menggunakan lam yang sama ada asli atau za'idah, dengan الله majrur sama ada oleh lam itu atau, apabila lam itu digugurkan sepenuhnya, sebagai mudaf ilayh (حاشا اللهِ). بيدَ, bermaksud مغاير (\"bertentangan dengan, kecuali bahawa\"), sentiasa mudaf kepada klausa أنّ masdar mu'awwal (أنت ذكيٌّ بيدَ أنك مهملٌ) — buku itu turut membenarkan bacaannya sebagai hal yang difahami dengan mushtaq tersirat (bermaksud مغاير). ولا سيّما mengkhususkan sesuatu untuk penegasan istimewa: لا bertindak sebagai la al-nafiyah lil-jins pada ism mudafnya sendiri سيّ (mabni nasb), dengan ما sebagai mudaf ilayhnya (ism mawsul). Apa yang mengikutinya ialah raf' sebagai khabar bagi mubtada' tersirat apabila ia makrifah (أجاد الشعراءُ ولا سيّما رشيدٌ — رشيدٌ: خبر لمبتدأ محذوف تقديره هو, jumlah itu sendiri menjadi silat al-mawsul). Apabila buku itu sebaliknya menggambarkan kedudukan ini dengan kata nama nakirah (كتابٌ), ia mengemukakan pilihan tiga-hala sebenar bersama, tanpa disusun keutamaan: raf' (pola mubtada'-tersirat-khabar yang sama), nasb (sebagai tamyiz), atau jarr (sebagai mudaf ilayh kedua kepada سيّ, dengan ما kemudian dibaca sebagai za'idah). Akhir sekali, ليس atau لا يكون tersirat sendiri boleh bertindak sebagai alat istithna' tersirat, ismnya kata ganti nama tersirat merujuk kepada \"بعض\" atau kepada mustathna minhu, dan khabarnya menggantikan kata nama yang dikecualikan (عاد المسافرون ليس سليمًا، أي: إلا سليمًا)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 38, pdfPages: [184, 184] },
      arabic: "جَاءَ التَّلَامِيذُ إِلَّا عَادِلًا",
      gloss: { en: "The students came, except 'Adil.", ms: "Pelajar-pelajar itu datang, kecuali 'Adil." },
      words: [
        { id: "w1", ar: "جَاءَ", role: { en: "past-tense verb", ms: "kata kerja lampau" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb with nothing attached defaults to apparent fatha.", ms: "Kata kerja lampau berakar sahih tanpa apa-apa tersambung kekal fathah zahir secara lazim." } },
        { id: "w2", ar: "التَّلَامِيذُ", role: { en: "fa'il, and the mustathna minhu", ms: "fa'il, dan mustathna minhu" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The fa'il of جاء; also the group the exception is taken out of.", ms: "Fa'il bagi جاء; juga kumpulan yang dikecualikan daripadanya." } },
        { id: "w3", ar: "إِلَّا", role: { en: "istithna' tool", ms: "alat istithna'" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Marks what follows as excepted from the preceding ruling.", ms: "Menandakan apa yang mengikutinya dikecualikan daripada hukum sebelumnya." } },
        { id: "w4", ar: "عَادِلًا", role: { en: "mustathna", ms: "mustathna" }, case: "nasb", sign: { en: "apparent fatha", ms: "fathah zahir" }, reason: { en: "Because the kalam before إلا is tam (التلاميذ is explicitly mentioned) and mujab (not negated), the mustathna is always nasb.", ms: "Kerana kalam sebelum إلا ialah tam (التلاميذ disebut secara jelas) dan mujab (tidak dinafikan), mustathna sentiasa nasb." } }
      ]
    },
    exercises: [
      {
        id: "ex38-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "نَجَحَ الطُّلَّابُ إِلَّا طَالِبًا",
        gloss: { en: "The students passed, except for one student.", ms: "Pelajar-pelajar itu lulus, kecuali seorang pelajar." },
        targetWord: "طَالِبًا",
        question: { en: "What is the role of \"طَالِبًا\"?", ms: "Apakah peranan \"طَالِبًا\"?" },
        options: [
          { value: "mustathna", labelEn: "Mustathna", labelMs: "Mustathna" },
          { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
        ],
        acceptedValues: ["mustathna"],
        ruleNote: { en: "The kalam before إلا here is tam and mujab, so the mustathna is always nasb.", ms: "Kalam sebelum إلا di sini ialah tam dan mujab, maka mustathna sentiasa nasb." }
      },
      {
        id: "ex38-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "حَضَرَ الضُّيُوفُ غَيْرَ وَاحِدٍ",
        gloss: { en: "The guests arrived, except for one.", ms: "Tetamu-tetamu itu hadir, kecuali seorang." },
        targetWord: "غَيْرَ",
        question: { en: "Give the full analysis of \"غَيْرَ\".", ms: "Berikan analisis penuh bagi \"غَيْرَ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "mustathna", labelEn: "Mustathna", labelMs: "Mustathna" },
            { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "mustathna", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "غَيْرَ follows the same case pattern as the ism after إلا — here nasb, since the kalam before it is tam and mujab.", ms: "غَيْرَ mengikut pola kes yang sama seperti ism selepas إلا — di sini nasb, kerana kalam sebelumnya ialah tam dan mujab." }
      }
    ],
    completion: {
      en: "You can now work through istithna's main case rule (nasb after tam-mujab kalam) and recognize how غير/سوى, حاشا/خلا/عدا, بيد, and ولا سيّما each add their own twist, right up to the genuine three-way raf'/nasb/jarr choice for an indefinite noun after ولا سيّما.",
      ms: "Anda kini boleh menyelesaikan peraturan kes utama istithna' (nasb selepas kalam tam-mujab) dan mengenali bagaimana غير/سوى, حاشا/خلا/عدا, بيد, dan ولا سيّما masing-masing menambah selok-beloknya sendiri, sehingga pilihan tiga-hala sebenar raf'/nasb/jarr bagi kata nama nakirah selepas ولا سيّما."
    }
  },


  // ------------------------------------------------------------------
  // Chapter 43 — إعراب النعت (I'rab of the Adjective / Na't)
  // ------------------------------------------------------------------
  43: {
    chapterId: 43,
    status: "pilot",
    concept: {
      en: "Na't is a tabi' that describes its man'ut (the noun it modifies). There are two kinds: haqiqi, which agrees with the man'ut in every respect (case, gender, number, definiteness), and sababi, which agrees with what precedes it in definiteness and case but with what follows it — an ism zahir carrying a pronoun back to the man'ut — in gender. The book also shows a na't can be deliberately detached (qat') into its own independent raf'/nasb reading.",
      ms: "Na't ialah tabi' yang menerangkan man'utnya (kata nama yang diubahsuainya). Terdapat dua jenis: haqiqi, yang bersetuju dengan man'ut dalam setiap aspek (kes, jantina, bilangan, kepastian), dan sababi, yang bersetuju dengan apa yang mendahuluinya dari segi kepastian dan kes tetapi dengan apa yang mengikutinya — ism zahir yang membawa kata ganti nama kembali kepada man'ut — dari segi jantina. Buku itu turut menunjukkan na't boleh sengaja dipisahkan (qat') menjadi bacaan raf'/nasb bebasnya sendiri."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 43, pdfPages: [204, 204] },
      en: "Na't is a tabi' mentioned to clarify a quality (sifa) in its matbu' (man'ut), and it is of two kinds. (1) Na't haqiqi describes a quality IN the man'ut itself, and follows the man'ut in every one of its morphological and syntactic states: raf', nasb, and jarr; tadhkir and ta'nith; ifrad, tathniya, and jam'; ta'rif and tankir — e.g. هذا تلميذٌ نشيطٌ، هذه تلميذةٌ نشيطةٌ، هذان التلميذان النشيطان، هاتان التلميذتان النشيطتان (the same four agreement axes all shifting together). (2) Na't sababi describes a quality that relates to the man'ut through something else: it raises (yarfa'u) an explicit noun (ism zahir) that itself carries a pronoun referring back to the man'ut, e.g. هذا طفلٌ حَسَنٌ وجهُهُ (وجهُهُ's hidden هُ refers back to طفل). A na't sababi follows what PRECEDES it — the man'ut — in definiteness/indefiniteness and case, but follows what FOLLOWS it — the raised ism — in gender: هذا رجلٌ نظيفةٌ ثيابُهُ (رجلٌ is masculine, yet نظيفةٌ is feminine, because ثيابُ, the raised ism, is feminine). Beyond these two defining types, the book's worked examples show many different words functioning as na't haqiqi: an ism ishara (احترمُ الأستاذَ هذا), one of the 'five nouns' (جاء رجلٌ ذو مالٍ), an ism mawsul with its own silat jumla (صادفت الرفيقَ الذي أُحبه), a number (زارنا رجالٌ خمسةٌ), a nisba-adjective (رأيت رجلاً مصريًا), a noun used figuratively for comparison (أبصرت رجلاً أسدًا، أي شجاعًا), and an indefinite كل/أيّ mudaf construction (أخي كلُّ الرجلِ؛ صادفت رجلاً أيَّ رجلٍ). The book also shows that a na't can be deliberately CUT OFF (qat') from matching its man'ut's own case, becoming instead the khabar of an elided mubtada' (read as raf') or the maf'ul bih of an elided fi'l (read as nasb): مررت بالقائدِ العظيمُ, read with raf' on العظيمُ, is khabar of an elided مبتدأ (taqdir: هو العظيمُ); read instead as العظيمَ with nasb, it is maf'ul bih of an elided fi'l (taqdir: أمدح العظيمَ) — the same dual option recurs with عاد الصديقُ ورحل الرفيقُ الكريمان (raf', taqdir: هما الكريمان) أو الكريمين (nasb, taqdir: أعني الكريمين). Finally, when a dual or plural ism ishara is followed by several separate na'ts, the FIRST is read as 'atf bayan (or badal) on the ism ishara, and each one after it is ma'tuf on the first: مررت بهذين الكريمِ والبخيلِ؛ مررت بهؤلاءِ الكاتبِ والشاعرِ والفيلسوفِ.",
      ms: "Na't ialah tabi' yang disebut untuk menjelaskan sifat pada matbu'nya (man'ut), dan ia terbahagi kepada dua jenis. (1) Na't haqiqi menerangkan sifat PADA man'ut itu sendiri, dan mengikut man'ut dalam setiap keadaan sarfi dan nahunya: raf', nasb, dan jarr; tadhkir dan ta'nith; ifrad, tathniya, dan jam'; ta'rif dan tankir — cth. هذا تلميذٌ نشيطٌ، هذه تلميذةٌ نشيطةٌ، هذان التلميذان النشيطان، هاتان التلميذتان النشيطتان (keempat-empat paksi persetujuan beralih bersama). (2) Na't sababi menerangkan sifat yang berkaitan dengan man'ut melalui sesuatu yang lain: ia membangkitkan (yarfa'u) ism zahir yang sendiri membawa kata ganti nama merujuk kembali kepada man'ut, cth. هذا طفلٌ حَسَنٌ وجهُهُ (هُ tersirat pada وجهُهُ merujuk kembali kepada طفل). Na't sababi mengikut apa yang MENDAHULUINYA — man'ut — dari segi kepastian/ketakpastian dan kes, tetapi mengikut apa yang MENGIKUTINYA — ism yang dibangkitkan — dari segi jantina: هذا رجلٌ نظيفةٌ ثيابُهُ (رجلٌ ialah maskulin, namun نظيفةٌ ialah feminin, kerana ثيابُ, ism yang dibangkitkan, ialah feminin). Selain kedua-dua jenis penentu ini, contoh kerja buku itu menunjukkan pelbagai perkataan berfungsi sebagai na't haqiqi: ism isyarah (احترمُ الأستاذَ هذا), salah satu daripada 'lima kata nama' (جاء رجلٌ ذو مالٍ), ism mawsul dengan jumlah silatnya sendiri (صادفت الرفيقَ الذي أُحبه), nombor (زارنا رجالٌ خمسةٌ), kata sifat nisbah (رأيت رجلاً مصريًا), kata nama digunakan secara kiasan untuk perbandingan (أبصرت رجلاً أسدًا، أي شجاعًا), dan binaan كل/أيّ mudaf tak tentu (أخي كلُّ الرجلِ؛ صادفت رجلاً أيَّ رجلٍ). Buku itu turut menunjukkan na't boleh sengaja DIPISAHKAN (qat') daripada menyamai kes man'utnya sendiri, menjadi sebaliknya khabar bagi mubtada' tersirat (dibaca raf') atau maf'ul bih bagi fi'l tersirat (dibaca nasb): مررت بالقائدِ العظيمُ, dibaca dengan raf' pada العظيمُ, ialah khabar bagi مبتدأ tersirat (anggaran: هو العظيمُ); dibaca sebaliknya sebagai العظيمَ dengan nasb, ia ialah maf'ul bih bagi fi'l tersirat (anggaran: أمدح العظيمَ) — pilihan dua-hala yang sama berulang dengan عاد الصديقُ ورحل الرفيقُ الكريمان (raf', anggaran: هما الكريمان) أو الكريمين (nasb, anggaran: أعني الكريمين). Akhir sekali, apabila ism isyarah dual atau jamak diikuti beberapa na't berasingan, yang PERTAMA dibaca sebagai 'atf bayan (atau badal) pada ism isyarah itu, dan setiap satu selepasnya ma'tuf pada yang pertama: مررت بهذين الكريمِ والبخيلِ؛ مررت بهؤلاءِ الكاتبِ والشاعرِ والفيلسوفِ."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 43, pdfPages: [204, 204] },
      arabic: "هَذَا تِلْمِيذٌ نَشِيطٌ",
      gloss: { en: "This is an energetic student.", ms: "Ini seorang pelajar yang bertenaga." },
      words: [
        { id: "w1", ar: "هَذَا", role: { en: "ism ishara, with ها as the tanbih particle and ذا the demonstrative", ms: "ism isyarah, dengan ها sebagai partikel tanbih dan ذا penunjuk" }, case: "raf'", sign: { en: "mabni on sukun, in a position of raf' as mubtada'", ms: "mabni sukun, pada kedudukan raf' sebagai mubtada'" }, reason: { en: "Ism ishara is always mabni; here it stands as the mubtada'.", ms: "Ism isyarah sentiasa mabni; di sini ia berdiri sebagai mubtada'." } },
        { id: "w2", ar: "تِلْمِيذٌ", role: { en: "khabar al-mubtada'", ms: "khabar al-mubtada'" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The predicate of the mubtada' هذا.", ms: "Predikat bagi mubtada' هذا." } },
        { id: "w3", ar: "نَشِيطٌ", role: { en: "na't haqiqi for تلميذ", ms: "na't haqiqi bagi تلميذ" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "A na't haqiqi follows its man'ut in all four agreement axes; تلميذ is raf', mudhakkar, mufrad, and nakira, so نشيط matches all four.", ms: "Na't haqiqi mengikut man'utnya dalam keempat-empat paksi persetujuan; تلميذ ialah raf', mudhakkar, mufrad, dan nakirah, maka نشيط menyamai keempat-empatnya." } }
      ]
    },
    exercises: [
      {
        id: "ex43-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "هَذَا كِتَابٌ مُفِيدٌ",
        gloss: { en: "This is a useful book.", ms: "Ini sebuah buku yang berguna." },
        targetWord: "مُفِيدٌ",
        question: { en: "What is the role of \"مُفِيدٌ\"?", ms: "Apakah peranan \"مُفِيدٌ\"?" },
        options: [
          { value: "naat-haqiqi", labelEn: "Na't haqiqi", labelMs: "Na't haqiqi" },
          { value: "khabar", labelEn: "Khabar", labelMs: "Khabar" }
        ],
        acceptedValues: ["naat-haqiqi"],
        ruleNote: { en: "مُفِيدٌ describes كِتابٌ itself and agrees with it in raf', tankir, tadhkir, and ifrad — a na't haqiqi, not a second khabar.", ms: "مُفِيدٌ menerangkan كِتابٌ itu sendiri dan bersetuju dengannya dalam raf', tankir, tadhkir, dan ifrad — na't haqiqi, bukan khabar kedua." }
      },
      {
        id: "ex43-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "هَذَا ضَيْفٌ كَرِيمَةٌ أَخْلَاقُهُ",
        gloss: { en: "This is a guest of generous character.", ms: "Ini seorang tetamu yang berbudi mulia." },
        targetWord: "كَرِيمَةٌ",
        question: { en: "Give the full analysis of \"كَرِيمَةٌ\".", ms: "Berikan analisis penuh bagi \"كَرِيمَةٌ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "naat-sababi", labelEn: "Na't sababi", labelMs: "Na't sababi" },
            { value: "naat-haqiqi", labelEn: "Na't haqiqi", labelMs: "Na't haqiqi" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "naat-sababi", case: "rafa", sign: "damma-zahira" } ],
        ruleNote: { en: "كَرِيمَةٌ is a na't sababi: it follows ضيفٌ (what precedes it) in case — raf', since ضيفٌ is mubtada' — but takes its gender from أَخْلَاقُهُ (what follows it), which is feminine, so كريمة stays feminine even though ضيفٌ is grammatically masculine.", ms: "كَرِيمَةٌ ialah na't sababi: ia mengikut ضيفٌ (apa yang mendahuluinya) dari segi kes — raf', kerana ضيفٌ ialah mubtada' — tetapi mengambil jantinanya daripada أَخْلَاقُهُ (apa yang mengikutinya), yang feminin, maka كريمة kekal feminin walaupun ضيفٌ secara nahu maskulin." }
      }
    ],
    completion: {
      en: "You can now tell na't haqiqi (full agreement with the man'ut) apart from na't sababi (agreeing with what precedes it, but taking its gender from the raised noun that follows), and recognize qat' al-na't as a deliberate break into an independent raf'/nasb reading.",
      ms: "Anda kini boleh membezakan na't haqiqi (persetujuan penuh dengan man'ut) daripada na't sababi (bersetuju dengan apa yang mendahuluinya, tetapi mengambil jantinanya daripada kata nama yang dibangkitkan selepasnya), dan mengenali qat' al-na't sebagai pemisahan sengaja kepada bacaan raf'/nasb yang bebas."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 44 — إعراب العطف (I'rab of Coordination / 'Atf)
  // ------------------------------------------------------------------
  44: {
    chapterId: 44,
    status: "pilot",
    concept: {
      en: "'Atf has two entirely distinct sub-parts. 'Atf al-nasaq joins a ma'tuf to a ma'tuf 'alayh with one of nine huruf al-'atf, each with its own conditions, and the ma'tuf follows the ma'tuf 'alayh's i'rab. 'Atf al-bayan is a jamid tabi' with no joining harf at all — it clarifies a definite matbu' or specifies an indefinite one, and must agree with it fully.",
      ms: "'Atf mempunyai dua bahagian yang sama sekali berbeza. 'Atf al-nasaq menyambungkan ma'tuf kepada ma'tuf 'alayh dengan salah satu daripada sembilan huruf al-'atf, setiap satu dengan syaratnya sendiri, dan ma'tuf mengikut i'rab ma'tuf 'alayh. 'Atf al-bayan ialah tabi' jamid tanpa sebarang huruf penyambung — ia menjelaskan matbu' makrifah atau mengkhususkan matbu' nakirah, dan mesti bersetuju dengannya sepenuhnya."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 44, pdfPages: [208, 212] },
      en: "This chapter has two sub-parts. FIRST — 'atf al-nasaq: a harf al-'atf joins a ma'tuf to a ma'tuf 'alayh, and the ma'tuf follows the ma'tuf 'alayh in i'rab. There are nine huruf al-'atf: و، ف، ثمّ، حتى، أو، أم، بل، لا، لكن. و joins freely: zahir-to-zahir (جاء سميرٌ وسالمٌ), mudmar-to-mudmar (أنتَ وهو صديقان), mudmar-to-zahir (علّمتهم وإياكم), and zahir-to-mudmar even across a mabni pronoun's mahall (ما زارني إلا أنتَ وسليمًا — سليمًا is nasb because إياك's mahall is nasb maf'ul bih). حتى only functions as 'atf when what follows is a juz' or shibh-juz' (a part or quasi-part) of the ma'tuf 'alayh, or a single individual of the whole: أفاد الدواءُ الجسمَ حتى الإصبعَ. لكن (istidraak) requires a preceding nafi or nahi, must not itself be preceded by و, and its ma'tuf must be a single word (mufrad) — followed by a jumla instead, لكن drops out of 'atf entirely and becomes a mere harf istidrak. لا negates its ma'tuf (the opposite of the ma'tuf 'alayh) under the same mufrad-only restriction — followed by a jumla, it becomes plain nafi. بل performs corrective 'atf (idrab) under the same restriction — followed by a jumla, it becomes harf ibtida'. When 'atf lands on a majrur pronoun, the jarr harf is repeated for the ma'tuf: سلّمتُ عليكَ وعلى الصديقِ. Fi'l-on-fi'l 'atf is permitted without repeating the jazm or nasb particle when both verbs are majzum or mansub (لم يحضرْ قطارٌ ويسافرْ جارنا؛ لن تحضرَ سيارةٌ ويسافرَ الصديقُ); when both verbs are marfu' or both madi, either jumla-on-jumla or fi'l-on-fi'l 'atf is possible (ستحضر السيارةُ ويسافرُ سميرٌ؛ حضرت السيارةُ وسافر سميرٌ). SECOND — 'atf al-bayan: a jamid tabi' that clarifies (yudih) its matbu' if the matbu' is definite, or specifies (yukhassis) it if indefinite, e.g. دخل أبو شريحٍ خالدٌ. Anything valid as 'atf bayan is also valid as badal kull min kull — the book treats the two as interchangeable in several of its own examples (رأيتُ ليثًا أي أسدًا: أسدًا عطف بيان على ليثًا، أو بدل منه؛ هذا عسجدٌ أي ذهبٌ: ذهبٌ عطف بيان، أو بدل من عسجد). 'Atf al-bayan must agree with its matbu' in i'rab, gender, number, and definiteness. A jumla can likewise be 'atf bayan on another jumla, when it explains the meaning of speech (qawl) contained in the first without repeating its actual quotation: أشرتُ إليه أنِ اذهبْ — جملة اذهب عطف بيان لجملة أشرت (أشرتُ مشتملة على معنى القول دون حروفه); كتبتُ إليه أن عجّلْ بالحضور.",
      ms: "Bab ini mempunyai dua bahagian. PERTAMA — 'atf al-nasaq: harf al-'atf menyambungkan ma'tuf kepada ma'tuf 'alayh, dan ma'tuf mengikut i'rab ma'tuf 'alayh. Terdapat sembilan huruf al-'atf: و، ف، ثمّ، حتى، أو، أم، بل، لا، لكن. و menyambung secara bebas: zahir-kepada-zahir (جاء سميرٌ وسالمٌ), mudmar-kepada-mudmar (أنتَ وهو صديقان), mudmar-kepada-zahir (علّمتهم وإياكم), dan zahir-kepada-mudmar walaupun merentasi mahall kata ganti nama mabni (ما زارني إلا أنتَ وسليمًا — سليمًا ialah nasb kerana mahall إياك ialah nasb maf'ul bih). حتى hanya berfungsi sebagai 'atf apabila apa yang mengikutinya ialah juz' atau shibh-juz' (bahagian atau kuasi-bahagian) daripada ma'tuf 'alayh, atau individu tunggal daripada keseluruhan: أفاد الدواءُ الجسمَ حتى الإصبعَ. لكن (istidrak) memerlukan nafi atau nahi sebelumnya, tidak boleh sendiri didahului oleh و, dan ma'tufnya mesti satu perkataan (mufrad) — jika diikuti jumlah sebaliknya, لكن gugur sepenuhnya daripada 'atf dan menjadi sekadar huruf istidrak. لا menafikan ma'tufnya (lawan ma'tuf 'alayh) di bawah had mufrad yang sama — jika diikuti jumlah, ia menjadi nafi biasa. بل melakukan 'atf pembetulan (idrab) di bawah had yang sama — jika diikuti jumlah, ia menjadi harf ibtida'. Apabila 'atf jatuh pada kata ganti nama majrur, huruf jarr diulang bagi ma'tuf: سلّمتُ عليكَ وعلى الصديقِ. 'Atf fi'l-kepada-fi'l dibenarkan tanpa mengulang partikel jazm atau nasb apabila kedua-dua kata kerja majzum atau mansub (لم يحضرْ قطارٌ ويسافرْ جارنا؛ لن تحضرَ سيارةٌ ويسافرَ الصديقُ); apabila kedua-dua kata kerja marfu' atau kedua-duanya madi, 'atf jumlah-kepada-jumlah atau fi'l-kepada-fi'l kedua-duanya mungkin (ستحضر السيارةُ ويسافرُ سميرٌ؛ حضرت السيارةُ وسافر سميرٌ). KEDUA — 'atf al-bayan: tabi' jamid yang menjelaskan (yudih) matbu'nya jika matbu' itu makrifah, atau mengkhususkan (yukhassis) jika nakirah, cth. دخل أبو شريحٍ خالدٌ. Apa-apa yang sah sebagai 'atf bayan turut sah sebagai badal kull min kull — buku itu melayan kedua-duanya sebagai boleh tukar ganti dalam beberapa contohnya sendiri (رأيتُ ليثًا أي أسدًا: أسدًا عطف بيان على ليثًا، أو بدل منه؛ هذا عسجدٌ أي ذهبٌ: ذهبٌ عطف بيان، أو بدل من عسجد). 'Atf bayan mesti bersetuju dengan matbu'nya dari segi i'rab, jantina, bilangan, dan kepastian. Jumlah turut boleh menjadi 'atf bayan pada jumlah lain, apabila ia menjelaskan makna percakapan (qawl) yang terkandung dalam yang pertama tanpa mengulang petikan sebenarnya: أشرتُ إليه أنِ اذهبْ — جملة اذهب عطف بيان لجملة أشرت (أشرتُ مشتملة على معنى القول دون حروفه); كتبتُ إليه أن عجّلْ بالحضور."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 44, pdfPages: [208, 208] },
      arabic: "جَاءَ سَمِيرٌ وَسَالِمٌ",
      gloss: { en: "Samir and Salim came.", ms: "Samir dan Salim datang." },
      words: [
        { id: "w1", ar: "جَاءَ", role: { en: "past-tense verb", ms: "kata kerja lampau" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb defaults to apparent fatha.", ms: "Kata kerja lampau berakar sahih kekal fathah zahir secara lazim." } },
        { id: "w2", ar: "سَمِيرٌ", role: { en: "fa'il, and the ma'tuf 'alayh", ms: "fa'il, dan ma'tuf 'alayh" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The fa'il of جاء; also what سالم is coordinated onto.", ms: "Fa'il bagi جاء; juga perkara yang disambungkan سالم kepadanya." } },
        { id: "w3", ar: "وَ", role: { en: "harf al-'atf", ms: "harf al-'atf" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "و performs simple 'atf, joining two zahir nouns with no further condition.", ms: "و melakukan 'atf mudah, menyambungkan dua kata nama zahir tanpa sebarang syarat selanjutnya." } },
        { id: "w4", ar: "سَالِمٌ", role: { en: "ma'tuf on سمير", ms: "ma'tuf pada سمير" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The ma'tuf follows the ma'tuf 'alayh's i'rab — raf', matching سمير.", ms: "Ma'tuf mengikut i'rab ma'tuf 'alayh — raf', menyamai سمير." } }
      ]
    },
    exercises: [
      {
        id: "ex44-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "جَاءَ خَالِدٌ وَوَلِيدٌ",
        gloss: { en: "Khalid and Walid came.", ms: "Khalid dan Walid datang." },
        targetWord: "وَلِيدٌ",
        question: { en: "What is the role of \"وَلِيدٌ\"?", ms: "Apakah peranan \"وَلِيدٌ\"?" },
        options: [
          { value: "matuf", labelEn: "Ma'tuf", labelMs: "Ma'tuf" },
          { value: "fail", labelEn: "Fa'il", labelMs: "Fa'il" }
        ],
        acceptedValues: ["matuf"],
        ruleNote: { en: "و joins وليد to خالد with simple 'atf; the ma'tuf follows the ma'tuf 'alayh's raf'.", ms: "و menyambungkan وليد kepada خالد dengan 'atf mudah; ma'tuf mengikut raf' ma'tuf 'alayh." }
      },
      {
        id: "ex44-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "سَلَّمْتُ عَلَى هَذَا الأَدِيبِ الشَّاعِرِ",
        gloss: { en: "I greeted this writer, the poet.", ms: "Saya memberi salam kepada penulis ini, iaitu penyair itu." },
        targetWord: "الشَّاعِرِ",
        question: { en: "Give the full analysis of \"الشَّاعِرِ\".", ms: "Berikan analisis penuh bagi \"الشَّاعِرِ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "atf-bayan", labelEn: "'Atf bayan", labelMs: "'Atf bayan" },
            { value: "naat", labelEn: "Na't", labelMs: "Na't" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "jarr", labelEn: "Jarr", labelMs: "Jarr" },
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "kasra-zahira", labelEn: "Apparent kasra", labelMs: "Kasrah zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "atf-bayan", case: "jarr", sign: "kasra-zahira" } ],
        ruleNote: { en: "الشاعرِ clarifies the definite ism ishara هذا الأديبِ with no joining harf — 'atf bayan, not na't — and must agree with it fully; it is jarr here because الأديب is majrur by على.", ms: "الشاعرِ menjelaskan ism isyarah makrifah هذا الأديبِ tanpa huruf penyambung — 'atf bayan, bukan na't — dan mesti bersetuju dengannya sepenuhnya; ia jarr di sini kerana الأديب majrur oleh على." }
      }
    ],
    completion: {
      en: "You can now work through 'atf al-nasaq's nine huruf al-'atf and their individual conditions, and recognize 'atf al-bayan as a completely separate, harf-less sub-part that must fully agree with its matbu'.",
      ms: "Anda kini boleh menyelesaikan sembilan huruf al-'atf bagi 'atf al-nasaq dan syarat masing-masing, dan mengenali 'atf al-bayan sebagai bahagian berasingan sepenuhnya, tanpa huruf, yang mesti bersetuju sepenuhnya dengan matbu'nya."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 45 — إعراب التوكيد (I'rab of Emphasis / Tawkid)
  // ------------------------------------------------------------------
  45: {
    chapterId: 45,
    status: "pilot",
    concept: {
      en: "Tawkid strengthens its matbu' and removes all ambiguity about it. It comes in two kinds: ma'nawi, using one of nine famous fixed words (نفس، عين، كل، جميع، عامة، كافة، أجمع، كلا، كلتا), and lafzi, repeating the exact lafz of the mu'akkad — whether an ism, a fi'l, a harf, or a whole jumla, and even, the book notes, via a synonym.",
      ms: "Tawkid menguatkan matbu'nya dan menghapuskan segala kekaburan mengenainya. Ia datang dalam dua jenis: ma'nawi, menggunakan salah satu daripada sembilan perkataan tetap yang masyhur (نفس، عين، كل، جميع، عامة، كافة، أجمع، كلا، كلتا), dan lafzi, mengulang lafaz tepat mu'akkad — sama ada ism, fi'l, harf, atau keseluruhan jumlah, malah, menurut buku itu, melalui sinonim."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 45, pdfPages: [213, 215] },
      en: "Tawkid is a lafz that strengthens its matbu' and removes every ambiguity about it, and it is of two kinds. (1) Tawkid ma'nawi uses one of several famous words: جميع، عامة، كافة، أجمع، عين، نفس، كل، كلا، كلتا — e.g. عاد القائد نفسه؛ توافد القوم عامتهم لاستقباله. These seven-or-so words are not fixed to one grammatical role; depending on what the context's 'amil requires of the mu'akkad, they can themselves work as fa'il, maf'ul, mubtada', khabar, and so on. Every ma'nawi or lafzi tawkid follows (yatba') its mu'akkad's i'rab — by hamal on the lafz when the mu'akkad itself carries a visible case ending, or by hamal on the mahall when the mu'akkad is mabni (رغبتَ أنتَ نفسُك في الخير — أنتَ is a disjoint pronoun with no i'rab of its own, yet its tawkid نفسُك still follows by hamal on the mahall raf'). (2) Tawkid lafzi repeats the exact lafz of the mu'akkad, whether it is an ism (جاهدوا من أجل الاستقلالِ، الاستقلالِ), a jumla (زهق الباطل، زهق الباطل), a fi'l (عاش، عاش الوطن), or even a harf (إنَّ الشمسَ إنَّ الشمسَ قاتلةٌ للجراثيم — the second إنّ has no 'amal and no mahall of its own). A word can even be repeated as tawkid lafzi more than twice, not just once (الحسابُ الحسابُ الحسابُ عسيرٌ — three repetitions, each tabi' in raf' with no 'amal or mahall of its own). The book also allows tawkid lafzi bi-al-muradif — repeating not the exact same word but a synonym carrying the same meaning (أتى جاء الزميلُ: أتى is tawkid lafzi for the synonymous جاء, which is the actual fi'l of the sentence).",
      ms: "Tawkid ialah lafaz yang menguatkan matbu'nya dan menghapuskan setiap kekaburan mengenainya, dan ia terbahagi kepada dua jenis. (1) Tawkid ma'nawi menggunakan salah satu daripada beberapa perkataan masyhur: جميع، عامة، كافة، أجمع، عين، نفس، كل، كلا، كلتا — cth. عاد القائد نفسه؛ توافد القوم عامتهم لاستقباله. Kira-kira tujuh perkataan ini tidak tetap pada satu peranan nahu; bergantung pada apa yang dikehendaki 'amil konteks itu daripada mu'akkad, ia sendiri boleh bertindak sebagai fa'il, maf'ul, mubtada', khabar, dan sebagainya. Setiap tawkid ma'nawi atau lafzi mengikut (yatba') i'rab mu'akkadnya — melalui hamal pada lafaz apabila mu'akkad itu sendiri membawa tanda kes yang kelihatan, atau melalui hamal pada mahall apabila mu'akkad itu mabni (رغبتَ أنتَ نفسُك في الخير — أنتَ ialah kata ganti nama berasingan tanpa i'rabnya sendiri, namun tawkidnya نفسُك tetap mengikut melalui hamal pada mahall raf'). (2) Tawkid lafzi mengulang lafaz tepat mu'akkad, sama ada ia ism (جاهدوا من أجل الاستقلالِ، الاستقلالِ), jumlah (زهق الباطل، زهق الباطل), fi'l (عاش، عاش الوطن), atau malah harf (إنَّ الشمسَ إنَّ الشمسَ قاتلةٌ للجراثيم — إنّ kedua tiada 'amal dan tiada mahallnya sendiri). Sesuatu perkataan boleh diulang sebagai tawkid lafzi lebih daripada dua kali, bukan sekali sahaja (الحسابُ الحسابُ الحسابُ عسيرٌ — tiga pengulangan, setiap satu tabi' pada raf' tanpa 'amal atau mahallnya sendiri). Buku itu turut membenarkan tawkid lafzi bi-al-muradif — mengulang bukan perkataan yang sama tepat tetapi sinonim yang membawa makna yang sama (أتى جاء الزميلُ: أتى ialah tawkid lafzi bagi sinonimnya جاء, yang merupakan fi'l sebenar ayat itu)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 45, pdfPages: [213, 213] },
      arabic: "جَاءَ الرَّئِيسُ نَفْسُهُ",
      gloss: { en: "The president himself came.", ms: "Presiden itu sendiri datang." },
      words: [
        { id: "w1", ar: "جَاءَ", role: { en: "past-tense verb", ms: "kata kerja lampau" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb defaults to apparent fatha.", ms: "Kata kerja lampau berakar sahih kekal fathah zahir secara lazim." } },
        { id: "w2", ar: "الرَّئِيسُ", role: { en: "fa'il, and the mu'akkad", ms: "fa'il, dan mu'akkad" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The fa'il of جاء; also the word نفسه strengthens.", ms: "Fa'il bagi جاء; juga perkataan yang dikuatkan oleh نفسه." } },
        { id: "w3", ar: "نَفْسُهُ", role: { en: "tawkid ma'nawi for الرئيس", ms: "tawkid ma'nawi bagi الرئيس" }, case: "raf'", sign: { en: "apparent damma; mudaf, with هُ as mudaf ilayh in mahall jarr", ms: "damma zahir; mudaf, dengan هُ sebagai mudaf ilayh pada mahall jarr" }, reason: { en: "Tawkid ma'nawi follows its mu'akkad's i'rab — raf', matching الرئيس — and نفس is always mudaf to a pronoun referring back to the mu'akkad.", ms: "Tawkid ma'nawi mengikut i'rab mu'akkadnya — raf', menyamai الرئيس — dan نفس sentiasa mudaf kepada kata ganti nama yang merujuk kembali kepada mu'akkad." } }
      ]
    },
    exercises: [
      {
        id: "ex45-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "حَضَرَ الطَّالِبُ نَفْسُهُ",
        gloss: { en: "The student himself attended.", ms: "Pelajar itu sendiri hadir." },
        targetWord: "نَفْسُهُ",
        question: { en: "What is the role of \"نَفْسُهُ\"?", ms: "Apakah peranan \"نَفْسُهُ\"?" },
        options: [
          { value: "tawkid-manawi", labelEn: "Tawkid ma'nawi", labelMs: "Tawkid ma'nawi" },
          { value: "naat", labelEn: "Na't", labelMs: "Na't" }
        ],
        acceptedValues: ["tawkid-manawi"],
        ruleNote: { en: "نفس is one of the famous tawkid ma'nawi words, and it follows its mu'akkad الطالب in case — raf', since الطالب is fa'il.", ms: "نفس ialah salah satu perkataan tawkid ma'nawi yang masyhur, dan ia mengikut mu'akkadnya الطالب dari segi kes — raf', kerana الطالب ialah fa'il." }
      },
      {
        id: "ex45-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "سَافَرْتُ مِنْ أَجْلِ الوَطَنِ، الوَطَنِ",
        gloss: { en: "I traveled for the sake of the homeland, the homeland.", ms: "Saya mengembara demi tanah air, tanah air." },
        targetWord: "الوَطَنِ",
        question: { en: "Give the full analysis of the repeated \"الوَطَنِ\".", ms: "Berikan analisis penuh bagi \"الوَطَنِ\" yang diulang." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "tawkid-lafzi", labelEn: "Tawkid lafzi", labelMs: "Tawkid lafzi" },
            { value: "badal", labelEn: "Badal", labelMs: "Badal" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "jarr", labelEn: "Jarr", labelMs: "Jarr" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "kasra-zahira", labelEn: "Apparent kasra", labelMs: "Kasrah zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "tawkid-lafzi", case: "jarr", sign: "kasra-zahira" } ],
        ruleNote: { en: "Tawkid lafzi repeats the mu'akkad's exact lafz and simply follows its case — jarr here, since الوطن is majrur by من أجل.", ms: "Tawkid lafzi mengulang lafaz tepat mu'akkad dan hanya mengikut kesnya — jarr di sini, kerana الوطن majrur oleh من أجل." }
      }
    ],
    completion: {
      en: "You can now distinguish tawkid ma'nawi (one of the fixed words, mudaf to a pronoun back to the mu'akkad) from tawkid lafzi (repeating the mu'akkad's own lafz, or even a synonym), and both follow the mu'akkad's own case.",
      ms: "Anda kini boleh membezakan tawkid ma'nawi (salah satu perkataan tetap, mudaf kepada kata ganti nama kembali kepada mu'akkad) daripada tawkid lafzi (mengulang lafaz mu'akkad sendiri, atau malah sinonim), dan kedua-duanya mengikut kes mu'akkad sendiri."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 46 — إعراب البدل (I'rab of Substitution / Badal)
  // ------------------------------------------------------------------
  46: {
    chapterId: 46,
    status: "pilot",
    concept: {
      en: "Badal is a tabi' prepared for by naming its mubdal minhu first. The book formally defines three types — mutabiq, ishtimal, and ba'd-min-kull — but its own worked examples additionally label three more functions (ghalat, nisyan, tafsil) that never receive a formal definition heading anywhere in the chapter, flagged here for review by a qualified teacher.",
      ms: "Badal ialah tabi' yang disediakan dengan menamakan mubdal minhunya dahulu. Buku itu secara rasmi mentakrifkan tiga jenis — mutabiq, ishtimal, dan ba'd-min-kull — tetapi contoh kerjanya sendiri turut melabelkan tiga fungsi lagi (ghalat, nisyan, tafsil) yang tidak pernah menerima tajuk takrif rasmi di mana-mana dalam bab ini, ditanda di sini untuk semakan oleh guru yang layak."
    },
    rule: {
      contentLabel: "needs-review",
      citation: { chapter: 46, pdfPages: [216, 219] },
      en: "Badal is a tabi' prepared for by naming its matbu' (the mubdal minhu) beforehand. The book's own التعريف (definition) section formally defines exactly three types, each under its own lettered heading. (a) Badal ishtimal: the badal is something belonging to the needs or qualities of the mubdal minhu, and must be linked by a pronoun referring back to it — نضج القدرُ طعامُهُ (طعامُهُ linked by هُ to القدر). (b) Al-badal al-mutabiq: the badal IS the mubdal minhu, the same referent restated — دخل القائدُ، قائدُ الجيشِ. (c) Badal juz' min kull: the badal is a part of the mubdal minhu, again linked by a pronoun back to it — اندحر الجيشُ كتائبُه (كتائبُه linked by هـ to الجيش). All three follow the mubdal minhu's own i'rab. Beyond these three, the chapter's own i'rab (worked-example) section labels three FURTHER badal functions, each attached to a single example sentence, with no formal definition given for any of them anywhere in the chapter — this is exactly what makes them needs-review rather than settled source-derived content. بدل غلط (ghalat — a 'slip of the tongue' correction) replaces a word said by mistake: حرصت على دفاتري كتبي كل الحرص (كتبي بدل غلط من دفاتري, glossed as بدلاً من شيء ذُكر غلطًا — \"a tongue-level error\"). بدل نسيان (nisyan — a 'forgetting' correction) replaces a word said due to a memory lapse, explicitly distinguished from ghalat as a mind-level rather than tongue-level lapse: ذهب عصامٌ إلى القريةِ، البلدةِ (البلدة بدل نسيان من القرية — بدل الغلط يتعلق باللسان، وبدل النسيان يتعلق بالعقل). بدل تفصيل (tafsil — a 'detailing' correction) enumerates what an earlier vague referent (usually مَن or ما in a shart-like sentence) actually means, with the إنْ introducing it explicitly noted as NOT a conditional jazm particle here — it only signals detailing: من يحترمني إنْ صديقٌ وإنْ عدوٌّ احترمه (صديقٌ وعدوٌّ بدل تفصيل من كلمة مَن)؛ ما تصنعْ إنْ خيرًا وإنْ شرًّا تُجزَ به. A closely related pattern appears for the interrogative مَن, labeled simply بدل without the تفصيل qualifier: مَن جاء أغسانُ أم عامرٌ؟ (غسانُ بدل من كلمة مَن). Separately, the book also confirms jumla-on-jumla substitution for conditional verbs: when a second fi'l is majzum just like the first, it is badal fi'l min fi'l — not badal jumla min jumla — إنْ تُصَلِّ تسجدْ للهِ يرحمْك (تسجدْ badal of تُصَلِّ, following it into jazm).",
      ms: "Badal ialah tabi' yang disediakan dengan menamakan matbu'nya (mubdal minhu) terlebih dahulu. Bahagian التعريف (takrif) buku itu sendiri secara rasmi mentakrifkan tepat tiga jenis, setiap satu di bawah tajuk berhurufnya sendiri. (a) Badal ishtimal: badal ialah sesuatu yang tergolong dalam keperluan atau sifat mubdal minhu, dan mesti dikaitkan dengan kata ganti nama yang merujuk kembali kepadanya — نضج القدرُ طعامُهُ (طعامُهُ dikaitkan oleh هُ kepada القدر). (b) Al-badal al-mutabiq: badal ADALAH mubdal minhu, rujukan yang sama dinyatakan semula — دخل القائدُ، قائدُ الجيشِ. (c) Badal juz' min kull: badal ialah sebahagian daripada mubdal minhu, sekali lagi dikaitkan dengan kata ganti nama kembali kepadanya — اندحر الجيشُ كتائبُه (كتائبُه dikaitkan oleh هـ kepada الجيش). Ketiga-tiganya mengikut i'rab mubdal minhu sendiri. Selain ketiga-tiga ini, bahagian i'rab (contoh kerja) bab itu sendiri melabelkan TIGA fungsi badal LAGI, setiap satu dilekatkan pada satu ayat contoh, tanpa takrif rasmi diberikan bagi mana-mana satu di mana-mana dalam bab ini — inilah yang menjadikannya needs-review dan bukan kandungan source-derived yang mantap. بدل غلط (ghalat — pembetulan 'tersalah sebut') menggantikan perkataan yang disebut secara tersilap: حرصت على دفاتري كتبي كل الحرص (كتبي بدل غلط من دفاتري, digambarkan sebagai بدلاً من شيء ذُكر غلطًا — \"kesilapan pada tahap lidah\"). بدل نسيان (nisyan — pembetulan 'terlupa') menggantikan perkataan yang disebut akibat kelupaan, secara jelas dibezakan daripada ghalat sebagai kelupaan pada tahap minda dan bukan lidah: ذهب عصامٌ إلى القريةِ، البلدةِ (البلدة بدل نسيان من القرية — بدل الغلط يتعلق باللسان، وبدل النسيان يتعلق بالعقل). بدل تفصيل (tafsil — pembetulan 'perincian') memperincikan apa yang sebenarnya dimaksudkan oleh rujukan kabur terdahulu (biasanya مَن atau ما dalam ayat seakan-syarat), dengan إنْ yang memperkenalkannya secara jelas dinyatakan BUKAN partikel jazm bersyarat di sini — ia hanya menandakan perincian: من يحترمني إنْ صديقٌ وإنْ عدوٌّ احترمه (صديقٌ وعدوٌّ بدل تفصيل من كلمة مَن)؛ ما تصنعْ إنْ خيرًا وإنْ شرًّا تُجزَ به. Pola yang berkait rapat muncul bagi kata tanya مَن, dilabel sekadar بدل tanpa penjelas تفصيل: مَن جاء أغسانُ أم عامرٌ؟ (غسانُ بدل من كلمة مَن). Secara berasingan, buku itu turut mengesahkan penggantian jumlah-kepada-jumlah bagi kata kerja bersyarat: apabila fi'l kedua majzum sama seperti yang pertama, ia ialah badal fi'l min fi'l — bukan badal jumlah min jumlah — إنْ تُصَلِّ تسجدْ للهِ يرحمْك (تسجدْ badal bagi تُصَلِّ, mengikutnya ke dalam jazm)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 46, pdfPages: [216, 216] },
      arabic: "انْدَحَرَ الجَيْشُ كَتَائِبُهُ",
      gloss: { en: "The army was routed — its battalions, [that is].", ms: "Tentera itu dikalahkan — iaitu, batalion-batalionnya." },
      words: [
        { id: "w1", ar: "انْدَحَرَ", role: { en: "past-tense verb", ms: "kata kerja lampau" }, case: "—", sign: { en: "mabni on apparent fatha", ms: "mabni fathah zahir" }, reason: { en: "A sound-rooted past-tense verb defaults to apparent fatha.", ms: "Kata kerja lampau berakar sahih kekal fathah zahir secara lazim." } },
        { id: "w2", ar: "الجَيْشُ", role: { en: "fa'il, and the mubdal minhu", ms: "fa'il, dan mubdal minhu" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The fa'il of اندحر; also what كتائبه substitutes for.", ms: "Fa'il bagi اندحر; juga perkara yang digantikan oleh كتائبه." } },
        { id: "w3", ar: "كَتَائِبُهُ", role: { en: "badal ba'd min kull from الجيش", ms: "badal ba'd min kull daripada الجيش" }, case: "raf'", sign: { en: "apparent damma; mudaf, with هُ as mudaf ilayh in mahall jarr", ms: "damma zahir; mudaf, dengan هُ sebagai mudaf ilayh pada mahall jarr" }, reason: { en: "كتائبُ (battalions) is a part of الجيش (the army) as a whole, linked by the pronoun هُ back to it, and follows الجيش's raf'.", ms: "كتائبُ (batalion) ialah sebahagian daripada الجيش (tentera) secara keseluruhan, dikaitkan oleh kata ganti nama هُ kembali kepadanya, dan mengikut raf' الجيش." } }
      ]
    },
    exercises: [
      {
        id: "ex46-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "دَخَلَ الوَزِيرُ وَزِيرُ الخَارِجِيَّةِ",
        gloss: { en: "The minister entered — the foreign minister.", ms: "Menteri itu masuk — menteri luar itu." },
        targetWord: "وَزِيرُ",
        question: { en: "What is the role of \"وَزِيرُ\"?", ms: "Apakah peranan \"وَزِيرُ\"?" },
        options: [
          { value: "badal-mutabiq", labelEn: "Badal mutabiq", labelMs: "Badal mutabiq" },
          { value: "naat", labelEn: "Na't", labelMs: "Na't" }
        ],
        acceptedValues: ["badal-mutabiq"],
        ruleNote: { en: "وزيرُ الخارجية is literally the same person as الوزير, restated — badal mutabiq, following its mubdal minhu in raf'.", ms: "وزيرُ الخارجية ialah secara literal orang yang sama dengan الوزير, dinyatakan semula — badal mutabiq, mengikut raf' mubdal minhunya." }
      },
      {
        id: "ex46-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "أَعْجَبَنِي الفَنَّانُ صَوْتُهُ",
        gloss: { en: "The artist's voice amazed me.", ms: "Suara artis itu mengagumkan saya." },
        targetWord: "صَوْتُهُ",
        question: { en: "Give the full analysis of \"صَوْتُهُ\".", ms: "Berikan analisis penuh bagi \"صَوْتُهُ\"." },
        fields: [
          { key: "role", question: { en: "Role", ms: "Peranan" }, options: [
            { value: "badal-ishtimal", labelEn: "Badal ishtimal", labelMs: "Badal ishtimal" },
            { value: "badal-mutabiq", labelEn: "Badal mutabiq", labelMs: "Badal mutabiq" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "rafa", labelEn: "Raf'", labelMs: "Raf'" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "badal-ishtimal", case: "rafa", sign: "damma-zahira" } ],
        ruleNote: { en: "صَوْتُهُ (his voice) belongs to the qualities of الفنان (the artist) rather than being the artist himself, and is linked back to him by هُ — badal ishtimal, following الفنان's raf' as fa'il of أعجبني.", ms: "صَوْتُهُ (suaranya) tergolong dalam sifat الفنان (artis itu) dan bukannya artis itu sendiri, dan dikaitkan kembali kepadanya oleh هُ — badal ishtimal, mengikut raf' الفنان sebagai fa'il bagi أعجبني." }
      }
    ],
    completion: {
      en: "You can now work through the book's three formally-defined badal types — mutabiq, ishtimal, and ba'd-min-kull — and you've seen that the book's own worked examples go further, demonstrating badal ghalat, nisyan, and tafsil without ever formally defining them, which is why this chapter carries a needs-review flag.",
      ms: "Anda kini boleh menyelesaikan tiga jenis badal yang ditakrifkan secara rasmi oleh buku itu — mutabiq, ishtimal, dan ba'd-min-kull — dan anda telah melihat bahawa contoh kerja buku itu sendiri melangkah lebih jauh, menunjukkan badal ghalat, nisyan, dan tafsil tanpa pernah mentakrifkannya secara rasmi, itulah sebabnya bab ini membawa tanda needs-review."
    }
  },


  // ------------------------------------------------------------------
  // Chapter 39 — إعراب المنادى (I'rab of the Vocative)
  // ------------------------------------------------------------------
  39: {
    chapterId: 39,
    status: "pilot",
    concept: {
      en: "The munada (vocative) splits into two broad i'rab families depending on its own noun-type: a mufrad 'alam or nakira maqsuda is mabni on whatever vowel it would carry as raf' (damma/alif/waw), while a mudaf, a shibih bil-mudaf, or a nakira ghayr maqsuda is mansub. Either way the whole munada sits in mahall nasb as maf'ul bih for an elided verb of calling, which (يا) stands in for.",
      ms: "Munada (kata seruan) terbahagi kepada dua keluarga i'rab yang luas bergantung pada jenis kata namanya sendiri: mufrad 'alam atau nakira maqsudah adalah mabni pada apa jua baris yang akan dibawanya sebagai raf' (damma/alif/waw), manakala mudaf, syabih bil-mudaf, atau nakira ghayr maqsudah adalah mansub. Walau apa pun, keseluruhan munada berada dalam mahal nasb sebagai maf'ul bih bagi kata kerja memanggil yang digugurkan, yang digantikan oleh (يا)."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 39, pdfPages: [190, 197] },
      en: "The munada is an ism that falls directly after one of the huruf al-nida' (vocative particles); يا is their most famous and most-used member, covering both near and far address. The munada stands in the place of a maf'ul bih for an elided verb of calling (أنادي / أدعو), for which يا — or one of its sister particles — substitutes; so the munada together with its harf al-nida' is treated as a jumla fi'liyya by virtue of that hidden verb. Five noun-types govern how the munada is marked: (1) mufrad 'alam — mabni on damma (يا سليمُ), or on whatever its own plural/dual marker would be (يا يوسفون — waw, since it's jam' mudhakkar salim; يا صديقان — alif, since it's muthanna, with the following nun standing in for tanwin). (2) nakira maqsuda (an indefinite addressed as if it were specific and present) — mabni the same way (يا صديقُ؛ يا مؤمنون). (3) nakira ghayr maqsuda (a genuinely unspecified indefinite) — mansub fatha instead (يا صديقًا)؛ when described, the whole phrase stays mansub (يا صديقًا مخلصًا، where مخلصًا is its na't, tabi' in nasb). (4) mudaf — mansub fatha (يا عبدَ اللهِ، where عبدَ is mansub and اللهِ is mudaf ilayh majrur). (5) shibih bil-mudaf (resembles a mudaf because something depends on it even without a literal idafa) — also mansub (يا بائعَ الكُتُبِ؛ يا جميلاً صوتُه، where صوتُه is fa'il of the active-participle munada جميلاً). An ism isharah munada is mabni on a muqaddar (estimated) vowel instead of a visible one (يا هؤلاءِ — mabni damma muqaddara, the kasra it would otherwise show being blocked; يا هذان — mabni on alif, as mulhaq bil-muthanna). The special vocative اللَّهُمَّ keeps اسم الجلالة mabni on damma as usual, with the doubled, fatha-marked ميم standing in for the elided harf al-nida' itself, rather than a separate word. When a mabni munada's tawkid or na't is itself mabni/ambiguous, the book allows following either the munada's own lafz (so a repeated proper name as tawkid lafzi can stay raf' — يا سميرُ سميرُ) or its mahall (so the same tawkid can instead appear nasb — يا سميرُ سميرًا); the identical lafz/mahall choice applies to a na't (يا سميرُ الشجاعُ أو الشجاعَ). A rarer, secondary wrinkle: when ابن or ابنة sits between a munada 'alam and another 'alam as its na't (يا سعيدُ بنَ منير), the munada's vowel may shift from its default damma to a harmonizing fatha (فتحة الإتباع) to match the fatha the بنَ-construction forces on its own na't — though the book itself notes the simpler reading just treats both words as mansub outright. A badal or 'atf bayan following a mabni munada may likewise be read by lafz or by mahall (يا سميرُ أخانا, with أخانا either badal, tabi' in nasb mahalli, or 'atf bayan on the same basis); on a different sentence, when that bayan/badal word itself carries its own further bayan/badal, the book explicitly ranks one surface form over the other despite the other's greater fame (يا أخانا عادلاً أو عادلٌ — \"الإعراب الأول أصح، بالرغم من شهرة الإعراب الثاني\", the 'atf-bayan reading عادلاً is sounder even though the badal reading عادلٌ is more renowned).",
      ms: "Munada ialah ism yang terletak sejurus selepas salah satu huruf al-nida' (huruf seruan); يا ialah ahlinya yang paling masyhur dan paling banyak digunakan, merangkumi seruan dekat dan jauh. Munada menduduki tempat maf'ul bih bagi kata kerja memanggil yang digugurkan (أنادي / أدعو), yang digantikan oleh يا — atau salah satu saudaranya; maka munada bersama harf al-nida'nya dianggap sebagai jumlah fi'liyyah kerana kata kerja tersembunyi itu. Lima jenis kata nama menentukan bagaimana munada ditandakan: (1) mufrad 'alam — mabni pada damma (يا سليمُ), atau pada apa jua tanda jamak/dualnya sendiri (يا يوسفون — waw, kerana ia jam' mudhakkar salim; يا صديقان — alif, kerana ia muthanna, dengan nun berikutnya menggantikan tanwin). (2) nakira maqsudah (kata nama tak tentu yang diseru seolah-olah tertentu dan hadir) — mabni dengan cara yang sama (يا صديقُ؛ يا مؤمنون). (3) nakira ghayr maqsudah (kata nama tak tentu yang benar-benar tidak tertentu) — mansub fathah sebaliknya (يا صديقًا)؛ apabila disifatkan, keseluruhan frasa kekal mansub (يا صديقًا مخلصًا, di mana مخلصًا ialah na'tnya, tabi' pada nasb). (4) mudaf — mansub fathah (يا عبدَ اللهِ, di mana عبدَ mansub dan اللهِ mudaf ilayh majrur). (5) syabih bil-mudaf (menyerupai mudaf kerana sesuatu bergantung padanya walaupun tiada idafa sebenar) — turut mansub (يا بائعَ الكُتُبِ؛ يا جميلاً صوتُه, di mana صوتُه ialah fa'il bagi munada ism fa'il جميلاً). Munada ism isharah adalah mabni pada baris muqaddar (anggaran) dan bukan baris kelihatan (يا هؤلاءِ — mabni damma muqaddarah, kasrah yang sepatutnya ditunjukkannya disekat; يا هذان — mabni pada alif, sebagai mulhaq bil-muthanna). Seruan khas اللَّهُمَّ mengekalkan اسم الجلالة mabni pada damma seperti biasa, dengan ميم bertasydid dan berbaris fathah menggantikan harf al-nida' yang digugurkan itu sendiri, bukannya perkataan berasingan. Apabila tawkid atau na't bagi munada mabni itu sendiri mabni/kabur, buku itu membenarkan mengikut sama ada lafaz munada sendiri (maka nama khas yang diulang sebagai tawkid lafzi boleh kekal raf' — يا سميرُ سميرُ) atau mahallnya (maka tawkid yang sama boleh sebaliknya menjadi nasb — يا سميرُ سميرًا); pilihan lafaz/mahall yang sama terpakai bagi na't (يا سميرُ الشجاعُ أو الشجاعَ). Satu lagi kerumitan sekunder yang lebih jarang: apabila ابن atau ابنة terletak antara munada 'alam dan 'alam lain sebagai na'tnya (يا سعيدُ بنَ منير), baris munada boleh beralih daripada damma lazimnya kepada fathah yang menyelaraskan (فتحة الإتباع) untuk sepadan dengan fathah yang dipaksa oleh binaan بنَ ke atas na'tnya sendiri — walaupun buku itu sendiri menyatakan bacaan yang lebih mudah hanya menganggap kedua-dua perkataan itu mansub sahaja. Badal atau 'atf bayan selepas munada mabni turut boleh dibaca melalui lafaz atau mahall (يا سميرُ أخانا, dengan أخانا sama ada badal, tabi' pada nasb mahalli, atau 'atf bayan atas dasar yang sama); pada ayat yang berbeza, apabila perkataan bayan/badal itu sendiri membawa bayan/badalnya sendiri pula, buku itu secara jelas menyusun satu bentuk zahir mengatasi yang lain walaupun yang satu lagi lebih masyhur (يا أخانا عادلاً أو عادلٌ — \"الإعراب الأول أصح، بالرغم من شهرة الإعراب الثاني\", bacaan 'atf bayan عادلاً lebih sahih walaupun bacaan badal عادلٌ lebih masyhur)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 39, pdfPages: [190, 190] },
      arabic: "يَا سَلِيمُ",
      gloss: { en: "O Salim!", ms: "Wahai Salim!" },
      words: [
        { id: "w1", ar: "يَا", role: { en: "harf al-nida' (vocative particle)", ms: "harf al-nida' (huruf seruan)" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "يا is the most famous and most-used vocative particle, for both near and far address.", ms: "يا ialah huruf nida' yang paling masyhur dan paling banyak digunakan, bagi seruan dekat dan jauh." } },
        { id: "w2", ar: "سَلِيمُ", role: { en: "munada, mufrad 'alam", ms: "munada, mufrad 'alam" }, case: "—", sign: { en: "mabni on damma", ms: "mabni damma" }, reason: { en: "A mufrad 'alam munada is mabni on damma, and it sits in mahall nasb as maf'ul bih for the elided verb of calling that يا substitutes for — taqdir: أنادي or أدعو سليمًا.", ms: "Munada mufrad 'alam adalah mabni pada damma, dan ia berada dalam mahal nasb sebagai maf'ul bih bagi kata kerja memanggil yang digugurkan yang digantikan oleh يا — taqdir: أنادي atau أدعو سليمًا." } }
      ]
    },
    exercises: [
      {
        id: "ex39-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "يَا عَبْدَ اللهِ",
        gloss: { en: "O servant of God!", ms: "Wahai hamba Allah!" },
        targetWord: "عَبْدَ",
        question: { en: "What is the i'rab of \"عَبْدَ\" here?", ms: "Apakah i'rab bagi \"عَبْدَ\" di sini?" },
        options: [
          { value: "mabni-damma", labelEn: "Mabni damma", labelMs: "Mabni damma" },
          { value: "mansub-fatha", labelEn: "Mansub, apparent fatha", labelMs: "Mansub, fathah zahir" }
        ],
        acceptedValues: ["mansub-fatha"],
        ruleNote: { en: "A mudaf munada is always mansub, not mabni — عبدَ takes fatha because it is mudaf to اللهِ.", ms: "Munada mudaf sentiasa mansub, bukan mabni — عبدَ membawa fathah kerana ia mudaf kepada اللهِ." }
      },
      {
        id: "ex39-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "يَا صَدِيقًا",
        gloss: { en: "O some friend (any friend, unspecified)!", ms: "Wahai seorang sahabat (sesiapa sahaja, tidak tertentu)!" },
        targetWord: "صَدِيقًا",
        question: { en: "Give the full analysis of \"صَدِيقًا\".", ms: "Berikan analisis penuh bagi \"صَدِيقًا\"." },
        fields: [
          { key: "role", question: { en: "Noun-type", ms: "Jenis kata nama" }, options: [
            { value: "nakira-ghayr-maqsuda", labelEn: "Nakira ghayr maqsuda", labelMs: "Nakira ghayr maqsudah" },
            { value: "nakira-maqsuda", labelEn: "Nakira maqsuda", labelMs: "Nakira maqsudah" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "mabni", labelEn: "Mabni (no case)", labelMs: "Mabni (tiada kes)" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" },
            { value: "damma-zahira", labelEn: "Apparent damma", labelMs: "Damma zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "nakira-ghayr-maqsuda", case: "nasb", sign: "fatha-zahira" } ],
        ruleNote: { en: "Unlike a nakira maqsuda, a genuinely unspecified indefinite munada (nakira ghayr maqsuda) is mansub fatha, as the maf'ul bih of the elided verb of calling.", ms: "Berbeza daripada nakira maqsudah, munada nakira yang benar-benar tidak tertentu (nakira ghayr maqsudah) adalah mansub fathah, sebagai maf'ul bih bagi kata kerja memanggil yang digugurkan." }
      }
    ],
    completion: {
      en: "You can now tell a mabni munada (mufrad 'alam or nakira maqsuda, marked like its own raf') from a mansub one (mudaf, shibih bil-mudaf, or nakira ghayr maqsuda), and recognize the lafz/mahall flexibility the book allows for a mabni munada's own tawkid, na't, badal or 'atf bayan.",
      ms: "Anda kini boleh membezakan munada mabni (mufrad 'alam atau nakira maqsudah, bertanda seperti raf'nya sendiri) daripada yang mansub (mudaf, syabih bil-mudaf, atau nakira ghayr maqsudah), dan mengenali kelonggaran lafaz/mahall yang dibenarkan buku itu bagi tawkid, na't, badal atau 'atf bayan munada mabni."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 40 — إعراب الاستغاثة (I'rab of the Cry for Help)
  // ------------------------------------------------------------------
  40: {
    chapterId: 40,
    status: "pilot",
    concept: {
      en: "Istighatha is a special nida' for calling on someone to help fend off trouble, built from three named parts: the mustaghath bih (who is called, marked by a fatha-voweled lam), the mustaghath lahu (who is being helped, marked by a kasra-voweled lam), and an optional mustaghath 'alayh (what the trouble is, introduced by مِن). Only يا is ever used.",
      ms: "Istighathah ialah nida' khas untuk memanggil seseorang membantu menangkis kesusahan, dibina daripada tiga bahagian bernama: mustaghath bih (yang diseru, ditandai lam berbaris fathah), mustaghath lahu (yang ditolong, ditandai lam berbaris kasrah), dan mustaghath 'alayh pilihan (apa kesusahan itu, diperkenalkan oleh مِن). Hanya يا sahaja yang digunakan."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 40, pdfPages: [198, 199] },
      en: "Istighatha is a nida' that helps push away something dreaded, from distress or hardship, e.g. يا لَلمُقَلّاء للقَوم من السفهاء. No vocative particle but يا is ever used for it, and istighatha has four arkan: al-mustaghith (the one calling, left implicit), al-mustaghath bih (who is called on), al-mustaghath lahu (who is being helped), and al-mustaghath 'alayh (what the trouble is). The mustaghath bih carries a fatha-voweled lam (لام المُستغاث به) — an asli harf jarr attached to the elided verb of calling — so the noun itself is majrur lafzan by the lam but mansub mahallan, since it's still really the maf'ul bih of that hidden verb (يا لَلطبيبِ للمريضِ). The mustaghath lahu carries a kasra-voweled lam instead (لام المستغاث له), also an asli harf jarr, and stays simply majrur bil-lam with no mahall complication (نحو: للمريضِ). When the mustaghath bih ends in a tacked-on alif rather than the lam (replacing it: المنادى المُستغاث المتصل بالألف عوض اللام), it keeps the munada's own ordinary mabni/mansub rules — a mabni type (mufrad 'alam, nakira maqsuda) stays mabni, now on a muqaddar vowel because the added alif blocks it from appearing (يا يزيدا للغريقِ — مبني على ضم مقدّر، منع من ظهوره اشتغال محله بالفتحة العارضة), while a mansub type (mudaf, shibih bil-mudaf, nakira maqsuda mawsufa) stays mansub as usual. The mustaghath 'alayh, when present, is introduced by مِن rather than a lam (يا للراعي مِن الذئبِ — الذئبِ مجرور بمِن). The istighatha lam-pattern is also borrowed for sheer ta'ajjub (marvelling), with no real distress at all (يا لَلبحرِ! — تعجبًا من عظمته).",
      ms: "Istighathah ialah nida' yang membantu menolak sesuatu yang ditakuti, daripada kesusahan atau kesukaran, cth. يا لَلمُقَلّاء للقَوم من السفهاء. Tiada huruf nida' selain يا yang digunakan untuknya, dan istighathah mempunyai empat rukun: al-mustaghith (yang menyeru, dibiarkan tersirat), al-mustaghath bih (yang diseru), al-mustaghath lahu (yang ditolong), dan al-mustaghath 'alayh (apa kesusahan itu). Mustaghath bih membawa lam berbaris fathah (لام المُستغاث به) — harf jarr asli yang terikat pada kata kerja memanggil yang digugurkan — maka kata nama itu sendiri majrur lafzan oleh lam tetapi mansub mahallan, kerana ia sebenarnya tetap maf'ul bih bagi kata kerja tersembunyi itu (يا لَلطبيبِ للمريضِ). Mustaghath lahu pula membawa lam berbaris kasrah (لام المستغاث له), turut harf jarr asli, dan kekal majrur bil-lam tanpa sebarang kerumitan mahall (نحو: للمريضِ). Apabila mustaghath bih berakhir dengan alif tambahan dan bukan lam (menggantikannya: المنادى المُستغاث المتصل بالألف عوض اللام), ia mengekalkan peraturan mabni/mansub munada yang biasa — jenis mabni (mufrad 'alam, nakira maqsudah) kekal mabni, kini pada baris muqaddar kerana alif tambahan itu menghalangnya daripada kelihatan (يا يزيدا للغريقِ — مبني على ضم مقدّر، منع من ظهوره اشتغال محله بالفتحة العارضة), manakala jenis mansub (mudaf, syabih bil-mudaf, nakira maqsudah mawsufah) kekal mansub seperti biasa. Mustaghath 'alayh, apabila hadir, diperkenalkan oleh مِن dan bukan lam (يا للراعي مِن الذئبِ — الذئبِ majrur oleh مِن). Corak lam istighathah turut dipinjam semata-mata untuk ta'ajjub (kekaguman), tanpa sebarang kesusahan sebenar (يا لَلبحرِ! — kekaguman terhadap kehebatannya)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 40, pdfPages: [198, 198] },
      arabic: "يَا لَلطَّبِيبِ لِلْمَرِيضِ",
      gloss: { en: "O for the doctor's help, for the patient's sake!", ms: "Wahai, bantuan doktor demi pesakit itu!" },
      words: [
        { id: "w1", ar: "يَا", role: { en: "harf al-nida' (vocative particle)", ms: "harf al-nida' (huruf seruan)" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Istighatha is introduced only by يا.", ms: "Istighathah hanya diperkenalkan oleh يا." } },
        { id: "w2", ar: "لَ", role: { en: "lam al-mustaghath bih (fatha-voweled)", ms: "lam al-mustaghath bih (berbaris fathah)" }, case: "—", sign: { en: "harf jarr asli, attached to the elided verb of calling", ms: "harf jarr asli, terikat pada kata kerja memanggil yang digugurkan" }, reason: { en: "Marks the one being called on for help.", ms: "Menandakan orang yang diseru untuk membantu." } },
        { id: "w3", ar: "الطَّبِيبِ", role: { en: "mustaghath bih", ms: "mustaghath bih" }, case: "jarr (lafzi) / nasb (mahalli)", sign: { en: "apparent kasra (lafzi); mahall nasb maf'ul bih (mahalli)", ms: "kasrah zahir (lafzi); mahal nasb maf'ul bih (mahalli)" }, reason: { en: "Majrur in form by the lam, but still mansub in mahall as the maf'ul bih of the elided verb of calling.", ms: "Majrur pada lafaz oleh lam, tetapi tetap mansub pada mahall sebagai maf'ul bih bagi kata kerja memanggil yang digugurkan." } },
        { id: "w4", ar: "لِ", role: { en: "lam al-mustaghath lahu (kasra-voweled)", ms: "lam al-mustaghath lahu (berbaris kasrah)" }, case: "—", sign: { en: "harf jarr asli", ms: "harf jarr asli" }, reason: { en: "Marks who is being helped.", ms: "Menandakan siapa yang ditolong." } },
        { id: "w5", ar: "الْمَرِيضِ", role: { en: "mustaghath lahu", ms: "mustaghath lahu" }, case: "jarr", sign: { en: "apparent kasra", ms: "kasrah zahir" }, reason: { en: "Simply majrur by the kasra-voweled lam, with no mahall complication.", ms: "Majrur semata-mata oleh lam berbaris kasrah, tanpa sebarang kerumitan mahall." } }
      ]
    },
    exercises: [
      {
        id: "ex40-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "يَا يَزِيدَا لِلْغَرِيقِ",
        gloss: { en: "O Yazid, help for the drowning man!", ms: "Wahai Yazid, bantuan untuk si lemas!" },
        targetWord: "يَزِيدَا",
        question: { en: "What is the i'rab of \"يَزِيدَا\", whose lam has been replaced by the added alif?", ms: "Apakah i'rab bagi \"يَزِيدَا\", yang lamnya digantikan oleh alif tambahan?" },
        options: [
          { value: "mabni-damma-muqaddara", labelEn: "Mabni, estimated damma (blocked by the added alif)", labelMs: "Mabni, damma dianggarkan (disekat oleh alif tambahan)" },
          { value: "mansub-fatha-zahira", labelEn: "Mansub, apparent fatha", labelMs: "Mansub, fathah zahir" }
        ],
        acceptedValues: ["mabni-damma-muqaddara"],
        ruleNote: { en: "يزيد is a mufrad 'alam, a mabni munada type; replacing the lam with an alif doesn't change that — it only blocks the damma from appearing.", ms: "يزيد ialah mufrad 'alam, jenis munada mabni; menggantikan lam dengan alif tidak mengubah itu — ia hanya menghalang damma daripada kelihatan." }
      },
      {
        id: "ex40-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "يَا لِلرَّاعِي مِنَ الذِّئْبِ",
        gloss: { en: "O help for the shepherd, against the wolf!", ms: "Wahai, bantuan untuk pengembala itu, daripada serigala!" },
        targetWord: "الذِّئْبِ",
        question: { en: "Give the full analysis of \"الذِّئْبِ\".", ms: "Berikan analisis penuh bagi \"الذِّئْبِ\"." },
        fields: [
          { key: "role", question: { en: "Istighatha part", ms: "Bahagian istighathah" }, options: [
            { value: "mustaghath-alayh", labelEn: "Mustaghath 'alayh (the trouble)", labelMs: "Mustaghath 'alayh (kesusahan)" },
            { value: "mustaghath-bih", labelEn: "Mustaghath bih (who is called)", labelMs: "Mustaghath bih (yang diseru)" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "jarr", labelEn: "Jarr", labelMs: "Jarr" },
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "kasra-zahira", labelEn: "Apparent kasra", labelMs: "Kasrah zahir" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "mustaghath-alayh", case: "jarr", sign: "kasra-zahira" } ],
        ruleNote: { en: "The mustaghath 'alayh — the trouble being fended off — is introduced by مِن, not a lam, and is simply majrur by it.", ms: "Mustaghath 'alayh — kesusahan yang ditangkis — diperkenalkan oleh مِن, bukan lam, dan majrur semata-mata olehnya." }
      }
    ],
    completion: {
      en: "You can now identify istighatha's own lam-marked mustaghath bih and mustaghath lahu, handle the alif-for-lam alternative on a mabni munada type, and recognize the مِن-marked mustaghath 'alayh.",
      ms: "Anda kini boleh mengenal pasti mustaghath bih dan mustaghath lahu istighathah yang ditandai lam sendiri, mengendalikan alternatif alif-ganti-lam pada jenis munada mabni, dan mengenali mustaghath 'alayh yang ditandai مِن."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 41 — إعراب الندبة (I'rab of Lament)
  // ------------------------------------------------------------------
  41: {
    chapterId: 41,
    status: "pilot",
    concept: {
      en: "Nudba is a nida' of grief or pain, almost always introduced by وا (يا only if every chance of confusion with real address is gone), and only ever aimed at something definite. The mandub keeps the ordinary munada's own bina'/i'rab, and may additionally carry an appended alif al-nudba and/or a closing ha' al-sakt.",
      ms: "Nudbah ialah nida' kesedihan atau kepedihan, hampir selalu diperkenalkan oleh وا (يا hanya jika semua kemungkinan kekeliruan dengan seruan sebenar telah hilang), dan hanya ditujukan kepada sesuatu yang tertentu. Mandub mengekalkan bina'/i'rab munada biasa, dan boleh tambahan membawa alif al-nudba yang dilekatkan dan/atau ha' al-sakt penutup."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 41, pdfPages: [200, 201] },
      en: "Nudba is the calling-out of someone grieved over or something ached over; ندبة never uses را for a real mandub's nida' unless يا is used with a condition — every chance of confusion with a genuine, literal nida' must be gone. The mandub munada appears in three possible shapes: (1) bare, with neither an added alif nor a ha' al-sakt (واكبدُ، وايوسفُ); (2) with an added alif (واكبدا); or (3) with both an added alif and a closing ha' al-sakt (واكبداه، وامقلتاه). A mandub munada must always be definite (ma'rifa). Its i'rab-marker — whether its own case ending or its bina' vowel — may be estimated (muqaddar) rather than visible, specifically on whatever sits just before the alif al-nudba; and the mandub munada otherwise takes on exactly the same bina'/i'rab positions an ordinary munada would. So a mufrad 'alam or nakira maqsuda mandub stays mabni, now on an estimated vowel blocked by the added alif's own apparent fatha (واقلباه — مبني على ضم مقدّر على آخره، منع من ظهوره الفتحة العارضة لمناسبة الألف الزائدة لتأكيد الندبة), while a mudaf or shibih-bil-mudaf mandub stays mansub, likewise now estimated before the alif (واصديقيا — فتحة مقدّرة على آخره، منع من ظهورها الكسرة العارضة لمناسبة الياء). The closing ha', when present, is purely for sakt, waqf, or istiraha (pausing to catch one's breath) and carries no case of its own. The alif al-nudba can also attach to a word that isn't a munada at all, simply as an exclamation of grief or regret (واعجبا؛ وأسفا).",
      ms: "Nudbah ialah seruan terhadap seseorang yang disedihkan atau sesuatu yang dipedihkan; نداء ندبة sebenar tidak pernah menggunakan را melainkan يا digunakan dengan syarat — semua kemungkinan kekeliruan dengan nida' sebenar dan literal mesti hilang. Munada mandub muncul dalam tiga bentuk yang mungkin: (1) tanpa alif tambahan atau ha' al-sakt (واكبدُ، وايوسفُ); (2) dengan alif tambahan (واكبدا); atau (3) dengan kedua-dua alif tambahan dan ha' al-sakt penutup (واكبداه، وامقلتاه). Munada mandub mesti sentiasa ma'rifah (tertentu). Tanda i'rabnya — sama ada kes sendiri atau baris bina'nya — boleh dianggarkan (muqaddar) dan bukan kelihatan, khususnya pada apa jua yang terletak sejurus sebelum alif al-nudba; dan munada mandub sebaliknya mengambil tepat kedudukan bina'/i'rab yang sama seperti munada biasa. Maka mandub mufrad 'alam atau nakira maqsudah kekal mabni, kini pada baris dianggarkan yang disekat oleh fathah zahir alif tambahan itu sendiri (واقلباه — مبني على ضم مقدّر على آخره، منع من ظهوره الفتحة العارضة لمناسبة الألف الزائدة لتأكيد الندبة), manakala mandub mudaf atau syabih bil-mudaf kekal mansub, turut kini dianggarkan sebelum alif (واصديقيا — فتحة مقدّرة على آخره، منع من ظهورها الكسرة العارضة لمناسبة الياء). Ha' penutup, apabila hadir, semata-mata untuk sakt, waqf, atau istirahah (berhenti untuk menarik nafas) dan tidak membawa sebarang kes sendiri. Alif al-nudba turut boleh melekat pada perkataan yang bukan munada langsung, semata-mata sebagai seruan kesedihan atau penyesalan (واعجبا؛ وأسفا)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 41, pdfPages: [200, 200] },
      arabic: "وَاقَلْبَاهُ",
      gloss: { en: "Oh, my heart!", ms: "Aduhai, hatiku!" },
      words: [
        { id: "w1", ar: "وَا", role: { en: "harf nudba (particle of lament)", ms: "harf nudbah (huruf ratapan)" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "وا is the ordinary particle for calling out in grief or pain.", ms: "وا ialah huruf biasa bagi seruan kesedihan atau kepedihan." } },
        { id: "w2", ar: "قَلْبَاهُ", role: { en: "munada mandub, nakira maqsuda", ms: "munada mandub, nakira maqsudah" }, case: "—", sign: { en: "mabni on an estimated damma, blocked by the added alif's apparent fatha", ms: "mabni pada damma dianggarkan, disekat oleh fathah zahir alif tambahan" }, reason: { en: "A mandub keeps the ordinary mabni pattern of a nakira-maqsuda munada, with the ending now estimated because the added alif al-nudba sits where its vowel would otherwise show; the closing ha' is purely for sakt/waqf/istiraha and carries no case.", ms: "Mandub mengekalkan corak mabni biasa bagi munada nakira maqsudah, dengan hujungnya kini dianggarkan kerana alif al-nudba tambahan terletak di tempat barisnya sepatutnya kelihatan; ha' penutup semata-mata untuk sakt/waqf/istirahah dan tidak membawa sebarang kes." } }
      ]
    },
    exercises: [
      {
        id: "ex41-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "وَامُصْطَفَاهُ",
        gloss: { en: "Oh, Mustafa!", ms: "Aduhai, Mustafa!" },
        targetWord: "مُصْطَفَى",
        question: { en: "What is the i'rab of the mandub \"مُصْطَفَى\" here?", ms: "Apakah i'rab bagi mandub \"مُصْطَفَى\" di sini?" },
        options: [
          { value: "mabni-damma-muqaddara", labelEn: "Mabni, estimated damma (ta'adhdhur)", labelMs: "Mabni, damma dianggarkan (ta'adhdhur)" },
          { value: "mansub-fatha-zahira", labelEn: "Mansub, apparent fatha", labelMs: "Mansub, fathah zahir" }
        ],
        acceptedValues: ["mabni-damma-muqaddara"],
        ruleNote: { en: "مصطفى is a mufrad 'alam, so as a mandub it keeps the mabni pattern — here the damma is estimated for ta'adhdhur on the elided alif, to avoid two sakins meeting.", ms: "مصطفى ialah mufrad 'alam, maka sebagai mandub ia mengekalkan corak mabni — di sini damma dianggarkan kerana ta'adhdhur pada alif yang digugurkan, untuk mengelakkan dua sakin bertemu." }
      },
      {
        id: "ex41-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "وَاصَدِيقِيَا",
        gloss: { en: "Oh, my friend!", ms: "Aduhai, sahabatku!" },
        targetWord: "صَدِيقِيَا",
        question: { en: "Give the full analysis of the mandub \"صَدِيقِيَا\" (mudaf to the ya' al-mutakallim).", ms: "Berikan analisis penuh bagi mandub \"صَدِيقِيَا\" (mudaf kepada ya' al-mutakallim)." },
        fields: [
          { key: "role", question: { en: "Noun-type", ms: "Jenis kata nama" }, options: [
            { value: "mudaf", labelEn: "Mudaf", labelMs: "Mudaf" },
            { value: "mufrad-alam", labelEn: "Mufrad 'alam", labelMs: "Mufrad 'alam" }
          ] },
          { key: "case", question: { en: "Case", ms: "Kes" }, options: [
            { value: "nasb", labelEn: "Nasb", labelMs: "Nasb" },
            { value: "mabni", labelEn: "Mabni (no case)", labelMs: "Mabni (tiada kes)" }
          ] },
          { key: "sign", question: { en: "Sign", ms: "Tanda" }, options: [
            { value: "fatha-muqaddara", labelEn: "Estimated fatha (blocked by the appropriate vowel before ya')", labelMs: "Fathah dianggarkan (disekat baris sesuai sebelum ya')" },
            { value: "fatha-zahira", labelEn: "Apparent fatha", labelMs: "Fathah zahir" }
          ] }
        ],
        acceptedCombos: [ { role: "mudaf", case: "nasb", sign: "fatha-muqaddara" } ],
        ruleNote: { en: "A mudaf mandub stays mansub like any mudaf munada; here the fatha is estimated because the position is occupied by the vowel suited to the ya' al-mutakallim instead.", ms: "Mandub mudaf kekal mansub seperti mana-mana munada mudaf; di sini fathah dianggarkan kerana kedudukan itu diduduki oleh baris yang sesuai untuk ya' al-mutakallim sebaliknya." }
      }
    ],
    completion: {
      en: "You can now recognize nudba's three mandub shapes (bare, alif-only, alif-plus-ha'), see how the mandub's own bina'/i'rab marker is simply estimated before the added alif rather than changed, and tell the sakt-ha' apart from any case-bearing part of the word.",
      ms: "Anda kini boleh mengenali tiga bentuk mandub nudbah (tanpa tambahan, alif sahaja, alif-tambah-ha'), melihat bagaimana tanda bina'/i'rab mandub sendiri semata-mata dianggarkan sebelum alif tambahan dan bukan diubah, dan membezakan ha' sakt daripada mana-mana bahagian perkataan yang membawa kes."
    }
  },

  // ------------------------------------------------------------------
  // Chapter 42 — إعراب الترخيم (I'rab of Truncation in Address)
  // ------------------------------------------------------------------
  42: {
    chapterId: 42,
    status: "pilot",
    concept: {
      en: "Tarkhim drops the end of a munada in address — but only a ha'-marked feminine (علم or not) or a 4-plus-letter non-ha' name qualifies. The truncated munada is mabni, and the book contrasts two conventions for its pre-truncation vowel on the very same worked example: one that treats the deleted letter as still implicitly present, and one that treats the shortened form as a complete word in its own right.",
      ms: "Tarkhim menggugurkan hujung munada dalam seruan — tetapi hanya nama feminin bertanda ha' (sama ada علم atau bukan) atau nama bukan-ha' sepanjang 4 huruf atau lebih yang layak. Munada yang dipendekkan adalah mabni, dan buku itu membandingkan dua konvensyen bagi baris sebelum pemendekannya pada contoh kerja yang sama persis: satu yang menganggap huruf yang digugurkan itu masih tersirat hadir, dan satu lagi yang menganggap bentuk yang dipendekkan itu perkataan lengkap tersendiri."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 42, pdfPages: [202, 203] },
      en: "Tarkhim linguistically means softening the voice and making it gentle and light; technically it means deleting the ends of words in vocative address, e.g. يا فاطِم (from يا فاطمُ) and يا سُعما. Tarkhim is only ever permitted on a munada that is either (a) feminine by a ha' (ta' marbuta), whether an 'alam or not, or (b) not feminine by a ha' but at least four letters long (ruba'i or more) — e.g. يا جَمفَ (from جعفر) and يا حار (from حارِث). A truncated munada is mabni, and the mark of its bina' is whatever vowel it carried BEFORE the truncation — but the book explicitly contrasts two conventions for reading that retained vowel on its own very same worked example (جمف, from جعفر): in the convention of the one who awaits the deleted letter's return (لغة مَن ينتظر رجوع الحرف المحذوف), the truncated form is treated as if the missing letter were still implicitly there, so the retained vowel is described as \"the damma of the elided letter\" itself (مبني على ضم الحرف المحذوف للترخيم, as with سُعما and the first reading of جمف); in the convention of the one who does not await it (لغة مَن لا ينتظر الحرف الأخير المحذوف), the shortened word is instead treated as a complete, self-contained word, so the exact same surface form جمفُ is described simply as \"mabni on damma\" in its own right (مبني على الضمّ, with no reference to any elided letter) — and the same pattern is then given for يا حار (حارث) and يا سالِ (سالِم). A special case keeps the first convention's own phrasing even after the general contrast: فاطمة (from فاطمةُ), where the retained letter is read as mabni 'ala damm al-harf al-mahdhuf lil-tarkhim exactly as under the first convention, with its spelled-out ها read purely as ha' al-sakt, carrying no case of its own.",
      ms: "Tarkhim dari segi bahasa bermaksud melembutkan suara dan menjadikannya lembut serta ringan; dari segi istilah ia bermaksud menggugurkan hujung-hujung kalimah dalam seruan, cth. يا فاطِم (daripada يا فاطمُ) dan يا سُعما. Tarkhim hanya dibenarkan pada munada yang sama ada (a) feminin dengan ha' (ta' marbutah), sama ada 'alam atau bukan, atau (b) bukan feminin dengan ha' tetapi sekurang-kurangnya empat huruf panjangnya (ruba'i atau lebih) — cth. يا جَمفَ (daripada جعفر) dan يا حار (daripada حارِث). Munada yang dipendekkan adalah mabni, dan tanda bina'nya ialah apa jua baris yang dibawanya SEBELUM pemendekan — tetapi buku itu secara jelas membandingkan dua konvensyen untuk membaca baris yang dikekalkan itu pada contoh kerja yang sama persis (جمف, daripada جعفر): dalam konvensyen orang yang menantikan kembalinya huruf yang digugurkan (لغة مَن ينتظر رجوع الحرف المحذوف), bentuk yang dipendekkan itu dianggap seolah-olah huruf yang hilang masih tersirat hadir, maka baris yang dikekalkan itu digambarkan sebagai \"damma huruf yang digugurkan\" itu sendiri (مبني على ضم الحرف المحذوف للترخيم, seperti سُعما dan bacaan pertama جمف); dalam konvensyen orang yang tidak menantikannya (لغة مَن لا ينتظر الحرف الأخير المحذوف), perkataan yang dipendekkan itu sebaliknya dianggap perkataan lengkap tersendiri, maka bentuk zahir yang sama persis جمفُ digambarkan semata-mata sebagai \"mabni pada damma\" tersendiri (مبني على الضمّ, tanpa sebarang rujukan kepada huruf yang digugurkan) — dan corak yang sama kemudian diberikan bagi يا حار (حارث) dan يا سالِ (سالِم). Satu kes khas mengekalkan ungkapan konvensyen pertama walaupun selepas perbandingan am itu: فاطمة (daripada فاطمةُ), di mana huruf yang dikekalkan dibaca sebagai mabni 'ala damm al-harf al-mahdhuf lil-tarkhim tepat seperti konvensyen pertama, dengan ها yang dieja itu dibaca semata-mata sebagai ha' al-sakt, tidak membawa sebarang kes sendiri."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 42, pdfPages: [202, 203] },
      arabic: "يَا جَمْفُ",
      gloss: { en: "O Ja'far! (truncated)", ms: "Wahai Ja'far! (dipendekkan)" },
      words: [
        { id: "w1", ar: "يَا", role: { en: "harf al-nida' (vocative particle)", ms: "harf al-nida' (huruf seruan)" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Ordinary vocative particle.", ms: "Huruf seruan biasa." } },
        { id: "w2", ar: "جَمْفُ", role: { en: "munada murakhkham (truncated), mufrad 'alam — truncated from جَعْفَر", ms: "munada murakhkham (dipendekkan), mufrad 'alam — dipendekkan daripada جَعْفَر" }, case: "—", sign: { en: "mabni on the damma of the elided letter (convention of the one who awaits its return)", ms: "mabni pada damma huruf yang digugurkan (konvensyen orang yang menantikan kembalinya)" }, reason: { en: "In the book's convention of \"one who awaits the deleted letter's return\", the retained vowel is read as belonging to the elided ر itself, as if it were still implicitly present; the whole munada sits in mahall nasb maf'ul bih for the elided verb of calling.", ms: "Dalam konvensyen buku itu bagi \"orang yang menantikan kembalinya huruf yang digugurkan\", baris yang dikekalkan dibaca sebagai milik ر yang digugurkan itu sendiri, seolah-olah ia masih tersirat hadir; keseluruhan munada berada dalam mahal nasb maf'ul bih bagi kata kerja memanggil yang digugurkan." } }
      ],
      dualAnalysis: {
        note: { en: "The book explicitly gives this exact same word a second reading, on the very next line: \"the convention of the one who does NOT await the deleted letter\" (لغة مَن لا ينتظر الحرف الأخير المحذوف) instead treats جَمْفُ as a complete word in its own right, describing it simply as \"mabni on damma\" (مبني على الضمّ) with no reference to any elided letter at all — then applies the same reading to يا حار (from حارث) and يا سالِ (from سالِم).", ms: "Buku itu secara jelas memberikan perkataan yang sama persis ini bacaan kedua, pada baris seterusnya: \"konvensyen orang yang TIDAK menantikan huruf yang digugurkan\" (لغة مَن لا ينتظر الحرف الأخير المحذوف) sebaliknya menganggap جَمْفُ sebagai perkataan lengkap tersendiri, menggambarkannya semata-mata sebagai \"mabni pada damma\" (مبني على الضمّ) tanpa sebarang rujukan kepada huruf yang digugurkan — kemudian menggunakan bacaan yang sama bagi يا حار (daripada حارث) dan يا سالِ (daripada سالِم)." },
        ranking: { en: "The book gives no preference between the two conventions — it presents both as simply two different, equally valid dialect-conventions for reading the same truncated form, and names the chapter's own content around this exact contrast.", ms: "Buku itu tidak memberikan sebarang keutamaan antara kedua-dua konvensyen — ia mengemukakan kedua-duanya semata-mata sebagai dua konvensyen dialek yang berbeza, sama-sama sah, bagi membaca bentuk terpendek yang sama, dan menamakan kandungan bab ini sendiri di sekitar perbandingan yang tepat ini." }
      }
    },
    exercises: [
      {
        id: "ex42-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "يَا فَاطِمَة",
        gloss: { en: "O Fatima! (truncated)", ms: "Wahai Fatimah! (dipendekkan)" },
        targetWord: "فَاطِمَة",
        question: { en: "This truncated munada (from فَاطِمَةُ) follows the \"awaits the deleted letter\" convention. What is its i'rab?", ms: "Munada terpendek ini (daripada فَاطِمَةُ) mengikut konvensyen \"menantikan huruf yang digugurkan\". Apakah i'rabnya?" },
        options: [
          { value: "mabni-damma-harf-mahdhuf", labelEn: "Mabni on the damma of the elided letter", labelMs: "Mabni pada damma huruf yang digugurkan" },
          { value: "mansub-fatha-zahira", labelEn: "Mansub, apparent fatha", labelMs: "Mansub, fathah zahir" }
        ],
        acceptedValues: ["mabni-damma-harf-mahdhuf"],
        ruleNote: { en: "Like جمفُ under the first convention, فاطمة keeps the pre-truncation damma read as the elided letter's own mark; its spelled ها is purely ha' al-sakt, carrying no case.", ms: "Seperti جمفُ di bawah konvensyen pertama, فاطمة mengekalkan damma sebelum pemendekan dibaca sebagai tanda huruf yang digugurkan itu sendiri; ها yang dieja itu semata-mata ha' al-sakt, tidak membawa sebarang kes." }
      },
      {
        id: "ex42-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "يَا سَالِ",
        gloss: { en: "O Salim! (truncated)", ms: "Wahai Salim! (dipendekkan)" },
        targetWord: "سَالِ",
        question: { en: "This truncated form (from سَالِم) is given right after جمفُ's SECOND reading. How does the book analyze it?", ms: "Bentuk terpendek ini (daripada سَالِم) diberikan sejurus selepas bacaan KEDUA bagi جمفُ. Bagaimana buku itu menganalisisnya?" },
        fields: [
          { key: "role", question: { en: "Form", ms: "Bentuk" }, options: [
            { value: "munada-murakhkham", labelEn: "Munada murakhkham", labelMs: "Munada murakhkham" },
            { value: "munada-ghayr-murakhkham", labelEn: "Ordinary (untruncated) munada", labelMs: "Munada biasa (tidak dipendekkan)" }
          ] },
          { key: "convention", question: { en: "Which convention", ms: "Konvensyen yang mana" }, options: [
            { value: "convention-2-la-yantazir", labelEn: "Does not await the deleted letter", labelMs: "Tidak menantikan huruf yang digugurkan" },
            { value: "convention-1-yantazir", labelEn: "Awaits the deleted letter's return", labelMs: "Menantikan kembalinya huruf yang digugurkan" }
          ] },
          { key: "sign", question: { en: "How the retained vowel is described", ms: "Bagaimana baris yang dikekalkan digambarkan" }, options: [
            { value: "damm-mujarrad", labelEn: "Plain \"mabni on damma\"", labelMs: "\"Mabni pada damma\" semata-mata" },
            { value: "damm-al-harf-al-mahdhuf", labelEn: "\"Damma of the elided letter\"", labelMs: "\"Damma huruf yang digugurkan\"" }
          ] }
        ],
        acceptedCombos: [ { role: "munada-murakhkham", convention: "convention-2-la-yantazir", sign: "damm-mujarrad" } ],
        ruleNote: { en: "يا سالِ is given in the same breath as جمفُ's second reading and يا حار, under the convention that treats the shortened word as complete in its own right — so its damma is described plainly, with no mention of an elided letter.", ms: "يا سالِ diberikan serentak dengan bacaan kedua جمفُ dan يا حار, di bawah konvensyen yang menganggap perkataan terpendek itu lengkap tersendiri — maka damma-nya digambarkan semata-mata, tanpa sebutan huruf yang digugurkan." }
      }
    ],
    completion: {
      en: "You can now tell tarkhim's two eligibility conditions apart, and — on the book's own repeated example — read a truncated munada's retained vowel either as \"the elided letter's own damma\" or as a plain damma belonging to the shortened word itself, exactly as the two dialect-conventions the chapter contrasts.",
      ms: "Anda kini boleh membezakan dua syarat kelayakan tarkhim, dan — pada contoh berulang buku itu sendiri — membaca baris yang dikekalkan munada terpendek sama ada sebagai \"damma huruf yang digugurkan\" itu sendiri atau sebagai damma semata-mata milik perkataan terpendek itu sendiri, tepat seperti dua konvensyen dialek yang dibandingkan bab ini."
    }
  },


  // ------------------------------------------------------------------
  // Chapter 47 — إعراب حروف الجر (I'rab of Prepositions)
  // ------------------------------------------------------------------
  47: {
    chapterId: 47,
    status: "pilot",
    concept: {
      en: "Every harf jarr is asli (has ta'alluq — it's needed to complete the sentence's meaning), za'id (no ta'alluq, and no independent meaning either — purely emphatic), or shabih bil-za'id (no ta'alluq, but still adds its own meaning). Several of the book's named particles — رُبَّ, الكاف, حتى, لام التقوية — don't sit still in one category; the book shows each behaving differently across its own worked examples.",
      ms: "Setiap harf jarr adalah asli (mempunyai ta'alluq — ia diperlukan untuk melengkapkan makna ayat), za'id (tiada ta'alluq, dan tiada makna tersendiri pun — semata-mata penegasan), atau syabih bil-za'id (tiada ta'alluq, tetapi tetap menambah maknanya sendiri). Beberapa huruf bernama dalam buku itu — رُبَّ, الكاف, حتى, لام التقوية — tidak kekal pada satu kategori sahaja; buku itu menunjukkan setiap satu berkelakuan berbeza merentasi contoh kerjanya sendiri."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 47, pdfPages: [220, 227] },
      en: "Huruf jarr are named for what they do: they either jazz (break down) the force of the preceding verb's meaning onto the following noun, or they jurr (pull down, i.e. lower the case of) whatever noun follows them. The book's own list of the most famous ones: مِن، إلى، عن، على، حتى، خلا، عدا، حاشا، في، مُذ، مُنذ، رُبَّ، اللام، كي، الواو، التاء، الكاف، الباء. Every harf jarr falls into one of three categories. (1) ASLI (original): it has a ta'alluq — some verb or verb-like word in the sentence it attaches its meaning to, without which the sentence's own sense would be incomplete, e.g. إلى in وصل المسافرُ إلى المدينةِ (muta'alliq bi-وصل). When more than one candidate verb could plausibly take the jarr-majrur's ta'alluq, the correct one is whichever keeps the sentence's actual intended meaning, not just any verb that happens to precede it (e.g. in قاس الطبيبُ حرارةَ المريضِ وكتبها بمقياس الحرارةِ, بمقياس الحرارة is muta'alliq bi-قاس, not bi-كتب — attaching it to كتب would mean the doctor wrote the temperature down using the thermometer, which isn't the intended sense). (2) ZA'ID (redundant): it has no ta'alluq at all, and is purely emphatic — the sentence's grammar and meaning survive its removal, e.g. the Qur'anic كَ in ليس كمثله شيءٌ, which the book glosses as ليس مثله شيء with the كاف analyzed as a plain harf jarr za'id, majrur lafzan but mansub mahallan as ليس's fronted khabar. (3) SHABIH BIL-ZA'ID (resembling the redundant one): like za'id, it has no ta'alluq — but unlike za'id, it still contributes its own meaning to the sentence. رُبَّ is the book's main example: in رُبَّ رجلٍ كريمٍ أكرمتُه, رُبَّ has no ta'alluق, yet it still carries real meaning (rarity/emphasis on the noun it introduces) — both حرف الجر الزائد والشبيه بالزائد لا متعلَّق لهما, the book states explicitly, but only the shabih one still means something. رُبَّ carries several further behaviors worth knowing: its own majrur noun's mahall is raf' (as mubtada') by default, unless some other 'amil takes over and makes it mansub instead (as in the ربَّ رجلٍ كريمٍ example itself, where رجلٍ is mahall raf' mubtada', but in رُبَّ مساعدةٍ خفيّةٍ ساعدتُ, مساعدةٍ is mahall nasb because it's actually the maf'ul mutlaq of ساعدتُ); رُبَّ can be elided after a leading واو (واو رُبّ) while its own jarr effect survives on the following noun (ورجلٍ حزينٍ قد تسلّى بحزنٍ); it can attach a pronoun directly (رُبَّهُ) with a following tamyiz noun explaining what the pronoun refers to (رُبَّهُ تلامذةً كافأتُ); it optionally takes ta' al-ta'nith when its majrur noun is feminine (رُبَّتَ عبارةٍ موجزةٍ أغنت عن كلام كثير); and a زائدة (redundant) ما can attach to it (ربما), neutralizing its jarr-'amal and letting the whole combination attach to a full verb or clause instead of only a noun (ربما كان السائلُ أغنى من المسؤولِ). The كاف has a third, rarer function beyond asli/za'id: it can itself be an ISM meaning مثل (\"like\"), mabni on fatha, acting as a mudaf rather than a harf jarr at all (صار الشيخُ المريضُ كالشبحِ — كالشبح: الكاف اسم بمعنى مثل، مبني على الفتح في محل نصب خبر صار، وهو مضاف، والشبح: مضاف إليه) — the book notes this ism-kaf use is rare in prose and common in poetry. واو القسم and تاء القسم are both asli huruf jarr attached to an elided verb of swearing (واللهِ لأصنعنَّ الخيرَ — تقدير: أقسم باللهِ). كي can act as a harf jarr (كي التعليلية) rather than a nasiba particle when followed by استفهامية or مصدرية ما — equivalent in function to لام التعليل (كيمَ فعلتَ هذا؟، i.e. لِمَ فعلته؟); whenever any harf jarr precedes استفهامية ما, that ما obligatorily drops its alif (بمَ تكتب؟، إلامَ تنتظرك؟، حتامَ احتملتك؟). A harf jarr can be elided before the masdar ta'wil of أنّ (with its ism and khabar) or أنْ (with its mudari' sila), provided the elision creates no ambiguity about which harf was dropped (فرحتُ أنّ الطقسَ جميلٌ، أفرحُ أنْ يجتهدَ المهملُ) — but it is NOT permitted when the dropped harf could be more than one candidate with opposite meanings, leaving the sentence genuinely ambiguous (رغبتُ في أنْ أسافرَ vs. رغبتُ عنْ أنْ أسافرَ cannot both collapse to the same hadhf-harf sentence رغبتُ أنْ أسافرَ, since في and عن mean opposite things here; the same applies to انصرفتُ إلى/عن أنْ أطالعَ الكتابَ).",
      ms: "Huruf jarr dinamakan menurut apa yang dilakukannya: sama ada ia menjazzkan (memecahkan) kekuatan makna kata kerja sebelumnya kepada kata nama selepasnya, atau ia menjurrkan (menarik turun, iaitu merendahkan kes) apa jua kata nama yang mengikutinya. Senarai buku itu sendiri bagi yang paling masyhur: مِن، إلى، عن، على، حتى، خلا، عدا، حاشا، في، مُذ، مُنذ، رُبَّ، اللام، كي، الواو، التاء، الكاف، الباء. Setiap harf jarr tergolong dalam salah satu daripada tiga kategori. (1) ASLI (asal): ia mempunyai ta'alluq — sesuatu kata kerja atau perkataan seakan kata kerja dalam ayat itu yang maknanya terikat, tanpanya makna sebenar ayat itu tidak lengkap, cth. إلى dalam وصل المسافرُ إلى المدينةِ (muta'alliq bi-وصل). Apabila lebih daripada satu kata kerja calon boleh sahaja mengambil ta'alluق jarr-majrur itu, yang betul ialah yang mana jua mengekalkan makna sebenar yang dimaksudkan ayat itu, bukan sekadar mana-mana kata kerja yang kebetulan mendahuluinya (cth. dalam قاس الطبيبُ حرارةَ المريضِ وكتبها بمقياس الحرارةِ, بمقياس الحرارة muta'alliq bi-قاس, bukan bi-كتب — mengaitkannya dengan كتب akan bermaksud doktor itu menulis suhu menggunakan termometer, yang bukan makna yang dimaksudkan). (2) ZA'ID (berlebihan): ia tiada ta'alluq langsung, dan semata-mata penegasan — nahu dan makna ayat itu terus wujud walaupun ia dibuang, cth. كَ al-Quran dalam ليس كمثله شيءٌ, yang digambarkan buku itu sebagai ليس مثله شيء dengan الكاف dianalisis sebagai harf jarr za'id biasa, majrur lafzan tetapi mansub mahallan sebagai khabar ليس yang didahulukan. (3) SYABIH BIL-ZA'ID (menyerupai yang berlebihan): seperti za'id, ia tiada ta'alluق — tetapi berbeza daripada za'id, ia tetap menyumbang maknanya sendiri kepada ayat. رُبَّ ialah contoh utama buku itu: dalam رُبَّ رجلٍ كريمٍ أكرمتُه, رُبَّ tiada ta'alluق, namun ia tetap membawa makna sebenar (kejarangan/penegasan pada kata nama yang diperkenalkannya) — kedua-dua حرف الجر الزائد والشبيه بالزائد لا متعلَّق لهما, buku itu menyatakan secara jelas, tetapi hanya yang syabih itu masih bermakna sesuatu. رُبَّ membawa beberapa kelakuan lanjut yang perlu diketahui: mahall kata nama majrurnya sendiri ialah raf' (sebagai mubtada') secara lazim, melainkan 'amil lain mengambil alih dan menjadikannya mansub sebaliknya (seperti dalam contoh رُبَّ رجلٍ كريمٍ itu sendiri, di mana رجلٍ mahal raf' mubtada', tetapi dalam رُبَّ مساعدةٍ خفيّةٍ ساعدتُ, مساعدةٍ mahal nasb kerana ia sebenarnya maf'ul mutlaq bagi ساعدتُ); رُبَّ boleh digugurkan selepas واو di hadapannya (واو رُبّ) sementara kesan jarrnya sendiri kekal pada kata nama berikutnya (ورجلٍ حزينٍ قد تسلّى بحزنٍ); ia boleh melekatkan kata ganti nama terus (رُبَّهُ) dengan tamyiz berikutnya menjelaskan apa yang dirujuk kata ganti nama itu (رُبَّهُ تلامذةً كافأتُ); ia secara pilihan membawa تاء التأنيث apabila kata nama majrurnya feminin (رُبَّتَ عبارةٍ موجزةٍ أغنت عن كلام كثير); dan ما زائدة boleh melekat padanya (ربما), meneutralkan 'amal jarrnya dan membenarkan gabungan itu melekat pada kata kerja penuh atau klausa dan bukan hanya kata nama (ربما كان السائلُ أغنى من المسؤولِ). الكاف mempunyai fungsi ketiga yang lebih jarang selain asli/za'id: ia sendiri boleh menjadi ISM bermaksud مثل (\"seperti\"), mabni pada fathah, bertindak sebagai mudaf dan bukan harf jarr langsung (صار الشيخُ المريضُ كالشبحِ — كالشبح: الكاف ism bermaksud مثل, mabni pada fathah pada mahal nasb khabar صار, dan mudaf, dengan الشبح: mudaf ilayh) — buku itu menyatakan penggunaan الكاف-sebagai-ism ini jarang dalam prosa dan biasa dalam puisi. واو القسم dan تاء القسم kedua-duanya harf jarr asli yang melekat pada kata kerja bersumpah yang digugurkan (واللهِ لأصنعنَّ الخيرَ — taqdir: أقسم باللهِ). كي boleh bertindak sebagai harf jarr (كي التعليلية) dan bukan zarah nasiba apabila diikuti ما istifhamiyyah atau masdariyyah — setara fungsinya dengan لام التعليل (كيمَ فعلتَ هذا؟، iaitu لِمَ فعلته؟); apabila mana-mana harf jarr mendahului ما istifhamiyyah, ما itu wajib menggugurkan alifnya (بمَ تكتب؟، إلامَ تنتظرك؟، حتامَ احتملتك؟). Harf jarr boleh digugurkan sebelum ta'wil masdar bagi أنّ (dengan isim dan khabarnya) atau أنْ (dengan silah mudari'nya), asalkan penggugurannya tidak mencipta sebarang kekaburan tentang huruf mana yang digugurkan (فرحتُ أنّ الطقسَ جميلٌ، أفرحُ أنْ يجتهدَ المهملُ) — tetapi ia TIDAK dibenarkan apabila huruf yang digugurkan boleh jadi lebih daripada satu calon dengan makna bertentangan, meninggalkan ayat itu benar-benar kabur (رغبتُ في أنْ أسافرَ lwn. رغبتُ عنْ أنْ أسافرَ tidak boleh kedua-duanya runtuh kepada ayat hadhf-harf yang sama رغبتُ أنْ أسافرَ, kerana في dan عن bermaksud bertentangan di sini; perkara sama terpakai bagi انصرفتُ إلى/عن أنْ أطالعَ الكتابَ)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 47, pdfPages: [220, 220] },
      arabic: "وَصَلَ المُسَافِرُ إِلَى المَدِينَةِ",
      gloss: { en: "The traveler arrived at the city.", ms: "Musafir itu tiba di bandar itu." },
      words: [
        { id: "w1", ar: "وَصَلَ", role: { en: "past-tense verb", ms: "kata kerja lampau" }, case: "—", sign: { en: "mabni on fatha", ms: "mabni fathah" }, reason: { en: "A sound-rooted past-tense verb defaults to apparent fatha.", ms: "Kata kerja lampau berakar sahih kekal fathah zahir secara lazim." } },
        { id: "w2", ar: "المُسَافِرُ", role: { en: "fa'il", ms: "fa'il" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "The fa'il of وصل.", ms: "Fa'il bagi وصل." } },
        { id: "w3", ar: "إِلَى", role: { en: "harf jarr asli", ms: "harf jarr asli" }, case: "—", sign: { en: "harf; carries no case ending", ms: "huruf; tiada tanda kes" }, reason: { en: "Has a ta'alluq to وصل — the sentence's meaning (arriving AT the city) is incomplete without it, which is exactly what makes a harf jarr asli rather than za'id or shabih bil-za'id.", ms: "Mempunyai ta'alluق kepada وصل — makna ayat itu (tiba DI bandar) tidak lengkap tanpanya, dan itulah tepat yang menjadikan harf jarr itu asli dan bukannya za'id atau syabih bil-za'id." } },
        { id: "w4", ar: "المَدِينَةِ", role: { en: "majrur by إلى", ms: "majrur oleh إلى" }, case: "jarr", sign: { en: "apparent kasra", ms: "kasrah zahir" }, reason: { en: "Majrur by the asli harf jarr إلى.", ms: "Majrur oleh harf jarr asli إلى." } }
      ]
    },
    exercises: [
      {
        id: "ex47-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "لَيْسَ كَمِثْلِهِ شَيْءٌ",
        gloss: { en: "There is nothing like Him.", ms: "Tiada sesuatu pun seperti-Nya." },
        targetWord: "كَ",
        question: { en: "What kind of harf jarr is \"كَ\" here (the original sentence is ليس مثله شيء)?", ms: "Apakah jenis harf jarr bagi \"كَ\" di sini (ayat asalnya ialah ليس مثله شيء)?" },
        options: [
          { value: "zaid", labelEn: "Za'id (no ta'alluq, no independent meaning)", labelMs: "Za'id (tiada ta'alluq, tiada makna tersendiri)" },
          { value: "asli", labelEn: "Asli (has ta'alluq)", labelMs: "Asli (mempunyai ta'alluq)" }
        ],
        acceptedValues: ["zaid"],
        ruleNote: { en: "The sentence's grammar and meaning survive removing كَ entirely (ليس مثله شيء) — that's the mark of a za'id harf jarr; مثله stays majrur lafzan but is mansub mahallan as ليس's fronted khabar.", ms: "Nahu dan makna ayat itu terus wujud walaupun كَ dibuang sepenuhnya (ليس مثله شيء) — itulah tanda harf jarr za'id; مثله kekal majrur lafzan tetapi mansub mahallan sebagai khabar ليس yang didahulukan." }
      },
      {
        id: "ex47-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "رُبَّ رَجُلٍ كَرِيمٍ أَكْرَمْتُهُ",
        gloss: { en: "Many a generous man I have honored.", ms: "Betapa ramai lelaki pemurah yang telah aku muliakan." },
        targetWord: "رُبَّ",
        question: { en: "Give the full analysis of \"رُبَّ\" here.", ms: "Berikan analisis penuh bagi \"رُبَّ\" di sini." },
        fields: [
          { key: "role", question: { en: "Category", ms: "Kategori" }, options: [
            { value: "shabih-bil-zaid", labelEn: "Shabih bil-za'id", labelMs: "Syabih bil-za'id" },
            { value: "asli", labelEn: "Asli", labelMs: "Asli" }
          ] },
          { key: "taalluq", question: { en: "Ta'alluq", ms: "Ta'alluq" }, options: [
            { value: "no-taalluq", labelEn: "No ta'alluq", labelMs: "Tiada ta'alluq" },
            { value: "has-taalluq", labelEn: "Has a ta'alluq", labelMs: "Mempunyai ta'alluq" }
          ] },
          { key: "majrurMahall", question: { en: "Mahall of its majrur noun (رجلٍ)", ms: "Mahall kata nama majrurnya (رجلٍ)" }, options: [
            { value: "raf-mubtada", labelEn: "Raf' (mubtada')", labelMs: "Raf' (mubtada')" },
            { value: "nasb-mafulbih", labelEn: "Nasb (maf'ul bih)", labelMs: "Nasb (maf'ul bih)" }
          ] }
        ],
        acceptedCombos: [ { role: "shabih-bil-zaid", taalluq: "no-taalluq", majrurMahall: "raf-mubtada" } ],
        ruleNote: { en: "رُبَّ has no ta'alluq, like a za'id harf — but unlike za'id, it still carries real meaning (here, emphasis/rarity), which is exactly what makes it shabih bil-za'id rather than plain za'id. Its own majrur noun رجلٍ is mahall raf' as mubtada' here, since no other 'amil has taken over (contrast رُبَّ مساعدةٍ خفيّةٍ ساعدتُ, where the majrur noun is mahall nasb as maf'ul mutlaq instead).", ms: "رُبَّ tiada ta'alluق, seperti harf za'id — tetapi berbeza daripada za'id, ia tetap membawa makna sebenar (di sini, penegasan/kejarangan), dan itulah tepat yang menjadikannya syabih bil-za'id dan bukan za'id biasa. Kata nama majrurnya sendiri رجلٍ mahal raf' sebagai mubtada' di sini, kerana tiada 'amil lain mengambil alih (bandingkan رُبَّ مساعدةٍ خفيّةٍ ساعدتُ, di mana kata nama majrur itu mahal nasb sebagai maf'ul mutlaq sebaliknya)." }
      }
    ],
    completion: {
      en: "You can now sort a harf jarr into asli (has ta'alluq), za'id (no ta'alluq, no meaning of its own), or shabih bil-za'id (no ta'alluq, but still means something) — and you've seen how رُبَّ, الكاف, حتى, and لام التقوية each shift across these categories, or into other functions entirely, from one sentence to the next.",
      ms: "Anda kini boleh mengkategorikan harf jarr sebagai asli (mempunyai ta'alluq), za'id (tiada ta'alluq, tiada makna tersendiri), atau syabih bil-za'id (tiada ta'alluq, tetapi tetap bermakna sesuatu) — dan anda telah melihat bagaimana رُبَّ, الكاف, حتى, dan لام التقوية masing-masing beralih merentasi kategori-kategori ini, atau kepada fungsi lain sepenuhnya, dari satu ayat ke ayat seterusnya."
    }
  },


  // ------------------------------------------------------------------
  // Chapter 48 — إعراب الجملة (I'rab of the Sentence — Classification)
  // ------------------------------------------------------------------
  48: {
    chapterId: 48,
    status: "pilot",
    concept: {
      en: "Every embedded sentence (jumla) inside a larger sentence either acts like a single word — occupying a raf'/nasb/jarr \"slot\" the way one ism would — or it doesn't, because nothing about it could ever be replaced by a single word. The book sorts jumal into these two broad groups and then names seven specific roles a \"has-a-mahall\" jumla can play, and eight specific roles a \"has-no-mahall\" jumla can play — fifteen sub-categories in total, including two examples drawn from the Qur'an.",
      ms: "Setiap ayat tersemat (jumlah) di dalam ayat yang lebih besar sama ada bertindak seperti satu kata — menduduki \"slot\" raf'/nasb/jarr seperti mana satu ism — atau tidak, kerana tiada apa-apa tentangnya yang boleh digantikan dengan satu kata. Buku itu menyusun jumlah kepada dua kumpulan luas ini dan kemudian menamakan tujuh peranan khusus yang boleh dimainkan jumlah \"ada-mahall\", dan lapan peranan khusus yang boleh dimainkan jumlah \"tiada-mahall\" — lima belas sub-kategori kesemuanya, termasuk dua contoh daripada al-Qur'an."
    },
    rule: {
      contentLabel: "source-derived",
      citation: { chapter: 48, pdfPages: [228, 231] },
      en: "Jumal divide, for purposes of i'rab, into two groups.\n\nأ — الجمل التي لها محل من الإعراب (jumal WITH a place in i'rab): these are jumal whose meaning could stand in for a single mufrad ism, so their i'rab mirrors whatever that single ism's case would be — raf', nasb, or jarr. The book names seven:\n1. A jumla as khabar — mahall raf', matching the mubtada' it describes (المعلّمُ يُكافئُ المجتهدَ), including when the mubtada'-slot is held by إنّ/أخواتها (still raf'), لا النافية للجنس (still raf'), or كان/أخواتها (nasb, as khabar kana — كان النهرُ ماؤه غزيرٌ).\n2. A jumla as maf'ul bih — after af'al al-zann (ظننتُ خالدًا لا يكذبُ, mahall nasb maf'ul bih thani) or after قال (قال وليدٌ أنا بريءٌ, the whole nominal jumla أنا بريء in mahall nasb maf'ul bih for قال).\n3. A jumla as hal — after a definite ism or pronoun (أقبلَ خالدٌ يضحكُ — hal from خالد; بَرَدَتْ والطقسُ ممطرٌ — hal from the hidden fa'il التاء).\n4. A jumla as na't (sifa) — after an indefinite noun, with its mahall matching that noun's own case (دخل تلميذٌ يبكي — راف, since تلميذ is fa'il/raf'; لنا بستانٌ أشجارُهُ ظليلةٌ — raf', since بستان is mubtada' mu'akhkhar/raf').\n5. A jumla as jawab for a jazm-conditional CONNECTED by فاء الجزاء or إذا الفجائية — mahall jazm (إن تدرسْ فالنجاحُ حليفُك; Qur'an, 3:160, ﴿إِن يَنصُرْكُمُ اللَّهُ فَلَا غَالِبَ لَكُمْ﴾). The fa/idha is needed here specifically because a nominal jumla like \"النجاح حليفك\" cannot itself carry an apparent jazm marker, so the whole jumla is instead said to stand in mahall jazm.\n6. A jumla as mudaf ilayh — after a zarf wajib al-idafa such as حيث (أقمنا حيث أقام أهلنا).\n7. A jumla tabi'a (subordinate) to a jumla that itself has a mahall — taking that jumla's own mahall (المعلّمُ يكتبُ ويشرحُ — يشرح follows يكتب's own mahall raf' as khabar al-mubtada').\n\nب — الجمل التي لا محل لها من الإعراب (jumal WITHOUT a place in i'rab): these cannot stand in for a single word at all, so no case applies to them as a unit. The book names eight:\n1. الجملة الابتدائية — opens the speech (الهواءُ شديدُ البرودةِ).\n2. A jumla tabi'a to a jumla that itself has no mahall — taking on that same no-mahall status (اشتريتُ مجلّةً وتصفّحتُها — تصفحتها is ma'tufa on the ibtida'iyya jumla اشتريتُ).\n3. A jumla as jawab al-qasam (تاللهِ لأقومَنّ بواجبي خيرَ قيامٍ).\n4. A jumla as jawab for a NON-jazm conditional — the adawat ghayr al-jazima being إذا، لولا، لو، كلّما (لولا العدلُ لفسدت الرعيّةُ).\n5. A jumla as jawab for a jazm-conditional NOT connected by فاء or إذا الفجائية — the mirror image of category أ's #5 above: a plain verbal jumla can itself carry an apparent jazm marker directly, so no fa/idha connector is needed and no mahall applies to it as a unit (مَن يدرسْ يَنجحْ).\n6. الجملة الاعتراضية — a parenthetical jumla interrupting two mutually-dependent elements, such as an ism kana and its own khabar (كان المعلّمُ ـ وأقولُ الحقَّ ـ عادلاً).\n7. الجملة المفسّرة — explains and unpacks what came immediately before it: after a fi'l mahdhuf the sentence itself clarifies (هلّا عملَك أتقنتَهُ، والتقدير: هلّا أتقنتَ عملَك أتقنته), or after the tafsiriyya particles أنْ/أي (Qur'an, 23:27, ﴿فَأَوْحَيْنَا إِلَيْهِ أَنِ اصْنَعِ الْفُلْكَ﴾ — the jumla اصنع الفلك explains ما أوحينا).\n8. الجملة الواقعة صلة الموصول — the jumla that completes an ism mawsul's meaning (قَدِمَ الذي يستحقُّ الجائزةَ — يستحقّ الجائزة completes الذي).",
      ms: "Jumlah terbahagi, bagi tujuan i'rab, kepada dua kumpulan.\n\nأ — الجمل التي لها محل من الإعراب (jumlah YANG ADA mahall dalam i'rab): ini ialah jumlah yang maknanya boleh menggantikan satu ism mufrad, maka i'rabnya mencerminkan apa sahaja kes ism tunggal itu — raf', nasb, atau jarr. Buku itu menamakan tujuh:\n1. Jumlah sebagai khabar — mahall raf', menyamai mubtada' yang digambarkannya (المعلّمُ يُكافئُ المجتهدَ), termasuk apabila slot-mubtada' dipegang oleh إنّ/أخواتها (tetap raf'), لا النافية للجنس (tetap raf'), atau كان/أخواتها (nasb, sebagai khabar kana — كان النهرُ ماؤه غزيرٌ).\n2. Jumlah sebagai maf'ul bih — selepas af'al al-zann (ظننتُ خالدًا لا يكذبُ, mahall nasb maf'ul bih thani) atau selepas قال (قال وليدٌ أنا بريءٌ, keseluruhan jumlah nominal أنا بريء pada mahall nasb maf'ul bih bagi قال).\n3. Jumlah sebagai hal — selepas ism makrifah atau kata ganti nama (أقبلَ خالدٌ يضحكُ — hal daripada خالد; بَرَدَتْ والطقسُ ممطرٌ — hal daripada fa'il tersembunyi التاء).\n4. Jumlah sebagai na't (sifat) — selepas kata nama nakirah, dengan mahallnya menyamai kes kata nama itu sendiri (دخل تلميذٌ يبكي — raf', kerana تلميذ ialah fa'il/raf'; لنا بستانٌ أشجارُهُ ظليلةٌ — raf', kerana بستان ialah mubtada' mu'akhkhar/raf').\n5. Jumlah sebagai jawab bagi syarat jazim YANG DISAMBUNGKAN oleh فاء الجزاء atau إذا الفجائية — mahall jazm (إن تدرسْ فالنجاحُ حليفُك; al-Qur'an, 3:160, ﴿إِن يَنصُرْكُمُ اللَّهُ فَلَا غَالِبَ لَكُمْ﴾). فاء/إذا diperlukan di sini khususnya kerana jumlah nominal seperti \"النجاح حليفك\" tidak boleh membawa tanda jazm zahir sendiri, maka keseluruhan jumlah itu dikatakan berkedudukan mahall jazm sebaliknya.\n6. Jumlah sebagai mudaf ilayh — selepas zarf wajib al-idafah seperti حيث (أقمنا حيث أقام أهلنا).\n7. Jumlah tabi'a (bergantung) kepada jumlah yang sendiri mempunyai mahall — mengambil mahall jumlah itu sendiri (المعلّمُ يكتبُ ويشرحُ — يشرح mengikuti mahall raf' يكتب sendiri sebagai khabar al-mubtada').\n\nب — الجمل التي لا محل لها من الإعراب (jumlah YANG TIADA mahall dalam i'rab): ini tidak boleh menggantikan satu kata langsung, maka tiada kes terpakai kepadanya sebagai satu unit. Buku itu menamakan lapan:\n1. الجملة الابتدائية — membuka pertuturan (الهواءُ شديدُ البرودةِ).\n2. Jumlah tabi'a kepada jumlah yang sendiri tiada mahall — mengambil status tiada-mahall yang sama (اشتريتُ مجلّةً وتصفّحتُها — تصفحتها ma'tufa kepada jumlah ibtida'iyyah اشتريتُ).\n3. Jumlah sebagai jawab al-qasam (تاللهِ لأقومَنّ بواجبي خيرَ قيامٍ).\n4. Jumlah sebagai jawab bagi syarat BUKAN-jazim — adawat syarat ghayr jazima ialah إذا، لولا، لو، كلّما (لولا العدلُ لفسدت الرعيّةُ).\n5. Jumlah sebagai jawab bagi syarat jazim YANG TIDAK disambungkan oleh فاء atau إذا الفجائية — bayangan cermin bagi #5 kategori أ di atas: jumlah fi'liyyah biasa boleh membawa tanda jazm zahir secara langsung, maka tiada penyambung فاء/إذا diperlukan dan tiada mahall terpakai kepadanya sebagai satu unit (مَن يدرسْ يَنجحْ).\n6. الجملة الاعتراضية — jumlah sisipan yang mengganggu dua unsur yang saling bergantung, seperti ism kana dan khabarnya sendiri (كان المعلّمُ ـ وأقولُ الحقَّ ـ عادلاً).\n7. الجملة المفسّرة — menjelaskan dan menghuraikan apa yang mendahuluinya serta-merta: selepas fi'l mahdhuf ayat itu sendiri menjelaskan (هلّا عملَك أتقنتَهُ، والتقدير: هلّا أتقنتَ عملَك أتقنته), atau selepas zarah tafsiriyyah أنْ/أي (al-Qur'an, 23:27, ﴿فَأَوْحَيْنَا إِلَيْهِ أَنِ اصْنَعِ الْفُلْكَ﴾ — jumlah اصنع الفلك menjelaskan ما أوحينا).\n8. الجملة الواقعة صلة الموصول — jumlah yang melengkapkan makna ism mawsul (قَدِمَ الذي يستحقُّ الجائزةَ — يستحقّ الجائزة melengkapkan الذي)."
    },
    workedExample: {
      contentLabel: "source-example",
      citation: { chapter: 48, pdfPages: [228, 228] },
      arabic: "المُعَلِّمُ يُكَافِئُ المُجْتَهِدَ",
      gloss: { en: "The teacher rewards the diligent student.", ms: "Guru itu menghadiahi pelajar yang rajin." },
      words: [
        { id: "w1", ar: "المُعَلِّمُ", role: { en: "mubtada' (subject of the nominal sentence)", ms: "mubtada' (subjek ayat nominal)" }, case: "raf'", sign: { en: "apparent damma", ms: "damma zahir" }, reason: { en: "A definite noun opening a nominal sentence is its mubtada', raf' by apparent damma.", ms: "Kata nama makrifah yang membuka ayat nominal ialah mubtada'nya, raf' dengan damma zahir." } },
        { id: "w2", ar: "يُكَافِئُ المُجْتَهِدَ", role: { en: "khabar (the jumla fi'liyya itself is the predicate)", ms: "khabar (jumlah fi'liyyah itu sendiri ialah predikat)" }, case: "raf' (mahalli)", sign: { en: "the jumla carries no case ending of its own — its raf' is purely positional, standing in for whatever a single-word khabar would carry", ms: "jumlah itu tiada tanda kes sendiri — raf'nya semata-mata kedudukan, menggantikan apa sahaja yang dibawa khabar satu-kata" }, reason: { en: "This is the chapter's simplest and most common \"jumla with a mahall\" type: a jumla functioning as a mubtada's khabar takes the mahall raf' that a mufrad khabar would otherwise carry — rule category أ #1.", ms: "Ini ialah jenis \"jumlah berkedudukan mahall\" yang paling ringkas dan biasa dalam bab ini: jumlah yang berfungsi sebagai khabar bagi mubtada' mengambil mahall raf' yang sepatutnya dibawa khabar mufrad — kategori أ #1 dalam kaedah." } }
      ]
    },
    exercises: [
      {
        id: "ex48-guided", step: "guided", type: "identify-role",
        contentLabel: "new-example",
        promptAr: "رَأَيْتُ طِفْلًا يَلْعَبُ",
        gloss: { en: "I saw a child playing.", ms: "Saya melihat seorang kanak-kanak bermain." },
        targetWord: "يَلْعَبُ",
        question: { en: "What is the mahall of the jumla \"يلعب\", following the indefinite noun \"طفلًا\"?", ms: "Apakah mahall jumlah \"يلعب\", yang mengikuti kata nama nakirah \"طفلًا\"?" },
        options: [
          { value: "nasb-naat", labelEn: "Nasb — na't for طفلًا", labelMs: "Nasb — na't bagi طفلًا" },
          { value: "raf-khabar", labelEn: "Raf' — khabar of the sentence", labelMs: "Raf' — khabar ayat itu" },
          { value: "no-mahall", labelEn: "No mahall at all", labelMs: "Tiada mahall langsung" }
        ],
        acceptedValues: ["nasb-naat"],
        ruleNote: { en: "A jumla following an indefinite noun is its na't, taking that noun's own case in mahall — here nasb, since طفلًا (the mawsuf) is itself mansub as maf'ul bih of رأيتُ. Rule category أ #4.", ms: "Jumlah yang mengikuti kata nama nakirah ialah na'tnya, mengambil kes kata nama itu sendiri secara mahall — di sini nasb, kerana طفلًا (mawsuf) itu sendiri mansub sebagai maf'ul bih bagi رأيتُ. Kategori أ #4 dalam kaedah." }
      },
      {
        id: "ex48-independent", step: "independent", type: "complete-analysis",
        contentLabel: "new-example",
        promptAr: "مَنْ يَجْتَهِدْ يَنَلْ النَّجَاحَ",
        gloss: { en: "Whoever strives will attain success.", ms: "Sesiapa yang berusaha akan mencapai kejayaan." },
        targetWord: "يَنَلْ",
        question: { en: "Give the full analysis of the jawab-clause \"يَنَلْ النجاحَ\".", ms: "Berikan analisis penuh bagi klausa jawab \"يَنَلْ النجاحَ\"." },
        fields: [
          { key: "mahall", question: { en: "Does the jawab jumla have a mahall?", ms: "Adakah jumlah jawab itu mempunyai mahall?" }, options: [
            { value: "has-mahall", labelEn: "Yes — mahall jazm", labelMs: "Ya — mahall jazm" },
            { value: "no-mahall", labelEn: "No mahall", labelMs: "Tiada mahall" }
          ] },
          { key: "reason", question: { en: "Why?", ms: "Mengapa?" }, options: [
            { value: "verbal-jazm-direct", labelEn: "It's a verbal jumla carrying its own apparent jazm mark, with no فاء/إذا connector needed", labelMs: "Ia jumlah fi'liyyah yang membawa tanda jazm zahirnya sendiri, tiada penyambung فاء/إذا diperlukan" },
            { value: "nominal-needs-fa", labelEn: "It's a nominal jumla that needed فاء/إذا to connect it to the shart", labelMs: "Ia jumlah nominal yang memerlukan فاء/إذا untuk menyambungkannya kepada syarat" }
          ] }
        ],
        acceptedCombos: [ { mahall: "no-mahall", reason: "verbal-jazm-direct" } ],
        ruleNote: { en: "When a jazm-conditional's jawab is itself a plain verbal sentence, it carries its own apparent jazm marking directly and needs no فاء/إذا connector — so the jumla as a whole has no mahall. Rule category ب #5, the mirror image of category أ #5 (where a jawab that cannot itself carry jazm — such as a nominal sentence — is connected by فاء/إذا and IS then said to be in mahall jazm).", ms: "Apabila jawab bagi syarat jazim itu sendiri jumlah fi'liyyah biasa, ia membawa tanda jazm zahirnya sendiri secara langsung dan tidak memerlukan penyambung فاء/إذا — maka jumlah itu secara keseluruhan tiada mahall. Kategori ب #5 dalam kaedah, bayangan cermin bagi kategori أ #5 (di mana jawab yang tidak boleh membawa jazm sendiri — seperti jumlah nominal — disambungkan oleh فاء/إذا dan DIKATAKAN berkedudukan mahall jazm)." }
      }
    ],
    completion: {
      en: "You can now sort an embedded jumla into the book's fifteen categories — seven with a mahall (khabar, maf'ul bih, hal, na't, jawab-shart-muqtarin-bi-fa, mudaf ilayh, tabi'a-li-jumla-laha-mahall) and eight without (ibtida'iyya, tabi'a-li-jumla-la-mahalla-laha, jawab-qasam, jawab-shart-ghayr-jazim, jawab-shart-jazim-ghayr-muqtarin, i'tiradiyya, mufassira, silat-al-mawsul) — and, on the book's own jawab-shart pair, recognize exactly why a فاء/إذا connector is what turns \"no mahall needed\" into \"mahall jazm.\"",
      ms: "Anda kini boleh menyusun jumlah tersemat ke dalam lima belas kategori buku itu — tujuh yang ada mahall (khabar, maf'ul bih, hal, na't, jawab-syarat-bersambung-fa, mudaf ilayh, tabi'a-kepada-jumlah-bermahall) dan lapan yang tiada (ibtida'iyyah, tabi'a-kepada-jumlah-tiada-mahall, jawab-qasam, jawab-syarat-bukan-jazim, jawab-syarat-jazim-tidak-bersambung, i'tiradiyyah, mufassirah, silat-al-mawsul) — dan, pada pasangan jawab-syarat buku itu sendiri, mengenali dengan tepat mengapa penyambung فاء/إذا itulah yang menukar \"tiada mahall diperlukan\" kepada \"mahall jazm\"."
    }
  }


};

// Auto-generate honest placeholder records for every chapter without a
// hand-built lesson above, so the lesson engine always has *something*
// safe to render — never invented content, never a silent blank page.
(function fillPlaceholders() {
  QICurriculum.forEach(function (chapter) {
    if (QILessons[chapter.id]) return;
    QILessons[chapter.id] = {
      chapterId: chapter.id,
      status: "placeholder",
      concept: {
        en: "This lesson has not been built yet. Source chapter \"" + chapter.titleEn + "\" (PDF pp." + chapter.pdfPages[0] + "–" + chapter.pdfPages[1] + ") is audited and mapped, but its worked examples have not been transcribed and its exercises have not been authored.",
        ms: "Pelajaran ini belum dibina. Bab sumber \"" + chapter.titleMs + "\" (ms. PDF " + chapter.pdfPages[0] + "–" + chapter.pdfPages[1] + ") telah diaudit dan dipetakan, tetapi contoh kerjanya belum ditranskripsi dan latihannya belum dikarang."
      },
      rule: null,
      workedExample: null,
      exercises: [],
      completion: null
    };
  });
})();

// NOTE: top-level `const` does NOT create a `window` property in a
// browser (unlike `var`) — see the matching note in curriculum.js.
if (typeof window !== "undefined") {
  window.QILessons = QILessons;
}
if (typeof module !== "undefined") module.exports = { QILessons };
