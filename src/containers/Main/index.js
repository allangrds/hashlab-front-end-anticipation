import React from 'react'

import { Box } from '../../components'
import AnticipationSimulation from './AnticipationSimulation'
import ValueToReceive from './ValueToReceive'
import styles from './styles.module.css'

const Main = () => (
  <div className={styles.wrapper}>
    <Box className={styles.box}>
      <AnticipationSimulation />
      <ValueToReceive />
    </Box>
  </div>
)

export default Main
