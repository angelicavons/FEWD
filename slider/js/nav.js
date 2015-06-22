/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
  $('#hamburger').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
if ($('#container').hasClass('show-nav')) {
  // Do things on Nav Close
  $('#container').removeClass('show-nav');
  $('#hamburger').removeClass('show-nav');
} else {
  // Do things on Nav Open
  $('#container').addClass('show-nav');
  $('#hamburger').addClass('show-nav');
}

//$('#site-wrapper').toggleClass('show-nav');
}
