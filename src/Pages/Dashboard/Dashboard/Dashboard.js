import React from 'react';
import { Button } from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import './Dashboard.css'

const Dashboard = () => {
    const { handelLogOut } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <div className="dashboard-container">
            <div className='row'>
                <div className='col-md-3 col-12'>
                    <div className="dashboard-area">
                        <div className="dashboard">
                            <h2>Dashboard</h2>
                            <Link to={`${url}`}>
                                <li className='dashboard-menu'> <i class="fas fa-list icon"></i> My Orders</li>
                            </Link>
                            <Link to={`${url}/addReviews`}>
                                <li className='dashboard-menu'><i class="fas fa-plus icon"></i>Add Reviews</li>
                            </Link>
                            <Link to={`${url}/pay`}>
                                <li className='dashboard-menu'> <i class="fab fa-amazon-pay icon"></i> Pay</li>
                            </Link>
                            <Link to={`${url}/manageOrder`}>
                                <li className='dashboard-menu'> <i class="fas fa-tasks icon"></i> Manage All order</li>
                            </Link>
                            <Link to={`${url}/addProduct`}>
                                <li className='dashboard-menu'><i class="fas fa-plus icon"></i>Add Product</li>
                            </Link>
                            <Link to={`${url}/manageProduct`}>
                                <li className='dashboard-menu'> <i class="fas fa-th-large icon"></i> Manage Product</li>
                            </Link>
                            <Link to={`${url}/makeAdmin`}>
                                <li className='dashboard-menu'> <i class="fas fa-user-plus icon"></i> Make Admin</li>
                            </Link>
                            <li className='dashboard'><Button variant='danger' className='my-4' onClick={handelLogOut}>Log-Out</Button></li>
                        </div>

                    </div>
                </div>
                <div className="col-md-9 col-12">
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