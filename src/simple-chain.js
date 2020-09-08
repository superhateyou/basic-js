const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    arguments.length === 0 ? this.chain.push('') : this.chain.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position % 1 === 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1)
      return this;
    }
    
    else {
      this.chain = [];
      throw new Error('Invalid value');
    }
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
   let finishChain = this.chain.join('~~');
   this.chain = []
   return finishChain;
  }
};

module.exports = chainMaker;
