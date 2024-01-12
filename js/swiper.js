function isMobile () {
    return window.innerWidth <= 1024;
}

if (isMobile()) {

const swiper = new Swiper('.swiper', {
        loop: true,
      
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      
      });
}