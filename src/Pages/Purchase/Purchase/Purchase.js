import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Card, Container } from 'react-bootstrap';
import './Purchase.css'
import useAuth from '../../../Hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <div className='my-5'>
            <Container>
                <div className="row">
                    <div className="col-md-5">
                        <h3 className='my-4'>Ordered Product :</h3>
                        <Card style={{ width: '18rem' }} className='order-card'>
                            <Card.Img variant="top" src={product?.image} />
                            <Card.Body>
                                <Card.Title>{product?.productName}</Card.Title>
                                <Card.Text>
                                    {product?.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-7">
                        <h3 className='my-3'>Biker ShopBD Product Purchase form :</h3>
                        <div className="order-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")}
                                    value={user?.displayName}
                                />
                                <input {...register("email")}
                                    defaultValue={user?.email}
                                />
                                <input {...register("productName")}
                                    defaultValue={product?.productName}
                                />
                                <input {...register("productPrice")}
                                    defaultValue={product?.price}
                                />
                                <input {...register("date")}
                                    type='date'
                                    defaultValue={new Date()}
                                />
                                <input {...register("address")}
                                    type='text'
                                    placeholder=' Enter Address '
                                />
                                <input {...register("number")}
                                    type='number'
                                    placeholder='Enter Phone number '
                                />
                                <select {...register("Choose")}>
                                    <option value="premium">premium</option>
                                    <option value="classic">classic</option>
                                    <option value="regular">regular</option>
                                </select>
                                <input type="submit" value='purchase product' />
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Purchase;