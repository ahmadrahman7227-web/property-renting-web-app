import {
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  Users,
} from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";

function BookingSearch() {
  return (
    <div className="relative z-30 mt-8 w-full md:absolute md:bottom-10 md:left-1/2 md:mt-0 md:-translate-x-1/2">
      <Container>
        <div className="grid grid-cols-1 gap-3 rounded-[28px] bg-white p-4 shadow-2xl md:grid-cols-2 md:gap-4 md:border md:border-white/20 md:bg-white/75 md:backdrop-blur-2xl lg:grid-cols-5 lg:rounded-[32px] lg:p-6">
          {/* Destination */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Destination
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#f8f8f8] px-4 py-4">
              <MapPin
                className="text-[#006491]"
                size={18}
              />

              <select className="w-full bg-transparent text-sm outline-none">
                <option>Bali, Indonesia</option>
                <option>Kyoto, Japan</option>
                <option>Santorini, Greece</option>
              </select>
            </div>
          </div>

          {/* Check In */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Check In
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#f8f8f8] px-4 py-4">
              <CalendarDays
                className="text-[#006491]"
                size={18}
              />

              <input
                type="date"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Duration
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#f8f8f8] px-4 py-4">
              <Clock3
                className="text-[#006491]"
                size={18}
              />

              <select className="w-full bg-transparent text-sm outline-none">
                <option>2 Nights</option>
                <option>5 Nights</option>
                <option>1 Week</option>
              </select>
            </div>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Guests
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#f8f8f8] px-4 py-4">
              <Users
                className="text-[#006491]"
                size={18}
              />

              <select className="w-full bg-transparent text-sm outline-none">
                <option>2 Guests</option>
                <option>4 Guests</option>
                <option>Family</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <Button
            variant="primary"
            className="flex items-center justify-center gap-3 py-4 text-sm shadow-xl"
          >
            <Search size={18} />
            Find Property
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default BookingSearch;