import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaLaptopCode } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { BsPersonLinesFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import profileImg from '../assets/photos/profile2.jpg'
import resume from '../assets/Resume.pdf'


const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const iconsRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.8, ease: "power3.out" } });

    tl.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 })
      .fromTo(imageRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 }, "-=0.4")
      .fromTo(iconsRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.2")
      .fromTo(btnRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.2");

    return () => tl.kill();
  }, []);

  const scrollToContact = () => {
    const section = document.querySelector('#contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen  text-white pt-16">
      <div className="flex flex-wrap-reverse md:flex-nowrap py-10 md:flex-row gap-10 items-center justify-center min-h-screen px-6 md:px-10">
        <motion.div
          ref={textRef}
          className="md:w-1/2 text-center md:text-left md:pl-30 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
            Hello,<br />
            This is <span className="text-pink-500">Sri Keerthi</span>,<br />
            a <span className="text-green-400">Software Developer</span>
          </h1>

          <motion.div
            ref={iconsRef}
            className="flex justify-center md:justify-start gap-6 text-3xl "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="https://github.com/srikeerthireddy" target="_blank" className='hover:invert'><FaGithub className='size-10' /></a>
            <a href="https://www.linkedin.com/in/sri-keerthi-y-519b312a3/" target="_blank"  className='hover:text-blue-800'><FaLinkedin className='size-10 ' /></a>
            <a href="https://leetcode.com/u/srikeerthireddy/" target="_blank" className='hover:text-orange-500'><FaLaptopCode className='size-10'/></a>
          </motion.div>

          <motion.div
            ref={btnRef}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              className="bg-pink-500 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-pink-600"
              onClick={scrollToContact}
            >
              Contact Me
            </button>
            <a href={resume} download className="bg-green-500 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-600 flex items-center gap-2">
              <HiDownload /> Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          ref={imageRef}
          className="w-1/2 text-center flex justify-center items-center md:text-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src={profileImg} alt="Profile" className="md:rounded-full rounded-3xl w-60 h-60 md:h-90 md:w-90 object-cover outline-2 outline-amber-100 hover:shadow-2xl mx-auto md:mx-0" />

        </motion.div>
      </div>
    </div>
  );
};

export default Home;
