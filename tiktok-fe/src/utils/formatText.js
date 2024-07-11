export const convertToShortTextNumber = (number) => {
  let digits = 0;

  let numberCalDigits = number;
  while (numberCalDigits > 0) {
    numberCalDigits = Math.floor(numberCalDigits / 10);
    digits++;
  }

  const data = {};
  if (digits >= 5 && digits <= 6) {
    data.floatNum = (number / 1000).toFixed(1);
    data.type = "K";
  } else if (digits >= 7 && digits <= 9) {
    data.floatNum = (number / 1000000).toFixed(1);
    data.type = "M";
  } else if (digits >= 10) {
    data.floatNum = (number / 1000000000).toFixed(1);
    data.type = "T";
  }

  return (
    (+data.floatNum.split(".")[1]
      ? data.floatNum
      : (+data.floatNum).toFixed(0)) + "M"
  );
};
