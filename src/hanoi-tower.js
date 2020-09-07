module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const res = {};
    let result = 0;
    res.turns = 2 ** disksNumber - 1;
    result = res.turns / turnsSpeed * 3600;
    res.seconds =  Math.floor(result);
    return res;
};
