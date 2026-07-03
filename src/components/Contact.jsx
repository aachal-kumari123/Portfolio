import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "a0341664-53f7-4a82-85db-db0fee7ef8c9",
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        userInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success("Your message has been sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill out the form below to contact me.</span>

        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl shadow-lg"
          >
            <h1 className="text-xl font-semibold mb-4">
              Send Your Message
            </h1>

            {/* Full Name */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">
                Full Name
              </label>

              <input
                {...register("name", {
                  required: "Full name is required",
                })}
                className="shadow rounded-lg border py-2 px-3 focus:outline-none"
                type="text"
                placeholder="Enter your full name"
              />

              {errors.name && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">
                Email Address
              </label>

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="shadow rounded-lg border py-2 px-3 focus:outline-none"
                type="email"
                placeholder="Enter your email address"
              />

              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-1">
                Message
              </label>

              <textarea
                {...register("message", {
                  required: "Message is required",
                })}
                className="shadow rounded-lg border py-2 px-3 focus:outline-none"
                rows="5"
                placeholder="Enter your message"
              />

              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-5 py-2 hover:bg-slate-700 duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;