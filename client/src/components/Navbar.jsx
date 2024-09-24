import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserAlt, FaBriefcase, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const location = useLocation(); // To track the current route
  const [hovered, setHovered] = useState(null); // Track hovered icon

  const links = [
    { to: '/', icon: <FaUserAlt size={15} />, label: 'Who I Am' },
    { to: '/work', icon: <FaBriefcase size={15} />, label: 'My Work' },
    { to: '/contact', icon: <FaEnvelope size={15} />, label: 'Contact Me' }
  ];

  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center">
      <div className="bg-gray-800 w-1/3 rounded-full py-2 flex justify-around items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className="flex flex-col items-center group relative"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Icon with hover and active effect */}
            <div
              className={`p-3 rounded-full transition transform duration-300
              ${hovered === index || location.pathname === link.to ? 'bg-purple-600 scale-110' : 'bg-gray-700'}
              `}
            >
              {React.cloneElement(link.icon, {
                className: `text-white transition-transform duration-300 ${
                  hovered === index || location.pathname === link.to ? 'scale-110' : 'scale-100'
                }`
              })}
            </div>
            {/* Text label */}
            <span
              className={`mt-2 text-sm text-gray-300 transition ${
                location.pathname === link.to ? 'text-purple-400' : ''
              }`}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Navbar;
