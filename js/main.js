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
  $('.circle').toggleClass('bounce');
});
