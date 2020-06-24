const color = "#F92403";
// const right_color = "green";

var answered = 0;
$( document ).ready(function() {
  $('.choices div').hover(function(){
    if (!$(this).hasClass('active')) {
      $(this).toggleClass('hover');
    }
  });

  $('.right').on('click', function() {
    // $(this).css({
    //   'background-color': color,
    //   'color': "white"
    // });
    $(this).addClass('active');
    $(this).parent().addClass('used');
    $(this).removeClass('hover');
    $(this).parents('.outer-yes-no-wrapper').find('.correct-message').slideDown('fast');
    if ($(this).siblings('.wrong').hasClass('active')) {
      $(this).parents('.outer-yes-no-wrapper').find('.incorrect-message').slideUp('fast');
      $(this).siblings('.wrong').removeClass('active')
    }
    answered = 1
  });
  $('.wrong').on('click', function() {
    $(this).addClass('active');
    $(this).parent().addClass('used');
    $(this).removeClass('hover');
    $(this).parents('.outer-yes-no-wrapper').find('.incorrect-message').slideDown('fast');
    if ($(this).siblings('.right').hasClass('active')) {
      $(this).parents('.outer-yes-no-wrapper').find('.correct-message').slideUp('fast');
      $(this).siblings('.right').removeClass('active');
    }
    answered = 1
  });
  if (answered == 1) {

  }
});
