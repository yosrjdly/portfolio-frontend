import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Make sure you're using react-scroll for smooth scrolling

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-white">
        {/* Animated Background Words */}
        <div className="absolute inset-0 overflow-hidden">
          <p className="text-5xl font-bold text-gray-200 absolute top-10 left-12">
            Creative
          </p>
          <p className="text-5xl font-bold text-gray-300 absolute bottom-20 right-16">
            Developer
          </p>
          <p className="text-5xl font-bold text-gray-100 absolute top-1/3 left-1/4">
            Problem Solver
          </p>
          <p className="text-5xl font-bold text-gray-300 absolute bottom-24 left-20">
            Innovator
          </p>
          <p className="text-5xl font-bold text-gray-100 absolute top-20 right-28">
            Collaborator
          </p>
          <p className="text-5xl font-bold text-gray-200 absolute bottom-1/4 right-24">
            Tech Enthusiast
          </p>
        </div>

        {/* Main Intro Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-black mb-4">
            Hi, I'm <span className="text-purple-600">Yosr Jadly</span>
          </h1>
          <p className="text-xl text-gray-700">A passionate Full-Stack Developer with a creative edge</p>
        </div>

        {/* Down Arrow Indicator */}
        <div className="mt-8 animate-bounce cursor-pointer">
          <Link to="/about" smooth={true} duration={800}>
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full">
              <FaArrowDown className="text-white text-3xl" />
            </div>
          </Link>
        </div>
      </section>

      {/* Next Section */}
      
    </div>  
  );
};

export default HeroSection;
