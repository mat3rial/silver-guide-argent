// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
var toggleFeedback = 0;
var mouse_is_inside = false;

$(document).ready(function() {
  $('.feedback-form-wrapper, .feedback-button-wrapper').hover(function(){
        mouse_is_inside=true;
        console.log('mouse inside');
    }, function(){
        mouse_is_inside=false;
        console.log('mouse not inside');
    });
    $("body").mouseup(function(e){
        if(!mouse_is_inside) {
          console.log('mouse not inside');
          console.log(toggleFeedback);
          if (toggleFeedback) {
            $('.feedback-button-wrapper').animate({
              right: '-36px'
            }, 400);
            if (window.innerWidth >= 600) {
              $('.feedback-form-wrapper').animate({
                right: '-400px'
              }, 400)
            } else {
              $('.feedback-form-wrapper').animate({
                right: '-300px'
              }, 400)
            }
            toggleFeedback = 0;
          }
        }
    });
})

// $(document).mouseup(function(e)
// {
//     var container = $(".feedback-button-wrapper");
//
//     // if the target of the click isn't the container nor a descendant of the container
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//       if (toggleFeedback) {
//         $('.feedback-button-wrapper').animate({
//           right: '-36px'
//         }, 400);
//         if (window.innerWidth >= 600) {
//           $('.feedback-form-wrapper').animate({
//             right: '-400px'
//           }, 400)
//         } else {
//           $('.feedback-form-wrapper').animate({
//             right: '-300px'
//           }, 400)
//         }
//         toggleFeedback = 0;
//       }
//     }
// });

// $(window).on('click', function(e) {
//   console.log(e.target);
//
// })

$('#myBtn').on('click', function(e) {
  e.stopPropagation();
  if (toggleFeedback) {
    $(this).parent().animate({
      right: '-36px'
    }, 400);
    if (window.innerWidth >= 600) {
      $('.feedback-form-wrapper').animate({
        right: '-400px'
      }, 400)
    } else {
      $('.feedback-form-wrapper').animate({
        right: '-300px'
      }, 400)
    }

  } else {
    if (window.innerWidth >= 600) {
      $(this).parent().animate({
        right: '364px'
      }, 400);
    } else {
      $(this).parent().animate({
        right: '264px'
      }, 400);
    }
    $('.feedback-form-wrapper').animate({
      right: '0px'
    }, 400)
  }
  // $('.feedback-form-wrapper').toggle('slide');
  toggleFeedback += 1;
  toggleFeedback %= 2;
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
