import React from 'react'
import PropTypes from 'prop-types'
import styles from './NavigationItem.module.css'

const NavigationItem = ({ children, link, active }) => (
  <li className={styles.NavigationItem}>
    <a className={active ? styles.active : null} href={link}>
      {children}
    </a>
  </li>
)

NavigationItem.defaultProps = {
  active: false,
}

NavigationItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  link: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

export default NavigationItem
