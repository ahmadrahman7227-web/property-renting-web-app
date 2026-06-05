// =====================================
// Dashboard Recent Bookings
//
// Booking terakhir user
// =====================================

function DashboardRecentBookings() {
  const bookings = [
    "Villa Luminosa",
    "Zen Sanctuary",
    "Ocean Breeze Villa",
  ];

  return (
    <section className="rounded-[32px] bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Bookings
      </h2>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking}
            className="rounded-2xl bg-[#f8f6f1] p-4"
          >
            {booking}
          </div>
        ))}
      </div>
    </section>
  );
}

export default DashboardRecentBookings;