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

$('#myBtn').on('click', function() {
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
