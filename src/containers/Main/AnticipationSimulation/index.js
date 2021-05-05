import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Input,
} from '../../../components'
import styles from './styles.module.css'
import validation from './validation'
import maskedValueToCents from '../../../utils/helpers/maskedValueToCents'

const AnticipationSimulation = ({
  onClick,
}) => {
  const [formValues, setFormValues] = useState({
    amount: null,
    installments: null,
    mdr: null,
  })
  const [formErrors, setFormErrors] = useState({
    amount: null,
    installments: null,
    mdr: null,
  })

  function handleChange (input) {
    setFormValues({
      ...formValues,
      [input.name]: input.value,
    })
  }

  function handleClick () {
    const errors = validation(formValues)

    if (
      !errors.amount
      && !errors.installments
      && !errors.mdr
    ) {
      onClick({
        ...formValues,
        amount: maskedValueToCents(formValues.amount),
      })
    }

    setFormErrors(errors)
  }

  return (
    <div className={styles.anticipation_simulatioon}>
      <h2 className={styles.title}>
        Simule sua Antecipação
      </h2>
      <div className={styles.input}>
        <Input
          onChange={handleChange}
          name="amount"
          type="money"
          label="Informe o valor da venda"
          required
          value={formValues.amount}
          errorMessage={formErrors.amount}
        />
      </div>
      <div className={styles.input}>
        <Input
          onChange={handleChange}
          name="installments"
          type="number"
          label="Em quantas parcelas"
          required
          tip="Máximo de 12 parcelas"
          min="1"
          max="12"
          value={formValues.installments}
          errorMessage={formErrors.installments}
        />
      </div>
      <div className={styles.input}>
        <Input
          onChange={handleChange}
          name="mdr"
          type="number"
          label="Informe o percentual de MDR"
          required
          min="1"
          value={formValues.mdr}
          errorMessage={formErrors.mdr}
        />
      </div>
      <Button
        onClick={handleClick}
        text="Simular"
      />
    </div>
  )
}

AnticipationSimulation.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default AnticipationSimulation
