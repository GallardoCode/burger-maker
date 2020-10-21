import React from 'react'
import PropTypes from 'prop-types'
import styles from './Order.module.css'

const Order = ({ ingredients, price }) => {
  const ingredientsList = Object.entries(ingredients).map((v) => (
    <span
      key={v[0]}
      style={{
        textTranform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px',
      }}
    >
      {v[0]} ({v[1]})
    </span>
  ))
  return (
    <div className={styles.Order}>
      <p>Ingerdient: {ingredientsList}</p>
      <p>Price: {price}</p>
    </div>
  )
}

Order.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  price: PropTypes.number.isRequired,
}

export default Order
