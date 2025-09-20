
import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./App.css";
import petCardImg from "./pet.jpg";
import petDetailImg from "./pet2.jpg";
import carCardImg from "./back (2).jpg";
import carDetailImg from "./background2.webp";

// Context API setup
const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const data = {
    name: "Vidhi Chaurasia",
    qualification: "MCA",
    about:
      "I am Vidhi Chaurasia, a passionate MCA graduate skilled in programming and problem-solving. With hands-on experience in projects like a Pet Adoption System and a Vehicle Rental System, I focus on building impactful solutions. I love solving DSA problems on LeetCode and continuously improving my technical expertise.",
    skills: [
      "C",
      "C++",
      "SQL",
      "JavaScript",
      "HTML",
      "CSS",
      "React",
    ],
    projects: [
      "Get a Friend (Pet Adoption System)",
      "Auto Care (Vehicle Rental System)",
    ],
    certifications: [
      {
        title: "Problem Solving in C (HackerRank)",
        link: "https://www.hackerrank.com/certificates/problem-solving-c",
      },
      {
        title: "SQL Basic (HackerRank)",
        link: "https://www.hackerrank.com/certificates/sql-basic",
      },
      {
        title: "SQL Advanced (HackerRank)",
        link: "https://www.hackerrank.com/certificates/sql-advanced",
      },
    ],
  };

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
};

const Navbar = ({ darkMode, setDarkMode }) => {
  const navItems = ["about", "skills", "projects", "certifications"];

  // const scrollToSection = (id) => {
  //   document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  // };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex justify-between items-center px-8 py-4 shadow-lg z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-xl font-bold tracking-wide">Portfolio</h1>
      <div className="flex gap-6 items-center">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(item)}
            className="capitalize font-medium hover:scale-110 transition-transform"
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-white text-indigo-700 font-semibold hover:scale-105 transition-transform"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { name, qualification } = useContext(PortfolioContext);

  return (
    <motion.section
      className="relative flex flex-col justify-center items-center text-center min-h-[90vh] text-gray-900 px-6 pt-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-pulse"></div>

      <h1 className="text-6xl font-extrabold drop-shadow-md z-10">{name}</h1>
      <p className="text-2xl mt-4 font-medium z-10">{qualification}</p>
      <p className="max-w-2xl mt-6 text-lg text-gray-700 leading-relaxed z-10">
        I am passionate about problem-solving and web development. With 400+ DSA
        questions solved on LeetCode, certifications in C and SQL from
        HackerRank, and hands-on experience in building real-world projects like
        a Pet Adoption System and Vehicle Rental System, I aim to create
        impactful software solutions.
      </p>

      <div className="mt-10 flex gap-6 z-10">
        <a
          href="#projects"
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:scale-110 transform transition duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </motion.section>
  );
};

