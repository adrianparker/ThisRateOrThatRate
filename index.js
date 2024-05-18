import { calculateForwardRateDays, calculateForwardRateYears } from './forwardRate.js'

// Examples of usage of functions in forwardRate.js

const longerTermSpotRate = 5 // 5%
const longerTermDays = 730 // 2 years
const shorterTermSpotRate = 4 // 4%
const shorterTermDays = 365 // 1 year

console.log(`Forward Rate: ${calculateForwardRateDays(longerTermSpotRate, longerTermDays, shorterTermSpotRate, shorterTermDays)}%`)

const longerTermYears = 2 // 2 years
const shorterTermYears = 1 // 1 year

console.log(`Forward Rate Years: ${calculateForwardRateYears(longerTermSpotRate, longerTermYears, shorterTermSpotRate, shorterTermYears)}%`)

// TODO examples for compoundReturn.js functions needed
