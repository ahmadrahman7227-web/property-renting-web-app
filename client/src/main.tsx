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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);