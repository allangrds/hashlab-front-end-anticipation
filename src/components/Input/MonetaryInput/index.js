import React from 'react'
import PropTypes from 'prop-types'
import CurrencyInput from 'react-currency-input'

const MonetaryInput = ({
  className,
  name,
  onChange,
  value,
}) => {
  function handleChange (event, maskedValue, floatvValue) {
    const newValue = floatvValue
      ? parseInt(floatvValue.toString().replace(/[^\w\s]/gi, ''), 10)
      : floatvValue

    const payload = {
      name,
      value: newValue,
    }

    onChange(payload)
  }

  return (
    <CurrencyInput
      onChangeEvent={handleChange}
      decimalSeparator=","
      thousandSeparator="."
      prefix="R$"
      id={name}
      className={className}
      value={value}
    />
  )
}

MonetaryInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

MonetaryInput.defaultProps = {
  className: null,
  value: null,
}

export default MonetaryInput
