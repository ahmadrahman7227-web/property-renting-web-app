import { Heart, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";

// =====================================
// Wishlist Card
//
// Fungsi:
// - Menampilkan property favorit
// =====================================

type WishlistCardProps = {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
};

function WishlistCard({
  id,
  name,
  location,
  image,
  rating,
  price,
}: WishlistCardProps) {
  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">
      {/* Image */}

      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-[260px] w-full object-cover"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg">
          <Heart
            size={18}
            className="fill-red-500 text-red-500"
          />
        </button>
      </div>

      {/* Content */}

      <div className="p-6">
        <h2 className="text-2xl font-bold">
          {name}
        </h2>

        <div className="mt-2 flex items-center gap-2 text-gray-500">
          <MapPin size={16} />
          {location}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          {rating}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h3 className="text-2xl font-bold text-[#006491]">
              ${price}
              <span className="text-base text-gray-500">
                /night
              </span>
            </h3>
          </div>

          <Link to={`/properties/${id}`}>
            <Button variant="primary">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;