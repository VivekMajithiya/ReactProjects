import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Ordersummary from '../../components/Burger/Ordersummery/Ordersummary'

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.5,
    bacon: 0.7,
    meat: 1.3
}

class BurgerBuilder extends Component {

        state = {
        ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
        },     
        totalprice:4,
        purchasable: false,  
        purchasing: false, 
    }

    updatePurchasableState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((ingKey) => {return ingredients[ingKey]})
            .reduce((sum,el) => {return sum+el},0)
        
        this.setState({purchasable: sum>0})
    }

    purchaseHandler = () =>{
        this.setState({purchasing:true});
    }

    addIngredientHandler = ( type ) => {
        const currentIngredients = {...this.state.ingredients};
        currentIngredients[type] +=1;
        const updatedIngredients = currentIngredients;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalprice;
        const updatedPrice = oldPrice + priceAddition;
                
        this.setState({ingredients:updatedIngredients, totalprice:updatedPrice}) 
        this.updatePurchasableState(updatedIngredients)

    }

    removeIngredientHandler = ( type ) => {
        const currentIngredients = {...this.state.ingredients};
        if (currentIngredients[type] <= 0){
            return;
        }
        currentIngredients[type] -=1;
        const updatedIngredients = currentIngredients;
        const priceReduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalprice;
        const updatedPrice = oldPrice - priceReduction;
                
        this.setState({ingredients:updatedIngredients, totalprice:updatedPrice}) 
        this.updatePurchasableState(updatedIngredients)
    }

    render(){
        //console.log(this.state.ingredients)
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing}>
                    <Ordersummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                removeIngredients={this.removeIngredientHandler} 
                addIngredients={this.addIngredientHandler}
                price={this.state.totalprice}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}/>
            </Aux>
        );

    }
}

export default BurgerBuilder;