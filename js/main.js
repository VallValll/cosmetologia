document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll('.js-accordion');
  
    accordionHeaders.forEach(el => {
      el.querySelector('.accordion__header').addEventListener('click', function() {
        const accordionItem = this.parentElement;
        console.log(accordionItem)
  
        accordionItem.classList.toggle('show');
      });
    });
});


