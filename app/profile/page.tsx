"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProfilPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-900 text-black">
      {/* Background image */}
      <Image
        src="/cover.png"
        alt="TVRI Background"
        fill
        className="object-cover opacity-70 z-0"
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
      <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-xl max-w-5xl w-[90%]">
        {/* Foto */}
        <div className="flex-shrink-0">
          <Image
            src="/pas-poto.png"
            alt="Sugiri Retno Aji"
            width={250}
            height={250}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Informasi */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Sugiri Retno Aji</h1>
          <p className="text-gray-700 mt-1 mb-4">199612162025041003</p>

          <ul className="text-gray-800 space-y-2">
            <li><b>Tempat/Tanggal Lahir</b> : Malang, 16 Desember 1996</li>
            <li><b>Jenis Kelamin</b> : Laki-laki</li>
            <li><b>Pangkat/Golongan</b> : Pengatur Muda / IIA</li>
            <li><b>Jabatan</b> : Asisten Teknisi Siaran Pemula</li>
            <li><b>Unit Kerja</b> : TVRI Stasiun Sumatera Barat</li>
            <li><b>No. Telp</b> : 0895413956325</li>
            <li><b>Email</b> : sugiriretno@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
