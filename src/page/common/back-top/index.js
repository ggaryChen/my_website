require('./index.css');
$('.back').hide();
$(window).scroll(function(){
	var $scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//兼容浏览器
    if($scrollTop >150){//滚动高度可调
        $(".back").show();
    }else{ 
        $(".back").hide();
    };	
    });
$('.back').click(function(){
    // console.log($('body,html').scrollTop);
    $('body,html').animate({scrollTop:0},1000)
});