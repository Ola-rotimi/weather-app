import { GrLocation } from "react-icons/gr";

function Weather(prop) {
  return (
    <div className="weather">
      <p>
        <GrLocation />
        {prop.location}
      </p>
      <p>Today</p>
      <div className="weather--details">
      <section>
        {prop.weather[0] && prop.weather[1] && (
          <div>
            <img
              src={`http://openweathermap.org/img/w/${prop.weather[1][0].icon}.png`}
              alt="weather icon"
            />
            <h1>{prop.weather[1][0].main}</h1>
            <h2>{prop.weather[0].temp}°C</h2>
          </div>
        )}
      </section>
      <section>
        {prop.weather[0] && prop.weather[1] && (
          <div>
            <h4>Feels like {prop.weather[0].feels_like}°C</h4>
            <h4>Humidity: {prop.weather[0].humidity}%</h4>
            <h4>
              H:{prop.weather[0].temp_max}°C L:{prop.weather[0].temp_min}°C
            </h4>
          </div>
        )}
      </section>
      </div>
    </div>
  );
}

export default Weather;