function Weather(prop) {
  return (
    <div className="weather">
      {prop.location}
      <br />
      {prop.weather[0] && prop.weather[1] && (
        <div>
          <h1>{prop.weather[1][0].main}</h1>
          <h2>{prop.weather[0].temp}°C</h2>
          <h3>Feels like {prop.weather[0].feels_like}°C</h3>
          <h4>Humidity: {prop.weather[0].humidity}%</h4>
          <h4>Max Temperature: {prop.weather[0].temp_max}°C</h4>
          <h4>Min Temperature: {prop.weather[0].temp_min}°C</h4>
        </div>
      )}
    </div>
  );
}

export default Weather;
