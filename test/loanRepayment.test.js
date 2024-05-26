import {
  calculateWeeklyRepayment,
  calculateFortnightlyRepayment,
  calculateMonthlyRepayment,
  calculateAnnualRepayment
} from '../loanRepayment.js'
import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('Calculating annual loan repayment', function () {
  it('Should calculate annual repayment of $1295.05 for $10,000 at 5% over 10 years', function () {
    const principal = 10000
    const rate = 5
    const years = 10

    const monthlyRepayment = calculateAnnualRepayment(principal, rate, years)
    expect(monthlyRepayment).to.equal(1295.05)
  })
})
describe('Calculating monthly loan repayment', function () {
  it('Should calculate monthly repayment of $1264.14 for $200,000 at 6.5% over 30 years', function () {
    const principal = 200000
    const rate = 6.5
    const years = 30

    const monthlyRepayment = calculateMonthlyRepayment(principal, rate, years)
    expect(monthlyRepayment).to.equal(1264.14)
  })
})
describe('Calculating fortnightly loan repayment', function () {
  it('Should calculate fortnightly repayment of $583.17 for $200,000 at 6.5% over 15 years', function () {
    const principal = 200000
    const rate = 6.5
    const years = 30

    const fortnightlyRepayment = calculateFortnightlyRepayment(principal, rate, years)
    expect(fortnightlyRepayment).to.equal(583.17)
  })
})
describe('Calculating weekly loan repayment', function () {
  it('Should calculate weekly repayment of $291.53 for $200,000 at 6.5% over 30 years', function () {
    const principal = 200000
    const rate = 6.5
    const years = 30

    const weeklyRepayment = calculateWeeklyRepayment(principal, rate, years)
    expect(weeklyRepayment).to.equal(291.53)
  })
})
