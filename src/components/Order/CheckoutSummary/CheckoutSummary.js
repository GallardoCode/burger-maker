import React from 'react'
import PropTypes from 'prop-types'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import styles from './CheckoutSummary.module.css'

const CheckoutSummary = ({ ingredients, checkoutContinue, checkoutCancel }) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>Enjoy you tasty burger</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
        <Button btnType="Danger" clicked={checkoutCancel}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={checkoutContinue}>
          Continue
        </Button>
      </div>
    </div>
  )
}

CheckoutSummary.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  checkoutCancel: PropTypes.func.isRequired,
  checkoutContinue: PropTypes.func.isRequired,
}

export default CheckoutSummary
