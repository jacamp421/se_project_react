import "../ItemModal/ItemModal.css";

import closeBtnWhite from "../../assets/close__btn-white.svg";
function ItemModal({
  isOpen,
  card,
  handleCloseClick,
  setCardToDelete,
  setIsDeleteModalOpen,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content-item">
        <button
          onClick={handleCloseClick}
          className="modal__close"
          type="button"
        >
          <img
            src={closeBtnWhite}
            alt="Close Button"
            className="modal__close-item"
          />
        </button>
        <div className="pad__cancel">
          <img src={card.link} alt={card.name} className="modal__image" />
        </div>
        <div className="modal__footer">
          <div className="modal__footer-left">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Wheather: {card.weather}</p>
          </div>
          <div className="modal__footer-right">
            <button
              className="modal__delete-button"
              type="button"
              onClick={() => {
                handleCloseClick();
                setCardToDelete(card);
                setIsDeleteModalOpen(true);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
