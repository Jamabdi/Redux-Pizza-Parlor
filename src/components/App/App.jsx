import React from 'react';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SelectPizza from '../Select Pizza/SelectPizza';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Admin from '../Admin/Admin';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


function App() {
  const total = useSelector(store => store.total);

  const dispatch = useDispatch();

  // const [pizzaList, setPizzaList] = useState([]);

 const getPizzaList = () => {
    axios.get('/api/pizza').then((response) => {
      const action = { type: 'SET_PIZZA_LIST', payload: response.data };
      dispatch(action);
    }).catch((error) => {
      console.error('Error getting pizza list', error);
      alert('Something went wrong!');
    })
  }

  useEffect(() => {
    getPizzaList();
  }, []);

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
