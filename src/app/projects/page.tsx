"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import Image from "next/image";

interface Project {
  title: string;
  frontendRepo: string;
  backendRepo: string;
  liveDemo: string;
  image: string;
  technologies: string;
  details: string[];
}

const projects: Project[] = [
  {
    title: "Music Instruments Learning",
    frontendRepo: "https://github.com/MahmudPreyom/summer-camp-client",
    backendRepo: "https://github.com/MahmudPreyom/summer-camp-server-side",
    liveDemo: "https://summer-camp-e2784.web.app/",
    image: "../../assets/music.jpg",
    technologies:
      "VS Code | Firebase | MongoDB | Vercel | GitHub | Tailwind CSS | DaisyUI | React-Router | Axios | JWT | Node.js",
    details: [
      "Full Stack Website with 3 roles: Admin, Instructor, Students.",
      "Admin can manage users and instructors.",
      "Instructor can add classes, Admin approves or denies.",
    ],
  },
  {
    title: "Chef Recipe Hunter",
    frontendRepo:
      "https://github.com/MahmudPreyom/chef-recipe-hunter-client-side",
    backendRepo: "https://github.com/MahmudPreyom/chefs-corner-server",
    liveDemo: "https://chef-recipie-assignment10.web.app/",
    image: "../../assets/cook.jpg",
    technologies:
      "VS Code | Firebase | MongoDB | Vercel | GitHub | React-Bootstrap | React-Router",
    details: [
      "Authentication with Google, GitHub, Email-Password.",
      "Protected pages requiring login.",
      "Users can view chef recipes after login.",
    ],
  },
  {
    title: "Toy Planet Car Market",
    frontendRepo: "https://github.com/MahmudPreyom/toy-marketplace-client-side",
    backendRepo: "https://github.com/MahmudPreyom/toy-marketplace-server-side",
    liveDemo: "https://toys-planet-client.web.app/",
    image: "../../assets/toy.jpg",
    technologies:
      "VS Code | Firebase | MongoDB | Vercel | GitHub | Tailwind CSS | DaisyUI | React-Router",
    details: [
      "Authentication with Email-Password & Google.",
      "Users can update toy data.",
      "Login required to access toy listings.",
    ],
  },
];

const ProjectsPage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section id="projects" className="py-10">
      <div className="text-center mb-8">
        <h5 className="text-gray-400 text-lg">My Recent Work</h5>
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <div className="flex justify-between mt-4">
              <Link
                href={project.frontendRepo}
                target="_blank"
                className="btn flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded"
              >
                Frontend <FaGithub />
              </Link>
              <Link
                href={project.backendRepo}
                target="_blank"
                className="btn flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Backend <FaGithub />
              </Link>
            </div>
            <div className="flex justify-between mt-4">
              <Link
                href={project.liveDemo}
                target="_blank"
                className="btn bg-blue-500 text-white px-4 py-2 rounded"
              >
                Live Demo
              </Link>
              <button
                onClick={() => toggleDetails(index)}
                className="btn bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2"
              >
                {expanded === index ? (
                  "Hide Details"
                ) : (
                  <>
                    <TbListDetails /> Details
                  </>
                )}
              </button>
            </div>
            {expanded === index && (
              <div className="mt-4 p-4 bg-gray-900 text-gray-300 rounded-lg">
                <h3 className="text-blue-400">Technologies:</h3>
                <p>{project.technologies}</p>
                <ul className="list-disc mt-2 ml-5">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
