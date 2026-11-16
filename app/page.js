import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <Products />
      </main>
      <Footer />
    </>
  );
}
