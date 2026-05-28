import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import promoImage1 from "../../assets/promo-1.jpg";
import promoImage2 from "../../assets/promo-2.jpg";
import promoImage3 from "../../assets/promo-3.jpg";

const promotions = [
  {
    id: 1,
    title: "Azure Escapes",
    subtitle: "Luxury island retreats",
    image: promoImage1,
  },
  {
    id: 2,
    title: "Mountain Bliss",
    subtitle: "Premium alpine experiences",
    image: promoImage2,
  },
  {
    id: 3,
    title: "Modern Sanctuaries",
    subtitle: "Minimalist luxury stays",
    image: promoImage3,
  },
];

function PromoCarousel() {
  return (
    <section className="bg-[#fbf9f4] py-16 md:py-24">
      <Container>
        <SectionTitle
          label="Seasonal Offers"
          title="Curated Collections"
        />

        <div className="flex gap-5 overflow-x-auto pb-4 md:gap-8">
          {promotions.map((promo, index) => (
            <FadeUp
              key={promo.id}
              delay={index * 0.15}
            >
              <div className="group relative min-w-[260px] overflow-hidden rounded-[32px] md:min-w-[320px] md:rounded-[40px]">
                <div className="relative h-[380px] overflow-hidden rounded-[32px] md:h-[500px] md:rounded-[40px]">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                    <span className="mb-3 inline-block rounded-full bg-white/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md md:text-xs">
                      Featured
                    </span>

                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                      {promo.title}
                    </h3>

                    <p className="mt-2 text-sm text-gray-200 md:text-base">
                      {promo.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default PromoCarousel;