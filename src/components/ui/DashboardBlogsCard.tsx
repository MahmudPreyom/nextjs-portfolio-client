import { Blog } from "@/types";
import Image from "next/image";
import React from "react";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const DashboardBlogsCard = ({ blog }: { blog: Blog }) => {
  const handleUpdate = () => {
    // Navigate to the update page or open a modal
    // console.log(`Update blog with ID: ${blog._id}`);
  };

  const handleDelete = () => {
    // Implement delete logic (e.g., API call to delete the blog)
    // console.log(`Delete blog with ID: ${blog._id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
      {/* Blog Image */}
      <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 xl:h-80">
        <Image
          src={blog.blogImage}
          alt={blog.title || "Blog Image"}
          width={800}
          height={500}
          className="w-full h-full rounded-t-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white line-clamp-2">
          {blog.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-200 mt-2 text-sm line-clamp-3">
          {blog.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
          <span>By {blog?.author?.name}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 rounded-b-lg flex justify-between">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 dark:bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-green-600 flex items-center gap-2"
        >
          Update <GrUpdate />
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center gap-2"
        >
          Delete <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
};

export default DashboardBlogsCard;
