import Libsrary from "../assets/images/Libsrary.png"
import WeatherAPP from'../assets/images/WeatherAPP.png'
import MessagerIMG from '../assets/images/MessagerIMG.png'


const Project = () => {
  const config = {
    projects: [
      {
        image: Libsrary,
        description: `Just built a Library Management System using the MERN stack (React.js, Tailwind CSS, Express.js, MongoDB)!
✅ Add, edit, delete, search books
✅ Responsive UI
✅ Full CRUD functionality

`,
        link: "https://library-mern-stack-pro.vercel.app/",
      },

      
      {
        image: WeatherAPP,
        description: `Weather App – Real-Time Weather Updates 🌤️
Built with React.js, Tailwind CSS, Axios, OpenWeather API

✅ Search any city
✅ Real-time weather, temperature & conditions
✅ Smooth, modern UI`,
        link: "https://weather-api-app-rust-iota.vercel.app/",
      },
      {
        image: MessagerIMG,
        description: `ChatApp – Messenger App 💬
Built with React.js, focusing on simplicity, responsiveness, and smooth messaging.

✅ Chat list with latest messages
✅ Save and access important chats
✅ Fully responsive for mobile & desktop`,
        link: "https://messager-app-two.vercel.app/",
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
        Here are some of my best projects, built using the MERN Stack (MongoDB, Express, React, Node.js), along with JavaScript and Tailwind CSS. Feel free to check them out!
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
