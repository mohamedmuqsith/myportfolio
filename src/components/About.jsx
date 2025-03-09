import { section } from "framer-motion/m";
import AboutImg from "../assets/images/about.png";

const About = () => {
  const confing={
    line1:' Hi, My name is Mukshith. I am a Front-End Developer. I build responsive and visually appealing web applications with React.js and Tailwind CSS.',
    line2:' I am proficient in Frontend skills like',
    line3:'HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, React.js,',
    line4:'I have a keen eye for design and focus on delivering high-performance, responsive, and visually appealing web applications. My goal is to continuously learn and stay updated with the latest web technologies.',

  }
  return (
    <section className="flex flex-col md:flex-row mobile-nav"id="about">
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} alt="" />
      </div>
      <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col justify-center p-4  text-white">
          <h1 className="text-4xl  border-b-4 mb-2 w-[110px] border-[#082123] font-bold font-hero-font">
            About Me
          </h1>
          <p className="pb-5 text-justify">
         {confing.line1}
          </p>
          <p className="pb-5 text-justify">
         {confing.line2} <span className="font-bold">{confing.line3}</span> and I actively use <span className="font-bold"> GitHub </span>for version control.
          </p>
          <p className="text-justify">
          {confing.line4}
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
