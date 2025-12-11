import "./SearchContacts.css";

export default function SearchContacts({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <>
      <input
        className="search-box"
        placeholder="Search by name or email ID"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
