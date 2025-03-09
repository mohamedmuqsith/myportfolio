import { section } from "framer-motion/m";
import ResumeImg from "../assets/images/resume.jpg";

const Contact = () => {
  return (
    <section className="flex flex-col py-32 bg-secondary text-white" id="contact">
      <div className=" flex flex-col items-center ">
       
          <h1 className="text-4xl  border-b-4 mb-2 w-[90px] border-[#082123] font-bold font-hero-font">
           Contact
          </h1>
          <p className="pb-5 text-justify">
         if you want to discuss more in detail,please contact me 
          </p>
          <p  className="font-bold py-2">Email:<span>errormakesclover35@gmail.com</span></p>
          <p  className="font-bold py-2">Phone:<span>+941617178</span></p>

        </div>
   
    </section>
  );
};
export default Contact;
