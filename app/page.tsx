'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import meralcoImage from "@/assets/meralco.svg"
import googleImage from "@/assets/gmail.svg"
import { useRouter } from 'next/navigation';  // Importing useRouter hook
import Link from 'next/link'

const page = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter();  // Creating a router instance

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  // Handle checkbox change
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe)
  }

  // Handle sign-in click
  const handleSignIn = () => {
    // Logic for sign-in (validation, etc.)

    // Redirect to /convo page upon successful sign-in
    router.push('/convo');  // Navigate to the Convo page
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center">
      {/* Logo Section */}
      <div className="flex justify-center pt-[52px]">
        <Image src={meralcoImage} width={56} height={56} alt="meralcoimg" />
      </div>

      {/* Title Section */}
      <div className="flex justify-center text-2xl pt-[34px]">
        Login Your Account
      </div>

      {/* Description Section */}
      <div className="flex justify-center text-base pt-[21px] text-[#535862]">
        Welcome back! Please enter your details.
      </div>

      {/* Form Section: Flexbox layout for label and input */}
      <div className="flex flex-col items-center mt-8 w-full max-w-3xl px-4">
        {/* Email Label and Input Field */}
        <div className="w-full mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Label and Input Field */}
        <div className="w-full mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex justify-between items-center w-full mb-6">
          <div className="flex items-center">
            <input
              id="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-orange-500 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <button
          type="button"
          onClick={handleSignIn}  // Trigger the handleSignIn function
          className="w-full py-3 px-4 mb-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
        >
          Sign In
        </button>

        {/* Google Sign In Button */}
        <button
          type="button"
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          <Image src={googleImage} className="mr-2 text-xl" alt="google image"/>
          Sign In with Google
        </button>

        {/* Sign Up Link Section */}
        <div className="flex justify-center">
          <div className="flex justify-center text-base pt-4 text-[#535862]">
            Don't have an account? 
          </div>
          <Link href="/signup" className="flex justify-center text-base pt-4 text-orange-500 pl-1">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page
