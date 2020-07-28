import React from 'react'
import PropTypes from 'prop-types'
import styles from './BuildControl.module.css'

const BuildControl = (props) => {
  const { label, added, removed, disabled } = props
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{label}</div>
      <button className={styles.More} onClick={added} type="button">
        More
      </button>
      <button
        className={styles.Less}
        onClick={removed}
        disabled={disabled}
        type="button"
      >
        Less
      </button>
    </div>
  )
}

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default BuildControl
