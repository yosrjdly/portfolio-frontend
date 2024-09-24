import React from 'react';

const projects = [
  {
    title: "Camping App",
    description: "Created a mobile app designed to provide personalized camping trip recommendations and foster a secure, interactive community for campers.",
    keyFeatures: [
      "Community page with user interactions (likes, comments, shares)",
      "Real-time chat for users to communicate and coordinate",
      "User-generated tips and interactive content for enhanced engagement",
      "Focus on user trust, security, and positive user experience"
    ],
    technologies: ["React Native", "Firebase", "JWT", "Node.js", "Express.js", "Socket.io", "Expo", "PostgreSQL with Prisma ORM"],
    role: "Developer",
    caseStudy: {
      goals: "To create a user-friendly app for camping enthusiasts.",
      challenges: "Ensuring real-time interactions and user security.",
      outcomes: "Increased user engagement and positive feedback from the community."
    },
    github: "https://github.com/yourusername/camping-app",
    liveDemo: "https://yourliveurl.com/camping-app"
  },
  {
    title: "ArtConnect",
    description: "An interactive online art gallery platform that allows artists to showcase, share, and collaborate on projects dynamically.",
    keyFeatures: [
      "Social features like liking, commenting, and sharing artwork",
      "Gamification elements to boost user engagement",
      "Accessibility features to ensure inclusivity for all users",
      "Dynamic gallery layouts providing an immersive browsing experience"
    ],
    technologies: ["React", "MongoDB", "Node.js", "Express.js"],
    role: "Developer",
    caseStudy: {
      goals: "To facilitate artist collaboration and engagement.",
      challenges: "Creating a seamless user experience across diverse devices.",
      outcomes: "Successfully launched with high user satisfaction."
    },
    github: "https://github.com/yourusername/artconnect",
    liveDemo: "https://yourliveurl.com/camping-app"

  },
  {
    title: "Legacy Project",
    description: "Reimplemented a legacy application's frontend using modern technologies to improve performance, maintainability, and user experience.",
    keyFeatures: [
      "Refactored legacy code for improved clarity, efficiency, and scalability",
      "Enhanced UI responsiveness for a better user experience",
      "Utilized modern frontend technologies to future-proof the application"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    role: "Developer",
    caseStudy: {
      goals: "Modernize a legacy system to enhance functionality.",
      challenges: "Balancing legacy code with modern practices.",
      outcomes: "Achieved a significant performance boost and user approval."
    },
    github: "https://github.com/yourusername/legacy-project",
    liveDemo: "https://yourliveurl.com/camping-app"

  },
];

const MyWorkPage = () => {
  return (
    <div className="my-work-page p-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">My Work</h2>
      <p className="text-center text-lg mb-6 text-gray-700">Explore my academic projects that showcase my skills as a Full-Stack Web Developer.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card relative bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 overflow-hidden text-white">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <h4 className="font-semibold mt-2">Key Features:</h4>
            <ul className="list-disc list-inside mt-2 mb-4">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <h4 className="font-semibold mt-2">Technologies Used:</h4>
            <p className="mb-4">{project.technologies.join(', ')}</p>
            <h4 className="font-semibold mt-2">Role:</h4>
            <p className="mb-4">{project.role}</p>
            <h4 className="font-semibold mt-2">Case Study:</h4>
            <p className="mt-1"><strong>Goals:</strong> {project.caseStudy.goals}</p>
            <p className="mt-1"><strong>Challenges:</strong> {project.caseStudy.challenges}</p>
            <p className="mt-1"><strong>Outcomes:</strong> {project.caseStudy.outcomes}</p>
            <div className="mt-4 flex justify-between">
              <a href={project.github} className="bg-white text-blue-600 py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.liveDemo && (
                <a href={project.liveDemo} className="bg-yellow-400 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-300 transition-colors" target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
            <div className="absolute inset-0 opacity-20 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('path-to-your-pattern-or-bg-image')` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorkPage;
