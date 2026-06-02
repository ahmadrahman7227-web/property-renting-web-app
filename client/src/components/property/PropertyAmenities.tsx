import {
  Wifi,
  Car,
  Coffee,
  Waves,
  Wind,
  ShieldCheck,
} from "lucide-react";

// =====================================
// Property Amenities
//
// Menampilkan fasilitas property
// =====================================

function PropertyAmenities() {
  const amenities = [
    {
      icon: Wifi,
      name: "High Speed WiFi",
    },

    {
      icon: Car,
      name: "Free Parking",
    },

    {
      icon: Coffee,
      name: "Breakfast Included",
    },

    {
      icon: Waves,
      name: "Infinity Pool",
    },

    {
      icon: Wind,
      name: "Air Conditioning",
    },

    {
      icon: ShieldCheck,
      name: "24/7 Security",
    },
  ];

  return (
    <section className="mt-12">
      {/* ==========================
      Section Title
      ========================== */}

      <h2 className="mb-6 text-2xl font-bold text-[#1b1c19]">
        Amenities
      </h2>

      {/* ==========================
      Amenities Grid
      ========================== */}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-lg"
            >
              <Icon
                size={22}
                className="text-[#006491]"
              />

              <span className="font-medium">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PropertyAmenities;