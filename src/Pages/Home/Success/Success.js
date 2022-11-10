import React from 'react';
import image from '../../../images/Success/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg'

const Success = () => {
    return (
        <div className='top3'>
            <section className="section-space mb-5">

                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item ci2 active">
                            <div
                                className="carousel-caption cp d-flex flex-column flex-md-row justify-content-between align-items-center">


                                <div className="text-center">
                                    <h1 className='text-white fw-bolder'>320</h1>
                                    <h6 className='fw-bold'>Featured Events</h6>
                                </div>
                                <div className=" text-center">
                                    <h1 className='text-white fw-bolder'>156</h1>
                                    <h6 className='fw-bold'>Loyal Customers</h6>
                                </div>
                                <div className="text-center" >
                                    <h1 className='text-white fw-bolder'>167</h1>
                                    <h6 className='fw-bold'>Trophy Wons</h6>
                                </div>
                                <div className="text-center" >
                                    <h1 className='text-white fw-bolder'>594</h1>
                                    <h6 className='fw-bold'>Good Comments</h6>
                                </div>


                            </div>

                            <img src={image} className="d-block w-100 img-fluid imgservice" alt="..." />
                        </div>
                    </div>
                </div>

            </section>
        </div >
    );
};

export default Success;