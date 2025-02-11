"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 px-5">
      {/* Ghost Animation */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-full shadow-lg flex items-center justify-center"
      >
        <div className="w-16 h-16 bg-gray-900 rounded-full absolute top-8 left-6"></div>
        <div className="w-16 h-16 bg-gray-900 rounded-full absolute top-8 right-6"></div>
        <div className="w-4 h-4 bg-black rounded-full absolute top-12 left-10"></div>
        <div className="w-4 h-4 bg-black rounded-full absolute top-12 right-10"></div>
        <div className="w-10 h-5 bg-black rounded-t-full absolute bottom-8"></div>
      </motion.div>

      {/* Text */}
      <h1 className="text-6xl font-bold mt-6 text-gray-900">404</h1>
      <p className="text-lg text-gray-600 mt-2 text-center">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Go Home Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-md transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
