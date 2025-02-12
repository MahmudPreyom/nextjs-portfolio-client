"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/Adobe Express - file (2).png";
import Link from "next/link";
import { FaDownload, FaHireAHelper } from "react-icons/fa6";
import middle from "../../assets/middlepng.png";
import ThemeToggle from "../shared/ThemeToggle";

const Banner = () => {
  return (
    <div className="bg-none md:bg-[url('https://i.ibb.co.com/6RSXZRzG/Clip-path-group.png')] bg-cover md:bg-center overflow-hidden bg-no-repeat relative transition-colors duration-300 dark:bg-gray-900">
      <div className="container mx-auto md:relative">
        <div className="flex md:justify-center justify-end p-5 md:p-0 md:relative md:top-[116px]">
          <ThemeToggle />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10">
          {/* Left Side */}
          <div
            className="md:px-16 px-5 py-4 md:py-0 flex flex-col justify-center"
            style={{ height: "100%" }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-4xl mb-5">
              Hello, I am
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold mb-8 dark:text-white">
              Abdullah Al Mahmud
            </h1>

            <h2 className="text-gray-500 dark:text-gray-400 text-2xl md:text-4xl font-medium mb-5">
              A{" "}
              <span className="font-bold italic text-blue-500 dark:text-yellow-400">
                <Typewriter
                  words={[
                    " Frontend Developer",
                    " Backend Developer",
                    " MERN Stack Web Developer",
                    " Website Designer",
                    " Passionate for Coding",
                  ]}
                  loop={100}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              As a Full Stack Developer, I specialize in building modern,
              scalable web applications using the MERN stack. I have a strong
              foundation in both front-end and back-end development, ensuring
              seamless user experiences and efficient performance. Passionate
              about coding and problem-solving, I continuously explore new
              technologies to enhance my skills and deliver high-quality
              solutions.
            </p>

            <div className="flex gap-3 mt-8">
              <Link
                download
                href="https://drive.google.com/file/d/1shJnX_qSC94UeeBa6WNrajBbjg5DRrxZ/view?usp=sharing"
                className="btn btn-primary bg-blue-500 dark:bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 dark:hover:bg-yellow-600 transition duration-300 flex items-center gap-2"
              >
                <FaDownload className="text-lg" /> Resume
              </Link>
              <Link
                href={""}
                className="btn btn-primary bg-blue-500 dark:bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 dark:hover:bg-yellow-600 transition duration-300 flex items-center gap-2"
              >
                <FaHireAHelper className="text-lg" /> Hire Me
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:flex justify-center">
            <Image
              src={profile}
              alt="Abdullah Al Mahmud"
              width={0}
              height={0}
              style={{ width: "auto", maxHeight: "800px" }}
              className="md:ml-60 ml-0"
            />
          </div>
        </div>
      </div>

      <div className="banner-bg-center md:block hidden">
        <Image src={middle} alt="some" width={0} height={0} />
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};

export default Banner;
