import DresshopwebImg from "../assets/images/Dress__Shop__WebSite.png";
import GreendenwebImg from "../assets/images/Greenden__Website.png";
import TripadvisorwebImg from "../assets/images/Tripadvisor__website.png";
import CounterRandomImg from "../assets/images/CounterRandom__App.png";
import CargalleryImg from "../assets/images/Cat-image-gallery.png";
import UdemywebsiteImg from "../assets/images/udemy-website.png";
import Actodo from '../assets/images/Actodo.png'

const Project = () => {
  const config = {
    projects: [
      {
        image: DresshopwebImg,
        description: `I built CITY PALACE using HTML, Tailwind CSS, and JavaScript to deliver a modern, responsive, and interactive shopping experience.`,
        link: "https://mohamedmuqsith.github.io/CityPalace/index.html",
      },
      {
        image: GreendenwebImg,
        description: `Built 'Greenden,' a responsive front-end project using HTML, Tailwind CSS, and JavaScript.`,
        link: "https://mohamedmuqsith.github.io/greeden-tailwind/contact.html",
      },
      {
        image: Actodo,
        description: `Built a simple and responsive task management app using React.js and Tailwind CSS.`,
        link: "https://actodo-ecru.vercel.app/",
      },
    ],
  };

  return (
    <section
      id="project"
      className="flex flex-col justify-center px-5 py-20 text-white bg-secondary"
    >
      <div className="w-full text-center">
        <h1 className="text-4xl border-b-4 mb-2 inline-block border-[#2a9ca3] font-bold">
          Projects
        </h1>
        <p className="pb-5 text-lg">
          These are some of my best projects. I have built these with React,
          JavaScript, and Tailwind CSS. Check them out.
        </p>
      </div>

  
      <div className="w-full px-5">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {config.projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg">
              <img
                className="h-[250px] w-full object-cover"
                src={project.image}
                alt="Project"
              />
              <div className="p-5">
                <p className="text-lg text-center">{project.description}</p>
                <div className="flex justify-center mt-3">
                  <a
                    className="bg-[#2a9ca3] text-white px-4 py-2 rounded-md hover:bg-[#1e7a81] transition duration-300"
                    target="_blank"
                    href={project.link}
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
