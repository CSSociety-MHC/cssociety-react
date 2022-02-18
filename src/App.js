import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import InitiativePage from "./pages/InitiativePage"
import OpportunityPage from "./pages/OpportunityPage"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/initiative' element={<InitiativePage />} />
        <Route path='/opportunity' element={<OpportunityPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
