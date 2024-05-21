/**
 * Calculates monthly repayment to repay the loan over the given term at the given interest rate.
 * @param {*} principal the amount of the loan that is unpaid
 * @param {*} ratePerAnnnum interest rate per annum as a percentage
 * @param {*} years how many years to repay the loan
 * @returns total monthly repayment required to repay the loan in full, to 2dp
 */
export function calculateMonthlyRepayment(principal, ratePerAnnnum, years) {
  const repayment = calculateRepayment(ratePerAnnnum, 12, years, principal)
  return Math.round(repayment * 1e2) / 1e2
}

/**
 * Calculates fortnightly repayment to repay the loan over the given term at the given interest rate.
 * @param {*} principal the amount of the loan that is unpaid
 * @param {*} ratePerAnnnum interest rate per annum as a percentage
 * @param {*} years how many years to repay the loan
 * @returns total fortnightly repayment required to repay the loan in full, to 2dp
 */
export function calculateFortnightlyRepayment(principal, ratePerAnnnum, years) {
  const repayment = calculateRepayment(ratePerAnnnum, 26, years, principal)
  return Math.round(repayment * 1e2) / 1e2
}

/**
 * Calculates weekly repayment to repay the loan over the given term at the given interest rate.
 * @param {*} principal the amount of the loan that is unpaid
 * @param {*} ratePerAnnnum interest rate per annum as a percentage
 * @param {*} years how many years to repay the loan
 * @returns total weekly repayment required to repay the loan in full, to 2dp
 */
export function calculateWeeklyRepayment(principal, ratePerAnnnum, years) {
  const repayment = calculateRepayment(ratePerAnnnum, 52, years, principal)
  return Math.round(repayment * 1e2) / 1e2
}

/**
 * Calculates per-period amount (interest and repayment of principal) to repay the loan principal over the given term at the given rate of interest per annum.
 * @param {*} ratePerAnnnum interest rate per annum as a percentage
 * @param {*} paymentsPerAnnum how many repayments per year
 * @param {*} years how many years to repay the loan
 * @param {*} principal the amount of the loan that is unpaid
 * @returns total amount needed for each payment to fully repay the loan
 */
function calculateRepayment(ratePerAnnnum, paymentsPerAnnum, years, principal) {
  const rateDecimal = ratePerAnnnum / paymentsPerAnnum / 100
  const negativeExponent = (-1 * years) * paymentsPerAnnum
  const numerator = rateDecimal * principal
  const denominator = (1 - (Math.pow((1 + rateDecimal), negativeExponent)))
  const repayment = numerator / denominator
  return repayment
}
