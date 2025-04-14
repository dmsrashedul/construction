(function ($) {
  "use strict";

  jQuery("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
  });

  $(".slider-active").slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // var grid = $(".grid").isotope({
  //   itemSelector: ".grid-item",
  //   percentPosition: true,
  //   masonry: {
  //     // use outer width of grid-sizer for columnWidth
  //     columnWidth: ".grid-item",
  //   },
  // });

  $(".popup-img").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".blog-active")
    .on("init", function (event, slick) {
      $(".slick-track").addClass("row");
    })
    .slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

  $(".testimonial-active")
    .on("init", function (event, slick) {
      $(".slick-track").addClass("row");
    })
    .slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

  $(".brand-active")
    .on("init", function (event, slick) {
      $(".slick-track").addClass("row");
    })
    .slick({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

  $(".info-bar").on("click", function () {
    $(".extra-info").addClass("info-open");
  });
  $(".close-icon").on("click", function () {
    $(".extra-info").removeClass("info-open");
  });

  // Testimonial Item
  $(".testimonial-item-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".testimonial-nav",
  });
  $(".testimonial-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".testimonial-item-active",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>",
  });

  $("select").niceSelect();
})(jQuery);
