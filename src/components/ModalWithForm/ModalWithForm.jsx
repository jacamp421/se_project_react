import "./ModalWithForm.css";
import closeBtn from "../../assets/close__btn.svg";
function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  handleCloseClick,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          className="modal__close"
          type="button">
          <img src={closeBtn} alt="Close button" />
        </button>
        <form className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
