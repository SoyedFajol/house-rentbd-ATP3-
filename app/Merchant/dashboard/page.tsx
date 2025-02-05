"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "../api";
import Cookies from "js-cookie";

const Dashboard = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          router.push("/auth/signin");
          return;
        }
        await API.get("/users/me");
        setLoading(false);
      } catch {
        // Error handling without unused variable
        Cookies.remove("token");
        router.push("/auth/signin");
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/auth/signin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome to your dashboard!</h2>
          <p>Your content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;