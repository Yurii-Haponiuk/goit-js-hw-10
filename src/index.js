import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('.#search-box');
const countriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('click', e => {
    e.preventDefault();
})