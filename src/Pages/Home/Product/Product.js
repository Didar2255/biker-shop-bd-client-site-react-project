import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { productName, image, description, _id, price } = product
    const url = `/product/${_id}`
    return (
        <Col>
            <Card className='product-card shadow'>
                <Card.Img className='product-img' variant="top" src={image} />
                <Card.Body>
                    <h4 className='product-name'>{productName}</h4>
                    <Card.Text>
                        {description.slice(0, 150)}
                        <h5 className='my-2'>Price : ${price}</h5>
                    </Card.Text>
                    <Link to={url}> <button className='order-btn'><AiOutlineShoppingCart /> Buy now</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;