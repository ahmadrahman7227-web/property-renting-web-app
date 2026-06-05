import DashboardProfile from "../../components/dashboard/DashboardProfile";
import DashboardQuickActions from "../../components/dashboard/DashboardQuickActions";
import DashboardRecentBookings from "../../components/dashboard/DashboardRecentBookings";
import DashboardStats from "../../components/dashboard/DashboardStats";

import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";

import Container from "../../components/ui/Container";

// =====================================
// Dashboard Page
//
// Dashboard utama user
// =====================================

function DashboardPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1] pt-32">
        <Container>
          {/* Header */}

          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="mt-3 text-gray-500">
              Manage your bookings and
              favorite stays.
            </p>
          </div>

          <div className="space-y-8">
            <DashboardProfile />

            <DashboardStats />

            <DashboardQuickActions />

            <DashboardRecentBookings />
          </div>
        </Container>

        <div className="mt-24">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default DashboardPage;