import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
class FullName extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            firstNameError:false,
            lastNameError:false
        }

        this.isValidFirstName=this.isValidFirstName.bind(this)
        this.isValidLastName=this.isValidLastName.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange = event => {
        this.props.onChange(event.target.name, event.target.value);
    }
  isValidFirstName(){
          const namePattern = /^[a-z ,.'-]+$/i;
          const validName = namePattern.test(this.props.firstName)
          this.setState({firstNameError:!validName})
          this.props.setError(!validName || this.state.lastNameError)
      }
      isValidLastName(){
          const namePattern = /^[a-z ,.'-]+$/i;
          const validName = namePattern.test(this.props.lastName)
          this.setState({lastNameError:!validName})
          this.props.setError(this.state.firstNameError || !validName)
      }
         
    render(){
        return(
            <Grid container>
            <Grid item xs={6}>
                    
            <div className="user_input">
                <TextField 
                className="input" 
                name="firstName" 
                label="First Name" 
                variant="outlined" 
                onChange={this.handleChange} 
                onBlur={this.isValidFirstName} 
                required 
                />
                {this.state.firstNameError?<small className="error-text">Please enter valid First Name</small>:''} 
            </div>
            </Grid>
            <Grid item xs={6}>
            
            <div className="user_input">
                <TextField 
                className="input" 
                name="lastName" 
                label="Last Name" 
                variant="outlined" 
                onChange={this.handleChange} 
                onBlur={this.isValidLastName} 
                required 
                />
                {this.state.lastNameError?<small className="error-text">Please enter valid Last Name</small>:''} 
            </div>
            </Grid>
            </Grid>
        )
    }
}

export default FullName