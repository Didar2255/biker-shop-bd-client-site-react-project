import { React, useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../../Components/Header/Header'
import SingleProducts from '../SingleProduct/SingleProducts';
import './AllProduct.css'

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://radiant-savannah-23694.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <Container>
                <div className="my-4 product-title">
                    <h2>New Bikes in Bangladesh</h2>
                    <Row xs={1} md={3} className="g-4">
                        {
                            products.map(product => <SingleProducts
                                key={product._id}
                                product={product}
                            ></SingleProducts>)
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default AllProducts;