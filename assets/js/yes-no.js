const color = "#F92403";
// const right_color = "green";
var guideButton = $('.nav-yes-no').find('.guide-button');
var _href = guideButton.attr('href');
var answered = 0;
$( document ).ready(function() {
  $('.choices div').hover(function(){
    if (!$(this).hasClass('active')) {
      $(this).toggleClass('hover');
    }
  });
  // $('.choices div').on('click', function() {
  //
  // });
  $('.right').on('click', function() {
    // $(this).css({
    //   'background-color': color,
    //   'color': "white"
    // });
    if ($(this).parents('.outer-yes-no-wrapper').hasClass('nav-yes-no')) {

      // var _href = guideButton.attr('href');
      guideButton.slideDown('fast');
      // guideButton.attr('href',function(i,str) {
      //   return str + $(this).attr('data-link');
      // });
      guideButton.attr('href', _href + $(this).attr('data-link'));
      console.log($(this).attr('data-link'));
    }
    $(this).addClass('active');
    $(this).parent().addClass('used');
    $(this).removeClass('hover');

    if ($(this).siblings('.wrong').hasClass('active')) {
      $(this).parents('.outer-yes-no-wrapper').find('.incorrect-message').slideUp('fast');
      $(this).siblings('.wrong').removeClass('active')
    }
    $(this).parents('.outer-yes-no-wrapper').find('.correct-message').slideDown('fast');
    answered = 1
  });
  $('.wrong').on('click', function() {
    if ($(this).parents('.outer-yes-no-wrapper').hasClass('nav-yes-no')) {
      var guideButton = $(this).parents('.nav-yes-no').find('.guide-button');
      // var _href = guideButton.attr('href');
      guideButton.slideDown('fast');
      // guideButton.attr('href',function(i,str) {
      //   return str + $(this).attr('data-link');
      // });
      guideButton.attr('href', _href + $(this).attr('data-link'));
      console.log($(this).attr('data-link'));
    }
    $(this).addClass('active');
    $(this).parent().addClass('used');
    $(this).removeClass('hover');

    if ($(this).siblings('.right').hasClass('active')) {
      $(this).parents('.outer-yes-no-wrapper').find('.correct-message').slideUp('fast');
      $(this).siblings('.right').removeClass('active');
    }
    $(this).parents('.outer-yes-no-wrapper').find('.incorrect-message').slideDown('fast');
    answered = 1
  });
  if (answered == 1) {

  }
});
