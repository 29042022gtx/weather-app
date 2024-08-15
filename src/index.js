import './style.css';
import getData from './fetch';
import jsonData from './data.json';

const info = [
  jsonData.resolvedAddress,
  jsonData.days[0].datetime,
  jsonData.days[0].windspeed,
  jsonData.days[0].temp,
  jsonData.days[0].humidity,
  jsonData.days[0].feelslike,
];
console.log(jsonData);
console.log(info);
//rain cloudy clear-day partly-cloudy-day
