import React from 'react'
import PropTypes from 'prop-types'
import CurrencyInput from 'react-currency-input'

const MonetaryInput = ({
  className,
  id,
  name,
  onChange,
  value,
}) => {
  function handleOnChange (event, maskedValue, floatValue) {
    onChange({
      name,
      value: floatValue,
    })
  }

  return (
    <CurrencyInput
      decimalSeparator=","
      thousandSeparator="."
      prefix="R$"
      id={id}
      className={className}
      onChangeEvent={handleOnChange}
      value={value}
    />
  )
}

MonetaryInput.propTypes = {
  className: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

MonetaryInput.defaultProps = {
  value: 0,
}

export default MonetaryInput
