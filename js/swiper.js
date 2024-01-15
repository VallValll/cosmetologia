function isMobile() {
  return window.innerWidth <= 1024;
}

function swiperInit() {
  return new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// 1. написать вводную ф-ю для свайпера с его конфигурацией и проверкой на наличие

function sliderInit() {
  const sliderContainer = document.querySelector('.swiper');

  if (!sliderContainer) return;

  let flagInit = false;
  let swiper = null;

  const enabledSwiper = () => {
    swiper = swiperInit();
    flagInit = true;
  };

  const disableSwiper = () => {
    swiper.destroy();
    flagInit = false;
  };

  //   2. сделать проверку на десктоп или моб

  if (isMobile()) {
    enabledSwiper();
  }

  //   3. добавить событие на изменение ширины экрана

  window.addEventListener('resize', (e) => {
    // 4. на том или ином экране включать или отключать слайдер
    if (isMobile() && !flagInit) {
      console.log('mob');
      enabledSwiper();
    } else if (!isMobile() && flagInit) {
      console.log('desk');
      disableSwiper();
    }
  });
}

sliderInit();
