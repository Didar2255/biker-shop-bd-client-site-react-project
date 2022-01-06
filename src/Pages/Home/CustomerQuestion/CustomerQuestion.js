import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import bike from '../../../Images/Question/indian-build.jpg'
import './CustomerQuestion.css'

const CustomerQuestion = () => {
    return (
        <Container>
            <div className="row d-flex align-items-center question-section">
                <div className="col-md-6">
                    <h2 className='question-title'>Frequently Ask Question </h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header ><span className='question'>1. What are the best selling product?</span></Accordion.Header>
                            <Accordion.Body>
                                Our all products are unique and very demanding.But Laptop and Mobile phone are the best selling product in out website.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className='question'>
                                2. What are the return policy ?</span></Accordion.Header>
                            <Accordion.Body>
                                <li>The Product was purchased in the last 3 days</li>
                                <li>
                                    The Product is in its original packaging and no seal is broken.
                                </li>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><span className='question'>
                                3. What is the IME policy?</span></Accordion.Header>
                            <Accordion.Body>
                                <li>The Product was purchased in the last 3 days</li>
                                <li>
                                    The Product is in its original packaging and no seal is broken.
                                </li>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><span className='question'>
                                4.How to reach our Shop?</span></Accordion.Header>
                            <Accordion.Body>
                                <li>The Product was purchased in the last 3 days</li>
                                <li>
                                    The Product is in its original packaging and no seal is broken.
                                </li>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-md-6">
                    <div className="indian-royel">
                        <img src={bike} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CustomerQuestion;