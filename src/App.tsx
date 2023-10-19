// can use react query instead of this new router
import { Outlet} from "react-router-dom";
import './assets/variables.css'
import {GlobalStyle, PageContainer} from "./components/styles/genericContainers";
import {NavigationBar} from "./components/organisms/navigationBar";



function App() {
    return (
    <PageContainer>
        <GlobalStyle />
       <NavigationBar/>
        <Outlet/>
    </PageContainer>
  );
}
export default App;