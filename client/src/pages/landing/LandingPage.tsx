import CTASection from "../../components/landing/CTASection";
import FeaturedProperties from "../../components/landing/FeaturedProperties";
import Footer from "../../components/landing/Footer";
import HeroSection from "../../components/landing/HeroSection";
import Navbar from "../../components/landing/Navbar";
import PromoCarousel from "../../components/landing/PromoCarousel";
import Testimonials from "../../components/landing/Testimonials";
import WhyChooseUs from "../../components/landing/WhyChooseUs";

function LandingPage() {
  return (
    <main className="overflow-hidden bg-[#fbf9f4] text-[#1b1c19]">
      <Navbar />

      <HeroSection />

      <PromoCarousel />

      <FeaturedProperties />

      <WhyChooseUs />

      <Testimonials />

      <CTASection />

      <Footer />
    </main>
  );
}

export default LandingPage;