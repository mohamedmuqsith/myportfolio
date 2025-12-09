import AboutImg from "../assets/images/about_avatar.png";
import { motion } from "framer-motion";

const About = () => {
  const config = {
    line1: "Hi, my name is Mukshith. I am a MERN Stack Developer with a strong focus on backend development. I build scalable and efficient web applications using MongoDB, Express.js, React.js, and Node.js.",
    line2: "I am currently interning at <span class='text-cyan-400 font-bold'>Error Makes Clever</span> as a Web Development Intern. I am proficient in backend technologies such as Node.js, Express.js, MongoDB, and Mongoose.",
    line3: "I also have hands-on experience with <span class='text-cyan-400 font-bold'>Firebase</span>, Tailwind CSS, Git, and GitHub. I am passionate about writing clean, maintainable code and developing robust RESTful APIs.",
  };

  return (
    <section className="flex flex-col md:flex-row bg-gradient-to-b from-dark-light to-dark px-5 py-20" id="about">
      <div className="md:w-1/2 py-5 flex justify-center">
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
            src={AboutImg}
            alt="About Me"
            className="relative w-[300px] md:w-[400px] rounded-lg shadow-2xl border-2 border-slate-600 z-10"
          />
        </motion.div>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <motion.div
          className="flex flex-col justify-center p-6 text-white max-w-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1
            className="text-4xl font-bold border-b-4 border-cyan-500 pb-2 mb-6 w-fit font-hero-font tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="pb-4 text-justify text-slate-300 leading-relaxed"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {config.line1}
          </motion.p>
          <motion.p
            className="pb-4 text-justify text-slate-300 leading-relaxed"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            dangerouslySetInnerHTML={{ __html: config.line2 }}
          />
          <motion.p
            className="text-justify text-slate-300 leading-relaxed"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            dangerouslySetInnerHTML={{ __html: config.line3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
