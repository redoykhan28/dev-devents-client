import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaMailBulk } from "react-icons/fa";
import logo from '../../../images/Capture.PNG'


const Footer = () => {



    return (
        <div className='mt-5'>
            <footer className='p-4 text-center footerbg'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <img className='img-fluid w-50 mx-auto' src={logo} alt="" />
                        <p className='text-white text-center'>Devents.com</p>
                    </div>
                    <div className='col-lg-8'>
                        <div className='d-flex flex-column flex-md-row  justify-content-evenly mt-4 pt-4'>
                            <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/services'}>Our services</Link>
                            <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/blogs'}>Leatest Blogs</Link>
                            <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/blog'}>Profile</Link>
                            <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/login'}>Gallery</Link>
                            <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/registration'}>Registration</Link>
                        </div>
                    </div>
                </div>
                <div className='mt-5 mb-5 d-flex justify-content-center'>
                    <a className='text-white mx-4' href="#"><FaFacebook></FaFacebook></a>
                    <a className='text-white mx-4' href="#"><FaTwitter></FaTwitter></a>
                    <a className='text-white mx-4' href="#"><FaInstagram></FaInstagram></a>
                    <a className='text-white mx-4' href="#"><FaMailBulk></FaMailBulk></a>
                </div>
                <div className='cpsec'>
                    <hr className='text-white' />
                    <p className='text-start text-white mt-5'>© 2022 Dvents – The Events Specialists All Rights Reserved. Terms of UsePrivacy Policy</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;