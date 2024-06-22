import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './pages/Restaurant';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;