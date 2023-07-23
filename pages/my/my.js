// pages/my/my.js
const app = getApp();
const {
  $Toast
} = require("../../dist/base/index");
const http = require("../../http/http");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    avatar: '/images/avatar.png',
    myList: [
      // {
      //   icon: 'https://linkonofficail.obs.myhuaweicloud.com/sanxingdui/icon-my1.png',
      //   title: '我的订单',
      //   url: '/pages/myOrder/myOrder',
      //   length: '12'
      // },
      // {
      //   icon: 'https://linkonofficail.obs.myhuaweicloud.com/sanxingdui/icon-my2.png',
      //   title: '我的优惠券',
      //   url: '/pages/coupon/coupon'
      // },
      // {
      //   icon: 'todo-list-o',
      //   title: '积分商城',
      //   url: '/pages/my-active/my-active'
      // },
      // {
      //   icon: 'https://linkonofficail.obs.myhuaweicloud.com/sanxingdui/icon-my3.png',
      //   title: '电子发票',
      //   url: '/pages/invoice/invoice'
      // },
      {
        icon: 'https://linkonofficail.obs.myhuaweicloud.com/sanxingdui/icon-my4.png',
        title: '地址管理',
        url: '/pages/touristsList/touristsList'
      },
      {
        icon: 'https://linkonofficail.obs.myhuaweicloud.com/sanxingdui/icon-my5.png',
        title: '意见反馈',
        url: '/pages/feedbackList/feedbackList'
      },
      {
        icon: 'https://linkonofficail.obs.myhuaweicloud.com/sanxingdui/icon-my6.png',
        title: '关于我们',
        url: '/pages/instructions/instructions?id=3'
      },
      {
        icon: 'https://linkonofficail.obs.myhuaweicloud.com/sanxingdui/icon-my7.png',
        title: '使用说明',
        url: '/pages/instructions/instructions?id=2'
      },
      {
        icon: 'https://linkonofficail.obs.myhuaweicloud.com/sanxingdui/icon-my8.png',
        title: '推荐注册',
        url: '/pages/instructions/instructions?id=9'
      }
    ],
    customerInfo: {},
    token: '',
    bannerBg: 'https://linkonofficail.obs.myhuaweicloud.com/sanxingdui/bannerbg.png'
  },

  // 跳转页面
  navigateTo(e) {
    switch (e.currentTarget.dataset.title) {
      case '我的订单':
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
      case '积分商城':
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
      case '电子发票':
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
      case '实名信息管理':
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
      case '我的优惠券':
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
      case '意见反馈':
        // $Toast({
        //   content: '功能开发中，敬请期待',
        //   type: 'warning'
        // });      
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
      case '注意事项':
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
      case '使用说明':
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
      case '产品介绍':
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
      case 'Q&A':
        wx.navigateTo({
          url: e.currentTarget.dataset.url
        })
        break
    }

  },
  getInfo() {
    // http.get('api/portal/v1/member/getMemberInfo').then(res => {
    //   this.setData({
    //     userInfo: res.data
    //   })
    // })
  },
  goList() {
    wx.navigateTo({
      url: '/pages/myIntegral/myIntegral',
    })
  },
  // 获取用户信息
  userLogin(code) {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      token: 1
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId 
        app.globalData.code = res.code
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})