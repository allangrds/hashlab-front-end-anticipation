import decimalToCents from '../decimalToCents'

function maskedValueToCents (amount) {
  const brlValue = amount.substr(2)
  const valueWithoutPoint = brlValue.replace(/\./g, '')
  const valueWithPoint = valueWithoutPoint.replace(/,/g, '.')

  return decimalToCents(valueWithPoint)
}

export default maskedValueToCents
