import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'

const Input = (props) => {
  const { elementType, elementConfig, value, label, change } = props
  let inputElement = null

  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          className={styles.InputElement}
          {...elementConfig}
          value={value}
          onChange={change}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <textarea
          className={styles.InputElement}
          {...elementConfig}
          value={value}
          onChange={change}
        />
      )
      break
    case 'select':
      inputElement = (
        <select className={styles.InputElement} value={value} onChange={change}>
          {elementConfig.options.map((v) => (
            <option key={v.value} value={v.value}>
              {v.displayValue}
            </option>
          ))}
        </select>
      )
      break
    default:
      inputElement = (
        <input
          className={styles.InputElement}
          {...elementConfig}
          value={value}
        />
      )
  }
  return (
    <div className={styles.Input}>
      <label className={styles.Label} htmlFor={elementConfig.id}>
        {label}
      </label>
      {inputElement}
    </div>
  )
}

Input.propTypes = {
  elementType: PropTypes.string.isRequired,
  elementConfig: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
}

export default Input
