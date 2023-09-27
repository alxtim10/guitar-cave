import Featured from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/homepage/Hero";
import Navbar from "@/components/navigation/Navbar";
import StoreSection from "@/components/store/StoreSection";

export default function Home() {


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <StoreSection />
        <Footer />
      </main>
    </>
  );
}
