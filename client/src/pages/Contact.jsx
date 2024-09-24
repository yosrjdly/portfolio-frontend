import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // For the interactive map, using react-leaflet
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS for map styles
import Footer from '../components/Footer.jsx';

const ContactMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-4 b-200">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Let’s Connect</h2>
        <p className="text-xl text-gray-600">Have a question, project, or just want to say hello? I’d love to hear from you.</p>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Reach Out To Me</h3>

            <div className="flex items-center justify-center space-x-4">
              <FaEnvelope className="text-purple-600 text-3xl" />
              <a href="mailto:jadlyyosr@gmail.com" className="text-xl font-semibold text-gray-700 hover:text-purple-600 transition duration-300">jadlyyosr@gmail.com</a>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <FiPhone className="text-purple-600 text-3xl" />
              <a href="tel:+21699855238" className="text-xl font-semibold text-gray-700 hover:text-purple-600 transition duration-300">+21699855238</a>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <FaLinkedin className="text-purple-600 text-3xl" />
              <a href="www.linkedin.com/in/yosr-jdly" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-700 hover:text-purple-600 transition duration-300"> LinkedIn Profile</a>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <FaGithub className="text-purple-600 text-3xl" />
              <a href="https://github.com/yosrjdly" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-gray-700 hover:text-purple-600 transition duration-300"> GitHub Profile</a>
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Me Here</h3>
          <div className="h-64 w-full shadow-lg rounded-lg overflow-hidden">
            <MapContainer center={[33.8869, 9.5375]} zoom={6} scrollWheelZoom={false} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[36.8065, 10.1815]}>
                <Popup>Tunis, Tunisia - Let’s meet up!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-xl font-semibold text-gray-700">Whether you want to collaborate on a project or just chat, feel free to contact me. I'm always open to new opportunities!</p>
        <a
          href="mailto:jadlyyosr@gmail.com"
          className="mt-6 inline-block px-8 py-4 bg-purple-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
        >
          Let’s Get in Touch
        </a>
        
      </div>
    </div>
  );
};

export default ContactMe;
