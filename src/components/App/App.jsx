import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectPizza from '../Select Pizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Admin from '../Admin/Admin';
import Checkout from '../Checkout/Checkout';
import EndPage from '../EndPage/EndPage';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

function App() {
  const buttonStyle = {
    marginBottom:'20px',
    backgroundColor:'tomato',
    color: 'black'
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
          <br /><br /><br /><br />
          <img src='images/pizza_photo.png' />
          <br /><br />
          <nav>
            <div>
              <Link to="/select">
                <Button variant="contained" style={buttonStyle}>View pizzas</Button>
              </Link>
              <br />
            </div>
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
        <Route exact path="/confirmation">
          <EndPage/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
