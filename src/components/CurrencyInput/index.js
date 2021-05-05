import React from 'react'
import PropTypes from 'prop-types'
import CurrencyInput from 'react-currency-input'
import classNames from 'classnames'

import styles from './styles.module.css'

const Input = ({
  errorMessage,
  label,
  name,
  onChange,
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

  function handleChange (event, maskedValue, floatvValue) {
    const value = floatvValue
      ? floatvValue.toString().replace(/[^\w\s]/gi, '')
      : floatvValue

    const payload = {
      name,
      value,
    }

    onChange(payload)
  }

  return (
    <fieldset className={styles.fieldset}>
      <label
        className={styles.label}
        htmlFor={name}
      >
        { label } { required && '*' }
      </label>
      <CurrencyInput
        onChangeEvent={handleChange}
        decimalSeparator=","
        thousandSeparator="."
        prefix="R$"
        id={name}
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
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  tip: PropTypes.string,
}

Input.defaultProps = {
  errorMessage: null,
  required: false,
  tip: null,
}

export default Input
