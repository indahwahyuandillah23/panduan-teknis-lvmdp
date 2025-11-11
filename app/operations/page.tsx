"use client";
import Image from "next/image";
import Link from "next/link";

export default function Operations() {
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
                Prosedur Operasional LVMDP
            </h1>

            {/* Persiapan */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Persiapan
            </h2>

            <ol className="list-decimal pl-6 mt-3 space-y-4 text-gray-800">
                <li>
                <b>Pastikan keselamatan:</b>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Gunakan APD lengkap.</li>
                    <li>Pastikan area panel bersih, kering, dan bebas hambatan.</li>
                    <li>Pastikan semua pintu panel tertutup rapat kecuali yang sedang diinspeksi.</li>
                </ul>
                </li>

                <li>
                <b>Pemeriksaan awal:</b>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Periksa indikator tegangan, lampu phase (R–S–T).</li>
                    <li>Periksa tegangan incoming (dari trafo atau genset).</li>
                    <li>Periksa kondisi MCB / MCCB / ACB utama dalam posisi OFF.</li>
                    <li>Pastikan semua beban (outgoing feeder) dalam posisi OFF.</li>
                </ul>
                </li>
            </ol>
            </section>

            {/* Menyalakan LVMDP */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Menyalakan LVMDP
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>Pastikan sumber daya utama (PLN / Genset) dalam kondisi normal.</li>
                <li>Tutup breaker utama (Main MCCB/ACB) perlahan dan pastikan indikator menyala.</li>
                <li>Cek tegangan keluaran pada busbar: pastikan nilai antar fasa 380 V dan fasa-netral 220 V.</li>
                <li>Nyalakan feeder outgoing satu per satu sesuai urutan prioritas beban.</li>
                <li>Pastikan tidak ada kelebihan beban.</li>
            </ul>
            </section>

            {/* Mematikan LVMDP */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Mematikan LVMDP
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>Matikan beban outgoing satu per satu (mulai dari beban tidak prioritas).</li>
                <li>Setelah semua beban OFF, matikan breaker utama (Main MCCB/ACB).</li>
                <li>Putuskan sumber daya (PLN / Genset) jika perlu dilakukan perawatan.</li>
                <li>Pasang tanda “Sedang Perawatan” di pintu panel bila diperlukan.</li>
            </ul>
            </section>

            {/* Perpindahan Sumber */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Perpindahan Sumber
            </h2>
            <ol className="list-decimal pl-6 mt-3 space-y-4 text-gray-800">
                <li>Pastikan sistem ATS (Automatic Transfer Switch) berfungsi normal.</li>
                <li>
                Jika manual:
                <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Matikan semua feeder outgoing.</li>
                    <li>Matikan breaker utama PLN.</li>
                    <li>Nyalakan breaker genset setelah tegangan genset stabil.</li>
                    <li>Aktifkan feeder outgoing kembali sesuai urutan prioritas.</li>
                    <li>Kembalikan ke sumber PLN setelah PLN normal kembali.</li>
                </ul>
                </li>
            </ol>
            </section>

            {/* Keselamatan */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Keselamatan
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>Dilarang mengoperasikan panel tanpa APD.</li>
                <li>Jangan menyalakan dua sumber (PLN dan genset) bersamaan.</li>
                <li>Pastikan grounding berfungsi baik sebelum operasi.</li>
                <li>Setiap perubahan wiring atau breaker harus didokumentasikan di SLD.</li>
            </ul>
            </section>

            {/* Dokumentasi */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Dokumentasi
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>Form checklist harian LVMDP.</li>
                <li>Catatan perpindahan sumber PLN dari Genset.</li>
                <li>Log tegangan dan arus setiap shift.</li>
                <li>Laporan gangguan atau anomali panel.</li>
            </ul>
            </section>
        </div>
      </div>
    </div>
  );
}
