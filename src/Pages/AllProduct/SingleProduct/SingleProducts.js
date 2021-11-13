import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProducts = (props) => {
    const { productName, description, image, price, _id, color } = props.product
    const url = `/product/${_id}`
    return (
        <div>
            <Col>
                <Card style={{ textAlign: 'justify', lineHeight: '24px' }} className='shadow'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{productName}</Card.Title>
                        <Card.Text >
                            {description.slice(0, 180)}
                            <h4>Color : {color}</h4>
                            <h5>Price : $ {price}</h5>

                        </Card.Text>
                        <Link to={url}>
                            <Button variant='primary' >Buy now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleProducts;