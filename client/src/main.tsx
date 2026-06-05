import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import "./index.css";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LandingPage from "./pages/landing/LandingPage";
import PropertyListPage from "./pages/property/PropertyListPage";
import PropertyDetailPage from "./pages/property/PropertyDetailPage";
import BookingPage from "./pages/booking/BookingPage";
import BookingSuccessPage from "./pages/booking/BookingSuccessPage";
import MyBookingsPage from "./pages/booking/MyBookingsPage";
import WishlistPage from "./pages/wishlist/WishlistPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* Register */} 
          <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* Property List */}
        <Route
          path="/properties"
          element={<PropertyListPage />}
        />

        {/* Property Detail */}
        <Route
          path="/properties/:id"
          element={<PropertyDetailPage />}
        />

        {/* Booking */}
        <Route
          path="/booking"
          element={<BookingPage />}
        />

        {/* Booking Success */}
        <Route
          path="/booking/success"
          element={<BookingSuccessPage />}
        />

        {/* My Bookings */}
        <Route
          path="/my-bookings"
          element={<MyBookingsPage />}
        />

        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={<WishlistPage />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);