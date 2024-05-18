import { calculateAnnuallyCompundedReturn } from '../compoundReturn.js'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Calculating annually compounding returns', function () {
  it('$100 for 2 years 5% should return $110.25', function () {
    const principal = 100
    const rate = 5
    const term = 2
    const futureValue = calculateAnnuallyCompundedReturn(principal, rate, term)

    expect(futureValue).to.equal(110.25)
  })
  it('$10,000 for 5 years 5.75% should return $13,225.19', function () {
    const principal = 10000
    const rate = 5.75
    const term = 5
    const futureValue = calculateAnnuallyCompundedReturn(principal, rate, term)

    expect(futureValue).to.equal(13225.19)
  })
  it('$10,000 for 2 years 6.1% should return $11,257.21', function () {
    const principal = 10000
    const rate = 6.1
    const term = 2
    const futureValue = calculateAnnuallyCompundedReturn(principal, rate, term)

    expect(futureValue).to.equal(11257.21)
  })
  it('$11,257.21 for 3 years 5.5173% should return $13,225.19', function () {
    const principal = 11257.21
    const rate = 5.5173
    const term = 3
    const futureValue = calculateAnnuallyCompundedReturn(principal, rate, term)

    expect(futureValue).to.equal(13225.19)
  })
})
