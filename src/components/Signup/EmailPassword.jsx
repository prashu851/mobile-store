import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

class EmailPassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emailError:false,
            passwordError:false,
        }
          this.handleChange=this.handleChange.bind(this)
          this.isValidEmail=this.isValidEmail.bind(this)
          this.isValidPassword=this.isValidPassword.bind(this)

}
handleChange = event =>{
    this.props.onChange(event.target.name, event.target.value)
}
isValidEmail(){
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const validEmail = emailPattern.test( this.props.email);
  this.setState({
      emailError:!validEmail
  })
  this.props.setError(!validEmail || this.state.passwordError)
}
isValidPassword(){
  const passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  const validPassword = passwordPattern.test( this.props.password);
  this.setState({
      passwordError:!validPassword
  })
  this.props.setError(this.state.emailError || !validPassword)
}
render(){
    return(
        <>
            <Grid item xs={6}>
                    <div className="user_input">
                        <TextField 
                        className="input" 
                        name="email" 
                        label="Email" 
                        variant="outlined"  
                        onChange={this.handleChange} 
                        onBlur={this.isValidEmail} 
                        required 
                        />
                        {this.state.emailError?<small>Please enter valid Email</small>:''}
                    </div>
                    </Grid>
                    <Grid item xs={6}>
                    <div className="user_input">
                        <TextField 
                        className="input" 
                        type="password" 
                        name="password" 
                        label="Password" 
                        variant="outlined"   
                        onChange={this.handleChange} 
                        onBlur={this.isValidPassword} 
                        required 
                        />
                        {this.state.passwordError?<small>Please enter valid Password</small>:''}
                    </div>
                </Grid>
            </>
        )
    }
}
export default EmailPassword