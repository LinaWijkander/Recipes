
import './App.css';
import {Route, Routes} from "react-router-dom";
import Smoothies from "./components/pages/smoothies";
import Plan from "./components/pages/plan";
import Home from "./components/pages/home";

//<Route index element={<Home />} />

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smoothies" element={<Smoothies />} />
            <Route path="/plan" element={<Plan />} />
        </Routes>
    </>
  )
}

export default App
