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


// ネットでsubmitイベントを検索した結果　failed...

// function logSubmit(event) {
//   const ask2 = document.querySelector('ask2');
//   const content = document.querySelector('content');
//   content.fadeOut(1500);
//   ask2.fadeIn(1500);
//   event.preventDefault();
// }

// const form = document.getElementById('form');
// form.addEventListener('submit', logSubmit);
