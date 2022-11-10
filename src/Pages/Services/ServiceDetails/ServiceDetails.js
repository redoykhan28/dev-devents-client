import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { authContext } from '../../../Context/AuthContext';
import { FaStar, FaShoppingBag } from "react-icons/fa";
import './ServiceDetails.css'
import toast, { Toaster } from 'react-hot-toast';
import Reviews from '../Reviews/Reviews';
import image2 from '../../../images/no data/No data-pana.png'





const ServiceDetails = () => {

    //use  location
    const location = useLocation()

    const service = useLoaderData()
    console.log(service)

    // //state  for pagination
    const [page, setPage] = useState(0)
    const [perPage, setperPage] = useState(5)
    const [count, setCount] = useState([])

    //use context
    const { user } = useContext(authContext)

    //use state for fetch review
    const [reviews, setReviews] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/review/servicereview/?serviceId=${service?._id}&page=${page}&perPage=${perPage}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data.result)
                setCount(data.count)
            })

    }, [service?._id, page, perPage])


    const pages = Math.ceil(count / perPage)



    //post review
    const btnHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const review = form.textarea.value
        const username = user.displayName
        const profile = user.photoURL
        const email = user.email
        const serviceName = service.title
        const serviceId = service._id;
        const date = new Date()


        console.log(review)

        const currentReview = {

            review,
            username,
            profile,
            email,
            serviceName,
            serviceId,
            date
        }

        //post data
        fetch('http://localhost:5000/review', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentReview)

        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    console.log(data)
                    toast.success('Review added Successfully!')
                    form.reset()
                    const totalReviews = [currentReview, ...reviews]
                    setReviews(totalReviews)
                }
            })
    }


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
                                            <Link to={'/login'} state=
                                                {{ from: location }} replaced><button className='btn loginbtn'>Login</button> </Link>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="col-lg-6">
                        <h4 className='text-center mt-5 mb-3'>Customer <span className='clr'>Review</span></h4>
                        <p className='mb-5 text-center fw-bold'>Total Reviews: <span className='clr'>{reviews.length}</span></p>

                        <div>
                            {
                                reviews.length > 0 ?
                                    <div>
                                        {
                                            reviews?.map(review => <Reviews key={review._id}
                                                reviews={review}></Reviews>)
                                        }
                                    </div>
                                    :
                                    <div className='text-center my-5'>
                                        <img className='img-fluid w-25 mx-auto' src={image2} alt="no data" />
                                        <h4 className='my-2'>No Review Found</h4>
                                    </div>
                            }
                        </div>


                        <div className='my-4'>
                            <div className='pagination'>
                                {

                                    [...Array(pages).keys()].map(number => <button className={page === number ? 'selected' : 'btnpage'} onClick={() => setPage(number)} key={number}>{number}</button>)

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Toaster />
        </div>
    );
};

export default ServiceDetails;