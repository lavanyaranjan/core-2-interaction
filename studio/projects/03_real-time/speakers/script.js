// Function to fetch data from the API
async function fetchAirPollutionData(lat, lon, apiKey) {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching air pollution data:', error);
      return null;
    }
  }
  
  // New function to fetch NYC pollution data
  async function fetchNYCPollutionData(lat, lon, apiKey) {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching NYC air pollution data:', error);
      return null;
    }
  }
  
  function insertDataIntoHTML(sunnyFarmData, nycData) {
    const sunnyFarmLandfillsDiv = document.querySelector('.sunny-farm-landfills');
    const newYorkCityDiv = document.querySelector('.new-york-city');
  
    if (sunnyFarmLandfillsDiv && newYorkCityDiv) {
      // Assuming the data structure matches the API response
      sunnyFarmLandfillsDiv.innerHTML = `
        <div>SFL Air Quality Index: ${sunnyFarmData.list[0].main.aqi}</div>
        <div>SFL Air Quality: ${sunnyFarmData.list[0].components.pm2_5}</div>
      `;
  
      newYorkCityDiv.innerHTML = `
        <div>NYC Air Quality Index: ${nycData.list[0].main.aqi}</div>
        <div>NYC Air Quality: ${nycData.list[0].components.pm2_5}</div>
      `;
    }
  }
  
  // Updated function to initiate the process
  async function main() {
    const lat1 = 41.0986111;
    const lon1 = -83.4105556;
    const lat2 = 40.7128;
    const lon2 = -74.0060;
    const apiKey = '08a21aaae9b8305ef47991a302b280aa';
  
    const sunnyFarmData = await fetchAirPollutionData(lat1, lon1, apiKey);
    const nycData = await fetchNYCPollutionData(lat2, lon2, apiKey);
  
    if (sunnyFarmData && nycData) {
      insertDataIntoHTML(sunnyFarmData, nycData);
    } else {
      console.error('Failed to fetch air pollution data.');
    }
  }
  
  // Call the main function
  main();
  
  function getSaturationLevel(aqi) {
    if (aqi <= 50) {
      return 1; // 100% saturation
    } else if (aqi <= 100) {
      return 1.2; // 120% saturation
    } else if (aqi <= 150) {
      return 1.4; // 140% saturation
    } else if (aqi <= 200) {
      return 1.6; // 160% saturation
    } else if (aqi <= 300) {
      return 1.8; // 180% saturation
    } else {
      return 2; // 200% saturation
    }
  }
  
  function insertDataIntoHTML(sunnyFarmData, nycData) {
    const sunnyFarmLandfillsDiv = document.querySelector('.sunny-farm-landfills');
    const newYorkCityDiv = document.querySelector('.new-york-city');
    const body = document.querySelector('body');
  
    if (sunnyFarmLandfillsDiv && newYorkCityDiv) {
      const sunnyFarmAqi = sunnyFarmData.list[0].main.aqi;
      const nycAqi = nycData.list[0].main.aqi;
  
      sunnyFarmLandfillsDiv.innerHTML = `
        <div>Air Quality Index: ${sunnyFarmAqi}</div>
        <div>Air Quality: ${sunnyFarmData.list[0].components.pm2_5}</div>
      `;
  
      newYorkCityDiv.innerHTML = `
        <div>NYC Air Quality Index: ${nycAqi}</div>
        <div>NYC Air Quality: ${nycData.list[0].components.pm2_5}</div>
      `;
  
      // Apply saturation level based on Sunny Farm Landfills AQI
      const saturationLevel = getSaturationLevel(sunnyFarmAqi);
      body.style.filter = `saturate(${saturationLevel})`;
    }
  }