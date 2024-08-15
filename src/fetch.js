async function getData(location) {
  const validLocation = String(location).replaceAll(' ', '%20')
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${validLocation}?unitGroup=us&include=hours&key=MG2KFHHKSRDYZ8RNR894PSWE&contentType=json`;

  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error.message);
  }
}

export default getData;
