import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "#contact" },
  ];

  // Variants for the menu container
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Variants for individual list items
  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass px-5 py-4 flex justify-between items-center transition-all duration-300">
      <motion.a
        href="/"
        className="flex items-center gap-2 font-bold font-hero-font tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-4xl text-white drop-shadow-md">M</span>
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Mukshith</span>
      </motion.a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-300 text-lg font-medium"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={handleToggle}
        className="block md:hidden text-white text-2xl focus:outline-none z-50 relative"
      >
        {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                onClick={handleToggle}
                className="text-3xl text-white hover:text-primary font-hero-font tracking-wider font-bold"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
