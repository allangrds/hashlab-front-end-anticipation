import React from 'react'
import PropTypes from 'prop-types'
import CurrencyInput from 'react-currency-input'
import classNames from 'classnames'

import styles from './styles.module.css'

const Input = ({
  errorMessage,
  label,
  required,
  tip,
}) => {
  const bottomText = errorMessage || tip
  const bottomClassName = errorMessage
    ? styles.error
    : styles.tip
  const inputClassName = errorMessage
    ? classNames(styles.input, styles['input-error'])
    : styles.input

  return (
    <fieldset className={styles.fieldset}>
      <label
        className={styles.label}
        htmlFor="Aname"
      >
        { label } { required && '*' }
      </label>
      <CurrencyInput
        decimalSeparator=","
        thousandSeparator="."
        prefix="R$"
        id="Aname"
        className={inputClassName}
      />
      <p className={bottomClassName}>
        { bottomText }
      </p>
    </fieldset>
  )
}

Input.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  tip: PropTypes.string,
}

Input.defaultProps = {
  errorMessage: null,
  required: false,
  tip: null,
}

export default Input
