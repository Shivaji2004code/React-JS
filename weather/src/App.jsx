import React, { useState } from 'react';
import countryCapitals from './Countries';

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [weather, setWeather] = useState(null);
  const [showCountry, setShowCountry] = useState("");
  const [showCity, setShowCity] = useState("");

  const countries = Object.keys(countryCapitals);

  const fetchWeather = async () => {
    const { lat, lon } = countryCapitals[selectedCountry];


    setShowCountry(selectedCountry);
    setShowCity(countryCapitals[selectedCountry].capital);

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data.current_weather); 
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-semibold mb-4">Select a Country to View Weather</h2>

      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="mb-4 p-2 border rounded shadow-sm"
      >
        <option value="">-- Select a Country --</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>

      <button
        onClick={fetchWeather}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-700 transition"
      >
        Get Data
      </button>

      {weather && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
          <h3 className="text-xl font-bold mb-2">{showCountry}</h3>
          <p className="text-gray-600 mb-1">
            🏙 Capital: <strong>{showCity}</strong>
          </p>
          <p className="text-gray-700 mb-1">
            🌡 Temperature: <strong>{weather.temperature}°C</strong>
          </p>
          <p className="text-gray-700">
            💨 Wind Speed: <strong>{weather.windspeed} km/h</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
