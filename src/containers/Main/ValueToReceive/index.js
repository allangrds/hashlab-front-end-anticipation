import React from 'react'
import PropTypes from 'prop-types'

import centsToReal from '../../../utils/helpers/centsToReal'
import styles from './styles.module.css'

function getLabelFromDay (day) {
  const parsedDay = parseInt(day, 10)

  if (parsedDay === 1) {
    return 'Amanhã'
  }

  return `Em ${parsedDay} dias`
}

const ValueToReceive = ({
  anticipationValues,
}) => (
  <aside className={styles.aside}>
    <p className={styles.title}>
      Você receberá
    </p>
    <hr className={styles.line} />
    {
        Object.entries(anticipationValues).map(arr => (
          <p className={styles.valueDay} key={arr[0]}>
            { getLabelFromDay(arr[0]) }:
            <b>
              { centsToReal(anticipationValues[arr[0]]) }
            </b>
          </p>
        ))
      }
  </aside>
)

ValueToReceive.propTypes = { // eslint-disable-next-line react/forbid-prop-types
  anticipationValues: PropTypes.object,
}

ValueToReceive.defaultProps = {
  anticipationValues: {},
}

export default ValueToReceive
