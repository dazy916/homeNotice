// pages/warehouse/warehouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: ['食品', '药品', '洗浴用品', '日用品', '卫生用品'],
    statusList: ['正常', '临期', '过期'],
    productList:[{
      name:'123',
      proImg:'https://img.yzcdn.cn/vant/cat.jpeg',
      createDate:'2023-07-12',
      shelflife:'300',
      unit:1,
      expiration:'2024-07-11'
    },{
      name:'123',
      proImg:'https://img.yzcdn.cn/vant/cat.jpeg',
      createDate:'2023-07-12',
      shelflife:'300',
      unit:1,
      expiration:'2024-07-11'
    }]
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