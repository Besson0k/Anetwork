$(document).ready(function () {
  var menuOpened = false;
  var menuElementOpened = false;
  $('#fullpage').fullpage(
    {
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage', 'tenthPage'],
      menu: '#scrollMenu'
      // onLeave: function (index, nextIndex) {
      //     var scrollMenuElement = $('.scroll-menu');
      //     if (nextIndex !== 1) {
      //         scrollMenuElement.addClass('vision')
      //     } else {
      //         scrollMenuElement.removeClass('vision')
      //     }
      //     if (nextIndex === 2) {
      //         $('.ip-telephony__phone-front').addClass('ip-telephony__phone-front--shifted');
      //     } else {
      //         $('.ip-telephony__phone-front').removeClass('ip-telephony__phone-front--shifted');
      //     }
      //
      //     if (nextIndex === 3) {
      //         $('.balance__phone-front').addClass('balance__phone-front--shifted');
      //     } else {
      //         $('.balance__phone-front').removeClass('balance__phone-front--shifted');
      //     }
      //
      //     if (nextIndex === 4) {
      //         $('.notification__phone-front').addClass('notification__phone-front--shifted');
      //     } else {
      //         $('.notification__phone-front').removeClass('notification__phone-front--shifted');
      //     }
      //
      //     if (nextIndex === 5) {
      //         $('.profile__phone-front').addClass('profile__phone-front--shifted');
      //     } else {
      //         $('.profile__phone-front').removeClass('profile__phone-front--shifted');
      //     }
      //
      //     if (nextIndex === 6) {
      //         $('.personal-account__phone-front').addClass('personal-account__phone-front--shifted');
      //     } else {
      //         $('.personal-account__phone-front').removeClass('personal-account__phone-front--shifted');
      //     }
      //
      //     if (nextIndex === 7) {
      //         $('.information__phone-front').addClass('information__phone-front--shifted');
      //     } else {
      //         $('.information__phone-front').removeClass('information__phone-front--shifted');
      //     }
      //
      //     if (index === 1 && !menuOpened) {
      //         openAndroidMenu();
      //         scrollMenuElement.removeClass('vision');
      //         return false;
      //     }
      // }
    }
  );

  $('.home-page__center-phone').hover(function (e) {
    $(this).addClass('home-page__center-phone--hovered');
    $(this).removeClass('home-page__center-phone-motion');
  }, function (e) {
    $(this).removeClass('home-page__center-phone--hovered');
    $(this).addClass('home-page__center-phone-motion');
  });

  $('.home-page__left-phone').hover(function () {
    $(this).addClass('home-page__left-phone--hovered');
    $(this).removeClass('home-page__left-phone-motion');
  }, function () {
    $(this).removeClass('home-page__left-phone--hovered');
    $(this).addClass('home-page__left-phone-motion');
  });

  $('.home-page__watch-right').hover(function () {
      $(this).addClass('home-page__watch-right--hovered');
      $(this).removeClass('home-page__watch-right-motion');
  }, function () {
      $(this).removeClass('home-page__watch-right--hovered');
      $(this).addClass('home-page__watch-right-motion');
      $('.home-page__service-development').removeClass('home-page__service-animated')
  });

  $('.home-page__menu-elements-balance').hover(function () {
    $('.home-page__center-phone').addClass('home-page__center-phone--hover-balance')
  }, function () {
    $('.home-page__center-phone').removeClass('home-page__center-phone--hover-balance')
  });

  $('.home-page__menu-elements-support').hover(function () {
      $('.home-page__center-phone').addClass('home-page__center-phone--hover-support')
  }, function () {
      $('.home-page__center-phone').removeClass('home-page__center-phone--hover-support')
  });

  $('.home-page__menu-elements-profile').hover(function () {
      $('.home-page__center-phone').addClass('home-page__center-phone--hover-profile')
  }, function () {
      $('.home-page__center-phone').removeClass('home-page__center-phone--hover-profile')
  });

  $('.home-page__menu-elements-info').hover(function () {
      $('.home-page__center-phone').addClass('home-page__center-phone--hover-info')
  }, function () {
      $('.home-page__center-phone').removeClass('home-page__center-phone--hover-info')
  });

  $('.home-page__menu-elements-info').hover(function () {
      $('.home-page__center-phone').addClass('home-page__center-phone--hover-info')
  }, function () {
      $('.home-page__center-phone').removeClass('home-page__center-phone--hover-info')
  });

  $('.home-page__menu-elements-bell').hover(function () {
      $('.home-page__center-phone').addClass('home-page__center-phone--hover-bell')
  }, function () {
      $('.home-page__center-phone').removeClass('home-page__center-phone--hover-bell')
  });

  $('.home-page__menu-elements-call').hover(function () {
      $('.home-page__center-phone').addClass('home-page__center-phone--hover-call')
  }, function () {
      $('.home-page__center-phone').removeClass('home-page__center-phone--hover-call')
  });



  $('.home-page__center-phone').click(openIPhoneMenu);

  $('.home-page__left-phone').click(openAndroidMenu);

  $('.header__home').click(closeMenu);

  $('.home-page__menu-elements-info').click(openMenuElement);

  $('.home-page__close-menu-elements').click(closeMenuElement);

  $('.home-page__watch-right').click(function () {
      $('.home-page__service-development').addClass('home-page__service-animated')
  });

  // $('.home-page__menu-elements-call').click(function () {
  //     $.fn.fullpage.moveTo(2);
  // });

  function openIPhoneMenu() {
    // if (menuOpened) {
    //   return;
    // }
    $('.home-page__text').addClass('home-page__text--hidden');
    $('.home-page__menu-elements-balance').addClass('home-page__menu-elements-balance--shifted');
    $('.home-page__menu-elements-support').addClass('home-page__menu-elements-support--shifted');
    $('.home-page__menu-elements-profile').addClass('home-page__menu-elements-profile--shifted');
    $('.home-page__menu-elements-info').addClass('home-page__menu-elements-info--shifted');
    $('.home-page__menu-elements-bell').addClass('home-page__menu-elements-bell--shifted');
    $('.home-page__menu-elements-call').addClass('home-page__menu-elements-call--shifted');
    $('.home-page__right-text').addClass('home-page__right-text--shifted');
    $('.home-page__left-text').addClass('home-page__left-text--shifted');
    $('.home-page__left-phone').addClass('home-page__left-phone--shifted');
    $('.home-page__watch-right').addClass('home-page__watch-right--down');
    $('.home-page__center-phone').addClass('home-page__center-phone--shifted-center home-page__phone-motion--stopped');

    // menuOpened = true;
  }

  function openAndroidMenu() {
    if (menuOpened) {
      return;
    }
    $('.home-page__text').addClass('home-page__text--hidden');
    $('.home-page__menu-elements-balance').addClass('home-page__menu-elements-balance--shifted');
    $('.home-page__menu-elements-support').addClass('home-page__menu-elements-support--shifted');
    $('.home-page__menu-elements-profile').addClass('home-page__menu-elements-profile--shifted');
    $('.home-page__menu-elements-info').addClass('home-page__menu-elements-info--shifted');
    $('.home-page__menu-elements-bell').addClass('home-page__menu-elements-bell--shifted');
    $('.home-page__menu-elements-call').addClass('home-page__menu-elements-call--shifted');
    $('.home-page__right-text').addClass('home-page__right-text--shifted');
    $('.home-page__left-text').addClass('home-page__left-text--shifted');
    $('.home-page__left-phone').addClass('home-page__left-phone--shifted-center home-page__phone-motion--stopped');
    $('.home-page__watch-right').addClass('home-page__watch-right--down');
    $('.home-page__center-phone').addClass('home-page__center-phone--shifted');
    // menuOpened = true;
  }

  function closeMenu() {
    $('.home-page__text').removeClass('home-page__text--hidden');
    $('.home-page__menu-elements-balance').removeClass('home-page__menu-elements-balance--shifted');
    $('.home-page__menu-elements-support').removeClass('home-page__menu-elements-support--shifted');
    $('.home-page__menu-elements-profile').removeClass('home-page__menu-elements-profile--shifted');
    $('.home-page__menu-elements-info').removeClass('home-page__menu-elements-info--shifted');
    $('.home-page__menu-elements-bell').removeClass('home-page__menu-elements-bell--shifted');
    $('.home-page__menu-elements-call').removeClass('home-page__menu-elements-call--shifted');
    $('.home-page__right-text').removeClass('home-page__right-text--shifted');
    $('.home-page__left-text').removeClass('home-page__left-text--shifted');
    $('.home-page__left-phone').removeClass('home-page__left-phone--shifted home-page__left-phone--shifted-center home-page__elements--hidden home-page__phone-motion--stopped');
    $('.home-page__watch-right').removeClass('home-page__watch-right--down');
    $('.home-page__center-phone').removeClass('home-page__center-phone--shifted-center home-page__center-phone--shifted home-page__elements--hidden home-page__phone-motion--stopped');
    $('.home-page__menu-content').removeClass('home-page__elements--hidden');
    $('.home-page__info').removeClass('home-page__elements--hidden');
    $('.home-page__element-page').removeClass('home-page__element-page--showed');
    $('.home-page__close-menu-elements').removeClass('home-page__close-menu-elements--showed');
      menuElementOpened = false;
    // $.fn.fullpage.moveTo(1);
    // menuOpened = false;
  }

  function openMenuElement() {
      if (menuElementOpened) {
          return;
      }
    $('.home-page__menu-elements-balance').removeClass('home-page__menu-elements-balance--shifted');
    $('.home-page__menu-elements-support').removeClass('home-page__menu-elements-support--shifted');
    $('.home-page__menu-elements-profile').removeClass('home-page__menu-elements-profile--shifted');
    // $('.home-page__menu-elements-info').removeClass('home-page__menu-elements-info--shifted');
    $('.home-page__menu-elements-bell').removeClass('home-page__menu-elements-bell--shifted');
    $('.home-page__menu-elements-call').removeClass('home-page__menu-elements-call--shifted');
    $('.home-page__left-phone').addClass('home-page__elements--hidden');
    $('.home-page__center-phone').addClass('home-page__elements--hidden');
    $('.home-page__menu-content').addClass('home-page__elements--hidden');
    $('.home-page__info').addClass('home-page__elements--hidden');
    $('.home-page__element-page').addClass('home-page__element-page--showed');
    $('.home-page__close-menu-elements').addClass('home-page__close-menu-elements--showed');
    menuElementOpened = true;
  }

  function closeMenuElement() {
      if (!menuElementOpened) {
          return;
      }
    $('.home-page__menu-elements-balance').addClass('home-page__menu-elements-balance--shifted');
    $('.home-page__menu-elements-support').addClass('home-page__menu-elements-support--shifted');
    $('.home-page__menu-elements-profile').addClass('home-page__menu-elements-profile--shifted');
    // $('.home-page__menu-elements-info').addClass('home-page__menu-elements-info--shifted');
    $('.home-page__menu-elements-bell').addClass('home-page__menu-elements-bell--shifted');
    $('.home-page__menu-elements-call').addClass('home-page__menu-elements-call--shifted');
    $('.home-page__left-phone').removeClass('home-page__elements--hidden');
    $('.home-page__center-phone').removeClass('home-page__elements--hidden');
    $('.home-page__menu-content').removeClass('home-page__elements--hidden');
    $('.home-page__info').removeClass('home-page__elements--hidden');
    $('.home-page__element-page').removeClass('home-page__element-page--showed');
    $('.home-page__close-menu-elements').removeClass('home-page__close-menu-elements--showed');
    menuElementOpened = false;
  }

});
