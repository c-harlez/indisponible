$(document).ready(function () {
  var hash = document.URL.substr(document.URL.indexOf('#')+1);

  if('!' == hash) {
    $('#indisponible').show();
    setTimeout(function() { location.reload(); },30000);
  } else {
    $('#indisponible').hide();
  }

  $("div#shuffle").randomize("div.row", "div.span6");

});
