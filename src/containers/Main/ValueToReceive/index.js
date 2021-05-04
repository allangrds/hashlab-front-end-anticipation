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
    {
      tomorrow && (
        <p className={styles.valueDay}>
          Amanhã: <b>{centsToReal(tomorrow)}</b>
        </p>
      )
    }
    {
      in15Days && (
        <p className={styles.valueDay}>
          Em 15 dias: <b>{centsToReal(in15Days)}</b>
        </p>
      )
    }
    {
      in30Days && (
        <p className={styles.valueDay}>
          Em 30 dias: <b>{centsToReal(in30Days)}</b>
        </p>
      )
    }
    {
      in90Days && (
        <p className={styles.valueDay}>
          Em 90 dias: <b>{centsToReal(in90Days)}</b>
        </p>
      )
    }
  </aside>
)

ValueToReceive.propTypes = {
  in15Days: PropTypes.number,
  in30Days: PropTypes.number,
  in90Days: PropTypes.number,
  tomorrow: PropTypes.number,
}

ValueToReceive.defaultProps = {
  in15Days: null,
  in30Days: null,
  in90Days: null,
  tomorrow: null,
}

export default ValueToReceive
