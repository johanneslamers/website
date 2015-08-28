'use strict';

$(document).ready(function() {
  console.log('$ is ready');
  $('#menu-toggler').bind('click', function(e){
    e.preventDefault();

    $('body').toggleClass('menu-open');
  });
});
