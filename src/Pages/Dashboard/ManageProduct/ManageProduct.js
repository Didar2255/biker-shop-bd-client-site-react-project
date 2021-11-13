import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    const [isDeleteProduct, setIsDeleteProduct] = useState(null)
    useEffect(() => {
        fetch('https://radiant-savannah-23694.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDeleteProduct]);
    const handelDeleteProduct = (id) => {
        const proceed = window.confirm('Are sure want to delete the product')
        if (proceed) {
            fetch(`https://radiant-savannah-23694.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Product successfully Delete')
                        setIsDeleteProduct(true)
                    }
                    else {
                        setIsDeleteProduct(false)
                    }
                })
        }
    }
    return (
        <div className='my-4'>
            <h2>Manage all product</h2>
            <Table responsive>
                <thead>
                    <tr>
                        <th >Product Name</th>
                        <th >Product Image</th>
                        <th >Product Price</th>
                        <th >Update</th>
                        <th >Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr>
                            <td >{product.productName}</td>
                            <td >{product.image}</td>
                            <td >{product.price}</td>
                            <td ><i className="fas fa-edit update-icon"></i></td>
                            <td ><i className="fas fa-trash-alt delete-icon" onClick={() => handelDeleteProduct(product._id)}></i></td>
                        </tr>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default ManageProduct;