import Image from "next/image";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { SHOPEE_URL, WA_URL } from "@/lib/site";
import { categories } from "@/lib/categories";

export default function Hero() {
  return (
    <section id="beranda" className="border-b border-line bg-bg pt-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:gap-0">
        <div className="md:col-span-7 md:pb-20 md:pr-12">
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-fg sm:text-6xl lg:text-7xl">
            Perlengkapan ternak yang siap dipakai, dari pakan sampai kandang
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Perawatan kesehatan, makanan, aksesoris, dan kebersihan hewan dalam
            satu toko. Pesan langsung di Shopee atau tanyakan kebutuhan Anda
            lewat WhatsApp.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-accent-on transition-colors duration-200 hover:bg-accent-hover"
            >
              <ShoppingBag size={18} />
              Belanja via Shopee
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors duration-200 hover:border-muted"
            >
              <MessageCircle size={18} />
              Hubungi WhatsApp
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] border border-line bg-surface md:col-span-5 md:aspect-auto md:min-h-[460px]">
          <Image src="/images/hero.jpg" alt="Peternak merawat ternak di kandang" fill priority sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
      </div>

      <div className="mt-12 border-t border-line md:mt-0">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line border-x border-line md:grid-cols-4">
          {categories.slice(0, 4).map(({ icon: Icon, name }) => (
            <a
              key={name}
              href="#kategori"
              className="flex items-center gap-3 px-4 py-5 text-sm font-medium leading-tight text-body transition-colors duration-200 hover:bg-surface hover:text-accent"
            >
              <Icon size={20} className="shrink-0 text-accent" />
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
