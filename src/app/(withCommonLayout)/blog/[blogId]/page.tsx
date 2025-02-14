import Image from "next/image";
import React from "react";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(
    `http://localhost:5000/api/blogs/singleBlog/${blogId}`
  );
  const blog = await res.json();
  //   console.log(res);

  return (
    <div className="dark:bg-gray-700 h-[800px] px-4 py-40 ">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Blog Image */}
        <div className="relative w-full h-60 sm:h-72 md:h-80">
          <Image
            src={blog.data.blogImage}
            alt={blog.data.title || "Blog Image"}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {blog.data.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            {blog.data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
