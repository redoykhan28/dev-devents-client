import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/UserHooks';
import image from '../../../images/Services/aleksandr-popov-hTv8aaPziOQ-unsplash.jpg'
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css'



const Services = () => {

    //title
    useTitle('Services')

    //loader
    const [loader, setloader] = useState(true)

    //state for service
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://devent-server.vercel.app/service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setloader(false)

            })
    }, [])

    return (
        <div className='top bgclr'>

            <section>
                <section>
                    <section className="section-space mb-5">

                        <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item ci active">
                                    <div
                                        className="carousel-caption cp d-flex flex-column justify-content-center">


                                        <h1 className="fw-bold ">Devent
                                            <span className='clr'> Services</span>
                                        </h1>

                                    </div>

                                    <img src={image} className="d-block w-100 img-fluid imgservice" alt="..." />
                                </div>
                            </div>
                        </div>

                    </section>
                </section>
            </section>


            <section className='mt-5 container'>
                <h2 className='text-center fw-semibold mt-5 mb-4'>The <span className='clr fw-bold'>Event Management</span> Specialist</h2>
                <p className='text-center mb-5 fw-bold'>From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, <br />    Devents offer full range of Events Management Services that scale to your needs & budget.</p>


                {

                    loader ?
                        <div className='top'>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='service-card my-5'>
                            {

                                services?.map(service => <ServiceCard key={service._id}
                                    service={service}></ServiceCard>)
                            }
                        </div>
                }



            </section>

        </div>
    );
};

export default Services;