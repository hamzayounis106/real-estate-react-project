import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Rent from "./Components/Rent";
import Details from "./Components/Details";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rent" element={<Rent />} />
      </Routes>
    </>
  );
}

export default App;
