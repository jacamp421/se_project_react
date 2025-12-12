import "../ItemModal/ItemModal.css";

import closeBtnWhite from "../../assets/close__btn-white.svg";
function ItemModal({ activeModal, card, handleCloseClick }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content-item">
        <button
          onClick={handleCloseClick}
          className="modal__close"
          type="button">
          <img src={closeBtnWhite} alt="X" className="modal__close-item" />
        </button>
        <div className="pad__cancel">
          <img src={card.link} alt="Image" className="modal__image" />
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
