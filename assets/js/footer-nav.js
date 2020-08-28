const site_red = "#F92403";

// $( document ).ready(function() {
//   var path = window.location.pathname;
//   if (path.includes('guide')) {
//     var section = path.split('/')[4].split('-')[0];
//     var section_splits = section.split("_").map(function(x) {
//       return parseInt(x, 10)
//     })
//     console.log(section, section_splits)
//     // if (section_splits.length == 1) {
//     //   $('section-nav').children().eq();
//     // }
//     if (section_splits[0] > 1) {
//       $('.section-nav').css('border-bottom', '1px solid black');
//     }
//     $('.section-nav').children().eq(section_splits[0]-1).find('a').css('color', site_red);
//     if (section_splits.length == 2) { // SUBSUBSECTION HANDLING
//       // $('.subsection-nav').children().eq(section_splits[2]).find('a').css('color', site_red);
//       $('.subsection-nav div h4 a:contains(' + section_splits[0] + '.' + section_splits[1] + '. )').css('color', site_red);
//     }
//     else if (section_splits.length == 3) {
//       $('.subsection-nav div h4 a:contains(' + section_splits[0] + '.' + section_splits[1] + '.' + section_splits[2] + '. )').css('color', site_red);
//     }
//     else if (section_splits[0] > 1) {
//       $('.subsection-nav').children().eq(section_splits[1]-1).find('a').css('color', site_red);
//     }
//
//     // if (section_splits.length == 3) {
//     //   $('.subsection-nav').css('display', 'block');
//     // }
//     // console.log(section, section_splits);
//
//   }
//
// });

$(document).ready(function() {
  var side_nav = $('.guide-nav-wrapper');
  var path = window.location.pathname;
  if (path.includes('guide')) {
    var section = path.split('/')[3].split('-')[0];
    var section_splits = section.split("_").map(function(x) {
      return parseInt(x, 10)
    })
    console.log(section, section_splits);
    side_nav.children().eq(section_splits[0] - 1).find('h4 a').css('color', site_red);
    if (section_splits.length == 2) { // SUBSUBSECTION HANDLING
      $('.guide-nav-wrapper div div p a:contains(' + section_splits[0] + '.' + section_splits[1] + '. )').css('color', site_red);
      // $('.subsection-nav div h4 a:contains(' + section_splits[0] + '.' + section_splits[1] + '. )').css('color', site_red);
    }
    else if (section_splits.length == 3) {
      $('.guide-nav-wrapper .section-container .subsection-dropdown p a:contains(' + section_splits[0] + '.' + section_splits[1] + '.' + section_splits[2] + '. )').css('color', site_red);
    }
  }
});

$('.guide-nav-wrapper > div h4 svg').on('click', function() {
  $(this).parents('.section-container').find('.subsection-dropdown').slideToggle('fast');
});
