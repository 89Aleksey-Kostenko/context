       $(document).ready(function(){
        $('.cases__slider').slick({
         dots: true,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 3000,
         slidesToShow: 1,
         responsive: [
          {
           breakpoint: 1000,
            settings: "unslick"
          },
          {
           breakpoint: 3000,
           settings: "slick"
          }
         ]
       });
       });