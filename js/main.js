$(document).ready(function () {
  console.log("la volonta` costa niente");

  $('body').addClass('fade-in');

  $('#home').click(function () {
    $('html, body').animate({
      scrollTop: $('body').offset().top
    }, 'slow');
  });

  $('#projects').click(function () {
    $('html, body').animate({
      scrollTop: $('#js-projects').offset().top
    }, 'slow');
  });

  $('#skills').click(function () {
    $('html, body').animate({
      scrollTop: $("#js-skills").offset().top
    }, 'slow');
  });

  $('#contact').click(function () {
    $('html,body').animate({
      scrollTop: $("#js-contact").offset().top
    }, 'slow');
  });

});
