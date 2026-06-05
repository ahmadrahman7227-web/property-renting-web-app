import {
  CalendarDays,
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";

// =====================================
// Booking Form
//
// Fungsi:
// - Input data booking
// - Data tamu
// - Data tanggal menginap
// =====================================

function BookingForm() {
  return (
    <section className="rounded-[32px] bg-white p-6 shadow-xl md:p-8">
      {/* Title */}

      <h2 className="mb-8 text-2xl font-bold text-[#1b1c19]">
        Guest Information
      </h2>

      <div className="grid gap-5">
        {/* Full Name */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-600">
            Full Name
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-4">
            <User
              size={18}
              className="text-[#006491]"
            />

            <input
              type="text"
              placeholder="John Doe"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-600">
            Email Address
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-4">
            <Mail
              size={18}
              className="text-[#006491]"
            />

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-600">
            Phone Number
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-4">
            <Phone
              size={18}
              className="text-[#006491]"
            />

            <input
              type="tel"
              placeholder="+62 812 xxxx xxxx"
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Dates */}

        <div className="grid gap-5 md:grid-cols-2">
          <div>
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

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Check Out
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
        </div>

        {/* Guests */}

        <div>
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
      </div>
    </section>
  );
}

export default BookingForm;