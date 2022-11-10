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
import img404 from '../images/404/404.jpg'




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
            {

                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://devent-server.vercel.app/service/${params.id}`)
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
                loader: ({ params }) => fetch(`https://devent-server.vercel.app/review/dynamic/${params.id}`)
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
    },
    {
        path: '*', element: <div className='ftxt text-center'>
            <h1 className='mt-5'>
                This page is not available.</h1>
            <p className='text-muted'>Sorry! 404. The page you are looking for is not available</p>
            <img className='img-fluid w-25 mx-auto' src={img404} alt="" />
        </div>

    }
]
)