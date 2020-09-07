import React from 'react'
import PropTypes from 'prop-types'
import { FocusOn } from 'react-focus-on'
import styles from './Modal.module.css'
import BackDrop from '../BackDrop/BackDrop'

const Modal = (props) => {
  const { children, show } = props
  return (
    <BackDrop show={show}>
      <div
        className={styles.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? 1 : 0,
        }}
      >
        <FocusOn>{children}</FocusOn>
      </div>
    </BackDrop>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
  ]).isRequired,
  show: PropTypes.bool,
}

Modal.defaultProps = {
  show: false,
}

export default Modal