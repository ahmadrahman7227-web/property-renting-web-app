// =====================================
// Dashboard Stats
//
// Statistik user
// =====================================

function DashboardStats() {
  const stats = [
    {
      title: "Bookings",
      value: 12,
    },

    {
      title: "Wishlist",
      value: 8,
    },

    {
      title: "Reviews",
      value: 5,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-[32px] bg-white p-6 text-center shadow-xl"
        >
          <h3 className="text-4xl font-bold text-[#006491]">
            {stat.value}
          </h3>

          <p className="mt-2 text-gray-500">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default DashboardStats;