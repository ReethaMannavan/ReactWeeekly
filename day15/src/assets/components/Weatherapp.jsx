import { useState,useEffect } from 'react';

const API_KEY = "6b8475d1939bb5502208fc73e60459e5"; 

const WeatherApp=() =>{
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
  if (!weather && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLoading(true);
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
          .then((res) => res.json())
          .then((data) => setWeather(data))
          .catch((err) => setError('Failed to fetch weather from location'))
          .finally(() => setLoading(false));
      },
      () => setError('Location permission denied')
    );
  }
}, []);
//   const fetchWeather = (e) => {
//     e.preventDefault();
//     if (!city.trim()) return;

//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('City not found');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setWeather(data);
//         setError('');
//       })
//       .catch((err) => {
//         setWeather(null);
//         setError(err.message);
//       });
//   };

const fetchWeather = (e) => {
  e.preventDefault();
  if (!city.trim()) return;

  setLoading(true);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then((data) => {
      setWeather(data);
      setError('');
    })
    .catch((err) => {
      setWeather(null);
      setError(err.message);
    })
    .finally(() => setLoading(false));
};

  return (
    <div className="weather-container">

        
      <h1>3.Weather App</h1>
      <form onSubmit={fetchWeather} className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
        />
        <button type="submit" className="fetch-btn">Get Weather</button>
      </form>

      {error && <p className="error-msg">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p><strong>Temperature:</strong> {weather.main.temp}°C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
        </div>
      )}

      {loading && <div className="loading-spinner">Loading...</div>}
    </div>
  );
}

export default WeatherApp;