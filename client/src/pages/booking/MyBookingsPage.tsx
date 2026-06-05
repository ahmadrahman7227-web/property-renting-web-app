import MyBookingCard from "../../components/booking/MyBookingCard";

import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";

import Container from "../../components/ui/Container";

import myBookingImage1 from "../../assets/mybooking-1.jpg";
import myBookingImage2 from "../../assets/mybooking-2.jpg";

// =====================================
// My Bookings Page
//
// Fungsi:
// - Menampilkan seluruh booking user
// =====================================

function MyBookingsPage() {
  const bookings = [
    {
      id: 1,
      property: "Villa Luminosa",
      location: "Bali, Indonesia",
      bookingId: "AAZ-2026-0001",
      checkIn: "10 Jun 2026",
      checkOut: "15 Jun 2026",
      status: "Confirmed",
      image: myBookingImage1,
    },

    {
      id: 2,
      property: "Zen Sanctuary",
      location: "Kyoto, Japan",
      bookingId: "AAZ-2026-0002",
      checkIn: "20 Jul 2026",
      checkOut: "25 Jul 2026",
      status: "Confirmed",
      image: myBookingImage2,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1] pt-32">
        <Container>
          {/* Header */}

          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              My Bookings
            </h1>

            <p className="mt-3 text-gray-500">
              View and manage your upcoming stays.
            </p>
          </div>

          {/* Booking List */}

          <div className="space-y-8">
            {bookings.map((booking) => (
              <MyBookingCard
                key={booking.id}
                image={booking.image}
                property={booking.property}
                location={booking.location}
                bookingId={booking.bookingId}
                checkIn={booking.checkIn}
                checkOut={booking.checkOut}
                status={booking.status}
              />
            ))}
          </div>
        </Container>

        <div className="mt-24">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default MyBookingsPage;