"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { RiMailSendFill, RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import Swal from "sweetalert2";
import Link from "next/link";

interface ContactOptionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  link: string;
  linkText: string;
}

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cjiaxyw",
        "template_w4k4avb",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Z_mUev9W9x5mtXq3e"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="text-center">
        <h5 className="text-gray-500 dark:text-gray-400 text-lg">
          Get In Touch
        </h5>
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          Contact Me
        </h2>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
        {/* Contact Options */}
        <div className="flex flex-col gap-6">
          <ContactOption
            icon={
              <MdOutlineEmail className="text-2xl text-blue-500 dark:text-yellow-400" />
            }
            title="Email"
            subtitle="preyom5076@gmail.com"
            link="mailto:preyom5076@gmail.com"
            linkText="Send a message"
          />
          <ContactOption
            icon={
              <RiMessengerLine className="text-2xl text-blue-500 dark:text-yellow-400" />
            }
            title="Messenger"
            subtitle="Mahmud Preyom"
            link="https://m.me/mahmud.preyom"
            linkText="Send a message"
          />
          <ContactOption
            icon={
              <BsWhatsapp className="text-2xl text-blue-500 dark:text-yellow-400" />
            }
            title="WhatsApp"
            subtitle="+8801580-367168"
            link="https://api.whatsapp.com/send?phone=+8801580367168"
            linkText="Send a message"
          />
        </div>

        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-4 px-8 py-10 rounded-3xl shadow-2xl space-y-4 bg-white dark:bg-gray-800"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
            className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Your Message"
            required
            className="w-full p-3 bg-transparent border outline-none border-gray-300 dark:border-gray-700 rounded-2xl text-black dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 dark:focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white dark:text-gray-800 dark:bg-yellow-400 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <RiMailSendFill className="text-lg" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

// Contact Option Component
const ContactOption: React.FC<ContactOptionProps> = ({
  icon,
  title,
  subtitle,
  link,
  linkText,
}) => (
  <div className="p-5 rounded-full shadow-2xl text-center flex flex-col items-center gap-2 transition-transform transform hover:scale-105 bg-white dark:bg-gray-800">
    <div className="text-blue-500">{icon}</div>
    <h4 className="text-black dark:text-white text-lg font-semibold">
      {title}
    </h4>
    <h5 className="text-black dark:text-gray-400">{subtitle}</h5>
    <Link
      href={link}
      target="_blank"
      className="text-blue-500 dark:text-blue-400 text-sm underline hover:text-blue-300"
    >
      {linkText}
    </Link>
  </div>
);

export default Contact;
