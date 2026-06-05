import Button from "../ui/Button";
import { Link } from "react-router-dom";

// =====================================
// Price Breakdown
//
// Fungsi:
// - Menampilkan rincian harga
// - Total pembayaran
// =====================================

type PriceBreakdownProps = {
  price: number;
  nights: number;
};

function PriceBreakdown({
  price,
  nights,
}: PriceBreakdownProps) {
  const subtotal = price * nights;

  const serviceFee = 120;

  const tax = 80;

  const total =
    subtotal + serviceFee + tax;

  return (
    <section className="rounded-[32px] bg-white p-6 shadow-xl">
      {/* Title */}

      <h2 className="mb-6 text-2xl font-bold text-[#1b1c19]">
        Price Details
      </h2>

      {/* Breakdown */}

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>
            ${price} × {nights} nights
          </span>

          <span>${subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Service Fee</span>

          <span>${serviceFee}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>

          <span>${tax}</span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>${total}</span>
          </div>
        </div>
      </div>

      {/* Confirm Button */}

      <Link to="/booking/success">
  <Button
    variant="primary"
    className="mt-8 w-full py-4"
  >
    Confirm Booking
  </Button>
</Link>
    </section>
  );
}

export default PriceBreakdown;