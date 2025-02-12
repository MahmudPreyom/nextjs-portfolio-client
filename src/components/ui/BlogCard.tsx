import { Blog } from "@/types";
import Image from "next/image";
import React from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const handleDetails = () => {
    // Handle the details logic (e.g., navigate to a page with detailed blog view)
    console.log(`View details of blog with ID: ${blog._id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      {/* Blog Image */}
      <div className="relative w-full h-52 md:h-64 lg:h-72">
        <Image
          src={blog.blogImage}
          alt={blog.title || "Blog Image"}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
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
        {/* <div className="mt-4 flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
          <span>By {blog?.author?.name || "Unknown"}</span>
        </div> */}
      </div>

      {/* Details Button */}
      <div className="p-4 rounded-b-lg">
        <button
          onClick={handleDetails}
          className="bg-blue-500 dark:bg-yellow-400 dark:text-slate-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
