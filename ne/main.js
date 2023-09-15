// find elements
var banner = $("#banner-message")
var button = $("button")
// when first load the window
if($('.option').length>2){

$('.option').each(function(index){
var option=$(this);
if(index>1){
option.toggleClass('hidden');
}
})
}

// handle click and add class
button.on("click", function(){
 if($('.option').length>2){

$('.option').each(function(index){
var option=$(this);
if(index>1){
option.toggleClass('hidden');
}
});
}
});


// test

