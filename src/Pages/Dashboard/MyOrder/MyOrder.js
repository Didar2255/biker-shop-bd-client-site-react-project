import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';
import './MyOrder.css'

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const [isDelete, setIsDelete] = useState(null)
    useEffect(() => {
        fetch(`https://radiant-savannah-23694.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user, isDelete])
    return (
        <div className='my-4 order-product'>
            <h2>Ordered Product </h2>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        orders.map(order => <SingleOrder
                            key={order._id}
                            order={order}
                            setDelete={setIsDelete}
                        ></SingleOrder>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;