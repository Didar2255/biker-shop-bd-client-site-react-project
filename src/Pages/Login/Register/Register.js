import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import registerImg from '../../../Images/LogIn/Image2.jpg'
import './Register.css'

const Register = () => {
    const [registerData, setRegisterData] = useState({})

    const handelRegisterOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)
    }
    console.log(registerData)

    const handelRegisterForm = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <Container>
                <div className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="register-img">
                                <img src={registerImg} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="register-form">
                                <h2>Please Create Your Account..!</h2>
                                <form onSubmit={handelRegisterForm}>
                                    <input
                                        type='text'
                                        name='name'
                                        onBlur={handelRegisterOnchange}
                                        placeholder='User Name *'
                                    />
                                    <input
                                        type='email'
                                        name='email'
                                        onBlur={handelRegisterOnchange}
                                        placeholder='User Email *'
                                    />
                                    <input
                                        type='password'
                                        name='password'
                                        onBlur={handelRegisterOnchange}
                                        placeholder='User Password *'
                                    />
                                    <input type="submit" value='Create Account' />
                                </form>
                                <p>All ready have an Account ? <Link to='/login'>Log in </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;