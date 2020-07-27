import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'

class BurgerMaker extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
    },
  }

  render() {
    const { ingredients } = this.state
    return (
      <Auxiliary>
        <Burger ingredients={ingredients} />
        <div>Controls </div>
      </Auxiliary>
    )
  }
}

export default BurgerMaker
