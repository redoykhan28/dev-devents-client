import React from 'react';
import './Review.css'
import { FaComments } from "react-icons/fa";


const Reviews = ({ reviews }) => {

    const { review, email, profile } = reviews

    return (

        <div className="container">
            <div className='rv'>
                <div className="card rvcard">
                    <div className="card-body">
                        <div className="d-flex justify-content-start">
                            <img className="img-fluid dp rounded-circle" src={profile} alt="profile" />
                            <p className="fw-bold mx-2"> <small>{email}</small> </p>
                        </div>

                        <div className='my-3'>
                            <p> <span className='clr'><FaComments /></span> {review}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;