import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { SHOPEE_URL } from "@/lib/site";

// 7 foto saja, tanpa deskripsi. Ganti file di public/images/product-1.jpg ... product-7.jpg
const photos = [
  { id: 1, span: "lg:col-span-7 lg:row-span-2", ratio: "aspect-[4/3] lg:aspect-auto lg:min-h-[420px]" },
  { id: 2, span: "lg:col-span-5", ratio: "aspect-[4/3] lg:aspect-[16/10]" },
  { id: 3, span: "lg:col-span-5", ratio: "aspect-[4/3] lg:aspect-[16/10]" },
  { id: 4, span: "lg:col-span-4", ratio: "aspect-[4/3]" },
  { id: 5, span: "lg:col-span-4", ratio: "aspect-[4/3]" },
  { id: 6, span: "lg:col-span-4", ratio: "aspect-[4/3]" },
  { id: 7, span: "lg:col-span-12", ratio: "aspect-[4/3] lg:aspect-[21/8]" },
];

export default function Products() {
  return (
    <section id="produk" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">Produk unggulan</h2>
          <a
            href={SHOPEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 border border-line px-4 py-2.5 text-sm font-semibold text-fg transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <ShoppingBag size={16} />
            Lihat semua di Shopee
          </a>
        </div>

        <div className="mt-10 grid gap-px border border-line bg-line lg:grid-cols-12">
          {photos.map((p) => (
            <a
              key={p.id}
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Lihat produk ${p.id} di Shopee`}
              className={`group relative block overflow-hidden bg-bg ${p.ratio} ${p.span}`}
            >
              <Image
                src={`/images/product-${p.id}.jpg`}
                alt={`Produk Admasira Store Group ${p.id}`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 border-2 border-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
