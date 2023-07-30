// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: []
  },

  listData: {
    page: 1,
    pageSize: 10,
    total: 0
  },
  isLoading: false,
  getShopList: function (cb) {
    this.isLoading = true
    wx.showLoading({
      title: '数据加载中...',
    })

    wx.request({
      url: 'http://127.0.0.1:3000/data',
      method: 'GET',
      data: {
        page: this.listData.page,
        pageSize: this.listData.pageSize
      },
      success: res => {
        console.log(res)
        this.setData({
          shopList: [...this.data.shopList, ...res.data]
        })
        this.listData.total = res.header['X-Total-Count'] - 0
      },

      complete: () => {
        wx.hideLoading()
        this.isLoading = false
        cb && cb()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getShopList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.listData.page * this.listData.pageSize >= this.listData.total) {
      return wx.showToast({
        title: '数据加载完毕',
        icon: 'none'
      })
    }

    if (this.isLoading) {
      return
    }

    ++this.listData.page
    this.getShopList()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      shopList: []
    })
    this.listData.page = 1
    this.listData.total = 0
    this.getShopList(() => {
      wx.stopPullDownRefresh()
    })
  },
})