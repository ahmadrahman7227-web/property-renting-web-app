import { MapPin, Star } from "lucide-react";

// =====================================
// Booking Summary
//
// Fungsi:
// - Menampilkan informasi property
// - Ringkasan sebelum booking
// =====================================

type BookingSummaryProps = {
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
};

function BookingSummary({
  name,
  location,
  image,
  price,
  rating,
}: BookingSummaryProps) {
  return (
    <section className="overflow-hidden rounded-[32px] bg-white shadow-xl">
      {/* =====================================
      Property Image
      ===================================== */}

      <img
        src={image}
        alt={name}
        className="h-[220px] w-full object-cover"
      />

      {/* =====================================
      Content
      ===================================== */}

      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#1b1c19]">
          {name}
        </h2>

        <div className="mt-3 flex items-center gap-2 text-gray-500">
          <MapPin size={16} />

          <span>{location}</span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-medium">
            {rating}
          </span>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500">
            Starting From
          </p>

          <h3 className="text-3xl font-bold text-[#006491]">
            ${price}
            <span className="ml-1 text-base font-medium text-gray-500">
              /night
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default BookingSummary;