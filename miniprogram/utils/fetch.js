function fetch(options = {}){
  return new Promise( (resolve,reject)=>{
    wx.request({
      url: options.url,
      method: options.method,
      dataType: options.dataType,
      success:function(res){
        console.log(res)
        resolve(res);
      },
      fail:function(error){
        console.log(error)
        reject(error);
      }
    })
  })
}
export default fetch;