import "./App.css";
import {useLocation} from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Rent from "./Components/Rent";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rent" element={<Rent />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  );
}

export default App;
