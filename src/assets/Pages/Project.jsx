// FILE: src/assets/Pages/Project.jsx (assuming this is the correct path and casing)

import React from 'react';
import { GrProjects } from "react-icons/gr";
const Project = () => {
  return (
    <div className='bg-gradient-to-t from-black to-gray-500 text-lime-300 min-h-screen p-4 flex flex-col items-center justify-center '>
      <h1 className="text-4xl font-bold text-lime-300 mb-8 mt-4 text-center font-serif flex"><GrProjects className='mr-2 text-black  hover:text-lime-300'/>My Projects</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 w-full max-w-7xl mx-auto '>
        <div className='bg-black rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 border-1 border-lime-300'>
          <img src="/src/assets/p1.png" className="w-full h-auto object-cover" alt="Project 1" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Home Page Design</h2>
            <p className="text-gray-400 text-sm">A visually appealing and responsive 
              home page, designed to provide a compelling first impression for users.
               Features modern UI/UX principles and clean aesthetics.</p>
       
          </div>
        </div>
        <div className='bg-black rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 border-1 border-lime-300'>
          <img src="/src/assets/p2.png" className="w-full h-auto object-cover" alt="Project 2" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Sales Analysis Dashboard</h2>
            <p className="text-gray-400 text-sm">An interactive dashboard for analyzing sales data, 
              including product performance, revenue tracking, and 
              identification of best-selling items.</p>
       
          </div>
        </div>
        <div className='bg-black rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 border-1 border-lime-300'>
          <img src="/src/assets/p3.png" className="w-full h-auto object-cover" alt="Project 3" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">My Portfolio Page</h2>
            <p className="text-gray-400 text-sm">This project showcases my skills and projects, providing a comprehensive overview of
               my work as a software engineer.</p>
         
          </div>
        </div>
        <div className='bg-black rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 border-1 border-lime-300'>
          <img src="/src/assets/p4.png" className="w-full h-auto object-cover" alt="Project 4" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Shopping Cart Page</h2>
            <p className="text-gray-400 text-sm">A functional shopping cart interface, enabling users to add, remove, and manage items before proceeding to checkout.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
