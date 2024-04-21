import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Shop from './components/admissions/Shop';
import Goal from './components/goal/Goal';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/goal" element={<Goal />} />
          <Route path='/Shop' element={<Shop />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
