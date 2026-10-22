# Triforion Technology — Company Profile & Web Application

Repositori resmi website profil perusahaan dan platform konversi digital **Triforion Technology**. Dibangun dengan performa tinggi, desain responsif modern, tipografi presisi, dan arsitektur kode berbasis React 18, TypeScript, dan Tailwind CSS v4.

---

## 🚀 Tech Stack

- **Framework & Core**: [React 18.3](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first engine with `@theme` block)
- **Routing**: [React Router DOM v7](https://reactrouter.com/) (`HashRouter`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/si`)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Struktur Direktori

```text
./
├── public/                 # Static assets & web icons
├── src/
│   ├── components/
│   │   ├── common/         # Komponen reusable (LegalModal, SectionHeader)
│   │   ├── layout/         # Shell global (Navbar, Footer, RootLayout)
│   │   └── sections/       # Komponen seksi Beranda (Hero, Marquee, Services, Portfolio, Contact)
│   ├── data/               # Data statis (articles.ts)
│   ├── hooks/              # Custom hooks (useDocumentTitle, useScrollReveal)
│   ├── pages/              # Halaman rute (HomePage, BlogPage, ArticlePage, CareersPage, NotFoundPage)
│   ├── types/              # Deklarasi antarmuka TypeScript
│   ├── App.tsx             # Root router & ScrollManager
│   ├── index.css           # Design tokens, keyframes, utilities
│   └── main.tsx            # Entry point React DOM
├── index.html              # HTML shell & font definitions
├── package.json            # Manifest dependensi & scripts
├── tsconfig.json           # Konfigurasi TypeScript compiler
└── vite.config.ts          # Konfigurasi Vite bundler
```

---

## 🛠️ Menjalankan Project

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18.x atau yang lebih baru
- `npm` versi 9.x atau yang lebih baru

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Development
```bash
npm run dev
```
Aplikasi dapat diakses melalui browser pada `http://localhost:5173`.

### 3. Pemeriksaan Kode (Linting)
```bash
npm run lint
```

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build yang telah dioptimasi dan di-minify akan tersedia di direktori `dist/`.

### 5. Preview Hasil Build
```bash
npm run preview
```

---

## 🧭 Rute Halaman

| Rute | Komponen | Deskripsi |
| :--- | :--- | :--- |
| `/` | `HomePage` | Halaman landing utama, layanan, proses, portofolio, dan kontak |
| `/blog` | `BlogPage` | Katalog artikel, wawasan, dan riset teknologi/bisnis |
| `/blog/:slug` | `ArticlePage` | Tampilan baca artikel lengkap dan rekomendasi artikel terkait |
| `/careers` | `CareersPage` | Informasi kultur kerja, lowongan, dan lamaran spontan |
| `*` | `NotFoundPage` | Penanganan rute 404 jika URL tidak ditemukan |

---

## 📄 Lisensi & Hak Cipta

© 2025 **Triforion Technology**. All rights reserved.
