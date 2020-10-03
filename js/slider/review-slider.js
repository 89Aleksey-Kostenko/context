       $(document).ready(function(){
        $('.review-slider').slick({
         dots: true,
         arrows: false,
         responsive: [
          {
           breakpoint: 700,
            settings: "slick"
          },
          {
           breakpoint: 1000,
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