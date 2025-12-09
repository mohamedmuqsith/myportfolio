import { useState } from "react";
import ResumeImg from "../assets/images/resume_new.png";
import EmcImg from "../assets/images/emc.jpg";
import HndImg from "../assets/images/hnd.jpg";
import DitechImg from "../assets/images/Ditech.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Resume = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const config = {
    link: "https://drive.google.com/file/d/1NEfpcgCZXVi8icxU9Ekbu8TizbTOGmue/view?usp=sharing",
  };

  const educations = [
    {
      degree: "BSc (Hons) Software Engineering",
      institution: "Top-Up, ESOFT Metro Campus / Kingston University",
      status: "Ongoing",
    },
    {
      degree: "HND - Software Engineering",
      institution: "ESOFT Metro Campus (2023 to 2025)",
      grade: "CGPA - 3.4, Merit",
    },
    {
      degree: "DITEC - IT",
      institution: "ESOFT Metro Campus (2023 to 2024)",
      grade: "CGPA - 3.2, Merit",
    },
  ];

  const certifications = [
    {
      title: "MERN full stack web development",
      provider: "Error Makes Clever",
      image: EmcImg,
    },
    {
      title: "Assured Diploma in IT",
      provider: "ESOFT, Pearson (2024)",
      image: DitechImg,
    },
    {
      title: "HND in Software Engineering",
      provider: "ESOFT Metro Campus, Pearson",
      image: HndImg,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-dark to-dark-light w-full relative">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            layoutId={selectedImage}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-5 right-5 text-white/70 hover:text-white transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="h-10 w-10" />
            </motion.button>
            <motion.img
              src={selectedImage}
              alt="Expanded Certificate"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border-2 border-cyan-500 object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Section */}
      <section
        id="resume"
        className="flex flex-col md:flex-row py-20 px-5 justify-center items-center gap-10"
      >
        <div className="md:w-1/2 flex justify-center items-center py-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg transform translate-x-3 translate-y-3 blur opacity-50"></div>
            <img
              className="relative w-[300px] md:w-[400px] rounded-lg shadow-2xl border-2 border-slate-600 z-10"
              src={ResumeImg}
              alt="Resume Preview"
            />
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <motion.div
            className="flex flex-col justify-center text-white max-w-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1
              className="text-4xl border-b-4 mb-4 w-fit border-cyan-500 font-bold font-hero-font tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Resume
            </motion.h1>
            <motion.p
              className="pb-5 text-slate-300 text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              You can view or download my resume by clicking the button below.
              It contains my detailed work experience, skills, and education.
            </motion.p>
            <motion.a
              href={config.link}
              target="_blank"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 w-fit flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-10 px-5 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold border-b-4 border-cyan-500 w-fit mb-8 mx-auto font-hero-font">
            Education
          </h2>
          <div className="flex flex-col gap-6">
            {educations.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/80 p-6 rounded-lg shadow-lg border-l-4 border-cyan-500 hover:bg-slate-700/80 transition relative overflow-hidden group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-xl font-semibold text-cyan-400 relative z-10">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 text-md mt-2 relative z-10">{edu.institution}</p>
                {(edu.status || edu.grade) && (
                  <p className="text-sm text-gray-400 mt-1 italic relative z-10">
                    {edu.status || edu.grade}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certification Section */}
      <section className="py-10 px-5 text-white pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold border-b-4 border-cyan-500 w-fit mb-12 mx-auto font-hero-font">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/80 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transition duration-300 border border-slate-700 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(cert.image)}
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-4 relative">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2 h-14 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.provider}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};
export default Resume;
