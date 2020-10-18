import React from 'react'
import './NavBar.css'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class NavBar extends React.Component {
    render(){
        return(
            <div className="nav-bar">
                <div className="app-name">
                    <h3>Mobile Store</h3>
                </div>
                <div className="home-btn">
                    <a href="/">Home</a>
                </div>
                <div className="cart">
                    <a href="/cart">
                        <IconButton>
                            <ShoppingCartIcon />
                        </IconButton>
                    </a>
                </div>
                <div className="login-btn">
                <a href="/">Logout</a>
                </div>
            </div>
        )
    }
}

export default NavBar;