/***************************************************************************/
/* jQuery Foot Notes Plugin                                                */
/* Author: Jeff Larkin <jeff.larkin@gmail.com>                             */
/* This plugin inserts a footnote number to affected elements based on the */
/* value of an li element which is linked to using an in-page link.  It    */
/* also adds a buble with the value of the footnote when the user hovers   */
/* over an affected element.  The following CSS is necessary and assumes   */
/* $(".footnote").footNotes();                                             */
/*  .footnote {                                                            */
/*    position: relative;                                                  */
/*  }                                                                      */
/*  .footnote-bubble {                                                     */
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
/* Here is the necessary HTML:                                             */
/* <a href="#first" class="footnote">Foo</a>                               */
/* ...                                                                     */
/* <ol>                                                                    */
/*   <li id="first">Bar</li>                                               */
/* </ol>                                                                   */
/***************************************************************************/
(function($) {
  $.fn.footNotes = function(options){
    options = $.extend({
      delay : 750 /* Delay after mousing out before the bubble fades away */
    }, options);
    return this.each(function(){
      /* Get index of the footnote and append it to the element */
      var elem = $($(this).attr("href")),
          index = elem.index() + 1;
      $(this).append('<sup>['+index+']</sup>');

      var save = this; /* Delete the correct bubble if multiple are displayed */
      var reset;
      $(this).hover(function(){
        clearTimeout(reset); /* Kill the timeout if we hover back over */
        $(this).append('<span class="footnote-bubble">[' + index + '] ' + elem.html() + '</span>');
      }, function() {
        reset = setTimeout(function(){$(".footnote-bubble",save).fadeOut("slow",function(){$(this).remove()})},options.delay);
      });  
      
    });
  };
})(jQuery);
