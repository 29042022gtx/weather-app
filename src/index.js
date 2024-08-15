import './style.css';
import getData from './fetch';
import display from './display';

async function process() {
  let data = await getData('Ho Chi Minh City')
  console.log(data);
  const obj = serveData(data)
  console.log(obj);

  display.pushData(obj, 'celsius');
}

function serveData(data) {
  let idx = 0;
  const resolvedAddress = data.resolvedAddress;
  const icon = 'clear-day';
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

  return obj

}

process()

