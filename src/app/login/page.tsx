/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { loginUser } from "@/utils/actions/loginUser";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaGoogle, FaGithub } from "react-icons/fa";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    // console.log(data);

    try {
      const res = await loginUser(data);
      console.log(res);

      if (res.data.token) {
        alert(res.message);
        localStorage.setItem("accessToken", res.data.token);
        router.push("/");
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
          Login
        </h2>

        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Your Email"
          required
          className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
        />

        <input
          id="password"
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
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Sign Up
          </Link>
        </p>

        <div className="flex items-center justify-between gap-4 mt-4">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
            className="flex items-center gap-2 px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
            className="flex items-center gap-2 px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            <FaGithub className="text-gray-900 dark:text-gray-100" />
            GitHub
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
