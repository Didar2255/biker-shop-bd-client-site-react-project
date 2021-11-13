import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating'
import './Review.css'

const Review = (props) => {
    console.log(props.review)
    const { name, email, review, rating } = props.review
    return (
        <div>
            <Col>
                <Card className='shadow review-card'>
                    <Card.Body className='review-card-body'>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <h5>{email}</h5>
                            <p>{review}</p>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star star-icon"
                                fullSymbol="fas fa-star star-icon"
                                readonly
                            />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;