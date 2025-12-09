import websiteImg1 from "../assets/images/Greenden__Website.png";
import websiteImg2 from "../assets/images/Tripadvisor__website.png";
import websiteImg3 from "../assets/images/WeatherAPP.png";
import websiteImg4 from "../assets/images/Libsrary.png";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Project = () => {
  const config = {
    projects: [
      {
        image: websiteImg4,
        title: "Library System",
        description: "Full-stack Library Management System built with MERN stack.",
        link: "https://library-mern-stack-pro.vercel.app/",
        github: "https://github.com/mohamedmuqsith/Library_MERN_Stack_Pro.git"
      },
      {
        image: websiteImg3,
        title: "Weather App",
        description: "Real-time weather application using React & OpenWeather API.",
        link: "https://weather-api-app-rust-iota.vercel.app/",
        github: "https://github.com/mohamedmuqsith/Weather-API-App.git"
      },
      {
        image: websiteImg2,
        title: "TripAdvisor Clone",
        description: "Responsive travel advisor UI clone using Tailwind CSS.",
        link: "https://mohamedmuqsith.github.io/Tripadvisor-webpage/",
        github: "https://github.com/mohamedmuqsith/Tripadvisor-webpage.git"
      },
      {
        image: websiteImg1,
        title: "Greenden",
        description: "Plant nursery landing page using HTML & Tailwind CSS.",
        link: "https://mohamedmuqsith.github.io/greeden-tailwind/",
        github: "https://github.com/mohamedmuqsith/greeden-tailwind.git"
      },
    ],
  };

  return (
    <section className="flex flex-col py-20 px-5 justify-center bg-dark" id="project">
      <div className="w-full flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 border-b-4 border-primary pb-2 font-hero-font tracking-wide">
          Projects
        </h1>
        <p className="text-slate-400 text-center max-w-2xl">
          Here are some of the projects I've worked on.
        </p>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
          {config.projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative w-full md:w-[350px] h-[300px] rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-slate-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2 font-hero-font tracking-wide">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-6">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    className="btn-primary text-sm px-4 py-2 rounded-full flex items-center gap-2"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineLink /> Live
                  </a>
                  <a
                    className="btn-outline text-sm px-4 py-2 rounded-full flex items-center gap-2"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
