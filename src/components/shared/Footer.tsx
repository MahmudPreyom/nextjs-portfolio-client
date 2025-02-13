import Link from "next/link";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="shadow-gray-800 shadow-2xl pb-32 pt-20 text-center text-black bg-gray-100 dark:bg-orange-200 dark:text-gray-200">
      <Link
        href="/"
        className="text-2xl font-semibold mb-6 inline-block text-gray-800 dark:text-gray-700"
      >
        Abdullah Al Mahmud
      </Link>

      <ul className="flex flex-wrap justify-center gap-6 mb-8 text-gray-800 dark:text-gray-700">
        <li>
          <Link
            href="/"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#experience"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="#project"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex justify-center gap-4 mb-6">
        <Link
          href="https://web.facebook.com/mahmud.preyom"
          className="bg-white dark:bg-gray-300 text-blue-700 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-400 transition"
        >
          <BsFacebook size={24} />
        </Link>
        <Link
          href="https://github.com/MahmudPreyom"
          className="bg-white dark:bg-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-400 transition"
        >
          <AiFillGithub size={24} />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCjMxx9QlxCZWbHELuvZxU5A"
          className="bg-white dark:bg-gray-300 text-red-600 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-400 transition"
        >
          <AiFillYoutube size={24} />
        </Link>
      </div>

      <div className="text-sm text-gray-700 dark:text-gray-500">
        <h5>
          &copy; {new Date().getFullYear()} Abdullah Al Mahmud. All Rights
          Reserved.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
