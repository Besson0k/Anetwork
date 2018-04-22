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

    $('.proposal__button').click(function () {
        $('.partner-data').addClass('partner-data__block--showed');
        modalOpen = true;
    });

    $('.partner-data__close').click(function () {
        $('.partner-data').removeClass('partner-data__block--showed');
        $('.general-mobile').removeClass('general-mobile__box--hiddened');
        $('.balance').removeClass('balance__box--hiddened');
        $('.support').removeClass('support__box--hiddened');
        $('.profile').removeClass('profile__box--hiddened');
        $('.info').removeClass('info__box--hiddened');
        $('.note').removeClass('note__box--hiddened');
        $('.ip-telephony').removeClass('ip-telephony__box--hiddened');
        $('.proposal').removeClass('proposal__box--hiddened');
        $('.partner-data__no-name').removeClass('partner-data__error--showed');
        $('.partner-data__no-data').removeClass('partner-data__error--showed');
        $('.partner-data__no-phone').removeClass('partner-data__error--showed');
        modalOpen = false;
    });

    $('.final__box-button').click(function () {
        $('.final').removeClass('final__box--showed');
        $('.general-mobile').removeClass('general-mobile__box--hiddened');
        $('.balance').removeClass('balance__box--hiddened');
        $('.support').removeClass('support__box--hiddened');
        $('.profile').removeClass('profile__box--hiddened');
        $('.info').removeClass('info__box--hiddened');
        $('.note').removeClass('note__box--hiddened');
        $('.ip-telephony').removeClass('ip-telephony__box--hiddened');
        $('.proposal').removeClass('proposal__box--hiddened');
        $('.partner-data__no-name').removeClass('partner-data__error--showed');
        $('.partner-data__no-data').removeClass('partner-data__error--showed');
        $('.partner-data__no-phone').removeClass('partner-data__error--showed');
    });

    $('.header__home').click(closeMenu);

    $('#partner-data').on('submit', handlePartnerForm);

    function handlePartnerForm(event) {
        var partnerForm = $('#partner-data')[0];
        var name = $(partnerForm).find("input[name^='name']")[0].value;
        var phone = $(partnerForm).find("input[name^='phone']")[0].value;
        var email = $(partnerForm).find("input[name^='email']")[0].value;
        var data = {};

        if (name === "") {
            event.preventDefault();
            $('.partner-data__no-name').addClass('partner-data__error--showed');
            $('.partner-data').addClass('partner-data__block--showed');
            $('.general-mobile').addClass('general-mobile__box--hiddened');
            $('.balance').addClass('balance__box--hiddened');
            $('.support').addClass('support__box--hiddened');
            $('.profile').addClass('profile__box--hiddened');
            $('.info').addClass('info__box--hiddened');
            $('.note').addClass('note__box--hiddened');
            $('.ip-telephony').addClass('ip-telephony__box--hiddened');
            $('.proposal').addClass('proposal__box--hiddened');
            modalOpen = true;
        } else {
            $('.partner-data__no-name').removeClass('partner-data__error--showed');
        }
        if (phone === "" && email === "") {
            event.preventDefault();
            $('.partner-data__no-data').addClass('partner-data__error--showed');
            $('.partner-data').addClass('partner-data__block--showed');
            $('.general-mobile').addClass('general-mobile__box--hiddened');
            $('.balance').addClass('balance__box--hiddened');
            $('.support').addClass('support__box--hiddened');
            $('.profile').addClass('profile__box--hiddened');
            $('.info').addClass('info__box--hiddened');
            $('.note').addClass('note__box--hiddened');
            $('.ip-telephony').addClass('ip-telephony__box--hiddened');
            $('.proposal').addClass('proposal__box--hiddened');
            modalOpen = true;
        } else {
            $('.partner-data__no-data').removeClass('partner-data__error--showed');
        }
        // надо проверять данные data на колбеке?
        if ( !(name === "") && !(phone === "" && email === "")) {
            $('.partner-data').removeClass('partner-data__block--showed');
            $('.final').addClass('final__box--showed');
            $('.general-mobile').addClass('general-mobile__box--hiddened');
            $('.balance').addClass('balance__box--hiddened');
            $('.support').addClass('support__box--hiddened');
            $('.profile').addClass('profile__box--hiddened');
            $('.info').addClass('info__box--hiddened');
            $('.note').addClass('note__box--hiddened');
            $('.ip-telephony').addClass('ip-telephony__box--hiddened');
            $('.proposal').addClass('proposal__box--hiddened');
            event.preventDefault();
            data.name = name;
            data.phone = phone;
            data.email = email;
            // отправить data куда?
        }
    }

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

});