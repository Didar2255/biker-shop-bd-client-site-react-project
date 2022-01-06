import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import About from './Pages/About/About/About';
import AllProducts from './Pages/AllProduct/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import StatusUpdate from './Pages/Dashboard/StatusUpdate/StatusUpdate';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import PrivetRoute from './PrivetRoute/PrivetRoute/PrivetRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/allProducts'>
              <AllProducts></AllProducts>
            </Route>
            <PrivetRoute path='/product/:id'>
              <Purchase></Purchase>
            </PrivetRoute>
            <Route path='/updateStatus/:id'>
              <StatusUpdate></StatusUpdate>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;