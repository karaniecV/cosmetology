var mySwiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
        return '0<span class="' + currentClass + '"></span>' +
                ' / ' +
                '0<span class="' + totalClass + '"></span>';
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

const collapseButton = document.querySelector('.navbar-toggler')
const burgerButton = document.querySelector('.burger')
const closeButton = document.querySelector('.close')
collapseButton.addEventListener('click', e =>{
  e.preventDefault();
  burgerButton.classList.toggle('hidden');
  closeButton.classList.toggle('hidden');
})

const brand = document.querySelector('.brand')
const headerRight = document.querySelector('.header-right')
const whidth = document.documentElement.clientWidth;
  if (whidth < 845) {
    brand.classList.remove('hidden')
    headerRight.classList.add('hidden')
  } else {
    brand.classList.add('hidden')
    headerRight.classList.remove('hidden')
    }
