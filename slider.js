const swiper = new Swiper('.slide-wrapper', { 
    loop: true,
    grabCursor: true,
    spaceBetween:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickale:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPreVive: 1
        },
        620:{
            slidesPreVive: 2
        },
        1024:{
            slidesPreVive: 3
        }

        
    }
    
  });
  