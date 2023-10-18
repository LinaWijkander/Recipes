import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home";
import Smoothies, {recipeLoader} from "../components/pages/smoothies";
import {dogLoader, Plan} from "../components/pages/plan";

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