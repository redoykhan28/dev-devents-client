import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../images/Capture.PNG'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="d-flex container justify-content-between align-items-center">

                    <div className="first-part d-flex justify-content-center align-items-center">

                        <Link className='navbar-brand"'><img src={logo} className='img-fluid logo' alt="logo" /></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className='d-flex flex-column flex-lg-row'>

                                    <NavLink to={'/home'} className={({ isActive }) => isActive ? 'clr mx-2 text-decoration-none fw-semibold' : 'mx-2 text-decoration-none text-black fw-semibold'}>Home</NavLink>

                                    <NavLink to={'/services'} className={({ isActive }) => isActive ? 'clr mx-2 text-decoration-none fw-bold' : 'mx-2 text-decoration-none text-black fw-semibold'}>Services</NavLink>

                                    <NavLink to={'/blogs'} className={({ isActive }) => isActive ? 'clr mx-2 text-decoration-none fw-bold' : 'mx-2 text-decoration-none text-black fw-semibold'}>Blogs</NavLink>

                                    <Link className="btn loginbtn my-2 my-lg-0 d-lg-none d-block" role="button" aria-disabled="true">Login</Link>
                                </li>
                            </ul>

                        </div>
                    </div>


                    <div className="third-part d-none d-lg-flex">

                        <Link className=" loginbtn" role="button" aria-disabled="true">Login</Link>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;