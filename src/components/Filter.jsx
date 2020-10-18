import React from 'react'
import './Filter.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';

class Filter extends React.Component {

    onFilterChange() {
        this.props.handleFilter()
    }

    
    render(){
        console.log(this.props.types);
        return(
            <div className="filter-container">
                <h3>Brands</h3>
                <Divider />
                <div className="filter-box">
                
                    <div className="checkbox">
                        
                        {Object.keys(this.props.types).map((filterKey, index)=>
                        <FormGroup row >
                        <FormControlLabel
                        control={<Checkbox checked={this.props.types[filterKey]} key={index} color="primary" onChange={(event) => this.props.handleFilter(event, filterKey)} />}
                        label={filterKey}
                        />
                        </FormGroup>
                        )}
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Filter;