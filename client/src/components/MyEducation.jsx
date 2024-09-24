import React from 'react';

const education = [
  {
    title: "Licence of Science in Mathematics and Computer Science",
    institution: "ESSTHS",
    status: "Currently a First-Year Student",
    coursework: [
      "Mathematics",
      "Numerical Simulation with R & Python",
      "Algorithmics & Data Structures"
    ]
  },
  {
    title: "Baccalaureate in Mathematics",
    institution: "Graduated: 2022",
    status: "High School Diploma",
    coursework: [
      "Advanced Mathematics",
      "Physics",
      "Computer Science"
    ]
  },
  {
    title: "Full-Stack Web Development Certification",
    institution: "ReBootKamp Tunisia",
    status: "2024",
    coursework: [
      "JavaScript Fundamentals",
      "React Development",
      "Node.js and Express",
      "Database Management"
    ]
  },
];

const MyEducation = () => {
  return (
    <section className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-purple-600">My Education</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-blue-700 text-white flex flex-col transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold text-center mb-2">{edu.title}</h3>
            <p className="text-center font-medium">{edu.institution}</p>
            <p className="text-center text-gray-200">{edu.status}</p>
            <div className="mt-4">
              <strong className="text-gray-300">Relevant Coursework:</strong>
              <ul className="list-disc ml-5 text-gray-200">
                {edu.coursework.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyEducation;
