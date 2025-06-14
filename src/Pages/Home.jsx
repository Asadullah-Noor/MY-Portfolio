// FILE: src/pages/Home.jsx
import React from 'react';
import { FaArrowCircleRight, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import the images used in this component directl
import asadImage from '../assets/asad.jpg'; // Correct import
import customerServiceIcon from '../assets/customer-service.png'

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-gradient-to-t from-black to-gray-500 text-white p-4">
      <div className="mt-10 w-auto mx-4">
        {/* Use the imported image variable here */}
        <img src={asadImage} className="h-50 rounded-xl w-auto" alt="Portfolio" />
        <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-gray-300 to-gray-950 bg-clip-text">AsadUllah</h1>
        <h1 className="text-3xl font-bold text-cyan-400">Software Engineer</h1>
        <p>I am a front end developer. I have been in the IT industry since 2022.</p>

        <div className="grid grid-cols-2 gap-2 mt-4">
          <Link
            to="/project"
            className="cursor-pointer text-white bg-gray-800 border-t-2 border-white rounded flex items-center justify-center hover:bg-black hover:border-black transition-transform hover:scale-105 duration-500 p-2"
          >
            Projects <FaArrowCircleRight className="ml-1" />
          </Link>

          <a
            href="/Asadullah Noor.pdf" // Ensure this PDF is in your `public` folder if it's not imported directly
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-white bg-gray-800 border-t-2 border-white rounded flex items-center justify-center hover:bg-black hover:border-black transition-transform hover:scale-105 duration-500 p-2"
          >
            Resume <FaArrowCircleRight className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <a href="https://github.com/Asadullah-Noor" target="_blank" rel="noopener noreferrer"><FaGithub className="text-3xl hover:text-cyan-700" /><p>GitHub</p></a>
          <a href="https://www.linkedin.com/in/asadullahnoor-tech/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className="text-3xl hover:text-cyan-600" /><p>LinkedIn</p></a>
          <a href="https://x.com/Asadullah_Nor" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-3xl hover:text-cyan-600" /><p>Twitter</p></a>
        </div>
        <div className=" p-2 text-center">
          <p className="text-sm text-gray-500 mt-20 ">
            Copyright <FaRegCopyright className="inline-block mx-1" />
            <span className="text-cyan-400">Xhafi-Xoft</span>
          </p>
        </div>
      </div>

      <div className="pt-10 px-4">
        <h1 className="text-4xl font-bold text-cyan-400">Every great code begins with an even better story</h1>
        <p className="mt-4">
          My pursuit of a software engineering career began in 10th grade. Following high school,
          I gained foundational skills in HTML and CSS through FreeCodeCamp. I then progressed to
          developing self-directed projects, expanding my expertise to include React, JavaScript,
          Bootstrap, and Tailwind CSS. Currently, I am focused on mastering the MERN stack.
        </p>

        <h1 className="text-2xl font-bold text-white flex items-center mt-10">
          {/* Use the imported image variable here */}
          <img src={customerServiceIcon} className="h-10 w-auto mr-2" alt="Tools" />Tools
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-gray-800 rounded-2xl text-center p-2 hover:bg-amber-700 hover:scale-110 transition-transform">
            <span className="text-amber-400">JS</span> <span>Javascript</span>
          </div>
          <div className="bg-gray-800 rounded-2xl text-center p-2 hover:bg-red-800 hover:scale-110 transition-transform">
            <span className="text-red-400">H5</span> <span>HTML</span>
          </div>
          <div className="bg-gray-800 rounded-2xl text-center p-2 hover:bg-cyan-500 hover:scale-110 transition-transform">
            <span className="text-cyan-800">C3</span> <span>CSS</span>
          </div>
          <div className="bg-gray-800 rounded-2xl text-center p-2 hover:bg-emerald-900 hover:scale-110 transition-transform">
            <span className="text-emerald-500">NJ</span> <span>Node</span>
          </div>
          <div className="bg-gray-800 rounded-2xl text-center p-2 hover:bg-blue-500 hover:scale-110 transition-transform">
            <span className="text-blue-700">R</span> <span>React.js</span>
          </div>
          <div className="bg-gray-800 rounded-2xl text-center p-2 hover:bg-cyan-800 hover:scale-110 transition-transform">
            <span className="text-blue-400">TW</span> <span>TailWind</span>
          </div>
          <div className="bg-gray-800 rounded-2xl text-center p-2 hover:bg-purple-500 hover:scale-110 transition-transform">
            <span className="text-purple-700">BS</span> <span>Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;