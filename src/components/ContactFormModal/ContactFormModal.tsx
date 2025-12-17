import { useState } from "react";
import "./ContactFormModal.css";
import Modal from "react-modal";
import type { Contact } from "../../types/contact";

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
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!address1.trim()) {
      alert("Address Line 1 is required");
      return;
    }

    if (!pincode.trim()) {
      alert("Pincode is required");
      return;
    }
    const fullAddress = [address1, address2, state, pincode]
      .map((item) => item.trim())
      .filter(Boolean)
      .join(", ");

    onAddContact({
      ...form,
      address: fullAddress,
    });

    setForm({ fullName: "", contact: "", email: "", address: "" });
    setAddress1("");
    setAddress2("");
    setState("");
    setPincode("");
    onClose();
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
          style={{
            padding: 10,
            margin: 10,
            backgroundColor: "white",
            color: "red",
          }}
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <div className="field">
            <label className="form-fields">
              Name<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label className="form-fields">Contact No.</label>
            <input
              type="number"
              placeholder="Enter contact no."
              name="contact"
              value={form.contact}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label className="form-fields">
              Email<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label className="form-fields">
              Address Line 1<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter address"
              required
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="form-fields">Address Line 2</label>
            <input
              type="text"
              placeholder="Enter address"
              required
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="form-fields">State</label>
            <input
              type="text"
              placeholder="Enter state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="form-fields">
              Pincode<span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="close-contact-card">
          <button
            type="button"
            onClick={onClose}
            style={{ backgroundColor: "white" }}
          >
            Cancel
          </button>
          <button type="submit" style={{ color: "white" }}>
            Save Contact
          </button>
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
