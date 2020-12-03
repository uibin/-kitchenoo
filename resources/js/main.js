$(document).ready(function(){


  $(window).on('resize', function(){
    var iw = window.innerWidth;
    var rootScreenWidth = 1366;
    var rootFontPercentage = 44.46;     
   
    if (iw <= 1366) {
        $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);
        
    }else{
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);    
    }
  })
  

    // Responsive html font size
    var iw = window.innerWidth;
    var rootScreenWidth = 1366;
    var rootFontPercentage = 44.46;     
   
    if (iw <= 1366) {
        $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);
        
    }else{
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);    
    }
        
    // Responsive html font size end

    $('#testimonial_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrow: true,
        prevArrow: $('#slider_left_btn'),
        nextArrow: $('#slider_right_btn')
      });


});