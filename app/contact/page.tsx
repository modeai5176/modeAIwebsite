"use client";

import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Website Development",
    "Business Process Automation (BPA)",
    "CRM Automation",
    "AI Workflows & Custom AI Development",
    "Custom API Integrations",
    "AI Agents",
    "Website Automation",
    "Digital Marketing and SEO",
    "Automated Email Marketing and SMS Marketing",
  ];

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // keep existing behavior - user can wire API endpoint
    try {
      // placeholder: perform submission
    } catch (err) {
      /* noop */
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#07080a] to-[#0b0b0d] text-white antialiased">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        {/* Top hero/title */}
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-white/6 text-sm mb-4">
            Contact
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Get in Touch with Us
          </h1>
          <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
            Have questions or need AI solutions? Let us know by filling out the
            form, and we'll be in touch!
          </p>
        </div>

        {/* Info cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <article className="relative overflow-hidden rounded-[18px] bg-[#0b0b0c] border border-[#151516] p-5 shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3747b6] to-[#1f3fb3] flex items-center justify-center shadow-md">
                  <Mail className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium">E-mail</div>
                  <div className="text-sm text-white/70 mt-1">
                    info@graphsensesolutions.com
                  </div>
                </div>
              </div>
              {/* blue bottom glow */}
              <div className="pointer-events-none absolute right-0 bottom-0 w-36 h-20 bg-gradient-to-l from-[#153b9f]/70 to-transparent rounded-tl-xl opacity-95" />
            </article>

            <article className="relative overflow-hidden rounded-[18px] bg-[#0b0b0c] border border-[#151516] p-5 shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3747b6] to-[#1f3fb3] flex items-center justify-center shadow-md">
                  <Phone className="text-white" size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium">Phone</div>
                  <div className="text-sm text-white/70 mt-1">
                    +91 87884 41532
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute right-0 bottom-0 w-36 h-20 bg-gradient-to-l from-[#153b9f]/70 to-transparent rounded-tl-xl opacity-95" />
            </article>
          </div>

          {/* Form card */}
          <div className="rounded-[20px] bg-[#070708] border border-[#161617] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/80 mb-2">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full rounded-md bg-[#0d0d10] border border-[#1f1f1f] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2f57b6] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-2">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full rounded-md bg-[#0d0d10] border border-[#1f1f1f] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2f57b6] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/80 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-md bg-[#0d0d10] border border-[#1f1f1f] px-4 py-3 pr-12 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2f57b6] transition"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0b0b0d] p-1 rounded-md border border-[#1f1f1f]">
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M2 4.5C2 3.67157 2.67157 3 3.5 3H20.5C21.3284 3 22 3.67157 22 4.5V19.5C22 20.3284 21.3284 21 20.5 21H3.5C2.67157 21 2 20.3284 2 19.5V4.5Z"
                          stroke="#7ee3b5"
                          strokeWidth="0.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 6L12 13L2 6"
                          stroke="#7ee3b5"
                          strokeWidth="0.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-2">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-md bg-[#0d0d10] border border-[#1f1f1f] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2f57b6] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-md bg-[#0d0d10] border border-[#1f1f1f] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2f57b6] transition"
                >
                  <option value="" className="text-white bg-[#0d0d10]">
                    Select a service
                  </option>
                  {services.map((s, idx) => (
                    <option
                      key={idx}
                      value={s}
                      className="text-white bg-[#0d0d10]"
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full rounded-md bg-[#0d0d10] border border-[#1f1f1f] px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#2f57b6] transition resize-vertical"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-gradient-to-r from-[#2f57b6] to-[#2a55b8] shadow-[0_8px_30px_rgba(47,87,182,0.28)] flex items-center justify-center gap-2 text-white font-medium transition hover:brightness-105"
                >
                  <span>Submit Form</span>
                </button>
              </div>
            </form>
          </div>

          {/* small footer spacing */}
          <div className="h-10" />
        </div>
      </div>
    </div>
  );
}
