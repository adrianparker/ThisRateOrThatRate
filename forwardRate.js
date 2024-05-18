/**
 * Calculates daily compounding forward interest rate from two spot rates, one relating to a longer term than the other.
 * Assumes the investment compounds daily and has a term denominated in days.
 *
 * @param {number} longerTermSpotRate The longer term spot rate (percentage per annum)
 * @param {number} longerTermDays The length of the longer term in days
 * @param {number} shorterTermSpotRate The shorter term spot rate (percentage per annum)
 * @param {number} shorterTermDays The length of the shorter term in days
 * @returns {number} The forward interest rate (percentage per annum) rounded to 4dp.
 */
export function calculateForwardRateDays(longerTermSpotRate, longerTermDays, shorterTermSpotRate, shorterTermDays) {
  const daysInYear = 365
  const longerRateDecimalPerDay = (longerTermSpotRate / 100) / daysInYear
  const shorterRateDecimalPerDay = (shorterTermSpotRate / 100) / daysInYear
  const forwardRate = calculateForwardRate(longerRateDecimalPerDay, longerTermDays, shorterRateDecimalPerDay, shorterTermDays)
  const forwardRateAsPercentage = forwardRate * daysInYear * 100 // Convert back to percentage per annum
  return Math.round(forwardRateAsPercentage * 1e4) / 1e4
}

/**
 * Calculates yearly compounding forward interest rate from two spot rates, one relating to a longer term than the other.
 * Assumes the investment compounds yearly and has a term denominated in years.
 *
 * @param {number} longerTermSpotRate The longer term spot rate (percentage)
 * @param {number} longerTermYears The length of the longer term in years, compounding annually
 * @param {number} shorterTermSpotRate The shorter term spot rate (percentage)
 * @param {number} shorterTermYears The length of the shorter term in years, compounding annually
 * @returns {number} The forward interest rate (percentage per annum) rounded to 4dp.
 */
export function calculateForwardRateYears(longerTermSpotRate, longerTermYears, shorterTermSpotRate, shorterTermYears) {
  const longerSpotRateDecimal = longerTermSpotRate / 100
  const shorterSpotRateDecimal = shorterTermSpotRate / 100
  const forwardRate = calculateForwardRate(longerSpotRateDecimal, longerTermYears, shorterSpotRateDecimal, shorterTermYears)
  const forwardRateAsPercentage = forwardRate * 100 // Convert back to percentage
  return Math.round(forwardRateAsPercentage * 1e4) / 1e4
}

/**
 * Calculates a forward rate from two spot rates.
 * See https://en.wikipedia.org/wiki/Forward_rate for the formula.
 *
 * @param {*} longerSpotRate The longer term spot rate as a decimal e.g. 5% is provided as 0.05
 * @param {*} longerTerm The number of periods in the longer term. Investment compounds each period.
 * @param {*} shorterSpotRate The shorter term spot rate as a decimal e.g. 5% is provided as 0.05
 * @param {*} shorterTerm The number of periods in the longer term. Investment compounds each period.
 * @returns {number} the calculated forward rate
 */
function calculateForwardRate(longerSpotRate, longerTerm, shorterSpotRate, shorterTerm) {
  const numerator = Math.pow((1 + longerSpotRate), longerTerm)
  const denominator = Math.pow((1 + shorterSpotRate), shorterTerm)
  return Math.pow((numerator / denominator), (1 / (longerTerm - shorterTerm))) - 1
}
