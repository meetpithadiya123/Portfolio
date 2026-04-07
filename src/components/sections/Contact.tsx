"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import FadeIn from "@/components/FadeIn";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "meet.temp123@gmail.com",
    id: "contact-email",
    copyable: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rajkot, Gujarat, India",
    id: "contact-location",
    copyable: false,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Always keep prefix
    if (!value.startsWith("+91 ")) {
      setFormData(prev => ({ ...prev, phone: "+91 " }));
      return;
    }

    // Extract only digits after +91 
    const digits = value.slice(4).replace(/\D/g, "");
    
    // Format: +91 XXXXX XXXXX
    let formatted = "+91 ";
    if (digits.length > 0) {
      formatted += digits.substring(0, 5);
    }
    if (digits.length > 5) {
      formatted += " " + digits.substring(5, 10);
    }

    setFormData((prev) => ({ ...prev, phone: formatted }));
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validation: Check if empty
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out all fields before sending.");
      return;
    }

    // 1.5 Validation: Check phone digits length (must be 10 digits after +91 )
    const phoneDigits = formData.phone.replace(/\D/g, "").slice(2); // Remove non-digits and skip '91'
    if (phoneDigits.length !== 10) {
      setErrorMsg("Please enter a valid 10-digit mobile number.");
      return;
    }

    // 2. Realistic Constraints Validation
    if (formData.name.trim().length < 3) {
      setErrorMsg("Please enter a valid real name (at least 3 characters).");
      return;
    }

    if (formData.subject.trim().length < 5) {
      setErrorMsg("Please enter a more descriptive subject line.");
      return;
    }

    if (formData.message.trim().length < 10) {
      setErrorMsg("Message is too short. Please provide more details.");
      return;
    }

    // 3. Validation: Check email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg("Please enter a realistically valid email address.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    try {
      // 3. Send direct to mail using FormSubmit AJAX API
      const response = await fetch("https://formsubmit.co/ajax/meet.temp123@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "System Notification": "This mail has come from your personal portfolio website.",
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Subject: formData.subject,
          Message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "+91 ", subject: "", message: "" });
    } catch {
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("meet.temp123@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-white dark:bg-[#080808] overflow-hidden"
    >
      <div className="blob-orange absolute w-[500px] h-[500px] -right-60 -top-20 opacity-20" />
      <div className="blob-amber absolute w-[400px] h-[400px] -left-40 bottom-0 opacity-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="section-tag">
            <span>💬</span> Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-lg">
            Whether you have a project idea, a position to fill, or just want
            to say hi — my inbox is always open!
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left panel — Contact info */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 border border-orange-50 dark:border-orange-900/20 shadow-glass dark:shadow-glass-dark h-full">
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.id} className="flex items-center gap-4" id={info.id}>
                    <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0">
                      <info.icon
                        size={18}
                        className="text-orange-500 dark:text-orange-400"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {info.label}
                      </div>
                      <div className="text-gray-800 dark:text-gray-200 font-semibold text-sm">
                        {info.value}
                      </div>
                    </div>
                    {info.copyable && (
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={copyEmail}
                        id="copy-email-btn"
                        aria-label="Copy email address"
                        className="ml-auto w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-orange-500 transition-colors"
                      >
                        {copied ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </motion.button>
                    )}
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-3">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: GithubIcon, href: "https://github.com/meetpithadiya123", id: "contact-github" },
                    { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/meet-pithadiya?utm_source=share_via&utm_content=profile&utm_medium=member_android", id: "contact-linkedin" },
                  ].map(({ Icon, href, id }) => (
                    <motion.a
                      key={id}
                      id={id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-200"
                    >
                      <Icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-100 dark:border-orange-900/30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-gray-800 dark:text-white">
                    Open to Work
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Available for internships, full-time roles, and
                  freelance projects starting immediately.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right panel — Contact form */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 border border-orange-50 dark:border-orange-900/20 shadow-glass dark:shadow-glass-dark">
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Meet will contact you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary mt-6 text-sm py-2 px-5"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="form-name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="abcd"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="form-email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="abcd@gmail.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="form-phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                        placeholder="12345 67890"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="form-subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project collaboration..."
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="form-message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="input-field resize-none"
                    />
                  </div>

                  <AnimatePresence>
                    {errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-500 dark:text-red-400 text-sm font-medium"
                      >
                        {errorMsg}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    id="form-submit-btn"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={submitting}
                    className="btn-primary w-full justify-center py-3.5 text-base"
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
