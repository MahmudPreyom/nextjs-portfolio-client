"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FaBlog } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { SiPolymerproject } from "react-icons/si";
import { MdOutlineContacts } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-md p-4 flex gap-4 rounded-full z-10">
      {[
        { href: "/", icon: <AiOutlineHome />, label: "Home" },
        { href: "/projects", icon: <SiPolymerproject />, label: "Project" },
        { href: "/blog", icon: <FaBlog />, label: "Blog" },
        { href: "/contact", icon: <MdOutlineContacts />, label: "Contact" },
        { href: "/dashboard", icon: <MdDashboard />, label: "Dashboard" },
        { href: "/login", icon: <RiLoginBoxFill />, label: "Login" },
        // { href: "/login", icon: <MdDashboard />, label: "Log Out" },
      ].map(({ href, icon, label }, index) => (
        <div key={index} className="relative">
          <Link
            href={href}
            className={`p-3 rounded-full text-white text-xl flex items-center transition-transform duration-300 ${
              pathname === href ? "bg-blue-500 text-black -translate-y-2" : ""
            }`}
          >
            {icon}
          </Link>
          {pathname === href && (
            <span className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-blue-500 text-black px-2 py-1 rounded-md text-sm">
              {label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
