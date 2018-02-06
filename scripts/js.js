$(document).ready(function () {
  $('#fullpage').fullpage(
    {
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage'],
      menu: '#scrollMenu',
      onLeave: function (index, nextIndex) {
        var scrollMenuElement = $('.scroll-menu');
        if (nextIndex !== 1) {
          scrollMenuElement.addClass('vision')
        } else {
          scrollMenuElement.removeClass('vision')
        }
        if (nextIndex === 2) {
          $('.ip-telephony__phone-front').addClass('ip-telephony__phone-front--shifted');
        } else {
          $('.ip-telephony__phone-front').removeClass('ip-telephony__phone-front--shifted');
        }
      }
    }
  );
  $('.home-page__active-phone').hover(function (e) {
    $(this).addClass('home-page__active-phone--hovered');
    $('.home-page__watch-right').addClass('home-page__watch-right--shifted');
  }, function (e) {
    $(this).removeClass('home-page__active-phone--hovered');
    $('.home-page__watch-right').removeClass('home-page__watch-right--shifted');
  }),
    $('.home-page__active-phone').click(function () {
      $('.home-page__phone-left').addClass('home-page__phone-left--shifted');
      $('.home-page__watch-right').addClass('home-page__watch-right--down');
      $('.home-page__text').addClass('home-page__text--hidden');
      $('.home-page__phone-center').addClass('home-page__phone-center--shifted');
      $('.home-page__left-text').addClass('home-page__left-text--shifted');
      $('.home-page__right-text').addClass('home-page__right-text--shifted');
      $(this).addClass('home-page__active-phone--shifted');
    });
  $('.header__home').click(function () {
    $('.home-page__phone-left').removeClass('home-page__phone-left--shifted');
    $('.home-page__watch-right').removeClass('home-page__watch-right--down');
    $('.home-page__text').removeClass('home-page__text--hidden');
    $('.home-page__phone-center').removeClass('home-page__phone-center--shifted');
    $('.home-page__left-text').removeClass('home-page__left-text--shifted');
    $('.home-page__right-text').removeClass('home-page__right-text--shifted');
    $('.home-page__active-phone').removeClass('home-page__active-phone--shifted');
    $.fn.fullpage.moveTo(1);
  }),
    $('.home-page__menu-elements-call').click(function () {
      $.fn.fullpage.moveTo(2);
    }),
    $('.home-page__menu-elements-balance').click(function () {
      $.fn.fullpage.moveTo(3);
    }),
    $('.home-page__menu-elements-bell').click(function () {
      $.fn.fullpage.moveTo(4);
    }),
    $('.home-page__menu-elements-profile').click(function () {
      $.fn.fullpage.moveTo(5);
    }),
    $('.home-page__menu-elements-info').click(function () {
      $.fn.fullpage.moveTo(7);
    })
});
