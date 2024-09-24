import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

const skills = {
  'Programming Languages & Databases': [
    { name: 'JavaScript (ES6+)', level: 90, icon: <FaJs /> },
    { name: 'TypeScript', level: 85, icon: <FaJs /> },
    { name: 'HTML5', level: 90, icon: <FaHtml5 /> },
    { name: 'CSS3', level: 85, icon: <FaCss3 /> },
    { name: 'MongoDB', level: 70, icon: <FaDatabase /> },
    { name: 'PostgreSQL', level: 75, icon: <FaDatabase /> },
    { name: 'MySQL', level: 70, icon: <FaDatabase /> },
    { name: 'Prisma ORM', level: 65, icon: <FaDatabase /> },
  ],
  'Frameworks & Libraries': [
    { name: 'React', level: 80, icon: <FaReact /> },
    { name: 'React Native', level: 75, icon: <FaReact /> },
    { name: 'Next.js', level: 70, icon: <FaReact /> },
    { name: 'Tailwind CSS', level: 75, icon: <FaCss3 /> },
    { name: 'Bootstrap', level: 70, icon: <FaCss3 /> },
    { name: 'Node.js', level: 75, icon: <FaNode /> },
    { name: 'Express.js', level: 70, icon: <FaNode /> },
    { name: 'Socket.io', level: 65, icon: <FaNode /> },
    { name: 'Python', level: 70, icon: <FaTools /> },
    { name: 'R', level: 60, icon: <FaTools /> },
  ],
  'Tools': [
    { name: 'Firebase', level: 70, icon: <FaTools /> },
    { name: 'Cloudinary', level: 65, icon: <FaTools /> },
    { name: 'JWT', level: 75, icon: <FaTools /> },
    { name: 'Git', level: 85, icon: <FaTools /> },
    { name: 'GitHub', level: 85, icon: <FaTools /> },
    { name: 'Expo', level: 70, icon: <FaTools /> },
    { name: 'Postman', level: 75, icon: <FaTools /> },
  ],
  'Soft Skills': [
    { name: 'Problem-Solving', level: 90, icon: <FaBrain /> },
    { name: 'Critical Thinking', level: 85, icon: <FaBrain /> },
    { name: 'Autonomous Learning', level: 80, icon: <FaBrain /> },
    { name: 'Time Management', level: 85, icon: <FaBrain /> },
    { name: 'Attention to Detail', level: 90, icon: <FaBrain /> },
    { name: 'Collaboration', level: 85, icon: <FaBrain /> },
    { name: 'Adaptability', level: 80, icon: <FaBrain /> },
  ],
};

function Skills() {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-purple-600">My Skills</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-blue-700 text-white flex flex-col">
            <h2 className="text-2xl font-bold text-center mb-4">{category}</h2>
            <div className="flex-1 overflow-auto">
              {items.map((skill, idx) => (
                <div key={idx} className="flex items-center mb-4">
                  <div className="mr-4 text-2xl">{skill.icon}</div>
                  <div className="flex-1">
                    <span className="font-semibold">{skill.name}</span>
                    <div className="relative mt-2 bg-gray-300 rounded-full h-3">
                      <div
                        className="absolute top-0 left-0 h-3 rounded-full bg-purple-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="ml-4 text-sm font-bold">{skill.level}%</span>
                    <div className="mt-1 text-sm">{getSkillDetails(skill.name)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getSkillDetails(skillName) {
  switch (skillName) {
    case 'JavaScript (ES6+)':
      return 'Expert in modern JavaScript features and asynchronous programming.';
    case 'TypeScript':
      return 'Strongly typed programming for building robust applications.';
    case 'HTML5':
      return 'Proficient in semantic HTML and accessibility standards.';
    case 'CSS3':
      return 'Experienced with responsive design and animations.';
    case 'MongoDB':
      return 'Managing complex database relationships in NoSQL databases.';
    case 'PostgreSQL':
      return 'Expert in relational database design and integration.';
    case 'MySQL':
      return 'Strong SQL skills for relational database management.';
    case 'Prisma ORM':
      return 'Efficient database management using a modern ORM.';
    case 'React':
      return 'Building dynamic UIs with component-based architecture.';
    case 'React Native':
      return 'Developing cross-platform mobile applications.';
    case 'Next.js':
      return 'Creating server-rendered React applications.';
    case 'Tailwind CSS':
      return 'Utilizing utility-first CSS for rapid UI development.';
    case 'Bootstrap':
      return 'Building responsive web applications with ease.';
    case 'Node.js':
      return 'JavaScript runtime for building server-side applications.';
    case 'Express.js':
      return 'Framework for building web applications with Node.js.';
    case 'Socket.io':
      return 'Real-time communication in web applications.';
    case 'Python':
      return 'Versatile programming for web and data applications.';
    case 'Firebase':
      return 'Utilizing cloud services for rapid application development.';
    case 'Cloudinary':
      return 'Managing media assets in the cloud.';
    case 'JWT':
      return 'Implementing secure user authentication.';
    case 'Git':
      return 'Version control system for efficient collaboration.';
    case 'GitHub':
      return 'Collaboration platform for version control.';
    case 'Expo':
      return 'Tooling for React Native development.';
    case 'Postman':
      return 'API testing and documentation tool.';
    case 'Problem-Solving':
      return 'Skilled in addressing complex challenges with innovative solutions.';
    case 'Critical Thinking':
      return 'Analyzing situations to make informed decisions.';
    case 'Autonomous Learning':
      return 'Self-directed learning to stay current in technology.';
    case 'Time Management':
      return 'Prioritizing tasks for effective productivity.';
    case 'Attention to Detail':
      return 'Meticulous in ensuring high-quality outcomes.';
    case 'Collaboration':
      return 'Effective teamwork to achieve common goals.';
    case 'Adaptability':
      return 'Flexibility in response to changing situations.';
    default:
      return '';
  }
}

export default Skills;
