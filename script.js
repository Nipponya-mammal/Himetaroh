$(function() {

  $(".type").click(
    function(){
    $(".ask2").fadeIn(4000);
    $(".content").fadeOut();
   }); 

   $(".click2").click(
    function(){
    $(".ask2").fadeOut();
    $(".content").fadeIn(3000);
    
   }); 



});


