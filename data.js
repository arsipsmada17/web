// ============================================================
//  StreamVault — Data Video
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
  // ── TEKNOLOGI ──────────────────────────────────────────────
  {
    id: 1,
    title: "The Entire History of the Computer",
    channel: "Fireship",
    category: "teknologi",
    youtubeId: "O5nskjZ_GoI",
    duration: "12:42",
    description: "Perjalanan sejarah komputer dari awal hingga era modern — dikemas padat dan menarik."
  },
  {
    id: 2,
    title: "How AI Image Generation Works",
    channel: "Computerphile",
    category: "teknologi",
    youtubeId: "1CIpzeNxIhU",
    duration: "18:06",
    description: "Penjelasan mendalam tentang cara kerja AI generatif dalam menghasilkan gambar."
  },
  {
    id: 3,
    title: "100 Computer Science Concepts in 10 Minutes",
    channel: "Fireship",
    category: "teknologi",
    youtubeId: "SzJ46YA_RaA",
    duration: "10:14",
    description: "100 konsep ilmu komputer dijelaskan dengan cepat, cocok untuk siapapun."
  },

  // ── MUSIK ──────────────────────────────────────────────────
  {
    id: 4,
    title: "Lo-Fi Hip Hop Radio — Beats to Study/Relax",
    channel: "Lofi Girl",
    category: "musik",
    youtubeId: "jfKfPfyJRdk",
    duration: "Live",
    description: "Playlist lo-fi hip hop yang sempurna untuk menemani belajar atau bersantai."
  },
  {
    id: 5,
    title: "The Science of Music — How Sound Becomes Emotion",
    channel: "Vox",
    category: "musik",
    youtubeId: "aSvPVNvjrCk",
    duration: "7:39",
    description: "Mengapa musik bisa membuat kita menangis, semangat, atau berdansa? Sains menjawabnya."
  },
  {
    id: 6,
    title: "Classical Music for Focus and Concentration",
    channel: "Quiet Quest",
    category: "musik",
    youtubeId: "H5EvpMGMvXE",
    duration: "3:00:00",
    description: "Koleksi musik klasik terbaik untuk meningkatkan fokus dan konsentrasi."
  },

  // ── EDUKASI ────────────────────────────────────────────────
  {
    id: 7,
    title: "How The Economic Machine Works by Ray Dalio",
    channel: "Principles by Ray Dalio",
    category: "edukasi",
    youtubeId: "PHe0bXAIuk0",
    duration: "30:59",
    description: "Penjelasan komprehensif tentang bagaimana mesin ekonomi bekerja, oleh Ray Dalio."
  },
  {
    id: 8,
    title: "The Most Powerful Idea in the World",
    channel: "Veritasium",
    category: "edukasi",
    youtubeId: "X9RYuvPCQUA",
    duration: "20:38",
    description: "Ide yang mengubah dunia dan mendorong revolusi industri — dikupas secara mendalam."
  },
  {
    id: 9,
    title: "Why the Universe Seems So Strange",
    channel: "TED",
    category: "edukasi",
    youtubeId: "gKwi8_82E24",
    duration: "14:32",
    description: "Richard Feynman menjelaskan mengapa alam semesta tampak begitu aneh dan menakjubkan."
  },

  // ── GAMING ─────────────────────────────────────────────────
  {
    id: 10,
    title: "The History of Video Games",
    channel: "Gaming Historian",
    category: "gaming",
    youtubeId: "3MteSlpxCpo",
    duration: "22:10",
    description: "Sejarah lengkap industri video game dari masa ke masa yang wajib diketahui."
  },
  {
    id: 11,
    title: "Why Minecraft Is Timeless",
    channel: "Like Stories of Old",
    category: "gaming",
    youtubeId: "yVMNxPMOoSc",
    duration: "20:14",
    description: "Analisis mendalam mengapa Minecraft tetap relevan dan dicintai lintas generasi."
  },
  {
    id: 12,
    title: "The Art of Video Games",
    channel: "The Art Assignment",
    category: "gaming",
    youtubeId: "u2iKpuLqUhI",
    duration: "10:45",
    description: "Membahas apakah video game bisa dikategorikan sebagai karya seni."
  },

  // ── FILM & SINEMA ──────────────────────────────────────────
  {
    id: 13,
    title: "Why Wes Anderson's Films Feel So Unique",
    channel: "Lessons from the Screenplay",
    category: "film",
    youtubeId: "nX5bQr23Blg",
    duration: "15:21",
    description: "Mengupas gaya sinematik khas Wes Anderson yang unik dan mudah dikenali."
  },
  {
    id: 14,
    title: "How Sound Design Makes Movies",
    channel: "Vox",
    category: "film",
    youtubeId: "ByhNUjRNdE0",
    duration: "8:12",
    description: "Peran desain suara yang sering terlupakan namun sangat krusial dalam sebuah film."
  },
  {
    id: 15,
    title: "The Language of Cinematography",
    channel: "Now You See It",
    category: "film",
    youtubeId: "xdAhCuWy4Cg",
    duration: "11:05",
    description: "Bagaimana pergerakan kamera dan pilihan lensa menceritakan sebuah kisah."
  },

  // ── TRAVEL ─────────────────────────────────────────────────
  {
    id: 16,
    title: "Japan in 4K — Land of Wonders",
    channel: "Beautiful Destinations",
    category: "travel",
    youtubeId: "t4KVeZQrOjA",
    duration: "5:10",
    description: "Perjalanan visual menakjubkan menjelajahi keindahan Jepang dalam resolusi 4K."
  },
  {
    id: 17,
    title: "Exploring the Streets of Kyoto",
    channel: "Abroad in Japan",
    category: "travel",
    youtubeId: "o6GqJe68D8Y",
    duration: "16:44",
    description: "Berjalan-jalan menelusuri gang-gang bersejarah kota Kyoto yang menawan."
  },
  {
    id: 18,
    title: "Iceland: The Land of Fire and Ice",
    channel: "Lost LeBlancs",
    category: "travel",
    youtubeId: "cKYYMrk44n8",
    duration: "19:53",
    description: "Menjelajahi Islandia — negeri gletser, gunung berapi, dan aurora borealis."
  },

  // ── KULINER ────────────────────────────────────────────────
  {
    id: 19,
    title: "The Perfect Ramen — Science of Flavor",
    channel: "Ethan Chlebowski",
    category: "kuliner",
    youtubeId: "84Ur8bfPBVQ",
    duration: "14:28",
    description: "Sains di balik ramen sempurna — dari kaldu hingga pemilihan mie yang tepat."
  },
  {
    id: 20,
    title: "Street Food Indonesia — Java Edition",
    channel: "Mark Wiens",
    category: "kuliner",
    youtubeId: "RM7UpRFSQiw",
    duration: "22:55",
    description: "Petualangan kuliner jalanan di Jawa — dari soto, nasi goreng, hingga gudeg."
  },
  {
    id: 21,
    title: "Gordon Ramsay's Ultimate Cooking Guide",
    channel: "Gordon Ramsay",
    category: "kuliner",
    youtubeId: "M3RJmwkRb-4",
    duration: "28:37",
    description: "Panduan memasak lengkap dari chef berbintang Gordon Ramsay untuk pemula."
  }
];
