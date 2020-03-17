//app.js
App({
  onLaunch: function () {
    var temp = [
    ]
    wx.setStorage({
      key: "mySelectCurs",
      data: temp
    }),

      wx.setStorage({
        key: "myMainCur",
        data: {
          "name": "CNY",
          "country": "中国",
          "rate": 0.0,
          "amount": 100.0,
          "en": "RMB",
          "cn": "人民币",
          "jp": "香港ドル",
          "ko": "홍콩 달러"
        }
      }),
      wx.cloud.init({

        traceUser: true,

      })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              console.log("userInfo" + res.userInfo)
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
