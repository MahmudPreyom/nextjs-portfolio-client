/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    blogImage: "",
  });

  const handleChange = (e: { target: { name: string; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // onSubmit(formData);
  };

  return (
    <div className="md:mt-40 mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 px-8 py-10 rounded-3xl shadow-2xl space-y-4 bg-white dark:bg-gray-800 w-full max-w-2xl mx-auto"
      >
        <h1 className="text-center text-4xl font-bold dark:text-gray-300">
          Create A Blog
        </h1>
        {/* Title Input */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          required
          className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
        />

        {/* Description Input */}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={6}
          placeholder="Blog Description"
          required
          className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
        ></textarea>

        {/* Blog Image URL Input */}
        <input
          type="url"
          name="blogImage"
          value={formData.blogImage}
          onChange={handleChange}
          placeholder="Blog Image URL"
          required
          className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white dark:text-gray-800 dark:bg-yellow-400 py-3 rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
