"use client";

import LoadingPage from "@/app/loading";
import DashboardBlogsCard from "@/components/ui/DashboardBlogsCard";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { Blog } from "@/types";
import React from "react";

const UsersBlogPage = () => {
  const { data: blogs, isLoading } = useGetBlogsQuery([]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="dark:bg-black bg-white">
      <div className="container mx-auto p-10">
        <h1 className="text-3xl text-center my-5 dark:text-white font-bold">
          Users All Blogs
        </h1>
        <p className="text-center text-gray-400 w-2/5 mx-auto">
          Dive into the fascinating world of quantum computing, unlocking
          unprecedented computational power.
        </p>

        {/* Responsive Grid for Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
          {blogs?.data.map((blog: Blog) => (
            <DashboardBlogsCard blog={blog} key={blog._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersBlogPage;
