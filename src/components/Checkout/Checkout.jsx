import React from "react";
import { useSelector } from 'react-redux';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Table } from "@mui/material";


function Checkout() {

    const cart = useSelector(store => store.cart);
    const customerInfo = useSelector(store => store.customerInfo);

    return(
        <>
            <h2> Checkout </h2>
            <ul>
                {customerInfo.map((customer, index) =>
                <li key={index}>
                    {customer.name}
                    {customer.streetAdress}
                    {customer.city}
                    {customer.zip}
                    {customer.type}
                </li>
                )}
            </ul>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell class="column-header" align="left">Pizza</TableCell>
                            <TableCell class="column-header" align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((item, index) => (
                           <TableRow key={index}>
                            <TableCell component={th} scope="row" align="left">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                           </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        </>
    )
}

export default Checkout;