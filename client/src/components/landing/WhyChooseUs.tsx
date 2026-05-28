import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import {
  BadgeDollarSign,
  CalendarCheck,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: BadgeDollarSign,
    title: "Best Price Guarantee",
    description:
      "Find premium properties with transparent and competitive pricing.",
  },
  {
    icon: CalendarCheck,
    title: "Instant Booking",
    description:
      "Real-time room availability and seamless reservation process.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every property is carefully reviewed for quality and reliability.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Dedicated customer support whenever you need assistance.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <FadeUp>
          <SectionTitle
            label="Why Choose AurAzure"
            title="Experience Luxury Without Complexity"
            description="We simplify premium property renting with elegant design, trusted listings, and a seamless booking experience."
            center
          />
        </FadeUp>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeUp
                key={index}
                delay={index * 0.12}
              >
                <div className="group rounded-[28px] border border-gray-100 bg-[#fbf9f4] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl md:rounded-[32px] md:p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006491]/10 text-[#006491] md:mb-6 md:h-16 md:w-16">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    {feature.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;






