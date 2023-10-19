import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home";
import {dogLoader, recipeLoader} from "../loaders/loaders";
import Smoothies from "../components/pages/smoothies";
import {Plan} from "../components/pages/plan";

export const router = createBrowserRouter(
    [{
        path: "/",
        element: <App/>,
        children: [
            {path: "/recipes", element: <Home/>},
            {path: "/recipes/smoothies", element: <Smoothies/>, loader: recipeLoader},
            {path: "/recipes/plan", element: <Plan/>, loader: dogLoader},
        ]
    }
    ]
)