const PER_CHECK_AT_SEVEN = 605.02;
const PROJECTED_AT_TEN_YEARS = 102810;
const GROWTH = {
  10: 1,
  20: 36.7855917709 / 13.1807949428,
  30: 79.058186196 / 13.1807949428,
} as const;

export function perCheck(percent: number) {
  return (PER_CHECK_AT_SEVEN * percent) / 7;
}

export function matchPerCheck(percent: number) {
  return (PER_CHECK_AT_SEVEN * Math.min(percent, 3)) / 7;
}

export function projectedBalance(percent: number, years: 10 | 20 | 30) {
  const factor = (percent + Math.min(percent, 3)) / 10;
  return Math.round(PROJECTED_AT_TEN_YEARS * GROWTH[years] * factor);
}

export function formatDollars(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatWholeDollars(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
