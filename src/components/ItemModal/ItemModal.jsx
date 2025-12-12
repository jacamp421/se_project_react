import "../ItemModal/ItemModal.css";

import closeBtnWhite from "../../assets/close__btn-white.svg";
function ItemModal({ isOpen, card, handleCloseClick }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content-item">
        <button
          onClick={handleCloseClick}
          className="modal__close"
          type="button">
          <img
            src={closeBtnWhite}
            alt="Close Button"
            className="modal__close-item"
          />
        </button>
        <div className="pad__cancel">
          <img src={card.link} alt="Clothing Image" className="modal__image" />
        </div>
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Wheather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
