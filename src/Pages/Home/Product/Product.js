import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { productName, image, description, _id } = product
    const url = `/product/${_id}`
    return (
        <Col>
            <Card className='product-card shadow'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 150)}
                    </Card.Text>
                    <Link to={url}><Button className='buy-btn'>Buy now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;