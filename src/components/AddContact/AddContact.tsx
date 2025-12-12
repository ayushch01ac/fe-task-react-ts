import "./AddContact.css";

export default function AddContact({ onClick }: { onClick: () => void }) {
  return (
    <button className="button-box" name="Add Contact" onClick={onClick}>
      Add Contact
    </button>
  );
}
