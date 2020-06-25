const site_red = "#F92403";

$( document ).ready(function() {
  var path = window.location.pathname;
  if (path.includes('guide')) {
    var section = path.split('/')[4].split('-')[0];
    var section_splits = section.split("_").map(function(x) {
      return parseInt(x, 10)
    })
    // if (section_splits.length == 1) {
    //   $('section-nav').children().eq();
    // }
    $('.section-nav').children().eq(section_splits[0]-1).css('color', site_red);
    if (section_splits[0] > 1) {
      $('.subsection-nav').children().eq(section_splits[1]-1).css('color', site_red);
    }
    if (section_splits.length == 2) {

    }
    // if (section_splits.length == 3) {
    //   $('.subsection-nav').css('display', 'block');
    // }
    // console.log(section, section_splits);

  }

});
