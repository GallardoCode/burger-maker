import React from 'react'
import PropTypes from 'prop-types'
import { FocusOn } from 'react-focus-on'
import styles from './Modal.module.css'
import BackDrop from '../BackDrop/BackDrop'

const Modal = (props) => {
  const { children, show, clickOutside } = props
  return (
    <BackDrop show={show}>
      <FocusOn onClickOutside={clickOutside}>
        <div
          className={styles.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? 1 : 0,
          }}
        >
          {children}
        </div>
      </FocusOn>
    </BackDrop>
  )
}

Modal.defaultProps = {
  children: null,
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  show: PropTypes.bool,
  clickOutside: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  show: false,
}

export default React.memo(Modal)
