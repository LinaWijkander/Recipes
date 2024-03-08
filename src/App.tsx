// can use react query instead of this new router
import { Outlet/*, useNavigate*/} from "react-router-dom";
import './assets/variables.css'
import {GlobalStyle} from "./components/styles/genericContainers";
import {NavigationBar} from "./components/organisms/navigationBar";
//import {useCallback} from "react";




function App() {
    /*const navigate = useNavigate();

   const randomIntFromInterval = useCallback((min:number, max:number) => {
       return Math.floor(Math.random() * (max - min + 1) + min);
   }, []);

  const handlePostNavigation = useCallback(() => {
       navigate(`/wst-crafts/post/${randomIntFromInterval(6, 12)}`);
   }, [randomIntFromInterval]);*/
    
    return (
    <>
        <GlobalStyle />
       <NavigationBar/>
        <nav>
            {/*<button onClick={handlePostNavigation}>Random Post</button>*/}
        </nav>
        <Outlet/>
    </>
  );
}
export default App;