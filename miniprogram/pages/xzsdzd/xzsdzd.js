// miniprogram/pages/xzsdzd/xzsdzd.js
// 导入Ajax的promise封装函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  sdyg : function(){
   
    wx.navigateTo({
      url: '../index/index',
    })
  },
  tzzxyg:function(){
    //生成从minNum到maxNum的随机数
    var arr = []
    for (let a = 0; a < 6; a++) {
      var Array = [];
      for (var i = 0; i < 3; i++) {
        var res = Math.round(Math.random());  //四舍五入。
        Array.push(res);
      }
      arr.push(Array)

    }

    wx.navigateTo({
      url: '../zxyg/zxyg?querba=' + JSON.stringify(arr) ,
    })
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
    this.isShow = false;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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