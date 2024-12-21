import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup
    .string()
    .min(3, "Full name must be at least 3 characters.")
    .required("Full name is required."),
  subject: yup
    .string()
    .min(3, "Subject must be at least 3 characters.")
    .required("Subject is required."),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Must be a valid email address.",
    )
    .required("Email is required."),
  body: yup
    .string()
    .min(3, "Message must be at least 3 characters.")
    .required("Message is required."),
});

export default function ContactPage() {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log("Form Data:", data);
    setSuccessMessage(
      "Thank you for contacting us. Your message has been submitted.",
    );
    reset();
  }

  return (
    <main className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-lg"
      >
        {/* Full Name */}
        <label htmlFor="fullName" className="font-semibold">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName")}
          className="p-2 border rounded"
          placeholder="Enter your full name"
        />
        <p className="text-red-500 text-sm">{errors.fullName?.message}</p>

        {/* Subject */}
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className="p-2 border rounded"
          placeholder="Enter the subject"
        />
        <p className="text-red-500 text-sm">{errors.subject?.message}</p>

        {/* Email */}
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="p-2 border rounded"
          placeholder="Enter your email"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        {/* Message Body */}
        <label htmlFor="body" className="font-semibold">
          Message
        </label>
        <textarea
          id="body"
          {...register("body")}
          className="p-2 border rounded h-28"
          placeholder="Enter your message"
        />
        <p className="text-red-500 text-sm">{errors.body?.message}</p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Success Message */}
      {successMessage && (
        <p className="text-green-500 font-bold mt-4">{successMessage}</p>
      )}
    </main>
  );
}
