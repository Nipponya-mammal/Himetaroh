$(function() {

  $(".type").click(
    function(){
    $(".ask2").fadeIn(6000);
    $(".content").fadeOut();
   }); 

   $(".click2").click(
    function(){
    $(".ask2").fadeOut();
    $(".content").fadeIn(5000);
    
   }); 



});


