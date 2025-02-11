import Link from "next/link";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="shadow-gray-800 shadow-2xl pb-32 pt-14 text-center text-black mt-28">
      <Link href="/" className="text-2xl font-semibold mb-6 inline-block">
        Abdullah Al Mahmud
      </Link>

      <ul className="flex flex-wrap justify-center gap-6 mb-8 text-black">
        <li>
          <Link href="/" className="hover:text-gray-700 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-gray-700 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="#experience" className="hover:text-gray-700 transition">
            Experience
          </Link>
        </li>
        <li>
          <Link href="#project" className="hover:text-gray-700 transition">
            Project
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-gray-700 transition">
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-6">
        <Link
          href="https://web.facebook.com/mahmud.preyom"
          className="bg-white text-blue-700 p-2 rounded-lg hover:bg-gray-200 transition"
        >
          <BsFacebook size={24} />
        </Link>
        <Link
          href="https://github.com/MahmudPreyom"
          className="bg-white text-gray-800 p-2 rounded-lg hover:bg-gray-200 transition"
        >
          <AiFillGithub size={24} />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCjMxx9QlxCZWbHELuvZxU5A"
          className="bg-white text-red-600 p-2 rounded-lg hover:bg-gray-200 transition"
        >
          <AiFillYoutube size={24} />
        </Link>
      </div>

      <div className="text-sm text-gray-700">
        <h5>
          &copy; {new Date().getFullYear()} Abdullah Al Mahmud. All Rights
          Reserved.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
