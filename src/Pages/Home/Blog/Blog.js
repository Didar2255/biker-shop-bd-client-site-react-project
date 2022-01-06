import React from 'react';
import { Button } from 'react-bootstrap';
import blogImg1 from '../../../Images/BlogImg/blog-img1.jpg'
import blogImg2 from '../../../Images/BlogImg/blog-img2.jpg'
import './Blog.css'

const Blog = () => {
    return (
        <div className='my-5 blog'>
            <h1 className='product-title'>From Our Blog</h1>
            <h5 className='blog-des'>Latest news and event of our bike</h5>
            <div className="row">
                <div className="col-md-3 col-12 blog-img">
                    <img src={blogImg1} alt="" className='img-fluid' />

                </div>
                <div className="col-md-3 col-12">
                    <h2>Up coming Bike in 2021 </h2>
                    <small>Posted July 20,2020</small>
                    <p>Suzuki has sent out a launch invite, and we expect the Japanese giant to commence its EV journey in India with the new Burgam Electric</p>
                    <Button variant='danger'>Reding more</Button>

                </div>
                <div className="col-md-3 col-12">
                    <img src={blogImg2} alt="" className='img-fluid' />
                </div>
                <div className="col-md-3 col-12">
                    <h2>High sell Bike 2020</h2>
                    <small >Posted December 10,2020</small>
                    <p>Yamaha R15 vs 3 are the best sell bike in our shop.It is a very good looking bike in 2020 and save money.</p>
                    <Button variant='danger'>Reding more</Button>
                </div>
            </div>
        </div>
    );
};

export default Blog;