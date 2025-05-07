# 📋 Penampilan Data Tugas

Website sederhana untuk menampilkan dan mengelola daftar tugas (todo list) menggunakan React, Tailwind CSS, dan SweetAlert2. Proyek ini juga dilengkapi fitur dark mode, form validasi, filter tugas, penghapusan tugas, dan tombol aksi yang muncul saat item diklik.

---

## 🚀 Fitur Utama

- Tambah tugas dengan validasi (minimal 3 karakter)  
- SweetAlert2 notifikasi: error & success  
- Dark mode toggle  
- Filter tugas: Semua / Selesai / Belum  
- Checklist tugas (klik untuk tandai selesai)  
- Tombol “Selesai” & “Hapus” hanya muncul saat item diklik  
- Responsif & rapi dengan Tailwind CSS  

---

## 🛠️ Instalasi

1. Clone repo:  
   ```bash
   git clone https://github.com/username/penampilan-data-tugas.git
   cd penampilan-data-tugas
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan aplikasi:

   ```bash
   npm start
   ```

   Atau bisa juga langsung klik *debug* di bagian "script" pada `package.json`.

4. Buka di browser:
   [http://localhost:3000](http://localhost:3000)

---

📂 **Struktur Project**

```
penampilan-data-tugas/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

🔧 **Cara Kustomisasi**

* Ubah judul di `App.jsx` pada elemen `<h1 className="…">…</h1>`.
* Atur aturan validasi di fungsi `handleAddTask`.
* Sesuaikan warna tombol di `index.css` atau lewat class Tailwind langsung di JSX.

---

## 🎬 Video Demo

📹 [Tautan ke Video Demo](https://youtu.be/e51Iq1xyDJI)

```