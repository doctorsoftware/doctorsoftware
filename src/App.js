import React from 'react';
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
    </div>
  );
}

export default App; 