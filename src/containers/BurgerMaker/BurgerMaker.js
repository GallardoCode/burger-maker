import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import axios from '../../axios-order'

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
    purchasing: false,
    loading: false,
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

  purchasingHandler = () => {
    this.setState({ purchasing: true })
  }

  purchasingCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchasingContinueHandler = () => {
    this.setState({ loading: true })
    const { ingredients, totalPrice } = this.state
    const order = {
      ingredients,
      totalPrice,
      customer: {
        name: 'Ricardo Gallardo',
        address: {
          street: 'Fake street',
          postCode: 'wbest',
          country: 'United Kingdom',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
    }

    axios
      .post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false })
      })
      .catch(() => this.setState({ loading: false }))
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
    const {
      ingredients,
      totalPrice,
      purchasable,
      purchasing,
      loading,
    } = this.state
    const disabledIngredients = Object.fromEntries(
      Object.entries(ingredients).map((v) => [v[0], v[1] === 0])
    )

    const orderSummary = !loading ? (
      <OrderSummary
        ingredients={ingredients}
        price={totalPrice}
        purchaseCanceled={this.purchasingCancelHandler}
        purchasingContinued={this.purchasingContinueHandler}
      />
    ) : (
      <Spinner />
    )
    return (
      <Auxiliary>
        <Modal clickOutside={this.purchasingCancelHandler} show={purchasing}>
          {orderSummary}
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngerdientHandler}
          disabledIngredients={disabledIngredients}
          purchasable={purchasable}
          totalPrice={totalPrice}
          ordering={this.purchasingHandler}
        />
      </Auxiliary>
    )
  }
}

export default BurgerMaker
