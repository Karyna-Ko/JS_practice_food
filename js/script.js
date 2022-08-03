require('es6-promise').polyfill();

import tabs from  './modules/tabs';
import modal from './modules/modal';
import slider from './modules/slider';
import cards from './modules/cards';
import timer from './modules/timer';
import forms from './modules/forms';
import calculator from './modules/calculator';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current'
    });
    cards();
    timer('.timer', '2022-08-05');
    forms('form', modalTimerId);
    calculator();
});  

