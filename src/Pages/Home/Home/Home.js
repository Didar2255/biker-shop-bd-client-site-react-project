import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import Blog from '../Blog/Blog';
import CustomerQuestion from '../CustomerQuestion/CustomerQuestion';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews/Reviews';
import Subscribe from '../Subscribe/Subscribe';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <Products></Products>
            <Blog></Blog>
            <CustomerQuestion></CustomerQuestion>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;