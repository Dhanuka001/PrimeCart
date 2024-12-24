import React from "react";
import LogImage from "../assets/log-image.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
        const response = await axios.post("http://localhost:5000/api/auth/login", {
            email,
            password,
          });
    
        const { token, role } = response.data;
        setMessage("Login successful!");
        setMessageType("success");

        localStorage.setItem("token", token);

        setTimeout(() => {
            if (role === "admin") {
              window.location.href = "/admin-dashboard";
            } else if (role === "seller") {
              window.location.href = "/seller-dashboard";
            } else {
              window.location.href = "/";
            }
          }, 2000);
    }catch (error) {
        
        setMessage(error.response?.data?.error || "Something went wrong!");
        setMessageType("error");
        console.log(error);
      }
  }

  return (
    <div className="flex flex-col gap-4 lg:flex-row h-screen p-8">
      {/* Left Section - Image */}
      <div
        className="hidden lg:block lg:w-2/3 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${LogImage})` }}
      ></div>

      {/* Right Section - Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/3 bg-white px-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-xl">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Login</h2>

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

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
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
            <button
              type="submit"
              className="w-full bg-violet-600 text-white py-2 rounded-md hover:bg-violet-700 transition"
            >
              Login
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
            Don't have an account?{" "}
            <a href="/register" className="text-violet-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
