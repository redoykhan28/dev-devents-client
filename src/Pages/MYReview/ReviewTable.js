import React from 'react';

const ReviewTable = ({ myReviews }) => {
    const { serviceName, review, date } = myReviews
    return (

        <tr>

            <td className='clr fw-semibold'>{serviceName}</td>
            <td className='fw-semibold'>{review}</td>
            <td className='fw-semibold'>{date}</td>
        </tr>

    );
};

export default ReviewTable;