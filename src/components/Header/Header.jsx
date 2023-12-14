import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

function Header () {
    const total = useSelector(store => store.total);

    return(
        <header className='App-header'>
            <h1 className='App-title' style={{ textAlign: 'center', margin: '0px', color: 'goldenrod' }}>Prime Pizza</h1>
            <div style={{ 
                float: 'right', 
                marginRight: '20px', 
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <ShoppingCartIcon sx={{ marginRight: '6px' }}/>
                Total: ${total}
            </div>
        </header>
    )
}

export default Header;