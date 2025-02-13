import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
import { TbListDetails } from "react-icons/tb";

const BlogCard = ({ blog }: { blog: Blog }) => {
  // const router = useRouter(); // Initialize router

  // const handleDetails = () => {
  //   router.push(`/blog/${blog._id}`); // Navigate to blog details page
  // };

  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden ">
      {/* Blog Image */}
      <div className="relative w-full h-52 sm:h-60 md:h-72 lg:h-80 xl:h-96">
        <Image
          src={blog.blogImage}
          alt={blog.title || "Blog Image"}
          width={800}
          height={400}
          className="w-full h-full rounded-t-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white line-clamp-2">
          {blog.title}
        </h2>
        {/* <p className="text-gray-500 dark:text-gray-200 mt-2 text-sm line-clamp-3">
          {blog.description}
        </p> */}
        <div className="mt-4 flex items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
          <span>By {blog?.author?.name}</span>
        </div>
      </div>

      {/* Details Button */}
      <div className="p-4 rounded-b-lg">
        <Link
          href={`/blog/${blog._id}`}
          className="bg-blue-500 dark:bg-yellow-400 dark:text-slate-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2 w-36"
        >
          View Details <TbListDetails />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
