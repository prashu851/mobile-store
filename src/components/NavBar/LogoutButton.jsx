import React from 'react'
import './NavBar.css'
import CartIcon from './CartIcon';
import { signOutUser } from '../../firebaseClient';

const LogoutButton = ({show}) => {
    if (show) {
        return(
            <button className="login-btn" onClick={signOutUser}>
                Logout
            </button>
        )
    }
    return <></>
}

export default LogoutButton;