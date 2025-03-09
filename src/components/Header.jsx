import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header id='header' className="flex justify-between p-4 bg-primary">

      <a className="text-3xl font-bold font-hero-font" href="">M.F.M Mukshith</a>

  
      <nav className="hidden md:block">
        <ul className="flex gap-4 text-white">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

    
      <div
        className={`fixed top-16 left-0 w-full h-full bg-opacity-90 transition-opacity duration-300 ease-in-out ${
          toggleMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setToggleMenu(false)} 
      >
        <nav
          className={`block md:hidden  w-full transition-transform duration-300 ease-in-out ${
            toggleMenu ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <ul className="flex flex-col gap-4 text-white text-center">
            <li className='border-b-2 py-4'><a href="#">Home</a></li>
            <li className='border-b-2 py-4'><a href="#about">About</a></li>
            <li className='border-b-2 py-4'><a href="#project">Projects</a></li>
            <li className='border-b-2 py-4'><a href="#resume">Resume</a></li>
            <li className='border-b-2 py-4'><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

  
      <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
        <Bars3Icon className='text-white h-6' />
      </button>
    </header>
  );
};

export default Header;