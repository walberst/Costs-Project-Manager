function FormatCurrency(money) {
  return parseFloat(money).toLocaleString("pt-BR", {
    style: "currency",
    currency: process.env.REACT_APP_CURRENCY,
  });
}

export default FormatCurrency;
