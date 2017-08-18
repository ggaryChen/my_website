require('./index.css')
$('.video-item').mouseover(function(){
    var $this = $(this);
    $this.children('.video-play').show();
    $this.css({'backgroundSize':'220px 220px','opacity':'0.8'});
});
$('.video-item').mouseout(function(e){
    var $this = $(this);
    if(!(e.relatedTarget==$this[0]||e.relatedTarget==$this.children('.video-play')[0])){
        $this.children('.video-play').hide();
    }
    $this.css({'backgroundSize':'200px 200px','opacity':'1'});
});