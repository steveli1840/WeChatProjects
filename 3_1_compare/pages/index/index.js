// index.js
Page({
  data: {
    result: ''
  },
  num1: 0,
  num2: 0,
  num1Input: function (e) {
    this.num1 = Number(e.detail.value)
  },
  num2Input: function (e) {
    this.num2 = Number(e.detail.value)
  },
  compare: function () {
    var str = ''
    if (this.num1 > this.num2) {
      str = '第一个数大'
    } else if (this.num1 < this.num2) {
      str = '第二个数大'
    } else {
      str = '两数相等'
      console.log('equal')
    }
    this.setData({
      result: str
    })
  }
})
