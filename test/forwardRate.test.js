import {
  calculateForwardRateYears,
  calculateForwardRateDays
} from '../forwardRate.js'
import {
  calculateAnnuallyCompoundedReturn,
  calculateDailyCompoundedReturn
} from '../compoundReturn.js'
import { expect } from 'chai'
import { describe, it } from 'mocha'

/**
 * Step by step example of forward rate calculation.
 *
 * Starting investment is $100.
 *
 * 5% p.a. on $100 over two years compounding annually =
 *  (100 x 1.05) = $105 end year 1, and
 *  (105 x 1.05) = $110.25 end year 2.
 *
 * 4% p.a. on $100 end of year 1 = 104.
 *
 * To get $110.25 at the end of year 2 from our end of year 1 $104, solve for Z:
 *  104 x Z = 110.25
 *  Z = 104 / 110.25 = 1.060096
 * ... the forward interest rate = 6.0096%.
 */
describe('Calculating forward rates annually compounding', function () {
  it('returns a number', function () {
    const longerRate = 1
    const longerYears = 2
    const shorterRate = 1
    const shorterYears = 1

    const result = calculateForwardRateYears(longerRate, longerYears, shorterRate, shorterYears)
    expect(typeof result).to.equal('number')
  })
  it('should calculate correct forward rate from 2 years 5% vs 1 year 4%', function () {
    const longerRate = 5
    const longerYears = 2
    const shorterRate = 4
    const shorterYears = 1

    const result = calculateForwardRateYears(longerRate, longerYears, shorterRate, shorterYears)
    expect(result).to.equal(6.0096)
  })
  it('should calculate correct forward rate from 3 years 5% vs 1 year 4%', function () {
    const longerRate = 5
    const longerTerm = 3
    const shorterRate = 4
    const shorterTerm = 1

    const result = calculateForwardRateYears(longerRate, longerTerm, shorterRate, shorterTerm)
    expect(result).to.equal(5.5036)
  })
  it('should calculate correct forward rate from 5 years 5.75% vs 2 years 6.1%', function () {
    const longerRate = 5.75
    const longerTerm = 5
    const shorterRate = 6.1
    const shorterTerm = 2

    const result = calculateForwardRateYears(longerRate, longerTerm, shorterRate, shorterTerm)
    expect(result).to.equal(5.5173)
  })
})

describe('Calculating forward rates daily compounding', function () {
  it('should calculate correct forward rate from 730 days 5% vs 365 days 4%', function () {
    const longerRate = 5
    const longerTerm = 730
    const shorterRate = 4
    const shorterTerm = 365

    const result = calculateForwardRateDays(longerRate, longerTerm, shorterRate, shorterTerm)
    expect(result).to.equal(6)
  })
  it('should calculate correct forward rate from 1095 days 5% vs 365 days 4%', function () {
    const longerRate = 5
    const longerTerm = 1095
    const shorterRate = 4
    const shorterTerm = 365

    const result = calculateForwardRateDays(longerRate, longerTerm, shorterRate, shorterTerm)
    expect(result).to.equal(5.5)
  })
  it('should calculate correct forward rate from 10 days 100% vs 5 days 100%', function () {
    const longerRate = 100
    const longerTerm = 10
    const shorterRate = 100
    const shorterTerm = 5

    const result = calculateForwardRateDays(longerRate, longerTerm, shorterRate, shorterTerm)
    expect(result).to.equal(100)
  })
})

describe('Using forward rates with spot rates and terms should result in equal returns', function () {
  it('$10,000 for 5 years 5.75% should equal 2 years 6.1% and then 3 years at forward rate', function () {
    const principal = 10000
    const longerRate = 5.75
    const longerTerm = 5
    const shorterRate = 6.1
    const shorterTerm = 2

    const forwardRate = calculateForwardRateYears(longerRate, longerTerm, shorterRate, shorterTerm)
    expect(forwardRate).to.equal(5.5173)

    const forwardTerm = longerTerm - shorterTerm
    expect(forwardTerm).to.equal(3)

    const longerReturn = calculateAnnuallyCompoundedReturn(principal, longerRate, longerTerm)
    expect(longerReturn).to.equal(13225.19)

    const shorterReturn = calculateAnnuallyCompoundedReturn(principal, shorterRate, shorterTerm)
    expect(shorterReturn).to.equal(11257.21)

    const forwardReturn = calculateAnnuallyCompoundedReturn(shorterReturn, forwardRate, forwardTerm)
    expect(longerReturn).to.equal(forwardReturn)
  })
  it('$10,000 for 500 days 4.7% should equal 200 days 6% and then 300 days at forward rate', function () {
    const principal = 10000
    const longerRate = 4.7
    const longerTerm = 500
    const shorterRate = 6
    const shorterTerm = 200

    const forwardRate = calculateForwardRateDays(longerRate, longerTerm, shorterRate, shorterTerm)

    const forwardTerm = longerTerm - shorterTerm
    expect(forwardTerm).to.equal(300)

    const longerReturn = calculateDailyCompoundedReturn(principal, longerRate, longerTerm)

    const shorterReturn = calculateDailyCompoundedReturn(principal, shorterRate, shorterTerm)

    const forwardReturn = calculateDailyCompoundedReturn(shorterReturn, forwardRate, forwardTerm)
    expect(longerReturn).to.equal(forwardReturn)
  })
})
