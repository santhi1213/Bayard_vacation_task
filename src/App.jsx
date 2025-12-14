import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Wellness from './components/Wellness';
import Innovation from './components/Innovation';
import Nature from './components/Nature';
import Community from './components/Community';
import TheStory from './components/TheStory';
import ComingSoon from './components/ComingSoon';
import MainLayout from './components/MainLayout';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="wellness" element={<Wellness />} />
            <Route path="innovation" element={<Innovation />} />
            <Route path="nature" element={<Nature />} />
            <Route path="community" element={<Community />} />
            <Route path="the-story" element={<TheStory />} />
            <Route path="*" element={<ComingSoon />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
