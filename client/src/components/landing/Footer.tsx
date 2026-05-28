import {
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Container from "../ui/Container";

function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-black/5 bg-white pt-20 pb-10"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#006491]/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#a43b2c]/5 blur-3xl" />

      <Container className="relative z-10">
        {/* Top Footer */}
        <div className="grid gap-12 border-b border-black/5 pb-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#006491]">
              AurAzure
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-600">
              Discover curated luxury stays and premium properties
              crafted for unforgettable travel experiences.
            </p>

            {/* Contact Icons */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f5] text-gray-600 transition duration-300 hover:bg-[#006491] hover:text-white">
                <Globe size={18} />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f5] text-gray-600 transition duration-300 hover:bg-[#006491] hover:text-white">
                <Mail size={18} />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f5] text-gray-600 transition duration-300 hover:bg-[#006491] hover:text-white">
                <Phone size={18} />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f5f5] text-gray-600 transition duration-300 hover:bg-[#006491] hover:text-white">
                <MapPin size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#1b1c19]">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-gray-600">
              <a
                href="#home"
                className="transition hover:text-[#006491]"
              >
                Home
              </a>

              <a
                href="#properties"
                className="transition hover:text-[#006491]"
              >
                Properties
              </a>

              <a
                href="#about"
                className="transition hover:text-[#006491]"
              >
                About Us
              </a>

              <a
                href="#contact"
                className="transition hover:text-[#006491]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-[#1b1c19]">
              Support
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-gray-600">
              <a
                href="#"
                className="transition hover:text-[#006491]"
              >
                Help Center
              </a>

              <a
                href="#"
                className="transition hover:text-[#006491]"
              >
                Terms & Conditions
              </a>

              <a
                href="#"
                className="transition hover:text-[#006491]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-[#006491]"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-[#1b1c19]">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              Get exclusive travel inspiration and premium property
              updates directly to your inbox.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-2xl border border-gray-200 px-5 py-4 text-sm outline-none transition duration-300 focus:border-[#006491]"
              />

              <button className="rounded-2xl bg-[#006491] px-5 py-4 text-sm font-semibold text-white transition duration-300 hover:opacity-90">
                Subscribe Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © 2026 AurAzure. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="#"
              className="transition hover:text-[#006491]"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-[#006491]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-[#006491]"
            >
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;