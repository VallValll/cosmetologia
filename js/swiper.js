function isMobile() {
  return window.innerWidth <= 1024;
}

function swiperInit(el) {
  const pagination = {
    pagination: {
      el: el.querySelector('.slider__pagination'),
      clickable: true,
    },
  };

  return new Swiper(el.querySelector('.swiper'), {
    loop: true,
    spaceBetween: 20,
    ...(el.dataset.pagination ? pagination : {}),
    navigation: {
      nextEl: el.querySelector('.slider__button--next'),
      prevEl: el.querySelector('.slider__button--prev'),
    },
  });
}

// 1. написать вводную ф-ю для свайпера с его конфигурацией и проверкой на наличие

function sliderInit(el) {
  let flagInit = false;
  let swiper = null;

  const isDevice = () => {
    return el.dataset.device === 'mobile' ? isMobile() : !isMobile();
  };

  const enabledSwiper = () => {
    swiper = swiperInit(el);
    flagInit = true;
  };

  const disableSwiper = () => {
    swiper.destroy();
    flagInit = false;
  };

  //   2. сделать проверку на десктоп или моб

  if (el.dataset.device) {
    if (isDevice()) {
      enabledSwiper();
    }
  } else {
    enabledSwiper();
  }

  // 4. на том или ином экране включать или отключать слайдер
  if (el.dataset.device) {
    window.addEventListener('resize', (e) => {
      if (isDevice() && !flagInit) {
        console.log('mob');
        enabledSwiper();
      } else if (!isDevice() && flagInit) {
        console.log('desk');
        disableSwiper();
      }
    });
  }
}

const sliders = document.querySelectorAll('.slider');

sliders.forEach((el) => sliderInit(el));
