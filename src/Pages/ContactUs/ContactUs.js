import React from 'react';
import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';
import './ContactUs.css'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Subscribe from '../Home/Subscribe/Subscribe';

const ContactUs = () => {
    const SendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_b08zqk6', 'template_h5osdeq', e.target, 'user_R4KvZ7qws6ZUrAFZJXEEs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }
    return (
        <div>
            <Header></Header>
            <Container>
                <h3 className='product-title '>CONTACT US</h3>
                <h6>Got a question? We had love to hear from you. <br /> Send us a message and we will respond as soon as possible.</h6>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="contact-detail">
                            <h4 className='contact-text'>Get In Touch</h4>
                            <p></p>
                            <h6> <i className="fas fa-map-marker-alt contact-icon"></i> Address : </h6>
                            <p>Adabor,Dhaka,Bangladesh</p>
                            <h6> <i className="fas fa-phone-volume contact-icon"></i> Phone : </h6>
                            <p>+0881234561256</p>
                            <h6> <i className="fas fa-envelope contact-icon"></i> Email :</h6>
                            <p>perfume123@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className='contact-text'>Drop us message</h4>
                        <div className="contact-from">
                            <form onSubmit={SendEmail}>
                                <input type="text" className='contact name' placeholder='Your Name *' name='name' />
                                <input type="text" className='contact email' placeholder='Your Email *' name='email' />
                                <input type="text" className='contact subject' placeholder='Write a Subject *' name='subject' />
                                <textarea name="message" id="message" placeholder='Write your massage' name='message'></textarea>
                                <button className='contact-btn' type='submit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;