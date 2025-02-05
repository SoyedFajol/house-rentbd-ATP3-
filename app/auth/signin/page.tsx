"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"; // Changed from next/navigation
import API from "@/app/Merchant/api";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await API.post<{ accessToken: string }>("users/signin", {
        email,
        password,
      });

      Cookies.set("token", res.data.accessToken, { expires: 1 });
      toast.success("Login successful!");
      router.push("/merchant/dashboard");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Invalid credentials";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center">Login</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSignin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link
            href="/auth/signup"
            className="text-blue-600 hover:text-blue-800"
          >
            Don&apos;t have an account? Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
