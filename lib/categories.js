import { Stethoscope, Wheat, PawPrint, SprayCan, Package, ShoppingBasket, BriefcaseMedical, LayoutGrid } from "lucide-react";

export const categories = [
  { name: "Perawatan Kesehatan Hewan", count: 266, icon: Stethoscope },
  { name: "Makanan Hewan", count: 54, icon: Wheat },
  { name: "Aksesoris Hewan Peliharaan", count: 5, icon: PawPrint },
  { name: "Kebersihan & Binatu", count: 2, icon: SprayCan },
  { name: "Bubble Wrap", count: 1, icon: Package },
  { name: "Bahan Pokok", count: 1, icon: ShoppingBasket },
  { name: "P3K", count: 1, icon: BriefcaseMedical },
];

export const allProducts = { name: "Semua produk", count: 330, icon: LayoutGrid };
