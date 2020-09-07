module.exports = function countCats(catspajamas) {
  return catspajamas.flat().reduce((sum, elem) => elem === '^^' ? sum + 1 : sum ,0)
};