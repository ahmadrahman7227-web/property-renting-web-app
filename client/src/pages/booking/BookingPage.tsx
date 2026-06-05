import BookingForm from "../../components/booking/BookingForm";
import BookingSummary from "../../components/booking/BookingSummary";
import PriceBreakdown from "../../components/booking/PriceBreakdown";

import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";

import Container from "../../components/ui/Container";

import bookingImage1 from "../../assets/booking-page.jpg";

// =====================================
// Booking Page
//
// Fungsi:
// - Halaman booking property
// - Menampilkan form booking
// - Menampilkan ringkasan property
// - Menampilkan rincian harga
// =====================================

function BookingPage() {
  // =====================================
  // Dummy Data
  //
  // Nanti akan diganti API
  // =====================================

  const booking = {
    name: "Villa Luminosa",

    location: "Bali, Indonesia",

    image: bookingImage1,
      
    price: 850,

    rating: 4.9,

    nights: 5,
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1] pt-32">
        <Container>
          {/* =====================================
          Header
          ===================================== */}

          <div className="mb-10">
            <h1 className="text-4xl font-bold text-[#1b1c19]">
              Complete Your Booking
            </h1>

            <p className="mt-3 text-gray-500">
              Review your stay details and
              complete your reservation.
            </p>
          </div>

          {/* =====================================
          Main Layout
          ===================================== */}

          <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
            {/* Left Side */}

            <BookingForm />

            {/* Right Side */}

            <div className="space-y-8">
              <BookingSummary
                name={booking.name}
                location={booking.location}
                image={booking.image}
                price={booking.price}
                rating={booking.rating}
              />

              <PriceBreakdown
                price={booking.price}
                nights={booking.nights}
              />
            </div>
          </div>
        </Container>

        {/* Footer */}

        <div className="mt-24">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default BookingPage;