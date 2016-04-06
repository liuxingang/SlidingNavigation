$(document).ready(function() {
    var $active = $("#active"); //活动元素
    var activeWidth = $active.innerWidth(); //获得滑动元素宽度
    var activeLeft = $active.position().left; //获得active滑动元素left
    var $navSlide = $("#nav-slide");
    $navSlide.css({ width: activeWidth, left: activeLeft }); //初始状态下，动画滑块所在位置


    $("#nav-menu li").hover(function() {
        var index = $(this).index();
        var $li_hover = $("#nav-menu").find("li").eq(index); //鼠标移动到的li元素 
        //利用触发的li元素索引获取其left位置和它的宽度 
        var width = $li_hover.innerWidth();
        var left = $li_hover.position().left;
        $navSlide.stop().animate({
            width: width,
            left: left
        }, 300)
    }, function() {
        //鼠标离开li元素时，动画滑块返回初始元素位置 
        $navSlide.stop().animate({
            width: activeWidth,
            left: activeLeft
        })
    })
})
