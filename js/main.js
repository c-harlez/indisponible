$(document).ready(function () {
  var hash = document.URL.substr(document.URL.indexOf('#')+1);

  if('!' == hash) {
    $('#indisponible').show();
  } else {
    $('#indisponible').hide();
  }
});
