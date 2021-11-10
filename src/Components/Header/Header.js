import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
                    <NavLink to='/login'>
                        Log-In
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;