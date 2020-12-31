import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import MonetaryInput from './MonetaryInput'
import DefaultInput from './DefaultInput'
import styles from './styles.module.css'

const Input = ({
  className,
  errorMessage,
  id,
  label,
  name,
  onChange,
  required,
  tip,
  type,
  value,
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
  const fieldsetClassName = className
    ? classNames(styles.fieldset, className)
    : styles.fieldset

  function handleOnChange (obj) {
    onChange(obj)
  }

  return (
    <fieldset className={fieldsetClassName}>
      <label
        className={styles.label}
        htmlFor={id}
      >
        { label } { required && '*' }
      </label>
      <SelectedInput
        className={inputClassName}
        id={id}
        name={name}
        onChange={handleOnChange}
        type={type}
        value={value}
      />
      <p className={bottomClassName}>
        { bottomText }
      </p>
    </fieldset>
  )
}

Input.propTypes = {
  className: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  tip: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

Input.defaultProps = {
  errorMessage: null,
  id: null,
  required: false,
  tip: null,
  value: null,
}

export default Input
