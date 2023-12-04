import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import PizzaItem from '../PizzaItem/PizzaItem';

const SelectPizza = () => {
    const [pizzaList, setPizzaList] = useState([]);
    const dispatch = useDispatch();

    const getPizzaList = () => {
        axios.get('/api/pizza').then((response) => {
            const action = { type: 'SET_PIZZA_LIST', payload: response.data };
            dispatch(action);
            console.log(response.data);
            setPizzaList(response.data);
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
        <br /><br /><br />
        <h3>Order from any of our Pizza's below!</h3>
        <ul>
            {pizzaList.map((pizza) => {
                return <PizzaItem key={pizza.id} pizza={pizza} />
            })} 
        </ul>
       </>
    )
}

export default SelectPizza;