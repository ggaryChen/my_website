require('./index.css')
// 防抖
// function debounce(func, wait, immediate){  
//     var timeout;  
//     return function(){  
//         var context = this,  
//               args = arguments;  
//         var later = function(){  
//             timeout = null;  
//             if(!immediate) func.apply(context, args);  
//         };  
//         var callNow = immediate && !timeout;  
//         if(!timeout){  
//         clearTimeout(timeout);  
//         timeout = setTimeout(later, wait);  
//     }  
//         if(callNow) func.apply(context, args);  
//     };  
// }   
// $('.video-item').mouseover(debounce(function(){
//     var $this = $(this);
//     $this.animate({'backgroundSize':'320px','opacity':'0.8',});
// },300,true));
// $('.video-item').mouseout(debounce(function(){
//     var $this = $(this);
//     $this.animate({'backgroundSize':'200px','opacity':'1'});
// },300,true));
// 弃用js,采用css实现hover