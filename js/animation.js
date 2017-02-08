$('.fbcircle').hover(function () {
     $('.facebook').addClass('fbcolor');
}, 
function () {
     $('.facebook').removeClass('fbcolor');
}); 

$('.twittercircle').hover(function () {
     $('.twitter').addClass('twittercolor');
}, 
function () {
     $('.twitter').removeClass('twittercolor');
}); 

$('.mailcircle').hover(function () {
     $('.mail').addClass('mailcolor');
}, 
function () {
     $('.mail').removeClass('mailcolor');
}); 


function getAttention(){
    $('.name').toggleClass('grow');
}

setInterval(function() {
  getAttention();
}, 5000);