import "./ItemCard.css";
<<<<<<< HEAD
function ItemCard({ item }) {
  return (
    <li className="item__container">
      <h2 className="item__container-name">{item.name}</h2>
      <img className="item__container-img" src={item.link} alt={item.name} />
    </li>
=======
import cap from "../../assets/cap.png";
import shirt from "../../assets/shirt.png";
import shorts from "../../assets/shorts.png";
import sneakers from "../../assets/sneakers.png";

function ItemCard() {
  return (
    <div>
      <div className="itemCard">
        <p className="itemCard__text">T-shirt</p>
        <img src={shirt} alt="Shirt" className="itemCard__image" />
      </div>
      <div className="itemCard">
        <p className="itemCard__text">T-shirt</p>
        <img src={shirt} alt="Shirt" className="itemCard__image" />
      </div>
    </div>
>>>>>>> origin/master
  );
}

export default ItemCard;
