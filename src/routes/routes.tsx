import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home";
import {dogLoader, creationLoader} from "../loaders/loaders";
import Crafters from "../components/pages/crafters";
import {Crochet} from "../components/pages/crochet";

export const router = createBrowserRouter(
    [{
        path: "/",
        element: <App/>,
        children: [
            {path: "/wst-crafts", element: <Home/>, loader: creationLoader},
            {path: "/wst-crafts/crafters", element: <Crafters/>, loader: creationLoader},
            {path: "/wst-crafts/crochet", element: <Crochet/>, loader: dogLoader},
        ]
    }
    ]
)