import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ImmersiveBlog from './components/ImmersiveBlog';
import About from './pages/About';

function App() {
  return (
    <Router>
      <nav className="flex justify-center space-x-8 py-6 bg-gray-900 text-purple-300 text-lg font-semibold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ImmersiveBlog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
