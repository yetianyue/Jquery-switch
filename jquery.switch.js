/**
 * Created by yetianyue on 2018/1/11.
 * 使用方法：
 *  $.switch(opt); opt{target:目标,height:长度,speed:动画速度,callback,回调}
 */

$.extend({
    switchStyle : false,
    switch:function(opt){
        var options = $.extend({
            target  : '.appleswitch',
            height  : 100,
            speed   : 'fast',
            callback : false
        },opt)

        var switchs = $(options.target)
        if (switchs.length <= 0) {
            return false
        }
        var divs = '<div class="switch-button"></div><div class="switch-bg"></div>'
        switchs.html(divs)
        setStyle()

        var btns = switchs.find('.switch-button')

        $.each(btns,function (n,m) {
            var that = $(m)
            var parentObj = that.parent()
            var nextObj = that.next()
            var className = parentObj.attr('class')
            if (options.height !=100) {
                parentObj.css('width',options.height)
                parentObj.css('height',options.height/2)
                parentObj.css('border-radius',options.height)
                nextObj.css('height',options.height/2)
                nextObj.css('border-radius',options.height)
                that.css('width',options.height/2)
                that.css('height',options.height/2)
                that.css('border-radius',options.height/2)
            }
            
            if (className.indexOf('appleswitch') <= 0) {
                parentObj.attr('class',parentObj.attr('class')+" appleswitch")
            }

            if(className.indexOf('switch-on') > 0){
                that.animate({left:options.height/2+'px'},options.speed)
                nextObj.animate({width:options.height+'px'},options.speed)
            }
        })

        var swAnimate = function (that) {
            var son = that.find('.switch-button'), sonbg = that.find('.switch-bg')
            var className = that.attr('class')
            var newClassName
            if (className.indexOf('switch-on') > 0 ) {
                son.animate({left:'0px'},options.speed)
                sonbg.animate({width:'0px'},options.speed)
                newClassName = className.replace(/switch-on/,'switch-off')
            }else{
                son.animate({left:options.height/2+'px'},options.speed)
                sonbg.animate({width:options.height+'px'},options.speed)
                if (className.indexOf('switch-off') < 0) {
                    newClassName = className+" switch-on";
                }else{
                    newClassName =  className.replace(/switch-off/,'switch-on')
                }
                
            }
            that.attr('class',newClassName)
        }

        btns.click(function(res){
            var that = $(this)
            var parentObj  = that.parent()
            swAnimate(parentObj)
            var callback =  options.callback || parentObj.attr('callback')
            if (callback != undefined ) {
                parentObj.switchAnimate = swAnimate;
                if(callback(parentObj) === false){
                    swAnimate(parentObj)
                }
            }
        });
        
        function setStyle(){
            var style  = {
                appleswitch : {
                    width: '100px',
                    height: '50px',
                    'border-radius': '50px',
                    border:'1px solid rgba(0,0,0,0.15)',
                    position: 'relative',
                    'overflow':'hidden'
                },
                'switch-button':{
                    width: "50px",
                    height: "50px",
                    'border-radius': "50px",
                    position: "absolute",
                    background: "white",
                    'z-index':'2',
                    'box-shadow': "0px 2px 4px rgba(0,0,0,0.4)",
                    cursor: "pointer"
                },
                'switch-bg':{
                    width: '0px',
                    height: '50px',
                    'border-radius': '50px',
                    position: 'absolute',
                    'z-index':'1',
                    background: "rgba(0,184,0,0.8)"
                }
            }
            if ($.switchStyle === false) {
                var str = "";
                $.each(style,function(n,m){
                    str += "."+n+"{";
                    $.each(m,function(k,v){
                        str += k+":"+v+";"
                    })
                    str += "}"
                })
                $('head').append('<style type="text/css">'+str+'</style>');
                $.switchStyle = style;
            }
        }
    }
});