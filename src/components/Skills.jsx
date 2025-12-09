import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaGithub, FaGitAlt, FaJava, FaPython, FaLinux } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiMysql, SiPostman, SiFigma } from "react-icons/si";
import { motion } from 'framer-motion';

const skills = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" }, // White in dark mode
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3 />, color: "#1572B6" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" }, // White in dark mode
    { name: "Linux", icon: <FaLinux />, color: "#FCC624" }, // Linux Yellow/Gold
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
];

const Skills = () => {
    return (
        <section className="py-20 bg-dark" id="skills">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4 border-b-4 border-primary pb-2 font-hero-font tracking-wide">
                        My Skills
                    </h2>
                    <p className="text-slate-400 text-center max-w-2xl">
                        Technologies and tools I use to build scalable and efficient web applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 flex flex-col items-center justify-center gap-4 cursor-pointer group"
                            whileHover={{ y: -10, scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(14,165,233,0.5)]" style={{ color: skill.color === "#000000" || skill.color === "#181717" ? "#fff" : skill.color }}>
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
