import React from 'react'
import './Mobiles.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Filter from './Filter'
import cloneDeep from 'lodash/cloneDeep'
import Sort from './Sort'
import {RELEVANCE} from '../constants/SortTypes'
import mapValues from 'lodash/mapValues'
import { fetchMobiles } from '../firebaseClient';
import { addToCart } from '../firebaseClient';

class Mobiles extends React.Component {
    constructor(){
        super();
        this.state={
            selectedMobiles:[],
            brands: {},
            selectedBrands: {},
            selected:RELEVANCE
        }
        this.mobilesData = this.mobilesData.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
        this.handleRelevance=this.handleRelevance.bind(this)
        this.onSortChange=this.onSortChange.bind(this)
        this.handleSort=this.handleSort.bind(this)
    }

    mobilesData(body){
        const reduceToObj = (accumulator, mobile) => {
            accumulator[mobile.brand]=false;
            return accumulator;
        }
        const uniqueBrands = body.reduce(reduceToObj, {});
        this.setState({
            selectedMobiles : cloneDeep(body),
            defaultData : cloneDeep(body),
            brands : uniqueBrands,
        });
    }
    handleFilter(e, brand){
        const oldBrands = this.state.brands;
        const newBrands = {...oldBrands, [brand]:e.target.checked};
        const allMobiles = [...this.state.defaultData];
        const isAnyBrandSelected = Object.values(newBrands).some(isSelected=> isSelected);
        const selectedMobiles = isAnyBrandSelected ? allMobiles.filter(mobile => newBrands[mobile.brand]) : allMobiles;
        const sortedMobiles = selectedMobiles.sort((a,b)=>{
            if(this.state.selected==="Ascending"){
                return b.price < a.price ?  1 
                     : b.price > a.price ? -1 
                     : 0;
            }
            else if(this.state.selected==="Descending"){
                return b.price > a.price ?  1 
                     : b.price < a.price ? -1 
                     : 0;
            }
            
        })
        this.setState({
            brands: newBrands,
            selectedMobiles: sortedMobiles       
        });
        
    }
    sortByAscending(a,b){ 
        return b.price < a.price ?  1 
             : b.price > a.price ? -1 
             : 0;
    }
    sortByDescending(a,b){ 
        return b.price > a.price ?  1 
             : b.price < a.price ? -1 
             : 0;
    }
    handleRelevance(){
       this.setState({
            selectedMobiles: [...this.state.defaultData],
            brands:mapValues(this.state.brands,()=>false)
        })
    }
    handleSort(sortByFunc){
        const sortedMobiles = this.state.selectedMobiles.sort(sortByFunc)                   
        this.setState({
            selectedMobiles:sortedMobiles,   
        })
    }
    onSortChange(selectedSort){
        if(selectedSort === "Ascending"){
            this.handleSort(this.sortByAscending)
        }
        else if(selectedSort === "Descending"){
            this.handleSort(this.sortByDescending)
        }
        else{
            this.handleRelevance()  
        }
        this.setState({
            selected:selectedSort
        })
    }
    componentDidMount(){
        fetchMobiles()
        .then(this.mobilesData)
        .catch(() => {});
    }
    render(){
        return  (
                <>
                <Filter types={this.state.brands} handleFilter={this.handleFilter} selectedBrands={this.selectedBrands} />
                <Sort selected={this.state.selected} onSortChange={this.onSortChange} />
                <div className="container">
                <Grid container spacing={3}>
                { this.state.selectedMobiles.map((mobile)=>
                <Grid item xs={3} key={mobile.id}>
                    <div className="box">
                        <div className="mobile-image">
                            <img src={require('../realme.jpg')} alt="mobile-pic" /> 
                        </div>
                        <div className="mobile-name">
                            <h3>{mobile.name}</h3>
                        </div>
                        <div className="mobile-price">
                            <h4>Rs.{mobile.price}</h4>
                        </div>
                        <div className="cart-btn">
                            <Button variant="contained" color="secondary" onClick={() => addToCart(mobile)}>
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </Grid>  
                )}
                    </Grid>
                </div>
               
             </>
        )
    }
}

export default Mobiles
