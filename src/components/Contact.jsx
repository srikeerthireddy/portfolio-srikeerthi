import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.2
    }
  })
};

const ContactItem = ({ icon, title, value, custom }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    custom={custom}
    className="flex items-center space-x-4 mb-6"
  >
    <div className="text-pink-500 text-2xl">{icon}</div>
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <div
      className="min-h-screen w-full bg-gray-800 p-4 sm:p-8 md:p-12 pt-24 scroll-smooth"
      id="contact"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-12 text-white text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Get In Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <ContactItem
                icon={<FaEnvelope />}
                title="Email"
                value="srikeerthi@example.com"
                custom={1}
              />
              <ContactItem
                icon={<FaPhone />}
                title="Phone"
                value="+1 (123) 456-7890"
                custom={2}
              />
              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="San Francisco, CA"
                custom={3}
              />
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="pt-6"
            >
              <h3 className="text-white text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-pink-500 transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="#" className="text-white hover:text-pink-500 transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-pink-500 transition-colors">
                  <FaTwitter size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
