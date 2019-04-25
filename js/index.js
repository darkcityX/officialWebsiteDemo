// pc逻辑
function INDEX_PC(){
    var self = this;

    self.init = init;

    console.log('--- 执行PC端逻辑 ---');

    // 目标元素
    var firstMenuBtn = $("#meun1_1");   // 车型
    var meunS = $("#meun2");



    // DOM加载
    function initDom(){

    }

    // 页面行为
    function initEvent(){
        /* --- 二级菜单显示与隐藏 --- */ 
        firstMenuBtn.mouseenter(function(){
            $(this).find("a").append("<span class='iconfont icon-down'></span>");
            meunS.animate({
                top:'88px',
                opacity: '1'
            },1000);    
        });  
        meunS.mouseleave(function(){
            firstMenuBtn.find("a span").remove();
            $(this).animate({
                top:'48px',
                opacity: '0'
            },1000);    
        });     
    }

    function init(){
        initDom();
        initEvent();
    }

}

// 移动逻辑
function INDEX_MOBILE(){
    var self = this;

    self.init = init;

    console.log('--- 执行移动端逻辑 ---');

    // DOM加载
    function initDom(){

    }

    // 页面行为
    function initEvent(){

    }

    function init(){
        initDom();
        initEvent();
    }

}




/* --- 入口 --- */
$(function(){ 
    if( CONST.checkDevice() === 1 ){
        new INDEX_MOBILE().init();
    }else if( CONST.checkDevice() === 2 ){
        new INDEX_PC().init();
    }else{
        alert("--- 未知设备! ---");
    }
});