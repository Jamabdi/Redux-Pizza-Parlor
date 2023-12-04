import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import PizzaItem from '../PizzaItem/PizzaItem';
import { Grid, Button } from '@mui/material';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SelectPizza = () => {
    const [pizzaList, setPizzaList] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const nextPage = (event) => {
        history.push('/information');
    }
    const goBack = (event) => {
        history.push('/');
    }

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
        <h3>
            <Button 
                sx={[ {backgroundColor: 'white', color: 'black', marginRight: '25px'},
                    {'&:hover': {backgroundColor: 'tomato'}}
                ]}
                onClick={goBack}
                variant='contained' 
                type='button'>
                    Back
            </Button>
            Order any of our pizzas below!
            <Button 
                sx={[ {backgroundColor: 'white', color: 'black', marginLeft: '25px'},
                {'&:hover': {backgroundColor: 'tomato'}}
                ]}
                onClick={nextPage}
                variant='contained' 
                type='button'>
                    Next
            </Button>
        </h3>
        <Grid container spacing={1}>
            {pizzaList.map((pizza) => {
                return <PizzaItem key={pizza.id} pizza={pizza} />
            })} 
        </Grid>
       </>
    )
}

export default SelectPizza;