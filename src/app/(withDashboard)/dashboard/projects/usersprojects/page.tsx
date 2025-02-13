"use client";

import LoadingPage from "@/app/loading";
import DashboardProjectsCard from "@/components/ui/DashboardProjectsCard";
import { useGetProjectsQuery } from "@/redux/apis/project.slice";
import { Project } from "@/types";

const ProjectPage = () => {
  const { data: projects, isLoading } = useGetProjectsQuery({});
  console.log(projects);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="dark:bg-black bg-white">
      <div className="container mx-auto p-10">
        <h1 className="text-3xl text-center my-5 dark:text-white font-bold">
          Users All Projects
        </h1>
        <p className="text-center text-gray-400 w-2/5 mx-auto">
          Dive into the fascinating world of quantum computing, unlocking
          unprecedented computational power.
        </p>

        {/* Responsive Grid for Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
          {projects?.data.map((project: Project) => (
            <DashboardProjectsCard project={project} key={project._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
