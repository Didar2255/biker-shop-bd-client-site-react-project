import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleProducts = (props) => {
    const { productName, description, image, price, _id } = props.product
    return (
        <div>
            <Col>
                <Card style={{ textAlign: 'justify', lineHeight: '24px' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{productName}</Card.Title>
                        <Card.Text >
                            {description.slice(0, 180)}
                            <h5>Price : $ {price}</h5>
                        </Card.Text>
                        <Button variant='primary'>Buy now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleProducts;