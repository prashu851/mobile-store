import React from 'react'
import './Cart.css'
import Divider from '@material-ui/core/Divider';
class Cart extends React.Component {
    constructor(){
        super();
        this.state={
            addedMobiles:[]
        }
        console.log(this.addedMobiles)
        this.userCartData = this.userCartData.bind(this)
    }
    userCartData(body){
        this.setState({
            addedMobiles:body
        })
    }
    componentDidMount(){
        fetch("https://my-json-server.typicode.com/prashu851/demo/cart")
        .then((data) => data.json())
        .then(this.userCartData)
    
    }
    render(){
        return(
            <div className="cart-container">
                <h2>My Cart</h2>
                <Divider />
                {this.state.addedMobiles.map((mobile,index)=>
                <>
                    <div className="cart-items">
                        <div className="mobile-pic">
                            <img src={require('../realme.jpg')} alt="mobile-pic" />
                        </div>
                        <div className="mobile-details">
                            <h3>{mobile.name}  ({mobile.colour},{mobile.internalStorage})</h3>
                            <h4>{mobile.ramInGb}GB RAM</h4>
                            <h4>Rs.{mobile.price}</h4>
                            <button className="remove-btn">Remove</button>
                        </div>
                    </div>
                    <Divider />
                </>
                )}
               
            </div>
        )
    }
}

export default Cart;