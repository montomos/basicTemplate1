(function ($) {
  'use strict';

  $(window).scroll(function () {
    var theta = $(window).scrollTop() % 360;
    $('.ani').css({transform: 'rotate(' + theta + 'rad)'});
  });

  //Back to top scroll smoothly
  $('#backtotop').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // Remove '/'
  function stripTrailingSlash(str) {
    if (str.substr(0, 1) === '/') {
      //return str.replace(/\u002f/g, '');
      str = str.replace(/\u002f/g, '');
    }
    return str;
  }

  var url = window.location.pathname;
  var activePage = stripTrailingSlash(url);
  var nav1 = $('.global-navigation > li > a');
  var nav2 = $('.nav-hidden > li > a');
  var currentPage;

  $.each([nav1, nav2], function () {
    currentPage = stripTrailingSlash($(this).attr('href'));

    if (activePage === currentPage) {
      $(this[0]).parent().addClass('active');
      $(this[1]).parent().parent().parent().addClass('active');
    }

  });

  // Stretch search box
  var $searchTrigger = $('[data-ic-class="search-trigger"]');
  var $searchInput = $('[data-ic-class="search-input"]');
  var $searchClear = $('[data-ic-class="search-clear"]');

  $searchTrigger.click(function () {
    var $this = $('[data-ic-class="search-trigger"]');
    $this.addClass('active');
    $searchInput.focus();
  });

  $searchInput.blur(function () {
    if ($searchInput.val().length > 0) {
      return false;
    } else {
      $searchTrigger.removeClass('active');
    }
  });

  $searchClear.click(function () {
    $searchInput.val('');
  });

  $searchInput.focus(function () {
    $searchTrigger.addClass('active');
  });

  //owl-carousel
  $('#carousel').owlCarousel({
    autoPlay:false,
    slidespeed:300,
    paginationSpeed:400,
    singleItem:true
  });
  //owl-carousel custom navigation event
  var owl = $('#carousel');
  $('.next').click(function () {
    owl.trigger('owl.next');
  });
  $('.prev').click(function () {
    owl.trigger('owl.prev');
  });

})(jQuery);
