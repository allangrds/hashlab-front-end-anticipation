import decimalToCents from '../decimalToCents'

function maskedValueToCents (amount) {
  if (!amount) {
    return 0
  }

  const brlValue = amount.substr(2)
  const valueWithoutPoint = brlValue.replace(/\./g, '')
  const valueWithPoint = valueWithoutPoint.replace(/,/g, '.')

  return decimalToCents(valueWithPoint)
}

export default maskedValueToCents
