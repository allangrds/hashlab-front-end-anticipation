import maskedValueToCents from '../../../../utils/helpers/maskedValueToCents'

function validation (formValues) {
  const {
    amount,
    installments,
    mdr,
  } = formValues
  const errors = {}

  if (!amount) {
    errors.amount = 'Este campo é obrigatório'
  } else if (maskedValueToCents(amount) < 1000) {
    errors.amount = 'Valor muito baixo'
  } else if (maskedValueToCents(amount) > 100000000) {
    errors.amount = 'Valor muito alto'
  }

  if (!installments) {
    errors.installments = 'Este campo é obrigatório'
  } else if (installments < 1 || installments > 12) {
    errors.installments = 'Parcela inválida'
  }

  if (!mdr) {
    errors.mdr = 'Este campo é obrigatório'
  } else if (mdr < 0) {
    errors.mdr = 'MDR inválido'
  }

  return errors
}

export default validation
