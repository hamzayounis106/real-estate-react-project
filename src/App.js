import "./App.css";
import { useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
// import About from "./Components/About";
import Rent from "./Components/Rent";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import { Routes, Route } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/rent" element={<Rent />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== ("/" && "/contact") && <Footer />}
    </>
  );
}

export default App;
