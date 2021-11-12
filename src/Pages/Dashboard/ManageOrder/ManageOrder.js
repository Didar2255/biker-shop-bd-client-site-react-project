import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageOrder.css'

const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const [isDelete, setIsDelete] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/allOrder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDelete]);
    const handelDeleteOrder = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are you sure delete the order')
                    setIsDelete(true)
                }
                else {
                    setIsDelete(false)
                }
            })
    }
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
                            <td ><Link to={`/updateStatus/${order._id}`}><i className="fas fa-edit update-icon" ></i></Link></td>
                            <td ><i className="fas fa-trash-alt delete-icon" onClick={() => handelDeleteOrder(order._id)}></i></td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrder;