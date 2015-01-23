$(document).ready(function () {
  var hash = document.URL.substr(document.URL.indexOf('#')+1);

  if('!' == hash) {
    $('#indisponible').show();
  } else {
    $('#indisponible').hide();
  }

  setTimeout(function() { location.reload() },30000);

  $("div#shuffle").randomize("div.row", "div.span6");
});

(function($) {
  
  $.fn.randomize = function(tree, childElem) {
    return this.each(function() {
      var $this = $(this);
      if (tree) $this = $(this).find(tree);
      var unsortedElems = $this.children(childElem);
      var elems = unsortedElems.clone();
      
      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      for(var i=0; i < elems.length; i++)
        unsortedElems.eq(i).replaceWith(elems[i]);
    });    
  };

})(jQuery);
