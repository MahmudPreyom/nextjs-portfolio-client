"use client";

import { BsFillPatchCheckFill } from "react-icons/bs";
import { BiLogoCss3 } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import {
  TbBrandVite,
  TbBrandTailwind,
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandFigma,
} from "react-icons/tb";
import Marquee from "react-fast-marquee";

const Experience = () => {
  return (
    <section className="py-12 text-center text-gray-200">
      <h5 className="text-lg text-gray-400">What Skills I Have</h5>
      <h2 className="text-3xl font-bold text-black">My Experience</h2>

      <Marquee className="my-8 text-blue-500">
        {[
          FaReact,
          TbBrandVite,
          TbBrandTailwind,
          FaBootstrap,
          SiMongodb,
          FaNodeJs,
          TbBrandFirebase,
          TbBrandJavascript,
          TbBrandHtml5,
          BiLogoCss3,
          TbBrandFigma,
          RiNextjsLine,
          TbBrandTypescript,
        ].map((Icon, index) => (
          <Icon key={index} className="text-5xl mx-5 md:mx-20" />
        ))}
      </Marquee>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
        <div className="p-6 rounded-xl border border-gray-400 hover:border-black transition">
          <h3 className="text-xl font-semibold text-black mb-4">
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Typescript",
              "Bootstrap",
              "Tailwind",
              "React",
              "Next JS",
            ].map((skill, index) => (
              <section key={index} className="flex items-center gap-3">
                <BsFillPatchCheckFill className="text-blue-500 text-lg" />
                <div className="text-start">
                  <h4 className="text-base font-semibold text-gray-800">
                    {skill}
                  </h4>
                  <small className="text-gray-700">Experienced</small>
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-gray-400 hover:border-black transition">
          <h3 className="text-xl font-semibold text-black mb-4">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { skill: "MongoDB", level: "Experienced" },
              { skill: "Node JS", level: "Intermediate" },
              { skill: "MySQL", level: "Basic" },
              { skill: "Express JS", level: "Basic" },
            ].map(({ skill, level }, index) => (
              <section key={index} className="flex items-center gap-3">
                <BsFillPatchCheckFill className="text-blue-500 text-lg" />
                <div className="text-start">
                  <h4 className="text-base font-semibold text-gray-800">
                    {skill}
                  </h4>
                  <small className="text-gray-700">{level}</small>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
