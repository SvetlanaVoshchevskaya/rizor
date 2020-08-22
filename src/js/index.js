'use strict';
const ul = document.querySelector('.header__nav-list');

const changeActiveLink = e => {
  e.preventDefault();
  const currentLink = e.target;
  const targetName = currentLink.nodeName;
  if (targetName !== 'A') return;
  activeLink(currentLink);
};

const activeLink = nextLink => {
  const linkActive = ul.querySelector('a.header__nav-link_active');
  if (linkActive) {
    linkActive.classList.remove('header__nav-link_active');
    nextLink.classList.add('header__nav-link_active');
  }
};

ul.addEventListener('click', changeActiveLink);
