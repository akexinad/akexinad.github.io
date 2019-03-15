$(document).ready(function () {
  console.log("hello");

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
  })

  $('#contact').click(function () {
    $('html,body').animate({
      scrollTop: $("#js-contact").offset().top
    }, 'slow');
  })

  // const $name = $('#name')[0].innerHTML.split('');
  // const $title = $('#title')[0].innerHTML.split('');
  //
  // console.log($name);
  // console.log($title);
  //
  // for (let i = 0; i < $name.length; i++) {
  //   console.log($name[i]);
  // }

});
