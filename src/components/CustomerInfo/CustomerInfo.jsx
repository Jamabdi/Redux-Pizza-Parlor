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
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function CustomerInfo() {
    // retrieves reducers from store
    const total = useSelector(store => store.total);
    const pizzas = useSelector(store => store.cart);
    const customer = useSelector(store => store.customer);
    const dispatch = useDispatch();

    // settings for Snackbar de/activation
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    // routes to next page on submission of form
    const history = useHistory();
    const nextPage = () => {
        history.push('/checkout');
    }
    // routes to previous page
    const goBack = () => {
        history.push('/select');
    }

    // declares variables for customer information
    const [name, setName] = useState(customer.customer_name);
    const [address, setAddress] = useState(customer.street_address);
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
        if (method !== undefined) {
            const action = { type: 'SUBMIT_CUSTOMER_INFO', payload: newCustomer }
            dispatch(action);
            nextPage();
        }
        else {
            setOpen(true);
        }
    }

    // stops toggle from reselecting previous value or undefined
    const chooseMethod = (newMethod) => {
        console.log(method, newMethod);
        if ((newMethod !== method) && (newMethod !== 'undefined')) {
            setMethod(newMethod);
        }
    }

    // styling for toggle button
    const ToggleButton = styled(MuiToggleButton)({
        "&.Mui-selected, &.Mui-selected:hover": {
          color: 'black',
          backgroundColor: 'goldenrod'
        }
      });

    return (
        <form>
            <br /><br /><br /> <br /><br />
            <h1 style={{color: 'rgb(30, 30, 30)'}}>Enter contact information</h1>
            <ToggleButtonGroup
                sx={{backgroundColor: 'white', width: '195px'}}
                orientation='horizontal'
                size='medium'
                value={method}
                exclusive
                onChange={(e) => chooseMethod(String(e.target.value))}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{backgroundColor: 'white'}}
            >
            </TextField>
            <br />
            <TextField 
                label='Address'
                required
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{backgroundColor: 'white'}}
            >
            </TextField>
            < br />
            <TextField 
                label='City'
                required
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{backgroundColor: 'white'}}
            >
            </TextField>
            <br />
            <TextField 
                label='Zip'
                required
                type='text'
                value={zip}
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
                    {'&:hover': {backgroundColor: 'rgb(157, 157, 49)'}}
                ]}
                onClick={handleSubmit}
                variant='contained'>
                    Next
            </Button>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    You must choose either pick-up or delivery to continue.
                </Alert>
            </Snackbar>
        </form>
    )
}

export default CustomerInfo;