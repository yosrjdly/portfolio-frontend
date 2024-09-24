import React from 'react';
import { FaCode, FaBrain, FaDesktop, FaUserGraduate } from 'react-icons/fa';

function WhoIAmCard() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-8 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-blue-700 text-white transform transition duration-500 hover:scale-105">
      <h2 className="text-4xl font-extrabold text-center mb-4 drop-shadow-lg">About Me</h2>
      <p className="mb-6 text-center text-lg italic">
        A passionate mathematician and computer scientist dedicated to crafting innovative and impactful solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start p-4 bg-gray-800 rounded-lg shadow-md transition hover:shadow-xl">
          <FaUserGraduate className="mr-4 text-4xl text-purple-300" />
          <div>
            <span className="text-lg font-bold">Mathematics & AI Enthusiast</span>
            <p className="text-sm">Bridging the gap between theory and practice.</p>
          </div>
        </div>
        <div className="flex items-start p-4 bg-gray-800 rounded-lg shadow-md transition hover:shadow-xl">
          <FaBrain className="mr-4 text-4xl text-purple-300" />
          <div>
            <span className="text-lg font-bold">Digital Solutions Architect</span>
            <p className="text-sm">Designing robust systems for seamless user experiences.</p>
          </div>
        </div>
        <div className="flex items-start p-4 bg-gray-800 rounded-lg shadow-md transition hover:shadow-xl">
          <FaDesktop className="mr-4 text-4xl text-purple-300" />
          <div>
            <span className="text-lg font-bold">Full-Stack Developer</span>
            <p className="text-sm">Transforming ideas into tangible, high-performance applications.</p>
          </div>
        </div>
        <div className="flex items-start p-4 bg-gray-800 rounded-lg shadow-md transition hover:shadow-xl">
          <FaCode className="mr-4 text-4xl text-purple-300" />
          <div>
            <span className="text-lg font-bold">Analytical Problem Solver</span>
            <p className="text-sm">Excelling in challenges across platforms such as LeetCode, Codeforces, Topcoder, and HackerRank.</p>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-lg font-semibold">
        More than just a developer; I'm a problem-solver committed to delivering elegant and efficient solutions.
      </p>
    </div>
  );
}

export default WhoIAmCard;
