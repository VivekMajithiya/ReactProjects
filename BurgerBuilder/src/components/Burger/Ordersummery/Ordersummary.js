import React from 'react';
import classes from './Ordersummary.module.css'

const ordersummary = ( props ) => {
    
    const ingredientSummaryList = Object.keys(props.ingredients)
        .map(igkey => {
            return (<li key={igkey}><span style={{textTransform: 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]} </li>)
        })
    ;

    return(
    <div className={classes.Ordersummary}>
        <h3>ORDER SUMMERY</h3>
        <p>You selected best burger in the world with below ingredients!!</p>
        <ul>
            {ingredientSummaryList}
        </ul>
        <p>Do you wish to continue?</p>
    </div>
    );
}

export default ordersummary;