import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import MonetaryInput from './MonetaryInput'
import DefaultInput from './DefaultInput'
import styles from './styles.module.css'

const Input = ({
  errorMessage,
  label,
  name,
  onChange,
  required,
  tip,
  type,
  value,
  ...rest
}) => {
  const bottomText = errorMessage || tip
  const bottomClassName = errorMessage
    ? styles.error
    : styles.tip
  const inputClassName = errorMessage
    ? classNames(styles.input, styles['input-error'])
    : styles.input
  const SelectedInput = type === 'money'
    ? MonetaryInput
    : DefaultInput

  return (
    <fieldset className={styles.fieldset}>
      <label
        className={styles.label}
        htmlFor={name}
      >
        { label } { required && '*' }
      </label>
      <SelectedInput
        className={inputClassName}
        id={name}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        {...rest}
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
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

Input.defaultProps = {
  errorMessage: null,
  required: false,
  tip: null,
  value: null,
}

export default Input
