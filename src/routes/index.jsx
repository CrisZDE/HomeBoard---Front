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

export const router = createBrowserRouter ([

    {
        path:"/",
        element: <Login/>
    },
    {
        path: "/singin",
        element: <SigIn/>
    },
    {
        path: "/public",
        element: <PublicDash/>
    },
    {
        path: "/user",
        element: <UserDash/>
    },
    {
        path:"/board",
        element: <Board/>
    },
    {
        path:"/idea",
        element: <Idea/>
    },
    {
        path:"/createform",
        element: <Create/>
    },
    {
        path: "/saveform",
        element: <Save/>
    },
    {
        path:"/editform",
        element: <Edit/>
    }
])