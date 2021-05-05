import React from 'react'
import PropTypes from 'prop-types'
import CurrencyInput from 'react-currency-input'

const MonetaryInput = ({
  className,
  name,
  onChange,
  value,
}) => {
  function handleChange (event, maskedValue) {
    const payload = {
      name,
      value: maskedValue,
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
      precision="2"
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
