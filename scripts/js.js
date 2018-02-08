$(document).ready(function () {
  var menuOpened = false;
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
        if (nextIndex === 3) {
          $('.balance__phone-front').addClass('balance__phone-front--shifted');
        } else {
          $('.balance__phone-front').removeClass('balance__phone-front--shifted');
        }
        if (nextIndex === 4) {
          $('.notification__phone-front').addClass('notification__phone-front--shifted');
        } else {
          $('.notification__phone-front').removeClass('notification__phone-front--shifted');
        }
        if (nextIndex === 5) {
          $('.profile__phone-front').addClass('profile__phone-front--shifted');
        } else {
          $('.profile__phone-front').removeClass('profile__phone-front--shifted');
        }
        if (nextIndex === 6) {
          $('.personal-account__phone-front').addClass('personal-account__phone-front--shifted');
        } else {
          $('.personal-account__phone-front').removeClass('personal-account__phone-front--shifted');
        }
        if (nextIndex === 7) {
          $('.information__phone-front').addClass('information__phone-front--shifted');
        } else {
          $('.information__phone-front').removeClass('information__phone-front--shifted');
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
  });

  $('.home-page__active-phone').click(openMenu);

  $('.header__home').click(closeMenu);

  $('.home-page__menu-elements-call').click(function () {
    $.fn.fullpage.moveTo(2);
  });

  $('.home-page__menu-elements-balance').click(function () {
    $.fn.fullpage.moveTo(3);
  });

  $('.home-page__menu-elements-bell').click(function () {
    $.fn.fullpage.moveTo(4);
  });

  $('.home-page__menu-elements-profile').click(function () {
    $.fn.fullpage.moveTo(5);
  });

  $('.home-page__menu-elements-info').click(function () {
    $.fn.fullpage.moveTo(7);
  });

  function openMenu() {
    if (menuOpened) {
      return;
    }
    $('.home-page__phone-left').addClass('home-page__phone-left--shifted');
    $('.home-page__watch-right').addClass('home-page__watch-right--down');
    $('.home-page__text').addClass('home-page__text--hidden');
    $('.home-page__phone-center').addClass('home-page__phone-center--shifted');
    $('.home-page__left-text').addClass('home-page__left-text--shifted');
    $('.home-page__right-text').addClass('home-page__right-text--shifted');
    $(this).addClass('home-page__active-phone--shifted');
    menuOpened = true;
  }

  function closeMenu() {
    $('.home-page__phone-left').removeClass('home-page__phone-left--shifted');
    $('.home-page__watch-right').removeClass('home-page__watch-right--down');
    $('.home-page__text').removeClass('home-page__text--hidden');
    $('.home-page__phone-center').removeClass('home-page__phone-center--shifted');
    $('.home-page__left-text').removeClass('home-page__left-text--shifted');
    $('.home-page__right-text').removeClass('home-page__right-text--shifted');
    $('.home-page__active-phone').removeClass('home-page__active-phone--shifted');
    $.fn.fullpage.moveTo(1);
    menuOpened = false;
  }

});
