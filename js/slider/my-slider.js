       $(document).ready(function(){
        $('.my-slider').slick({
         dots: true,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 2000,
         responsive: [
          {
           breakpoint: 680,
            settings: "slick"
          },
          {
           breakpoint: 900,
            settings: {
             slidesToShow: 2
            }
          },
          {
           breakpoint: 3000,
           settings: "unslick"
          }
         ]
       });
       });
       $(document).ready(function(){
        $('.review-slider').slick({
         dots: true,
         arrows: false,
         responsive: [
          {
           breakpoint: 710,
            settings: "slick"
          },
          {
           breakpoint: 1000,
            settings: {
             slidesToShow: 2
            }
          },
          {
           breakpoint: 1200,
            settings: {
            slidesToShow: 3
           }
          },
          {
           breakpoint: 3000,
           settings: "unslick"
          }
         ]
       });
       });