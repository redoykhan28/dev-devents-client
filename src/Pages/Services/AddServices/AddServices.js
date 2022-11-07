import React from 'react';
import image from '../../../images/AddService/halil-ibrahim-cetinkaya-lbBrOujiO-Q-unsplash.jpg'
import './AddServices.css'
const AddServices = () => {


    //service posting to db
    const btnHandler = (e) => {

        e.preventDefault()

        const form = e.target;
        const title = form.serviceName.value
        const image = form.serviceImage.value
        const ratings = form.serviceRatings.value
        const price = form.price.value
        const description = form.description.value

        console.log(title, image, ratings, price, description)
    }


    return (
        <div className='top'>
            <section>
                <section className="section-space mb-5">

                    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item ci active">
                                <div
                                    className="carousel-caption cp d-flex flex-column justify-content-center">


                                    <h1 className="fw-bold ">
                                        Add a <span className='clr'>Service</span>
                                    </h1>

                                </div>

                                <img src={image} className="d-block w-100 img-fluid imgservice" alt="..." />
                            </div>
                        </div>
                    </div>

                </section>
            </section>


            <section className='container background my-5'>
                <form onSubmit={btnHandler} className="row">
                    <h4 className='text-center mb-5'>Upload a Service</h4>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input type="text" name='serviceName' className="form-control inp" placeholder='Service Name' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input type="text" name='serviceImage' className="form-control inp " placeholder='Service Image' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input type="text" name='serviceRatings' className="form-control inp" placeholder='Service Ratings' id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <input type="text" name='price' className="form-control inp" placeholder='Service Cost' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control inp" id="exampleFormControlTextarea1" name='description' placeholder='Service Description' rows="3"></textarea>
                    </div>
                    <input className='btn addbtn' type="submit" value={'Add Service'} />
                </form>

            </section>
        </div>
    );
};

export default AddServices;