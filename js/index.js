// pc逻辑
function INDEX_PC(){
    var self = this;

    self.init = init;

    console.log('--- 执行PC端逻辑 ---');

    // 目标元素
    var firstMenuBtn = $("#meun1_1");   
    var meunS = $("#meun2");
    var descs = $(".floor1 .desc");
    var viewItems = $(".floor1 .imgView")



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
        
        /* --- floor1上的descUI交互 --- */
        descs.mouseenter(function(){
            console.log( $(this).prev() );
            $(this).prev().find(".hbg").css({'background':'rgba(0,0,0,0.4)'})
                            .siblings("img").css({'transform':'scale(1.1)'});
        }).parent().mouseleave(function(){
            $(this).find('.hbg').css({'background':'rgba(0,0,0,0)'})
                   .siblings('img').css({'transform':'scale(1)'});
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

    // 获取目标元素
    var menuViewBtn = $("#viewBtn");
    var menuView = $("#dropMenu");
    var mainMenuMain = $("#mainMenuView");
    var goSubMenu = $("#btnMenu");
    var subMenuView = $("#subMenuView");
    var backMenu = $("#btnsubMenu");

    // DOM加载
    function initDom(){

    }

    // 页面行为
    function initEvent(){

        /** ---- 一级菜单UI交互 ---- **/
        menuViewBtn.click(function(){
            if( $(this).hasClass('icon-liebiao2') ){
                // 改变当前按钮icon
                $(this).removeClass('icon-liebiao2').addClass('icon-shanchu2');

                // 阻止滚屏穿透
                $('body').addClass('noScollView');

                // 菜单栏显示
                console.log("111111111111111");
                menuView.animate({
                    top:'0%'
                },500).children().animate({
                    opacity: '1'
                },1000);   

            }else{
                // 改变当前按钮icon
                $(this).removeClass('icon-shanchu2').addClass('icon-liebiao2');

                // 取消阻止滚屏穿透
                $('body').removeClass('noScollView');
                
                // 菜单栏关闭
                menuView.animate({
                    top:'-100%'
                },1000).children().animate({
                    opacity: '0.1'
                },500);
            
            }

        });

        /** ---- 二级菜单UI交互 ---- **/ 
        goSubMenu.click(function(){
            mainMenuMain.animate({
                opacity: '0',
                left: '150%'
            },1000);
          
            subMenuView.animate({
                opacity: '1',
                left: '50%'  
            },1000);

        });
        backMenu.click(function(){
            subMenuView.animate({
                opacity: '0',
                left: '-100%'     
            },1000); 
            mainMenuMain.animate({
                opacity: '1',
                left: '50%'
            },1000);
        });
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