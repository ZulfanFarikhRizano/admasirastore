"use client";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState("dark");
  const busy = useRef(false);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = async (e) => {
    if (busy.current) return;
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    const apply = () => {
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (err) {}
      setTheme(next);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduce) return apply();

    busy.current = true;
    root.classList.add("no-anim"); // cegah transisi warna ikut tertangkap di snapshot

    // Titik asal & jari-jari lingkaran dikirim ke CSS (lihat @keyframes theme-reveal)
    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, root.clientWidth - x), Math.max(y, root.clientHeight - y));
    root.style.setProperty("--vt-x", `${x}px`);
    root.style.setProperty("--vt-y", `${y}px`);
    root.style.setProperty("--vt-r", `${radius}px`);

    try {
      await document.startViewTransition(() => flushSync(apply)).finished;
    } catch (err) {
      // transisi dibatalkan; tema tetap sudah diterapkan
    } finally {
      root.classList.remove("no-anim");
      busy.current = false;
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className={`inline-flex h-9 w-9 items-center justify-center border border-line text-fg transition-colors duration-200 hover:border-muted ${className}`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
