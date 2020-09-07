const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return typeof sampleActivity !== "string" || +sampleActivity <= 0 || +sampleActivity > 15 || isNaN(parseFloat(sampleActivity))
         ? false
         : Math.ceil((Math.log(MODERN_ACTIVITY/(parseFloat(sampleActivity)))/0.693*HALF_LIFE_PERIOD))
 };
