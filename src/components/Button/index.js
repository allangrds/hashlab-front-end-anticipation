import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Button = ({
  disabled,
  onClick,
  text,
}) => (
  <button
    className={styles.button}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    { text }
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  disabled: false,
}

export default Button
