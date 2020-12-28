const centsToReal = (amount = 0) => {
  const amountToFormat = amount / 100
  const config = {
    currency: 'BRL',
    minimumFractionDigits: 2,
    style: 'currency',
  }

  const formatedAmount = amountToFormat.toLocaleString('pt-BR', config)

  return formatedAmount
}

export default centsToReal
