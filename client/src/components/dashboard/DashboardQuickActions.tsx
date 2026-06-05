import { Link } from "react-router-dom";

import Button from "../ui/Button";

// =====================================
// Dashboard Quick Actions
//
// Shortcut menu user
// =====================================

function DashboardQuickActions() {
  return (
    <section className="rounded-[32px] bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <Link to="/my-bookings">
          <Button
            variant="primary"
            className="w-full"
          >
            My Bookings
          </Button>
        </Link>

        <Link to="/wishlist">
          <Button
            variant="secondary"
            className="w-full"
          >
            Wishlist
          </Button>
        </Link>

        <Button
          variant="outline"
          className="w-full"
        >
          Settings
        </Button>
      </div>
    </section>
  );
}

export default DashboardQuickActions;