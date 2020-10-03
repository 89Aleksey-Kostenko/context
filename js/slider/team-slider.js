        $(document).ready(function(){
        $('.team-slider').slick({
         dots: true,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 2000,
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