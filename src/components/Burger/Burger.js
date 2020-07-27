import React from 'react'
import PropTypes from 'prop-types'
import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  const { ingredients } = props
  let ingerdientArray = Object.keys(ingredients)
    .map((keys) =>
      [...Array(ingredients[keys])].map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <BurgerIngredient key={keys + i} type={keys} />
      ))
    )
    .flat()

  if (ingerdientArray.length === 0)
    ingerdientArray = <p>Please select ingredients</p>

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingerdientArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

Burger.propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Burger
