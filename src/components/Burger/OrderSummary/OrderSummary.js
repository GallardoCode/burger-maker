import React from 'react'
import PropTypes from 'prop-types'
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
  const { ingredients, purchaseCanceled, purchasingContinued, price } = props
  const summary = Object.entries(ingredients).map((v) => (
    <li key={v[0]}>
      <span style={{ textTransform: 'capitalize' }}>{v[0]}:</span> {v[1]}
    </li>
  ))
  return (
    <Auxiliary>
      <h3>Your Order Summary</h3>
      <p>A tasty burger filled with following:</p>
      <ul>{summary}</ul>
      <p>Total Price: {price}</p>
      <p>Check Out?</p>
      <Button clicked={purchaseCanceled} type="button" btnType="Danger">
        No
      </Button>
      <Button clicked={purchasingContinued} type="button" btnType="Success">
        Yes
      </Button>
    </Auxiliary>
  )
}

OrderSummary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  purchaseCanceled: PropTypes.func.isRequired,
  purchasingContinued: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
}

export default OrderSummary
