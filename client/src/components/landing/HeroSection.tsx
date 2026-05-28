import FadeUp from "../animations/FadeUp";
import Button from "../ui/Button";
import Container from "../ui/Container";
import BookingSearch from "./BookingSearch";
import heroImage from "../../assets/hero.jpg";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Property"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <Container className="relative z-20 flex min-h-[720px] flex-col justify-center pt-28 pb-16 md:min-h-screen md:justify-center md:pt-32 md:pb-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <FadeUp delay={0.1}>
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-xs">
              Trusted by 50,000+ travelers
            </span>
          </FadeUp>

          {/* Heading */}
          <FadeUp delay={0.2}>
            <h1 className="max-w-[320px] text-4xl font-bold leading-[0.95] tracking-tight text-white sm:max-w-xl sm:text-5xl md:max-w-4xl md:text-7xl lg:text-[110px]">
              Find Your
              <br />
              Perfect Stay
            </h1>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.3}>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-200 sm:max-w-lg sm:text-base md:max-w-2xl md:text-xl">
              Hand-curated luxury escapes and boutique stays designed
              for modern travelers seeking unforgettable experiences.
            </p>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.4}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                className="w-full py-4 text-sm shadow-2xl sm:w-auto sm:px-8 sm:py-5 sm:text-base"
              >
                Explore Properties
              </Button>

              <Button
                variant="outline"
                className="hidden border-white text-white hover:bg-white hover:text-black md:block"
              >
                View Destinations
              </Button>
            </div>
          </FadeUp>

          {/* Search */}
          <FadeUp delay={0.5}>
            <BookingSearch />
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;