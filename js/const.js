/** ----------- 公共js文件 -------------- **/
function Const(){
    var self = this;
    /** 
     * 方法1—— 判断设备
     * 返回值： 1：手持   2：pc
     * 
     *  **/
    self.checkDevice = function(){
        var reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
        if ( navigator.userAgent.match(reg) ) {
            /*window.location.href="你的手机版地址";*/
            return 1;
        }
        else {
            /*window.location.href="你的电脑版地址";    */
            return 2;
        }
    }

}
var CONST = new Const();