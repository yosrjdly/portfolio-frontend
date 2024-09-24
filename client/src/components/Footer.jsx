import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">
          <span className="text-purple-600">Yosr Jadly</span> Portfolio
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-purple-600">
          <a
            href="https://github.com/yosrjdly"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/yosr-jdly"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/your-twitter-username"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <p className="text-lg">Contact Me</p>
          <a
            href="mailto:jadlyyosr@gmail.com"
            className="text-purple-400 hover:text-white transition"
          >
            jadlyyosr@gmail.com
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Yosr Jadly. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
