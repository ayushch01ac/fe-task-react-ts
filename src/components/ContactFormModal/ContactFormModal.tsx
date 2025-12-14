import { useState } from "react";
import type { Contact } from "../DisplayContacts/DisplayContacts";
import "./ContactFormModal.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onAddContact: (contact: Omit<Contact, "id">) => void;
};

export default function ContactFormModal({
  isOpen,
  onClose,
  onAddContact,
}: Props) {
  const [form, setForm] = useState<Omit<Contact, "id">>({
    fullName: "",
    contact: "",
    email: "",
    address: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onAddContact(form);
    onClose();
    setForm({ fullName: "", contact: "", email: "", address: "" });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="add-contact-card">
        <h3>Add Contact</h3>
        <button
          type="button"
          onClick={onClose}
          style={{ padding: 10, margin: 10 }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
        />
        <label>Contact No.</label>
        <input
          type="number"
          placeholder="Enter contact no."
          name="contact"
          value={form.contact}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <label>Address Line 1</label>
        <input
          type="text"
          placeholder="Enter address"
          name="address"
          required
          value={form.address}
          onChange={handleChange}
        />
        <div className="close-contact-card">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Save Contact</button>
        </div>
      </form>
    </Modal>
  );
}

// type Props = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function ContactFormModal({ isOpen, onClose }: Props) {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       className="modal"
//       overlayClassName="overlay"
//     >
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onClose();
//         }}
//       >
//         <button type="button" onClick={onClose}>
//           X
//         </button>
//         <label>Name</label>
//         <input type="text" placeholder="Enter name" required />
//         <label>Contact No.</label>
//         <input type="number" placeholder="Enter contact no." />
//         <label>Email</label>
//         <input type="email" placeholder="Enter email" required />
//         <label>Address Line 1</label>
//         <input type="text" placeholder="Enter address" required />
//         <label>Address Line 2 Optional</label>
//         <input type="text" placeholder="Enter address" />
//         <label>State</label>
//         <input type="text" placeholder="Enter pincode" />
//         <label>Pincode</label>
//         <input type="submit" placeholder="Enter name" required />
//       </form>
//     </Modal>
//   );
// }
