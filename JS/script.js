console.log('-----------------'); 
console.log('work'); 
console.log('-----------------'); 
// slider 1// ----------------

// Слайдер ОТЗЫВЫ
const swiper2 = new Swiper(".hero__swiper", {
  loop: true, 
  speed: 800,
  slidesPerView: 1, 
  centeredSlides: true,
  spaceBetween: 20,
  // autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
      // autoHeight: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
}); 

// Слайдер ОТЗЫВЫ
const swiperNext = new Swiper(".swiper", {
  loop: true,
  speed: 800,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  // autoHeight: true,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
      // autoHeight: false,
    },
  },
  pagination: {
    el: ".reviews-slider-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Слайдер ОТЗЫВЫ
const reviewSquad = new Swiper(".swiper-tree", {
  loop: true, 
  loopedSlides: 1, 
  speed: 800,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  // autoHeight: true,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 1024px
    1100: {
      slidesPerView: 3,
      spaceBetween: 20,
      // autoHeight: false,
    },
  },
  pagination: {
    el: ".swiper-tree-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-tree-button-next",
    prevEl: ".swiper-tree-button-prev",
  },
});