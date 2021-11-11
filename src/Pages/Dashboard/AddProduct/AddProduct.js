import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product Successfully Inserted ')
                    reset()
                }
            })
    };
    return (
        <div className='addProduct-form my-5'>
            <h2>Add a New Product :</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("productName")} placeholder='Product Name *' />
                <input {...register("description")} placeholder='Product Description' />
                <input {...register("image")} placeholder='Product Image' />
                <input type="number"  {...register("price")} placeholder='Product Price' />
                <input type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;