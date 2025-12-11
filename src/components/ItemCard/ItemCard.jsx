import "./ItemCard.css";

function ItemCard({ item }) {
  return (
    <li className="item__container">
      <h2 className="item__container-name">{item.name}</h2>
      <img className="item__container-img" src={item.link} alt={item.name} />
    </li>
  );
}

export default ItemCard;
