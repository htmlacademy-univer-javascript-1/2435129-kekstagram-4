const wrapper = document.querySelector('.img-upload__wrapper');
const buttonSmaller = wrapper.querySelector('.scale__control--smaller');
const buttonBigger = wrapper.querySelector('.scale__control--bigger');
const scaleValue = wrapper.querySelector('.scale__control--value');
const imageElemement = wrapper.querySelector('.img-upload__preview').querySelector('img');
const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

scaleValue.value = `${DEFAULT_SCALE}%`;
imageElemement.style.transform = `scale(${DEFAULT_SCALE / 100})`;

const scaleImage = function (value) {
  imageElemement.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const makeSmaller = function () {
  const current = parseInt(scaleValue.value, 10);
  const newValue = current - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    scaleImage(MIN_SCALE);
  } else {
    scaleImage(newValue);
  }
};

const makeBigger = function () {
  const current = parseInt(scaleValue.value, 10);
  const newValue = current + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    scaleImage(MAX_SCALE);
  } else {
    scaleImage(newValue);
  }
};

const resetScale = function () {
  return scaleImage(DEFAULT_SCALE);
};

buttonBigger.addEventListener('click', makeBigger);
buttonSmaller.addEventListener('click', makeSmaller);

export { resetScale };
