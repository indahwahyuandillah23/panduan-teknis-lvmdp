import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/cover.png" // pastikan file disimpan di public/
        alt="Gedung TVRI Sumatera Barat"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-5">
          Panduan Teknis LVMDP
        </h1>
        <h2 className="text-3xl md:text-4xl mb-13 tracking-wider">
          TVRI Stasiun Sumatera Barat
        </h2>

        <a
          href="/home"
          className="bg-green-800 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-full font-medium transition-all duration-300"
        >
          GET STARTED →
        </a>

      </div>

      {/* Optional: dark overlay layer (kalau mau lebih gelap) */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
