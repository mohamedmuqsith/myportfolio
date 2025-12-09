import AboutImg from "../assets/images/about.png";
import { motion } from "framer-motion";

const About = () => {
  const config = {
    line1: 'Hi, my name is Mukshith. I am a MERN Stack Developer with a strong focus on backend development. I build scalable and efficient web applications using MongoDB, Express.js, React.js, and Node.js.',
    line2: 'I am proficient in backend technologies such as Node.js, Express.js, MongoDB, and Mongoose, and I actively use Git and GitHub for version control. On the frontend, I have experience with HTML, CSS, Tailwind CSS, JavaScript, and React.js.',
    line3: 'I’m passionate about writing clean, maintainable code and developing robust APIs. My goal is to continuously improve my skills and stay up-to-date with the latest trends in full-stack development.',
  };

  return (
    <section className="flex flex-col md:flex-row bg-dark px-5 py-20" id="about">
      <div className="md:w-1/2 py-5 flex justify-center">
        <motion.img
          src={AboutImg}
          alt="About Me"
          className="w-2/3 md:w-1/2 object-contain drop-shadow-[0_0_20px_rgba(14,165,233,0.3)]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <motion.div
          className="flex flex-col justify-center p-6 text-white max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold border-b-4 border-primary pb-2 mb-6 w-fit font-hero-font tracking-wide">
            About Me
          </h1>
          <p className="pb-4 text-justify text-slate-300 leading-relaxed">
            {config.line1}
          </p>
          <p className="pb-4 text-justify text-slate-300 leading-relaxed">
            {config.line2}
          </p>
          <p className="text-justify text-slate-300 leading-relaxed">
            {config.line3}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
