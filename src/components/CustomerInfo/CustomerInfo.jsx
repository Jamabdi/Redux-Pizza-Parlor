import { useState } from 'react';
import TextField from '@mui/material/TextField';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'; 

function CustomerInfo() {
    const total = useSelector(store => store.total);
    const pizzas = useSelector(store => store.pizzas);

    const history = useHistory();
    const nextPage = (event) => {
        history.push('/checkout');
    }

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [method, setMethod] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/order`', {
            customer_name: name,
            street_address: address,
            city: city,
            zip: zip,
            type: method,
            total: total,
            pizzas: pizzas
        })
        .then((response) => {
            nextPage();
            clearFields();
        })
    }

    const clearFields = () => {
        setName('');
        setAddress('');
        setCity('');
        setZip('');
        setMethod('');
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
            <TextField 
                label='Address'
                required
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            >
            </TextField>
            <TextField 
                label='City'
                required
                type='text'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
            </TextField>
            <TextField 
                label='Zip'
                required
                type='text'
                value={zip}
                onChange={(e) => setZip(e.target.value)}
            >
            </TextField>
            <ToggleButtonGroup
                orientation='horizontal'
                size='medium'
                value={method}
                exclusive='true'
                onChange={setMethod}
            >
                <ToggleButton value="Pick-up" key="Pick-up">
                    <TakeoutDiningIcon />
                </ToggleButton>,
                <ToggleButton value="Delivery" key="Delivery">
                    <DeliveryDiningIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </form>
    )
}

export default CustomerInfo;