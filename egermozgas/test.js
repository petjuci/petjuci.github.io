$(document).ready(function() {

    $('.hover').mousemove(function(e){
    
    var hovertext=$(this).attr('hovertext');
    
    $('#hu').text(hovertext).show();
    
    $('#hu').css('top', e.clientY+10).css('left', e.clientX+10);
    
    }).mouseout(function() {
    
    $('#hu').hide();
    
    });
    
    });