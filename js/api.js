const getData = () => fetch(
  'https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json());

const sendData =  (body) =>  fetch(
  'https://29.javascript.pages.academy/kekstagram',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
  })
  .catch(() => {
    throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
  });

export { getData, sendData };
