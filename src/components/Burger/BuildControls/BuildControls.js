import React from 'react'
import PropTypes from 'prop-types'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
]

const BuildControls = (props) => {
  const {
    ingredientAdded,
    ingredientRemoved,
    disabledIngredients,
    totalPrice,
    purchasable,
    ordering,
  } = props

  return (
    <div className={styles.BuildControls}>
      <p>Current Price: {totalPrice.toFixed(2)}</p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabledIngredients[ctrl.type]}
          label={ctrl.label}
        />
      ))}
      <button
        className={styles.OrderButton}
        disabled={!purchasable}
        onClick={ordering}
        type="button"
      >
        Order Now
      </button>
    </div>
  )
}

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabledIngredients: PropTypes.objectOf(PropTypes.bool).isRequired,
  totalPrice: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordering: PropTypes.func.isRequired,
}

export default BuildControls
