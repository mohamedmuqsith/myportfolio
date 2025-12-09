import HeroImg from "../assets/images/mukshith.jpg";
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
    const config = {
        subtitle: "MERN Stack Developer",
        social: {
            github: "https://github.com/mohamedmuqsith",
            linkedin: "https://www.linkedin.com/in/m-f-m-mukshith/",
            instagram: "https://instagram.com/muqsithmalli6",
        },
    };

    return (
        <section className="flex flex-col md:flex-row px-5 py-32 bg-dark justify-center items-center min-h-screen relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <motion.div
                className="md:w-1/2 flex flex-col z-10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-white text-6xl md:text-8xl font-hero-font mb-4 tracking-wider leading-tight">
                    Hi, <br /> I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Mukshith</span>
                </h1>
                <div className="flex flex-col text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 h-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {config.subtitle}
                    </motion.span>
                </div>

                <div className="flex gap-6 mt-4">
                    {[
                        { Icon: AiOutlineGithub, link: config.social.github },
                        { Icon: AiOutlineLinkedin, link: config.social.linkedin },
                        { Icon: AiOutlineInstagram, link: config.social.instagram },
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-primary transition-colors duration-300 text-3xl"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                            <item.Icon />
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="md:w-1/2 flex justify-center z-10 mt-10 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-50 animate-pulse"></div>
                    <img
                        className="w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl relative z-10"
                        src={HeroImg}
                        alt="Mukshith"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;