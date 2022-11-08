import React from 'react';
import './ServiceCard.css'
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, image, price, description, ratings } = service
    return (

        <div>

            <div className="card">
                <img src={image} className="card-img-top crdimg" alt="img" />
                <div className="card-body">
                    <h5 className="card-title clr">{title}</h5>
                    <p className="card-text">{description.slice(0, 100)}...</p>
                    <div className='my-3 d-flex justify-content-between'>
                        <h6>Price: ${price}</h6>
                        <h6>Ratings: <FaStar className='star' /> {ratings} </h6>
                    </div>
                    <button className='btn cardbtn'>Details</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;