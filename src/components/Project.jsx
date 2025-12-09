import websiteImg1 from "../assets/images/Greenden__Website.png";
import websiteImg2 from "../assets/images/Tripadvisor__website.png";
import websiteImg3 from "../assets/images/WeatherAPP.png";
import { motion } from "framer-motion";

const Project = () => {
  const config = {
    projects: [
      {
        image: websiteImg1,
        title: "Greenden Website",
        description: "A plant nursery website built with basic HTML and TailwindCSS.",
        link: "https://greenden-gilt.vercel.app/",
      },
      {
        image: websiteImg2,
        title: "Tripadvisor Clone",
        description: "A travel advisor clone with a modern UI using TailwindCSS.",
        link: "https://tripadvisor-clone-gamma.vercel.app/",
      },
      {
        image: websiteImg3,
        title: "Weather App",
        description: "A dynamic weather application fetching real-time data.",
        link: "", // Add link if available
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
              className="relative w-full md:w-[350px] h-[250px] rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-slate-700"
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
              <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-2 font-hero-font tracking-wide">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                {project.link && (
                  <a
                    className="btn-primary text-sm px-6 py-2 rounded-full"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
