const wrong_color = "#F92403";
const right_color = "green";

var answered = 0;
$( document ).ready(function() {
  $('.choices div').hover(function(){
    if (answered == 0) {
      $(this).toggleClass('hover');
    }
  });

  $('.right').on('click', function() {
    if (answered == 0) {
      $(this).css({
        'background-color': right_color,
        'color': "white"
      });
      $('.correct-message').slideDown('fast');
      answered = 1
    }
  });
  $('.wrong').on('click', function() {
    if (answered == 0) {
      $(this).css({
        'background-color': wrong_color,
        'color': "white"
      });
      $('.incorrect-message').slideDown('fast');
      answered = 1;
    }
  });
});
