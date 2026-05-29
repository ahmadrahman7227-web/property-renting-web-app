import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f6f1] px-5 py-10">
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#006491]/10 blur-3xl" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#a43b2c]/10 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[32px] border border-white/40 bg-white/70 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-10">
        {/* Logo */}
        <div className="mb-10 text-center">
          <Link to="/">
            <h1 className="text-4xl font-bold tracking-tight text-[#006491]">
              AurAzure
            </h1>
          </Link>

          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gray-500">
            Premium Property Renting
          </p>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1b1c19]">
            Create Account
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Join AurAzure and discover curated premium stays and
            luxury travel experiences.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-4 transition duration-300 focus-within:border-[#006491]">
              <User
                size={18}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Email Address
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-4 transition duration-300 focus-within:border-[#006491]">
              <Mail
                size={18}
                className="text-gray-400"
              />

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-4 transition duration-300 focus-within:border-[#006491]">
              <Lock
                size={18}
                className="text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="text-gray-400 transition hover:text-[#006491]"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Confirm Password
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-4 transition duration-300 focus-within:border-[#006491]">
              <Lock
                size={18}
                className="text-gray-400"
              />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="••••••••"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="text-gray-400 transition hover:text-[#006491]"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-2xl bg-[#006491] py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:-translate-y-[2px] hover:shadow-xl"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="ml-2 font-semibold text-[#006491] transition hover:opacity-70"
          >
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}

export default RegisterPage;