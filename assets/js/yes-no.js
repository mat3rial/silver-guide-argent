const color = "#F92403";
// const right_color = "green";
var path = window.location.pathname;
console.log(path);
var guideButton = $('.nav-yes-no').find('.guide-button');
var _href = guideButton.attr('href');
var answered = 0;
var count = 0;
$( document ).ready(function() {
  // $('.choices div').on('click', function() {
  //
  // });
  if (['2_1_2'].some(v => path.includes(v))) {
    $('.outer-yes-no-wrapper').each(function(i) {
      if (i > 0) {
        $(this).css('display', 'none');
      }
    })
    $('.choices div').hover(function(){
      if (!$(this).parent().hasClass('used')) {
        $(this).toggleClass('hover');
      }
    });
    // ONLY SHOW NEXT YES/NO, UNLESS LAST, THEN SHOW NEXT BUTTON

    $('.right').on('click', function() {
      console.log($('.outer-yes-no-wrapper').length);
      if (!$(this).parent().hasClass('used')) {
        if ($(this).parents('.outer-yes-no-wrapper').hasClass('nav-yes-no') && count == 2) {
          $(this).parents('.outer-yes-no-wrapper').find('.guide-button').slideDown('fast');
          guideButton.attr('href', _href + $(this).attr('data-link'));
          console.log($(this).attr('data-link'));
        } else {
          $(this).parents('.outer-yes-no-wrapper').next('.outer-yes-no-wrapper').slideDown('fast');
        }
        $(this).addClass('active');
        $(this).parent().addClass('used');
        $(this).removeClass('hover');

        if ($(this).siblings('.wrong').hasClass('active')) {
          $(this).parents('.outer-yes-no-wrapper').find('.incorrect-message').slideUp('fast');
          $(this).siblings('.wrong').removeClass('active');
        }
        // $(this).parents('.outer-yes-no-wrapper').find('.correct-message').slideDown('fast');
        answered = 1;
        count += 1;
      }
    });

    // SLIDE DOWN GUIDE BUTTON AND DON'T SHOW NEXT BUTTON

    $('.wrong').on('click', function() {
      if (!$(this).parent().hasClass('used'))  {
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
      }
    });
  } else {
    $('.choices div').hover(function(){
      if (!$(this).hasClass('active')) {
        $(this).toggleClass('hover');
      }
    });
    $('.right').on('click', function() {
      if ($(this).parents('.outer-yes-no-wrapper').hasClass('nav-yes-no')) {
        guideButton.slideDown('fast');
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
  }

});
