import React from 'react'
import PropTypes from 'prop-types'

import {
  Alert,
  Box,
} from '../../components'
import ValueToReceive from './ValueToReceive'
import Form from './Form'

import styles from './styles.module.css'

const Main = ({
  alert,
  anticipationValues,
  onClick,
}) => (
  <div className={styles.wrapper}>
    <main className={styles.container}>
      <Alert
        className={styles.alert}
        text={alert.text}
        type={alert.type}
      />
      <Box>
        <div className={styles.grid}>
          <Form
            onClick={onClick}
            loading={alert.type === 'info'}
          />
          <ValueToReceive
            in15Days={anticipationValues[15]}
            in30Days={anticipationValues[30]}
            in90Days={anticipationValues[90]}
            tomorrow={anticipationValues[1]}
          />
        </div>
      </Box>
    </main>
  </div>
)

Main.propTypes = {
  alert: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.oneOf([
      'info',
      'warning',
      'error',
    ]),
  }),
  anticipationValues: PropTypes.shape({
    1: PropTypes.number,
    15: PropTypes.number,
    30: PropTypes.number,
    90: PropTypes.number,
  }),
  onClick: PropTypes.func.isRequired,
}

Main.defaultProps = {
  alert: {},
  anticipationValues: {},
}

export default Main
