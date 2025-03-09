import HeroImg from '../assets/images/hero.png'
import { FaLinkedin} from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";
const Hero=()=>{
    const confing={
        subtitle:'I am Frontend Developer and Designer'
    }
     return(
        <section id='hero' className='flex flex-col items-center  md:flex-row px-5 py-32 bg-secondary text-white justify-center'>
            <div className='md:w-1/2 flex  flex-col'>
            <h1 className='text-6xl font-hero-font'>Hi<br></br>I'm <span style={{color:'black'}}>M.F.M</span> Mukshith
            <p className='text-2xl'>{confing.subtitle}</p></h1>
            <div className='flex gap-5 py-8'>
                <a href="https://www.linkedin.com/in/m-f-m-mukshith/details/featured/" target="_blank"   className="social-icon"><FaLinkedin size={40}/></a>
                <a href="https://github.com/mohamedmuqsith" target="_blank"   className="social-icon"><AiFillGithub size={40}/></a>
                <a href="https://www.instagram.com/muqsithmalli6/" target="_blank"   className="social-icon"><LuInstagram size={40}/></a>
            </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} alt="" />

        </section>
     )
}
export default Hero;