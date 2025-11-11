"use client";
import Image from "next/image";
import Link from "next/link";

export default function Diagram() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-900 text-black">

      {/* Tombol Home */}
      <Link
        href="/home"
        className="absolute top-5 left-5 bg-white rounded-full p-3 shadow-md hover:scale-105 transition-transform"
      >
        <Image src="/home.png" alt="Home" width={25} height={25} />
      </Link>

      {/* Kartu Profil */}
      <div className="flex flex-col items-center justify-center px-6 py-10 md:px-20 space-y-8">
       <Image
            src="/sld-lvmdp.jpg" // ganti dengan nama file background kamu
            alt="TVRI Background"
            width={5560}
            height={3670}
            style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
}
