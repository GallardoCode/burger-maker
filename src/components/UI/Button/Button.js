import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

const Button = ({ clicked, btnType, children }) => {
  return (
    <button
      type="button"
      className={[styles.Button, styles[btnType]].join(' ')}
      onClick={clicked}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.oneOf(['Success', 'Danger']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

Button.defaultProps = {
  btnType: 'Success',
}
export default Button
