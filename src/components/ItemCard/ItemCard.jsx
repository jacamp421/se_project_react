import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  return (
    <li className="item__container">
      <h2 className="item__container-name">{item.name}</h2>
      <img
        onClick={() => {
          onCardClick(item);
        }}
        className="item__container-img"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
