"use client";
/* eslint-disable react/no-unescaped-entities */
import about from "../../assets/IMG_20250210_231149.jpg";
import { VscProject } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import { SiCompilerexplorer } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 container px-4 mx-auto">
      <div className="grid lg:grid-cols-2 gap-2 mt-12">
        {/* About Image Section */}
        <div className=" flex justify-center items-center">
          <div className=" rounded-xl overflow-hidden transform rotate-10 transition-transform duration-300 ease-in-out hover:rotate-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Image
                src={about}
                alt="About Image"
                className="w-full max-h-[620px]"
              />
            </motion.div>
          </div>
        </div>

        {/* About Content Section */}
        <div className="p-5">
          <div className="mb-10">
            <h5 className=" text-xl text-gray-500">Get To Know</h5>
            <h2 className=" text-3xl font-bold text-black">About Me</h2>
          </div>
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 mb-6">
            <article className=" bg-gray-100 p-6 rounded-lg text-center transition-all transform hover:scale-105 duration-300">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="flex items-center justify-center">
                  <CgWebsite className="text-4xl text-blue-500 mb-3" />
                </div>
                <h5 className="text-lg font-semibold">Interest</h5>
                <small className="text-sm text-gray-600">
                  For Advance Web Development
                </small>
              </motion.div>
            </article>

            <article className=" bg-gray-100 p-6 rounded-lg text-center transition-all transform hover:scale-105 duration-300">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="flex items-center justify-center">
                  <SiCompilerexplorer className="text-4xl text-blue-500 mb-3" />
                </div>
                <h5 className="text-lg font-semibold">Explore</h5>
                <small className="text-sm text-gray-600">
                  Updated React Components
                </small>
              </motion.div>
            </article>

            <article className=" bg-gray-100 p-6 rounded-lg text-center transition-all transform hover:scale-105 duration-300">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <div className="flex items-center justify-center">
                  <VscProject className="text-4xl text-blue-500 mb-3" />
                </div>
                <h5 className="text-lg font-semibold">Project</h5>
                <small className="text-sm text-gray-600">5+ projects</small>
              </motion.div>
            </article>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Hello, I am Abdullah Al Mahmud, also known as Mahmud Preyom. I am
            from Feni, Bangladesh, and I'm a junior frontend developer. I have
            developed many projects and enjoy building user-friendly interfaces.
            My passion for frontend development extends beyond just coding; it's
            about creating experiences people will love. I have experience with
            technologies like Node.js, MongoDB, React.js, Firebase, Tailwind
            CSS, Daisy UI, and React-Bootstrap. I'm also familiar with
            responsive design and accessibility best practices.
          </p>

          <Link
            href="#contact"
            className="btn btn-primary bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
