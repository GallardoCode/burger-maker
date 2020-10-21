import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './NavigationItem.module.css'

const NavigationItem = ({ children, link, exact }) => (
  <li className={styles.NavigationItem}>
    <NavLink to={link} activeClassName={styles.active} exact={exact}>
      {children}
    </NavLink>
  </li>
)

NavigationItem.defaultProps = {
  exact: false,
}

NavigationItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

export default NavigationItem
