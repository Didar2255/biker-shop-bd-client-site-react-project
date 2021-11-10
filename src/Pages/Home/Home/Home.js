import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import Blog from '../Blog/Blog';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <h2>This is home page</h2>
            <Blog></Blog>
            <Footer></Footer>

        </div>
    );
};

export default Home;