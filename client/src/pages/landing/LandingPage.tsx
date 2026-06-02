import CTASection from "../../components/landing/CTASection";
import FeaturedProperties from "../../components/landing/FeaturedProperties";
import Footer from "../../components/landing/Footer";
import HeroSection from "../../components/landing/HeroSection";
import Navbar from "../../components/landing/Navbar";
import PromoCarousel from "../../components/landing/PromoCarousel";
import Testimonials from "../../components/landing/Testimonials";
import WhyChooseUs from "../../components/landing/WhyChooseUs";

// =====================================
// Landing Page
//
// Fungsi:
// - Halaman utama AurAzure
// - Menampilkan seluruh section landing page
// - Menjadi target navigasi navbar
// =====================================

function LandingPage() {
  return (
    <main className="overflow-hidden bg-[#fbf9f4] text-[#1b1c19]">
      {/* =====================================
      Navbar
      ===================================== */}

      <Navbar />

      {/* =====================================
      Home Section
      Target:
      Navbar -> Home
      ===================================== */}

      <section id="home">
        <HeroSection />
      </section>

      {/* =====================================
      Destinations Section
      Target:
      Navbar -> Destinations
      ===================================== */}

      <section id="destinations">
        <PromoCarousel />
      </section>

      {/* =====================================
      Featured Properties
      Tidak perlu target navbar
      Karena sudah memiliki page sendiri:
      /properties
      ===================================== */}

      <FeaturedProperties />

      {/* =====================================
      About Section
      Target:
      Navbar -> About
      ===================================== */}

      <section id="about">
        <WhyChooseUs />
      </section>

      {/* =====================================
      Testimonials
      ===================================== */}

      <Testimonials />

      {/* =====================================
      CTA Section
      ===================================== */}

      <CTASection />

      {/* =====================================
      Contact Section
      Target:
      Navbar -> Contact
      ===================================== */}

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}

export default LandingPage;