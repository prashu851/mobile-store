import React from 'react'
import PhoneInput from 'react-phone-input-2'
import TextField from '@material-ui/core/TextField'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Grid from '@material-ui/core/Grid';

class Address extends React.Component {
    constructor(props){
        super(props);
        this.state={
            countryError:false,
            regionError:false,
            addressError:false,
            pinError:false
        }
          
          this.isValidPin=this.isValidPin.bind(this)
          this.selectCountry=this.selectCountry.bind(this)
          this.selectRegion=this.selectRegion.bind(this)
          this.PhoneInput=this.PhoneInput.bind(this)
    }
    handleChange = event =>{
        this.props.onChange(event.target.name, event.target.value)
  }
isValidPin(){
    const pinPattern = new RegExp("^[1-9][0-9]{5}$")
    const validPin = pinPattern.test(this.props.pinCode)
    this.setState({pinError:!validPin})
    this.props.setError(this.state.addressError || !validPin)

}
PhoneInput(number){
    this.props.onChange('phone', number);
}
selectCountry (val) {
    this.props.onChange('country',val)
}
 
  selectRegion (val) {
    this.props.onChange('region',val)
  }

    render(){
        return(
            <>
            <Grid item xs={6}>
                    <div className="user_input">
                    <CountryDropdown 
                    className="select-country"
                    name="country"
                    value={this.props.country}
                    onChange={(val) => this.selectCountry(val)} 
                    required
                    />
                    </div>
                    </Grid>
                    <Grid item xs={6}>
                    <div className="user_input">
                    <RegionDropdown
                    className="select-region"
                    name="region"
                    country={this.props.country}
                    value={this.props.region}
                    blankOptionLabel="Select Region"
                    onChange={(val) => this.selectRegion(val)} 
                    required
                    />

                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className="user_input">
                    <TextField
                    className="address"
                    name="address"
                    label="Address"
                    multiline
                    rows={2}
                    rowsMax={2}
                    variant="outlined"
                    onChange={this.handleChange}
                    required 
                    />
            
                    </div>
                    </Grid>
                    <Grid item xs={6}>
                    <div className="user_input">
                        <TextField 
                        className="input" 
                        name="pinCode" 
                        label="PIN code" 
                        variant="outlined"  
                        onChange={this.handleChange} 
                        onBlur={this.isValidPin} 
                        required 
                        />
                        {this.state.pinError?<small>Please enter valid PIN code</small>:''}
                    </div>
                    </Grid>
                    <Grid item xs={6}>
                    <div className="user_input">
                        <PhoneInput 
                        inputClass="phone_input" 
                        buttonClass="dropdown" 
                        country={'in'}
                        value={this.state.phone}
                        onChange={this.PhoneInput}
                        inputProps={{
                            name: 'phone',
                            required: true
                        }}
                        />
                    </div>
                    </Grid>
                    </>
        )
    }
}
export default Address
