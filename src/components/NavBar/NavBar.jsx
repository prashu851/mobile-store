import React from 'react'
import './NavBar.css'
import CartIcon from './CartIcon';
import LogoutButton from './LogoutButton';
import {onSignIn} from '../../firebaseClient'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignedInUser: false
        }
        this.onSuccessFulSignIn = this.onSuccessFulSignIn.bind(this)
    }

    onSuccessFulSignIn() {
        this.setState({
            isSignedInUser: true
        })
    }

    componentDidMount() {
        onSignIn(this.onSuccessFulSignIn)
    }
    
    render() {
        return(
            <div className="nav-bar">
                <div className="app-name">
                    <a href={this.state.isSignedInUser? "/mobiles" : "/"}>
                        <h3>Mobile Store</h3>
                    </a>
                </div>
                <CartIcon show={this.state.isSignedInUser}/>
                <LogoutButton show={this.state.isSignedInUser}/>
            </div>
        )
    }
}

export default NavBar;