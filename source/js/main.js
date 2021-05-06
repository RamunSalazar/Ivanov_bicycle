'use strict';
const headerElement = document.querySelector('.header');
const headerToggleElement = document.querySelector('.header__toggle');
const bodyElement = document.querySelector('body');

headerElement.classList.remove('header--nojs');
headerElement.classList.remove('header--open');

headerToggleElement.addEventListener('click', () => {
  if (headerElement.classList.contains('header--open')) {
    headerElement.classList.remove('header--open');
    bodyElement.classList.remove('body--menu');
  } else {
    headerElement.classList.add('header--open');
    bodyElement.classList.add('body--menu')
  }
});
