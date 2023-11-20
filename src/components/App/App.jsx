import React from 'react';
import axios from 'axios';
import './App.css';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectPizza from '../Select Pizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';

function App() {
  const total = useSelector(store => store.total);

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <div>
            <h1 className='App-title' style={{textAlign: 'center', margin: '0px'}}>Prime Pizza</h1>
          </div>
          <div style={{ 
              float: 'right', 
              marginRight: '20px', 
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
          }}>
            <ShoppingCartIcon sx={{ marginRight: '6px' }}/>
            Total: ${total}
          </div>
        </header>
        <p>Pizza is great.</p>
        <br />
        <Route exact path="/" >
          <br /><br />
          <img src='images/pizza_photo.png' />
          <nav>
            <ul>
              <Link to="/select">View pizzas</Link>
              <br />
              <Link to="/information">Enter Information</Link>
            </ul>
          </nav>
        </Route>
        <Route exact path="/information" >
          <CustomerInfo />
        </Route>
        <Route exact path="/select">
          <SelectPizza/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
