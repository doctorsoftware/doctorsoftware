import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
=======
import Header from './components/Header';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Home />
      <Pricing />
      <Contact />
>>>>>>> c241ec8654791414c3b25dd8d321e3439bdc89fc
    </div>
  );
}

export default App; 