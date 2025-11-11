"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ClipboardList, Cog, Shield, Wrench, FileText, Share2 } from "lucide-react";
import { link } from "fs";
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ nama: "", jabatan: "", komentar: "" });
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 3;

  // Ambil data dari API dengan pagination
  const fetchFeedback = async (pageNum = 1) => {
    const res = await fetch(`/api/feedback?page=${pageNum}&limit=${perPage}`);
    const data = await res.json();
    setFeedbacks(data.items);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchFeedback(page);
  }, [page]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ nama: "", jabatan: "", komentar: "" });
    setLoading(false);
    fetchFeedback(page);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-gray-800">
      {/* Header */}
      <div className="relative w-full h-64 md:h-80">
        <Image src="/tvri-sumbar.png" alt="TVRI Sumbar" fill className="object-cover" />
        <div className="absolute top-0 left-0 w-full flex justify-between p-4">
          <Image src="/logo-tvri.png" alt="TVRI" width={100} height={70} />
          <Image src="/berakhlak.png" alt="BerAKHLAK" width={150} height={70} />
        </div>
      </div>

      {/* Selamat Datang */}
      <div className="bg-blue-100 p-6 rounded-xl text-center max-w-3xl mt-6">
        <h1 className="text-2xl font-bold mb-2">  Selamat datang di halaman utama Panduan Teknis LVMDP TVRI Stasiun Sumatera Barat.</h1>
        <p className="text-gray-700 text-sm">
Halaman ini dirancang sebagai pusat informasi bagi para teknisi, operator, dan pihak terkait untuk memahami sistem distribusi daya listrik yang digunakan di lingkungan TVRI Stasiun Sumatera Barat.
Melalui panduan ini, Anda dapat mempelajari diagram, fungsi, serta prosedur operasional dan perawatan Low Voltage Main Distribution Panel (LVMDP).
Silakan pilih menu di bawah untuk mulai menjelajahi topik yang Anda butuhkan.</p>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 max-w-3xl">
        {[
          { icon: FileText, text: "Penjelasan Singkat", link: "/explanation" },
          { icon: Share2, text: "Single Line Diagram", link: "/diagram" },
          { icon: Cog, text: "Komponen LVMDP", link: "/components" },
          { icon: ClipboardList, text: "Prosedur Operasional", link: "/operations" },
          { icon: Wrench, text: "Perawatan LVMDP", link:"/maintenance" },
          { icon: Shield, text: "Keamanan LVMDP", link: "/safety" },
        ].map(({ icon: Icon, text, link }) => (
          <button
            key={text}
            onClick={() => link && router.push(link)}
            className="flex flex-col items-center justify-center bg-blue-100 hover:bg-blue-200 transition-all rounded-xl py-6 shadow-sm"
          >
            <Icon className="w-10 h-10 text-black mb-2" />
            <span className="font-semibold text-black">{text}</span>
          </button>
        ))}
      </div>

      {/* Form Kritik & Saran */}
      <div className="bg-blue-100 mt-10 p-6 rounded-xl w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4">Kritik dan Saran</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block font-semibold">Nama</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Jabatan</label>
            <input
              type="text"
              name="jabatan"
              value={formData.jabatan}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block font-semibold">Komentar</label>
            <textarea
              name="komentar"
              value={formData.komentar}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded p-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Submit"}
          </button>
        </form>
      </div>

      {/* Komentar List */}
      <div className="bg-blue-100 mt-6 p-4 rounded-xl w-full max-w-3xl space-y-4">
        {feedbacks.length === 0 ? (
          <p className="text-center text-gray-600">Belum ada komentar.</p>
        ) : (
          feedbacks.map((item) => (
            <div key={item.id} className="bg-white p-3 rounded-lg shadow-sm">
              <p className="font-bold text-gray-800">{item.nama}</p>
              <p className="text-sm text-blue-500">{item.jabatan}</p>
              <p className="text-gray-700 mt-2">{item.komentar}</p>
            </div>
          ))
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <span className="text-sm text-gray-700">
              Halaman {page} dari {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 mb-10">
        <a className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2" href="/profile">
          <Image src="/user.png" alt="Profil" width={20} height={20} />
          Profil Peserta
        </a>

        <a className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2" href="https://www.instagram.com/tvrisumbar/" target="_blank">
          <Image src="/instagram.png" alt="TVRI Sumbar" width={20} height={20} />
          TVRI Sumbar
        </a>

        <a className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2" href="https://x.com/tvrisumbar" target="_blank">
          <Image src="/twitter.png" alt="Tutup" width={20} height={20} />
          TVRI Sumbar
        </a>

        <a className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2" href="https://www.youtube.com/@tvrisumatrabarat" target="_blank">
          <Image src="/youtube.png" alt="Play" width={20} height={20} />
          TVRI Sumbar
        </a>
      </div>
    </div>
  );
}
