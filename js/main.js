$('.btn-show-hide').on('click', function () {
  $('.box').toggleClass('show-box');
});

$('.btn-move').on('click', function () {
  $('.diamond').toggleClass('move-shape');
});

$('.btn-collapse-expand').on('click', function () {
  $('.panel').toggleClass('collapse');
});

$('.btn-bounce').on('click', function () {
  $('.circle').addClass('bounce');
});

$('.circle').on('animationend', function () {
  $('.circle').removeClass('bounce');
});

$('.btn-append').on('click', function () {
  $('.list').prepend('<li>New List Item</li>');
});
