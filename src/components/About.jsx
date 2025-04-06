import { section } from "framer-motion/m";
import AboutImg from "../assets/images/about.png";

const About = () => {
  const confing={
    line1:'Hi, my name is Mukshith. I am a MERN Stack Developer with a strong focus on backend development. I build scalable and efficient web applications using MongoDB, Express.js, React.js, and Node.js.',
    line2:' I am proficient in backend technologies such as Node.js, Express.js, MongoDB, and Mongoose, and I actively use Git and GitHub for version control. On the frontend, I have experience with HTML, CSS, Tailwind CSS, JavaScript, and React.js.',
    line3:'I’m passionate about writing clean, maintainable code and developing robust APIs. My goal is to continuously improve my skills and stay up-to-date with the latest trends in full-stack development.',


  }
  return (
    <section className="flex flex-col md:flex-row mobile-nav"id="about">
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} alt="" />
      </div>
      <div className="flex justify-center md:w-1/2 ">
        <div className="flex flex-col justify-center p-4 text-white">
          <h1 className="text-4xl  border-b-4 mb-2 w-[110px] border-[#082123] font-bold font-hero-font">
            About Me
          </h1>
          <p className="pb-5 text-justify">
         {confing.line1}
          </p>
          <p className="pb-5 text-justify">
         {confing.line2} 
          </p>
          <p className="text-justify">
          {confing.line3}
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
