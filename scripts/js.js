$(document).ready(function () {
  $('#fullpage').fullpage(
    {
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage'],
      menu: '#scrollMenu'
      // lockAnchors: false,
      // slidesNavigation: true,
      // navigation: true,
      // navigationPosition: 'left',
      // showActiveTooltip: true,
      // menu: '#scroller-menu',
      // anchors:['slide1', 'slide2', 'slide3', 'slide4'],
      // navigationTooltips: ['firstSlide', 'secondSlide'],
      // slidesNavPosition: 'bottom'
    }
  );
});
