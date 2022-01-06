import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './SingleProduct.css'

const SingleProducts = (props) => {
    const { productName, image, price, _id, color } = props.product
    const url = `/product/${_id}`
    return (
        <div>
            <Col>
                <Card style={{ textAlign: 'justify', lineHeight: '24px' }} className='shadow product-card'>
                    <Card.Img className='product-img' variant="top" src={image} />
                    <Card.Body class='card-body'>
                        <h4 className='product-name'>{productName}</h4>
                        <Card.Text >
                            <h5>Color : {color}</h5>
                            <p>Price : $ {price}</p>
                        </Card.Text>
                        <Link to={url}>
                            <button className='order-btn'><AiOutlineShoppingCart /> Buy now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleProducts;