import React, { useState } from 'react'

import { Input } from '../../../components'
import styles from './styles.module.css'

const AnticipationSimulation = () => {
  const [formValues, setFormValues] = useState({}) //eslint-disable-line

  function handleOnChange (obj) {//eslint-disable-line
    setFormValues({
      [obj.name]: obj.value,
    })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Simule sua Antecipação
      </h1>
      <Input
        label="Informe o valor da venda"
        type="money"
        name="transactionAmount"
        required
        onChange={handleOnChange}
        value={formValues.transactionAmount}
        className={styles.input}
      />
      <Input
        label="Em quantas parcelas"
        type="number"
        name="transactionCreditCardInstallments"
        required
        tip="Máximo de 12 parcelas"
        onChange={handleOnChange}
        className={styles.input}
      />
      <Input
        label="Informe o percentual do MDR"
        type="number"
        name="mdrPercentual"
        required
        onChange={handleOnChange}
      />
    </div>
  )
}

export default AnticipationSimulation
