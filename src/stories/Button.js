import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({
  backgroundColor, label, primary, size, ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button

Button.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Button.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  primary: false,
  size: 'medium',
}
