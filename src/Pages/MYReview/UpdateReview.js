import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import image from '../../images/my reviews/christin-hume-Hcfwew744z4-unsplash.jpg'
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../Hooks/UserHooks';



const UpdateReview = () => {

    //title
    useTitle('Update Review')

    const update = useLoaderData()
    // console.log(update)


    //handle update review
    const updateHandler = (e) => {
        e.preventDefault();

        const form = e.target;
        const text = form.textarea.value

        const currentReview = {
            text
        }

        console.log(text)

        fetch(`https://devent-server.vercel.app/update/${update._id}`, {

            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(currentReview)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                form.reset()
                toast.success('Review updated Successfully')

            })

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


                                    <h1 className="fw-bold ">Update
                                        <span className='clr'> Review</span>
                                    </h1>

                                </div>

                                <img src={image} className="d-block w-100 img-fluid imgservice" alt="..." />
                            </div>
                        </div>
                    </div>

                </section>
            </section>

            <section className='container my-5'>
                <h4 className='my-5 text-center'>Update your <span className='clr'>Review</span></h4>
                <div>
                    <form onSubmit={updateHandler}>
                        <div className="mb-3 w-50 mx-auto">
                            <textarea name='textarea' defaultValue={update.review} placeholder='Write your review here...' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <div className='text-start my-3'>
                                <button className='btn rvbtn'>Update</button>
                            </div>
                            <p><small>Go to my reviews? <Link to={'/my-review'} className='clr'>click here</Link></small></p>
                        </div>

                    </form>
                </div>
            </section>
            <Toaster />
        </div>
    );
};

export default UpdateReview;