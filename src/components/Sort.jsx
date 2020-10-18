import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button'
import {ASCENDING,DESCENDING,RELEVANCE} from './SortTypes'

const Sort = ({ selectedSort, onSortChange }) => {    
    return(
        <div className="sorting-btns">
            <ButtonGroup variant="contained" color="primary">
                <Button
                    className={selectedSort.isAscending() ?"Selected":''}
                    onClick={()=>onSortChange(ASCENDING)}>
                    low to high
                </Button>
                <Button
                    className={selectedSort.isDescending() ?"Selected":''}
                    onClick={()=>onSortChange(DESCENDING)}>
                    high to low
                </Button>
                <Button
                    className={selectedSort.isRelevance() ?"Selected":''}
                    onClick={()=>onSortChange(RELEVANCE)}>
                    relevance
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Sort