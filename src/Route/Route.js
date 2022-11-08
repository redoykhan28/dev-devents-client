import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home/Home'
import Services from '../Pages/Services/Services/Services'
import Blogs from '../Pages/Blogs/Blogs'
import AuthLayout from '../Layout/authLayout'
import AddServices from '../Pages/Services/AddServices/AddServices'
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

//setup route
export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },


        ]
    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [

            {
                path: '/add-service',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
]
)