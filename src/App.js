import "./App.css";
import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Rent from "./Components/Rent";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import { Routes, Route } from "react-router-dom";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <div className="h-full wrapper_main">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details" element={<Details />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {location.pathname !== "/" && location.pathname !== "/contact" && (
        <Footer />
      )}
    </>
  );
}

export default App;
