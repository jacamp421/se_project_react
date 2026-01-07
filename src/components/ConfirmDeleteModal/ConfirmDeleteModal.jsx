import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import "./ConfirmDeleteModal.css";

const ConfirmDeleteModal = ({ isOpen, onCancel, onConfirm, itemName }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Are you sure you want to delete this item?
This action is irreversible."
      buttonText="Yes, delete item"
      handleCloseClick={onCancel}
      onSubmit={(e) => {
        e.preventDefault();
        onConfirm();
      }}
      ignoreValidation={true}
      showCancelButton={true}
      customClass="confirm-delete-modal"
    ></ModalWithForm>
  );
};

export default ConfirmDeleteModal;
