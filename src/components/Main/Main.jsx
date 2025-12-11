<<<<<<< HEAD
import "./Main.css"
import WeatherCard from "../WheatherCard/WeatherCard.jsx";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { defaultClothingItems } from "../../utils/constants.js";

function Main({weatherData}) {
=======
import WeatherCard from "../WheatherCard/WeatherCard.jsx";
import { defaultClothingItems } from "../../utils/constants.js";

function Main() {
>>>>>>> origin/master
  return (
    <div className="main">
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">
          Today is 75 &deg; F/ You may want to wear:
        </p>
<<<<<<< HEAD
        <ul className="cards__list">
          {defaultClothingItems
          // .filter((item)=>{
          //   return item.weather === weatherData.type
          // })
          .map((item) => {
            return (
              <ItemCard key={item._id} item={item}/>
=======
        <ul className="card__list">
          {defaultClothingItems.map((item) => {
            return (
              <div key={item._id}>
                <h2>{item.name}</h2>
                <img src={item.link} alt={item.name} />
              </div>
>>>>>>> origin/master
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Main;
