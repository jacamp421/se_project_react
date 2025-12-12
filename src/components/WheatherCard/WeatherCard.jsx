import "./WeatherCard.css";
import { weatherOptions, defaultWeather } from "../../utils/constants.js";
function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeather[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  return (
    <div className="weatherCard">
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"} ${
          weatherOption?.condition
        } weather`}
        className="weatherCard__img"
      />
      <p className="weatherCard__temp">{weatherData.temp.F}°</p>
    </div>
  );
}

export default WeatherCard;
