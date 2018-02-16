'use strict';
(function ($) {
   $('#hamburger').click(function () {//показ меню по клику
      $('#menu').toggleClass('menu--on').fadeToggle(200);
   }); 
   
   $('#menuBtn').click(function () {//скрыть меню по клику
      $('#menu').removeClass('menu--on').fadeToggle(200);
   });
   
   
})(jQuery);
