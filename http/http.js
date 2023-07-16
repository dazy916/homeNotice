const app = getApp(); // 获取全局实例
const baseUrl = app.globalData.baseUrl; // baseUrl放在app里面
const startLoading = () => {
  wx.showLoading({
    title: '加载中...'
  })
}
const hideLoading = () => {
  wx.hideLoading()
}

/**
 * 请求方法
 * @param {string} url 请求地址
 * @param {string} method 请求方式
 * @param {object} data 请求参数
 * @param {object} header header
 * @returns {Promise<T>} Promise
 */
function request(url, method, data = {}, header = {}) {
  // 处理post
  // if (method === 'POST') {
  //     header['content-type'] = 'application/x-www-form-urlencoded'
  // }
  // Authorization: Bearer tokenString
  // 处理token

  if (app.globalData.customerToken) {
    header['Authorization'] = `Bearer ${app.globalData.customerToken}`
  }
  startLoading()
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method,
      data,
      header,
      timeout: 120000,
      success: res => {
        switch (res.statusCode) {
          case 200:
            resolve(res.data);
            break
          case 401:
            wx.showToast({
              title: res.data.resultMessage ?? '用户没有访问权限',
              icon: 'error'
            })

            break
          case 403:
            wx.showToast({
              title: res.data.resultMessage ?? '资源不可用',
              icon: 'error'
            })

            break
          case 404:
            wx.showToast({
              title: res.data.resultMessage ?? '404 Not Found',
              icon: 'error'
            })
            break
          case 500:
            if (res.data.code > 0) {
              return reject(res)
              // if (res.data.msg === '手慢了，优惠名额被人先占了') {
              //   return reject(res)
              // } else {
              //   app.toastError(res.data.msg)
              // }
            } else {
              app.toastError('请求错误')
            }
            break
          case 502:
            app.toastError(res.data.msg ?? '错误网关')
            break
          case 503:
            wx.showToast({
              title: res.data.resultMessage ?? '服务器维护中',
              icon: 'error'
            })
            break
          default:
            wx.showToast({
              title: res.data.resultMessage ?? '请求错误',
              icon: 'error'
            })
            // app.toastError(res.data.resultMessage || '请求错误');
            // return reject(res.data)
            break
        }
      },
      fail: err => {
        wx.showToast({
          title: err.msg || '网络超时，请稍后重试！',
          icon: 'error'
        })
        // app.toastError('网络超时，请稍后重试！')
        reject({
          resultMessage: '网络超时，请稍后重试！',
          resultCode: 0
        });
        hideLoading();
      },
      complete: (r) => {
        hideLoading()
      }
    })
  })
}
module.exports = {
  get: function (url, data, header) {
    return request(url, "GET", data, header)
  },
  post: function (url, data, header) {
    return request(url, "POST", data, header)
  }
}