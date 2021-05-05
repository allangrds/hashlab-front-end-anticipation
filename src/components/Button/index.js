import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Button = ({
  onClick,
  text,
}) => (
  <button
    className={styles.button}
    type="button"
    onClick={onClick}
  >
    { text }
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
