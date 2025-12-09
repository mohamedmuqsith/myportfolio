import { section } from "framer-motion/m";
import ResumeImg from "../assets/images/resume.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // WhatsApp Integration
    // Format the message for WhatsApp
    const whatsappMessage = `*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/94761617178?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="flex flex-col py-20 bg-dark px-5" id="contact">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold text-white border-b-4 border-secondary pb-2 font-hero-font tracking-wide">
          Contact Me
        </h1>
        <p className="text-slate-400 mt-4 text-center">
          Please fill out the form below to discuss any work opportunities.
        </p>
      </div>

      <div className="flex justify-center">
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-1/2 glass-card p-8 gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col">
            <label className="text-slate-300 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-slate-300 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-slate-300 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input-field h-32 resize-none"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button className="btn-primary w-full mt-4 flex justify-center items-center shadow-lg hover:shadow-cyan-500/50">
            Send via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
