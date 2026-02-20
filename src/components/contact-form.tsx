"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after successful submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl border-2 border-black bg-pale p-6 shadow-[4px_4px_0px_black] md:p-8">
        <div className="text-center">
          <h3 className="mb-4 font-ibm text-xl font-bold text-main">Message Sent! 🎉</h3>
          <p className="text-gray-700">
            Thanks for reaching out! We'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl border-2 border-black bg-pale p-6 shadow-[4px_4px_0px_black] md:p-8"
    >
      <div className="grid gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="mb-2 block font-ibm text-sm font-bold">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-2 border-black bg-white p-3 font-poppins shadow-[2px_2px_0px_black] transition-shadow focus:shadow-[4px_4px_0px_black] focus:outline-none"
            placeholder="Your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="mb-2 block font-ibm text-sm font-bold">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-2 border-black bg-white p-3 font-poppins shadow-[2px_2px_0px_black] transition-shadow focus:shadow-[4px_4px_0px_black] focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="mb-2 block font-ibm text-sm font-bold">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border-2 border-black bg-white p-3 font-poppins shadow-[2px_2px_0px_black] transition-shadow focus:shadow-[4px_4px_0px_black] focus:outline-none"
          >
            <option value="">Select a subject</option>
            <option value="restaurant-suggestion">Restaurant Suggestion</option>
            <option value="review-feedback">Review Feedback</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="press-partnership">Press & Partnerships</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="mb-2 block font-ibm text-sm font-bold">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full resize-none border-2 border-black bg-white p-3 font-poppins shadow-[2px_2px_0px_black] transition-shadow focus:shadow-[4px_4px_0px_black] focus:outline-none"
            placeholder="Tell us what's on your mind..."
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full border-2 border-black bg-main font-ibm text-lg font-bold text-white shadow-[4px_4px_0px_black] transition-all hover:bg-main/90 hover:shadow-[6px_6px_0px_black] disabled:opacity-50 md:w-auto md:self-start"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        * Required fields. We'll never share your email address.
      </p>
    </form>
  );
}
