import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setNav(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'showcase', id: 'showcase' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-[#1B2631]  backdrop-blur-sm shadow-lg' : 'bg-[#1B2631]'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-4xl font-bold text-white">Sri<span className="text-pink-500">Keerthi</span></a>

        <ul className="hidden md:flex text-2xl space-x-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="transition-all duration-300 text-white cursor-pointer hover:text-pink-500 md:font-semibold"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>


        <div onClick={handleNav} className="md:hidden cursor-pointer z-20">
          {nav ? <HiX size={30} className="text-white" /> : <HiMenuAlt3 size={30} className="text-white" />}
        </div>

        <motion.div
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col justify-center items-center z-10 transition-all duration-500 ${nav ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: nav ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="text-center space-y-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-2xl transition duration-300 ${activeSection === item.id ? 'text-pink-500 font-semibold' : 'text-white hover:text-pink-500'}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
