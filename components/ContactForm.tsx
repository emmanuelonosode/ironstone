"use client";

import { useState } from "react";

const projectTypes = [
  "Commercial Construction",
  "Residential Construction",
  "Renovation & Remodeling",
  "Project Management",
  "Sustainable Building",
  "Interior Construction",
  "General Inquiry",
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "", projectType: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.projectType) e.projectType = "Please select a type";
    if (!form.message.trim() || form.message.trim().length < 20) e.message = "Minimum 20 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const fieldBase = "w-full px-0 py-4 bg-transparent border-0 border-b font-body text-base text-on-surface placeholder:text-muted outline-none transition-colors duration-200 focus:border-on-surface";
  const fieldNormal = `${fieldBase} border-border`;
  const fieldError = `${fieldBase} border-red-500`;

  if (submitted) {
    return (
      <div className="py-20 border-t border-border">
        <p className="label-eyebrow text-muted mb-4">Message received</p>
        <h3 className="display-md text-on-surface mb-6">
          THANK YOU,<br />{form.firstName.toUpperCase()}.
        </h3>
        <p className="font-body text-base text-muted max-w-sm leading-relaxed">
          Our team will review your enquiry and be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10">
        <div>
          <label className="label-eyebrow block mb-1">First Name *</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Robert" className={errors.firstName ? fieldError : fieldNormal} />
          {errors.firstName && <p className="label-eyebrow text-red-500 mt-2">{errors.firstName}</p>}
        </div>
        <div>
          <label className="label-eyebrow block mb-1 mt-6 sm:mt-0">Last Name *</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Ironstone" className={errors.lastName ? fieldError : fieldNormal} />
          {errors.lastName && <p className="label-eyebrow text-red-500 mt-2">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10 mt-8">
        <div>
          <label className="label-eyebrow block mb-1">Email Address *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={errors.email ? fieldError : fieldNormal} />
          {errors.email && <p className="label-eyebrow text-red-500 mt-2">{errors.email}</p>}
        </div>
        <div>
          <label className="label-eyebrow block mb-1 mt-6 sm:mt-0">Phone</label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (512) 000-0000" className={fieldNormal} />
        </div>
      </div>

      {/* Project type */}
      <div className="mt-8">
        <label className="label-eyebrow block mb-1">Project Type *</label>
        <div className="relative">
          <select name="projectType" value={form.projectType} onChange={handleChange} className={`${errors.projectType ? fieldError : fieldNormal} appearance-none cursor-pointer pr-8`}>
            <option value="" disabled>Select a service…</option>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none">expand_more</span>
        </div>
        {errors.projectType && <p className="label-eyebrow text-red-500 mt-2">{errors.projectType}</p>}
      </div>

      {/* Message */}
      <div className="mt-8">
        <label className="label-eyebrow block mb-1">Project Details *</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your project — location, approximate size, timeline, and any specific requirements…" className={`${errors.message ? fieldError : fieldNormal} resize-none`} />
        {errors.message && <p className="label-eyebrow text-red-500 mt-2">{errors.message}</p>}
      </div>

      {/* Submit */}
      <div className="mt-12">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 border border-on-surface text-on-surface py-5 font-label font-semibold text-sm tracking-widest uppercase hover:bg-on-surface hover:text-background transition-colors duration-200"
        >
          Send Message
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
        <p className="label-eyebrow text-muted text-center mt-4">
          We respond within one business day.
        </p>
      </div>
    </form>
  );
}
