/**
 * Calculates the annually compounded total return from the given investment parameters.
 *
 * @param {number} principal the amount invested at the start
 * @param {number} ratePerAnnum interest rate percentage per annum
 * @param {number} years term of investment in years
 * @returns annually compounded total return from the given investment parameters, rounded to 2dp
 */
export function calculateAnnuallyCompoundedReturn(principal, ratePerAnnum, years) {
  const rateDecimal = ratePerAnnum / 100
  return calculateCompoundedReturn(principal, rateDecimal, years)
}

/**
 * Calculates the daily compounded total return from the given investment parameters.
 * Treats a year as 365 days.
 *
 * @param {number} principal the amount invested at the start
 * @param {number} ratePerAnnum interest rate percentage per annum
 * @param {number} days term of investment in days
 * @returns daily compounded total return from the given investment parameters, rounded to 2dp
 */
export function calculateDailyCompoundedReturn(principal, ratePerAnnum, days) {
  const rateDecimalDaily = (ratePerAnnum / 100) / 365
  return calculateCompoundedReturn(principal, rateDecimalDaily, days)
}

/**
 * Calculates the compounded total return from the given investment parameters.
 * See https://en.wikipedia.org/wiki/Compound_interest
 *
 * @param {number} principal the starting investment
 * @param {number} rateDecimal the interest rate applicable to the period as a decimal
 * @param {number} periods how many periods compounding
 * @returns
 */
function calculateCompoundedReturn(principal, rateDecimal, periods) {
  const amount = principal * Math.pow(1 + rateDecimal, periods)
  const amount2DP = Math.round(amount * 1e2) / 1e2
  return amount2DP
}
