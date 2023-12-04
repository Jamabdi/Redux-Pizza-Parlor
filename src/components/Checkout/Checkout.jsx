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
    const cart = useSelector(store => store.pizzaList);
    const customerInfo = useSelector(store => store.customer);

    return(
        <>
            <h2> Checkout </h2>
            <ul key={customerInfo.id}>
                <p>
                    {customerInfo.customer_name}
                </p>
                <p>
                    {customerInfo.street_address}
                </p>
                <p>
                    {customerInfo.city}
                </p>
                <p>
                    {customerInfo.zip}
                </p>
                <p>
                    {customerInfo.type}
                </p>
            </ul>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="column-header" align="left">Pizza</TableCell>
                            <TableCell className="column-header" align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((item, index) => (
                           <TableRow key={index}>
                            <TableCell component={th} scope="row" align="left">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">
                                {item.price}
                            </TableCell>
                           </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        </>
    )
}

export default Checkout;