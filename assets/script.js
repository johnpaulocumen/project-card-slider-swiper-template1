const swiper = new Swiper('.project-slider', {
    loop: true, // Enable infinite loop
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 20,
    on: {
      slideChangeTransitionStart: function () {
        const slides = document.querySelectorAll('.project-slide');
        slides.forEach((slide) => {
          if (!slide.classList.contains('swiper-slide-active')) {
            slide.style.visibility = 'hidden';
            slide.style.opacity = '0';
          }
        });
      },
      slideChangeTransitionEnd: function () {
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
          activeSlide.style.visibility = 'visible';
          activeSlide.style.opacity = '1';
        }
      },
    },
  });
  