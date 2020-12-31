import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const Box = ({ children, className }) => (
  <div className={classNames(styles.box, className)}>
    { children }
  </div>
)

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node,
}

Box.defaultProps = {
  className: null,
}

export default Box
