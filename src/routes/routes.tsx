import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home";
import Smoothies from "../components/pages/smoothies";
import {dataLoader, Plan} from "../components/pages/plan";

export const router = createBrowserRouter(
    [{
        path: "/",
        element: <App/>,
        children: [
            {path: "/recipes", element: <Home/>},
            {path: "/recipes/smoothies", element: <Smoothies/>},
            {path: "/recipes/plan", element: <Plan/>, loader: dataLoader},
        ]
    }
    ]
)