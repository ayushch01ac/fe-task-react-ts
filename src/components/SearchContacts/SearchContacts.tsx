import "./SearchContacts.css";

export default function SearchContacts({
  value,
  onChange,
  onEnter,
}: {
  value: string;
  onChange: (v: string) => void;
  onEnter: () => void;
}) {
  return (
    <>
      <input
        className="search-box"
        placeholder="Search by name or email ID (Press Enter)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEnter();
          }
        }}
      />
    </>
  );
}
