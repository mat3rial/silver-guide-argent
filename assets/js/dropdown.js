var dropdown = $('.dropdown-content');
console.log('ass');
$( document ).ready(function() {
  var toggle = 0;
  // $('.dropbtn').on('click', function() {
  //   if (toggle == 0) {
  //     dropdown.fadeIn(200);
  //   }
  //   else if (toggle == 1) {
  //     dropdown.fadeOut(200);
  //   }
  //   toggle += 1;
  //   toggle %= 2;
  // })
  $('.dropbtn').click(function(e){
    e.stopPropagation();
    dropdown.slideToggle("fast");
  });
  // $(document).mouseup(function(e) {
  //   if (!$('.dropbtn').is(e.target)) {
  //     dropdown.fadeOut(200);
  //     toggle = 0;
  //   }
  // });
});
$(document).on("click", function(event){
      var $trigger = $(".dropbtn");
      if($trigger !== event.target && !$trigger.has(event.target).length){
          dropdown.slideUp("fast");
      }
});