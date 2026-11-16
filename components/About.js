import { Handshake, ShieldCheck, MessageCircle } from "lucide-react";

const points = [
  { icon: Handshake, title: "Bermitra dengan peternak", text: "Pilihan produk disusun dari kebutuhan nyata di kandang, bukan sekadar daftar katalog." },
  { icon: ShieldCheck, title: "Dipilih selektif", text: "Kami hanya menjual perawatan, makanan, dan perlengkapan hewan yang kami yakin berguna di lapangan." },
  { icon: MessageCircle, title: "Konsultasi dulu", text: "Bingung memilih? Tanyakan lewat WhatsApp, lalu pesan di Shopee dengan lebih yakin." },
];

export default function About() {
  return (
    <section id="tentang" className="border-b border-line bg-surface py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">Toko yang tumbuh bersama peternak</h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Admasira Store Group melayani peternak skala rumahan hingga usaha
            yang sedang berkembang. Kami bekerja dekat dengan para peternak
            mitra, sehingga setiap produk punya fungsi yang jelas di kandang.
          </p>
        </div>
        <ul className="border-t border-line md:col-span-7 md:border-t-0">
          {points.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 border-b border-line py-6 md:first:pt-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-accent">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="font-semibold text-fg">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
