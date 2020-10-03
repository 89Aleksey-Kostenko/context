(function ($) {
  $(window).on("load", function () {
    var masonryGrid = $(".masonry-container");
    masonryGrid.imagesLoaded(function () {
      masonryGrid.masonry({
        itemSelector: ".masonry-item",
        percentPosition: true
      });
    });
  });
})(jQuery);