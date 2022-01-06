import React from 'react';
import { Container } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div>
            <Container>
                <div className='row update-news my-5 '>
                    <div className='col-md-6 team-contact'>
                        <button><i className="fas fa-envelope-open"></i></button>
                        <input type="text" name="" id="" placeholder='Your Email Address' />
                    </div>
                    <div className='col-md-6'>
                        <div className="text-white">
                            <h2>Latest news and update</h2>
                            <p> <i className="fas fa-envelope-open"></i> Subscribe Our News later ,Get In Touch With Us.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Subscribe;