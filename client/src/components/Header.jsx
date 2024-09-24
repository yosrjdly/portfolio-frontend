import React from 'react';

const Header = () => {
  return (
    <header className="bg-deepBlue text-offWhite p-4 md:p-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 md:mb-0">
          <a href="#home" className="hover:text-coral transition-colors">My Portfolio</a>
        </h1>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li><a href="#home" className="text-lg font-semibold hover:text-coral transition-colors">Home</a></li>
            <li><a href="#projects" className="text-lg font-semibold hover:text-coral transition-colors">Projects</a></li>
            <li><a href="#blog" className="text-lg font-semibold hover:text-coral transition-colors">Blog</a></li>
            <li><a href="#contact" className="text-lg font-semibold hover:text-coral transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
