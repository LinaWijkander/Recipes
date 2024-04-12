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
            {path: "/", element: </*Home*/Creations/>},
            {path: "/creations", element: <Creations/>, /*loader: tableLoader*/},
            {path: "/creations/:creationId", element: <Creation/>, loader:  ({params}) => {return creationLoader(params.creationId)}},
            {path: "/crafters", element: <Crafters/>},
            {path: "/crochet", element: <Crochet/>},
            {path: "/post/:postId", element: <RandomCreation/>, loader: postLoader},
            {path: "/addCreation", element: <AddCreation/>},
        ]
    }
    ]
)