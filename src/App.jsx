import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImmersiveBlog from './components/ImmersiveBlog';
import About from './pages/About';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<ImmersiveBlog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
