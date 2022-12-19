// Smooth Scroll on clicking nav items
$('nav a').click(function () {
           var $href = $(this).attr('href');
           $('body').stop().animate({
             scrollTop: $($href).offset().top
           }, 1000);
           return false;
         });
         
         // Parallaxing + add class active on scroll
         $(document).scroll(function () {
           
           // parallaxing
           var $movebg = $(window).scrollTop() * -0.3;
           $('.portion').css('background-positionY', ($movebg) + 'px');
         
           // add class active to nav a on scroll
           var scrollPos = $(document).scrollTop() +100;
           $('nav a').each(function () {
             var currLink = $(this);
             var refElement = $(currLink.attr("href"));
             if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
               $('nav a').removeClass("active");
               currLink.addClass("active");
             }
           });
           
           // changing padding/color of nav a on scroll
             if (scrollPos > 400) {
               $('nav a').addClass('small');
               $('nav span').removeClass('movetext');
               $('nav').addClass('formatnav');
               $('nav img').addClass('move-nav-logo')
             } else {
               $('nav a').removeClass('small');
               $('nav span').addClass('movetext');
               $('nav').removeClass('formatnav');
               $('nav img').removeClass('move-nav-logo')
             }
           
         });
	