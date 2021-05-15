import React from 'react'
import PropTypes from 'prop-types'

const DefaultInput = ({
  className,
  name,
  onBlur,
  onChange,
  type,
  value,
  ...rest
}) => {
  function handleOnChange (event) {
    const { value: inputValue } = event.target
    const { name: inputName } = event.target

    onChange({
      name: inputName,
      value: inputValue,
    })
  }

  return (
    <input
      id={name}
      className={className}
      onBlur={handleOnChange}
      onChange={handleOnChange}
      name={name}
      type={type}
      value={value}
      {...rest}
    />
  )
}

DefaultInput.propTypes = {
  className: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

DefaultInput.defaultProps = {
  value: null,
}

export default DefaultInput
