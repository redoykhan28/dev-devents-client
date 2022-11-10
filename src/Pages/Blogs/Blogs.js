import React from 'react';
import useTitle from '../../Hooks/UserHooks';
import image from '../../images/blogs/kenny-eliason-qUuzPvjw2CI-unsplash.jpg'

const Blogs = () => {
    //title
    useTitle('Blogs')
    return (
        <div className='top'>

            <section>
                <section className="section-space mb-5">

                    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item ci active">
                                <div
                                    className="carousel-caption cp d-flex flex-column justify-content-center">


                                    <h1 className="fw-bold ">Devent
                                        <span className='clr'> Blogs</span>
                                    </h1>

                                </div>

                                <img src={image} className="d-block w-100 img-fluid imgservice" alt="..." />
                            </div>
                        </div>
                    </div>

                </section>
            </section>

            <section className='my-5'>
                <div>
                    <div className={'my-5 w-75 mx-auto'}>
                        <h4 className='my-5'>Blogs</h4>
                        <div className='mb-5'>
                            <h5 className='my-3'>1. Difference between SQL and NoSQL</h5>
                            <p><b>Answer:</b> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL..SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases.</p>
                        </div>
                        <div className='mb-5'>
                            <h5 className='my-3'>2. What is JWT, and how does it work?
                            </h5>
                            <p><b>Answer:</b> What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
                        </div>
                        <div className='mb-5'>
                            <h5 className='my-3'>3. What is the difference between javascript and NodeJS?</h5>
                            <p><b>Answer:</b> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. js most commonly used on client-side servers  on the hand It's mainly popular on the server-side.</p>
                        </div>
                        <div className='mb-5'>
                            <h5 className='my-3'>4. How does NodeJS handle multiple requests at the same time?
                            </h5>
                            <p><b>Answer:</b> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. so node. js can process upwards of 1000 requests per second and speed limited only to the speed of your network card. Note that it's 1000 requests per second not clients connected simultaneously. It can handle the 10000 simultaneous clients without issue.</p>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Blogs;