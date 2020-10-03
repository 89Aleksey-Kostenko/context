$(document).ready(function(){
  $(".form__wrapper .btn-form").click(function(){
    var button = $(this);
    var currentSection = button.parents(".section");
    var currentSectionIndex = currentSection.index();
    var headerSection = $('.form__steps li').eq(currentSectionIndex);
    currentSection.removeClass("is-active").next().addClass("is-active");
    headerSection.removeClass("is-active").next().addClass("is-active");

    $(".form__wrapper").submit(function(e) {
      e.preventDefault();
    });

    if(currentSectionIndex === 2){
      $(document).find(".form__wrapper .section").first().addClass("is-active");
      $(document).find(".form__steps li").first().addClass("is-active");
    }
  });
});