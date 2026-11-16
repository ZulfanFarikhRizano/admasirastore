import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata = {
  title: "Admasira Store Group | Perlengkapan Peternakan",
  description: "Perawatan kesehatan, makanan, aksesoris, dan kebersihan hewan. Belanja via Shopee atau konsultasi lewat WhatsApp.",
};

// Pasang tema sebelum render agar tidak berkedip. Default: gelap.
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
