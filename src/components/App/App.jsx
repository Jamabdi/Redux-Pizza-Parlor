import React from 'react';
import axios from 'axios';
import './App.css';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectPizza from '../Select Pizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const total = useSelector(store => store.total);

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
          </header>
          <p>Pizza is great.</p>
          <div style={{ float: 'right', marginRight: '20px'}}>
            Total: ${total}
          </div>
        <Route exact path="/" >
          <img src='images/pizza_photo.png' />
          <nav>
            <ul>
              <Link to="/information">Information</Link>
            </ul>
          </nav>
        </Route>
        <Route exact path="/information" >
          <CustomerInfo />
        </Route>
      </Router>
    </div>
  );
}

export default App;
