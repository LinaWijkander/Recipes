import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home";
import {dogLoader, creationLoader, tableLoader, dataLoader} from "../loaders/loaders";
import Crafters from "../components/pages/crafters";
import {Crochet} from "../components/pages/crochet";
import Creations from "../components/pages/creations";
import RandomCreation, {postLoader} from "../components/pages/randomCreation";
import Creation from "../components/pages/creation";
import AddCreation from "../components/pages/addCreation";

// {path: "/wst-crafts", element: <Home/>, loader: await tableLoader()},
// Poopypoopface
export const router = createBrowserRouter(
    
    [{
        path: "/",
        element: <App/>,
        children: [
            {path: "/wst-crafts", element: <Home/>, loader: tableLoader},
            {path: "/wst-crafts/creations", element: <Creations/>, loader: dataLoader},
            {path: "/wst-crafts/creations/:id", element: <Creation/>, loader: creationLoader},
            {path: "/wst-crafts/crafters", element: <Crafters/>, loader: creationLoader},
            {path: "/wst-crafts/crochet", element: <Crochet/>, loader: dogLoader},
            {path: "/wst-crafts/post/:postId", element: <RandomCreation/>, loader: postLoader},
            {path: "/wst-crafts/addCreation", element: <AddCreation/>},
        ]
    }
    ]
)