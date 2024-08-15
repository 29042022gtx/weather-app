import clearDay from './asset/images/clear-day.png';
import rain from './asset/images/rain.png';
import cloudy from './asset/images/cloudy.png';

const images = {
  'clear-day': clearDay,
  rain,
  cloudy,
};
const display = (() => {
  const output = document.querySelector('.output div');

  function clearData() {
    for (let i = output.childNodes.length; i > 0; i--) {
      output.removeChild(output.lastChild)
    }
  }
  
  function pushData({
      resolvedAddress,
      icon,
      datetime,
      windspeed,
      temp,
      humidity,
      feelslike,
    }, degree) {
    clearData()
    const img = createIcon(icon);
    output.append(img);

    const addressDiv = createDiv('address');
    addressDiv.textContent = resolvedAddress;

    const datatimeDiv = createDiv('datetime');
    datatimeDiv.textContent = `Date: ${datetime}`;

    const windspeedDiv = createDiv('windspeed');
    windspeedDiv.textContent = `Wind speed: ${windspeed}`;

    const tempDiv = createDiv('temp');
    tempDiv.textContent = `Temp: ${getTempString(temp, degree)}`;

    const humidityDiv = createDiv('humidity');
    humidityDiv.textContent = `Humidity: ${humidity}%`;

    const feelslikeDiv = createDiv('feelslike');
    feelslikeDiv.textContent = `Feels like: ${getTempString(feelslike, degree)}`;

    const info = createDiv('info');
    info.append(addressDiv, datatimeDiv, windspeedDiv, tempDiv, humidityDiv, feelslikeDiv);
    output.append(info);
  }

  function createDiv(className) {
    const div = document.createElement('div');
    if (className != null) {
      div.className = String(className);
    }
    return div;
  }

  function createIcon(icon) {
    const img = document.createElement('img')
    if (icon in images) {
      img.src = images[icon];
    } else {
      img.src = images.cloudy;
    }
    return img
  }

  function getTempString(temp, degree) {
    if (degree === 'celsius') {
      let celsiusTemp = 5 / 9 * (temp - 32)
      return `${round(celsiusTemp, 1)}℃`
    }
    return `${round(temp, 1)}℉`
  }

  function round(num, count) {
    const pow = 10**count
    return Math.round(num * pow) / pow
  }

  return { pushData };
})();

export default display;
