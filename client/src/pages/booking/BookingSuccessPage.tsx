import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

// =====================================
// Booking Success Page
//
// Fungsi:
// - Menampilkan booking berhasil
// - Menampilkan booking reference
// - Navigasi ke My Bookings
// =====================================

function BookingSuccessPage() {
  const bookingId = "AAZ-2026-0001";

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1] pt-32">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[40px] bg-white p-8 text-center shadow-xl md:p-12">
            {/* Success Icon */}

            <CheckCircle2
              size={90}
              className="mx-auto text-green-500"
            />

            {/* Title */}

            <h1 className="mt-8 text-4xl font-bold text-[#1b1c19]">
              Booking Confirmed
            </h1>

            <p className="mt-4 text-gray-500">
              Thank you for choosing AurAzure.
              Your reservation has been successfully
              confirmed.
            </p>

            {/* Booking Reference */}

            <div className="mt-10 rounded-3xl bg-[#f8f6f1] p-6">
              <p className="text-sm text-gray-500">
                Booking Reference
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#006491]">
                {bookingId}
              </h2>
            </div>

            {/* Property Info */}

            <div className="mt-8">
              <h3 className="text-xl font-semibold">
                Villa Luminosa
              </h3>

              <p className="mt-2 text-gray-500">
                Bali, Indonesia
              </p>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">
              <Link to="/my-bookings">
                <Button
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  View My Bookings
                </Button>
              </Link>

              <Link to="/">
                <Button
                  variant="secondary"
                  className="w-full md:w-auto"
                >
                  Back To Home
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        <div className="mt-24">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default BookingSuccessPage;