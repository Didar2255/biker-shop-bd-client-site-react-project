import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import './About.css'

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="about-section">
                <h2>About Biker Shop BD :</h2>
                <p>Biker is the best bike research app in bangladesh to buy, sell and compare  bikes, be it new or used. It gives you in-depth information, price alerts and offers about  new motorcycles and scooters. You can compare any two bikes to decide which bike to buy.</p>
                <p>
                    Our auto-experts are always present to help you purchase  bikes in Bangladesh. Biker shop BD has launched many innovative features to ensure that users get an immersive experience of the car and bike models before visiting a dealer showroom. These include a Feel The bike tool that gives 360-degree interior/exterior views with sounds of the bike and explanations of features with videos; search and comparison by make, model, price, features; and live offers and promotions in all cities.
                </p>
                <p>Earlier a part of Times Internet, a subsidiary of the Times of Bangladesh, Biker Shop was acquired by CarDekho, a subsidiary of GirnarSoft, signalling consolidation in the online auto classifieds space. Biker Shop was awarded the most popular automotive website of the year in 2021.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;