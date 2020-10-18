import React from 'react'
import './NavBar.css'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartIcon= ({show}) =>  {
    if (show) {
        return(
            <div className="cart">
                <a href="/cart">
                    <IconButton>
                        <ShoppingCartIcon />
                    </IconButton>
                </a>
            </div>
        )
    }
    return <></>
}

export default CartIcon;