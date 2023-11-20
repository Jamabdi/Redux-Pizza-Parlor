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
    const total = 20;
    const pizzas = 'one cheese pizza';
    const dispatch = useDispatch();

    const history = useHistory();
    const nextPage = (event) => {
        history.push('/checkout');
    }

    const clearFields = () => {
        setName('');
        setAddress('');
        setCity('');
        setZip('');
        setMethod('');
    }

    const chooseMethod = (event, newMethod) => {
        if (newMethod !== null) {
            setMethod(newMethod);
        }
    }

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [method, setMethod] = useState('');
    const customer = {
    customer_name: name,
    street_address: address,
    city: city,
    zip: zip,
    type: method,
    total: total,
    pizzas: pizzas}

    const handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'SUBMIT_CUSTOMER_INFO', payload: customer }
        dispatch(action);
        nextPage();
        clearFields();
    }

    return (
        <form onSubmit={handleSubmit}>
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

            <ToggleButtonGroup
                orientation='horizontal'
                size='medium'
                value={method}
                exclusive='true'
                onChange={chooseMethod}
            >
                <ToggleButton value="Pick-up" key="Pick-up">
                    <Tooltip title="Pick-up">
                        <TakeoutDiningIcon label='pick-up' />
                    </Tooltip>
                </ToggleButton>,
                <ToggleButton value="Delivery" key="Delivery">
                    <Tooltip title="Delivery">
                        <DeliveryDiningIcon label='delivery' />
                    </Tooltip>
                </ToggleButton> 
            </ToggleButtonGroup>
            <Button type='submit'>Next</Button>
        </form>
    )
}

export default CustomerInfo;