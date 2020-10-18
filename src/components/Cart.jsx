import React from 'react'
import './Cart.css'
import Divider from '@material-ui/core/Divider';
import { fetchMobilesFromCart, removeFromCart } from '../firebaseClient';
import fire from '../config/fire';

class Cart extends React.Component {
    constructor(){
        super();
        this.state={
            addedMobiles:[]
        }
        this.userCartData = this.userCartData.bind(this)
    }
    userCartData(mobiles){
        this.setState({
            addedMobiles:mobiles
        });
    }

    componentDidMount(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                fetchMobilesFromCart(this.userCartData)
            }
        });
    }

    render(){
        const { addedMobiles } = this.state;
        return(
            <div className="cart-container">
                <h2>My Cart</h2>
                <Divider />
                {addedMobiles.map((mobile)=>
                <div key={mobile.id}>
                    <div className="cart-items">
                        <div className="mobile-pic">
                            <img src={require('../realme.jpg')} alt="mobile-pic" />
                        </div>
                        <div className="mobile-details">
                            <h3>{mobile.name}  ({mobile.colour},{mobile.internalStorage})</h3>
                            <h4>{mobile.ramInGb}GB RAM</h4>
                            <h4>Rs.{mobile.price}</h4>
                            <button className="remove-btn" 
                                    onClick={() => removeFromCart(mobile.id)}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <Divider />
                </div>
                )}
            </div>
        )
    }
}

export default Cart;