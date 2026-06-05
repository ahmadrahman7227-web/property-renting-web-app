import {
  Eye,
  EyeOff,
  Lock,
  Mail,
} from "lucide-react";

import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
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

      const response =
        await axios.post(
          "http://localhost:8000/api/auth/login",
          {
            email,
            password,
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
          "Login failed"
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

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[32px] border border-white/40 bg-white/70 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-10">
        {/* Logo */}
        <div className="mb-10 text-center">
          <Link to="/">
            <h1 className="text-4xl font-bold tracking-tight text-[#006491] transition duration-300 hover:opacity-80">
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
            Welcome Back
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Sign in to continue exploring
            premium stays and curated luxury
            experiences.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-600">
              Email Address
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-4 transition duration-300 focus-within:border-[#006491] focus-within:shadow-sm">
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
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>

              <button
                type="button"
                className="text-xs font-medium text-[#006491] transition hover:opacity-70"
              >
                Forgot Password?
              </button>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-4 transition duration-300 focus-within:border-[#006491] focus-within:shadow-sm">
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
                className="text-gray-400 transition duration-300 hover:text-[#006491]"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-[#006491] focus:ring-[#006491]"
              />

              Remember me
            </label>
          </div>

          {/* Error */}
{error && (
  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
    <p className="text-sm text-red-600">
      {error}
    </p>

    {(error === "Account not found" ||
      error === "Invalid credentials") && (
      <Link
        to="/register"
        className="mt-2 inline-block text-sm font-semibold text-[#006491]"
      >
        Account not found? Create Account
      </Link>
    )}
  </div>
)}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-2xl bg-[#006491] py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:-translate-y-[2px] hover:bg-[#00527a] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-[#f8f6f1] px-4 text-xs uppercase tracking-[0.2em] text-gray-400">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button className="rounded-2xl border border-gray-200 bg-white py-4 text-sm font-medium transition duration-300 hover:border-[#006491] hover:text-[#006491]">
            Google
          </button>

          <button className="rounded-2xl border border-gray-200 bg-white py-4 text-sm font-medium transition duration-300 hover:border-[#006491] hover:text-[#006491]">
            Apple
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Don&apos;t have an account?

          <Link
            to="/register"
            className="ml-2 font-semibold text-[#006491] transition duration-300 hover:opacity-70"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

export default LoginPage;