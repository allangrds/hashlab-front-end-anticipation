import React from 'react'
import PropTypes from 'prop-types'

import centsToReal from '../../../utils/helpers/centsToReal'
import styles from './styles.module.css'

const ValueToReceive = ({
  in15Days,
  in30Days,
  in90Days,
  tomorrow,
}) => (
  <aside className={styles.aside}>
    <p className={styles.title}>
      Você receberá
    </p>
    <hr className={styles.line} />
    <p className={styles.valueDay}>
      Amanhã: <b>{centsToReal(tomorrow)}</b>
    </p>
    <p className={styles.valueDay}>
      Em 15 dias: <b>{centsToReal(in15Days)}</b>
    </p>
    <p className={styles.valueDay}>
      Em 30 dias: <b>{centsToReal(in30Days)}</b>
    </p>
    <p className={styles.valueDay}>
      Em 90 dias: <b>{centsToReal(in90Days)}</b>
    </p>
  </aside>
)

ValueToReceive.propTypes = {
  in15Days: PropTypes.number,
  in30Days: PropTypes.number,
  in90Days: PropTypes.number,
  tomorrow: PropTypes.number,
}

ValueToReceive.defaultProps = {
  in15Days: 0,
  in30Days: 0,
  in90Days: 0,
  tomorrow: 0,
}

export default ValueToReceive
