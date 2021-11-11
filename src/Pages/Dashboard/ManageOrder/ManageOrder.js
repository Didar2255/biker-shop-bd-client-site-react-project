import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageOrder.css'

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <div className='my-4'>
            <h2>Manage All Order :</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr>
                            <td >{order.name}</td>
                            <td >{order.email}</td>
                            <td >{order.productName}</td>
                            <td >{order.productPrice}</td>
                            <td >{order.status}</td>
                            <td ><i className="fas fa-edit update-icon"></i></td>
                            <td ><i className="fas fa-trash-alt delete-icon"></i></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrder;