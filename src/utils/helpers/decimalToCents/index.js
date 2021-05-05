const decimalToCents = (amount) => {
  // eslint-disable-next-line no-restricted-globals
  if (!amount || isNaN(amount)) {
    return 0
  }

  return parseInt((amount * 100).toFixed(1), 10)
}

export default decimalToCents
