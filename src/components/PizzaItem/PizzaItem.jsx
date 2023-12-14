import { Card, CardActions, CardMedia, CardContent, 
    Grid, Button, IconButton, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const PizzaItem = (props) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const addPizza = () => {
        const action = { type: 'ADD_PIZZA_ITEM', payload: {pizza: props.pizza, quantity: quantity}};
        dispatch(action);
    }

    const removePizza = () => {
        setQuantity(0);
        const action = { type: 'REMOVE_PIZZA_ITEM', payload: props.pizza}
        dispatch(action);
    }

    function increaseQuantity() {
        setQuantity(quantity+1);
    }

    function decreaseQuantity() {
        if (quantity > 0) {
            setQuantity(quantity-1);
        }
    }

    return (
        <Grid item m={3}>
            <Card sx={[ 
                {marginTop: '10px'},
                {height: '700px'},
                {maxWidth: '400px'},
                {display: 'flex'}, 
                {flexDirection: 'column'},
                {borderRadius: '20px'}, 
                {backgroundColor: 'white'},
                {boxShadow: '-2px 2px 10px 5px rgb(90, 90, 90)'},
                {'&:hover': {
                    backgroundColor: 'antiquewhite'
                }}
            ]}>
                <CardMedia sx={{
                    width: 'auto'
                }}>
                    <img src={props.pizza.image_path} />
                </CardMedia>
                <CardContent sx={{
                    padding: '0px'
                }}>
                    <h3>{props.pizza.name}</h3>
                    ${props.pizza.price}
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', padding: '0px' }}>
                    <Button variant='contained' onClick={addPizza} 
                        sx={[ 
                            {color: 'white'}, 
                            {backgroundColor: 'tomato'}, 
                            {'&:hover': {
                                backgroundColor: 'rgb(157, 157, 49)'
                            }} 
                        ]}>Add to cart</Button>
                    <IconButton onClick={decreaseQuantity}>
                        <RemoveIcon sx={{fontSize: '40px', color:'rgb(133, 133, 133)'}} />   
                    </IconButton>
                    {quantity}
                    <IconButton onClick={increaseQuantity}>
                        <AddIcon sx={{fontSize: '40px', color:'rgb(133, 133, 133)'}} />   
                    </IconButton>
                </CardActions>
                <CardContent>
                    <p style={{textAlign: 'left'}}>{props.pizza.description}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PizzaItem;