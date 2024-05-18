import { calculateForwardRateDays, calculateForwardRateYears } from './forwardRate.js'

// Example usage
const longerTermSpotRate = 5 // 5%
const longerTermDays = 730 // 2 years
const shorterTermSpotRate = 4 // 4%
const shorterTermDays = 365 // 1 year

console.log(`Forward Rate: ${calculateForwardRateDays(longerTermSpotRate, longerTermDays, shorterTermSpotRate, shorterTermDays)}%`)

const longerTermYears = 2 // 2 years
const shorterTermYears = 1 // 1 year

console.log(`Forward Rate Years: ${calculateForwardRateYears(longerTermSpotRate, longerTermYears, shorterTermSpotRate, shorterTermYears)}%`)
