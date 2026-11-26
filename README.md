# 🏫 Kolase SMKS Budi Mulya

Aplikasi web **pembuat kolase foto interaktif, carousel Instagram/TikTok, dan video animasi** berbasis HTML5 Canvas — dirancang khusus untuk kebutuhan dokumentasi **SMKS Budi Mulya Kasiman**.

> Dibuat dengan teknologi murni HTML5, CSS3, dan JavaScript — tanpa framework eksternal, langsung buka di browser.

---

## ✨ Fitur Utama

| Fitur | Keterangan |
|-------|-----------|
| 📐 **Puluhan Template Layout** | Kolase 1–9 foto, strip film, mosaik, editorial, buku terbuka, tangga |
| 🎞️ **Carousel Multi-Slide** | Buat hingga banyak slide sekaligus untuk Instagram/TikTok carousel |
| 🎬 **Ekspor Video** | Rekam langsung dari kanvas menjadi video MP4/WebM |
| 🎵 **Musik & Waveform** | Potong musik, sinkronkan dengan ketukan, fade in/out |
| 🏷️ **Logo Sekolah** | Upload logo SMKS Budi Mulya sebagai watermark di setiap slide |
| ✍️ **Stiker & Teks Bebas** | Tambah teks, stiker emas, selotip, garis dekoratif |
| 🎨 **Filter & Efek Foto** | Zoom, geser, hitam-putih, kecerahan, kontras per kotak |
| 💾 **Auto-Save & Multi-Proyek** | Simpan banyak proyek (per kelas/acara) di perangkat lokal |
| ↩️ **Undo / Redo** | `Ctrl+Z` / `Ctrl+Y` |
| 📱 **PWA — Install di HP** | Bisa diinstal dan dipakai offline |

---

## 🎯 Kegunaan untuk Sekolah

- 📸 **Dokumentasi Kegiatan** — Upacara, MPLS, Outing Class, Praktik Kerja
- 🎓 **Kolase Kelulusan** — Foto wisuda per kelas / per jurusan
- 📢 **Konten Media Sosial** — Carousel IG/TikTok sekolah
- 📋 **PPDB & Profil Sekolah** — Presentasi visual ke calon siswa baru
- 🏆 **Apresiasi Guru & Siswa** — Kolase hari guru, prestasi, dll.

---

## 🚀 Cara Menjalankan Lokal

Cukup buka `index.html` di browser modern:
- ✅ Google Chrome (direkomendasikan)
- ✅ Microsoft Edge
- ✅ Firefox
- ⚠️ Safari (fitur rekam video terbatas)

---

## 📁 Struktur File

```
smks-budi-mulya-kolase/
├── index.html        ← Aplikasi utama (semua fitur ada di sini)
├── manifest.json     ← Konfigurasi PWA (install di HP)
├── sw.js             ← Service Worker (offline support)
├── icon-192.png      ← Logo/ikon aplikasi 192×192
├── icon-512.png      ← Logo/ikon aplikasi 512×512
├── README.md         ← Panduan ini
└── .gitignore        ← File yang dikecualikan dari Git
```

---

## ⚙️ Kustomisasi

### Ganti Logo Sekolah (Icon Aplikasi)
Ganti `icon-192.png` dan `icon-512.png` dengan logo SMKS Budi Mulya:
- Ukuran: **192×192 px** dan **512×512 px**
- Format: **PNG** (transparan opsional)

### Ganti Warna Tema
Edit baris berikut di `index.html` (sekitar baris 14):
```css
:root {
  --bg: #001833;   /* latar gelap biru tua */
  --ac: #f5a623;   /* aksen oranye kuning */
}
```

### Ganti Teks Default
Edit baris berikut di `index.html` (sekitar baris 197, bagian `const S={...}`):
```js
title: 'SMKS BUDI MULYA',
sub:   'Kelas XII TKJ - T.A. 2024/2025',
foot:  'DOKUMENTASI SMKS BUDI MULYA',
```

---

## 📄 Lisensi

Dikembangkan untuk keperluan internal **SMKS Budi Mulya Kasiman**.  
Basis kode: Template Kolase HTML5 Canvas — bebas dimodifikasi untuk kebutuhan sekolah.

---

*Dibuat dengan ❤️ untuk SMKS Budi Mulya Kasiman*
