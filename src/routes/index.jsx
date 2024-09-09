import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { SigIn } from "../pages/SingIn";
import { PublicDash } from "../pages/PublicDash";
import { UserDash } from "../pages/UserDash";
import { Board } from "../pages/Board";
import { Idea } from "../pages/Idea";
import { Create } from "../pages/Create";
import { Save } from "../pages/Save";
import { Edit } from "../pages/Edit";
import { PrivateRoutes } from "./PrivateRoutes";

export const router = createBrowserRouter ([

    {
        path:"/",
        element: <Login/>
    },
    {
        path: "/signin",
        element: <SigIn/>
    },
    {
        path: "/public",
        element:
        <PrivateRoutes>
            <PublicDash/>
        </PrivateRoutes> 
    },
    {
        path: "/user",
        element: 
        <PrivateRoutes>
            <UserDash/>
        </PrivateRoutes> 
    },
    {
        path:"/board",
        element: 
        <PrivateRoutes>
            <Board/>
        </PrivateRoutes> 
    },
    {
        path:"/idea",
        element: 
        <PrivateRoutes>
            <Idea/>
        </PrivateRoutes> 
    },
    {
        path:"/createform",
        element:
        <PrivateRoutes>
            <Create/>
        </PrivateRoutes> 
    },
    {
        path: "/saveform",
        element: 
        <PrivateRoutes>
            <Save/>
        </PrivateRoutes> 
    },
    {
        path:"/editform",
        element: 
        <PrivateRoutes>
            <Edit/>
        </PrivateRoutes> 
    }
])