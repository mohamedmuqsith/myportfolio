import ResumeImg from "../assets/images/resume.jpg";
import { motion } from "framer-motion";

const Resume = () => {
  const config = {
    link: "https://drive.google.com/file/d/1NEfpcgCZXVi8icxU9Ekbu8TizbTOGmue/view?usp=sharing"
  }
  return (
    <section id="resume" className="flex flex-col md:flex-row bg-dark-light py-20 px-5">
      <div className="md:w-1/2 flex justify-center items-center py-5">
        <motion.img
          className="w-[300px] md:w-[400px] rounded-lg shadow-xl border-4 border-slate-700"
          src={ResumeImg}
          alt="Resume Preview"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="flex flex-col justify-center text-white max-w-md">
          <h1 className="text-4xl border-b-4 mb-4 w-fit border-secondary font-bold font-hero-font tracking-wide">
            Resume
          </h1>
          <p className="pb-5 text-slate-300 text-lg leading-relaxed">
            You can view or download my resume by clicking the button below. It contains my detailed work experience, skills, and education.
          </p>
          <motion.a
            href={config.link}
            target="_blank"
            className="btn-primary w-fit flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};
export default Resume;