const About = () => {
  const { about } = useContext(PortfolioContext);
  return (
    <motion.section
      id="about"
      className="p-8 bg-white dark:bg-gray-800 dark:text-white rounded-3xl shadow-xl mt-16 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">
        About Me
        <div className="w-20 h-1 bg-purple-400 mx-auto mt-2 rounded-full"></div>
      </h2>
      <p className="text-lg leading-relaxed text-center">{about}</p>
    </motion.section>
  );
};

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  return (
    <motion.section
      id="skills"
      className="p-8 bg-white dark:bg-gray-800 dark:text-white rounded-3xl shadow-xl mt-16 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">
        Skills
        <div className="w-20 h-1 bg-pink-400 mx-auto mt-2 rounded-full"></div>
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-lg cursor-pointer"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectDetails = {
    "Get a Friend (Pet Adoption System)": {
      cardImage: petCardImg,
      detailImage: petDetailImg,
      description:
        "A web app that allows users to adopt pets. It includes user authentication, search filters, and adoption request tracking.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      futureScope: [
        "Integration with mobile apps",
        "AI-based pet matching system",
        "Collaboration with local shelters",
      ],
    },
    "Auto Care (Vehicle Rental System)": {
      cardImage: carCardImg,
      detailImage: carDetailImg,
      description:
        "An online platform for renting vehicles. Includes vehicle availability, booking system, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      futureScope: [
        "Integration with GPS tracking",
        "Dynamic pricing based on demand",
        "Partnership with insurance companies",
      ],
    },
  };

  return (
    <motion.section
      id="projects"
      className="p-8 bg-white dark:bg-gray-800 dark:text-white rounded-3xl shadow-xl mt-16 transition-colors"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Projects
        <div className="w-20 h-1 bg-purple-400 mx-auto mt-2 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 
                       rounded-xl shadow-2xl overflow-hidden transform transition hover:shadow-3xl"
          >
            <img
              src={projectDetails[project].cardImage}
              alt={project}
              className="w-full h-52 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-white drop-shadow-md">
                {project}
              </h3>
              <button
                onClick={() => setSelectedProject(project)}
                className="mt-3 px-5 py-2 bg-blue-500 text-white font-semibold 
                           rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg 
                           transition duration-300"
              >
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 px-4 pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-200 
                         dark:border-gray-700 w-full sm:max-w-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-xl transition"
              >
                ✖
              </button>

              <img
                src={projectDetails[selectedProject].detailImage}
                alt={selectedProject}
                className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4 shadow-md"
              />

              <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-indigo-600 dark:text-indigo-400 tracking-wide">
                {selectedProject}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-sm sm:text-base">
                {projectDetails[selectedProject].description}
              </p>

              <h4 className="font-semibold text-base sm:text-lg text-purple-600 mb-2">
                🛠 Technologies Used
              </h4>
              <ul className="flex flex-wrap gap-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-5">
                {projectDetails[selectedProject].tech.map((t, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-2 before:content-['•'] before:mr-2"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-base sm:text-lg text-green-600 mb-2">
                🔮 Future Scope
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {projectDetails[selectedProject].futureScope.map((f, i) => (
                  <li key={i} className="pl-1">
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const Certifications = () => {
  return (
    <motion.section
      id="certificates"
  className="p-10 bg-gray-50 dark:bg-gray-900 transition-colors mt-16 rounded-2xl shadow-md"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
    Certifications
    <div className="w-20 h-1 bg-pink-400 mx-auto mt-2 rounded-full"></div>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "SQL (Basic)",
        provider: "HackerRank",
        link: "https://www.hackerrank.com/certificates/iframe/c482e51beb13", // put your certificate link
      },
      {
        title: "SQL (Intermediate)",
        provider: "HackerRank",
        link: "https://www.hackerrank.com/certificates/iframe/e7a01d35eac2",
      },
      {
        title: "CSS (Basic)",
        provider: "HackerRank",
        link: "https://www.hackerrank.com/certificates/iframe/5ead50d23cf4",
      },
    ].map((cert, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {cert.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {cert.provider}
          </p>
        </div>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block border border-yellow-500 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-500 hover:text-white transition"
        >
          View Certificate →
        </a>
      </motion.div>
    ))}
  </div>
    </motion.section>
  );
};


const Footer = () => {
  return (
    <motion.footer
      id="contact"
      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-8 mt-10 shadow-inner"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/Vidhi020213"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:scale-125 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/vidhi-chaurasia-b80771210/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:scale-125 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:vidhichaurasia021@gmail.com"
          className="text-2xl hover:scale-125 transition-transform"
        >
          <FaEnvelope />
        </a>
        <a href="tel:+916307242794" className="text-2xl hover:scale-125 transition-transform">
          <FaPhone />
        </a>
      </div>
      <p className="text-sm">
        📧 vidhichaurasia021@gmail.com | 📞 +91 6307242794
      </p>
      <p className="text-xs mt-1">
        © {new Date().getFullYear()} Vidhi Chaurasia. All rights reserved.
      </p>
    </motion.footer>
  );
};


// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <PortfolioProvider>
//       <div
//         className={
//           darkMode
//             ? "dark min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800"
//             : "min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200"
//         }
//       >
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//         <div className="flex flex-col items-center px-6 transition-colors duration-500">
//           <Hero />
//           <div className="w-full max-w-4xl">
//             <About />
//             <Skills />
//             <Projects />
//             <Certifications />
//           </div>
//           <Footer />
//         </div>
//       </div>
//     </PortfolioProvider>
//   );
// };

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <PortfolioProvider>
      <div
        className={
          darkMode
            ? "dark min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800"
            : "min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200"
        }
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col items-center px-6 transition-colors duration-500">
          <Hero />
          <div className="w-full max-w-4xl">
            <About />
            <Skills />
            <Projects />
            <Certifications />
          </div>
          <Footer />
        </div>
      </div>
    </PortfolioProvider>
  );
};

export default App;


