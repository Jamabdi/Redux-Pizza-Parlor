import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectPizza from '../Select Pizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Checkout from '../Checkout/Checkout';
import axios from 'axios';

function App() {
  const total = useSelector(store => store.total);

  const buttonStyle = {
    marginBottom:'20px',
  };

  return (
    <div className='App'>
      <Router>
        <Route>
          <Header/>
        </Route>
        <h3>Pizza is Great!</h3>
        <br />
        <Route exact path="/" >
          <br /><br />
          <img src='images/pizza_photo.png' />
          <nav>
            <ul>
        
              <Link to="/select">
                <Button variant="contained" style={buttonStyle}>View pizzas</Button>
              </Link>
              <br />
              <Link to="/information">
                <Button variant="contained" style={buttonStyle}>Enter Information</Button>
              </Link>
              <br />
              <Link to="/checkout">
                <Button variant="contained" style={buttonStyle}>Checkout</Button>
              </Link>
            </ul>
          </nav>
        </Route>
        <Route exact path="/information" >
          <CustomerInfo />
        </Route>
        <Route exact path="/select">
          <SelectPizza/>
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <br /> <br /> <br /> <br /> <br /> <br />
        <Route>
          <Footer/>
        </Route>
        <Route exact path="/admin">
          <Admin/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
