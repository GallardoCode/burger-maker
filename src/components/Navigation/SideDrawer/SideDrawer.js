import React from 'react'
import PropTypes from 'prop-types'
import { FocusOn } from 'react-focus-on'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDrawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import Auxiliary from '../../../hoc/Auxiliary'

const SideDrawer = ({ open, closeDrawer }) => {
  const attachedStyles = open
    ? [styles.SideDrawer, styles.Open]
    : [styles.SideDrawer, styles.Close]
  return (
    <Auxiliary>
      <BackDrop show={open}>
        <FocusOn onClickOutside={closeDrawer}>
          <div className={attachedStyles.join(' ')}>
            <div className={styles.Logo}>
              <Logo />
            </div>
            <nav>
              <NavigationItems />
            </nav>
          </div>
        </FocusOn>
      </BackDrop>
    </Auxiliary>
  )
}

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
}

export default SideDrawer
