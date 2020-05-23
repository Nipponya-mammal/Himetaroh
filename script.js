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

  //  通常の記述でうまくいかない時　ドキュメント全体でイベントを受け取る
  //  $(document).on('click', '.click1',
  //   function(){
  //   $(".details").fadeIn(3000);
  //  }); 



});


