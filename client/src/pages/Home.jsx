import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import About from './About';
import Skills from '../components/Skills';
import MyEducation from '../components/MyEducation';

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // 4 seconds splash duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Home">
      {/* Splash Screen */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-800 z-50 transition-all duration-1000 
        ${!isLoading ? 'opacity-0 translate-y-[-100px]' : 'opacity-100 translate-y-0'}`}
      >
        <h1 className="text-5xl text-purple-500 animate-bounce font-extrabold tracking-widest mb-5">
          Yosr Jadly
        </h1>
        <p className="text-2xl font-bold text-white tracking-wide animate-slideInUp">
          "Unlock the Code. Dive into Creativity."
        </p>
        <div className="mt-5">
          <div className="loader"></div> {/* Add loader animation */}
        </div>
      </div>

      {/* Main Content */}
      <HeroSection />
      <About />
      <MyEducation />
      <Skills />
      <Navbar />
    </div>
  );
}

export default Home;
