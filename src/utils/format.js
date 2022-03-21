const price = (
    digit,
    opts = {style: 'currency', currency: 'RUB', minimumFractionDigits: 0},
    locale = 'ru-RU',
) => {
  const digitMoney = new Intl.NumberFormat(locale, opts).format(digit);
  return digitMoney;
};

const percent = (
    digitP,
    opts = {style: 'percent', maximumFractionDigits: 2},
    locale = 'ru-RU',
) => {
  const digitPercent = new Intl.NumberFormat(locale, opts).format(digitP/10000);
  return digitPercent.replace(/\s+/g, '').trim();
};

export {
  price,
  percent,
};
