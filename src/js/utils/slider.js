import Splide from '@splidejs/splide';

export const Slider = () => {
  const sliders = document.querySelectorAll('.splide');
  sliders.forEach((slider) => {
    new Splide( slider ).mount();
  })
}
