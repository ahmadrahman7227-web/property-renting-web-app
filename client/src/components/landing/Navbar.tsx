import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../ui/Container";

// =====================================
// Navbar
//
// Fungsi:
// - Navigasi utama website
// - Responsive mobile menu
// - Blur ketika scroll
// - Routing antar halaman
// =====================================

function Navbar() {
  // =====================================
  // Mobile Menu State
  // =====================================

  const [isOpen, setIsOpen] = useState(false);

  // =====================================
  // Scroll State
  // =====================================

  const [isScrolled, setIsScrolled] =
    useState(false);

  const location = useLocation();

  // =====================================
// Go To Home Section
// =====================================

function goToHome() {
  if (location.pathname === "/") {
    const section =
      document.getElementById("home");

    section?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);

    return;
  }

  window.location.href = "/#home";
}

  // =====================================
  // Detect Scroll
  // =====================================

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =====================================
  // Scroll ke section landing page
  // =====================================

  function goToSection(sectionId: string) {
    // Jika sedang di landing page
    if (location.pathname === "/") {
      const section =
        document.getElementById(sectionId);

      section?.scrollIntoView({
        behavior: "smooth",
      });

      setIsOpen(false);

      return;
    }

    // Jika sedang di halaman lain
    window.location.href = `/#${sectionId}`;
  }

  // =====================================
  // Dynamic Text Color
  // =====================================

  const textColor =
    isScrolled || location.pathname !== "/"
      ? "text-gray-700"
      : "text-white";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ||
        location.pathname !== "/"
          ? "border-b border-black/5 bg-white/80 shadow-lg backdrop-blur-2xl"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* =====================================
          Logo
          ===================================== */}

          <Link to="/">
            <h1
              className={`text-2xl font-bold tracking-tight transition md:text-3xl ${
                isScrolled ||
                location.pathname !== "/"
                  ? "text-[#006491]"
                  : "text-white"
              }`}
            >
              AurAzure
            </h1>
          </Link>

          {/* =====================================
          Desktop Navigation
          ===================================== */}

          <nav className="hidden items-center gap-10 md:flex">
            {/* Home */}

            <button
              onClick={goToHome}
              className={`${textColor} text-sm font-medium transition hover:text-[#006491]`}
              >
              Home
            </button>

            {/* Destinations */}

            <button
              onClick={() =>
                goToSection("destinations")
              }
              className={`${textColor} text-sm font-medium transition hover:text-[#006491]`}
            >
              Destinations
            </button>

            {/* Properties */}

            <Link
              to="/properties"
              className={`${textColor} text-sm font-medium transition hover:text-[#006491]`}
            >
              Properties
            </Link>

            {/* About */}

            <button
              onClick={() =>
                goToSection("about")
              }
              className={`${textColor} text-sm font-medium transition hover:text-[#006491]`}
            >
              About
            </button>

            {/* Contact */}

            <button
              onClick={() =>
                goToSection("contact")
              }
              className={`${textColor} text-sm font-medium transition hover:text-[#006491]`}
            >
              Contact
            </button>
          </nav>

          {/* =====================================
          Desktop Actions
          ===================================== */}

          <div className="hidden items-center gap-4 md:flex">
            <Link to="/login">
              <button
                className={`${textColor} text-sm font-medium transition hover:text-[#006491]`}
              >
                Login
              </button>
            </Link>

            <Link to="/register">
              <Button variant="secondary">
                Register
              </Button>
            </Link>
          </div>

          {/* =====================================
          Mobile Toggle
          ===================================== */}

          <button
            className={`md:hidden ${
              isScrolled ||
              location.pathname !== "/"
                ? "text-[#1b1c19]"
                : "text-white"
            }`}
            onClick={() =>
              setIsOpen(!isOpen)
            }
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </Container>

      {/* =====================================
      Mobile Menu
      ===================================== */}

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[600px] border-t border-white/20 bg-white/95 backdrop-blur-2xl"
            : "max-h-0"
        }`}
      >
        <Container>
          <div className="flex flex-col gap-5 py-6">
            {/* Home */}

            <button
              onClick={goToHome}
              className="text-left text-lg font-medium text-gray-700 transition hover:text-[#006491]"
              >
              Home
            </button>

            {/* Destinations */}

            <button
              onClick={() =>
                goToSection("destinations")
              }
              className="text-left text-lg font-medium text-gray-700 transition hover:text-[#006491]"
            >
              Destinations
            </button>

            {/* Properties */}

            <Link
              to="/properties"
              onClick={() =>
                setIsOpen(false)
              }
              className="text-lg font-medium text-gray-700 transition hover:text-[#006491]"
            >
              Properties
            </Link>

            {/* About */}

            <button
              onClick={() =>
                goToSection("about")
              }
              className="text-left text-lg font-medium text-gray-700 transition hover:text-[#006491]"
            >
              About
            </button>

            {/* Contact */}

            <button
              onClick={() =>
                goToSection("contact")
              }
              className="text-left text-lg font-medium text-gray-700 transition hover:text-[#006491]"
            >
              Contact
            </button>

            {/* Actions */}

            <div className="flex flex-col gap-4 pt-4">
              <Link
                to="/login"
                onClick={() =>
                  setIsOpen(false)
                }
              >
                <button className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-left text-sm font-medium transition hover:border-[#006491] hover:text-[#006491]">
                  Login
                </button>
              </Link>

              <Link
                to="/register"
                onClick={() =>
                  setIsOpen(false)
                }
              >
                <Button variant="secondary">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Navbar;