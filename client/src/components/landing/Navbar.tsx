import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Container from "../ui/Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Destinations",
      href: "#destinations",
    },
    {
      label: "Properties",
      href: "#properties",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-black/5 bg-white/80 py-0 shadow-lg backdrop-blur-2xl"
          : "bg-gradient-to-b from-black/50 to-transparent py-2"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link to="/">
            <h1
              className={`text-2xl font-bold tracking-tight transition duration-300 md:text-3xl ${
                isScrolled
                  ? "text-[#006491]"
                  : "text-white"
              }`}
            >
              AurAzure
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium transition duration-300 ${
                  isScrolled
                    ? index === 0
                      ? "text-[#006491]"
                      : "text-gray-700 hover:text-[#006491]"
                    : index === 0
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Login */}
            <Link to="/login">
              <button
                className={`text-sm font-medium transition duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#006491]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Login
              </button>
            </Link>

            {/* Register */}
            <Link to="/register">
              <Button variant="secondary">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`transition duration-300 md:hidden ${
              isScrolled
                ? "text-[#1b1c19]"
                : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-[500px] border-t border-white/20 bg-white/95 backdrop-blur-2xl"
            : "max-h-0"
        }`}
      >
        <Container>
          <div className="flex flex-col gap-6 py-6">
            {/* Mobile Navigation */}
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg font-medium text-gray-700 transition duration-300 hover:text-[#006491]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Actions */}
            <div className="flex flex-col gap-4 pt-4">
              {/* Login */}
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
              >
                <button className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-left text-sm font-medium transition duration-300 hover:border-[#006491] hover:text-[#006491]">
                  Login
                </button>
              </Link>

              {/* Register */}
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
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