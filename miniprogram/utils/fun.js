
let gatime;
let fun;
function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  } 
  gatime = gapTime
  fun = fn
  // 返回新的函数
  return aa()
}
function aa () {
  let _lastTime = null
  let _nowTime = + new Date()

  if (_nowTime - _lastTime > gatime || !_lastTime) {
    fun.apply(this, arguments)   //将this和参数传给原函数
    _lastTime = _nowTime
  }
}
module.exports = {
  throttle: throttle
}
