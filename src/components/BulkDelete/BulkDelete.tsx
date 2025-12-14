import "./BulkDelete.css";

export default function BulkDelete({ onClick }: { onClick: () => void }) {
  return (
    <button className="button-box" name="Bulk Delete" onClick={onClick}>
      Bulk Delete
    </button>
  );
}
