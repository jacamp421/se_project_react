import "../ItemModal/ItemModal.css";
import closeBtn from "../../assets/close__btn.svg";
function ItemModal({ activeModal, card, handleCloseClick }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content_type_image">
        <button
          onClick={handleCloseClick}
          className="modal__close"
          type="button">
          <img src={closeBtn} alt="" />
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
