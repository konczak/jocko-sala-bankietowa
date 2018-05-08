(function () {
  function resizeNavbarAnimation() {
    var $window = $(window),
      navbar = $('nav');

    if ($window.scrollTop() > 0) {
      navbar.addClass('top-nav-collapse');
    } else {
      navbar.removeClass('top-nav-collapse');
    }
  }

  function addEntranceAnimation() {
    var $this = $(this);

    $this.addClass('wow fadeIn');

    $this.attr('data-wow-delay', '0.2s')
      .attr('data-wow-duration', '2s');
  };

  function scrollSmoothly(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  };

  $(window).scroll(resizeNavbarAnimation);
  $('section').each(addEntranceAnimation);
  $(document).on('click', 'a[href^="#"]', scrollSmoothly);

  $('.carousel').carousel({
    interval: 5000
  });

  new WOW().init();
})();
