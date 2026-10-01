# Portofolio Isro' Nur Salaam 🚀

Website portofolio pribadi modern dan futuristik untuk **Isro' Nur Salaam**, siswa Rekayasa Perangkat Lunak dari **SMK Negeri 2 Yogyakarta** dan developer di **@SUCODE-TEAM**.

Desain terinspirasi dari estetika futuristik minimalis (Ethan Cole style UI), memadukan HUD reticle cybernetic, tipografi modern, kartu proyek interaktif, serta tema Terang & Gelap (*Light & Dark Mode*).

---

## ✨ Fitur Utama

- 🎨 **Desain Futuristik & Elegan**: Mengadopsi aksen cybernetic HUD, siluet AI, dan elemen geometris 3D.
- 👤 **Foto Profil Personal**: Foto Isro' Nur Salaam terintegrasi halus dengan efek radar reticle dan lencana lokasi (*Yogyakarta, ID*).
- 💼 **Showcase Proyek Nyata GitHub**:
  - [**MonitoringTrash**](https://github.com/Isronursalaam/MonitoringTrash) — Dashboard IoT pemantauan sampah pintar (*Live di Vercel: [monitoring-trash.vercel.app](https://monitoring-trash.vercel.app)*).
  - [**SCsearch**](https://github.com/Isronursalaam/SCsearch) — Portal mesin pencari cerdas (*Live di Vercel: [scsearch.vercel.app](https://scsearch.vercel.app)*).
  - [**360proto**](https://github.com/Isronursalaam/360proto) — Visualisasi interaktif prototipe 3D (*Live di Vercel: [360proto.vercel.app](https://360proto.vercel.app)*).
  - [**JarvisV2**](https://github.com/Isronursalaam/JarvisV2) — Asisten AI dan otomasi berbasis Python.
  - [**WebsiteSMK2YK**](https://github.com/Isronursalaam/WebsiteSMK2YK) — Konsep portal sekolah SMK Negeri 2 Yogyakarta.
  - [**SeleksiLKS**](https://github.com/Isronursalaam/SeleksiLKS) — Sistem seleksi Lomba Kompetensi Siswa (*LKS*).
- 🔗 **Integrasi Tautan GitHub**: Tautan langsung ke profil resmi [github.com/Isronursalaam](https://github.com/Isronursalaam) di header, hero, kartu proyek, info kontak, dan footer.
- 🌓 **Toggle Mode Terang & Gelap**: Berpindah tema secara instan dengan penyimpanan preferensi lokal (*localStorage*).
- 📱 **100% Responsif**: Tata letak mulus di layar smartphone (*mobile*), tablet, laptop, dan monitor desktop.
- ⚡ **Tech Stack Super Ringan**:
  - **HTML5 Semantic**
  - **Vanilla CSS3** (CSS Variables, Flexbox, Grid) — *Zero heavy dependencies / No bloated frameworks*
  - **Vanilla JavaScript (ES6)** — Ringan, cepat, dan hemat resource.

---

## 📂 Struktur File

```
d:\Isro\Portofolio/
├── index.html                   # Halaman utama portofolio
├── README.md                    # Dokumentasi proyek
└── assets/
    ├── css/
    │   └── style.css            # Styling responsif, tema Light/Dark & animasi HUD
    ├── js/
    │   └── main.js              # Interaktivitas, filter proyek, theme switch & sync GitHub
    └── images/
        ├── isro-portrait.png    # Foto profil Isro (cutout transparan)
        ├── cyber-ai.png         # Siluet motif AI latar belakang
        ├── robot-hand.png       # Grafis tangan robot pada My Process
        ├── isometric-cube.png   # Elemen 3D geometris pada form kontak
        ├── project-*.jpg        # Preview mockup proyek
        └── ...
```

---

## 🚀 Cara Menjalankan Secara Lokal

Cukup buka file `index.html` langsung di browser, atau jalankan server lokal ringan:

### Menggunakan Python:
```bash
python -m http.server 3000
```
Lalu buka [http://localhost:3000](http://localhost:3000) di browser.

### Menggunakan Node.js / npx:
```bash
npx serve .
```

---

## 🌐 Cara Deploy ke GitHub Pages

1. Buat repositori baru di GitHub (misal: `portfolio` atau `Isronursalaam.github.io`).
2. Push semua file ke branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/Isronursalaam/portfolio.git
   git push -u origin main
   ```
3. Di pengaturan repositori GitHub (`Settings` -> `Pages`), pilih sumber branch `main` / `root` dan simpan. Website Anda akan langsung online dan bisa diakses gratis di seluruh dunia!
