import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../Images/Banner/banner_1.jpg'
import pic2 from '../../../Images/Banner/banner_2.jpg'
import pic3 from '../../../Images/Banner/banner_3.jpg'

const TopBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Yamaha XSR900</h1>
                    <p>Straight Out of The 80s</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>2021 Ducati Monster</h1>
                    <p>Exciting and Fits The Monster tag Well</p>
                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Bajaj Pulsar F250 and N250</h1>
                    <p>Can The 250s Recreate The Pulsar Magic ?  </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;