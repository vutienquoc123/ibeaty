export const formatMoneyToString = (number) => {
  return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
};
