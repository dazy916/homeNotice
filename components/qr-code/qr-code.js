// components/qr-code/qr-code.js
// let drawQrcode = require("../../utils/weapp.qrcode.esm.js");
import drawQrcode from "../../utils/weapp.qrcode.esm.js"
const {
  $Toast
} = require('../../dist/base/index');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showData: {
      type: String,
      value: null
    },
    observers: (v) => {
      console.info(v)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    qrcodeImg: null, //二维码图片
    canvasImg: null
  },
  observers: {
    'showData'(v) {
      this.setData({
        canvasImg: v
      })
    }
  },
  lifetimes: {
    ready: function () {
      // 页面被展示
      let that = this;
      // that.setData({
      //   qrcodeImg: ''
      // })
      const query = that.createSelectorQuery()
      query.select('#myQrcode')
        .fields({
          node: true,
          size: true
        })
        .exec((res) => {
          if (res && res[0]) {
            var canvas = res[0].node
            // 调用方法drawQrcode生成二维码
            drawQrcode({
              canvas: canvas,
              width: 180,
              height: 180,
              canvasId: 'myQrcode',
              text: that.data.canvasImg
            })
            wx.canvasToTempFilePath({
              canvasId: 'myQrcode',
              canvas: canvas,
              success: (res) => {
                console.log('二维码临时路径：', res.tempFilePath)
                that.setData({
                  qrcodeImg: res.tempFilePath
                })
              }
            })
          } else {
            $Toast({
              type: 'warning',
              content: '未获取到节点'
            })
          }
        })
    },

    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  pageLifetimes: {
    show: function () {

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})