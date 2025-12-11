import "./Main.css";
import WeatherCard from "../WheatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { defaultClothingItems } from "../../utils/constants.js";

function Main({ weatherData }) {
  return (
    <div className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75 &deg; F/ You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            // .filter((item)=>{
            //   return item.weather === weatherData.type
            // })
            .map((item) => {
              return <ItemCard key={item._id} item={item} />;
            })}
        </ul>
      </section>
    </div>
  );
}

export default Main;
