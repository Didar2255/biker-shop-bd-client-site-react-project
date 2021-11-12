import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    setSuccess(true)
                    reset()
                }
            })
    };
    return (
        <div className='admin-form'>
            <h2 className='my-4'>Make an Admin :</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='email' {...register("email")} placeholder='Enter email *' />
                <Button type='submit' variant='success'>Make Admin</Button>
            </form>
            {success && <Alert variant='success'>
                Admin Create Successfully
            </Alert>}
        </div>
    );
};

export default MakeAdmin;