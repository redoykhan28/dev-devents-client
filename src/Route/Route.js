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
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import MyReview from "../Pages/MYReview/MyReview";
import UpdateReview from "../Pages/MYReview/UpdateReview";




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
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/service')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {

                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            }


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
                path: '/my-review',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/updateReview/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
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