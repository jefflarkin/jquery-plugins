/***************************************************************************/
/* jQuery Help Bubbbles Plugin                                             */
/* Author: Jeff Larkin <jeff.larkin@gmail.com>                             */
/* When a user hovers over an affected element, a help bubble pops up      */
/* and then fades away after some timeout.  The text in this help bubble   */
/* is read from the data-help attribute of the element.  The resulting     */
/* help bubble is of class help-box.  Below is an example of the necessary */
/* CSS, assumes $(".help").helpBubbles(); .                                */
/*   .help {                                                               */
/*    position: relative;                                                  */
/*  }                                                                      */
/*  .help-bubble {                                                         */
/*    position: absolute;                                                  */
/*    z-index: 2;                                                          */
/*    top: -1.8em;                                                         */
/*    left: .5em;                                                          */
/*    background: #ddaaaa;                                                 */
/*    display: box;                                                        */
/*    float: left;                                                         */
/*    padding: .2em;                                                       */
/*    border: 2px solid navy;                                              */
/*  }                                                                      */
/***************************************************************************/
(function($) {
  $.fn.helpBubbles = function(options){
    options = $.extend({
      delay : 750 /* Delay after mousing out before the bubble fades away */
    }, options);
    return this.each(function(){
      var save = this; /* Delete the correct bubble if multiple are displayed */
      var reset;
      $(this).hover(function(){
        clearTimeout(reset); /* Kill the timeout if we hover back over */
        $(this).append('<span class="help-bubble">' + $(this).attr("data-help") + '</span>');
      }, function() {
        reset = setTimeout(function(){$(".help-bubble",save).fadeOut("slow",function(){$(this).remove()})},options.delay);
      });  
    });
  };
})(jQuery);
