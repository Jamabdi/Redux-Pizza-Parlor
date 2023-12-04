import React from "react";
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Paper, Button, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Checkout() {
    const cart = useSelector(store => store.cart);
    const customerInfo = useSelector(store => store.customer);
    const customer = useSelector(store => store.customer);
    const dispatch = useDispatch();

    const history = useHistory();
    const nextPage = (event) => {
        history.push('/');
    }
    const goBack = (event) => {
        history.push('/information');
    }

    const submitOrder = (event) => {
        event.preventDefault();
        axios.post('/api/order', {
            customer_name: customer.customer_name,
            street_address: customer.street_address,
            city: customer.city,
            zip: customer.zip,
            type: customer.type,
            total: customer.total,
            pizzas: customer.pizzas
            }).then((response) => {
                dispatch({ type: 'CLEAR' });
                nextPage();
            }).catch((error) => {
                console.log('Error submitting order:', error);
                alert('Something went wrong!');
            });
    }

    return(
        <div style={{ textAlign: 'center' }}>
            <br /><br /><br />
            <Button 
                sx={[ 
                    {backgroundColor: 'white', color: 'black', marginRight: '25px'},
                    {'&:hover': {backgroundColor: 'tomato'}}
                ]}
                onClick={goBack}
                variant='contained' 
                type='button'>
                    Back
            </Button>
            <Button 
                sx={[ 
                    {backgroundColor: 'white', color: 'black', marginLeft: '25px'},
                    {'&:hover': {backgroundColor: 'tomato'}}
                ]}
                onClick={submitOrder}
                variant='contained' 
                type='submit'>
                    Submit
            </Button>
            <h2>Review Cart</h2>
            <Box key={customerInfo.id}
                sx={{ backgroundColor: 'white', border: '1px solid black', 
                borderRadius: '10px', width: '200px', margin: 'auto' }}>
                <p>
                    {customerInfo.customer_name}
                    <br />
                    {customerInfo.street_address}
                    <br />
                    {customerInfo.city}, MN {customerInfo.zip}
                    <br /><br />
                    {customerInfo.type}
                </p>
            </Box>
            <br /><br />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="column-header" align="left">Pizza</TableCell>
                            <TableCell className="column-header" align="right">Price</TableCell>
                            <TableCell className="column-header" align="right">Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customer.pizzas.map((order, index) => (
                           <TableRow key={index}>
                            <TableCell scope="row" align="left">
                                {order.pizza.name}
                            </TableCell>
                            <TableCell align="right">
                                {order.pizza.price}
                            </TableCell>
                            <TableCell align="right">
                                {order.quantity}
                            </TableCell>
                           </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        </div>
    )
}

export default Checkout;