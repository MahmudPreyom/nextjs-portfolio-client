"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/phd.png";
import Link from "next/link";
import { FaDownload, FaHireAHelper } from "react-icons/fa6";
import middle from "../../assets/middlepng.png";

const Banner = () => {
  return (
    // <div className="h-screen bg-[url('https://i.ibb.co.com/s8GTvSb/banner-area.png')] bg-cover bg-center bg-no-repeat">
    <div className="bg-none md:bg-[url('https://i.ibb.co.com/6RSXZRzG/Clip-path-group.png')] bg-cover md:bg-center overflow-hidden bg-no-repeat relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10">
          <div
            className="md:px-16  px-5 py-4 md:py-0 flex flex-col justify-center"
            style={{
              height: "100%",
            }}
          >
            <h1 className=" text-5xl md:text-6xl font-semibold">
              <span className="text-gray-500 text-4xl">Hello, I am</span>
              <br />
              Abdullah Al Mahmud
            </h1>
            <h2 className="text-gray-500 text-2xl md:text-4xl font-medium mb-5">
              A{" "}
              <span
                style={{
                  color: "Highlight",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
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
            <p className="text-gray-600">
              As a Full Stack Developer, I specialize in building modern,
              scalable web applications using the MERN stack. I have a strong
              foundation in both front-end and back-end development, ensuring
              seamless user experiences and efficient performance. Passionate
              about coding and problem-solving, I continuously explore new
              technologies to enhance my skills and deliver high-quality
              solutions.
            </p>
            <div className="flex gap-3 mt-5">
              <Link
                download
                href="https://drive.google.com/file/d/1shJnX_qSC94UeeBa6WNrajBbjg5DRrxZ/view?usp=sharing"
                className="btn btn-primary bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2"
              >
                <FaDownload className="text-lg" /> Resume
              </Link>
              <Link
                href={""}
                className="btn btn-primary bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2"
              >
                <FaHireAHelper className="text-lg" /> Hire Me
              </Link>
            </div>
          </div>

          <div className="md:flex hidden justify-center">
            <Image
              src={profile}
              alt="Abdullah Al Mahmud"
              width={0}
              height={0}
              style={{ width: "auto", maxHeight: "800px" }}
            />
          </div>
        </div>
      </div>
      <div className="banner-bg-center md:block hidden">
        <Image src={middle} alt="some" width={0} height={0} />
      </div>
    </div>
  );
};

export default Banner;
