import "./ContactFormModal.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactFormModal({ isOpen, onClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        <button type="button" onClick={onClose}>
          X
        </button>
        <label>Name</label>
        <input type="text" placeholder="Enter name" required />
        <label>Contact No.</label>
        <input type="number" placeholder="Enter contact no." />
        <label>Email</label>
        <input type="email" placeholder="Enter email" required />
        <label>Address Line 1</label>
        <input type="text" placeholder="Enter address" required />
        <label>Address Line 2 Optional</label>
        <input type="text" placeholder="Enter address" />
        <label>State</label>
        <input type="text" placeholder="Enter pincode" />
        <label>Pincode</label>
        <input type="submit" placeholder="Enter name" required />
      </form>
    </Modal>
  );
}
