import React from "react";
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Paper, Button, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';

function Checkout() {
    const customerInfo = useSelector(store => store.customer);
    const customer = useSelector(store => store.customer);
    const dispatch = useDispatch();

    const history = useHistory();
    const nextPage = () => {
        history.push('/confirmation');
    }
    const goBack = () => {
        history.push('/information');
    }

    const submitOrder = (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Ready to order?",
            text: "Send it to the kitchen!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(157, 157, 49)",
            cancelButtonColor: "tomato",
            confirmButtonText: "Submit order",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
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
                Swal.fire({
                    title: "Your order has been placed!",
                    text: "Our kitchen is preparing your order now.",
                    icon: "success",
                    confirmButtonColor: "goldenrod"
                });
            }
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
                    {'&:hover': {backgroundColor: 'rgb(157, 157, 49)'}}
                ]}
                onClick={submitOrder}
                variant='contained' 
                type='submit'>
                    Submit
            </Button>
            <h2>Review Order</h2>
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
            <br /> <br /> <br />
        </div>
    )
}

export default Checkout;