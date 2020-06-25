$( document ).ready(function() {
  var path = window.location.pathname;
  if (path.includes('guide')) {
    var section = path.split('/')[4]
    console.log(path, section);
  }

});
