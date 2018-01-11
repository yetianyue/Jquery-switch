# Jquery 开关效果插件
JQuery Switch plug-in

###默认使用
$.switch()

###调整大小
$.switch({
  target:'.biggerSwitch',
  height:200
})

$.switch({
  target:'.smallerSwitch',
  height:50
})
###开关事件的回调
$.switch({
  target:'.callbackSwitch',
  callback:function(that){
    //return false  返回原始状态
    if(that.attr('class').indexOf('on')){
      //开启
    }else{
      //关闭
    }
  }
})
###动画速度调整
$.switch({
  target:'.speedSwitch',
  speed:'slow',//'slow',
  height:500
})
