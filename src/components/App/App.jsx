import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectPizza from '../Select Pizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Box from '@mui/material/Box';

function App() {
  const total = useSelector(store => store.total);

  return (
    <div className='App'>
      <Router>
        <Route>
          <Header/>
        </Route>
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
