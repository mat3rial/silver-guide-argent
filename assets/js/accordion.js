


$( document ).ready(function() {
  var numItems = $('.example-text-wrapper').length
  $('.example-text-wrapper').each(function(index) {
    var example_num = index + 1
    console.log(example_num);
    if (!$(this).find("h4").hasClass('include-title')) {
      $(this).find("h4").append(example_num.toString());
    }
  });
  $(".example-text-wrapper").click(function(e) {
    $(this).parent().find(".example-wrapper").slideToggle("fast");
    $(this).find(".close").toggle("fast");
    $(this).find(".open").toggle("fast");
  });
});
