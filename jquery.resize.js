/*
 * jquery.resize
 *
 * Set a maximum width of an image, and if an image is larger than that max
 *
 */
(function($) {
  $.fn.resize = function(options) {
    var opts = $.extend({}, $.fn.resize.defaults, options);
    
    return this.each(function() {
      if( $(this).attr('width') > options.maxWidth ) {
        $(this).attr('width', options.maxWidth);
      }
    });
  };
  
  // default options
  $.fn.resize.defaults = {
    maxWidth: 920 
  };
 
})(jQuery);
