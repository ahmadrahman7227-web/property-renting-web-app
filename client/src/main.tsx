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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);