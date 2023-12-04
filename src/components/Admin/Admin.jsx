import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function Admin() {
    const [orderList, setOrderList] = useState([]);

    // GET feedback
    const getOrderList = () => {
        axios.get('/api/order') 
            .then((response) => {
                setOrderList(response.data);
            }).catch((error) => {
                console.log('Error retrieving orders:', error);
                alert('Something went wrong!');
            });
    }

    useEffect(() => {
        getOrderList()
    }, []);

    return (
        <div>
            <br />
            <h1>Pending Orders</h1>
            <table id='admin-table' className='admin-table'>
                <tbody>
                    <tr id='row'>
                        <th id='admin-table'>Name</th>
                        <th id='admin-table'>Time</th>
                        <th id='admin-table'>Total</th>
                        <th id='admin-table'>Delete</th>
                    </tr >
                    {orderList.map((order, i) => {
                        return <tr key={i}>
                            <td>{order.customer_name}</td>
                            <td>{format(new Date(order.time), "h:mm a 'on' MM/d")}</td>
                            <td>{order.total}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default Admin;