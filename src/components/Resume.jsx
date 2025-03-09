import { section } from "framer-motion/m";
import ResumeImg from "../assets/images/resume.jpg";

const Resume = () => {
  return (
    <section id="resume" className="flex flex-col md:flex-row mobile-nav">
      <div className="py-5 md:w-1/2 flex justify-end px-5">
        <img className="w-[600px]" src={ResumeImg} alt="" />
      </div>
      <div className="md:w-1/2 flex justify-center ">
        <div className="flex flex-col justify-center p-4  text-white">
          <h1 className="text-4xl  border-b-4 mb-2 w-[90px] border-[#082123] font-bold font-hero-font">
           Resume
          </h1>
          <p className="pb-5 text-justify">
         You can View my resume <a href="https://drive.google.com/file/d/18tw0AAKza4gkhu1tRoRPg-DdRvrOQac7/view?usp=sharing" target="_blank" className="btn">Download</a>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Resume;
