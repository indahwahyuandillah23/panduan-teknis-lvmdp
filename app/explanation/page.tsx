"use client";
import Image from "next/image";
import Link from "next/link";

export default function Explanation() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-900 text-black">
      {/* Background image */}
      <Image
        src="/bg-explanation.jpg" // ganti dengan nama file background kamu
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
        {/* Box LVMDP */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
            Apa yang dimaksud LVMDP?
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">
            LVMDP (Low Voltage Main Distribution Panel) adalah panel listrik utama yang berfungsi untuk
            menerima daya listrik dari sumber (trafo, genset, atau PLN) dan kemudian mendistribusikannya ke
            panel-panel distribusi lain (sub panel) di seluruh sistem instalasi listrik tegangan rendah
            (umumnya 380/220 Volt, 3 phase).
          </p>
        </div>

        {/* Box SLD */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
            Apa itu SLD?
          </h2>
          <p className="text-gray-800 leading-relaxed text-justify">
            Single Line Diagram (SLD) adalah gambar skematik kelistrikan yang menampilkan alur distribusi daya
            listrik dari sumber (seperti trafo, genset, atau PLN) hingga ke beban, dengan hanya menggunakan satu
            garis untuk tiap jalur fasa. Walau sistem aslinya 3 fasa (R, S, T), pada SLD digambarkan cukup dengan
            satu garis tunggal untuk menyederhanakan tampilan, itulah sebabnya disebut “single line”.
          </p>
        </div>
      </div>
    </div>
  );
}
