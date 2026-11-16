import { ChevronRight } from "lucide-react";
import { SHOPEE_URL } from "@/lib/site";
import { categories, allProducts } from "@/lib/categories";

function Row({ item, highlight = false }) {
  const Icon = item.icon;
  return (
    <li>
      <a
        href={SHOPEE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-4 border-b border-line px-4 py-4 transition-colors duration-200 hover:bg-surface sm:px-5 ${
          highlight ? "bg-surface" : ""
        }`}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-accent">
          <Icon size={20} />
        </span>
        <span className="flex-1 font-medium text-fg">{item.name}</span>
        <span className="text-sm tabular-nums text-muted">{item.count} produk</span>
        <ChevronRight size={18} className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent" />
      </a>
    </li>
  );
}

export default function Categories() {
  return (
    <section id="kategori" className="border-b border-line bg-bg py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">Kategori produk</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            Sama seperti yang ada di toko Shopee kami. Pilih kategori untuk langsung belanja.
          </p>
        </div>
        <ul className="border-x border-t border-line md:col-span-8">
          {categories.map((c) => (
            <Row key={c.name} item={c} />
          ))}
          <Row item={allProducts} highlight />
        </ul>
      </div>
    </section>
  );
}
