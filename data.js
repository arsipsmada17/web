// ============================================================
//  Begarlist 16 — Data Video
//  Edit file ini untuk menambah/mengubah video
//
//  Format:
//  {
//    id: unik ID (angka),
//    title: "Judul Video",
//    channel: "Nama Channel",
//    category: "kategori",   // all | teknologi | musik | edukasi | gaming | film | travel | kuliner
//    youtubeId: "VIDEO_ID",  // ID dari URL YouTube: youtube.com/watch?v=VIDEO_ID
//    duration: "mm:ss",
//    description: "Deskripsi singkat video."
//  }
// ============================================================

const VIDEOS = [
  {
    id: 1,
    title: "Seni Tari - 10 IPS 3 0  Intro",
    channel: null,
    category: "senitari",
    youtubeId: "whudOT_XDko",
    duration: "0:15",
    description: null
  },
  {
    id: 2,
    title: "Seni Tari - 1  Kelompok Tari Tongkat Kreasi   Aditya, Fikri, Habin, Rizaldi",
    channel: null,
    category: "senitari",
    youtubeId: "0VJJhCa9prw",
    duration: "5:27",
    description: null
  },
  {
    id: 3,
    title: "Seni Tari - 2  Kelompok Tari Rampak   Azzam, helmi, Ivan, Yoga",
    channel: null,
    category: "senitari",
    youtubeId: "st5pChFI5ic",
    duration: "5:00",
    description: null
  },
  {
    id: 4,
    title: "Seni Tari - 3  Kelompok Tari Kebrok Anting   Anting   Anggie, Amanda, Rizka, Catur",
    channel: null,
    category: "senitari",
    youtubeId: "sa9IbqzxHQE",
    duration: "5:00",
    description: null
  },
  {
    id: 5,
    title: "Seni Tari - 4  Kelompok Tari Rampak   Lintang, Fio, Damay",
    channel: null,
    category: "senitari",
    youtubeId: "mMI_kSiz6u0",
    duration: "4:55",
    description: null
  },
  {
    id: 6,
    title: "Seni Tari - 5  Kelompok Tari Manuk dadali   Aniestiyana, Regita, Nabila, Almira",
    channel: null,
    category: "senitari",
    youtubeId: "gGVpfICIwss",
    duration: "4:38",
    description: null
  },
  {
    id: 7,
    title: "Seni Tari - 6  Kelompok Tari Rampak   Titik, Kartika, Lilin, Ayu",
    channel: null,
    category: "senitari",
    youtubeId: "LLZaXtTt7mA",
    duration: "5:26",
    description: null
  },
  {
    id: 8,
    title: "Seni Tari - 7  Kelompok Tari Oglek   Deajeng, Refina, Nurul Khusna",
    channel: null,
    category: "senitari",
    youtubeId: "1cFV75Xp6lo",
    duration: "5:02",
    description: null
  },
  {
    id: 9,
    title: "Seni Tari - 8  Kelompok Tari Kubro Siswo   Adam Dan Bayu",
    channel: null,
    category: "senitari",
    youtubeId: "mNKPHjsG9Qs",
    duration: "4:51",
    description: null
  },
  {
    id: 10,
    title: "Seni Tari - 9  Kelompok Tari Topeng Ireng   Fariz, Cesarioni, Bintang, Daffa",
    channel: null,
    category: "senitari",
    youtubeId: "UAIGcgxuEbw",
    duration: "8:14",
    description: null
  },
  {
    id: 11,
    title: "Seni Tari - 10 IPS 3 10  Credit",
    channel: null,
    category: "senitari",
    youtubeId: "dt8kaUSTsl4",
    duration: "4:42",
    description: null
  },
  {
    id: 12,
    title: "Seni Tari - BTS - 1  Kelompok Tari Tongkat Kreasi   Aditya, Fikri, Habin, Rizaldi",
    channel: null,
    category: "senitari",
    youtubeId: "JLRbgf5GZAs",
    duration: "5:38",
    description: null
  },
  {
    id: 13,
    title: "Seni Tari  - BTS - 2. Kelompok Tari Rampak - Azzam, helmi, Ivan, Yoga",
    channel: null,
    category: "senitari",
    youtubeId: "rQU4l8sSK5w",
    duration: "1:39",
    description: null
  },
  {
    id: 14,
    title: "Seni Tari - BTS 1 - 8  Kelompok Tari Kubro Siswo   Adam Dan Bayu",
    channel: null,
    category: "senitari",
    youtubeId: "1ZoWNafBugk",
    duration: "20:05",
    description: null
  },
  {
    id: 15,
    title: "Seni Tari - BTS 2 - 8  Kelompok Tari Kubro Siswo   Adam Dan Bayu",
    channel: null,
    category: "senitari",
    youtubeId: "KgZiXEWDlo0",
    duration: "3:59",
    description: null
  },
  {
    id: 16,
    title: "Seni Tari - BTS - 5. Kelompok Tari Manuk dadali - Aniestiyana, Regita, Nabila, Almira",
    channel: null,
    category: "senitari",
    youtubeId: "Z5qbCd-IOLI",
    duration: "4:37",
    description: null
  },
  {
    id: 17,
    title: "Seni Tari - BTS - 9. Kelompok Tari Topeng Ireng - Fariz, Cesarioni, Bintang, Daffa",
    channel: null,
    category: "senitari",
    youtubeId: "IB38tqLRxls",
    duration: "43:00",
    description: null
  },
  {
    id: 18,
    title: "Seni Tari - 10 IPS 1 DAYAKAN IPS 1",
    channel: null,
    category: "senitari",
    youtubeId: "Ekm7BFHqTwM",
    duration: "7:57",
    description: null
  },
  {
    id: 19,
    title: "Seni Tari - 10 IPS 1 loteng 22",
    channel: null,
    category: "senitari",
    youtubeId: "za_EwxgHjgA",
    duration: "2:03",
    description: null
  },
  {
    id: 20,
    title: "Seni Tari - 10 IPS 1 Tari Gembira",
    channel: null,
    category: "senitari",
    youtubeId: "QV-OGbme4hs",
    duration: "8:39",
    description: null
  },
  {
    id: 21,
    title: "Seni Tari - 10 IPS 1 Tari SMAN 2",
    channel: null,
    category: "senitari",
    youtubeId: "2hqXtPeOjAQ",
    duration: "4:41",
    description: null
  },
  {
    id: 22,
    title: "Seni Tari - 10 IPS 1 Tari Unyu",
    channel: null,
    category: "senitari",
    youtubeId: "5sGTh4W4e8Q",
    duration: "9:42",
    description: null
  },
  {
    id: 23,
    title: "Seni Tari - 10 IPS 1 Tari Tepleret",
    channel: null,
    category: "senitari",
    youtubeId: "eoctEXNcTt4",
    duration: "6:45",
    description: null
  },
  {
    id: 24,
    title: "Seni Tari - BTS - 10 IPS 1 Tari Tepleret",
    channel: null,
    category: "senitari",
    youtubeId: "ISYcjff7Yo4",
    duration: "2:22",
    description: null
  },
  {
    id: 25,
    title: "Seni Tari - 10 IPA 2 Aliva, Erizta, Rizqi, Salsa",
    channel: null,
    category: "senitari",
    youtubeId: "dfho41S1k9A",
    duration: "5:57",
    description: null
  },
  {
    id: 26,
    title: "Seni Tari - 10 IPA 2 Dewry A, Riski Wulanyunitasari",
    channel: null,
    category: "senitari",
    youtubeId: "LZMynXlefa8",
    duration: "11:27",
    description: null
  },
  {
    id: 27,
    title: "Seni Tari - 10 IPA 2 Tari Topeng Ijo",
    channel: null,
    category: "senitari",
    youtubeId: "4_9jWkAinSo",
    duration: "4:19",
    description: null
  },
  {
    id: 28,
    title: "Seni Tari - 10 IPA 3 1",
    channel: null,
    category: "senitari",
    youtubeId: "4GxLQd81J-I",
    duration: "2:43",
    description: null
  },
  {
    id: 29,
    title: "Seni Tari - 10 IPA 3 2",
    channel: null,
    category: "senitari",
    youtubeId: "xlM3vu4jBkI",
    duration: "5:53",
    description: null
  },
  {
    id: 30,
    title: "Seni Tari - 10 IPA 3  Sheila, Sofia, Putri, Nicky, Candra Kurnia",
    channel: null,
    category: "senitari",
    youtubeId: "7abIXCfCPE0",
    duration: "4:32",
    description: null
  },
  {
    id: 31,
    title: "Seni Tari - 10 IPA 3 Hamah, Hesti, Nisaul, Rizky set, Uswatun Han",
    channel: null,
    category: "senitari",
    youtubeId: "OQM_UwrNjro",
    duration: "4:44",
    description: null
  },
  {
    id: 32,
    title: "Seni Tari - 10 IPA 4 Silvia, Apple Jordan",
    channel: null,
    category: "senitari",
    youtubeId: "B2QGwHgKAPI",
    duration: "6:23",
    description: null
  },
  {
    id: 33,
    title: "Seni Tari - 11 IPS 1 Tari Dindin Badindin Anggi, catur, refina, amanda",
    channel: null,
    category: "senitari",
    youtubeId: "lV7m_uPn7hQ",
    duration: "6:07",
    description: null
  },
  {
    id: 34,
    title: "Seni Tari - 11 IPA 2 TARI GANDHIS",
    channel: null,
    category: "senitari",
    youtubeId: "v09wUONosDc",
    duration: "8:22",
    description: null
  },
  {
    id: 35,
    title: "Seni Tari - 11 IPS 1",
    channel: null,
    category: "senitari",
    youtubeId: "DRE4a3OJ4SM",
    duration: "3:41",
    description: null
  },
  {
    id: 36,
    title: "Seni Tari - 11 IPS 1 Tari Elizabeth",
    channel: null,
    category: "senitari",
    youtubeId: "rEoKwkBhsxI",
    duration: "3:59",
    description: null
  },
  {
    id: 37,
    title: "Seni Tari - 11 IPS 2",
    channel: null,
    category: "senitari",
    youtubeId: "tjsiqZ9sw2o",
    duration: "13:43",
    description: null
  },
  {
    id: 38,
    title: "Seni Tari - 11 IPS 3 indang true bener",
    channel: null,
    category: "senitari",
    youtubeId: "2SW51N3KSyk",
    duration: "4:31",
    description: null
  },
  {
    id: 39,
    title: "Seni Tari - 11 IPS 3 LANCANG KUNING",
    channel: null,
    category: "senitari",
    youtubeId: "mgpJRqbhOPY",
    duration: "5:52",
    description: null
  },
  {
    id: 40,
    title: "Seni Tari - 11 IPS 3 Tari Anies",
    channel: null,
    category: "senitari",
    youtubeId: "bKaEDtS3Dqs",
    duration: "4:27",
    description: null
  },
  {
    id: 41,
    title: "Seni Tari - 11 IPS 3 tari well 01",
    channel: null,
    category: "senitari",
    youtubeId: "_3gBP2uTQI0",
    duration: "5:31",
    description: null
  },
  {
    id: 42,
    title: "Seni Tari - 11 IPS 3 tari almost done",
    channel: null,
    category: "senitari",
    youtubeId: "yAqd17gPcyg",
    duration: "5:01",
    description: null
  },
  {
    id: 43,
    title: "Seni Tari - BTS - 11 IPS 3 Tari Almost Done",
    channel: null,
    category: "senitari",
    youtubeId: "299gxSb36lY",
    duration: "2:25",
    description: null
  },
  {
    id: 44,
    title: "Seni Tari - BTS - X IPS 3",
    channel: null,
    category: "senitari",
    youtubeId: "QWgvvZvCJos",
    duration: "5:53",
    description: null
  }
];
