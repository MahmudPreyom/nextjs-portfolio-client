"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FaBlog } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { SiPolymerproject } from "react-icons/si";
import { MdOutlineContacts } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { BiSolidLogOutCircle } from "react-icons/bi";
import { signOut } from "next-auth/react";

type UserProps = {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

type LinkItem = {
  href: string;
  icon: React.ReactNode;
  label: string;
  isButton?: boolean; // Make isButton optional
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const pathname = usePathname();

  // Define the links
  const links: LinkItem[] = [
    { href: "/", icon: <AiOutlineHome />, label: "Home" },
    { href: "/projects", icon: <SiPolymerproject />, label: "Project" },
    { href: "/blog", icon: <FaBlog />, label: "Blog" },
    { href: "/contact", icon: <MdOutlineContacts />, label: "Contact" },
    { href: "/dashboard", icon: <MdDashboard />, label: "Dashboard" },
  ];

  // Conditionally add the "Login" or "Log Out" link based on the session
  if (session?.user) {
    links.push({
      href: "#",
      icon: <BiSolidLogOutCircle />,
      label: "Log Out",
      isButton: true, // Add a flag to indicate it's a button
    });
  } else {
    links.push({ href: "/login", icon: <RiLoginBoxFill />, label: "Login" });
  }

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-md p-4 flex gap-4 rounded-full z-10">
      {links.map(({ href, icon, label, isButton }, index) => (
        <div key={index} className="relative">
          {isButton ? (
            // Render the "Log Out" as a button
            <button
              onClick={() => signOut()}
              className={`p-3 rounded-full text-white text-xl flex items-center transition-transform duration-300 ${
                pathname === href ? "bg-blue-500 text-black -translate-y-2" : ""
              }`}
            >
              {icon}
            </button>
          ) : (
            <Link
              href={href}
              className={`p-3 rounded-full text-white text-xl flex items-center transition-transform duration-300 ${
                pathname === href ? "bg-blue-500 text-black -translate-y-2" : ""
              }`}
            >
              {icon}
            </Link>
          )}
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
