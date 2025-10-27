"use client";

import { useState } from "react";

export default function AuthPage({ showLogin12, setShowLogin }: any) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100 px-4">
      <form
        className="
          relative bg-white shadow-lg rounded-lg 
          w-full max-w-sm sm:max-w-md md:max-w-lg 
          p-6 sm:p-8 md:p-10 
          text-center font-[Segoe_UI] transition-all
        "
      >
        {/* Cross Button */}
        <span
          className="
            absolute top-3 right-3 
            bg-gray-200 hover:bg-gray-300 
            text-gray-700 font-bold cursor-pointer 
            w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center 
            rounded-full text-sm sm:text-base
          "
          onClick={() => setShowLogin(false)}
        >
          X
        </span>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm sm:text-base mb-6">
          {isLogin
            ? "Please enter your credentials to log in!"
            : "Please fill in this form to create an account!"}
        </p>

        {/* SIGNUP FORM */}
        {!isLogin && (
          <>
            {/* Name fields side by side (stack on mobile) */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                placeholder="First Name"
                required
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Checkbox */}
            <label className="flex items-center text-sm text-gray-600 mb-4">
              <input type="checkbox" required className="mr-2 accent-blue-600" />I accept the&nbsp;
              <a href="#" className="text-blue-600 hover:underline">
                Terms of Use
              </a>
              &nbsp;and&nbsp;
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>.
            </label>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm sm:text-base font-medium transition-colors"
            >
              Sign Up
            </button>

            {/* Switch link */}
            <p className="text-sm text-gray-700 mt-4">
              Already have an account?{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login here
              </a>
            </p>
          </>
        )}

        {/* LOGIN FORM */}
        {isLogin && (
          <>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm sm:text-base font-medium transition-colors"
            >
              Login
            </button>

            <p className="text-sm text-gray-700 mt-4">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Sign Up here
              </a>
            </p>
          </>
        )}
      </form>
    </div>
  );
}
