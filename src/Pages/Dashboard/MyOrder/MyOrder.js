import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])
    return (
        <div className='my-4'>
            <h2>This is my Order</h2>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        orders.map(order => <SingleOrder
                            key={order._id}
                            order={order}
                        ></SingleOrder>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;