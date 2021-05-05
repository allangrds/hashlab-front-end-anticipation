import maskedValueToCents from '.'

test('maskedValueToCents should correct format values', () => {
  const firstValue = 'R$1,02'
  const secondValue = 'R$1.000,05'
  const thirdValue = 'R$12.000,35'
  const fourthValue = 'R$0,00'
  const fifthValue = null

  expect(maskedValueToCents(firstValue)).toEqual(102)
  expect(maskedValueToCents(secondValue)).toEqual(100005)
  expect(maskedValueToCents(thirdValue)).toEqual(1200035)
  expect(maskedValueToCents(fourthValue)).toEqual(0)
  expect(maskedValueToCents(fifthValue)).toEqual(0)
})
