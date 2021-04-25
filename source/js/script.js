'use strict';
const headerElement = document.querySelector('.header');
const headerToggleElement = document.querySelector('.header__toggle');

headerElement.classList.remove('header--nojs');
headerElement.classList.remove('header--open');

headerToggleElement.addEventListener('click', () => {
  if (headerElement.classList.contains('header--open')) {
    headerElement.classList.remove('header--open');
  } else {
    headerElement.classList.add('header--open');
  }
});
