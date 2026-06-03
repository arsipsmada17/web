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
    channel: "null",
    category: "Seni Tari",
    youtubeId: "whudOT_XDko",
    duration: "0:15",
    description: "null"
  },
  {
    id: 2,
    title: "Seni Tari - 1  Kelompok Tari Tongkat Kreasi   Aditya, Fikri, Habin, Rizaldi",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "0VJJhCa9prw",
    duration: "5:27",
    description: "null"
  },
  {
    id: 3,
    title: "Seni Tari - 2  Kelompok Tari Rampak   Azzam, helmi, Ivan, Yoga",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "st5pChFI5ic",
    duration: "5:00",
    description: "null"
  },
  {
    id: 4,
    title: "Seni Tari - 3  Kelompok Tari Kebrok Anting   Anting   Anggie, Amanda, Rizka, Catur",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "sa9IbqzxHQE",
    duration: "5:00",
    description: "null"
  },
  {
    id: 5,
    title: "Seni Tari - 4  Kelompok Tari Rampak   Lintang, Fio, Damay",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "mMI_kSiz6u0",
    duration: "4:55",
    description: "null"
  },
  {
    id: 6,
    title: "Seni Tari - 5  Kelompok Tari Manuk dadali   Aniestiyana, Regita, Nabila, Almira",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "gGVpfICIwss",
    duration: "4:38",
    description: "null"
  },
  {
    id: 7,
    title: "Seni Tari - 6  Kelompok Tari Rampak   Titik, Kartika, Lilin, Ayu",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "LLZaXtTt7mA",
    duration: "5:26",
    description: "null"
  },
  {
    id: 8,
    title: "Seni Tari - 7  Kelompok Tari Oglek   Deajeng, Refina, Nurul Khusna",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "1cFV75Xp6lo",
    duration: "5:02",
    description: "null"
  },
  {
    id: 9,
    title: "Seni Tari - 8  Kelompok Tari Kubro Siswo   Adam Dan Bayu",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "mNKPHjsG9Qs",
    duration: "4:51",
    description: "null"
  },
  {
    id: 10,
    title: "Seni Tari - 9  Kelompok Tari Topeng Ireng   Fariz, Cesarioni, Bintang, Daffa",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "UAIGcgxuEbw",
    duration: "8:14",
    description: "null"
  },
  {
    id: 11,
    title: "Seni Tari - 10 IPS 3 10  Credit",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "dt8kaUSTsl4",
    duration: "4:42",
    description: "null"
  },
  {
    id: 12,
    title: "Seni Tari - BTS - 1  Kelompok Tari Tongkat Kreasi   Aditya, Fikri, Habin, Rizaldi",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "JLRbgf5GZAs",
    duration: "5:38",
    description: "null"
  },
  {
    id: 13,
    title: "Seni Tari  - BTS - 2. Kelompok Tari Rampak - Azzam, helmi, Ivan, Yoga",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "rQU4l8sSK5w",
    duration: "1:39",
    description: "null"
  },
  {
    id: 14,
    title: "Seni Tari - BTS 1 - 8  Kelompok Tari Kubro Siswo   Adam Dan Bayu",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "1ZoWNafBugk",
    duration: "20:05",
    description: "null"
  },
  {
    id: 15,
    title: "Seni Tari - BTS 2 - 8  Kelompok Tari Kubro Siswo   Adam Dan Bayu",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "KgZiXEWDlo0",
    duration: "3:59",
    description: "null"
  },
  {
    id: 16,
    title: "Seni Tari - BTS - 5. Kelompok Tari Manuk dadali - Aniestiyana, Regita, Nabila, Almira",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "Z5qbCd-IOLI",
    duration: "4:37",
    description: "null"
  },
  {
    id: 17,
    title: "Seni Tari - BTS - 9. Kelompok Tari Topeng Ireng - Fariz, Cesarioni, Bintang, Daffa",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "IB38tqLRxls",
    duration: "43:00",
    description: "null"
  },
  {
    id: 18,
    title: "Seni Tari - 10 IPS 1 DAYAKAN IPS 1",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "Ekm7BFHqTwM",
    duration: "7:57",
    description: "null"
  },
  {
    id: 19,
    title: "Seni Tari - 10 IPS 1 loteng 22",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "za_EwxgHjgA",
    duration: "2:03",
    description: "null"
  },
  {
    id: 20,
    title: "Seni Tari - 10 IPS 1 Tari Gembira",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "QV-OGbme4hs",
    duration: "8:39",
    description: "null"
  },
  {
    id: 21,
    title: "Seni Tari - 10 IPS 1 Tari SMAN 2",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "2hqXtPeOjAQ",
    duration: "4:41",
    description: "null"
  },
  {
    id: 22,
    title: "Seni Tari - 10 IPS 1 Tari Unyu",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "5sGTh4W4e8Q",
    duration: "9:42",
    description: "null"
  },
  {
    id: 23,
    title: "Seni Tari - 10 IPS 1 Tari Tepleret",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "eoctEXNcTt4",
    duration: "6:45",
    description: "null"
  },
  {
    id: 24,
    title: "Seni Tari - BTS - 10 IPS 1 Tari Tepleret",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "ISYcjff7Yo4",
    duration: "2:22",
    description: "null"
  },
  {
    id: 25,
    title: "Seni Tari - 10 IPA 2 Aliva, Erizta, Rizqi, Salsa",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "dfho41S1k9A",
    duration: "5:57",
    description: "null"
  },
  {
    id: 26,
    title: "Seni Tari - 10 IPA 2 Dewry A, Riski Wulanyunitasari",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "LZMynXlefa8",
    duration: "11:27",
    description: "null"
  },
  {
    id: 27,
    title: "Seni Tari - 10 IPA 2 Tari Topeng Ijo",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "4_9jWkAinSo",
    duration: "4:19",
    description: "null"
  },
  {
    id: 28,
    title: "Seni Tari - 10 IPA 3 1",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "4GxLQd81J-I",
    duration: "2:43",
    description: "null"
  },
  {
    id: 29,
    title: "Seni Tari - 10 IPA 3 2",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "xlM3vu4jBkI",
    duration: "5:53",
    description: "null"
  },
  {
    id: 30,
    title: "Seni Tari - 10 IPA 3  Sheila, Sofia, Putri, Nicky, Candra Kurnia",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "7abIXCfCPE0",
    duration: "4:32",
    description: "null"
  },
  {
    id: 31,
    title: "Seni Tari - 10 IPA 3 Hamah, Hesti, Nisaul, Rizky set, Uswatun Han",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "OQM_UwrNjro",
    duration: "4:44",
    description: "null"
  },
  {
    id: 32,
    title: "Seni Tari - 10 IPA 4 Silvia, Apple Jordan",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "B2QGwHgKAPI",
    duration: "6:23",
    description: "null"
  },
  {
    id: 33,
    title: "Seni Tari - 11 IPS 1 Tari Dindin Badindin Anggi, catur, refina, amanda",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "lV7m_uPn7hQ",
    duration: "6:07",
    description: "null"
  },
  {
    id: 34,
    title: "Seni Tari - 11 IPA 2 TARI GANDHIS",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "v09wUONosDc",
    duration: "8:22",
    description: "null"
  },
  {
    id: 35,
    title: "Seni Tari - 11 IPS 1",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "DRE4a3OJ4SM",
    duration: "3:41",
    description: "null"
  },
  {
    id: 36,
    title: "Seni Tari - 11 IPS 1 Tari Elizabeth",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "rEoKwkBhsxI",
    duration: "3:59",
    description: "null"
  },
  {
    id: 37,
    title: "Seni Tari - 11 IPS 2",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "tjsiqZ9sw2o",
    duration: "13:43",
    description: "null"
  },
  {
    id: 38,
    title: "Seni Tari - 11 IPS 3 indang true bener",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "2SW51N3KSyk",
    duration: "4:31",
    description: "null"
  },
  {
    id: 39,
    title: "Seni Tari - 11 IPS 3 LANCANG KUNING",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "mgpJRqbhOPY",
    duration: "5:52",
    description: "null"
  },
  {
    id: 40,
    title: "Seni Tari - 11 IPS 3 Tari Anies",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "bKaEDtS3Dqs",
    duration: "4:27",
    description: "null"
  },
  {
    id: 41,
    title: "Seni Tari - 11 IPS 3 tari well 01",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "_3gBP2uTQI0",
    duration: "5:31",
    description: "null"
  },
  {
    id: 42,
    title: "Seni Tari - 11 IPS 3 tari almost done",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "yAqd17gPcyg",
    duration: "5:01",
    description: "null"
  },
  {
    id: 43,
    title: "Seni Tari - BTS - 11 IPS 3 Tari Almost Done",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "299gxSb36lY",
    duration: "2:25",
    description: "null"
  },
  {
    id: 44,
    title: "Seni Tari - BTS - X IPS 3",
    channel: "null",
    category: "Seni Tari",
    youtubeId: "QWgvvZvCJos",
    duration: "5:53",
    description: "null"
  },
  {
    id: 45,
    title: "Film Pendek ID - 11 IPS 3 Sibuk (Jawa)",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "tEH-R4tpJW4",
    duration: "1:36",
    description: "null"
  },
  {
    id: 46,
    title: "Film Pendek ID - 11 IPS 3 Sibuk (Indonesia)",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "_7gx5rUJiaA",
    duration: "7:45",
    description: "null"
  },
  {
    id: 47,
    title: "Film Pendek ID - 11 IPA 3 NASIB ORANG, SIAPA TAHU aliva, hanni, ike, monita",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "TFAP_huCw3o",
    duration: "8:13",
    description: "null"
  },
  {
    id: 48,
    title: "Film Pendek ID - 11 IPS 3 ADUH",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "jzejvWwUB6Y",
    duration: "5:26",
    description: "null"
  },
  {
    id: 49,
    title: "Film Pendek ID - 11 IPS 3 Kompilasi BOgi",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "W-dGvmT_6Dg",
    duration: "4:15",
    description: "null"
  },
  {
    id: 50,
    title: "Film Pendek ID - 11 IPS 3 kita",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "JxR8P4XSr7I",
    duration: "4:34",
    description: "null"
  },
  {
    id: 51,
    title: "Film Pendek ID - 11 IPS 3 Copet",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "BIClLr1HCW4",
    duration: "5:50",
    description: "null"
  },
  {
    id: 52,
    title: "Film Pendek ID - 11 IPS 2 TAK SELALU",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "w5FC3Vn_cvs",
    duration: "3:28",
    description: "null"
  },
  {
    id: 53,
    title: "Film Pendek ID - 11 IPS 2 fadel and sepeda",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "xKqo2uXE8G8",
    duration: "5:44",
    description: "null"
  },
  {
    id: 54,
    title: "Film Pendek ID - 11 IPS 1Gadget   Drama Bahasa Indonesia",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "L6nOX9ogee8",
    duration: "9:43",
    description: "null"
  },
  {
    id: 55,
    title: "Film Pendek ID - 11 IPS 1 Unknown",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "D31hio8RpEk",
    duration: "5:20",
    description: "null"
  },
  {
    id: 56,
    title: "Film Pendek ID - 11 IPS 1 Rosemala, Refina, kiki, NUrul khusna",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "jeuCLUo40bA",
    duration: "3:31",
    description: "null"
  },
  {
    id: 57,
    title: "Film Pendek ID - 11 IPS 1 KESIALAN",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "OFp9eZkNL8Y",
    duration: "5:21",
    description: "null"
  },
  {
    id: 58,
    title: "Film Pendek ID - 11 IPS 1 Kebelet",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "n5z29eygKpw",
    duration: "2:43",
    description: "null"
  },
  {
    id: 59,
    title: "Film Pendek ID - 11 IPA 4 ANAKRAJIN",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "w7HK9UZMJlc",
    duration: "4:30",
    description: "null"
  },
  {
    id: 60,
    title: "Film Pendek ID - 11 IPA 4 Sang Penantang",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "V4Cmz6OjbxQ",
    duration: "4:59",
    description: "null"
  },
  {
    id: 61,
    title: "Film Pendek ID - 11 IPA 5 Nyontek",
    channel: "null",
    category: "Film Pendek ID",
    youtubeId: "2vO9qNtxeGc",
    duration: "4:02",
    description: "null"
  }
];
