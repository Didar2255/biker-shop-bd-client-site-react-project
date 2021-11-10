import React, { useState } from 'react';
import image1 from '../../../Images/LogIn/image1.jpg'
import "./Login.css"
import { Link } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [login, setLogin] = useState({})
    const { handelLoginProcess, isLoading } = useAuth()

    const handelOnchange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const loginData = { ...login }
        loginData[field] = value;
        setLogin(loginData)
    }

    const handelFormSubmit = (e) => {
        handelLoginProcess(login.email, login.password)
        e.preventDefault()
    }

    return (
        <div>
            <Container>
                <div className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-img">
                                <img src={image1} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-form">
                                <h2>Please Log-In</h2>
                                {!isLoading && <form onSubmit={handelFormSubmit}>
                                    <input
                                        type='email'
                                        name='email'
                                        onBlur={handelOnchange}
                                        placeholder='User Email *'
                                    />
                                    <input
                                        type='password'
                                        name='password'
                                        onBlur={handelOnchange}
                                        placeholder='User Password *'
                                    />
                                    <input type="submit" value='Log in' />
                                </form>}
                                {isLoading && <Spinner animation="border" variant="danger" />}
                                <p>New user ? <Link to='/register'>Register Here</Link></p>
                                _________________ or ________________
                                <br />
                                <button className="login-btn "> Sign With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;