const BASE_URL = ''
const util = require("./util.js")

const send = (option) => {
  let url = BASE_URL + '/' + option.url
  let { method='POST', data } = option
  let contentType = 'application/json' // 默认值
  if (method.toLocaleUpperCase() == 'POST') {
    data = util.qs(option.data)
    contentType = 'application/x-www-form-urlencoded'
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header: {
        'content-type': contentType
      },
      success(response) {
        // 接口调用成功
        resolve(response.data)
      },
      fail(error) {
        // 接口调用失败
        reject(error)
      },
      complete(response) {
        // 接口调用结束
      }
    })
  })
}

module.exports = {
  send
}