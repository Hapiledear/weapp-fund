//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasSession:true,
    sessionLoadFail:false,
    dp_zhishu: [{ "name": "上证指数", "value": "+0.123","color":"red" }, { "name": "深证指数", "value": "-0.123","color":"green" }],
    watchData: [{ "fName": "南方大数据300A", "fCodef": "0001232", "tday_num": "+1.23", "tday_deg": "+0.11%", "today_color": "red", "tml_num": "-2.31", "tml_deg": "-0.002%", "tml_color": "green" }, { "fName": "南方大数据300B", "fCodef": "0001232", "tday_num": "+1.23", "tday_deg": "+0.11%", "today_color": "red", "tml_num": "-2.31", "tml_deg": "-0.002%", "tml_color": "green" }, { "fName": "南方大数据300C", "fCodef": "0001232", "tday_num": "+1.23", "tday_deg": "+0.11%", "today_color": "red", "tml_num": "-2.31", "tml_deg": "-0.002%", "tml_color": "green" }, { "fName": "南方大数据300D", "fCodef": "0001232", "tday_num": "+1.23", "tday_deg": "+0.11%", "today_color": "red", "tml_num": "-2.31", "tml_deg": "-0.002%", "tml_color": "green" }, { "fName": "南方大数据300E", "fCodef": "0001232", "tday_num": "+1.23", "tday_deg": "+0.11%", "today_color": "red", "tml_num": "-2.31", "tml_deg": "-0.002%", "tml_color": "green" }, { "fName": "南方大数据300F", "fCodef": "0001232", "tday_num": "+1.23", "tday_deg": "+0.11%", "today_color": "red", "tml_num": "-2.31", "tml_deg": "-0.002%", "tml_color": "green" }],
    motto: 'Hello World',
    userInfo: {},
    wxInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
