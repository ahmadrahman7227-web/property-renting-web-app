import { Link } from "react-router-dom";

import FadeUp from "../animations/FadeUp";
import Button from "../ui/Button";
import Container from "../ui/Container";

import BookingSearch from "./BookingSearch";

import heroImage from "../../assets/hero.jpg";

// =====================================
// Hero Section
//
// Fungsi:
// - Landing Hero
// - CTA ke Property List
// - CTA ke Destinations
// - Menampilkan Booking Search
// =====================================

function HeroSection() {
  function goToDestinations() {
    const section =
      document.getElementById(
        "destinations"
      );

    section?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* =====================================
      Background Image
      ===================================== */}

      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Property"
          className="h-full w-full object-cover"
        />

        {/* Premium Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* =====================================
      Hero Content
      ===================================== */}

      <Container className="relative z-20 flex min-h-[720px] flex-col justify-center pt-28 pb-16 md:min-h-screen md:pt-32 md:pb-40">
        <div className="max-w-5xl">
          {/* Badge */}

          <FadeUp delay={0.1}>
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-xs">
              Trusted by 50,000+ Travelers
            </span>
          </FadeUp>

          {/* Heading */}

          <FadeUp delay={0.2}>
            <h1 className="max-w-[340px] text-4xl font-bold leading-[0.95] tracking-tight text-white sm:max-w-xl sm:text-5xl md:max-w-4xl md:text-7xl lg:text-[110px]">
              Find Your
              <br />
              Perfect Stay
            </h1>
          </FadeUp>

          {/* Description */}

          <FadeUp delay={0.3}>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-200 sm:max-w-lg sm:text-base md:max-w-2xl md:text-xl">
              Hand-curated luxury escapes and
              boutique stays designed for modern
              travelers seeking unforgettable
              experiences.
            </p>
          </FadeUp>

          {/* =====================================
          Trust Metrics
          ===================================== */}

          <FadeUp delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-8 text-white">
              <div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  50K+
                </h3>

                <p className="text-sm text-gray-300">
                  Travelers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  250+
                </h3>

                <p className="text-sm text-gray-300">
                  Properties
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  4.9★
                </h3>

                <p className="text-sm text-gray-300">
                  Average Rating
                </p>
              </div>
            </div>
          </FadeUp>

          {/* =====================================
          CTA Buttons
          ===================================== */}

          <FadeUp delay={0.4}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Explore Properties */}

              <Link to="/properties">
                <Button
                  variant="primary"
                  className="w-full py-4 text-sm shadow-2xl sm:w-auto sm:px-8 sm:py-5 sm:text-base"
                >
                  Explore Properties
                </Button>
              </Link>

              {/* View Destinations */}

              <Button
                variant="outline"
                onClick={goToDestinations}
                className="hidden border-white text-white hover:bg-white hover:text-black md:block"
              >
                View Destinations
              </Button>
            </div>
          </FadeUp>

          {/* =====================================
          Booking Search
          ===================================== */}

          <FadeUp delay={0.5}>
            <BookingSearch />
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;