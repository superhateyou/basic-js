module.exports = class DepthCalculator {
    calculateDepth(arr) {
        return arr instanceof Array ? (arr.length ? Math.max(...arr.map(x => this.calculateDepth(x))) + 1 : 1) : 0;
        }
}