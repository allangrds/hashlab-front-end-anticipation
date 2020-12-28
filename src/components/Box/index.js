import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const Box = ({ children }) => (
  <div className={styles.box}>
    { children }
  </div>
)

Box.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Box
