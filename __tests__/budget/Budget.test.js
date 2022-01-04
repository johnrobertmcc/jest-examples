// import Budget from '@/pages/budget/index'
// import React from 'react'
// import {shallow} from 'enzyme'
import calculateRemainder from '@/functions/helpers/calculateRemainder'

// test('The page should be mounted', () => {
//   expect(shallow(<Budget />)).not.toBeNull()
// })

test('Adding', () => {
  const test1 = calculateRemainder(0, 3)
  expect(test1).toEqual(3)
})

test('Subtracting', () => {
  const test2 = calculateRemainder(0, -3)
  expect(test2).toEqual(-3)
})
