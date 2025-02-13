import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbListDetails } from "react-icons/tb";

const ProjectCard = ({ project }: { project: Project }) => {
  // const handleDetails = () => {
  // Handle the details logic (e.g., navigate to a page with detailed project view)
  // console.log(`View details of project with ID: ${project._id}`);
  // };

  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
      {/* Project Image */}
      <div className="relative w-full h-52 md:h-64 lg:h-72">
        <Image
          src={project.projectImage}
          alt={project.title || "Project Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white line-clamp-2">
          {project.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-200 mt-2 text-sm line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
          <span>By {project?.author?.name}</span>
        </div>
      </div>

      {/* Details Button */}
      <div className="p-4 rounded-b-lg flex justify-between">
        <Link
          href={project.liveLinkUrl}
          className="bg-blue-500 dark:bg-yellow-400 dark:text-slate-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Live Link
        </Link>
        <Link
          href={`/projects/${project._id}`}
          className="bg-blue-500 dark:bg-yellow-400 dark:text-slate-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2 w-36"
        >
          View Details <TbListDetails />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
