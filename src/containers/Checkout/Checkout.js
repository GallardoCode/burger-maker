import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    totalPrice: null,
  }

  componentDidMount() {
    const { location } = this.props
    const searchParams = new URLSearchParams(location.search)
    let ingredients = {}
    searchParams.forEach((v, k) => {
      if (k !== 'price') ingredients = { ...ingredients, [k]: +v }
    })
    this.setState({ ingredients, totalPrice: searchParams.get('price') })
  }

  checkoutContinueHandler = () => {
    const { history } = this.props
    history.replace('checkout/contact-data')
  }

  checkoutCancelHandler = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    const { ingredients, totalPrice } = this.state
    const { match } = this.props
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutContinue={this.checkoutContinueHandler}
          checkoutCancel={this.checkoutCancelHandler}
        />
        <Route path={`${match.path}/contact-data`}>
          <ContactData ingredients={ingredients} totalPrice={totalPrice} />
        </Route>
      </div>
    )
  }
}

Checkout.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Checkout
