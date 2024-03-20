
import { Outlet} from "react-router-dom";
import './assets/variables.css'
import {GlobalStyle} from "./components/styles/genericContainers";
//import {NavigationBar} from "./components/organisms/navigationBar";





function App() {
    
    return (
    <>
        <GlobalStyle />
        {/*<NavigationBar/>*/}
        <Outlet/>
    </>
  );
}
export default App;