import { useState } from "react";

import "./ModalWithForm.css";
import closeBtn from "../../assets/close__btn.svg";
function ModalWithForm({
  children,
  buttonText,
  title,
  ignoreValidation = false,
  isOpen,
  handleCloseClick,
  onSubmit,
  showCancelButton = false,
  customClass = "",
}) {
  const [isFormValid, setIsFormValid] = useState(false);

  function handleFormChange(e) {
    const form = e.currentTarget;
    setIsFormValid(form.checkValidity());
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className={`modal__content ${customClass}`}>
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          className="modal__close"
          type="button"
        >
          <img src={closeBtn} alt="Close button" />
        </button>
        <form
          onSubmit={onSubmit}
          className="modal__form"
          onChange={handleFormChange}
        >
          {children}
          <div className="modal__buttons">
            <button
              type="submit"
              className="modal__submit"
              disabled={!ignoreValidation && !isFormValid}
            >
              {buttonText}
            </button>
            {showCancelButton && (
              <button
                type="button"
                onClick={handleCloseClick}
                className="modal__cancel-button"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
