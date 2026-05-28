import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import testimonial1 from "../../assets/testimonials-1.jpg";
import testimonial2 from "../../assets/testimonials-2.jpg";
import testimonial3 from "../../assets/testimonials-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    location: "Stayed in Bali",
    image: testimonial1,
    review:
      "AurAzure made booking luxury properties effortless. The experience felt modern, smooth, and premium.",
  },
  {
    id: 2,
    name: "Daniel Chen",
    location: "Stayed in Kyoto",
    image: testimonial2,
    review:
      "The property quality exceeded expectations. Everything looked exactly like the photos.",
  },
  {
    id: 3,
    name: "Olivia Martinez",
    location: "Stayed in Santorini",
    image: testimonial3,
    review:
      "Beautiful interface, seamless booking, and truly premium accommodations.",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionTitle
          label="Guest Reviews"
          title="What Travelers Say"
          center
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeUp
              key={testimonial.id}
              delay={index * 0.2}
            >
              <div className="rounded-[28px] border border-black/5 bg-[#faf8f5] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Stars */}
                <div className="mb-5 flex gap-1 text-[#a43b2c]">
                  ★ ★ ★ ★ ★
                </div>

                {/* Review */}
                <p className="text-sm leading-relaxed text-gray-600">
                  "{testimonial.review}"
                </p>

                {/* User */}
                <div className="mt-7 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold text-[#1b1c19]">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {testimonial.location}
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

export default Testimonials;