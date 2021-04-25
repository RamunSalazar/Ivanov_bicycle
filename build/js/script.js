'use strict';
const headerElement = document.querySelector('.header');
const headerToggleElement = document.querySelector('.header__toggle');
const inputPhoneElement = document.querySelector('.header__form-phone');

headerElement.classList.remove('header--nojs');
headerElement.classList.remove('header--open');

headerToggleElement.addEventListener('click', () => {
  if (headerElement.classList.contains('header--open')) {
    headerElement.classList.remove('header--open');
  } else {
    headerElement.classList.add('header--open');
  }
});

/* const validPhone = (phone) => {
  let pattern = (/[\D\d]/);
  return pattern.test(phone);
};

inputPhoneElement.addEventListener('input', () => {
  inputPhoneElement.setCustomValidity('');
  if (validPhone(inputPhoneElement.value)) {
    inputPhoneElement.setCustomValidity('Телефон не должен содержать букв');
  } else {
    inputPhoneElement.setCustomValidity('');
  }
  inputPhoneElement.reportValidity();
}) */
