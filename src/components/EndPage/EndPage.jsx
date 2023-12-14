import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

function EndPage() {
    const history = useHistory();
    const reset = () => {
        history.push('/');
    }

    return (
        <div>
            <br />
            <h1>Thank you for your order!</h1>
            <h3>Our team will have your order ready in a jiffy</h3>
            <br /><br /><br />
            <Button type='button' 
                variant='contained' 
                sx={[ 
                    {color: 'black'}, 
                    {backgroundColor: 'goldenrod'}, 
                    {'&:hover': {
                        backgroundColor: 'rgb(157, 157, 49)'
                    }} 
                ]}
                onClick={reset}>
                    Home
            </Button>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}

export default EndPage;