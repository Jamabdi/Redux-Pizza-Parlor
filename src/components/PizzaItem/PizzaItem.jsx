import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


const PizzaItem = (props) => {
    const dispatch = useDispatch();

    const addPizza = () => {
        setQuantity(1);
        const action = { type: 'ADD_PIZZA_ITEM', payload: props.pizza};
        dispatch(action);
    }

    const removePizza = () => {
        setQuantity(0);
        const action = { type: 'REMOVE_PIZZA_ITEM', payload: props.pizza}
        dispatch(action);
    }

    return (
        <p>
            {props.pizza.name}
            <br />
            {props.pizza.price}
            <br />
            {props.pizza.description}
            <br />
            <img src={props.pizza.image_path} />

        </p>
    )
}

export default PizzaItem;