import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
        fetch('https://radiant-savannah-23694.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setDisplayProducts(data))
    }, [])
    return (
        <div className='my-5 display-product'>
            <h2>Recommended for You</h2>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        displayProducts.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;