const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const chromeEffect = document.querySelector('#effect-chrome');
const sepiaEffect = document.querySelector('#effect-sepia');
const marvinEffect = document.querySelector('#effect-marvin');
const phobosEffect = document.querySelector('#effect-phobos');
const heatEffect = document.querySelector('#effect-heat');
const noneEffect = document.querySelector('#effect-none');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const image = document.querySelector('.img-upload__preview');
let effect;
let measurement = '';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1
  },
  start: 0,
  step: 0.1,
  connect: 'lower'
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  image.style.filter = `${effect}(${valueElement.value}${measurement})`;
});

noneEffect.addEventListener('click', (evt) => {
  if(evt.target.checked) {
    sliderContainer.classList.add('hidden');
    image.style.removeProperty('filter');
  }
});

chromeEffect.addEventListener ('click', () => {
  sliderContainer.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  });
  image.style.filter = 'grayscale(1)';
  effect = 'grayscale';
  measurement = '';
});

sepiaEffect.addEventListener ('click', () => {
  sliderContainer.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  });
  image.style.filter = 'sepia(1)';
  effect = 'sepia';
  measurement = '';
});

marvinEffect.addEventListener ('click', () => {
  sliderContainer.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1
  });
  image.style.filter = 'invert(100%)';
  measurement = '%';
  effect = 'invert';
});

phobosEffect.addEventListener ('click', () => {
  sliderContainer.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1
  });
  image.style.filter = 'blur(3px)';
  measurement = 'px';
  effect = 'blur';
});

heatEffect.addEventListener ('click', () => {
  sliderContainer.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3
    },
    start: 3,
    step: 0.1
  });
  image.style.filter = 'brightness(3)';
  effect = 'brightness';
  measurement = '';
});
