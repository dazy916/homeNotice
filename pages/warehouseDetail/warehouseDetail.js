// pages/warehouseDetail/warehouseDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIdx: 0,
    form: {
      id:1,
      setMealName: '清扬洗发水',
      coverUrl: 'https://cdn-we-retail.ym.tencent.com/tsr/goods/nz-09a.png?imageMogr2/thumbnail/750x376/quality/70/strip/format/webp'
    },
    shareShow: false,
    tabList: ['套餐内容', '套餐详情', '剧本简介', '购买须知'],
  },
  edit(e){
    console.info(e)
    wx.navigateTo({
      url: '/pages/add/add?id='+e.target.dataset.item
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})