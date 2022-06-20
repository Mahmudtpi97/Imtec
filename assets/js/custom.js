// (function($){ 
  $(document).ready(function(){

  // Mobile Menu
  $('.menu').click(function(){
    $('body').addClass('body');
   $('.mobile-menu-area').show(500);
  });

   $('#mobile-menu-close').click(function(){
   $('.mobile-menu-area').hide(500);
   $('body').removeClass('body');
     });
  // Mobile Menu Slider Dropdown
    $('#mobile-menu-icon').click(function(){
    	$('.dropdown').slideToggle(500);
    	$(this).css('transition','.1s');
      $(this).toggleClass('nav-icon');
    });  


   //Nav Menu Dropdown
     $('#nav-icon').click(function(){
      $('.dropdown').fadeToggle(500);
      $(this).css('transition','.1s');
      $(this).toggleClass('nav-icon');
    }); 
    // Footer Dropdown
    $('#nav-icon-two').click(function(){
    	$('.child-dropdown').slideToggle(1000);
    	$(this).css('transition','.1s');
      $(this).toggleClass('nav-icon');
    });

  // Slide Shop Area
   $('.shop').click(function(){
   	$('body').addClass('body');
     $('.slide-shop-area').show(500); 
   });

   $('#shop-close').click(function(){
     $('.slide-shop-area').hide(500);
     $('body').removeClass('body');
   });


   // Carousel Area
    $('.header-carousel').owlCarousel({
  	 loop:true,
  	 items:1,
  	 autoPlay:true,
  	 nav:false,
  	 dots:true,
  	 nav:true,
   });
  $('.service-carousel').owlCarousel({
  	looo:true,
  	items:1,
  	dots:true,
  });
  $('.tienda-carousel').owlCarousel({
  	looo:true,
  	items:1,
  	dots:true,
  });

  $('.nosotros-service-carousel').owlCarousel({
  	looo:true,
  	items:1,
  	dots:true,
  });


  // Tienda Page Menu
  $('#tienda-menu').click(function(){
     $('.tienda-menu').slideToggle();
  });

  // Tienda Sells Page Mixitup
  var options = {
      animation:{
            enable: true,
             easing: 'cubic-bezier(0.645,0.045,0.355,1)'
        },
        load: {
            filter: '.first'
        },
    };
    var mixer = mixitup('.big-mix',options);

});
  // (jQuery);