import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home/Home'
import Services from '../Pages/Services/Services/Services'
import Blogs from '../Pages/Blogs/Blogs'

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
    }
]
)