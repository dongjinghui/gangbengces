// miniprogram/pages/xiangq/xiangq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ne: [],
    yh:'',
    eh:'',
    sh:'',
    wh:'',
    lh:'',
    qh:'',
    bh:'',
    jh:'',
    xiangyue:'',
    shiye:'',
    jieshang:'',
    qiuming:'',
    waichu:'',
    hunlian:'',
    jiece:'',
    sqih:'',
    jieshi:'',
    texing:'',
    yunshi:'',
    xunren:'',
    shiwu:'',
    kaoshi:'',
    susong:'',
    qiushi:'',
    gaihang:'',
    kaiye:'',
    jiayun:'',
    jibing:'',
    taiyun:'',
    zinv:'',
    zhouzhuan:'',
    maimai:'',
    dengren:'',
    h1:[],
    az:'',
  },
  order:function(){
    let h1 = this.data.h1
    h1.push("aa")
    this.setData({
      h1:h1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)


    var that = this
    let h1= this.data.h1
 
    var queryBean = JSON.parse(options.queryBean);
    console.log(options.queryBean)
    console.log("queryBean===" + queryBean)
    //------------------------------------------------
    const db = wx.cloud.database({
      //这个是环境ID不是环境名称
      env: 'gbcesuan-n3coo'
    })
    //2、开始查询数据了  news对应的是集合的名称
    db.collection('onegua').where({
      _id: queryBean.toString() // 填入当前用户 openid
    }).get().then(res => {
      console.log(res.data[0])
      this.setData({
        az: 'cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/' + queryBean.toString()+'.png',
        yh: res.data[0].yh,
        eh: res.data[0].eh,
        sh: res.data[0].sh,
        wh: res.data[0].wh,
        lh: res.data[0].lh,
        qh: res.data[0].qh,
        bh: res.data[0].bh,
        jh: res.data[0].jh,
        xiangyue: res.data[0].xiangyue,
        shiye: res.data[0].shiye,
        jieshang: res.data[0].jieshang,
        qiuming: res.data[0].qiuming,
        waichu: res.data[0].waichu,
        hunlian: res.data[0].hunlian,
        jiece: res.data[0].jiece,
        sqih: res.data[0].sqih,
        jieshi: res.data[0].jieshi,
        texing: res.data[0].texing,
        yunshi: res.data[0].yunshi,
        xunren: res.data[0].xunren,
        shiwu: res.data[0].shiwu,
        kaoshi: res.data[0].kaoshi,
        susong: res.data[0].susong,
        qiushi: res.data[0].qiushi,
        gaihang: res.data[0].gaihang,
        kaiye: res.data[0].kaiye,
        jiayun: res.data[0].jiayun,
        jibing: res.data[0].jibing,
        taiyun: res.data[0].taiyun,
        zinv: res.data[0].zinv,
        zhouzhuan: res.data[0].zhouzhuan,  
        maimai: res.data[0].maimai,
        dengren: res.data[0].dengren,
           
      })
      
    })
  },
/**
 * 从下往上
 * 三个正面老阳，一个横岗，变爻（相反）
 * 两个正面为少阳，一个横杠
 * 一个正面少阴，两个横杠
 * 没有正面是老阴，两个横杠，变爻
 */
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