import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const Alert = ({
  className,
  text,
  type,
}) => (
  (
    <div className={classNames(
      className,
      styles.alert,
      styles[type],
    )}
    >
      { text }
    </div>
  )
)

Alert.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'info',
    'warning',
    'error',
  ]),
}

Alert.defaultProps = {
  className: null,
  text: null,
  type: null,
}

export default Alert
