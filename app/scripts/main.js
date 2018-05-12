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

  $('#contact-person-marta-popover-activator')
    .popover({
      html: true,
      placement: 'top',
      content: $('#contact-person-marta-template').html(),
      toggle: 'popover'
    });

  $('#contact-person-zdzislaw-popover-activator')
    .popover({
      html: true,
      placement: 'top',
      content: $('#contact-person-zdzislaw-template').html(),
      toggle: 'popover'
    });

  $('#contact-person-daniela-popover-activator')
    .popover({
      html: true,
      placement: 'top',
      content: $('#contact-person-daniela-template').html(),
      toggle: 'popover'
    });

  new WOW().init();
})();
