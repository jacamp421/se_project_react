import "./ClothesSection.css";

import ItemCard from "../ItemCard/ItemCard.jsx";

export default function ClothesSection({
  handleCardClick,
  clothingItems,
  handleAddClick,
  weatherData,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__text">Your items</p>
        <button
          onClick={handleAddClick}
          type="button"
          className="clothes-section__button"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item.id} item={item} onCardClick={handleCardClick} />
          );
        })}
      </ul>
    </div>
  );
}
