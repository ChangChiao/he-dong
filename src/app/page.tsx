import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const PortfolioSection = dynamic(() => import("@/components/PortfolioSection"));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
