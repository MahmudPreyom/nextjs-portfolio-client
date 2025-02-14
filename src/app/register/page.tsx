/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerUser } from "@/utils/actions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
// import { FaGithub, FaGoogle } from "react-icons/fa6";

export type UserData = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const router = useRouter();

  const onSubmit = async (data: UserData) => {
    console.log(data);

    try {
      const res = await registerUser(data);
      // console.log(res);
      if (res.success) {
        alert(res.message);
        router.push("/login");
      }
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 px-8 py-10 rounded-3xl shadow-2xl space-y-4 bg-white dark:bg-gray-800 w-96"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
          Sign Up
        </h2>

        <input
          type="text"
          {...register("name")}
          placeholder="Your Name"
          required
          className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
        />

        <input
          type="email"
          {...register("email")}
          placeholder="Your Email"
          required
          className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
        />

        <input
          type="password"
          {...register("password")}
          placeholder="Your Password"
          required
          className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white dark:text-gray-800 dark:bg-yellow-400 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Sign Up
        </button>

        <p>
          Have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>

        {/* <div className="flex items-center justify-between gap-4 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            <FaGithub className="text-gray-900 dark:text-gray-100" />
            GitHub
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default RegisterPage;
