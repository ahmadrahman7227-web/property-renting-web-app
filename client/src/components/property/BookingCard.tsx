import {
  CalendarDays,
  Users,
} from "lucide-react";

import Button from "../ui/Button";
import { Link } from "react-router-dom";

// =====================================
// Booking Card
//
// Sidebar booking property
// =====================================

type BookingCardProps = {
  price: number;
};

function BookingCard({
  price,
}: BookingCardProps) {
  return (
    <aside className="sticky top-28 rounded-[32px] bg-white p-6 shadow-xl">
      {/* ==========================
      Price
      ========================== */}

      <div className="mb-8">
        <p className="text-sm text-gray-500">
          Starting From
        </p>

        <h2 className="text-4xl font-bold text-[#006491]">
          ${price}
          <span className="text-base text-gray-500">
            /night
          </span>
        </h2>
      </div>

      {/* ==========================
      Check In
      ========================== */}

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-600">
          Check In
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-4">
          <CalendarDays
            size={18}
            className="text-[#006491]"
          />

          <input
            type="date"
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* ==========================
      Guests
      ========================== */}

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-600">
          Guests
        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-4">
          <Users
            size={18}
            className="text-[#006491]"
          />

          <select className="w-full outline-none">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>4 Guests</option>
            <option>6 Guests</option>
            <option>8 Guests</option>
          </select>
        </div>
      </div>

      {/* ==========================
      CTA
      ========================== */}

      <Link to="/booking">
  <Button
    variant="primary"
    className="w-full py-4"
  >
    Book Now
  </Button>
</Link>
    </aside>
  );
}

export default BookingCard;