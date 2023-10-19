// can use react query instead of this new router
import { Outlet} from "react-router-dom";
import './assets/variables.css'
import {GlobalStyle, PageContainer} from "./components/styles/genericContainers";
import {Navbar as BestNavbar} from "./components/organisms/navbar";


function App() {
    return (
    <PageContainer>
        <GlobalStyle />
       <BestNavbar/>
        <Outlet/>
    </PageContainer>
  );
}
export default App;