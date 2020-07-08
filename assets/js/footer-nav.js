const site_red = "#F92403";

$( document ).ready(function() {
  var path = window.location.pathname;
  if (path.includes('guide')) {
    var section = path.split('/')[4].split('-')[0];
    var section_splits = section.split("_").map(function(x) {
      return parseInt(x, 10)
    })
    console.log(section, section_splits)
    // if (section_splits.length == 1) {
    //   $('section-nav').children().eq();
    // }
    if (section_splits[0] > 1) {
      $('.section-nav').css('border-bottom', '1px solid black');
    }
    $('.section-nav').children().eq(section_splits[0]-1).find('a').css('color', site_red);
    if (section_splits.length > 2) { // SUBSUBSECTION HANDLING
      $('.subsection-nav').children().eq(section_splits[2]).find('a').css('color', site_red);
    }
    else if (section_splits[0] > 1) {
      $('.subsection-nav').children().eq(section_splits[1]-1).find('a').css('color', site_red);
    }

    // if (section_splits.length == 3) {
    //   $('.subsection-nav').css('display', 'block');
    // }
    // console.log(section, section_splits);

  }

});
