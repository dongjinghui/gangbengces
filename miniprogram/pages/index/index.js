//index.js
//获取应用实例
// var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    userInfo: {},
    arroo:[],
    arrall:[],
    num :'',
    h1:[],
    h2:[],
    h3:[],
    h4:[],
    h5:[],
    h6:[],
    jieg:[],
    depot: [
      "字", "花"
    ],
  },
  bindDepotChangeh11: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh11: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh11]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh12: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh12: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh12]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh13: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh13: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh13]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh21: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh21: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh21]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh22: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh22: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh22]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh23: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh23: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh23]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh31: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh31: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh31]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh32: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh32: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh32]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh33: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh33: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh33]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh41: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh41: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh41]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh42: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh42: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh42]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh43: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh43: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh43]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh51: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh51: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh51]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh52: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh52: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh52]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh53: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh53: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh53]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh61: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh61: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh61]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh62: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh62: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh62]
    this.bindChange(id, srvalue)
  },
  bindDepotChangeh63: function (e) {
    var id = e.currentTarget.dataset.id
    this.setData({
      depotindexh63: e.detail.value
    })
    var srvalue = this.data.depot[this.data.depotindexh63]
    this.bindChange(id, srvalue)
  },

  bindChange:function(id , srvalue){
    var id = id
    // console.log(id)
    var arrall = this.data.arrall
    var fals = false;
    var srvalue = srvalue
    if(srvalue == ''){
      return;
    }
    if (srvalue != '字' && srvalue != '花'){
      wx.showToast({
        title: '请输入字或花',
        icon: 'none',
        duration: 2000
      })
    }else{
      if(srvalue =='字'){
        this.data.arroo={
        type:id,
        num:1
        };
      }else{
        this.data.arroo = {
          type: id,
          num: 0
        };
      }
     
      for(let a =0;a<arrall.length;a++){
        let hr = arrall[a].type;
        let vual = arrall[a].num
        if (hr ==id){
          arrall.splice(a, 1);
          vual = this.data.arroo.num
         
          this.data.arrall = {
            type: id,
            num: vual
            
          };
          fals = true
          arrall.push(this.data.arroo)
        }
      }
      if(fals != true){
        arrall.push(this.data.arroo)
      }
      
      this.setData({
        arrall: arrall
    })   
     
    }
  },
 
 
  order:function(e){
    let h1 = this.data.h1
    let h2 = this.data.h2
    let h3 = this.data.h3
    let h4 = this.data.h4
    let h5 = this.data.h5
    let h6 = this.data.h6
    let jieg = this.data.jieg
    // wx.showToast({
    //   title: "",
    //   icon: 'none',
    //   duration: 5000
    // })
    if (this.data.arrall.length<18){
      wx.showToast({
      title: "全部填完好嘛",
      icon: 'none',
      duration: 5000
    })
    }else{
      var queryBean = this.data.arrall
    for (let a = 0; a < queryBean.length; a++) {
      // console.log("a=="+a)
      let pe = queryBean[a].type
      if (pe.indexOf('h1') != -1) {
      
        h1.push(queryBean[a].num)
        this.setData({
          h1: h1
        })
      } else if (pe.indexOf('h2') != -1){
        h2.push(queryBean[a].num)
        this.setData({
          h2: h2
        })
      } else if (pe.indexOf('h3') != -1){
        h3.push(queryBean[a].num)
        this.setData({
          h3: h3
        })
      } else if (pe.indexOf('h4') != -1) {
        h4.push(queryBean[a].num)
        this.setData({
          h4: h4
        })
      } else if (pe.indexOf('h5') != -1) {
        h5.push(queryBean[a].num)
        this.setData({
          h5: h5
        })
      } else if (pe.indexOf('h6') != -1) {
        h6.push(queryBean[a].num)
        this.setData({
          h6: h6
        })
      }
     
    }
    jieg.push(this.arrayif(h6)) 
    jieg.push(this.arrayif(h5)) 
    jieg.push(this.arrayif(h4)) 
    jieg.push(this.arrayif(h3)) 
    jieg.push(this.arrayif(h2)) 
    jieg.push(this.arrayif(h1)) 
    // console.log("jieg===="+jieg)
      wx.navigateTo({
        url: '../xiangq/xiangq?queryBean=' + JSON.stringify(jieg),
      })
  }
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  arrayif(str){
    // console.log(arr)
    let char = '0'
    // let oarr = [1,1,1]
    // let tarr = [1,1,0]
    // let sarr = [1,0,0]
    // let farr = [0,0,0]
    var pos;
    var arr = [];
    pos = str.toString().indexOf(char);
    while (pos > -1) {
      arr.push(pos);
      pos = str.toString().indexOf(char, pos + 1);
    }
    //老阳
    if (arr.length == 0){
      return '0'
      //少阳
    } else if (arr.length  == 1){
      return '1'
      //少阴
    } else if (arr.length  == 2) {
      return '0'
    //老阴
    } else if (arr.length== 3) {
      return '1'
    }
    
    // return arr.length;
    // console.log("long==="+arr.length)
  }
})
