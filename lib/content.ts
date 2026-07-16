/**
 * ============================================================
 *  SEMUA KONTEN WEBSITE ADA DI FILE INI (FR5)
 *  Edit teks, tanggal, foto, dan lagu di sini — tanpa perlu
 *  menyentuh file komponen lain.
 * ============================================================
 */

export const site = {
  namaPenerima: 'Marulin Andriani',
  namaPanggilan: 'Marulin',
  namaPengirim: 'Ari',
  tanggalUltah: '28 Juli 2026',
  tanggalJadian: '20 September 2024',
  kotaAsal: 'Jogja',
  kotaTujuan: 'Kendari',
}

export const hero = {
  label: 'SEBUAH KARTU POS DIGITAL',
  judul: 'Untuk Marulin Andriani',
  subjudul:
    'Ada cerita yang mau aku sampaikan. Bukan lewat chat, bukan lewat telpon — tapi lewat halaman ini. Scroll pelan-pelan ya.',
  cta: 'Mulai Perjalanan',
}

export type Chapter = {
  nomor: string
  label: string
  judul: string
  isi: string
  kutipan?: string
}

export const bab1: Chapter = {
  nomor: 'BAB 01',
  label: 'PERTEMUAN',
  judul: 'Dikenalkan Tanpa Sengaja',
  isi: 'Semua berawal dari hal yang nggak pernah direncanakan. Dikenalkan lewat seorang rekan, tanpa ekspektasi apa-apa. Waktu itu nggak ada yang tahu kalau perkenalan biasa itu bakal jadi awal dari cerita panjang kita.',
  kutipan: '“Kadang hal terbaik datang dari hal yang paling nggak disengaja.”',
}

export const bab2: Chapter = {
  nomor: 'BAB 02',
  label: 'LOST CONTACT',
  judul: 'Hilang, Lalu Ketemu Lagi',
  isi: 'Sempat hilang kontak. Sibuk dengan dunia masing-masing, chat yang perlahan berhenti. Tapi ternyata semesta punya rencana lain — kita dipertemukan lagi. Dan kali ini, nggak dilepas lagi.',
  kutipan: '“Yang memang jodoh, mau sejauh apa pun, balik lagi.”',
}

export const bab3 = {
  nomor: 'BAB 03',
  label: 'JADIAN',
  judul: 'Resmi',
  tanggal: '20 SEPTEMBER 2024',
  isi: 'Hari di mana semuanya berubah. Dari "kita" yang tanda kutip, jadi kita yang beneran. Tanggal ini bukan cuma angka — ini stempel pertama di paspor perjalanan kita.',
}

export const bab4 = {
  nomor: 'BAB 04',
  label: 'LDR',
  judul: 'Jogja — Kendari',
  isi: 'Aku kuliah di Jogja, kamu masih skripsi di Kendari. Ribuan kilometer, beda pulau, beda zona rasa kangen. Tiket pesawat, video call sampai ketiduran, dan hitung mundur menuju ketemu. Jarak itu berat — tapi ternyata kita lebih kuat.',
  jarak: '± 1.700 KM',
}

export const bab5 = {
  nomor: 'BAB 05',
  label: 'BAB BARU',
  judul: 'Wisuda & Pindah',
  isi: 'Lalu aku lulus. Dan keputusan besar itu aku ambil: pindah ke Kendari, biar nggak LDR lagi. Bukan keputusan gampang — ninggalin Jogja, teman, dan zona nyaman. Tapi aku pilih untuk dekat sama kamu. Dan aku nggak nyesel sama sekali.',
  badges: ['Aku Lulus', 'Pindah ke Kendari', 'Akhirnya Dekat', 'Nggak LDR Lagi'],
}

export const bab6 = {
  nomor: 'BAB 06',
  label: 'SUKA DUKA',
  judul: 'Naik, Turun, Tetap Bertahan',
  isi: 'Nggak semua bab cerita kita manis. Ada hari-hari berat, ada air mata, bahkan kata "putus" pernah terucap. Tapi lihat kita sekarang — masih di sini, masih milih satu sama lain. Karena bertahan itu bukan kebetulan, itu keputusan yang kita ambil setiap hari.',
  kutipan: '“Kita pernah hampir menyerah. Untungnya, cuma hampir.”',
}

export const bab7 = {
  nomor: 'BAB 07',
  label: 'HARI INI',
  judul: 'Selamat Ulang Tahun, Marulin',
  tanggal: '28 JULI 2026',
  pesan: [
    'Hai, kamu. Iya, kamu yang lagi baca ini sambil (mungkin) senyum-senyum sendiri.',
    'Dari perkenalan yang nggak sengaja, sempat hilang kontak, LDR Kendari–Jogja yang rasanya nggak ada habisnya, sampai aku yang memutuskan pindah ke Kendari biar kita dekat — makasih udah jadi alasan terbaik dari setiap keputusan itu.',
    'Hari ini hari kamu. Aku cuma mau bilang: selamat ulang tahun. Semoga semua doa baik yang kamu simpan diam-diam dikabulkan, dan semoga aku selalu ada di setiap bab cerita kamu selanjutnya.',
    'Dengan cinta (dan sedikit begadang bikin website ini),',
  ],
  tandaTangan: '— Ari',
}

// ==== GALERI (FR4) ====
// Ganti `src` dengan path foto asli kamu, misalnya '/images/foto-kita-1.jpg'
// Taruh file fotonya di folder /public/images/
export const galeri = {
  judul: 'Galeri Kenangan',
  subjudul: 'Beberapa potongan cerita kita. (Ganti dengan foto asli ya!)',
  foto: [
    { src: '/images/memory-1.jpeg', caption: 'Pertama kali ketemu di Kendari' },
    { src: '/images/memory-2.png', caption: 'Ketemu lagi' },
    { src: '/images/memory-3.png', caption: '20.09.2024' },
    { src: '/images/memory-4.png', caption: 'Aku ✈ ke Kendari' },
    { src: '/images/memory-5.png', caption: 'Wisuda Ari!' },
    { src: '/images/memory-6.png', caption: 'Kendari, rumah baru' },
    { src: '/images/memory-7.png', caption: 'Tetap bertahan' },
    { src: '/images/memory-8.png', caption: 'Hari ini' },
  ],
}

// ==== AUDIO & PLAYLIST (FR7) ====
// Taruh file lagu kamu di /public/audio/lagu-latar.mp3
// (file audio berhak cipta harus disediakan sendiri — lihat catatan PRD)
export const audio = {
  src: '/audio/lagu-latar.mp3',
  judulLagu: 'Lagu Latar Kita',
}

export const playlist = {
  judul: 'Lagu-Lagu Buat Kamu',
  subjudul: 'Tiga lagu yang selalu kedengeran kayak cerita kita.',
  lagu: [
    {
      judul: 'Perjalanan Ini',
      artis: 'Sheila On 7',
      alasan: 'Tentang jarak dan waktu yang kita lewati bareng-bareng.',
    },
    {
      judul: 'Cinta Luar Biasa',
      artis: 'Andmesh',
      alasan: 'Tentang bertahan, bahkan waktu rasanya mau menyerah.',
    },
    {
      judul: 'Bertaut',
      artis: 'Nadin Amizah',
      alasan: 'Tentang dua hidup yang perlahan jadi saling terikat.',
    },
  ],
}

export const footer = {
  teks: 'Dibuat dengan sepenuh hati oleh Ari, untuk Marulin.',
  tahun: '2026',
}
