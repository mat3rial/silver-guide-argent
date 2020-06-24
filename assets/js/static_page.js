$( document ).ready(function() {
  var grid = $('.static_page').find('.column-two')
  grid.children().each(function(id,item) {
    if ($(item).is("p") && $(item).next().is("h1,h2,hr")) {
      $(item).css('margin-bottom', '50px');
    }
  })
});
