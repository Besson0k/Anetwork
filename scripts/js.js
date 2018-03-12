$(document).ready(function () {
  var menuOpened = false;
  var menuElementOpened = false;
  var menuIphoneOpened = false;
  var menuAndroidOpened = false;
  var elementBalance = false;
  var elementSupport = false;
  var elementProfile = false;
  var elementInfo = false;
  var elementBell = false;
  var elementCall = false;
  var $right_font = undefined;
  var $right_back = undefined;
  var $right_paragraph1 = undefined;
  var $right_paragraph2 = undefined;
  var $right_paragraph3 = undefined;
  var $watch = undefined;
  var $left_font = undefined;
  var $left_back = undefined;
  var $center = undefined;
  var MOBILE_MAX_WIDTH = 768;

  redirectToProperClient();
  $(window).on('resize', debounce(redirectToProperClient, 200));

  

  $('#fullpage').fullpage(
    {
      anchors: ['GeneralPage', 'FinelPage']

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

  $('.footer').hover(function () {
    $('.footer__logo').addClass('footer__logo--opacited');
  }, function () {
    $('.footer__logo').removeClass('footer__logo--opacited');
  });

  $('.home-page__menu-elements-balance').hover(function () {
    $('.home-page__center-phone').addClass('home-page__center-phone--hover-balance');
    $('.home-page__left-phone').addClass('home-page__left-phone--hover-balance');
    if (!menuElementOpened) {
        $(this).addClass('home-page__menu-elements-balance--hovered');
    } else {
        $(this).addClass('home-page__menu-elements--no-hover');
    }
  }, function () {
    $('.home-page__center-phone').removeClass('home-page__center-phone--hover-balance');
    $('.home-page__left-phone').removeClass('home-page__left-phone--hover-balance');
    $(this).removeClass('home-page__menu-elements-balance--hovered');
    if (menuElementOpened) {
        $(this).removeClass('home-page__menu-elements--no-hover');
    }
  });

  $('.home-page__menu-elements-support').hover(function () {
    $('.home-page__center-phone').addClass('home-page__center-phone--hover-support');
    $('.home-page__left-phone').addClass('home-page__left-phone--hover-support');
      if (!menuElementOpened) {
          $(this).addClass('home-page__menu-elements-support--hovered');
      } else {
          $(this).addClass('home-page__menu-elements--no-hover');
      }
  }, function () {
    $('.home-page__center-phone').removeClass('home-page__center-phone--hover-support');
    $('.home-page__left-phone').removeClass('home-page__left-phone--hover-support');
      $(this).removeClass('home-page__menu-elements-support--hovered');
      if (menuElementOpened) {
          $(this).removeClass('home-page__menu-elements--no-hover');
      }
  });

  $('.home-page__menu-elements-profile').hover(function () {
    $('.home-page__center-phone').addClass('home-page__center-phone--hover-profile');
    $('.home-page__left-phone').addClass('home-page__left-phone--hover-profile');
      if (!menuElementOpened) {
          $(this).addClass('home-page__menu-elements-profile--hovered');
      } else {
          $(this).addClass('home-page__menu-elements--no-hover');
      }
  }, function () {
    $('.home-page__center-phone').removeClass('home-page__center-phone--hover-profile');
    $('.home-page__left-phone').removeClass('home-page__left-phone--hover-profile');
      $(this).removeClass('home-page__menu-elements-profile--hovered');
      if (menuElementOpened) {
          $(this).removeClass('home-page__menu-elements--no-hover');
      }
  });

  $('.home-page__menu-elements-info').hover(function () {
    $('.home-page__center-phone').addClass('home-page__center-phone--hover-info');
    $('.home-page__left-phone').addClass('home-page__left-phone--hover-info');
      if (!menuElementOpened) {
          $(this).addClass('home-page__menu-elements-info--hovered');
      } else {
          $(this).addClass('home-page__menu-elements--no-hover');
      }
  }, function () {
    $('.home-page__center-phone').removeClass('home-page__center-phone--hover-info');
    $('.home-page__left-phone').removeClass('home-page__left-phone--hover-info');
      $(this).removeClass('home-page__menu-elements-info--hovered');
      if (menuElementOpened) {
          $(this).removeClass('home-page__menu-elements--no-hover');
      }
  });

  $('.home-page__menu-elements-bell').hover(function () {
    $('.home-page__center-phone').addClass('home-page__center-phone--hover-bell');
    $('.home-page__left-phone').addClass('home-page__left-phone--hover-bell');
      if (!menuElementOpened) {
          $(this).addClass('home-page__menu-elements-bell--hovered');
      } else {
          $(this).addClass('home-page__menu-elements--no-hover');
      }
  }, function () {
    $('.home-page__center-phone').removeClass('home-page__center-phone--hover-bell');
    $('.home-page__left-phone').removeClass('home-page__left-phone--hover-bell');
      $(this).removeClass('home-page__menu-elements-bell--hovered');
      if (menuElementOpened) {
          $(this).removeClass('home-page__menu-elements--no-hover');
      }
  });

  $('.home-page__menu-elements-call').hover(function () {
    $('.home-page__center-phone').addClass('home-page__center-phone--hover-call');
    $('.home-page__left-phone').addClass('home-page__left-phone--hover-call');
      if (!menuElementOpened) {
          $(this).addClass('home-page__menu-elements-call--hovered');
      } else {
          $(this).addClass('home-page__menu-elements--no-hover');
      }
  }, function () {
    $('.home-page__center-phone').removeClass('home-page__center-phone--hover-call');
    $('.home-page__left-phone').removeClass('home-page__left-phone--hover-call');
      $(this).removeClass('home-page__menu-elements-call--hovered');
      if (menuElementOpened) {
          $(this).removeClass('home-page__menu-elements--no-hover');
      }
  });


  $('.home-page__center-phone').click(openIPhoneMenu);

  $('.home-page__left-phone').click(openAndroidMenu);

  $('.header__home').click(closeMenu);

  $('.home-page__menu-elements-info').click(function () {
      $(this).removeClass('home-page__menu-elements-info--hovered');
    elementInfo = true;
  });
  $('.home-page__menu-elements-info').click(openMenuElement);

  $('.home-page__menu-elements-bell').click(function () {
      $(this).removeClass('home-page__menu-elements-bell--hovered');
    elementBell = true;
  });
  $('.home-page__menu-elements-bell').click(openMenuElement);

  $('.home-page__menu-elements-call').click(function () {
      $(this).removeClass('home-page__menu-elements-call--hovered');
    elementCall = true;
  });
  $('.home-page__menu-elements-call').click(openMenuElement);

  $('.home-page__menu-elements-balance').click(function () {
      $(this).removeClass('home-page__menu-elements-balance--hovered');
    elementBalance = true;
  });
  $('.home-page__menu-elements-balance').click(openMenuElement);

  $('.home-page__menu-elements-support').click(function () {
      $(this).removeClass('home-page__menu-elements-support--hovered');
    elementSupport = true;
  });
  $('.home-page__menu-elements-support').click(openMenuElement);

  $('.home-page__menu-elements-profile').click(function () {
      $(this).removeClass('home-page__menu-elements-profile--hovered');
    elementProfile = true;
  });
  $('.home-page__menu-elements-profile').click(openMenuElement);


  $('.home-page__close-menu-elements').click(closeMenuElement);

  $('.home-page__watch-right').click(function () {
    $('.home-page__service-development').addClass('home-page__service-animated')
  });

  // $('.home-page__watch-right').click(
  //     setTimeout(function () {
  //         $('.home-page__service-development').removeClass('home-page__service-animated')
  //     }, 1000)
  // );

  $('.header__button').click(function () {
     $('.modal').addClass('modal__box--showed')
  });

  $('.modal__closes').click(function () {
      $('.modal').removeClass('modal__box--showed')
  });

  function openIPhoneMenu() {
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
    menuIphoneOpened = true;
    choiceTypePhone();
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
    $('.home-page__icons-iphone').addClass('home-page__icons-iphone--hidden');
    $('.home-page__icons-android').addClass('home-page__icons-android--showed');
    menuAndroidOpened = true;
    choiceTypePhone();
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
    $('.home-page__icons-iphone').removeClass('home-page__elements--hidden home-page__icons-iphone--hidden');
    $('.menu-elements__box').removeClass('menu-elements__box--showed');
    $('.home-page__close-menu-elements').removeClass('home-page__close-menu-elements--showed');
    $('.home-page__icons-android').removeClass('home-page__elements--hidden home-page__icons-android--showed');
    $('.home-page__name-info').removeClass('home-page__name-info--shifted');
    $('.home-page__name-bell').removeClass('home-page__name-bell--shifted');
    $('.home-page__name-call').removeClass('home-page__name-call--shifted');
    $('.home-page__name-balance').removeClass('home-page__name-balance--shifted');
    $('.home-page__name-profile').removeClass('home-page__name-profile--shifted');
    $('.home-page__name-support').removeClass('home-page__name-support--shifted');
    $($right_font).removeClass('menu-elements__right-front--moved');
    $($right_back).removeClass('menu-elements__right-back--moved');
    $($left_font).removeClass('menu-elements__left-front--moved');
    $($left_back).removeClass('menu-elements__left-back--moved');
    $($center).removeClass('menu-elements__center--moved');
    $($right_paragraph1).removeClass('menu-elements__paragraph1--moved');
    $($right_paragraph2).removeClass('menu-elements__paragraph2--moved');
    $($right_paragraph3).removeClass('menu-elements__paragraph3--moved');
    $($watch).removeClass('menu-elements__bell-watch--showed');
    $.fn.fullpage.moveTo(1);

    menuElementOpened = false;
    menuIphoneOpened = false;
    menuAndroidOpened = false;
    elementBalance = false;
    elementSupport = false;
    elementProfile = false;
    elementInfo = false;
    elementBell = false;
    elementCall = false;
  }

  function openMenuElement() {
    if (menuElementOpened) {
      return;
    }
    $('.home-page__left-phone').addClass('home-page__elements--hidden');
    $('.home-page__center-phone').addClass('home-page__elements--hidden');
    $('.home-page__menu-content').addClass('home-page__elements--hidden');
    $('.home-page__icons-iphone').addClass('home-page__elements--hidden');
    $('.home-page__icons-android').addClass('home-page__elements--hidden');
    $('.menu-elements__box').addClass('menu-elements__box--showed');
    $('.home-page__close-menu-elements').addClass('home-page__close-menu-elements--showed');
    choiceElementMenu();
    $($right_font).addClass('menu-elements__right-front--moved');
    $($right_back).addClass('menu-elements__right-back--moved');
    $($left_font).addClass('menu-elements__left-front--moved');
    $($left_back).addClass('menu-elements__left-back--moved');
    $($center).addClass('menu-elements__center--moved');
    $($right_paragraph1).addClass('menu-elements__paragraph1--moved');
    $($right_paragraph2).addClass('menu-elements__paragraph2--moved');
    $($right_paragraph3).addClass('menu-elements__paragraph3--moved');
    $($watch).addClass('menu-elements__bell-watch--showed');
    menuElementOpened = true;
  }

  function closeMenuElement() {
    if (!menuElementOpened) {
      return;
    }
    $('.home-page__menu-elements-balance').addClass('home-page__menu-elements-balance--shifted');
    $('.home-page__menu-elements-support').addClass('home-page__menu-elements-support--shifted');
    $('.home-page__menu-elements-profile').addClass('home-page__menu-elements-profile--shifted');
    $('.home-page__menu-elements-info').addClass('home-page__menu-elements-info--shifted');
    $('.home-page__menu-elements-bell').addClass('home-page__menu-elements-bell--shifted');
    $('.home-page__menu-elements-call').addClass('home-page__menu-elements-call--shifted');

    $('.home-page__left-phone').removeClass('home-page__elements--hidden');
    $('.home-page__center-phone').removeClass('home-page__elements--hidden');
    $('.home-page__menu-content').removeClass('home-page__elements--hidden');
    $('.home-page__icons-iphone').removeClass('home-page__elements--hidden');
    $('.home-page__icons-android').removeClass('home-page__elements--hidden');
    $('.menu-elements__box').removeClass('menu-elements__box--showed');
    $('.home-page__close-menu-elements').removeClass('home-page__close-menu-elements--showed');
    $('.home-page__name-info').removeClass('home-page__name-info--shifted');
    $('.home-page__name-bell').removeClass('home-page__name-bell--shifted');
    $('.home-page__name-call').removeClass('home-page__name-call--shifted');
    $('.home-page__name-balance').removeClass('home-page__name-balance--shifted');
    $('.home-page__name-profile').removeClass('home-page__name-profile--shifted');
    $('.home-page__name-support').removeClass('home-page__name-support--shifted');
    $($right_font).removeClass('menu-elements__right-front--moved');
    $($right_back).removeClass('menu-elements__right-back--moved');
    $($left_font).removeClass('menu-elements__left-front--moved');
    $($left_back).removeClass('menu-elements__left-back--moved');
    $($center).removeClass('menu-elements__center--moved');
    $($right_paragraph1).removeClass('menu-elements__paragraph1--moved');
    $($right_paragraph2).removeClass('menu-elements__paragraph2--moved');
    $($right_paragraph3).removeClass('menu-elements__paragraph3--moved');
    $($watch).removeClass('menu-elements__bell-watch--showed');

    menuElementOpened = false;
    elementBalance = false;
    elementSupport = false;
    elementProfile = false;
    elementInfo = false;
    elementBell = false;
    elementCall = false;
  }

  function choiceTypePhone() {
    if (menuIphoneOpened) {
      $('.menu-elements__info-front').addClass('menu-elements__info-front-iphone');
      $('.menu-elements__info-back').addClass('menu-elements__info-back-iphone');
      $('.menu-elements__bell-front').addClass('menu-elements__bell-front-iphone');
      $('.menu-elements__bell-back').addClass('menu-elements__bell-back-iphone');
      $('.menu-elements__bell-watch').addClass('menu-elements__bell-watch-iphone');
      $('.menu-elements__call-front').addClass('menu-elements__call-front-iphone');
      $('.menu-elements__call-back').addClass('menu-elements__call-back-iphone');
      $('.menu-elements__balance-front').addClass('menu-elements__balance-front-iphone');
      $('.menu-elements__balance-back').addClass('menu-elements__balance-back-iphone');
      $('.menu-elements__support-center').addClass('menu-elements__support-center-iphone');
      $('.menu-elements__profile-front').addClass('menu-elements__profile-front-iphone');
      $('.menu-elements__profile-back').addClass('menu-elements__profile-back-iphone');
    } else {
      $('.menu-elements__info-front').removeClass('menu-elements__info-front-iphone');
      $('.menu-elements__info-back').removeClass('menu-elements__info-back-iphone');
      $('.menu-elements__bell-front').removeClass('menu-elements__bell-front-iphone');
      $('.menu-elements__bell-back').removeClass('menu-elements__bell-back-iphone');
      $('.menu-elements__bell-watch').removeClass('menu-elements__bell-watch-iphone');
      $('.menu-elements__call-front').removeClass('menu-elements__call-front-iphone');
      $('.menu-elements__call-back').removeClass('menu-elements__call-back-iphone');
      $('.menu-elements__balance-front').removeClass('menu-elements__balance-front-iphone');
      $('.menu-elements__balance-back').removeClass('menu-elements__balance-back-iphone');
      $('.menu-elements__support-center').removeClass('menu-elements__support-center-iphone');
      $('.menu-elements__profile-front').removeClass('menu-elements__profile-front-iphone');
      $('.menu-elements__profile-back').removeClass('menu-elements__profile-back-iphone');
    }
    if (menuAndroidOpened) {
      $('.menu-elements__info-front').addClass('menu-elements__info-front-android');
      $('.menu-elements__info-back').addClass('menu-elements__info-back-android');
      $('.menu-elements__bell-front').addClass('menu-elements__bell-front-android');
      $('.menu-elements__bell-back').addClass('menu-elements__bell-back-android');
      $('.menu-elements__call-front').addClass('menu-elements__call-front-android');
      $('.menu-elements__call-back').addClass('menu-elements__call-back-android');
      $('.menu-elements__balance-front').addClass('menu-elements__balance-front-android');
      $('.menu-elements__balance-back').addClass('menu-elements__balance-back-android');
      $('.menu-elements__support-center').addClass('menu-elements__support-center-android');
      $('.menu-elements__profile-front').addClass('menu-elements__profile-front-android');
      $('.menu-elements__profile-back').addClass('menu-elements__profile-back-android');
    } else {
      $('.menu-elements__info-front').removeClass('menu-elements__info-front-android');
      $('.menu-elements__info-back').removeClass('menu-elements__info-back-android');
      $('.menu-elements__bell-front').removeClass('menu-elements__bell-front-android');
      $('.menu-elements__bell-back').removeClass('menu-elements__bell-back-android');
      $('.menu-elements__call-front').removeClass('menu-elements__call-front-android');
      $('.menu-elements__call-back').removeClass('menu-elements__call-back-android');
      $('.menu-elements__balance-front').removeClass('menu-elements__balance-front-android');
      $('.menu-elements__balance-back').removeClass('menu-elements__balance-back-android');
      $('.menu-elements__support-center').removeClass('menu-elements__support-center-android');
      $('.menu-elements__profile-front').removeClass('menu-elements__profile-front-android');
      $('.menu-elements__profile-back').removeClass('menu-elements__profile-back-android');
    }
  }

  function choiceElementMenu() {
    if (elementInfo) {
      $right_font = '.menu-elements__info-front';
      $right_back = '.menu-elements__info-back';
      $right_paragraph1 = '.menu-elements__info-paragraph1';
      $right_paragraph2 = '.menu-elements__info-paragraph2';
      $right_paragraph3 = undefined;
      $watch = undefined;
      $left_font = undefined;
      $left_back = undefined;
      $center = undefined;
      $('.home-page__name-info').addClass('home-page__name-info--shifted');
      $('.home-page__menu-elements-balance').removeClass('home-page__menu-elements-balance--shifted');
      $('.home-page__menu-elements-support').removeClass('home-page__menu-elements-support--shifted');
      $('.home-page__menu-elements-profile').removeClass('home-page__menu-elements-profile--shifted');
      // $('.home-page__menu-elements-info').removeClass('home-page__menu-elements-info--shifted');
      $('.home-page__menu-elements-bell').removeClass('home-page__menu-elements-bell--shifted');
      $('.home-page__menu-elements-call').removeClass('home-page__menu-elements-call--shifted');
    } else {
      if (elementBell) {
        $right_font = '.menu-elements__bell-front';
        $right_back = '.menu-elements__bell-back';
        $right_paragraph1 = '.menu-elements__bell-paragraph1';
        $right_paragraph2 = '.menu-elements__bell-paragraph2';
        $watch = '.menu-elements__bell-watch';
        $right_paragraph3 = undefined;
        $left_font = undefined;
        $left_back = undefined;
        $center = undefined;
        $('.home-page__name-bell').addClass('home-page__name-bell--shifted');
        $('.home-page__menu-elements-balance').removeClass('home-page__menu-elements-balance--shifted');
        $('.home-page__menu-elements-support').removeClass('home-page__menu-elements-support--shifted');
        $('.home-page__menu-elements-profile').removeClass('home-page__menu-elements-profile--shifted');
        $('.home-page__menu-elements-info').removeClass('home-page__menu-elements-info--shifted');
        // $('.home-page__menu-elements-bell').removeClass('home-page__menu-elements-bell--shifted');
        $('.home-page__menu-elements-call').removeClass('home-page__menu-elements-call--shifted');
      } else {
        if (elementCall) {
          $right_font = '.menu-elements__call-front';
          $right_back = '.menu-elements__call-back';
          $right_paragraph1 = '.menu-elements__call-paragraph1';
          $right_paragraph2 = '.menu-elements__call-paragraph2';
          $right_paragraph3 = '.menu-elements__call-paragraph3';
          $watch = undefined;
          $left_font = undefined;
          $left_back = undefined;
          $center = undefined;
          $('.home-page__name-call').addClass('home-page__name-call--shifted');
          $('.home-page__menu-elements-balance').removeClass('home-page__menu-elements-balance--shifted');
          $('.home-page__menu-elements-support').removeClass('home-page__menu-elements-support--shifted');
          $('.home-page__menu-elements-profile').removeClass('home-page__menu-elements-profile--shifted');
          $('.home-page__menu-elements-info').removeClass('home-page__menu-elements-info--shifted');
          $('.home-page__menu-elements-bell').removeClass('home-page__menu-elements-bell--shifted');
          // $('.home-page__menu-elements-call').removeClass('home-page__menu-elements-call--shifted');
        } else {
          if (elementBalance) {
            $left_font = '.menu-elements__balance-front';
            $left_back = '.menu-elements__balance-back';
            $right_paragraph1 = '.menu-elements__balance-paragraph1';
            $right_paragraph2 = '.menu-elements__balance-paragraph2';
            $right_paragraph3 = '.menu-elements__balance-paragraph3';
            $watch = undefined;
            $right_font = undefined;
            $right_back = undefined;
            $center = undefined;
            $('.home-page__name-balance').addClass('home-page__name-balance--shifted');
            // $('.home-page__menu-elements-balance').removeClass('home-page__menu-elements-balance--shifted');
            $('.home-page__menu-elements-support').removeClass('home-page__menu-elements-support--shifted');
            $('.home-page__menu-elements-profile').removeClass('home-page__menu-elements-profile--shifted');
            $('.home-page__menu-elements-info').removeClass('home-page__menu-elements-info--shifted');
            $('.home-page__menu-elements-bell').removeClass('home-page__menu-elements-bell--shifted');
            $('.home-page__menu-elements-call').removeClass('home-page__menu-elements-call--shifted');
          } else {
            if (elementSupport) {
              $center = '.menu-elements__support-center';
              $right_paragraph1 = '.menu-elements__support-paragraph1';
              $right_paragraph2 = '.menu-elements__support-paragraph2';
              $right_paragraph3 = undefined;
              $left_font = undefined;
              $left_back = undefined;
              $watch = undefined;
              $right_font = undefined;
              $right_back = undefined;
              $('.home-page__name-support').addClass('home-page__name-support--shifted');
              $('.home-page__menu-elements-balance').removeClass('home-page__menu-elements-balance--shifted');
              // $('.home-page__menu-elements-support').removeClass('home-page__menu-elements-support--shifted');
              $('.home-page__menu-elements-profile').removeClass('home-page__menu-elements-profile--shifted');
              $('.home-page__menu-elements-info').removeClass('home-page__menu-elements-info--shifted');
              $('.home-page__menu-elements-bell').removeClass('home-page__menu-elements-bell--shifted');
              $('.home-page__menu-elements-call').removeClass('home-page__menu-elements-call--shifted');
            } else {
              if (elementProfile) {
                $left_font = '.menu-elements__profile-front';
                $left_back = '.menu-elements__profile-back';
                $right_paragraph1 = '.menu-elements__profile-paragraph1';
                $right_paragraph2 = '.menu-elements__profile-paragraph2';
                $right_paragraph3 = undefined;
                $watch = undefined;
                $right_font = undefined;
                $right_back = undefined;
                $center = undefined;
                $('.home-page__name-profile').addClass('home-page__name-profile--shifted');
                $('.home-page__menu-elements-balance').removeClass('home-page__menu-elements-balance--shifted');
                $('.home-page__menu-elements-support').removeClass('home-page__menu-elements-support--shifted');
                // $('.home-page__menu-elements-profile').removeClass('home-page__menu-elements-profile--shifted');
                $('.home-page__menu-elements-info').removeClass('home-page__menu-elements-info--shifted');
                $('.home-page__menu-elements-bell').removeClass('home-page__menu-elements-bell--shifted');
                $('.home-page__menu-elements-call').removeClass('home-page__menu-elements-call--shifted');
              } else {
                $right_font = undefined;
                $right_back = undefined;
                $left_font = undefined;
                $left_back = undefined;
                $center = undefined;
                $right_paragraph1 = undefined;
                $right_paragraph2 = undefined;
                $right_paragraph3 = undefined;
                $watch = undefined;
              }
            }
          }
        }
      }
    }
  }

  function redirectToMobile() {
    window.location = '/mobile.html';
  }

  function redirectToDesktop() {
    window.location = '/';
  }
  
  function isMobileBrowser() {
    return window.innerWidth <= MOBILE_MAX_WIDTH;
  }

  function isMobileSite() {
    return window.location.pathname === '/mobile.html';
  }

  function redirectToProperClient() {
    if (!isMobileSite() && isMobileBrowser()) {
      return redirectToMobile();
    }
    if (isMobileSite() && !isMobileBrowser()) {
      return redirectToDesktop();
    }
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


});
