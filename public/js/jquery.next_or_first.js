(function($)
{
  $.fn.nextOrFirst = function(selector)
  {
    var next = this.next(selector);

    return (next.length) ? next : this.prevAll(selector).last();
  }
})(jQuery);