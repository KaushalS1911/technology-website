import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import { Services } from "./pages/services/Services";
import { Careers } from "./pages/careers/Careers";
import { Route, Routes, useLocation } from "react-router-dom";
import { CareerCardData } from "./pages/careers/CareerCardData";
// import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact Us/Contact";
import Home from "./pages/Home/Home";
import SingleProject from "./pages/Portfolio/SingleProject";
import Navigation from "./components/global/Navigation";
import BoxDetailPage from "./pages/Home/BoxDetailPage";
import JobForm from "./pages/careers/JobForm";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      {/*<Header />*/}
        <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/single-project/:id"
          element={<SingleProject />}
        />
        <Route path="/jobapply/:id" element={<JobForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career-card-data/:id" element={<CareerCardData />} />
        <Route path="/contact" element={<Contact />} />
        {/*<Route path="/detailpage" element={<BoxDetailPage />} />*/}
        <Route path="/detailpage/:detId" element={<BoxDetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
