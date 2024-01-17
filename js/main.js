document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.js-accordion');

  accordionHeaders.forEach((el) => {
    el.querySelector('.accordion__header').addEventListener(
      'click',
      function () {
        const accordionItem = this.parentElement;
        console.log(accordionItem);

        accordionItem.classList.toggle('show');
      }
    );
  });

  function initPopup(btn) {
    const popup = document.querySelector(btn.dataset.popup);

    console.log(btn.dataset.popup);
    if (!popup) return;

    const closeBtn = popup.querySelector('.js-popup-close');
    const popupBg = popup.querySelector('.js-popup-bg');
    let isOpen = false;

    const open = () => {
      document.body.style.overflow = 'hidden';
      popup.classList.add('is-active');
      isOpen = true;
    };

    const close = () => {
      if (isOpen) {
        document.body.style.overflow = 'visible';
        popup.classList.remove('is-active');
        isOpen = false;
      }
    };

    btn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    popupBg.addEventListener('click', close);

    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        close();
      }
    });
  }

  const popupBtns = document.querySelectorAll('.js-popup-btn');

  popupBtns.forEach((el) => {
    console.log(el);
    initPopup(el);
  });

 function testInit() {
    const testContainer = document.querySelector('.test')

    console.log(testContainer);


    if (!testContainer) return;
    
    const testStep = testContainer.querySelectorAll('.js-test-step')
    const inputTest = testContainer.querySelectorAll('input')
    const nextButton = testContainer.querySelector('.js-test-next')
    let currentStep = 0

    console.log(testStep)
    console.log(inputTest)
    console.log(nextButton)

    function showResult() {
      console.log('result')
    }
  

    function nextStep () {
      if (currentStep + 1 > testStep.length - 1) {
        showResult()
        return
      }
      testStep[currentStep].classList.remove('is-active')
      testStep[++currentStep].classList.add('is-active')
      console.log(testStep[currentStep])
    }

    nextButton.addEventListener('click', nextStep) 
 }

 testInit()


})
