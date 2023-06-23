import { Splide } from '@splidejs/splide';

const testimonialsCarousel = new Splide('#testimonials', {
  autoplay: true,
  interval: 15000,
  classes: {
    arrow: 'splide__arrow arrow',
    pagination: 'splide__pagination pagination',
    page: 'splide__pagination__page page',
  },
});
testimonialsCarousel.mount();

// _______________________________________________________________ animations _______________________________________________________________

const animatedElements = document.querySelectorAll('[data-animation]');

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const {
      animation,
      duration = '500ms',
      'timing-function': timingFunction = 'ease-in',
      delay = '500ms',
      'iteration-count': iterationCount = '1',
      direction = 'normal',
      'fill-mode': fillMode = 'backwards',
    } = entry.target.dataset;
    if (entry.isIntersecting) {
      entry.target.style.animation = `${animation} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode}`;
    }
  });
});

animatedElements.forEach((element) => {
  animationObserver.observe(element);
});
