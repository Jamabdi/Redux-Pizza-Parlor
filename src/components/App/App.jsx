import React from 'react';
import axios from 'axios';
import './App.css';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectPizza from '../Select Pizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
    
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <Route exact path="/information" >
          <CustomerInfo />
        </Route>
      </Router>
    </div>
  );
}

export default App;
