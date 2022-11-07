import React from 'react';
import slider1 from '../../../images/banner/luis-tosta-MEZDyn98La8-unsplash.jpg'
import slider2 from '../../../images/banner/adi-goldstein-Hli3R6LKibo-unsplash.jpg'
import './Slider.css'
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div>
            <section className="section-space mb-5">

                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div
                                className="carousel-caption d-flex flex-column justify-content-center">

                                <p className='upontxt'>Devent is the wWeeding Management Specialists
                                </p>
                                <h1 className="fw-bold ">
                                    <span>WE PERSONALIZE YOUR</span>
                                    <br />
                                    <span>WEDDING EVENTS</span>
                                </h1>

                                <p>Devents always available for you when you <span className="d-md-block d-none"> need to create your memory, Hire Devents for makes your weeding special</span></p>

                                <div className='my-4 d-md-flex justify-content-center d-none '>
                                    <Link className=" headerbtn mx-2 " role="button" aria-disabled="true">Hire Devent</Link>
                                    <Link className=" btn btn-outline mx-2 headerbtn2 " role="button" aria-disabled="true">Read More</Link>
                                </div>

                            </div>

                            <img src={slider1} className="d-block w-100 img-fluid img" alt="..." />
                        </div>

                        <div className="carousel-item ">
                            <div
                                className="carousel-caption  d-flex flex-column justify-content-center">

                                <p className='upontxt'>Devent is the Birthday Management Specialists
                                </p>

                                <h1 className="fw-bold">
                                    <span>CELEBRATE YOUR EVENTSTHAT </span>
                                    <br />
                                    <span>LASTS LONGER</span>
                                </h1>

                                <p>Devents always available for you when you<span className="d-md-block d-none"> need to create your memory, Hire Devents for makes your weeding special</span></p>


                                <div className='my-4 d-md-flex justify-content-center d-none'>
                                    <Link className=" headerbtn mx-2 " role="button" aria-disabled="true">Hire Devent</Link>
                                    <Link className=" btn btn-outline mx-2 headerbtn2 " role="button" aria-disabled="true">Read More</Link>

                                </div>
                            </div>
                            <img src={slider2} className="d-block w-100 img-fluid img" alt="..." />
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon iconhandle" aria-hidden="true"></span>
                        <span className="visually-hidden bg-dark">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon iconhandle" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
        </div>
    );
};

export default Slider;