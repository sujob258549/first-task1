import { createBrowserRouter } from "react-router-dom";
import Mian from "../Component/Mian";
import Home from "../Component/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Mian></Mian>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;