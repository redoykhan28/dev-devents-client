import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../../Context/AuthContext';
import logo from '../../../images/Capture.PNG'
import './Header.css'

const Header = () => {

    //use context
    const { user, logout } = useContext(authContext)

    //logout 
    const handleLogout = () => {

        logout()
            .then(res => { })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="d-flex container justify-content-between align-items-center">

                    <div className="first-part d-flex justify-content-center align-items-center">

                        <Link className='navbar-brand"'><img src={logo} className='img-fluid logo' alt="logo" /></Link>


                    </div>


                    <div className="third-part d-none d-lg-flex">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className='d-flex flex-column flex-lg-row'>

                                    <NavLink to={'/home'} className={({ isActive }) => isActive ? 'clr me-4 text-decoration-none fw-semibold' : 'me-2 text-decoration-none text-black fw-semibold'}>Home</NavLink>

                                    <NavLink to={'/services'} className={({ isActive }) => isActive ? 'clr mx-4 text-decoration-none fw-bold' : 'mx-4 text-decoration-none text-black fw-semibold'}>Services</NavLink>

                                    <NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'clr mx-4 text-decoration-none fw-bold' : 'mx-4 text-decoration-none text-black fw-semibold'}>Blogs</NavLink>

                                    {
                                        user ?
                                            <>
                                                <NavLink to={'/add-service'} className={({ isActive }) => isActive ? 'clr mx-4 text-decoration-none fw-bold' : 'mx-4 text-decoration-none text-black fw-semibold'}>Add Service</NavLink>

                                                <NavLink to={'/add-service'} className={({ isActive }) => isActive ? 'clr mx-4 text-decoration-none fw-bold' : 'mx-4 text-decoration-none text-black fw-semibold'}>My Review</NavLink></>
                                            :
                                            undefined
                                    }

                                    {
                                        user ?
                                            <Link onClick={handleLogout} className="btn logoutbtn my-2 my-lg-0 d-lg-none d-block" role="button" aria-disabled="true">Logout</Link>
                                            :
                                            <Link to={'/login'} className="btn loginbtn my-2 my-lg-0 d-lg-none d-block" role="button" aria-disabled="true">Login</Link>
                                    }
                                </li>
                            </ul>

                        </div>

                        {
                            user ?
                                <div className='d-flex align-items-center'>
                                    <div className=''>
                                        <img className='img-fluid dp shadow-lg rounded-circle ms-4 me-2' src={user.photoURL} alt="Dp" />
                                    </div>
                                    <Link onClick={handleLogout} className=" logoutbtn ms-2" role="button" aria-disabled="true">Logout</Link>
                                </div>

                                :
                                <Link to={'/login'} className=" loginbtn ms-5" role="button" aria-disabled="true">Login</Link>
                        }

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;