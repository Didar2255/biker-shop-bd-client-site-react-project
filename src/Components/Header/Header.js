import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, handelLogOut } = useAuth()
    return (
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="/home">Biker Shop BD</Navbar.Brand>
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
                        About us
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