import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from "react-icons/fa";


const ReviewTable = ({ myReviews, deleteHandler }) => {
    const { _id, serviceName, review, date } = myReviews
    return (

        <tr>

            <td className='fw-semibold'>{serviceName}</td>
            <td className='fw-semibold'>{review}</td>
            <td className='fw-semibold'>{date}</td>
            <td>
                <Link onClick={() => deleteHandler(_id)} className='mx-2 text-decoration text-danger fs-5'><FaTrashAlt /></Link>
                <Link to={`/updateReview/${_id}`} className='text-decoration text-success fs-5'><FaEdit /></Link>
            </td>
        </tr>

    );
};

export default ReviewTable;