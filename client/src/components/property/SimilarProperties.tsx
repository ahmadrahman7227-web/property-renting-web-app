import { MapPin, Star } from "lucide-react";

import Button from "../ui/Button";

import similarImage1 from "../../assets/similar-1.jpg";
import similarImage2 from "../../assets/similar-2.jpg";
import similarImage3 from "../../assets/similar-3.jpg";

// =====================================
// Similar Properties
//
// Property rekomendasi
// =====================================

function SimilarProperties() {
  const properties = [
    {
      id: 1,
      name: "Ocean Breeze Villa",
      location: "Santorini",
      rating: 4.8,
      image: similarImage1,
    },

    {
      id: 2,
      name: "Luxury Palm Resort",
      location: "Dubai",
      rating: 4.9,
      image: similarImage2,
    },

    {
      id: 3,
      name: "Aurora Cabin",
      location: "Iceland",
      rating: 4.7,
      image: similarImage3,
    },
  ];

  return (
    <section className="mt-20">
      {/* Section Title */}

      <h2 className="mb-8 text-3xl font-bold text-[#1b1c19]">
        Similar Properties
      </h2>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="overflow-hidden rounded-[32px] bg-white shadow-xl"
          >
            <img
              src={property.image}
              alt={property.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">
                {property.name}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-gray-500">
                <MapPin size={16} />
                {property.location}
              </div>

              <div className="mt-2 flex items-center gap-2">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
                {property.rating}
              </div>

              <Button
                variant="primary"
                className="mt-5 w-full"
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SimilarProperties;