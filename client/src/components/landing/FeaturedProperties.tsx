import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import PropertyCard from "../ui/PropertyCard";
import SectionTitle from "../ui/SectionTitle";

import villaImage1 from "../../assets/villa-1.jpg";
import villaImage2 from "../../assets/villa-2.jpg";

const properties = [
  {
    id: 1,
    name: "Villa Luminosa",
    location: "Bali, Indonesia",
    price: "$850",
    image: villaImage1,
  },
  {
    id: 2,
    name: "Zen Sanctuary",
    location: "Kyoto, Japan",
    price: "$1200",
    image: villaImage2,
  },
];

function FeaturedProperties() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle
          label="Featured Properties"
          title="Discover Premium Stays"
        />

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {properties.map((property, index) => (
            <FadeUp
              key={property.id}
              delay={index * 0.2}
            >
              <PropertyCard
                image={property.image}
                name={property.name}
                location={property.location}
                price={property.price}
              />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProperties;