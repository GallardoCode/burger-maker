import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Auxiliary from '../../hoc/Auxiliary'
import styles from './Layout.module.css'
import Toolbar from '../Navigation/toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }))
  }

  render() {
    const { children } = this.props
    const { showSideDrawer } = this.state
    return (
      <Auxiliary>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={showSideDrawer}
          closeDrawer={this.sideDrawerCloseHandler}
        />
        <main className={styles.Content}>{children}</main>
      </Auxiliary>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
  ]).isRequired,
}
export default Layout
