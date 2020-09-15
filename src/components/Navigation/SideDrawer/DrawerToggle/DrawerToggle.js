import React from 'react'
import PropTypes from 'prop-types'
import styles from './DrawerToggle.module.css'

const DrawerToggle = ({ clicked }) => {
  return (
    <div
      className={styles.DrawerToggle}
      onClick={clicked}
      role="button"
      tabIndex={0}
      onKeyPress={(event) => {
        if (event.keycode === 13) clicked(event)
      }}
    >
      <div />
      <div />
      <div />
    </div>
  )
}

DrawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired,
}

export default DrawerToggle
