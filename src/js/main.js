$(document).ready(function () {
  (function () {
    window.onscroll = () => scrollFunction();
    // Node's
    const $headerNav = $("#headerNav");
    const $burger = $(".burger");
    const $submenuHeaderBtn = $(".submenu-header");
    const $shortInfo = $(".short-info");

    // Header on scroll
    function scrollFunction() {
      const scrollTop = $(document.body).scrollTop();
      const scrollTopDocumentElement = $(document.documentElement).scrollTop();
      const $header = $("header");

      if (scrollTop > 166 || scrollTopDocumentElement > 166) {
        $header.addClass("scroll");
      } else {
        $header.removeClass("scroll");
      }
    }

    // Header menu controllers
    $burger.on("click", () => {
      if ($shortInfo.hasClass("open")) {
        $shortInfo.toggleClass("open");
      }
      $burger.toggleClass("burger__active");
      $headerNav.toggleClass("open");
    });

    $submenuHeaderBtn.on("click", () => {
      if ($burger.hasClass("burger__active")) {
        $burger.toggleClass("burger__active");
        $headerNav.toggleClass("open");
      }
      $shortInfo.toggleClass("open");
    });

    // SLIDER
    $(".your-class").slick({});

    // MAP
    /*/
      if ($('#map').length) {
      ymaps.ready(init);
    
      function init(){
        const myLocation = [53.884328, 27.532366];
    
        myMap = new ymaps.Map("map", {
          center: myLocation,
          zoom: 16
        }),
    
        myPlacemark = new ymaps.Placemark(myLocation, {}, {
          preset: 'islands#greenIcon'
        });
    
        myMap.geoObjects.add(myPlacemark);
      }
    }
    */

    
  })();
});
