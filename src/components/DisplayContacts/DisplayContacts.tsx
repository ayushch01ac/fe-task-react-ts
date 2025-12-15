import { useState } from "react";
import "./DisplayContacts.css";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import DeleteModal from "../BulkDeleteModal/DeleteModal";

export type Contact = {
  id: number;
  fullName: string;
  contact: string;
  email: string;
  address: string;
};

function DisplayContacts({
  contactsList,
  onDelete,
}: {
  contactsList: Contact[];
  onDelete: (id: number) => void;
}) {
  const [deleteId, setDeleteId] = useState<number | null>(null);

  return (
    <>
      <table className="contact-list">
        <thead className="heading">
          <tr>
            <th>
              <input type="checkbox" className="select" />
            </th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th className="actionHead" style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {contactsList.length === 0 ? (
            <tr>
              <td colSpan={6}>No contacts match your search.</td>
            </tr>
          ) : (
            contactsList.map((c) => (
              <tr key={c.id}>
                <td>
                  <input type="checkbox" className="select" />
                </td>
                <td style={{ whiteSpace: "nowrap" }}>{c.fullName}</td>
                <td className="contact">{c.contact}</td>
                <td>{c.email}</td>
                <td>{c.address}</td>
                <td className="action">
                  <button className="edit-delete">
                    <MdEdit />
                    Edit
                  </button>
                  <button
                    className="edit-delete"
                    onClick={() => setDeleteId(c.id)}
                  >
                    <MdDeleteOutline />
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <DeleteModal
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          if (deleteId !== null) {
            onDelete(deleteId);
            setDeleteId(null);
          }
        }}
      />
    </>
  );
}

export default DisplayContacts;

{
  /* <MdDeleteOutline /> */
}
{
  /* <MdEdit /> */
}
