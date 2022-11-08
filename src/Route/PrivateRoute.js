import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';
import './Route.css'

const PrivateRoute = ({ children }) => {

    //use location
    const location = useLocation()

    //use context
    const { user, loader } = useContext(authContext)

    if (loader) {

        return <div className='top2'>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    }

    if (user) {

        return children
    }

    return <Navigate to={'/login'} state={{ from: location }} replaced></Navigate>
};

export default PrivateRoute;