(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
    
      
        	var s = skrollr.init();
       
       $(".video-play-btn").magnificPopup({
           type: 'video', 
        });
       
       
       $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        $('.scrollToTop').on('click', function(){
            $('html, body').animate({scrollTop : 0},900);
            return false;
        });
    }); 
    
    jQuery(window).load(function(){
    
       
        
    });
    
}(jQuery));

 