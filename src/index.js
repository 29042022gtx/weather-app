import './style.css';
import getData from './fetch';
import display from './display';

function serveData(data) {
  let idx = 0;
  const resolvedAddress = data.resolvedAddress;
  const icon = data.days[idx].icon;
  const datetime = data.days[idx].datetime;
  const temp = data.days[idx].temp;
  const humidity = data.days[idx].humidity;
  const feelslike = data.days[idx].feelslike;
  const windspeed = data.days[idx].windspeed;

  const obj = {
    resolvedAddress,
    icon,
    datetime,
    windspeed,
    temp,
    humidity,
    feelslike,
  };

  return obj;
}

async function process(location, degree) {
  let data;
  try {
    data = await getData(location);
    const obj = serveData(data);
    display.pushData(obj, degree);
  } catch (error) {
    console.log(error.message);
  }
}

const form = document.querySelector('.input form');
const fahrenheit = form.querySelector('#fahrenheit');
const celsius = form.querySelector('#celsius');
const btn = document.querySelector('button');
let location = form.location.value;
let degree = form.degree.value;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  location = form.location.value;
  process(location, degree);
});

btn.addEventListener('click', () => {
  location = form.location.value;
  process(location, degree);
});

fahrenheit.addEventListener('change', () => {
  degree = 'fahrenheit'
  process(location, degree);
});

celsius.addEventListener('change', () => {
  degree = 'celsius'
  process(location, degree);
});

process('Ho Chi Minh City');
