import React from 'react';
import error from '../../Images/Logo/Error.png'

const NotFound = () => {
    return (
        <div>
            <img src={error} alt="" className='img-fluid' />
            <h3>404</h3>
            <p>This page are not available now.Try new......</p>
        </div>
    );
};

export default NotFound;