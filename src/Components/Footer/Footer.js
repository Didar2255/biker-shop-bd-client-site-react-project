import React from 'react';
import logo from '../../Images/Logo/pay.png'
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="row my-4">
                    <div className="col-md-4">
                        <h1> <i className="fas fa-shipping-fast"></i> Free Shipping</h1>
                        <h6>Bike Shipping From Indonesia</h6>
                    </div>
                    <div className="col-md-4">
                        <h1> <i className="fas fa-shield-virus"></i> One Year Service</h1>
                        <h6>Service Guarantee After bye Motor bike</h6>
                    </div>
                    <div className="col-md-4">
                        <h1> <i className="fas fa-phone-alt"></i> Online Support</h1>
                        <h6>24 Online Support from Our Showroom</h6>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-5 footer-content">
                        <p>
                            In order to continue to be a company society wants to exist,
                            Biker Shop BD aims to become the  “power” that supports people around the world who are trying to do things based on their own initiative.
                        </p>
                        <p> <i className="fas fa-house-user icon"></i>Address : Banani,Model Town,Dhaka</p>
                        <p> <i className="fas fa-phone-square-alt icon"></i>Phone : +1236459</p>
                    </div>
                    <div className="col-md-2 footer-content">
                        <h2 className='ms-4'>Services</h2>
                        <ul>
                            <li>Free Shipping</li>
                            <li>Product Delivery</li>
                            <li>Product Tracking</li>
                            <li>Online Payment</li>
                            <li>Discount</li>
                        </ul>

                    </div>
                    <div className="col-md-2 footer-content">
                        <h2 className='ms-4'>Support</h2>
                        <ul>
                            <li>Best Quality</li>
                            <li>Free Services</li>
                            <li>Order Details</li>
                            <li>Free Shipping</li>
                            <li>Order Slips</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>Contact Us</h2>
                        <div className="social-media">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-whatsapp-square"></i>
                        </div>
                        <img src={logo} alt="" className='img-fluid logo' />

                    </div>
                </div>
            </div>
            <div className="footer-copy">
                <p>&copy; 2021 made by Didar </p>
            </div>
        </div>
    );
};

export default Footer;