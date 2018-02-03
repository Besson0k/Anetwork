$(document).ready(function () {
  $('#fullpage').fullpage(
    {
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage'],
      menu: '#scrollMenu',
      onLeave: function(index, nextIndex){
        var scrollMenuElement = $('.scroll-menu');
        if(nextIndex !== 1) {
          scrollMenuElement.addClass( 'vision' )
        } else {
          scrollMenuElement.removeClass( 'vision' )
        }
      }
    }
  );
});
