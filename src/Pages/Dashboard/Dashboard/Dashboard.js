import React from 'react';
import { Button } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="dashboard-container">
            <div className='row'>
                <div className='col-md-3 col-12'>
                    <div className="dashboard-area">
                        <div className="dashboard">
                            <h4>Dashboard</h4>
                            <Link to={`${url}`}>
                                <li className='dashboard-menu'>My Orders</li>
                            </Link>
                            <Link to={`${url}/addReviews`}>
                                <li className='dashboard-menu'>Add Reviews</li>
                            </Link>
                            <Link to={`${url}/pay`}>
                                <li className='dashboard-menu'>Pay</li>
                            </Link>
                            <Link to={`${url}/manageOrder`}>
                                <li className='dashboard-menu'>Manage All order</li>
                            </Link>
                            <Link to={`${url}/addProduct`}>
                                <li className='dashboard-menu'>Add Product</li>
                            </Link>
                            <Link to={`${url}/manageProduct`}>
                                <li className='dashboard-menu'>Manage Product</li>
                            </Link>
                            <Link to={`${url}/makeAdmin`}>
                                <li className='dashboard-menu'>Make Admin</li>
                            </Link>
                            <li className='dashboard'><Button variant='danger'>Log-Out</Button></li>
                        </div>

                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <Switch>
                        <Route exact path={path}>
                            <MyOrder></MyOrder>
                        </Route>
                        <Route path={`${path}/addReviews`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/manageOrder`}>
                            <ManageOrder></ManageOrder>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/manageProduct`}>
                            <ManageProduct></ManageProduct>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                    </Switch>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;