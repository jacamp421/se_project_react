import "./WeatherCard.css";
import sunCloudy from "../../assets/sun-cloudy.png";

function WeatherCard() {
  return (
    <div className="weatherCard">
      <img src={sunCloudy} alt="sunCloudy" className="weatherCard__img" />
      <p className="weatherCard__temp">50°F</p>
    </div>
  );
}

export default WeatherCard;
