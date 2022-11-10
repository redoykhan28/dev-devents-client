import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthContext';
import image from '../../images/my reviews/christin-hume-Hcfwew744z4-unsplash.jpg'
import image2 from '../../images/no data/No data-pana.png'
import ReviewTable from './ReviewTable';
import toast, { Toaster } from 'react-hot-toast';


const MyReview = () => {
    //use context
    const { user, logout } = useContext(authContext);

    //state for review
    const [myReview, setMyReview] = useState([])
    console.log(myReview)

    useEffect(() => {
        fetch(`http://localhost:5000/review/mail/?email=${user.email}`, {

            headers: {

                authorization: `Bearer ${localStorage.getItem('devent-token')}`
            }

        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                    return logout()


                }
                return res.json()
            })
            .then(data => setMyReview(data))
    }, [user?.email, logout])


    //delete a review
    const deleteHandler = (id) => {

        const agree = window.confirm('Are you sure you want to delete?')

        if (agree) {

            fetch(`http://localhost:5000/review/delete/${id}`, {

                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data)
                    const remaining = myReview.filter(review => review._id !== id)
                    setMyReview(remaining)
                    toast.success('Deleted Successfully')
                })

        }

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


                                    <h1 className="fw-bold ">My
                                        <span className='clr'> Reviews</span>
                                    </h1>
                                    <p>Total Review: {myReview.length}</p>

                                </div>

                                <img src={image} className="d-block w-100 img-fluid imgservice" alt="..." />
                            </div>
                        </div>
                    </div>

                </section>
            </section>

            <section className='my-5 container '>
                <h4 className='text-center my-5'>My <span className='clr'>Review Data</span></h4>
                {
                    myReview.length > 0 ?
                        <table class="table table-danger table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Review</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myReview.map(reviews => <ReviewTable key={reviews._id} myReviews={reviews} deleteHandler={deleteHandler}></ReviewTable>)
                                }


                            </tbody>
                        </table>
                        :
                        <div className='text-center my-5'>
                            <img className='img-fluid w-25 mx-auto' src={image2} alt="no data" />
                            <h4 className='my-2'>No Review Found</h4>
                        </div>
                }
            </section>
            <Toaster />
        </div >
    );
};

export default MyReview;