import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import "./AddReview.css"

const AddReview = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('https://radiant-savannah-23694.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review add successfully')
                    reset()
                }
            })
    };
    return (
        <div className='add-review'>
            <h2>Add Your Review :</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")}
                    type='text'
                    defaultValue={user.displayName}
                />
                <input  {...register("email")}
                    type='email'
                    defaultValue={user.email}
                />
                <input {...register("rating")}
                    placeholder='Rating *'
                />
                <textarea {...register('review')}
                    type='text'
                    placeholder='Review *'
                />
                <input type="submit" value='Add Review' />
            </form>
        </div>
    );
};

export default AddReview;