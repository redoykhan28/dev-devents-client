import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthContext';
import image from '../../images/my reviews/christin-hume-Hcfwew744z4-unsplash.jpg'
import ReviewTable from './ReviewTable';

const MyReview = () => {
    //use context
    const { user } = useContext(authContext);

    //state for review
    const [myReview, setMyReview] = useState([])
    console.log(myReview)

    useEffect(() => {
        fetch(`http://localhost:5000/review/?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user?.email])

    return (
        <div className='top'>
            <section>
                <section className="section-space mb-5">

                    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item ci active">
                                <div
                                    className="carousel-caption cp d-flex flex-column justify-content-center">


                                    <h1 className="fw-bold ">My
                                        <span className='clr'> Reviews</span>
                                    </h1>

                                </div>

                                <img src={image} className="d-block w-100 img-fluid imgservice" alt="..." />
                            </div>
                        </div>
                    </div>

                </section>
            </section>

            <section className='my-5 container text-center'>
                <h4 className='text-center my-5'>My <span className='clr'>Review Data</span></h4>
                <table class="table ">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Review</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReview.map(reviews => <ReviewTable key={reviews._id} myReviews={reviews}></ReviewTable>)
                        }


                    </tbody>
                </table>
            </section>
        </div >
    );
};

export default MyReview;