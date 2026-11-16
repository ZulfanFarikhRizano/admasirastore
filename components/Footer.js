import { Phone, ShoppingBag, MessageCircle } from "lucide-react";
import { BRAND, SHOPEE_URL, WA_URL, WA_DISPLAY } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="kontak" className="border-t border-line bg-bg">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <h2 className="font-display text-3xl font-bold leading-tight text-fg md:text-4xl">Butuh rekomendasi produk untuk kandang Anda?</h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-accent-on transition-colors hover:bg-accent-hover">
              <MessageCircle size={16} />
              Hubungi WhatsApp
            </a>
            <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-line px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-muted">
              <ShoppingBag size={16} />
              Belanja via Shopee
            </a>
          </div>
        </div>
        <div className="md:col-span-3 md:col-start-8">
          <h3 className="font-display text-lg font-bold text-fg">Kontak</h3>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-accent">
            <Phone size={16} />
            {WA_DISPLAY}
          </a>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-display text-lg font-bold text-fg">Toko online</h3>
          <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-accent">
            <ShoppingBag size={16} />
            Shopee
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted">
          © {new Date().getFullYear()} {BRAND}. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
