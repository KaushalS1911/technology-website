import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import { Services } from "./pages/services/Services";
import { Careers } from "./pages/careers/Careers";
import { Route, Routes } from "react-router-dom";
import { CareerCardData } from "./pages/careers/CareerCardData";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact Us/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/careers" element={<Careers />} />
        <Route path="/career-card-data/:id" element={<CareerCardData />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/> 
    </>
  );
}

export default App;
