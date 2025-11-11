"use client";
import Image from "next/image";
import Link from "next/link";

export default function Maintenance() {
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
                Perawatan LVMDP
            </h1>

            <h2 className="text-xl font-bold text-gray-800 mb-2 bg-blue-100 inline-block px-3 py-1 rounded-md">
                Persiapan
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
            <li>
                Pastikan semua beban dan sumber listrik (PLN/Genset) diputus sesuai
                prosedur “Lock Out Tag Out (LOTO)”.
            </li>
            <li>
                Gunakan APD lengkap: helm, sarung tangan isolasi, sepatu safety,
                face shield.
            </li>
            <li>
                Siapkan alat dan instrumen uji, seperti:
                <ul className="list-disc pl-6">
                <li>Multimeter / Clamp meter</li>
                <li>Thermogun atau kamera thermal</li>
                <li>Kunci torsi</li>
                <li>Vacuum cleaner / kuas halus</li>
                <li>Obeng isolasi, kain kering</li>
                </ul>
            </li>
            <li>
                Periksa Single Line Diagram (SLD) untuk mengetahui posisi breaker dan
                rangkaian.
            </li>
            </ol>

            {/* Langkah Perawatan */}
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-2 bg-blue-100 inline-block px-3 py-1 rounded-md">
            Langkah Perawatan
            </h2>

            {/* 1. Pemeriksaan Visual */}
            <h3 className="font-semibold mt-4 mb-1">1. Pemeriksaan Visual</h3>
            <ul className="list-disc pl-6 space-y-1">
            <li>Periksa kondisi pintu panel, kunci, label identitas, dan indikator.</li>
            <li>
                Pastikan tidak ada bau hangus, percikan, atau warna kehitaman pada
                komponen.
            </li>
            <li>Pastikan lampu indikator phase (R–S–T) berfungsi.</li>
            <li>Cek grounding: pastikan sambungan aman dan tidak longgar.</li>
            <li>
                Pastikan ventilasi panel tidak tertutup debu atau serangga.
            </li>
            </ul>

            {/* 2. Pemeriksaan Mekanis dan Konektor */}
            <h3 className="font-semibold mt-4 mb-1">
            2. Pemeriksaan Mekanis dan Konektor
            </h3>
            <ul className="list-disc pl-6 space-y-1">
            <li>Kencangkan baut terminal dan koneksi kabel menggunakan kunci torsi.</li>
            <li>Bersihkan permukaan busbar dari debu dan karat (gunakan kain kering).</li>
            <li>Periksa mekanisme breaker (ACB/MCCB) apakah smooth saat dioperasikan.</li>
            <li>Pastikan interlock mekanis dan elektrik berfungsi sempurna.</li>
            </ul>

            {/* 3. Pemeriksaan Elektris */}
            <h3 className="font-semibold mt-4 mb-1">3. Pemeriksaan Elektris</h3>
            <ul className="list-disc pl-6 space-y-1">
            <li>Ukur tegangan antar fase (R–S–T) dan tegangan fase-netral.</li>
            <li>Ukur arus beban tiap feeder dengan clamp meter.</li>
            <li>Lakukan uji fungsi proteksi MCCB/ACB jika memiliki fasilitas test trip.</li>
            <li>Periksa kontak magnetik / relay jika ada tanda panas berlebih.</li>
            </ul>

            {/* 4. Pembersihan */}
            <h3 className="font-semibold mt-4 mb-1">4. Pembersihan</h3>
            <ul className="list-disc pl-6 space-y-1">
            <li>
                Gunakan vacuum cleaner atau blower untuk membersihkan debu di ruang
                panel.
            </li>
            <li>Hindari penggunaan air atau cairan pembersih konduktif.</li>
            <li>Lap bagian isolator dengan kain lembab (tidak basah).</li>
            <li>Bersihkan filter udara jika panel memiliki ventilasi fan/filter.</li>
            </ul>

            {/* 5. Pengujian Tambahan */}
            <h3 className="font-semibold mt-4 mb-1">5. Pengujian Tambahan</h3>
            <ul className="list-disc pl-6 space-y-1">
            <li>
                Lakukan pengukuran tahanan isolasi antar fasa dan fasa ke grounding.
            </li>
            <li>Uji fungsi sistem ATS melalui simulasi otomatis dan manual.</li>
            <li>Periksa kinerja grounding system dengan earth tester.</li>
            <li>
                Evaluasi kinerja proteksi dan koordinasi dengan diagram SLD.
            </li>
            </ul>
        </div>
      </div>
    </div>
  );
}
