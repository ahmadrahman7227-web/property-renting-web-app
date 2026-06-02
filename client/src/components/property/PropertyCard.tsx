import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/ui/Button";

// =====================================
// Property Card
//
// Fungsi:
// - Menampilkan 1 property
// - Menampilkan rating
// - Menampilkan harga
// - Mengarahkan user ke detail property
// =====================================

type PropertyCardProps = {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
};

function PropertyCard({
  id,
  name,
  location,
  price,
  rating,
  image,
}: PropertyCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[32px]
        bg-white
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* =====================================
      Property Image
      ===================================== */}

      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="
            h-[260px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* =====================================
        Gradient Overlay
        Memberikan kesan luxury pada image
        ===================================== */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* =====================================
        Rating Badge
        ===================================== */}

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold shadow-lg backdrop-blur-xl">
          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <span>{rating}</span>
        </div>
      </div>

      {/* =====================================
      Property Content
      ===================================== */}

      <div className="p-6">
        {/* Property Name */}

        <div className="mb-4">
          <h2 className="line-clamp-1 text-2xl font-bold text-[#1b1c19]">
            {name}
          </h2>

          {/* Location */}

          <div className="mt-2 flex items-center gap-2 text-gray-500">
            <MapPin size={16} />

            <span className="text-sm">
              {location}
            </span>
          </div>
        </div>

        {/* Price + CTA */}

        <div className="flex items-center justify-between gap-4">
          {/* Price */}

          <div>
            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h3 className="text-2xl font-bold text-[#006491]">
              ${price.toLocaleString()}
              <span className="ml-1 text-base font-medium text-gray-500">
                /night
              </span>
            </h3>
          </div>

          {/* =====================================
          View Detail Button

          Mengarahkan user ke:
          /properties/:id
          ===================================== */}

          <Link to={`/properties/${id}`}>
            <Button variant="primary">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;