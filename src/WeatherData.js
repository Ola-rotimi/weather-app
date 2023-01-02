import { useEffect, useState } from "react";
import Weather from "./components/Weather";

function WeatherData() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState([]);
  const [loading, setloading] = useState(false);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const { geolocation } = navigator;
  geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      setLat(latitude);
      setLon(longitude);
    },
    (error) => {
      console.log(error);
    }
  );

  useEffect(() => {
    setloading(true);
    fetch('http://dev.virtualearth.net/REST/v1/locationrecog/'+lat+','+lon+'?key=AliNeAVhHUGHX5qi0lKiw9mlCnrSu7j5ZoJmqZjlSupFkNnuz2NdxB1e6O4ng12T&includeEntityTypes=address&output=json')
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.resourceSets[0].resources[0].addressOfLocation[0].locality + ", " + data.resourceSets[0].resources[0].addressOfLocation[0].countryRegion);
      })
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=0032c02d1eacddebbaba5487acbb790d&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather([data.main, data.weather]);
      })
  }, [lat, lon]);

  if (loading) {
    <h1>Getting current position...</h1>;
  }

  return (
    <div>
        <Weather location={location} weather={weather} />
    </div>
    );
}

export default WeatherData;