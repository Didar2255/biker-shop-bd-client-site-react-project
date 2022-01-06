import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../Images/Logo/bike logo.png'
import './Header.css'

const Header = () => {
    const { user, handelLogOut } = useAuth()
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                    <div className="d-flex align-items-center">
                        <img
                            src={logo}
                            width='100px'
                            height='50px'
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        <span className='site-name'> Biker Shop BD</span></div>
                </Navbar.Brand>
                <Nav className="ms-auto menu-bar">
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                    <NavLink to='/allProducts'>
                        Explore All Products
                    </NavLink>
                    <NavLink to='/dashboard'>
                        Dashboard
                    </NavLink>
                    <NavLink to='/about'>
                        About Us
                    </NavLink>
                    <NavLink to='/contact'>
                        Contact Us
                    </NavLink>
                    {user.email && <span className='display-name'>{user.displayName}</span>}
                    {user?.email ? <Button variant='danger' onClick={handelLogOut}>Log-Out</Button>
                        :
                        <NavLink to='/login'>
                            Log-In
                        </NavLink>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;