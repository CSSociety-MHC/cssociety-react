import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage"
import EventPage from "./pages/EventPage"
import AboutPage from "./pages/AboutPage"
import MemberPage from "./pages/MemberPage"
import OpportunityPage from "./pages/OpportunityPage"
import ResourcePage from "./pages/ResourcePage"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/event' element={<EventPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/members' element={<MemberPage />} />
        <Route path='/opportunity' element={<OpportunityPage />} />
        <Route path='/resource' element={<ResourcePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
