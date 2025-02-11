/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-500 to-blue-500 text-white px-5 py-10">
      {/* Error Icon with Fade-in Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="w-32 h-32 md:w-48 md:h-48 bg-white text-black rounded-full flex items-center justify-center text-4xl md:text-6xl font-bold"
      >
        <span className="text-red-500">404</span>
      </motion.div>

      {/* Error Message */}
      <h1 className="text-4xl font-semibold mt-6">Page Not Found</h1>
      <p className="text-lg text-gray-200 mt-2 text-center max-w-lg">
        Sorry, the page you're looking for doesn't exist. It might have been
        moved, or you may have mistyped the URL.
      </p>

      {/* Go Home Button */}
      <Link
        href="/"
        className="mt-6 px-8 py-4 bg-blue-700 hover:bg-blue-600 text-white text-xl rounded-lg transition-all duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
