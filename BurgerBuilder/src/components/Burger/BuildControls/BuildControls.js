import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const IngredientsList = [
    {label : 'Salad', type : 'salad'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat', type : 'meat'}
]

const buildControls = ( props ) => {

    let buildControlList = [];
    buildControlList=IngredientsList.map((ingredient) => {
        return <BuildControl key={ingredient.label} 
        label={ingredient.label} 
        removeIngredients={() => {props.removeIngredients(ingredient.type)}} 
        addIngredients={() => {props.addIngredients(ingredient.type)}} 
        disabled={props.disabled[ingredient.type]}/>
    })

    return(
        <div className={classes.BuildControls}>
            <p>Burger price : USD <strong>{props.price.toFixed(2)}</strong></p>
            {buildControlList}
            <button className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
        </div>
    );

}

export default buildControls;