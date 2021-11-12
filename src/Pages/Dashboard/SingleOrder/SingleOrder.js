import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleOrder = ({ order }) => {
    const { productName, productImg, productPrice, _id, status, productColor } = order;
    const handelDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure to delete the order ')
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete Success full ?')
                    }
                })
        }
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={productImg} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                        <h6>Color : {productColor}</h6>
                        <div className="d-flex align-items-center justify-content-between">
                            <p> Price : ${productPrice}</p>
                            <p>Order Status : {status}</p>
                        </div>
                        <Button variant='danger' onClick={() => handelDeleteOrder(_id)}>Cancel</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleOrder;