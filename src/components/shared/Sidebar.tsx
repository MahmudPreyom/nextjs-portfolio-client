"use client";
import Link from "next/link";
import { FaUser, FaCog, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button (Visible on small screens) */}
      <button
        className="md:hidden p-3 text-gray-700 fixed top-4 left-4 z-50 bg-white rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <FaBars className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar Container */}
      <div
        className={`bg-slate-100 min-h-screen p-4 fixed md:relative top-0 -left-8 md:left-0 transition-all duration-300 
        ${
          isOpen ? "w-64" : "w-0 md:w-64"
        } overflow-hidden md:overflow-visible md:block shadow-lg`}
      >
        <ul className="space-y-4 ml-10 md:ml-0 mt-12 md:mt-0">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <FaHome className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/user-info"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <FaUser className="h-5 w-5" />
              <span>User Info</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
            >
              <FaCog className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
