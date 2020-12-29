import React from 'react'
import PropTypes from 'prop-types'

const DefaultInput = ({
  className,
  id,
  name,
  onChange,
  type,
}) => {
  function handleOnChange (event) {
    const { value } = event.target
    const { name: inputName } = event.target

    onChange({
      name: inputName,
      value,
    })
  }

  return (
    <input
      id={id}
      className={className}
      onChange={handleOnChange}
      name={name}
      type={type}
    />
  )
}

DefaultInput.propTypes = {
  className: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default DefaultInput
