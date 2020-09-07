module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  if(isNaN(date)) throw Error
  if (date.getMonth() === 0 || date.getMonth() === 1 || date.getMonth() === 11) return "winter"
  if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4) return "spring"
  if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7) return "summer"
  else return "autumn"
};
