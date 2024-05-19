import { calculateForwardRateDays, calculateForwardRateYears } from './forwardRate.js'
import { calculateDailyCompoundedReturn, calculateAnnuallyCompoundedReturn } from './compoundReturn.js'

// Examples of usage of functions in forwardRate.js

const longerTermSpotRate = 5
const longerTermDays = 730
const shorterTermSpotRate = 4
const shorterTermDays = 365
const forwardRateDays = calculateForwardRateDays(longerTermSpotRate, longerTermDays, shorterTermSpotRate, shorterTermDays)

console.log('\nExample of Forward Rate calculation in days:\n')
console.log('You could invest at %d% for %d days, compounding daily.', longerTermSpotRate, longerTermDays)
console.log('If you instead invested at %d% for %d days, to earn the same return as the first investment, you\'d need to reinvest the principal and interest from the first investment at %d% for %d days.', shorterTermSpotRate, shorterTermDays, forwardRateDays, longerTermDays - shorterTermDays)

const longerTermYears = 2
const shorterTermYears = 1
const forwardRateYears = calculateForwardRateYears(longerTermSpotRate, longerTermYears, shorterTermSpotRate, shorterTermYears)

console.log('\nExample of Forward Rate calculation in years:\n')
console.log('You could invest at %d% for %d years, compounding annually.', longerTermSpotRate, longerTermYears)
console.log('If you instead invested at %d% for %d years, to earn the same return as the first investment, you\'d need to reinvest the principal and interest from the first investment at %d% for %d years.', shorterTermSpotRate, shorterTermYears, forwardRateYears, longerTermYears - shorterTermYears)

// Example of usage of functions in compoundReturn.js

const principal = 1000
const rate = 5
const years = 3
const days = 365 * 3
const annualReturn = calculateAnnuallyCompoundedReturn(principal, rate, years)
const dailyReturn = calculateDailyCompoundedReturn(principal, rate, days)

console.log('\nExample of calculating annually and daily compounding returns:\n')
console.log('If you invested $%d at a rate of %f% p.a. compounding annually for %d years, you\'d earn a return of $%f before tax. If it was compounding daily, you\'d earn $%f before tax.', principal, rate, years, annualReturn, dailyReturn)
console.log('\n')