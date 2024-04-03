import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Rent from "./Components/Rent";
import Details from "./Components/Details";
import ComponentB from "./Components/ComponentB";
import { Routes, Route } from "react-router-dom";
// import Slider from "./Components/Slider";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
        <Route path="/ComponentB" element={<ComponentB />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rent" element={<Rent />} />
      </Routes>
      {/* <Slider /> */}
    </>
  );
}

export default App;
