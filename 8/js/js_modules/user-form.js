const form = document.querySelector('.user-form');
const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;
re.test('JavaScript');
const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    // eslint-disable-next-line
    console.log('Можно отправлять');
  } else {
    // eslint-disable-next-line
    console.log('Форма невалидна');
  }
});


