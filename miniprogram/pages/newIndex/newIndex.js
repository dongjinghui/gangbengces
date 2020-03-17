// miniprogram/pages/newIndex/newIndex.js
// 导入Ajax的promise封装函数
import fetch from '../../utils/fetch.js';
// 导入runtime.js,让微信小程序支持async和await
import regeneratorRuntime from "../../utils/runtime.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    
  
      // 轮播图数据
    imageList: [
      {
        "id": 1,
        "image": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/xhzhanye/banner-02.png",
        "link": ""
      },
      {
        "id": 2,
        "image": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/xhzhanye/banner-01.png",
        "link": "/pages/list/list?cat=10"
      }
    ],
    categories: [{
      "id": 1,
      "name": "钢镚测算",
      "icon": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/小图标/铜钱.png",
      "url": "../xzsdzd/xzsdzd"
    },
      {
        "id": 2,
        "name": "称骨",
        "icon": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/小图标/称骨算卦 (1).png"
      },
      {
        "id": 3,
        "name": "面相",
        "icon": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/小图标/脸部.png"
      },
      {
        "id": 4,
        "name": "八字精批",
        "icon": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/小图标/算命大全.png"
      },
      {
        "id": 5,
        "name": "起名",
        "icon": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/小图标/起名改名.png"
      },
      {
        "id": 6,
        "name": "婚恋",
        "icon": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/小图标/1婚恋感情。.png"
      },
      {
        "id": 7,
        "name": "工作",
        "icon": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/小图标/工作.png"
      },
      {
        "id": 8,
        "name": "乔迁",
        "icon": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/小图标/乔迁.png"
      },
      {
        "id": 9,
        "name": "装修",
        "icon": "cloud://gbcesuan-n3coo.6762-gbcesuan-n3coo-1301413735/image/小图标/装修.png"
      }]
    
  },
  bindDepot:function(e){
    let id = e.currentTarget.dataset.id
    alert(id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // //获取九宫格数据
    // this.getcategories().then(()=>{
    //   console.log("打印成功…………")
    // },()=>{
    //   console.log("")
    // })
    // this.data.categories = this.data.posts;
    // this.setData(this.data);
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