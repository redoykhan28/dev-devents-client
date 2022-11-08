import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../../Context/AuthContext';
import { FaStar, FaShoppingBag } from "react-icons/fa";
import './ServiceDetails.css'


const ServiceDetails = () => {

    //use context
    const { user } = useContext(authContext)

    //post review
    const btnHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const review = form.textarea.value
        console.log(review)

        const currentReview = {


        }
    }

    const service = useLoaderData()
    console.log(service)
    const { title, image, description, ratings, price } = service
    return (
        <div className='top3'>
            <section className='container'>
                <div className="row my-5 gx-5">
                    <div className="col-md-6">
                        <img className='img-fluid  mx-auto rounded-5' src={image} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3 className='text-start clr fw-bold'>{title}</h3>
                        <p className='text-start my-4'>{description}</p>
                        <div className='d-flex justify-content-between'>
                            <h6>Price: ${price}</h6>
                            <h6>Ratings: <FaStar className='star' /> {ratings}</h6>
                        </div>
                        <button className='btn purbtn my-4'> <FaShoppingBag /> Purchase</button>
                    </div>
                </div>
            </section>
            <section className='container top3'>
                <div className="row">
                    <div className="col-lg-6">
                        {
                            user ?

                                <form onSubmit={btnHandler}>
                                    <div className="mb-3 w-50 mx-auto">
                                        <h4 className='text-center my-5'>Add a <span className='clr'>Review</span></h4>
                                        <textarea name='textarea' placeholder='Write your review here...' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        <div className='text-start my-3'>
                                            <button className='btn rvbtn'>Add</button>
                                        </div>
                                    </div>

                                </form>

                                :
                                <div className='text-center'>
                                    <div className="card text-center">
                                        <div className="card-header fw-bold">
                                            Review
                                        </div>
                                        <div className="card-body">

                                            <p className="card-text">Wanna add a review? then</p>
                                            <Link to={'/login'}><button className='btn loginbtn'>Login</button> </Link>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="col-lg-6">
                        <h4 className='text-center my-5'>Customer <span className='clr'>Review</span></h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;