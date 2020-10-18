import React from 'react'
import './Signup.css'
import 'react-phone-input-2/lib/bootstrap.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import FullName from './FullName';
import EmailPassword from './EmailPassword';
import Address from './Address';
import fire from '../../config/fire'
import {addUser} from '../../firebaseClient'
class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: {
                firstName: '',
                lastName: '',
                error: false
            },
            credentials: {
                email: '',
                password: '',
                error: false
            },
            address: {
                country: '',
                region:'',
                address:'',
                pinCode:'',
                phone:'',
                error: false
            }
        }
        
        this.handleFullnameChange=this.handleFullnameChange.bind(this);
        this.handleFullnameError = this.handleFullnameError.bind(this);
        this.handleCredentialsChange=this.handleCredentialsChange.bind(this);
        this.handleCredentialsError = this.handleCredentialsError.bind(this);
        this.handleAddressChange=this.handleAddressChange.bind(this);
        this.handleAddressError = this.handleAddressError.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleFullnameChange = (key, value) => {
        const newState = {...this.state.fullName, [key]:value}
        this.setState({
            fullName: newState
        })
    }
    handleFullnameError = (errorValue) => {
        const newState = {...this.state.fullName, error:errorValue}
        this.setState({
            fullName: newState
        })
    }
    handleCredentialsChange = (key, value) => {
        const newState = {...this.state.credentials, [key]:value}
        this.setState({
            credentials: newState
        })
    }
    handleCredentialsError = (errorValue) => {
        const newState = {...this.state.credentials, error:errorValue}
        this.setState({
            credentials: newState
        })
    }
    handleAddressChange = (key, value) => {
        const newState = {...this.state.address, [key]:value}
        this.setState({
            address: newState
        })
    }
    handleAddressError = (errorValue) => {
        const newState = {...this.state.address, error:errorValue}
        this.setState({
            address: newState
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const {firstName, lastName} = this.state.fullName;
        const {email,password} = this.state.credentials;
        const profileInfo = {
            fullName: firstName + ' ' + lastName,
            email:email,
            password:password
        }
        

        addUser(profileInfo);
    
    }

    render(){
        return(
            <>
                
                <div className="signup-container">
                    
                <form onSubmit = {this.handleSubmit} className="signup-form">
                <h1 className="heading">Sign Up</h1>
                <Grid container>
                    <FullName 
                    onChange={this.handleFullnameChange}
                    setError={this.handleFullnameError}
                    firstName={this.state.fullName.firstName}
                    lastName={this.state.fullName.lastName}
                    />
                    <EmailPassword 
                    onChange={this.handleCredentialsChange}
                    setError={this.handleCredentialsError}
                    email={this.state.credentials.email}
                    password={this.state.credentials.password}
                    />
                    <Address 
                    onChange={this.handleAddressChange}
                    setError={this.handleAddressError}
                    country= {this.state.address.country}
                    region={this.state.address.region}
                    address={this.state.address.address}
                    pinCode={this.state.address.pinCode}
                    phone={this.state.address.phone}
                    />
                    <Grid item xs={12}>
                    <div className="submit_input">
                        <Button className="submit" variant="contained" color="primary" type="submit">Sign Up</Button>
                    </div>
                    
                    </Grid>
                    </Grid>
                </form>
            
            </div>
            </>
        )
    }
}

export default Signup;