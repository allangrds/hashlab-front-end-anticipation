import decimalToCents from '.'

test('decimalToCents should correct format values', () => {
  const firstValue = 0.02
  const secondValue = 23.22
  const thirdValue = 293.22
  const fourthValue = null
  const fifthValue = 'a'

  expect(decimalToCents(firstValue)).toEqual(2)
  expect(decimalToCents(secondValue)).toEqual(2322)
  expect(decimalToCents(thirdValue)).toEqual(29322)
  expect(decimalToCents(fourthValue)).toEqual(0)
  expect(decimalToCents(fifthValue)).toEqual(0)
})
