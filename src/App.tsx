
import './App.css'
import {Route, Routes} from "react-router-dom";
import Smoothies from "./components/pages/smoothies";
import Plan from "./components/pages/plan";
import Home from "./components/pages/home";

//<Route path="/" element={<Home />} />
function App() {

  return (
    <>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/smoothies" element={<Smoothies />} />
            <Route path="/plan" element={<Plan />} />
        </Routes>
    </>
  )
}

export default App
