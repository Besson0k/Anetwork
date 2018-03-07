$(document).ready(function () {
    var isIphone = false;
    var isAndroid = false;

    choosePhone();

    function choosePhone() {
        if (isAndroid) {
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
        }
    }

});