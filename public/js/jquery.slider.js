(function($)
{
  $.fn.slider = function()
  {
    $(this).find('li').hide();

    var currentSlide = $(this).find('li:first')
    currentSlide.show();

    setInterval(function()
    {
      currentSlide.animate({ "margin-left": "-1000px" }, 400, function()
        {
          $(this).hide()
        });

      currentSlide = currentSlide.nextOrFirst();

      currentSlide.css('margin-left', "1000px");
      currentSlide.show();
      currentSlide.animate({ 'margin-left': 0 });
    }, 3000);
  }
})(jQuery);