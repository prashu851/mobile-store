import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button'
import {ASCENDING,DESCENDING,RELEVANCE} from '../constants/SortTypes'

class Sort extends React.Component {
    handleSort(selectedSort){
        this.props.onSortChange(selectedSort)
    }
    render(){
        return(
            <div className="sorting-btns">
                    <ButtonGroup variant="contained" color="primary">
                        <Button className={this.props.selected===ASCENDING ?"Selected":''} onClick={()=>this.handleSort("Ascending")}>low to high</Button>
                        <Button className={this.props.selected===DESCENDING ?"Selected":''} onClick={()=>this.handleSort("Descending")}>high to low</Button>
                        <Button className={this.props.selected===RELEVANCE ?"Selected":''} onClick={()=>this.handleSort("Relevance")}>relevance</Button>
                    </ButtonGroup>
               </div>
        )
    }
}

export default Sort