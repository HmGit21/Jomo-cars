
$(function(){
    //menu searching box
    let searchBox = $('.box_searching');

    $('.search').on('click', function(){
        searchBox.slideDown(500);
    });
    $('.cross').on('click', function(){
        searchBox.slideUp(500);
    });
    // when scroll top then fit the searchbox
    $(window).scroll(function(){
        $scrollTop = $(this).scrollTop();

        if($scrollTop > $menuTop){
            $('.box_searching').addClass('active');
        }else{
            $('.box_searching').removeClass('active');
        }
    });

    // menu bar fixed
    let menuDesign = $('#main_nav');
    $menuTop = menuDesign.offset().top;

    $(window).on('scroll', function(){
        $scrollTop = $(this).scrollTop();

        //menu fixed top
        if($scrollTop > $menuTop){
            menuDesign.addClass('active');
        }else{
            menuDesign.removeClass('active');
        }

        //back top button
        
        if($scrollTop > 500){
            backTop.fadeIn(500);
            backTop.addClass('active');
        }else{
            backTop.fadeOut(500)
            backTop.removeClass('active');
        }
       
    });
    //back to top
    let backTop = $('.back_top');

    backTop.on('click', function(){
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
    });

    //preeloader
    $(window).on('load', function(){
        $('.preeloader').delay(1000).fadeOut(500);
    });
   //slick slider
   $('.main_slider').slick({
       dots : true,
       arrows : true,
       autoplay : true,
       autoplaySpeed : 2000,
       slideToShow : 1,
       prevArrow : '<i class="fas fa-chevron-left arrow arrow_left"></i>',
       nextArrow : '<i class="fas fa-chevron-right arrow arrow_right"></i>',
       dotsClass : 'slide_dot',
   });
   // slick client slide
	$('.client_slide').slick({
        autoplay : true,
        autoplaySpeed : 2000,
        slidesToShow : 4,
        arrows :false,
    });
    // swiper
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      }); //swiper
     // vexbox/lightbox popup
     $('.myBike').venobox({
        framewidth : '400px',
        frameheight: '300px',
        border     : '10px',
        bgcolor    : '#03DE1C',
        titleattr: 'data-title',
        share      : ['facebook', 'twitter', 'download']        
     }); 
     // filterizR 
     $('.filter-container').filterizr();
     let filter = $('.filter_menu ul li');
     filter.click(function(){
         filter.removeClass('active');
         $(this).addClass('active');
     });
     // aos animation
     AOS.init();
     // counter up js
     $('.counter').counterUp({
        delay: 20,
        time: 2000
     });
});
