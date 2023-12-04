import { useState } from 'react';
import TextField from '@mui/material/TextField';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 

function CustomerInfo() {
    const total = useSelector(store => store.total);
    const pizzaList = useSelector(store => store.pizzaList);
    const dispatch = useDispatch();

    // routes to next page on submission of form
    const history = useHistory();
    const nextPage = (event) => {
        history.push('/checkout');
    }

    // forces the toggle button to highlight one option
    const chooseMethod = (event, newMethod) => {
        if (newMethod !== null) {
            setMethod(newMethod);
        }
    }

    // declares variables for customer information
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [method, setMethod] = useState('');
    // compiles customer information into one object
    const customer = {
    customer_name: name,
    street_address: address,
    city: city,
    zip: zip,
    type: method,
    total: total,
    pizzas: pizzaList}

    // executes on submission of form, sends customer object to reducer
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(customer);
        const action = { type: 'SUBMIT_CUSTOMER_INFO', payload: customer }
        dispatch(action);
        nextPage();
    }

    return (
        <form onSubmit={handleSubmit}>

                orientation='horizontal'
                size='medium'
                value={method}
                exclusive
                onChange={chooseMethod}
            >
                <ToggleButton 
                    value="pickUp" 
                    key="pickUp" 
                    disableRipple 

                    <Tooltip title="Pick-up" placement='top'>
                        <TakeoutDiningIcon label='pick-up' />
                    </Tooltip>
                </ToggleButton>,
                <ToggleButton 
                    value="delivery" 
                    key="delivery" 
                    disableRipple 

                    <Tooltip title="Delivery" placement='top'>
                        <DeliveryDiningIcon label='delivery' />
                    </Tooltip>
                </ToggleButton> 
            </ToggleButtonGroup>
            <br />
            <TextField 
                label='Name'
                required
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            >
            </TextField>
            <br />
            <TextField 
                label='Address'
                required
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            >
            </TextField>
            < br />
            <TextField 
                label='City'
                required
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
            </TextField>
            <br />
            <TextField 
                label='Zip'
                required
                type='text'
                value={zip}
                onChange={(e) => setZip(e.target.value)}
            >
            </TextField>
            < br/>

        </form>
    )
}

export default CustomerInfo;