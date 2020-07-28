import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
}
class BurgerMaker extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
  }

  addIngredientHandler = (type) => {
    this.setState(
      (prevState) => ({
        ingredients: {
          ...prevState.ingredients,
          [type]: prevState.ingredients[type] + 1,
        },
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
      }),
      () => this.purchasableState()
    )
  }

  removeIngerdientHandler = (type) => {
    const { ingredients } = this.state
    if (ingredients[type] === 0) {
      return
    }
    this.setState(
      (prevState) => ({
        ingredients: {
          ...prevState.ingredients,
          [type]: prevState.ingredients[type] - 1,
        },
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
      }),
      () => this.purchasableState()
    )
  }

  purchasableState() {
    this.setState((prevState) => ({
      purchasable:
        Object.values(prevState.ingredients).reduce(
          (sum, value) => sum + value,
          0
        ) > 0,
    }))
  }

  render() {
    const { ingredients, totalPrice, purchasable } = this.state
    const disabledIngredients = Object.fromEntries(
      Object.entries(ingredients).map((v) => [v[0], v[1] === 0])
    )
    return (
      <Auxiliary>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngerdientHandler}
          disabledIngredients={disabledIngredients}
          purchasable={purchasable}
          totalPrice={totalPrice}
        />
      </Auxiliary>
    )
  }
}

export default BurgerMaker