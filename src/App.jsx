// FILE: src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Project from './Pages/Project.jsx';
import ResumA from './Pages/Resume.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/resume" element={< ResumA/>} />
    </Routes>
  );
};

export default App;