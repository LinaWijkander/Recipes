// can use react query instead of this new router

import { Outlet} from "react-router-dom";
import './assets/variables.css'
import {GlobalStyle, PageContainer} from "./components/styles/genericContainers";
import {Navbar} from "./components/organisms/navbar/";

function App() {
    return (
    <PageContainer>
        <GlobalStyle />
       <Navbar/>
        <Outlet/>
    </PageContainer>
  );
}
export default App;