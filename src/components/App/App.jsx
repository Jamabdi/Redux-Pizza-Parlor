import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectPizza from '../Select Pizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

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
             
            </ul>
          </nav>
        </Route>
        <Route exact path="/information" >
          <CustomerInfo />
        </Route>
        <Route exact path="/select">
          <SelectPizza/>
        </Route>
        <Route>
          <Footer/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
