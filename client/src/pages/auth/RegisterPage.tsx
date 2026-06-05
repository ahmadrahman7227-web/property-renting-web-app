import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      if (
        password !==
        confirmPassword
      ) {
        setError(
          "Passwords do not match"
        );
        return;
      }

      const response =
        await axios.post(
          "http://localhost:8000/api/auth/register",
          {
            fullName,
            email,
            password,
            role: "USER",
          }
        );

      const token =
        response.data.data.token;

      localStorage.setItem(
        "token",
        token
      );

      navigate("/dashboard");
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          "Register failed"
      );
    } finally {
      setLoading(false);
    }
  };

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
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
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
                value={fullName}
                onChange={(e) =>
                  setFullName(
                    e.target.value
                  )
                }
                placeholder="John Doe"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                required
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
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                required
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
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="••••••••"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
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
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                placeholder="••••••••"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                required
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

          {/* Error */}
{error && (
  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
    <p className="text-sm text-red-600">
      {error}
    </p>

    {error ===
      "Email already registered" && (
      <Link
        to="/login"
        className="mt-2 inline-block text-sm font-semibold text-[#006491]"
      >
        Already have an account? Sign In
      </Link>
    )}
  </div>
)}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-2xl bg-[#006491] py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:-translate-y-[2px] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
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