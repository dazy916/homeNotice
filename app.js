// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
     // baseUrl: 'http://192.168.19.95:9998/', //书记
     baseUrl: "https://test-three.linkon.me/", //测试地址
     // baseUrl: 'https://three.linkon.me/', //正式环境
  }
})
