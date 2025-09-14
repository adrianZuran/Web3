# Video Background Guide

## Cara Menggunakan Video Background

### 1. Menambahkan Video

- Ganti file `/public/background-video.mp4` dengan video yang Anda inginkan
- Format yang didukung: MP4, WebM, OGG
- Rekomendasi:
  - Resolusi: Minimal 1920x1080 (Full HD)
  - Durasi: 10-30 detik (akan di-loop otomatis)
  - Orientasi: Landscape (horizontal)
  - Ukuran file: Maksimal 10MB untuk performa optimal

### 2. Fitur yang Sudah Ditambahkan

#### Video Background dengan Paralax

- Video akan bergerak dengan efek paralax saat user scroll
- Video diatur dengan `brightness(0.3)` dan `contrast(1.2)` untuk readability
- Auto-play, muted, dan loop untuk pengalaman yang smooth

#### Overlay untuk Readability

- Gradient overlay dari atas ke bawah untuk memastikan teks tetap readable
- Efek paralax tambahan dengan radial gradient

#### Optimasi Performa

- Menggunakan `will-change: transform` untuk smooth animation
- Video di-scale 1.1x untuk efek parallax yang lebih dramatis
- Fallback gradient jika video tidak tersedia

### 3. Kustomisasi

#### Mengubah Kecepatan Paralax

```tsx
// Di dalam style video, ubah nilai 0.3 untuk mengubah kecepatan
transform: `translateY(${scrollY * 0.3}px) scale(1.1)`;

// Nilai yang lebih besar = paralax lebih cepat
// Nilai yang lebih kecil = paralax lebih lambat
```

#### Mengubah Brightness/Contrast

```tsx
// Ubah nilai brightness dan contrast
filter: "brightness(0.3) contrast(1.2)";

// brightness: 0.0 = hitam total, 1.0 = normal
// contrast: 1.0 = normal, >1.0 = lebih kontras
```

#### Mengubah Overlay

```tsx
// Ubah opacity dan warna overlay
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

// Ubah nilai /40, /20, /60 untuk mengubah opacity
// Ubah black menjadi warna lain jika diinginkan
```

### 4. Tips untuk Video yang Optimal

1. **Konten Video**: Pilih video yang tidak terlalu sibuk agar tidak mengganggu teks
2. **Warna**: Hindari warna yang terlalu terang atau kontras tinggi
3. **Gerakan**: Video dengan gerakan halus bekerja lebih baik untuk paralax
4. **Durasi**: Video pendek (10-15 detik) lebih baik untuk loading time

### 5. Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (dengan `playsInline`)
- Mobile: Full support dengan optimasi touch

### 6. Troubleshooting

#### Video Tidak Muncul

- Pastikan file video ada di `/public/background-video.mp4`
- Cek format video (MP4 direkomendasikan)
- Cek ukuran file (maksimal 10MB)

#### Performa Lambat

- Kompres video dengan tool seperti HandBrake
- Kurangi resolusi video
- Gunakan format WebM untuk file yang lebih kecil

#### Video Tidak Auto-play

- Pastikan video sudah di-mute (browser requirement)
- Tambahkan `playsInline` untuk mobile
- Cek autoplay policy browser
