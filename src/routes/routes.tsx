import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {creationLoader} from "../loaders/loaders";
import {Crafters} from "../components/pages/crafters";
import {Crochet} from "../components/pages/crochet";
import Creations from "../components/pages/creations";
import RandomCreation, {postLoader} from "../components/pages/randomCreation";
import Creation from "../components/pages/creation";
import AddCreation from "../components/pages/addCreation";


export const router = createBrowserRouter(
  
    
    [{
        path: "/",
        element: <App/>,
        children: [
            {path: "/wst-crafts", element: </*Home*/Creations/>},
            {path: "/wst-crafts/creations", element: <Creations/>, /*loader: tableLoader*/},
            {path: "/wst-crafts/creations/:creationId", element: <Creation/>, loader:  ({params}) => {return creationLoader(params.creationId)}},
            {path: "/wst-crafts/crafters", element: <Crafters/>},
            {path: "/wst-crafts/crochet", element: <Crochet/>},
            {path: "/wst-crafts/post/:postId", element: <RandomCreation/>, loader: postLoader},
            {path: "/wst-crafts/addCreation", element: <AddCreation/>},
        ]
    }
    ]
)