// can use react query instead of this new router

import './App.css';
import { Outlet} from "react-router-dom";
import {Navbar} from "./components/organisms/Navbar";

 
function App() {
    
    return (
    <>
       <Navbar/>
        <Outlet/>
    </>
  );
}
export default App;



/*
 <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/smoothies" element={<Smoothies />} />
     <Route path="/plan" element={<Plan />} />
  </Routes>
 */