import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import './StatusUpdate.css'

const StatusUpdate = () => {
    const { id } = useParams()

    const [status, setStatus] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/updateStatus/${id}`)
            .then(res => res.json())
            .then(data => setStatus(data))
    }, [id]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Order successfully updated')
                }
            })
    };
    return (
        <div className='update-status'>
            <h2>Update Order Status : </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("status")}>
                    <option value="pending">{status?.status}</option>
                    <option value="approve">approve</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    );
};

export default StatusUpdate;