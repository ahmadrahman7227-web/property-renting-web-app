import {
  MapPin,
  Star,
  Users,
  BedDouble,
} from "lucide-react";

// =====================================
// Property Information
//
// Menampilkan informasi utama property
// =====================================

type PropertyInfoProps = {
  title: string;
  location: string;
  rating: number;
  description: string;
};

function PropertyInfo({
  title,
  location,
  rating,
  description,
}: PropertyInfoProps) {
  return (
    <section>
      {/* Property Name */}

      <h1 className="text-4xl font-bold text-[#1b1c19]">
        {title}
      </h1>

      {/* Location + Rating */}

      <div className="mt-4 flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          {location}
        </div>

        <div className="flex items-center gap-2">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          {rating}
        </div>
      </div>

      {/* Description */}

      <p className="mt-8 leading-relaxed text-gray-600">
        {description}
      </p>

      {/* Highlights */}

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-5 shadow-lg">
          <Users className="mb-3 text-[#006491]" />
          <h3 className="font-semibold">
            Up To 8 Guests
          </h3>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-lg">
          <BedDouble className="mb-3 text-[#006491]" />
          <h3 className="font-semibold">
            4 Luxury Bedrooms
          </h3>
        </div>
      </div>
    </section>
  );
}

export default PropertyInfo;