const math = require('./math.js')

module.exports = {
  target: 'num1',
  num1: '0',
  num2: '0',
  op: '',

  setNum(num) {
    this[this.target] = num
  },

  getNum() {
    return this[this.target]
  },
  changeNum2() {
    this.target = 'num2'
  },
  reset() {
    this.num1 = this.num2 = '0'
    this.target = 'num1'
    this.op = ''
  },
  getResult() {
    if (this.op === '+') {
      return math.add(this.num1, this.num2) + ''
    } else if (this.op === '-') {
      return math.sub(this.num1, this.num2) + ''
    } else if (this.op === 'x') {
      return math.mul(this.num1, this.num2) + ''
    } else if (this.op === '÷') {
      return math.div(this.num1, this.num2) + ''
    }
  }
}