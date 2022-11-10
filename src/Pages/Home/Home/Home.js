import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';
import Slider from '../Slider/Slider';
import './Home.css'

const Home = () => {

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

            <section className=' service-section container'>
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
        </div>
    );
};

export default Home;