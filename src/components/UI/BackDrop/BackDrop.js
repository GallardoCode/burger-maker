import React from 'react'
import PropTypes from 'prop-types'
import styles from './BackDrop.module.css'

const BackDrop = (props) => {
  const { children, show } = props
  return show ? <aside className={styles.BackDrop}>{children}</aside> : null
}

BackDrop.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
  ]).isRequired,
}

BackDrop.defaultProps = {
  show: false,
}

export default BackDrop
