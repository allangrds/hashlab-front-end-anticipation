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
            anticipationValues={anticipationValues}
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
  }), // eslint-disable-next-line react/forbid-prop-types
  anticipationValues: PropTypes.object,
  onClick: PropTypes.func.isRequired,
}

Main.defaultProps = {
  alert: {},
  anticipationValues: {},
}

export default Main
