import { CalendarDays, MapPin } from "lucide-react";

// =====================================
// My Booking Card
//
// Fungsi:
// - Menampilkan booking user
// =====================================

type MyBookingCardProps = {
  image: string;
  property: string;
  location: string;
  bookingId: string;
  checkIn: string;
  checkOut: string;
  status: string;
};

function MyBookingCard({
  image,
  property,
  location,
  bookingId,
  checkIn,
  checkOut,
  status,
}: MyBookingCardProps) {
  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">
      {/* Image */}

      <img
        src={image}
        alt={property}
        className="h-[220px] w-full object-cover"
      />

      {/* Content */}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">
              {property}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-gray-500">
              <MapPin size={16} />

              {location}
            </div>
          </div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            {status}
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">
              Booking ID
            </p>

            <h3 className="font-semibold">
              {bookingId}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Stay Duration
            </p>

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />

              <span>
                {checkIn} - {checkOut}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBookingCard;