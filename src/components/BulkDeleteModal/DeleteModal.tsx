import "./DeleteModal.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteModal({ isOpen, onClose, onConfirm }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="add-contact-card">
        <h3>Delete Contact</h3>
        <button
          type="button"
          onClick={onClose}
          style={{ padding: 10, margin: 10, backgroundColor: "white" }}
        >
          X
        </button>
      </div>
      <p style={{ color: "black" }}>
        Are you sure you want to delete this contact?
        <br />
        This action cannot be undone
      </p>
      <div className="close-contact-card">
        <button onClick={onClose} style={{ backgroundColor: "white" }}>
          Cancel
        </button>
        <button onClick={onConfirm}>Delete</button>
      </div>
    </Modal>
  );
}
