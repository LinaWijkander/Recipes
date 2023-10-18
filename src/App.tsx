// can use react query instead of this new router

import { Outlet} from "react-router-dom";
import {Navbar} from "./components/organisms/navbar";
import './assets/variables.css'
import {GlobalStyle, PageContainer} from "./components/styles/genericContainers";

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