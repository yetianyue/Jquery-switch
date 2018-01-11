# Jquery 开关效果插件
JQuery Switch plug-in

How to use
----------

默认使用
```bash
$.switch()
```

调整大小
```bash
$.switch({
  target:'.biggerSwitch',
  height:200
})
```
```bash
$.switch({
  target:'.smallerSwitch',
  height:50
})
```

开关事件的回调
```bash
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
```

动画速度调整
```bash
$.switch({
  target:'.speedSwitch',
  speed:'slow',//'slow',
  height:500
})
```
