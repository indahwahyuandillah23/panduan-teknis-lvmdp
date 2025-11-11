"use client";
import Image from "next/image";
import Link from "next/link";

export default function Safety() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-900 text-black">
      {/* Background image */}
      <Image
        src="/kelistrikan.jpg" // ganti dengan nama file background kamu
        alt="TVRI Background"
        fill
        className="object-cover opacity-70"
        priority
      />

      {/* Tombol Home */}
      <Link
        href="/home"
        className="absolute top-5 left-5 z-50 bg-white rounded-full p-3 shadow-md hover:scale-105 transition-transform"
      >
        <Image src="/home.png" alt="Home" width={25} height={25} />
      </Link>

      {/* Kartu Profil */}
      <div className="flex flex-col items-center justify-center px-6 py-10 md:px-20 space-y-8">
         <div className="relative z-10 bg-white shadow-xl rounded-2xl p-8 md:p-12 w-full max-w-4xl space-y-10">

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
                Keamanan LVMDP
            </h1>

            {/* Bagian Perlengkapan */}
            <h2 className="text-xl font-bold text-gray-800 mb-2 bg-blue-100 inline-block px-3 py-1 rounded-md">
            Perlengkapan
            </h2>
            <ul className="list-disc pl-6 space-y-1">
            <li>Helm keselamatan</li>
            <li>Sarung tangan isolasi</li>
            <li>Sepatu safety berisolasi</li>
            <li>Kacamata atau face shield</li>
            <li>Baju kerja berbahan katun tebal (anti-statis)</li>
            <li>
                Tanda pengaman “Dilarang Mengoperasikan Saat Sedang Bekerja”
            </li>
            </ul>

            {/* Bagian Prosedur Keamanan */}
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2 bg-blue-100 inline-block px-3 py-1 rounded-md">
            Prosedur Keamanan
            </h2>

            {/* 1. Sebelum Menyalakan Panel */}
            <h3 className="font-semibold mt-4 mb-1">
            1. Sebelum Menyalakan Panel
            </h3>
            <ul className="list-disc pl-6 space-y-1">
            <li>Pastikan semua penutup panel terpasang dan terkunci.</li>
            <li>Periksa indikator tegangan, tidak ada arus bocor.</li>
            <li>Pastikan grounding system dalam kondisi baik.</li>
            <li>
                Gunakan SLD sebagai acuan untuk mengetahui posisi breaker dan feeder.
            </li>
            <li>
                Pastikan tidak ada alat atau benda logam tertinggal di dalam panel.
            </li>
            </ul>

            {/* 2. Selama Panel Beroperasi */}
            <h3 className="font-semibold mt-4 mb-1">
            2. Selama Panel Beroperasi
            </h3>
            <ul className="list-disc pl-6 space-y-1">
            <li>Dilarang membuka pintu panel utama tanpa izin.</li>
            <li>Jangan menyentuh bagian konduktor atau terminal terbuka.</li>
            <li>Awasi indikator tegangan, arus, dan suhu panel.</li>
            <li>
                Jangan menambah atau mengubah sambungan kabel saat panel
                bertegangan.
            </li>
            <li>
                Segera laporkan suara berdengung, bau terbakar, atau loncatan listrik
                ke atasan.
            </li>
            </ul>

            {/* 3. Saat Pemeliharaan / Perbaikan */}
            <h3 className="font-semibold mt-4 mb-1">
            3. Saat Pemeliharaan / Perbaikan
            </h3>
            <ul className="list-disc pl-6 space-y-1">
            <li>
                Matikan sumber utama (PLN / genset) dan pastikan zero voltage dengan
                alat ukur.
            </li>
            <li>Terapkan prosedur LOTO (Lock Out Tag Out):</li>
            <ul className="list-disc pl-8 space-y-1">
                <li>Kunci breaker dalam posisi OFF.</li>
                <li>
                Pasang label “Sedang Dikerjakan, Jangan Dihidupkan”.
                </li>
            </ul>
            <li>
                Lepaskan kapasitor atau komponen yang menyimpan energi sebelum
                disentuh.
            </li>
            <li>Gunakan alat ukur dan peralatan yang terkalibrasi.</li>
            <li>
                Setelah selesai, pastikan semua koneksi terpasang kembali dengan
                benar.
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
