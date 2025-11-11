"use client";
import Image from "next/image";
import Link from "next/link";

export default function Components() {
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
                Komponen Dalam LVMDP
            </h1>
            {/* Incoming Section */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Incoming Section
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>ACB (Air Circuit Breaker) atau MCCB (Moulded Case Circuit Breaker): Sebagai pemutus utama dan pelindung terhadap arus lebih atau hubung singkat.</li>
                <li>Current Transformer (CT): Untuk mengukur arus melalui alat ukur.</li>
                <li>Voltage Transformer (VT): Untuk pengukuran tegangan.</li>
                <li>Power Meter / Multifunction Meter: Menampilkan parameter listrik (V, A, kW, PF, Hz).</li>
                <li>Indicator Lamp: Menunjukkan status tegangan tiap fasa (R, S, T).</li>
                <li>Selector Switch: Memilih parameter pengukuran (Volt, Ampere).</li>
            </ul>
            </section>

            {/* Busbar Section */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Busbar Section
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>Terbuat dari tembaga atau aluminium dengan isolasi memadai.</li>
                <li>Berfungsi sebagai jalur utama pembagi daya dari incoming ke outgoing.</li>
                <li>Biasanya terdiri dari 3 busbar fasa (R, S, T) dan 1 busbar netral (N), serta earth bar (PE).</li>
                <li>Didesain dengan kapasitas arus sesuai beban maksimum.</li>
            </ul>
            </section>

            {/* Outgoing Section */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Outgoing Section
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>MCCB/MCB: Sebagai pemutus sirkuit dan proteksi beban.</li>
                <li>Contactor + Overload Relay (jika kontrol motor): Untuk menghidupkan/mematikan motor otomatis.</li>
                <li>Terminal Kabel: Tempat koneksi kabel ke feeder atau panel lain.</li>
                <li>Label Identifikasi: Untuk menandai setiap jalur keluar agar mudah dikenali.</li>
            </ul>
            </section>

            {/* Protection & Control */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Protection & Control
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>Surge Arrester: Melindungi peralatan dari lonjakan tegangan (petir atau switching).</li>
                <li>ELCB/RCCB: Mendeteksi kebocoran arus ke tanah.</li>
                <li>Phase Failure Relay: Melindungi dari hilang salah satu fasa.</li>
                <li>Under/Over Voltage Relay: Melindungi dari tegangan tidak normal.</li>
                <li>Emergency Stop Button: Untuk mematikan sistem secara darurat.</li>
            </ul>
            </section>

            {/* Monitoring */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Monitoring
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>Voltmeter & Ammeter (Analog atau Digital).</li>
                <li>Frequency Meter.</li>
                <li>Power Factor Meter.</li>
                <li>Pilot Lamp (R, S, T).</li>
                <li>Energy Meter (kWh meter).</li>
            </ul>
            </section>

            {/* Safety Components */}
            <section>
            <h2 className="text-xl font-bold text-gray-900 bg-blue-100 inline-block px-3 py-1 rounded">
                Safety Components
            </h2>
            <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-800">
                <li>Panel Enclosure: Box logam (biasanya baja pelat) dengan cat powder coating.</li>
                <li>Cooling Fan / Ventilation: Untuk menjaga suhu panel.</li>
                <li>Grounding System: Menyambungkan semua bagian logam ke tanah (earth).</li>
                <li>Door Interlock System: Mengunci pintu agar tidak bisa dibuka saat panel bertegangan.</li>
                <li>Nameplate dan Warning Label.</li>
            </ul>
            </section>
        </div>
      </div>
    </div>
  );
}
