import { useState, useEffect } from 'react';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem';
import { useSelector, useDispatch } from 'react-redux';


const SelectPizza = () => {

const [pizzaList, setPizzaList] = useState([]);

const getPizzaList = () => {
    axios.get('/api/pizza').then((response) => {
        console.log(response.data);
        setPizzaList(response.data)
    }).catch((error) => {
        console.log('GET /pizza error', error);
        alert('Something went wrong fetching pizzas');
    })
}

useEffect(() => {
    getPizzaList();
}, [])


    return (
        <>
        <h3>Order from any of our Pizza's below!</h3>
       <PizzaItem/>
       </>
    )
}

export default SelectPizza;