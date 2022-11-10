import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/UserHooks';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';
import Gallery from '../Gallery/Gallery';
import Slider from '../Slider/Slider';
import Success from '../Success/Success';
import './Home.css'

const Home = () => {

    //title
    useTitle('Home')

    const limit = 3
    const [service, setService] = useState([])

    useEffect(() => {

        fetch(`https://devent-server.vercel.app/service/?limit=${limit}`)
            .then(res => res.json())
            .then(data => {

                setService(data)
            })

    }, [limit])

    return (
        <div className='top'>
            <section className='my-5'>
                <Slider></Slider>
            </section>

            <section className=' service-section mb-5 container'>
                <h2 className='text-center fw-semibold mt-5 '>Devents <span className='clr'>Services</span></h2>
                <p className='text-center fw-bold mt-2 mb-3'>We make your events smart & impactful by personalised event management services</p>


                <div className='services mt-5 service-card'>
                    {
                        service?.map(sr => <ServiceCard key={sr._id}
                            service={sr}></ServiceCard>)
                    }
                </div>
                <div className='text-center my-2'>
                    <Link to='/services'><button className='btn btn-outline ldbtn'>Load More</button></Link>
                </div>
            </section>

            <section className='gallery'>
                <div className='container'>
                    <h2 className='text-start fw-semibold mt-5 '>Devents <span className='clr'>Gallery</span></h2>
                    <p className='text-start fw-bold mt-2 mb-3'>We make your events smart & impactful by personalised event management services.
                    </p>
                </div>
                <div className='my-5'>
                    <Gallery></Gallery>
                </div>
            </section>

            <section className='my-5'>
                <Success></Success>
            </section>
        </div>
    );
};

export default Home;