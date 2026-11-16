"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, ShoppingBag, Phone, Leaf } from "lucide-react";
import { BRAND, WA_URL, SHOPEE_URL, WA_DISPLAY } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang kami" },
  { id: "kategori", label: "Kategori" },
  { id: "produk", label: "Produk" },
  { id: "kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const progress = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      let idx = 0;
      links.forEach((l, i) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) idx = i;
      });
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) idx = links.length - 1;
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (e, id) => {
    e.preventDefault();
    document.body.style.overflow = "";
    setOpen(false);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
  };

  const stagger = (i) => ({
    transition: "transform .5s cubic-bezier(.2,.7,.2,1), opacity .5s",
    transitionDelay: open ? `${200 + i * 60}ms` : "0ms",
    transform: open ? "none" : "translateY(24px)",
    opacity: open ? 1 : 0,
  });

  return (
    <>
      <div ref={progress} className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left scale-x-0 bg-accent" />

      {/* Bar floating: sama di semua ukuran layar */}
      <header className="fixed inset-x-0 top-3 z-[70] px-3">
        <div
          className={`mx-auto flex h-14 max-w-6xl items-center justify-between border px-4 transition-colors duration-300 ${
            scrolled || open ? "border-line bg-bg" : "border-line/70 bg-bg/40"
          }`}
        >
          <a href="#beranda" onClick={(e) => go(e, "beranda")} className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center bg-accent text-accent-on">
              <Leaf size={16} strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-fg">{BRAND}</span>
          </a>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center gap-2 border border-accent px-4 text-sm font-semibold text-accent transition-colors duration-200 hover:bg-accent hover:text-accent-on sm:inline-flex"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="menu"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="inline-flex h-9 w-9 items-center justify-center gap-3 border border-line text-sm font-medium text-fg transition-colors duration-200 hover:border-muted sm:w-auto sm:px-3"
            >
              <span className="hidden w-10 text-left sm:inline-block">{open ? "Tutup" : "Menu"}</span>
              <span className="relative block h-4 w-4">
                <span className="absolute left-0 top-1/2 -mt-px h-0.5 w-4 bg-current transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "translateY(-4px)" }} />
                <span className="absolute left-0 top-1/2 -mt-px h-0.5 w-4 bg-current transition-transform duration-300" style={{ transform: open ? "rotate(-45deg)" : "translateY(4px)" }} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu layar penuh: universal untuk desktop dan mobile */}
      <div
        id="menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        aria-hidden={!open}
        className="fixed inset-0 z-[60] overflow-y-auto bg-bg"
        style={{
          visibility: open ? "visible" : "hidden",
          clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          transition: `clip-path .5s cubic-bezier(.7,0,.2,1), visibility 0s linear ${open ? "0s" : ".5s"}`,
        }}
      >
        <div className="mx-auto flex min-h-full max-w-6xl flex-col px-5 pb-8 pt-28 md:grid md:grid-cols-12 md:gap-10">
          <nav className="border-t border-line md:col-span-7" aria-label="Navigasi utama">
            {links.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => go(e, l.id)}
                style={stagger(i)}
                className="group flex items-center gap-4 border-b border-line py-4 md:py-5"
              >
                <span className={`h-2 w-2 shrink-0 bg-accent transition-opacity duration-200 ${active === i ? "opacity-100" : "opacity-0"}`} />
                <span
                  className={`font-display text-4xl font-bold leading-none transition-colors duration-200 group-hover:text-accent sm:text-5xl md:text-6xl ${
                    active === i ? "text-accent" : "text-fg"
                  }`}
                >
                  {l.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-10 flex flex-col gap-3 md:col-span-4 md:col-start-9 md:mt-0 md:justify-end md:pb-1">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={stagger(5)}
              className="flex items-center justify-center gap-2 bg-accent px-5 py-3.5 text-sm font-semibold text-accent-on hover:bg-accent-hover"
            >
              <MessageCircle size={18} />
              Hubungi WhatsApp
            </a>
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={stagger(6)}
              className="flex items-center justify-center gap-2 border border-line px-5 py-3.5 text-sm font-semibold text-fg hover:border-muted"
            >
              <ShoppingBag size={18} />
              Belanja via Shopee
            </a>
            <p style={stagger(7)} className="mt-2 flex items-center gap-2 text-sm text-muted">
              <Phone size={15} />
              {WA_DISPLAY}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
