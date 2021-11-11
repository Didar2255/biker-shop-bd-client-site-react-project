import React, { useState } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import registerImg from '../../../Images/LogIn/Image2.jpg'
import './Register.css'

const Register = () => {
    const [registerData, setRegisterData] = useState({})
    const { user, handelCreateAccount, isLoading } = useFirebase()
    const location = useLocation()
    const history = useHistory()
    const handelRegisterOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)
    }
    const handelRegisterForm = (e) => {
        handelCreateAccount(registerData.email, registerData.password, registerData.name, location, history)
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
                                {!isLoading && <form onSubmit={handelRegisterForm}>
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
                                </form>}
                                {isLoading && <Spinner animation="border" variant="danger" />}
                                {user?.email && <Alert variant='success'>
                                    User Successfully register
                                </Alert>}
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