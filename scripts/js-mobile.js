$(document).ready(function () {
    var MOBILE_MAX_WIDTH = 770;
    var modalOpen = false;

    redirectToProperClient();
    $(window).on('resize', debounce(redirectToProperClient, 200));

    $('#fullpage').fullpage(
        {
            anchors: ['GeneralPage', 'BalancePage', 'SupportPage', 'ProfilePage', 'InfoPage', 'BellPage', 'CallPage', 'ProposalPage'],
            // autoScrolling: false
            responsiveHeight: 350  //correct??
        }
    );

    choosePhone();
    unblokingScroll();

    $('.proposal__button').click(function () {
        $('.partner-data').addClass('partner-data__block--showed');
        modalOpen = true;
        console.log("modalOpen: ", modalOpen);
    });

    $('.partner-data__close').click(function () {
        $('.partner-data').removeClass('partner-data__block--showed');
        modalOpen = false;
        console.log("modalOpen: ", modalOpen);
    });

    $('.header__home').click(closeMenu);


    function choosePhone() {
        if (isAndroid()) {
            $('.balance__front').removeClass('balance__iphone-front');
            $('.balance__back').removeClass('balance__iphone-back');
            $('.support__center').removeClass('support__iphone-center');
            $('.profile__front').removeClass('profile__iphone-front');
            $('.profile__back').removeClass('profile__iphone-back');
            $('.info__front').removeClass('info__iphone-front');
            $('.info__back').removeClass('info__iphone-back');
            $('.note__front').removeClass('note__iphone-front');
            $('.note__back').removeClass('note__iphone-back');
            $('.note__iphone-watch').removeClass('note__iphone-watch');
            $('.ip-telephony__front').removeClass('ip-telephony__iphone-front');
            $('.ip-telephony__back').removeClass('ip-telephony__iphone-back');
            $('.footer__shop-appStore').removeClass('footer__shop--showed');

            $('.balance__front').addClass('balance__android-front');
            $('.balance__back').addClass('balance__android-back');
            $('.support__center').addClass('support__android-center');
            $('.profile__front').addClass('profile__android-front');
            $('.profile__back').addClass('profile__android-back');
            $('.info__front').addClass('info__android-front');
            $('.info__back').addClass('info__android-back');
            $('.note__front').addClass('note__android-front');
            $('.note__back').addClass('note__android-back');
            $('.ip-telephony__front').addClass('ip-telephony__android-front');
            $('.ip-telephony__back').addClass('ip-telephony__android-back');
            $('.footer__shop-googlePay').addClass('footer__shop--showed');
        }
    }

    function closeMenu() {
        $.fn.fullpage.moveTo(1);
        modalOpen = false;
        console.log("modalOpen: ", modalOpen);

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

    function isAndroid() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        return (/android/i.test(userAgent));
    }

    function unblokingScroll() {
        if (modalOpen) {
            $.fn.fullpage.setResponsive(true);
            console.log("modalOpen: ", modalOpen);
        }
    }


});