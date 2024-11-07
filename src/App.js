import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Categories from './Components/Categories';
import FeaturedAuctions from './Components/FeaturedAuctions';
import HowItWorks from './Components/HowItWorks';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import LoginPage from './User/Login';
import About from './Components/About'; // Import the About component
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Hello! This is a toast notification!");

  return (
    <Router>
      <div className="App">
        <button onClick={notify}>Show Toast</button>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Categories />
              <FeaturedAuctions />
              <HowItWorks />
              <Testimonials />
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} /> {/* Add the About route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
