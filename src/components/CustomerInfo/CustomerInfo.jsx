import { useState } from 'react';
import TextField from '@mui/material/TextField';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from "@mui/material/styles";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 

function CustomerInfo() {
    const total = useSelector(store => store.total);
    const pizzas = useSelector(store => store.cart);
    const customer = useSelector(store => store.customer);
    const dispatch = useDispatch();

    // routes to next page on submission of form
    const history = useHistory();
    const nextPage = (event) => {
        history.push('/checkout');
    }
    const goBack = (event) => {
        history.push('/select');
    }

    // forces the toggle button to highlight one option
    const chooseMethod = (event, newMethod) => {
        if (newMethod !== null) {
            setMethod(newMethod);
        }
    }

    // declares variables for customer information
    const [name, setName] = useState(customer.name);
    const [address, setAddress] = useState(customer.address);
    const [city, setCity] = useState(customer.city);
    const [zip, setZip] = useState(customer.zip);
    const [method, setMethod] = useState(customer.method);
    // compiles customer information into one object
    const newCustomer = {
    customer_name: name,
    street_address: address,
    city: city,
    zip: zip,
    type: method,
    total: total,
    pizzas: pizzas}

    // executes on submission of form, sends customer object to reducer
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newCustomer);
        const action = { type: 'SUBMIT_CUSTOMER_INFO', payload: newCustomer }
        dispatch(action);
        nextPage();
    }

    const ToggleButton = styled(MuiToggleButton)({
        "&.Mui-selected, &.Mui-selected:hover": {
          color: 'black',
          backgroundColor: 'tomato'
        }
      });

    return (
        <form onSubmit={handleSubmit}>
            <br /><br /><br /> <br /><br />
            <h1 style={{color: 'rgb(30, 30, 30)'}}>Enter contact information</h1>
            <ToggleButtonGroup
                required
                sx={{backgroundColor: 'white', width: '195px'}}
                orientation='horizontal'
                size='medium'
                value={method}
                exclusive
                onChange={chooseMethod}
            >
                <ToggleButton 
                    sx={{backgroundColor: 'white', width: '98px'}}
                    value="Pick-up" 
                    key="pickUp" 
                    disableRipple 
                > 
                    <Tooltip title="Pick-up" placement='top'>
                        <TakeoutDiningIcon label='pick-up' />
                    </Tooltip>
                </ToggleButton>,
                <ToggleButton 
                    sx={{backgroundColor: 'white', width: '99px'}}
                    value="Delivery" 
                    key="delivery" 
                    disableRipple 
                > 
                    <Tooltip title="Delivery" placement='top'>
                        <DeliveryDiningIcon label='delivery' />
                    </Tooltip>
                </ToggleButton> 
            </ToggleButtonGroup>
            <br /><br />
            <TextField 
                label='Name'
                required
                type='text'
                value={customer.customer_name}
                onChange={(e) => setName(e.target.value)}
                sx={{backgroundColor: 'white'}}
            >
            </TextField>
            <br />
            <TextField 
                label='Address'
                required
                type='text'
                value={customer.street_address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{backgroundColor: 'white'}}
            >
            </TextField>
            < br />
            <TextField 
                label='City'
                required
                type='text'
                value={customer.city}
                onChange={(e) => setCity(e.target.value)}
                sx={{backgroundColor: 'white'}}
            >
            </TextField>
            <br />
            <TextField 
                label='Zip'
                required
                type='text'
                value={customer.zip}
                onChange={(e) => setZip(e.target.value)}
                sx={{backgroundColor: 'white'}}
            >
            </TextField>
            < br/>< br/>< br/>
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
                variant='contained' 
                type='submit'>
                    Next
            </Button>
        </form>
    )
}

export default CustomerInfo;