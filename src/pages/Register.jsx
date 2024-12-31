import React, { useState } from "react";
import RegImage from "../assets/reg-image.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import axios from "axios";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const Register = () => {
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle Form Submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role,
      });

      setMessage(response.data.message || "Registration successful!");
      setMessageType("success");

      // Clear form fields after success
      setName("");
      setEmail("");
      setPassword("");
      setRole("customer");

      // Redirect to login page after a delay
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      setMessage(
        error.response?.data?.error || "An error occurred during registration!"
      );
      setMessageType("error");
      console.error(error);
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row h-screen p-8">
      {/* Left Section - Image */}
      <div
        className="hidden lg:block lg:w-2/3 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url(${RegImage})`,
        }}
      ></div>

      {/* Right Section - Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/3 bg-white px-8 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Register</h2>

          {/* Display Messages */}
          {message && (
            <div
              className={`flex items-center gap-2 mb-4 px-4 py-2 rounded-md text-sm ${
                messageType === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {messageType === "success" ? (
                <FiCheckCircle className="text-xl" />
              ) : (
                <FiAlertCircle className="text-xl" />
              )}
              {message}
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              >
                <option value="customer">Customer</option>
                <option value="seller">Seller</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={isLoading} // Disable button while loading
              className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600 mb-2">Or continue with</p>
            <div className="flex justify-between space-x-4">
              <button className="flex items-center justify-center w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition space-x-2">
                <FcGoogle className="text-red-500 text-xl" />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition space-x-2">
                <FaFacebook className="text-blue-600 text-xl" />
                <span>Facebook</span>
              </button>
            </div>
          </div>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-violet-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
