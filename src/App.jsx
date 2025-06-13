// FILE: src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home.jsx';
import Project from './assets/Pages/Project.jsx';
import ResumA from './assets/Pages/Resume.jsx';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/resume" element={< ResumA/>} />
    </Routes>
  );
};

export default App;
